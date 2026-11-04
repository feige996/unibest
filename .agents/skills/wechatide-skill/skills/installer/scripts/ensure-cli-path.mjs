#!/usr/bin/env node

/**
 * 确保 wechatide 可在 PATH 中直接调用。
 *
 * macOS（尤其是 DMG 拖装，无 PKG postinstall）：
 *   对齐 build.osx.pkg.js：ln -sf <App>/Contents/MacOS/wechatide → /usr/local/bin/wechatide
 *   /usr/local/bin 无写权限时退到 ~/.local/bin，并写入 shell rc
 *
 * Windows：
 *   将安装目录加入用户 PATH（使 wechatide.cmd 可被 where 找到）
 *
 * 用法:
 *   node skills/installer/scripts/ensure-cli-path.mjs
 *   node skills/installer/scripts/ensure-cli-path.mjs --check
 *   node skills/installer/scripts/ensure-cli-path.mjs --install-root "/Applications/wechatwebdevtools.app"
 */

import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

import {
  normalizePlatform,
  resolveInstallRoot,
  resolveWechatideFromPath
} from './install-root.mjs'

function parseArgs(argv = process.argv.slice(2)) {
  const options = {
    platform: process.platform,
    installRoot: '',
    check: false
  }

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--check') {
      options.check = true
      continue
    }
    if (!['--platform', '--install-root'].includes(arg)) {
      throw new Error(`未知参数：${arg}`)
    }
    const value = argv[index + 1]
    if (!value || value.startsWith('--')) {
      throw new Error(`参数 ${arg} 缺少值`)
    }
    if (arg === '--platform') {
      options.platform = value
    } else {
      options.installRoot = path.resolve(value)
    }
    index += 1
  }

  options.platform = normalizePlatform(options.platform)
  return options
}

function result(ok, extra = {}) {
  return { ok, ...extra }
}

function readLinkTarget(linkPath) {
  try {
    return fs.realpathSync(linkPath)
  } catch {
    try {
      return fs.readlinkSync(linkPath)
    } catch {
      return null
    }
  }
}

function samePath(left, right) {
  if (!left || !right) {
    return false
  }
  if (process.platform === 'win32') {
    return path.normalize(left).toLowerCase() === path.normalize(right).toLowerCase()
  }
  try {
    return fs.realpathSync(left) === fs.realpathSync(right)
  } catch {
    return path.normalize(left) === path.normalize(right)
  }
}

function isWritableDir(dir) {
  try {
    fs.mkdirSync(dir, { recursive: true })
    fs.accessSync(dir, fs.constants.W_OK)
    return true
  } catch {
    return false
  }
}

function detectShellRc() {
  const home = os.homedir()
  const shell = path.basename(process.env.SHELL || 'zsh')
  if (shell === 'zsh') {
    return path.join(home, '.zshrc')
  }
  if (shell === 'fish') {
    return path.join(home, '.config', 'fish', 'conf.d', 'wechatide.fish')
  }
  for (const name of ['.bashrc', '.bash_profile', '.profile']) {
    const candidate = path.join(home, name)
    if (fs.existsSync(candidate)) {
      return candidate
    }
  }
  return path.join(home, '.bashrc')
}

function ensureDirInPathUnix(binDir) {
  const pathDirs = (process.env.PATH || '').split(path.delimiter).filter(Boolean)
  const already = pathDirs.some(dir => samePath(dir, binDir))
  if (already) {
    return { pathUpdated: false, rcFile: null }
  }

  const shell = path.basename(process.env.SHELL || 'zsh')
  const rcFile = detectShellRc()
  const exportLine = shell === 'fish'
    ? `fish_add_path ${binDir}`
    : `export PATH="$PATH:${binDir}"`

  if (fs.existsSync(rcFile)) {
    const content = fs.readFileSync(rcFile, 'utf8')
    if (content.includes(binDir)) {
      process.env.PATH = `${process.env.PATH || ''}${path.delimiter}${binDir}`
      return { pathUpdated: false, rcFile, alreadyConfigured: true }
    }
  }

  fs.mkdirSync(path.dirname(rcFile), { recursive: true })
  fs.appendFileSync(rcFile, `\n# wechatide CLI\n${exportLine}\n`)
  process.env.PATH = `${process.env.PATH || ''}${path.delimiter}${binDir}`
  return { pathUpdated: true, rcFile }
}

function createUnixSymlink(linkPath, targetPath) {
  let existing
  try {
    existing = fs.lstatSync(linkPath)
  } catch {
    existing = null
  }
  if (existing) {
    const current = readLinkTarget(linkPath)
    if (samePath(current, targetPath)) {
      return { created: false, linkPath, targetPath }
    }
    fs.rmSync(linkPath, { force: true })
  }
  fs.symlinkSync(targetPath, linkPath)
  return { created: true, linkPath, targetPath }
}

function getLegacyCliPath(platform, installRoot) {
  if (platform === 'darwin') {
    return path.join(installRoot, 'Contents', 'MacOS', 'wechatidecli')
  }
  return null
}

