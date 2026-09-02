import { getTabbarRedirectPath, tabbarStore } from '@/tabbar/store'

export const permission = {
  install(router) {
    router.beforeEach((to, from, next) => {
      const path = to.path
      // H5 直接输入地址栏、浏览器前进后退也要拦住角色不足的 tabbar 页面
      const redirectPath = getTabbarRedirectPath(path)
      if (redirectPath) {
        next(redirectPath)
        return
      }
      tabbarStore.setAutoCurIdx(path)
      next()
    })
  },
}
