# 架构规范

## 1. 事实源与生成物(唯一事实源与投影)

配置的**事实源**是根目录的 `*.config.ts`,构建时投影为 JSON/d.ts。改投影不改源 = 改动丢失。

| 事实源(手改这里) | 生成物(禁止手改) | 生成者 |
|------------------|------------------|--------|
| `pages.config.ts` | `src/pages.json` | vite-plugin-uni-pages |
| `manifest.config.ts` | `src/manifest.json` | vite-plugin-uni-manifest |
| `src/tabbar/config.ts` | pages.json 的 tabBar 段 | 引入 pages.config.ts |
| 组件目录 `src/components/**` | `src/types/components.d.ts` | vite-plugin-uni-components |
| `src/pages/**` + `definePage` 宏 | `src/types/uni-pages.d.ts` | vite-plugin-uni-pages |
| `src/hooks/**`、vue/uni-app API | `src/types/auto-import.d.ts` | unplugin-auto-import |

页面路由配置只写在页面内的 `definePage` 宏里,不写进 pages.config.ts 的页面列表。

## 2. 平台接缝

- **条件编译是唯一的平台分支手段**(编译期能确定的场景):JS 用 `// #ifdef` / `// #endif`,模板用 `<!-- #ifdef -->` / `<!-- #endif -->`
- 运行时判断平台用 `uni.getSystemInfoSync().uniPlatform` 等 API,只用于编译期无法确定的场景
- 仅 H5 生效的行为(如 devServer 代理 `VITE_APP_PROXY_*`、eruda 调试面板)不需要写条件编译,其他端构建时天然剔除
- 小程序端 dev 也是 `build` command(无 devServer),不要在非 H5 端假设热更新代理可用

## 3. 校验只在真边界

以下边界的数据**不可信**,必须校验后才进业务层:

| 真边界 | 校验位置 |
|--------|---------|
| HTTP 响应 | `src/http` / alova 拦截器统一做,业务层不重复判空 |
| `uni.getStorageSync` 读出的数据 | 读取处判类型/结构 |
| URL 参数(onLoad options) | 页面入口处校验 |
| postMessage / 第三方 SDK 回调 | 回调入口处校验 |

组件 props、store 内部传递信任 TS 类型,**不**重复运行时校验。

## 4. 目录分层与职责

```
src/
├── pages/          # 页面(约定式路由,文件即路径;分包页面不放这里)
├── pages-demo/     # 分包目录(subPackages 配置,分包不能是 src/pages 的子目录)
├── components/     # 全局组件(fg- 前缀,easycom 自动注册)
├── layouts/        # 布局
├── api/            # API 接口定义
├── http/           # 请求封装(alova)
├── store/          # Pinia store(持久化用 pinia-plugin-persistedstate)
├── hooks/          # 组合式函数(auto-import,免 import)
├── tabbar/         # 底部导航(config.ts 为唯一配置源)
├── static/         # 静态资源(@img 别名指向 images 子目录)
└── types/          # 类型声明(大部分为生成物,见第 1 节)
```

- 别名:`@` → `src/`;`@img` → `src/static/images`(vite 运行时真相)
- ⚠️ 已知不对称:vite 的 `@img` 指向 `src/static/images`,tsconfig 的 `@img/*` 指向 `src/static/*`。以 vite 为准,建议后续把 tsconfig paths 修正为 `./src/static/images/*`
- 请求一律走 `src/http` 封装,业务代码不直接调 `uni.request`
- 服务端状态以接口为事实源,store 只放需要跨页共享/持久化的状态;凡不能从 store 重建的 UI 状态都是刷新后丢失的隐患

## 5. 环境变量

- env 文件统一在 `env/` 目录(vite.config.ts 的 `envDir`),不在项目根
- 变更部署相关变量(端口 `VITE_APP_PORT`、接口地址 `VITE_SERVER_BASEURL`、代理开关 `VITE_APP_PROXY_*` 等)改 env 文件,不在代码里硬编码
- `VITE_DELETE_CONSOLE=true` 时构建移除 console/debugger,提交前不需要手工删