function ensureDarwin(install) {
  const targetPath = install.wechatidePath
  const pathCommand = resolveWechatideFromPath()
  if (pathCommand) {
    const resolved = readLinkTarget(pathCommand) || pathCommand
    if (samePath(resolved, targetPath)) {
      return result(true, {
        action: 'already_linked',
        command: 'wechatide',
        linkPath: pathCommand,
        targetPath,
        commandReady: true
      })
    }
  }

  const legacyTarget = getLegacyCliPath(install.platform, install.installRoot)
  const preferredBin = '/usr/local/bin'
  const fallbackBin = path.join(os.homedir(), '.local', 'bin')
  const binDir = isWritableDir(preferredBin) ? preferredBin : fallbackBin

  if (!isWritableDir(binDir)) {
    return result(false, {
      action: 'failed',
      error: `无法写入 ${preferredBin} 或 ${fallbackBin}，请手动执行：ln -sf "${targetPath}" /usr/local/bin/wechatide`,
      targetPath
    })
  }

  const link = createUnixSymlink(path.join(binDir, 'wechatide'), targetPath)
  let legacyLink
  if (legacyTarget && fs.existsSync(legacyTarget)) {
    legacyLink = createUnixSymlink(path.join(binDir, 'wechatidecli'), legacyTarget)
  }

  let pathInfo = { pathUpdated: false, rcFile: null }
  if (binDir !== preferredBin) {
    pathInfo = ensureDirInPathUnix(binDir)
  }

  const linkedCommand = resolveWechatideFromPath()
  const commandReady = Boolean(
    linkedCommand
      && samePath(readLinkTarget(linkedCommand) || linkedCommand, targetPath)
  )

  return result(true, {
    action: link.created || legacyLink?.created || pathInfo.pathUpdated
      ? 'linked'
      : 'already_linked',
    command: 'wechatide',
    linkPath: link.linkPath,
    targetPath,
    legacyLinkPath: legacyLink?.linkPath,
    binDir,
    pathUpdated: pathInfo.pathUpdated,
    rcFile: pathInfo.rcFile || undefined,
    pathHint: pathInfo.pathUpdated || pathInfo.alreadyConfigured
      ? '新开终端后 wechatide 生效；当前会话可先 source 对应 rc，或直接用 targetPath'
      : undefined,
    commandReady
  })
}

function readWindowsUserPath() {
  const result = spawnSync(
    'powershell.exe',
    [
      '-NoProfile',
      '-Command',
      '[Environment]::GetEnvironmentVariable("Path","User")'
    ],
    {
      encoding: 'utf8',
      timeout: 15_000,
      windowsHide: true
    }
  )
  if (result.error || result.status !== 0) {
    throw new Error(result.error?.message || (result.stderr || '读取用户 PATH 失败').trim())
  }
  return (result.stdout || '').trim()
}

function writeWindowsUserPath(newPath) {
  const result = spawnSync(
    'powershell.exe',
    [
      '-NoProfile',
      '-Command',
      `[Environment]::SetEnvironmentVariable("Path", '${newPath.replace(/'/g, "''")}', "User")`
    ],
    {
      encoding: 'utf8',
      timeout: 15_000,
      windowsHide: true
    }
  )
  if (result.error || result.status !== 0) {
    throw new Error(result.error?.message || (result.stderr || '写入用户 PATH 失败').trim())
  }
}

function ensureWin32(install) {
  const installDir = install.installRoot
  const pathCommand = resolveWechatideFromPath()
  if (pathCommand && samePath(path.dirname(pathCommand), installDir)) {
    return result(true, {
      action: 'already_linked',
      command: 'wechatide',
      targetPath: install.wechatidePath,
      installDir,
      commandReady: true
    })
  }

  const userPath = readWindowsUserPath()
  const parts = userPath.split(';').map(part => part.trim()).filter(Boolean)
  const already = parts.some(part => samePath(part, installDir))
  if (!already) {
    writeWindowsUserPath([...parts, installDir].join(';'))
  }
  process.env.PATH = `${process.env.PATH || ''}${path.delimiter}${installDir}`

  return result(true, {
    action: already ? 'already_linked' : 'path_updated',
    command: 'wechatide',
    targetPath: install.wechatidePath,
    installDir,
    pathUpdated: !already,
    pathHint: '新开终端后 wechatide 生效；当前会话可临时把安装目录加入 PATH，或直接用 targetPath',
    commandReady: Boolean(resolveWechatideFromPath())
  })
}

function inspectOnly(install) {
  const pathCommand = resolveWechatideFromPath()
  if (pathCommand) {
    const resolved = readLinkTarget(pathCommand) || pathCommand
    if (samePath(resolved, install.wechatidePath)) {
      return result(true, {
        action: 'already_linked',
        command: pathCommand,
        targetPath: install.wechatidePath,
        commandReady: true
      })
    }
  }

  return result(false, {
    action: 'needs_link',
    targetPath: install.wechatidePath,
    pathCommand: pathCommand || undefined,
    commandReady: false,
    hint: '运行本脚本（去掉 --check）可创建软链 / 写入 PATH'
  })
}

function main() {
  const options = parseArgs()
  const install = resolveInstallRoot(options.platform, options.installRoot)

  if (!install.installRoot) {
    console.log(JSON.stringify(result(false, {
      action: 'not_installed',
      error: '未找到微信开发者工具安装目录',
      checkedInstallRoots: install.checkedInstallRoots
    }), null, 2))
    process.exitCode = 1
    return
  }

  if (!install.wechatideExists) {
    console.log(JSON.stringify(result(false, {
      action: 'wechatide_missing',
      error: '安装目录存在，但缺少 wechatide 入口（勿用 wechatidecli / cli 冒充）',
      installRoot: install.installRoot,
      targetPath: install.wechatidePath
    }), null, 2))
    process.exitCode = 1
    return
  }

  if (options.check) {
    const payload = inspectOnly(install)
    console.log(JSON.stringify(payload, null, 2))
    if (!payload.ok) {
      process.exitCode = 1
    }
    return
  }

  const payload = options.platform === 'darwin'
    ? ensureDarwin(install)
    : ensureWin32(install)

  console.log(JSON.stringify(payload, null, 2))
  if (!payload.ok) {
    process.exitCode = 1
  }
}

try {
  main()
} catch (error) {
  console.error(error.message)
  process.exitCode = 1
}
