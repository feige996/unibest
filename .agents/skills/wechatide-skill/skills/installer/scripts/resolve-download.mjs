#!/usr/bin/env node

import https from 'node:https'

import {
  compareVersions,
  MIN_COMPATIBLE_VERSION,
  MIN_COMPATIBLE_VERSION_NUMBER,
  normalizePlatform,
  versionToNumber
} from './install-root.mjs'

const DOWNLOAD_PAGE = 'https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html'
const REQUEST_TIMEOUT = 20_000
const WXQCLOUD_ORIGIN = 'https://devtools.wxqcloud.qq.com.cn'
const KIND_PRIORITY = {
  stable: 0,
  rc: 1,
  nightly: 2
}

function getText(url, redirects = 0) {
  if (redirects > 5) {
    return Promise.reject(new Error(`重定向次数过多：${url}`))
  }

  return new Promise((resolve, reject) => {
    const request = https.get(url, {
      headers: {
        'User-Agent': 'wechatide-skill'
      }
    }, response => {
      const status = response.statusCode || 0
      const location = response.headers.location

      if (status >= 300 && status < 400 && location) {
        response.resume()
        resolve(getText(new URL(location, url).toString(), redirects + 1))
        return
      }

      if (status < 200 || status >= 300) {
        response.resume()
        reject(new Error(`请求失败：HTTP ${status} ${url}`))
        return
      }

      response.setEncoding('utf8')
      let body = ''
      response.on('data', chunk => {
        body += chunk
      })
      response.on('end', () => resolve(body))
    })

    request.setTimeout(REQUEST_TIMEOUT, () => {
      request.destroy(new Error(`请求超时：${url}`))
    })
    request.on('error', reject)
  })
}

function resolveRedirectTarget(url, redirects = 0) {
  if (redirects > 10) {
    return Promise.reject(new Error(`下载链接重定向次数过多：${url}`))
  }

  return new Promise((resolve, reject) => {
    const request = https.request(url, {
      method: 'HEAD',
      headers: {
        'User-Agent': 'wechatide-skill'
      }
    }, response => {
      const status = response.statusCode || 0
      const location = response.headers.location

      response.resume()
      if (status >= 300 && status < 400 && location) {
        const nextUrl = new URL(location, url)
        if (nextUrl.protocol !== 'https:') {
          reject(new Error(`下载链接重定向到非 HTTPS 地址：${nextUrl}`))
          return
        }
        resolve(resolveRedirectTarget(nextUrl.toString(), redirects + 1))
        return
      }

      if (status < 200 || status >= 300) {
        reject(new Error(`下载链接探测失败：HTTP ${status} ${url}`))
        return
      }

      resolve(new URL(url))
    })

    request.setTimeout(REQUEST_TIMEOUT, () => {
      request.destroy(new Error(`下载链接探测超时：${url}`))
    })
    request.on('error', reject)
    request.end()
  })
}

function parseArgs() {
  const args = process.argv.slice(2)
  const options = {
    platform: process.platform,
    arch: process.arch,
    channel: 'stable',
    urlOnly: false
  }

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index]
    if (['--platform', '--arch', '--channel'].includes(arg)) {
      const value = args[index + 1]
      if (!value || value.startsWith('--')) {
        throw new Error(`参数 ${arg} 缺少值`)
      }

      if (arg === '--platform') {
        options.platform = value
      } else if (arg === '--arch') {
        options.arch = value
      } else {
        options.channel = value.toLowerCase()
      }
      index += 1
    } else if (arg === '--url-only') {
      options.urlOnly = true
    } else {
      throw new Error(`未知参数：${arg}`)
    }
  }

  if (options.channel === 'nightly') {
    options.channel = 'latest'
  }
  if (!['stable', 'latest'].includes(options.channel)) {
    throw new Error(`不支持的 channel：${options.channel}，仅支持 stable、latest 或 nightly`)
  }

  try {
    options.platform = normalizePlatform(options.platform)
  } catch {
    throw new Error(`官方下载页不提供该系统安装包：${options.platform}`)
  }

  return options
}

