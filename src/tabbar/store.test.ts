import type { CustomTabBarItem } from './types'
import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * config.ts 是 tabbar 的唯一配置源，这里用可变的 mock 配置，
 * 配合 vi.resetModules() 让每个用例都能拿到一份「按自己的配置初始化」的 store。
 */
const configState = vi.hoisted(() => ({ list: [] as CustomTabBarItem[] }))

vi.mock('./config', () => ({
  TABBAR_STRATEGY_MAP: { NO_TABBAR: 0, NATIVE_TABBAR: 1, CUSTOM_TABBAR: 2 },
  selectedTabbarStrategy: 2,
  get tabbarList() {
    return configState.list
  },
}))

/** pages.json 里 type 为 home 的页面，H5 线上首页 '/' 会被还原成它 */
const HOME_PATH = '/pages/index/index'

function item(text: string, pagePath: string, roles?: string[]): CustomTabBarItem {
  return { text, pagePath, iconType: 'unocss', icon: 'i-carbon-home', roles } as CustomTabBarItem
}

/** 首页所有人可见，「关于」仅 admin 可见 */
const ADMIN_TAB_IS_LAST = [
  item('首页', 'pages/index/index'),
  item('我的', 'pages/me/me'),
  item('关于', 'pages/about/about', ['admin']),
]

/** 首页（home）本身就是 admin 专属，对应 issue 里「首页是受限页」的场景 */
const ADMIN_TAB_IS_HOME = [
  item('首页', 'pages/index/index', ['admin']),
  item('关于', 'pages/about/about'),
  item('我的', 'pages/me/me'),
]

async function setupStore(list: CustomTabBarItem[], userInfo?: { role?: string, roles?: string[] }) {
  configState.list = list
  const { useUserStore } = await import('@/store/user')
  if (userInfo) {
    useUserStore().setUserInfo({ userId: 1, username: 'u', nickname: 'U', ...userInfo })
  }
  return import('./store')
}

beforeEach(() => {
  // 重置模块，避免 store 模块级的 computed / ref 在用例之间串味
  vi.resetModules()
})

describe('tabbarList 按 roles 过滤', () => {
  it('用户无角色时，隐藏配置了 roles 的项', async () => {
    const { tabbarList } = await setupStore(ADMIN_TAB_IS_LAST)
    expect(tabbarList.value.map(i => i.text)).toEqual(['首页', '我的'])
  })

  it('roles 数组命中时，显示该项', async () => {
    const { tabbarList } = await setupStore(ADMIN_TAB_IS_LAST, { roles: ['admin'] })
    expect(tabbarList.value.map(i => i.text)).toEqual(['首页', '我的', '关于'])
  })

  it('单角色字段 role 命中时，同样显示该项', async () => {
    const { tabbarList } = await setupStore(ADMIN_TAB_IS_LAST, { role: 'admin' })
    expect(tabbarList.value.map(i => i.text)).toEqual(['首页', '我的', '关于'])
  })

  it('角色不匹配时，仍然隐藏该项', async () => {
    const { tabbarList } = await setupStore(ADMIN_TAB_IS_LAST, { roles: ['user'] })
    expect(tabbarList.value.map(i => i.text)).toEqual(['首页', '我的'])
  })
})

describe('curIdx 高亮', () => {
  it('首屏 H5 路径 "/" 高亮到真实首页，而不是固定第 0 项', async () => {
    const { tabbarStore, tabbarList } = await setupStore(ADMIN_TAB_IS_HOME)

    tabbarStore.setAutoCurIdx('/')

    // 无角色用户看不到首页，所以不高亮任何一项（而不是错误地高亮第 0 项「关于」）
    expect(tabbarStore.curIdx).toBe(-1)
    expect(tabbarList.value[0].text).toBe('关于')
  })

  it('首页可见时，"/" 高亮到首页所在的下标', async () => {
    const { tabbarStore, tabbarList } = await setupStore(ADMIN_TAB_IS_HOME, { roles: ['admin'] })

    tabbarStore.setAutoCurIdx('/')

    expect(tabbarList.value[tabbarStore.curIdx].pagePath).toBe(HOME_PATH)
  })

  it('角色变化导致可见项增减时，高亮跟随页面路径而不是下标', async () => {
    const { tabbarStore, tabbarList } = await setupStore(ADMIN_TAB_IS_HOME)

    // 无角色：可见 [关于, 我的]，停在「我的」
    tabbarStore.setAutoCurIdx('/pages/me/me')
    expect(tabbarList.value[tabbarStore.curIdx].text).toBe('我的')

    // 登录成为 admin：可见变成 [首页, 关于, 我的]，仍然应该高亮「我的」
    const { useUserStore } = await import('@/store/user')
    useUserStore().setUserInfo({ userId: 1, username: 'u', nickname: 'U', roles: ['admin'] })

    expect(tabbarList.value.map(i => i.text)).toEqual(['首页', '关于', '我的'])
    expect(tabbarList.value[tabbarStore.curIdx].text).toBe('我的')
  })

  it('跳转到非 tabbar 页面时保持当前高亮', async () => {
    const { tabbarStore, tabbarList } = await setupStore(ADMIN_TAB_IS_LAST)

    tabbarStore.setAutoCurIdx('/pages/me/me')
    tabbarStore.setAutoCurIdx('/pages/detail/detail')

    expect(tabbarList.value[tabbarStore.curIdx].text).toBe('我的')
  })

  it('curIdx 改为 getter 后仍然是响应式的（模板高亮依赖它）', async () => {
    const { tabbarStore } = await setupStore(ADMIN_TAB_IS_LAST)
    const { watchEffect, nextTick } = await import('vue')

    const seen: number[] = []
    const stop = watchEffect(() => {
      seen.push(tabbarStore.curIdx)
    })

    tabbarStore.setAutoCurIdx('/pages/me/me')
    await nextTick()
    stop()

    expect(seen.at(-1)).toBe(1)
    expect(seen.length).toBeGreaterThan(1)
  })

  it('带 query 的路径也能正确高亮', async () => {
    const { tabbarStore, tabbarList } = await setupStore(ADMIN_TAB_IS_LAST)

    tabbarStore.setAutoCurIdx('/pages/me/me?from=share')

    expect(tabbarList.value[tabbarStore.curIdx].text).toBe('我的')
  })
})

