#!/usr/bin/env node

import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

/** 安装兼容与下载选包的统一门槛（严格大于下载；检查允许等于）；改门槛只改这里 */
export const MIN_COMPATIBLE_VERSION = '2.02.2607152'

export function versionToNumber(version) {
  const normalized = String(version).replace(/\./g, '')
  return /^\d+$/.test(normalized) ? BigInt(normalized) : null
}

export const MIN_COMPATIBLE_VERSION_NUMBER = versionToNumber(MIN_COMPATIBLE_VERSION)

/** 标准三路比较：left < right → 负；相等 → 0；left > right → 正 */
export function compareVersions(left, right) {
  const leftNumber = versionToNumber(left)
  const rightNumber = versionToNumber(right)
  if (leftNumber === null || rightNumber === null) {
    throw new Error(`无法比较版本：${left} / ${right}`)
  }
  if (leftNumber < rightNumber) {
    return -1
  }
  if (leftNumber > rightNumber) {
    return 1
  }
  return 0
}

export function normalizePlatform(platform = process.platform) {
  const value = String(platform).toLowerCase()
  if (['darwin', 'mac', 'macos'].includes(value)) {
    return 'darwin'
  }
  if (['win32', 'windows', 'win'].includes(value)) {
    return 'win32'
  }
  throw new Error(`不支持的系统：${platform}`)
}

export function parseInstallArgs(argv = process.argv.slice(2)) {
  const options = {
    platform: process.platform,
    installRoot: ''
  }

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
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

function normalizeWindowsRegistryPath(rawValue) {
  let value = rawValue.trim()
  const quoted = value.match(/^"([^"]+)"/)
  if (quoted) {
    value = quoted[1]
  } else {
    const executable = value.match(/^(.+?\.(?:exe|cmd|bat))(?:\s|,|$)/i)
    if (executable) {
      value = executable[1]
    }
  }

  value = value
    .replace(/,\d+$/, '')
    .replace(/%([^%]+)%/g, (_match, name) => process.env[name] || `%${name}%`)

  return /\.(?:exe|cmd|bat)$/i.test(value) ? path.dirname(value) : value
}

function extractWindowsRegistryPaths(output) {
  const paths = []
  const valuePattern = /^\s+(?:InstallLocation|DisplayIcon|UninstallString|\(Default\))\s+REG_\w+\s+(.+)$/i

  for (const line of output.split(/\r?\n/)) {
    const match = line.match(valuePattern)
    if (match) {
      paths.push(normalizeWindowsRegistryPath(match[1]))
    }
  }

  return paths.filter(Boolean)
}

function extractRegistryKeyPaths(output) {
  const keys = []
  for (const line of output.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (/^HKEY_/i.test(trimmed)) {
      keys.push(trimmed)
    }
  }
  return [...new Set(keys)]
}

function runRegQuery(args) {
  const result = spawnSync('reg', ['query', ...args], {
    encoding: 'utf8',
    timeout: 10_000,
    windowsHide: true
  })
  if (result.status === 0 && result.stdout) {
    return result.stdout
  }
  return ''
}

function queryWindowsAppPaths() {
  const appNames = [
    'wechatdevtools.exe',
    'wechatwebdevtools.exe',
    '微信开发者工具.exe'
  ]
  const paths = []

  for (const appName of appNames) {
    const suffix = `Software\\Microsoft\\Windows\\CurrentVersion\\App Paths\\${appName}`
    for (const hive of ['HKCU', 'HKLM']) {
      for (const bitness of ['/reg:32', '/reg:64']) {
        const output = runRegQuery([`${hive}\\${suffix}`, bitness])
        if (output) {
          paths.push(...extractWindowsRegistryPaths(output))
        }
      }
    }
  }

  return paths
}

