#!/usr/bin/env node

import { spawnSync } from 'node:child_process'
import fs from 'node:fs'

import {
  compareVersions,
  getPackagePaths,
  MIN_COMPATIBLE_VERSION,
  parseInstallArgs,
  resolveInstallRoot,
  resolveWechatideFromPath
} from './install-root.mjs'

function readPackageVersion(packagePath) {
  const content = fs.readFileSync(packagePath, 'utf8')
  const packageJson = JSON.parse(content)
  if (typeof packageJson.version !== 'string' || !packageJson.version.trim()) {
    throw new Error(`package.json 缺少 version：${packagePath}`)
  }
  return packageJson.version.trim()
}

function checkCli(bin) {
  const result = spawnSync(bin, ['-h'], {
    encoding: 'utf8',
    shell: process.platform === 'win32',
    timeout: 10_000,
    windowsHide: true
  })

  return {
    available: !result.error && result.status === 0,
    error: result.error?.message || (result.status === 0
      ? undefined
      : (result.stderr || result.stdout || `exit ${result.status}`).trim())
  }
}

/** 优先 PATH，其次安装目录绝对路径；返回可用 command 或错误信息 */
function resolveWorkingCommand(install) {
  const pathCommand = resolveWechatideFromPath()
  let pathError

  if (pathCommand) {
    const cli = checkCli(pathCommand)
    if (cli.available) {
      return { command: pathCommand }
    }
    pathError = cli.error
  }

  if (install.wechatideExists) {
    const cli = checkCli(install.wechatidePath)
    if (cli.available) {
      return { command: install.wechatidePath }
    }
    return { error: cli.error || pathError }
  }

  return pathError ? { error: pathError } : {}
}

/**
 * 只输出决策字段。
 * - 成功：compatible + version + command
 * - not_installed：无 mustEnterInstaller（先确认自定义路径）
 * - 其它失败：mustEnterInstaller + reason
 */
function result(compatible, extra = {}) {
  const payload = { compatible }
  if (!compatible) {
    if (extra.mustEnterInstaller === true) {
      payload.mustEnterInstaller = true
    }
    if (extra.reason) {
      payload.reason = extra.reason
    }
  }
  for (const [key, value] of Object.entries(extra)) {
    if (key === 'reason' || key === 'mustEnterInstaller') {
      continue
    }
    if (value !== undefined && value !== null && value !== '') {
      payload[key] = value
    }
  }
  return payload
}

function inspectInstallation(options) {
  const install = resolveInstallRoot(options.platform, options.installRoot)

  if (!install.installRoot) {
    return result(false, { reason: 'not_installed' })
  }

  const packagePaths = getPackagePaths(options.platform, install.installRoot)
  if (fs.existsSync(packagePaths.nw)) {
    return result(false, {
      reason: 'nw_runtime_incompatible',
      mustEnterInstaller: true
    })
  }

  if (!fs.existsSync(packagePaths.electron)) {
    return result(false, {
      reason: 'unknown_runtime_incompatible',
      mustEnterInstaller: true
    })
  }

  let version
  try {
    version = readPackageVersion(packagePaths.electron)
  } catch (error) {
    return result(false, {
      reason: 'electron_version_unreadable',
      mustEnterInstaller: true,
      error: error.message
    })
  }

  if (compareVersions(version, MIN_COMPATIBLE_VERSION) < 0) {
    return result(false, {
      reason: 'electron_version_too_old',
      mustEnterInstaller: true,
      version
    })
  }

  const working = resolveWorkingCommand(install)
  if (working.command) {
    return result(true, { version, command: working.command })
  }

  if (!install.wechatideExists) {
    return result(false, {
      reason: 'wechatide_missing',
      mustEnterInstaller: true,
      version
    })
  }

  return result(false, {
    reason: 'cli_unavailable',
    mustEnterInstaller: true,
    version,
    command: install.wechatidePath,
    error: working.error
  })
}

try {
  console.log(JSON.stringify(inspectInstallation(parseInstallArgs()), null, 2))
} catch (error) {
  console.error(error.message)
  process.exitCode = 1
}