describe('getTabbarRedirectPath 运行时角色守卫', () => {
  it('角色不足进入受限 tabbar 页时，回退到第一个可见项', async () => {
    const { getTabbarRedirectPath } = await setupStore(ADMIN_TAB_IS_LAST)
    expect(getTabbarRedirectPath('/pages/about/about')).toBe(HOME_PATH)
  })

  it('首页就是受限页时，首屏 "/" 也会被拦截', async () => {
    const { getTabbarRedirectPath } = await setupStore(ADMIN_TAB_IS_HOME)
    expect(getTabbarRedirectPath('/')).toBe('/pages/about/about')
  })

  it('角色满足时放行', async () => {
    const { getTabbarRedirectPath } = await setupStore(ADMIN_TAB_IS_LAST, { roles: ['admin'] })
    expect(getTabbarRedirectPath('/pages/about/about')).toBe('')
  })

  it('未配置 roles 的 tabbar 页放行', async () => {
    const { getTabbarRedirectPath } = await setupStore(ADMIN_TAB_IS_LAST)
    expect(getTabbarRedirectPath('/pages/me/me')).toBe('')
  })

  it('非 tabbar 页面不参与判断，交给各自的登录/权限逻辑', async () => {
    const { getTabbarRedirectPath } = await setupStore(ADMIN_TAB_IS_LAST)
    expect(getTabbarRedirectPath('/pages/detail/detail')).toBe('')
  })

  it('一个可见项都没有时不拦截，避免用户无处可去', async () => {
    const { getTabbarRedirectPath } = await setupStore([item('关于', 'pages/about/about', ['admin'])])
    expect(getTabbarRedirectPath('/pages/about/about')).toBe('')
  })
})

describe('isPageTabbar', () => {
  it('tabbar 页面（含 H5 的 "/"）返回 true', async () => {
    const { isPageTabbar } = await setupStore(ADMIN_TAB_IS_LAST)
    expect(isPageTabbar('/')).toBe(true)
    expect(isPageTabbar('/pages/me/me')).toBe(true)
  })

  it('受限页也返回 true：角色不足时不高亮，但仍要有导航入口', async () => {
    const { isPageTabbar } = await setupStore(ADMIN_TAB_IS_LAST)
    expect(isPageTabbar('/pages/about/about')).toBe(true)
  })

  it('非 tabbar 页面返回 false', async () => {
    const { isPageTabbar } = await setupStore(ADMIN_TAB_IS_LAST)
    expect(isPageTabbar('/pages/detail/detail')).toBe(false)
  })
})

describe('守卫不会死循环', () => {
  it('回退目标本身一定放行（getTabbarRedirectPath 返回 ""）', async () => {
    const { getTabbarRedirectPath } = await setupStore(ADMIN_TAB_IS_HOME)

    const redirectPath = getTabbarRedirectPath('/')
    expect(redirectPath).toBe('/pages/about/about')
    // 对回退目标再判断一次必须放行，否则 reLaunch / next() 会反复触发
    expect(getTabbarRedirectPath(redirectPath)).toBe('')
  })

  it('受限页与首页是同一个页面时，也不会自己重定向到自己', async () => {
    const { getTabbarRedirectPath } = await setupStore(ADMIN_TAB_IS_HOME)

    const redirectPath = getTabbarRedirectPath('/pages/index/index')
    expect(redirectPath).not.toBe('/pages/index/index')
    expect(getTabbarRedirectPath(redirectPath)).toBe('')
  })
})