/** 按显示名精确搜 Uninstall，避免对整棵 Uninstall 树做 /s 全量扫描 */
function queryWindowsUninstallByDisplayName() {
  const uninstallRoots = [
    'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall',
    'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall'
  ]
  const searchTerms = [
    '微信web开发者工具',
    '微信开发者工具',
    'wechatwebdevtools',
    'WeChat DevTools'
  ]
  const paths = []
  const queriedKeys = new Set()

  for (const root of uninstallRoots) {
    for (const bitness of ['/reg:32', '/reg:64']) {
      for (const term of searchTerms) {
        const searchOut = runRegQuery([root, '/s', '/f', term, bitness])
        if (!searchOut) {
          continue
        }
        for (const key of extractRegistryKeyPaths(searchOut)) {
          if (queriedKeys.has(key)) {
            continue
          }
          queriedKeys.add(key)
          const detail = runRegQuery([key])
          if (detail) {
            paths.push(...extractWindowsRegistryPaths(detail))
          }
        }
      }
    }
  }

  return paths
}

function queryWindowsRegistryPaths() {
  if (process.platform !== 'win32') {
    return []
  }

  const appPaths = queryWindowsAppPaths()
  if (appPaths.length) {
    return appPaths
  }

  return queryWindowsUninstallByDisplayName()
}

export function getPackagePaths(platform, installRoot) {
  if (platform === 'darwin') {
    const resources = path.join(installRoot, 'Contents', 'Resources')
    return {
      nw: path.join(resources, 'package.nw', 'package.json'),
      electron: path.join(resources, 'app.asar.unpacked', 'package.json')
    }
  }

  return {
    nw: path.join(installRoot, 'code', 'package.nw', 'package.json'),
    electron: path.join(installRoot, 'resources', 'app.asar.unpacked', 'package.json')
  }
}

function findRuntimeRoot(platform, candidate) {
  let current = path.resolve(candidate)
  for (let depth = 0; depth < 5; depth += 1) {
    const packagePaths = getPackagePaths(platform, current)
    if (fs.existsSync(packagePaths.nw) || fs.existsSync(packagePaths.electron)) {
      return current
    }
    const parent = path.dirname(current)
    if (parent === current) {
      break
    }
    current = parent
  }
  return ''
}

export function getInstallRoots(platform, installRoot) {
  if (installRoot) {
    return [installRoot]
  }

  if (platform === 'darwin') {
    return ['/Applications/wechatwebdevtools.app']
  }

  if (platform === 'win32') {
    const registryRoots = queryWindowsRegistryPaths()
      .map(candidate => findRuntimeRoot(platform, candidate))
      .filter(Boolean)
    const programFilesRoots = [
      process.env['ProgramFiles(x86)'],
      process.env.ProgramFiles,
      'C:\\Program Files (x86)',
      'C:\\Program Files'
    ].filter(Boolean)

    const commonRoots = programFilesRoots
      .map(root => path.join(root, 'Tencent', '微信web开发者工具'))
    return [...new Set([...registryRoots, ...commonRoots])]
  }

  throw new Error(`不支持的系统：${platform}`)
}

/** skill 入口：Windows wechatide.cmd；macOS Contents/MacOS/wechatide（勿用 cli / wechatidecli） */
export function getWechatidePath(platform, installRoot) {
  if (!installRoot) {
    return null
  }
  if (platform === 'darwin') {
    return path.join(installRoot, 'Contents', 'MacOS', 'wechatide')
  }
  if (platform === 'win32') {
    return path.join(installRoot, 'wechatide.cmd')
  }
  throw new Error(`不支持的系统：${platform}`)
}

/** PATH 上的 wechatide（which / where 首条）；找不到返回 null */
export function resolveWechatideFromPath() {
  const locator = process.platform === 'win32' ? 'where' : 'which'
  const result = spawnSync(locator, ['wechatide'], {
    encoding: 'utf8',
    shell: process.platform === 'win32',
    timeout: 10_000,
    windowsHide: true
  })

  if (result.error || result.status !== 0 || !result.stdout) {
    return null
  }

  const firstLine = result.stdout
    .split(/\r?\n/)
    .map(line => line.trim())
    .find(Boolean)

  return firstLine || null
}

export function resolveInstallRoot(platform, installRoot) {
  const checkedInstallRoots = getInstallRoots(platform, installRoot)
  const resolvedRoot = checkedInstallRoots.find(root => fs.existsSync(root)) || null
  const wechatidePath = getWechatidePath(platform, resolvedRoot)
  return {
    platform,
    installRoot: resolvedRoot,
    wechatidePath,
    wechatideExists: Boolean(wechatidePath && fs.existsSync(wechatidePath)),
    checkedInstallRoots
  }
}