function getPreferredTypes(platform, arch) {
  const normalizedArch = arch.toLowerCase()

  if (platform === 'darwin') {
    return ['arm64', 'aarch64'].includes(normalizedArch)
      ? ['darwin_arm64', 'darwin_arm']
      : ['darwin_x64']
  }

  if (platform === 'win32') {
    return ['x64', 'amd64'].includes(normalizedArch)
      ? ['win32_x64']
      : ['win32_ia32']
  }

  throw new Error(`官方下载页不提供该系统安装包：${platform}/${arch}`)
}

function extractScriptUrls(html) {
  const urls = []
  const pattern = /<script[^>]+src=["']([^"']+)["']/gi
  let match

  while ((match = pattern.exec(html))) {
    urls.push(new URL(match[1], DOWNLOAD_PAGE).toString())
  }

  return urls
}

function extractConfigUrls(contents) {
  const urls = new Set()
  const pattern = /https:\/\/[^"'\\\s]+\/config\.json/g

  for (const content of contents) {
    for (const match of content.matchAll(pattern)) {
      urls.add(match[0])
    }
  }

  return [...urls]
}

function isRedirectDownloadUrl(url) {
  return url.origin === 'https://servicewechat.com'
    && url.pathname === '/wxa-dev-logic/download_redirect'
}

function isReleaseDownloadUrl(url) {
  return url.origin === WXQCLOUD_ORIGIN
    && url.pathname.startsWith('/WechatWebDev/release/')
}

function isNightlyDownloadUrl(url) {
  return url.origin === WXQCLOUD_ORIGIN
    && url.pathname.startsWith('/WechatWebDev/nightly/')
}

function isAllowedDownloadUrl(value) {
  try {
    const url = new URL(value)
    return isRedirectDownloadUrl(url) || isReleaseDownloadUrl(url) || isNightlyDownloadUrl(url)
  } catch {
    return false
  }
}

function collectUrls(value, result = []) {
  if (typeof value === 'string') {
    if (isAllowedDownloadUrl(value)) {
      result.push(value)
    }
    return result
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      collectUrls(item, result)
    }
  } else if (value && typeof value === 'object') {
    for (const item of Object.values(value)) {
      collectUrls(item, result)
    }
  }

  return result
}

function getPathVersion(url) {
  const match = url.pathname.match(/wechat_devtools_(\d+(?:\.\d+)+)_/)
  return match ? match[1] : ''
}

function getCandidateVersion(url) {
  if (isRedirectDownloadUrl(url)) {
    const downloadVersion = url.searchParams.get('download_version') || ''
    return /^\d+$/.test(downloadVersion) ? downloadVersion : ''
  }

  return getPathVersion(url)
}

function isAboveMinimumVersion(version) {
  const number = versionToNumber(version)
  return number !== null && number > MIN_COMPATIBLE_VERSION_NUMBER
}

function getVersionKind(version) {
  const lastDigit = version.replace(/\./g, '').slice(-1)
  if (lastDigit === '0') {
    return 'stable'
  }
  if (lastDigit === '1') {
    return 'rc'
  }
  if (lastDigit === '2') {
    return 'nightly'
  }
  return null
}

function matchPreferredType(url, preferredTypes) {
  if (isRedirectDownloadUrl(url)) {
    return preferredTypes.includes(url.searchParams.get('type'))
  }

  return preferredTypes.some(type => url.pathname.includes(`_${type}.`))
}

function getMatchedType(url, preferredTypes) {
  if (isRedirectDownloadUrl(url)) {
    return url.searchParams.get('type')
  }

  return preferredTypes.find(type => url.pathname.includes(`_${type}.`)) || null
}

function isPkgUrl(url) {
  return url.pathname.toLowerCase().endsWith('.pkg')
}

function prepareRedirectUrl(url) {
  const next = new URL(url.toString())
  next.searchParams.set('from', 'skillauto')
  return next
}

