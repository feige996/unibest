import type { CustomTabBarItem, CustomTabBarItemBadge } from './types'
import { computed, reactive } from 'vue'
import { useUserStore } from '@/store/user'

import { tabbarList as _tabbarList, selectedTabbarStrategy, TABBAR_STRATEGY_MAP } from './config'

/** tabbarList 里面的 path 从 pages.config.ts 得到 */
const baseTabbarList = reactive<CustomTabBarItem[]>(_tabbarList.map(item => ({
  ...item,
  pagePath: item.pagePath.startsWith('/') ? item.pagePath : `/${item.pagePath}`, // 统一成 '/' 开头的路径
})))

const userRoles = computed(() => {
  const userStore = useUserStore()
  const userInfo = userStore.userInfo.value
  if (Array.isArray(userInfo?.roles) && userInfo.roles.length > 0) {
    return userInfo.roles
  }
  if (userInfo?.role) {
    return [userInfo.role]
  }
  return []
})

const tabbarList = computed(() => {
  const roles = userRoles.value
  if (roles.length === 0) {
    return baseTabbarList.filter(item => !item.roles || item.roles.length === 0)
  }
  return baseTabbarList.filter(item => !item.roles || item.roles.length === 0 || item.roles.some(role => roles.includes(role)))
})

export function isPageTabbar(path: string) {
  if (selectedTabbarStrategy === TABBAR_STRATEGY_MAP.NO_TABBAR) {
    return false
  }
  const _path = normalizeRoutePath(path)
  return _path === '/' || tabbarList.value.some(item => item.pagePath === _path)
}

export function normalizeRoutePath(path?: string) {
  if (!path) {
    return ''
  }
  const _path = path.split('?')[0]
  return _path.startsWith('/') ? _path : `/${_path}`
}

function getCurrentPagePath() {
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]
  return normalizeRoutePath(currentPage?.route)
}

function findTabbarIndexByPath(path?: string) {
  const normalizedPath = normalizeRoutePath(path)
  if (normalizedPath === '/') {
    return 0
  }
  return tabbarList.value.findIndex(item => item.pagePath === normalizedPath)
}

/**
 * 自定义 tabbar 的状态管理，原生 tabbar 无需关注本文件
 * tabbar 状态，增加 storageSync 保证刷新浏览器时在正确的 tabbar 页面
 * 使用reactive简单状态，而不是 pinia 全局状态
 */
const tabbarStore = reactive({
  curIdx: uni.getStorageSync('app-tabbar-index') || 0,
  prevIdx: uni.getStorageSync('app-tabbar-index') || 0,
  setCurIdx(idx: number) {
    this.curIdx = idx
    uni.setStorageSync('app-tabbar-index', idx)
  },
  setTabbarItemBadge(idx: number, badge: CustomTabBarItemBadge) {
    const list = tabbarList.value
    if (list[idx]) {
      list[idx].badge = badge
    }
  },
  setAutoCurIdx(path: string) {
    const list = tabbarList.value
    if (list.length === 0) {
      this.setCurIdx(0)
      return
    }

    const index = findTabbarIndexByPath(path)
    if (index >= 0) {
      this.setCurIdx(index)
      return
    }

    if (this.curIdx < 0 || this.curIdx >= list.length) {
      this.setCurIdx(0)
    }
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
    if (this.prevIdx === this.curIdx)
      return
    this.setCurIdx(this.prevIdx)
    this.prevIdx = uni.getStorageSync('app-tabbar-index') || 0
  },
})

export { tabbarList, tabbarStore }
