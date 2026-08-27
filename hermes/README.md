# unibest · Hermes 规范

> Hermes = 项目的信使:把工程规范传递给每一位开发者(和 AI)。

基于 unibest 4.4.1(uni-app + Vue3 + TS + Vite5 + UnoCSS)的实际配置提炼。

## 三条铁律

1. **生成物不手改**:`src/pages.json`、`src/manifest.json`、`src/types/*.d.ts` 全部由 `*.config.ts` 生成,手改会在下次构建被覆盖
2. **平台差异只用条件编译**:`#ifdef H5 / #ifdef MP-WEIXIN / #ifdef APP-PLUS`,编译期能确定的不留到运行时
3. **UI 优先原子类**:先 UnoCSS 原子类,再考虑自定义 CSS

## 文档索引

| 文件 | 内容 |
|------|------|
| [architecture.md](./architecture.md) | 架构规范:事实源与生成物、平台接缝、校验边界、目录分层 |
| [conventions.md](./conventions.md) | 代码规范:命名、SFC 结构、TS、状态、请求、提交与验证命令 |

## 常用命令

```bash
pnpm dev            # H5 开发
pnpm dev:mp         # 微信小程序开发
pnpm dev:app        # APP 开发
pnpm build:mp       # 微信小程序生产构建
pnpm type-check     # vue-tsc 类型检查(合入前必过)
pnpm lint:fix       # ESLint 修复
pnpm test:run       # vitest 单次运行
```