function buildCandidates(urls, preferredTypes, requirePkg) {
  return urls
    .map(value => new URL(value))
    .filter(url => matchPreferredType(url, preferredTypes))
    .map(url => {
      const version = getCandidateVersion(url)
      const kind = version ? getVersionKind(version) : null
      return {
        url: isRedirectDownloadUrl(url) ? prepareRedirectUrl(url) : url,
        version,
        kind,
        isRedirect: isRedirectDownloadUrl(url)
      }
    })
    .filter(candidate => candidate.version && candidate.kind)
    .filter(candidate => isAboveMinimumVersion(candidate.version))
    .filter(candidate => {
      if (!requirePkg || candidate.isRedirect) {
        return true
      }
      return isPkgUrl(candidate.url)
    })
}

function sortCandidates(left, right) {
  const kindDiff = KIND_PRIORITY[left.kind] - KIND_PRIORITY[right.kind]
  if (kindDiff) {
    return kindDiff
  }
  try {
    // 同 kind 内版本高的在前
    return compareVersions(right.version, left.version)
  } catch {
    return 0
  }
}

async function selectDownload(urls, preferredTypes, options) {
  const requirePkg = options.platform === 'darwin'
  const candidates = buildCandidates(urls, preferredTypes, requirePkg)
    .filter(candidate => options.channel !== 'latest' || candidate.kind === 'nightly')
    .sort(sortCandidates)

  if (!candidates.length) {
    throw new Error(
      `未找到版本大于 ${MIN_COMPATIBLE_VERSION} 的匹配安装包：${preferredTypes.join(', ')}`
    )
  }

  const rejected = []
  for (const candidate of candidates) {
    if (!requirePkg || !candidate.isRedirect) {
      return candidate
    }

    const redirectTarget = await resolveRedirectTarget(candidate.url.toString())
    if (isPkgUrl(redirectTarget)) {
      return candidate
    }

    rejected.push(
      `${candidate.version} 重定向为 ${redirectTarget.pathname.split('.').pop() || 'unknown'}`
    )
  }

  throw new Error(
    `未找到可用的 macOS PKG（已跳过：${rejected.join('；')}）`
  )
}

function toOutputChannel(kind) {
  if (kind === 'nightly') {
    return 'latest'
  }
  return kind
}

async function main() {
  const options = parseArgs()
  const html = await getText(DOWNLOAD_PAGE)
  const scriptUrls = extractScriptUrls(html)
  const scriptResults = await Promise.allSettled(scriptUrls.map(url => getText(url)))
  const scripts = scriptResults
    .filter(result => result.status === 'fulfilled')
    .map(result => result.value)
  const configUrls = extractConfigUrls([html, ...scripts])

  if (!configUrls.length) {
    throw new Error('官方下载页中未找到下载配置')
  }

  const configResults = await Promise.allSettled(
    configUrls.map(async url => JSON.parse(await getText(url)))
  )
  const configs = configResults
    .filter(result => result.status === 'fulfilled')
    .map(result => result.value)
  if (!configs.length) {
    throw new Error('官方下载配置获取或解析失败')
  }

  const preferredTypes = getPreferredTypes(options.platform, options.arch)
  const urls = configs.flatMap(config => collectUrls(config))
  const selected = await selectDownload(urls, preferredTypes, options)
  const selectedChannel = toOutputChannel(selected.kind)
  const fallbackReason = options.channel === 'stable' && selected.kind !== 'stable'
    ? `无合格稳定版，改用 ${selected.kind === 'rc' ? 'RC' : 'Nightly'} 版本`
    : undefined

  if (options.urlOnly) {
    console.log(selected.url.toString())
    return
  }

  console.log(JSON.stringify({
    platform: options.platform,
    arch: options.arch,
    requestedChannel: options.channel,
    channel: selectedChannel,
    kind: selected.kind,
    type: getMatchedType(selected.url, preferredTypes),
    downloadVersion: selected.version,
    minimumDownloadVersion: MIN_COMPATIBLE_VERSION,
    url: selected.url.toString(),
    ...(fallbackReason ? { fallbackReason } : {}),
    source: DOWNLOAD_PAGE
  }, null, 2))
}

main().catch(error => {
  console.error(error.message)
  process.exitCode = 1
})
