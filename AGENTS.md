# unibest 项目概览

基于 uniapp + Vue3 + TypeScript + Vite5 + UnoCSS 的跨平台开发框架,支持 H5、小程序、APP 多平台,无需 HBuilderX,命令行开发。

## 工程规范(Hermes)

详细规范唯一事实源在 [hermes/](./hermes/README.md),按场景取用:

| 场景 | 文档 |
|------|------|
| 架构:事实源与生成物、平台接缝、校验边界、目录分层 | [hermes/architecture.md](./hermes/architecture.md) |
| 代码:命名、SFC 结构、TS、状态、提交、合入门禁 | [hermes/conventions.md](./hermes/conventions.md) |
| 平台:差异决策树、条件编译速查、本项目差异点表 | [hermes/platforms.md](./hermes/platforms.md) |
| 请求:分层、错误四分类、401 双 token 策略 | [hermes/api.md](./hermes/api.md) |
| SOP:新页面/全局组件/分包/tabbar/hooks | [hermes/sop-new-page.md](./hermes/sop-new-page.md) |
| 性能:分包规则、包体积检查、编码侧规则 | [hermes/performance.md](./hermes/performance.md) |
| 发布:upload:mp、changesets、uvm、环境切换 | [hermes/release.md](./hermes/release.md) |

三条铁律(全文见 hermes/README.md):

1. **生成物不手改**:`src/pages.json`、`src/manifest.json`、`src/types/*.d.ts` 由 `*.config.ts` 生成,手改会被覆盖
2. **平台差异只用条件编译**:编译期能确定的不留运行时
3. **UI 优先原子类**:先 UnoCSS,再自定义 CSS

## 核心配置文件

- [package.json](mdc:package.json) - 依赖和脚本
- [vite.config.ts](mdc:vite.config.ts) - 构建配置
- [pages.config.ts](mdc:pages.config.ts) - 路由配置(事实源)
- [manifest.config.ts](mdc:manifest.config.ts) - 应用清单(事实源)
- [uno.config.ts](mdc:uno.config.ts) - UnoCSS 配置

## 常用命令

```bash
pnpm dev          # H5
pnpm dev:mp       # 微信小程序
pnpm dev:app      # APP
pnpm build:mp     # 微信小程序生产构建
pnpm upload:mp    # 小程序上传(见 hermes/release.md)

# 合入前门禁(三条全过)
pnpm type-check && pnpm lint && pnpm test:run
```
