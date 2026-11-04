import type { TemplateProvider } from 'giget'
import type { PromptResult } from '../types'
import { existsSync, promises as fsPromises, mkdirSync, unlinkSync, writeFileSync } from 'node:fs'
import { homedir, tmpdir } from 'node:os'
import { join } from 'node:path'
import process from 'node:process'
import { log } from '@clack/prompts'
import { downloadTemplate } from 'giget'
import { red, yellow } from 'kolorist'
import { debug } from './debug'
import { replacePackageJson } from './replacePackageJson'

const GITEE_REPO = 'feige996/unibest'
const GITHUB_REPO = 'feige996/unibest'

/**
 * 确保缓存目录在各种权限受限环境中均安全可用
 */
function ensureSafeCacheDir(): void {
  if (process.env.XDG_CACHE_HOME) {
    return
  }

  try {
    const testDir = join(homedir(), '.cache', 'giget')
    mkdirSync(testDir, { recursive: true })
    const probe = join(testDir, `.probe-${Date.now()}`)
    writeFileSync(probe, '')
    unlinkSync(probe)
  }
  catch {
    process.env.XDG_CACHE_HOME = join(tmpdir(), 'unibest-cache')
  }
}

/**
 * 请求 tarball 流并校验响应内容
 */
async function fetchTarballStream(url: string, timeoutMs = 25000): Promise<ReadableStream<Uint8Array>> {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(timeoutMs),
    headers: {
      'User-Agent': 'curl/8.7.1',
    },
  })

  if (!response.ok || !response.body) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`)
  }

  const contentType = response.headers.get('content-type') || ''
  if (contentType.includes('text/html')) {
    throw new Error('远程服务器返回了网页而非压缩包（可能触发了平台安全验证）')
  }

  return response.body
}

/**
 * 自定义 Gitee 模板提供者
 * Gitee 公开仓库支持通过归档包直接下载（免 Git 鉴权）
 */
const giteeProvider: TemplateProvider = (input) => {
  const [rawRepo, branch = 'base'] = input.split('#')
  const repo = rawRepo || GITEE_REPO
  const tarUrl = `https://gitee.com/${repo}/repository/archive/${branch}.tar.gz`

  return {
    name: repo.replace('/', '-'),
    version: branch,
    tar: () => fetchTarballStream(tarUrl),
  }
}

/**
 * 自定义 GitHub 模板提供者
 * 通过 codeload 归档包直接下载，避免消耗 GitHub API 匿名配额
 */
const githubProvider: TemplateProvider = (input) => {
  const [rawRepo, branch = 'base'] = input.split('#')
  const repo = rawRepo || GITHUB_REPO
  const tarUrl = `https://github.com/${repo}/archive/refs/heads/${branch}.tar.gz`

  return {
    name: repo.replace('/', '-'),
    version: branch,
    tar: () => fetchTarballStream(tarUrl),
  }
}

async function removeGitFolder(localPath: string): Promise<void> {
  const gitFolderPath = join(localPath, '.git')
  if (existsSync(gitFolderPath)) {
    await fsPromises.rm(gitFolderPath, { recursive: true, force: true })
  }
}

async function downloadTemplateWithFallback(projectPath: string, branch = 'base'): Promise<void> {
  ensureSafeCacheDir()
  log.info('正在下载基础模板...')

  const providers = {
    gitee: giteeProvider,
    github: githubProvider,
  }

  try {
    // 1. 首选国内 Gitee 归档包（国内直连速度快且免 Git 鉴权）
    debug('尝试从 Gitee 下载基础模板')
    await downloadTemplate(`gitee:${GITEE_REPO}#${branch}`, {
      dir: projectPath,
      providers,
      force: true,
      preferOffline: false,
    })
    debug('Gitee 基础模板下载成功')
  }
  catch (giteeError) {
    debug('从 Gitee 下载基础模板失败，尝试从 GitHub 备用源下载...', giteeError)
    log.warn(yellow('从 Gitee 下载基础模板失败，正在切换至 GitHub 备用源...'))

    try {
      // 2. 备用源：GitHub 归档包
      await downloadTemplate(`github:${GITHUB_REPO}#${branch}`, {
        dir: projectPath,
        providers,
        force: true,
        preferOffline: false,
      })
      debug('GitHub 基础模板下载成功')
    }
    catch (githubError) {
      debug('GitHub 备用源下载也失败了', githubError)
      throw new Error(
        `基础模板下载失败，请检查网络连接：\n`
        + `  - Gitee: ${(giteeError as Error).message}\n`
        + `  - GitHub: ${(githubError as Error).message}`,
      )
    }
  }

  // 确保清理多余的 .git 目录（如有）
  await removeGitFolder(projectPath)
}

export async function cloneRepoByBranch(
  root: string,
  name: string,
  branch: string,
  options: PromptResult,
): Promise<void> {
  const projectPath = join(root, name)

  try {
    await downloadTemplateWithFallback(projectPath, branch)
  }
  catch (error) {
    log.error(`${red('模板下载失败！')} ${(error as Error).message || error}`)
    process.exit(1)
  }

  replacePackageJson(projectPath, name, '1.0.0', options)
}
