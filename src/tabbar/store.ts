import type { UserRole } from '@/api/types/login'
import type { CustomTabBarItem, CustomTabBarItemBadge } from './types'
import { computed, reactive, ref } from 'vue'
import { useUserStore } from '@/store/user'
import { HOME_PAGE } from '@/utils'

import { tabbarList as _tabbarList, selectedTabbarStrategy, TABBAR_STRATEGY_MAP } from './config'

/**
 * 当前 tabbar 页面的缓存 key。
 * 存的是「路径」而不是「下标」：可见的 tabbar 项会随用户角色变化，
 * 同一个下标在不同角色下指向不同的 item，用下标缓存必然错位。
 */
const TABBAR_PATH_STORAGE_KEY = 'app-tabbar-path'

/** tabbarList 里面的 path 从 pages.config.ts 得到 */
const baseTabbarList = reactive<CustomTabBarItem[]>(_tabbarList.map(item => ({
  ...item,
  pagePath: item.pagePath.startsWith('/') ? item.pagePath : `/${item.pagePath}`, // 统一成 '/' 开头的路径
})))

const userRoles = computed<UserRole[]>(() => {
  const userStore = useUserStore()
  // setup 语法的 pinia store 会自动解包 ref，这里必须直接取 userInfo，不能再取 .value
  const userInfo = userStore.userInfo
  if (Array.isArray(userInfo?.roles) && userInfo.roles.length > 0) {
    return userInfo.roles
  }
  if (userInfo?.role) {
    return [userInfo.role]
  }
  return []
})

/** item 不写 roles → 所有用户都能看到；写了 roles → 必须命中用户角色之一 */
function hasRequiredRoles(item: CustomTabBarItem, roles: UserRole[]) {
  if (!item.roles || item.roles.length === 0) {
    return true
  }
  return item.roles.some(role => roles.includes(role))
}

/** 当前用户可见的 tabbar 列表（按 roles 过滤后） */
const tabbarList = computed(() => baseTabbarList.filter(item => hasRequiredRoles(item, userRoles.value)))

export function normalizeRoutePath(path?: string) {
  if (!path) {
    return ''
  }
  const _path = path.split('?')[0]
  return _path.startsWith('/') ? _path : `/${_path}`
}

/**
 * 把路由路径归一成能跟 tabbar 配置比对的路径。
 * H5 线上首页是 '/'，需要还原成真实的首页路由（pages.json 里 type 为 home 的页面）再匹配，
 * 否则无从知道「首页」是哪个 tabbar item，只能假设它是第 0 项，按角色过滤后就会错位。
 */
function resolveTabbarPath(path?: string) {
  const _path = normalizeRoutePath(path)
  return _path === '/' ? HOME_PAGE : _path
}

/** 在 tabbar 配置全集里查找（不看角色） */
function findTabbarItemByPath(path?: string) {
  const _path = resolveTabbarPath(path)
  return _path ? baseTabbarList.find(item => item.pagePath === _path) : undefined
}

/**
 * 是否是 tabbar 页面，决定该页面要不要渲染自定义 tabbar。
 * 用配置全集判断而不是过滤后的列表：万一角色不足还是进到了受限页（如运行时守卫被绕过），
 * 依然渲染 tabbar（只是不高亮任何一项），用户不会被困在一个没有任何导航入口的页面里。
 */
export function isPageTabbar(path: string) {
  if (selectedTabbarStrategy === TABBAR_STRATEGY_MAP.NO_TABBAR) {
    return false
  }
  return !!findTabbarItemByPath(path)
}

/**
 * 当前用户角色不足以进入 path 时，返回一个可以去的 tabbar 路径；可以进入则返回 ''。
 *
 * tabbar 项配置 roles 只能隐藏入口，页面本身仍会生成到 pages.json（编译期产物，没法按角色裁剪），
 * 所以必须运行时兜底：直接输入路由、分享进入、或首页恰好就是受限页时，都会越权进入。
 */
export function getTabbarRedirectPath(path?: string) {
  if (selectedTabbarStrategy === TABBAR_STRATEGY_MAP.NO_TABBAR) {
    return ''
  }
  const item = findTabbarItemByPath(path)
  if (!item || hasRequiredRoles(item, userRoles.value)) {
    return ''
  }
  // 回退到第一个可见的 tabbar 页；一个可见项都没有时返回 '' 不拦截，否则用户无处可去
  return tabbarList.value[0]?.pagePath || ''
}

function getCurrentPagePath() {
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]
  return normalizeRoutePath(currentPage?.route)
}

/** 在「当前用户可见」的列表里找下标；找不到返回 -1，表示不高亮任何一项 */
function findTabbarIndexByPath(path?: string) {
  const _path = resolveTabbarPath(path)
  if (!_path) {
    return -1
  }
  return tabbarList.value.findIndex(item => item.pagePath === _path)
}

const curPath = ref<string>(normalizeRoutePath(uni.getStorageSync(TABBAR_PATH_STORAGE_KEY)) || HOME_PAGE)
const prevPath = ref<string>(curPath.value)

/**
 * 自定义 tabbar 的状态管理，原生 tabbar 无需关注本文件
 * tabbar 状态，增加 storageSync 保证刷新浏览器时在正确的 tabbar 页面
 * 使用reactive简单状态，而不是 pinia 全局状态
 */
const tabbarStore = reactive({
  /**
   * 当前高亮的下标，由当前 tabbar 路径实时推导，所以角色变化后不会错位。
   * 当前页不是本用户可见的 tabbar 页时为 -1，即不高亮任何一项。
   */
  get curIdx() {
    return findTabbarIndexByPath(curPath.value)
  },
  set curIdx(idx: number) {
    this.setCurIdx(idx)
  },
  get prevIdx() {
    return findTabbarIndexByPath(prevPath.value)
  },
  setCurPath(path: string) {
    const _path = resolveTabbarPath(path)
    prevPath.value = curPath.value
    curPath.value = _path
    uni.setStorageSync(TABBAR_PATH_STORAGE_KEY, _path)
  },
  setCurIdx(idx: number) {
    // 下标越界（如 -1）时清空路径，表示不高亮任何一项
    this.setCurPath(tabbarList.value[idx]?.pagePath || '')
  },
  setTabbarItemBadge(idx: number, badge: CustomTabBarItemBadge) {
    const list = tabbarList.value
    if (list[idx]) {
      list[idx].badge = badge
    }
  },
  setAutoCurIdx(path: string) {
    // 目标不是 tabbar 页（如详情页）时保持当前高亮，从详情页返回后仍停在原来的 tab 上
    if (!findTabbarItemByPath(path)) {
      return
    }
    this.setCurPath(path)
  },
  syncCurIdxByCurrentPage() {
    const currentPath = getCurrentPagePath()
    if (currentPath) {
      this.setAutoCurIdx(currentPath)
    }
  },
  syncCurIdxByCurrentPageAsync() {
    setTimeout(() => {
      this.syncCurIdxByCurrentPage()
    }, 0)
  },
  isCurrentRouteTabbarItem(index: number) {
    const item = tabbarList.value[index]
    if (!item) {
      return false
    }
    return findTabbarIndexByPath(getCurrentPagePath()) === index
  },
  restorePrevIdx() {
    if (prevPath.value === curPath.value)
      return
    this.setCurPath(prevPath.value)
  },
})

export { tabbarList, tabbarStore }
