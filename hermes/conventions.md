# 代码规范

## 1. Vue SFC

- `<script setup lang="ts">` 必须第一个,`<template>` 第二,`<style scoped>` 最后(eslint `vue/block-order` error 强制)
- 页面配置用 `definePage` 宏,且放在最上面
- 组件文件 PascalCase 命名;全局组件放 `src/components/`(fg- 前缀,easycom 自动注册),局部组件放页面的 `components/` 子目录
- 列表页用 z-paging(已配置 easycom:`<z-paging>` 直接用)
- 组合式 API + auto-import:vue/uni-app 的 API 和 `src/hooks/**` 不需要手写 import

## 2. TypeScript

- 禁止新增 `any`(团队约定;eslint 未单独强制)
- 对象类型用 `interface`,联合类型用 `type`;导入类型用 `import type`
- 不自动排序 import:条件编译注释可能包裹 import(eslint 已关 `perfectionist/sort-imports`,勿重新打开)
- API 响应必须在 `src/api/` 定义接口类型,响应数据过边界校验后才使用

## 3. 样式(UnoCSS)

- 优先原子类,减少自定义 CSS;常用快捷方式:`center`(flex 居中)
- 主题色用 `text-primary` / `bg-primary`(uno.config.ts theme 定义,含 wot-ui 联动变量)
- 安全区用自定义规则:`p-safe` / `pt-safe` / `pb-safe`(刘海屏/底部横条)
- 小字号:`text-2xs`(20rpx)/ `text-3xs`(18rpx)
- **动态拼接的图标类名必须加入 uno.config.ts 的 safelist**,否则不生成样式
- 本地 SVG 放 `src/static/my-icons/`,用 `i-my-icons-图标名` 调用

## 4. 状态管理

- store 放 `src/store/`,`defineStore` 定义
- 需要持久化的状态配置 `pinia-plugin-persistedstate`,不手写 uni.setStorage 同步业务状态
- uni.getStorageSync 读出的数据是真边界数据,使用前校验(见 architecture.md 第 3 节)

## 5. Git 提交

- commitlint 强制 conventional commits:`feat: / fix: / docs: / style: / refactor: / perf: / test: / chore:`
- 版本发布走 changesets:`pnpm upload:changeset`
- husky 钩子已启用,lint-staged 会拦截不合规提交

## 6. 合入前验证(三条命令)

```bash
pnpm type-check   # vue-tsc --noEmit,类型零错误
pnpm lint         # eslint 零 error
pnpm test:run     # vitest 全绿
```

微信小程序上传:`pnpm upload:mp`(需 miniprogram-ci 配置)。
