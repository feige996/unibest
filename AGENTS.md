# AGENTS.md - unibest 开发指南

## 项目概览

unibest 是基于 uniapp + Vue3 + TypeScript + Vite5 + UnoCSS 的跨端开发模板，支持 H5、微信小程序、App（Android/iOS/HarmonyOS）等平台。

## 工程规范（Hermes）

详细规范唯一事实源在 [hermes/](./hermes/README.md)，按场景取用：

| 场景 | 文档 |
|------|------|
| 架构：事实源与生成物、平台接缝、校验边界、目录分层 | [hermes/architecture.md](./hermes/architecture.md) |
| 代码：命名、SFC 结构、TS、状态、提交、合入门禁 | [hermes/conventions.md](./hermes/conventions.md) |
| 平台：差异决策树、条件编译速查、本项目差异点表 | [hermes/platforms.md](./hermes/platforms.md) |
| 请求：分层、错误四分类、401 双 token 策略 | [hermes/api.md](./hermes/api.md) |
| SOP：新页面、全局组件、分包、tabbar、hooks | [hermes/sop-new-page.md](./hermes/sop-new-page.md) |
| 性能：分包规则、包体积检查、编码侧规则 | [hermes/performance.md](./hermes/performance.md) |
| 发布：`upload:mp`、changesets、uvm、环境切换 | [hermes/release.md](./hermes/release.md) |

三条铁律（全文见 `hermes/README.md`）：

1. **生成物不手改**：`src/pages.json`、`src/manifest.json`、`src/types/*.d.ts` 由 `*.config.ts` 生成，手改会被覆盖
2. **平台差异只用条件编译**：编译期能确定的不留运行时
3. **UI 优先原子类**：先 UnoCSS，再自定义 CSS

## 分支模型

本仓库本地主要维护两个分支：`base` 和 `main`。

- `base`：用户项目模板分支。用户执行 `pnpm create unibest` 时，CLI 会从 `https://gitee.com/feige996/unibest.git` 的 `base` 分支克隆基础模板，然后按用户选择注入 feature。
- `main`：完整开发与发布分支。包含模板源码、`packages/cli` 脚手架源码、feature 注入资源、文档和 npm 发布流程。

推荐工作流：

- 影响用户新建项目的模板改动，先在 `base` 分支完成，再合并到 `main`。
- CLI 参数、feature 注入逻辑、CLI 文档、npm 发布流程等改动，只在 `main` 分支完成。
- 不建议把 `main` 反向合并到 `base`，避免把 `packages/cli` 等 CLI 开发文件带入用户模板。
- 用户通过 CLI 创建出来的项目不包含 `packages/` 目录。

常见操作：

```bash
# 模板改动
git switch base
# 修改 src、vite.config.ts、pages.config.ts 等模板文件
git commit

git switch main
git merge base

# CLI 改动
git switch main
# 修改 packages/cli
git commit
```

## 架构

```text
unibest 仓库
├── base                    # 用户项目模板来源
└── main                    # 完整开发与发布分支
    ├── packages/cli/       # CLI 脚手架工具
    ├── packages/cli/features/
    └── src/                # 与 base 同步的模板源码
```

## AI 辅助 Skills

项目自带 `.agents/skills/`（信任项目后自动加载），按场景选用：

| Skill | 用途 |
|-------|------|
| uni-app | 框架文档参考：条件编译、生命周期、pages/manifest 配置；查官方文档优先用其推荐的 `search-docs-by-Uniapp-official` MCP 工具 |
| uniapp-project | 官方组件/API 集成细节与跨端兼容性 |
| uview-pro-vue3 | uView Pro 组件库参考（项目当前未安装该依赖，使用前先安装） |

## 核心配置文件

- [package.json](mdc:package.json) - 依赖和脚本
- [vite.config.ts](mdc:vite.config.ts) - 构建配置
- [pages.config.ts](mdc:pages.config.ts) - 路由配置（事实源）
- [manifest.config.ts](mdc:manifest.config.ts) - 应用清单（事实源）
- [uno.config.ts](mdc:uno.config.ts) - UnoCSS 配置

## 常用命令

```bash
# 开发
pnpm dev              # H5 开发服务
pnpm dev:h5           # H5 热更新
pnpm dev:mp           # 微信小程序
pnpm dev:app          # App 开发

# 构建
pnpm build            # 构建当前平台
pnpm build:h5         # H5 输出到 dist/build/h5
pnpm build:mp         # 微信小程序输出到 dist/build/mp-weixin
pnpm build:app        # App 输出到 dist/build/app

# 代码检查
pnpm lint             # ESLint
pnpm lint:fix         # ESLint 自动修复
pnpm type-check       # TypeScript 类型检查

# 合入前门禁(三条全过)
pnpm type-check && pnpm lint && pnpm test:run
```

## Code Style

### TypeScript
- Use explicit types for params and return values
- Prefix interfaces with `I`: `IUserInfoRes`, `ILoginForm`
- Use `import type` for types only

### Vue SFC
```vue
<script lang="ts" setup>
defineOptions({ name: 'PageName' })
definePage({ style: { navigationBarTitleText: 'Title' } })
</script>

<template>
  <!-- content -->
</template>

<style lang="scss" scoped>
/* styles */
</style>
```
- Order: template → script → style

### Imports
- Use `@/` alias for src imports: `import { http } from '@/http/http'`
- Group: external libs → Vue/UniApp → @/ → ../

### Naming
| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `TabbarItem.vue` |
| Pages | kebab-case | `login/index.vue` |
| Stores | useXxxStore | `useUserStore` |
| API functions | camelCase | `getUserInfo` |
| Constants | UPPER_SNAKE_CASE | `VITE_SERVER_BASEURL` |

### Error Handling
```typescript
try {
  const res = await http.post('/auth/login', data)
  return res
}
catch (error) {
  uni.showToast({ title: 'Failed', icon: 'error' })
  throw error
}
```

### UnoCSS
- Use utility classes: `flex justify-center items-center px-4 pt-safe`
- Theme colors: `text-primary`, `bg-primary`
- Safe areas: `pt-safe`, `pb-safe`, `p-safe`

### API Design
```typescript
// Always specify response type
return http.get<IUserInfoRes>('/user/info')
return http.post<IAuthLoginRes>('/auth/login', data)
```

### Pinia Stores
```typescript
export const useUserStore = defineStore('user', () => {
  const userInfo = ref<IUserInfoRes>(initialState)
  const setUserInfo = (val: IUserInfoRes) => { ... }
  return { userInfo, setUserInfo }
}, { persist: true })
```

## File Structure
```text
src/
├── api/           # API definitions
├── components/    # Vue components
├── hooks/         # Composable hooks
├── http/          # alova HTTP config
├── pages/         # Page components
├── store/         # Pinia stores
├── types/         # TypeScript types
└── utils/         # Utility functions
```

## ESLint
- Uses `@uni-helper/eslint-config`
- `console.log` allowed
- Run `pnpm lint:fix` before committing

## Important Notes
- Auto-imports enabled for Vue APIs and uni-app APIs
- Generated files: `src/service/`, `auto-import.d.ts`, `uni-pages.d.ts`
- Pages auto-generated from `src/pages/`
- App config in `manifest.config.ts`
