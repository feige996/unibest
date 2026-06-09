/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  /** 网站标题，应用名称 */
  readonly VITE_APP_TITLE: string
  /** 服务端口号 */
  readonly VITE_SERVER_PORT: string
  /** 后台接口地址 */
  readonly VITE_SERVER_BASEURL: string
  /** 微信小程序开发版后台接口地址，不配置则使用 VITE_SERVER_BASEURL */
  readonly VITE_SERVER_BASEURL__WEIXIN_DEVELOP?: string
  /** 微信小程序体验版后台接口地址，不配置则使用 VITE_SERVER_BASEURL */
  readonly VITE_SERVER_BASEURL__WEIXIN_TRIAL?: string
  /** 微信小程序正式版后台接口地址，不配置则使用 VITE_SERVER_BASEURL */
  readonly VITE_SERVER_BASEURL__WEIXIN_RELEASE?: string
  /** H5是否需要代理 */
  readonly VITE_APP_PROXY_ENABLE: 'true' | 'false'
  /** H5是否需要代理，需要的话有个前缀 */
  readonly VITE_APP_PROXY_PREFIX: string
  /** H5部署网站的base路径 */
  readonly VITE_APP_PUBLIC_BASE: string
  /** H5路由模式 */
  readonly VITE_APP_ROUTER_MODE: 'history' | 'hash'
  /** 后端是否有统一前缀 /api */
  readonly VITE_SERVER_HAS_API_PREFIX: 'true' | 'false'
  /** 认证模式，'single' | 'double' ==> 单token | 双token */
  readonly VITE_AUTH_MODE: 'single' | 'double'
  /** 是否清除console */
  readonly VITE_DELETE_CONSOLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare const __VITE_APP_PROXY__: 'true' | 'false'
