# 新页面 / 新组件 SOP

## 1. 新建页面(3 步)

1. **建文件**:`src/pages/模块名/页面名.vue`(约定式路由,文件路径即路由,**无需注册**)
2. **写 `definePage` 宏,放在 script 最上面**:

```vue
<script setup lang="ts">
definePage({
  style: { navigationBarTitleText: '页面标题' },
})
</script>
```

3. **跑 `pnpm type-check`**:重新生成 `src/types/uni-pages.d.ts`,路由类型才可用

注意:
- 页面私有组件放同目录 `components/` 子目录(构建时已排除,**不会被识别成页面**)
- 需要登录态的页面按项目现有登录拦截方式处理,不自行在页面内写 token 判断

## 2. 新建全局组件(1 步)

放 `src/components/fg-组件名/fg-组件名.vue`,easycom 规则 `^fg-(.*)` 自动注册,任何页面直接 `<fg-组件名 />`,**无需 import**。

- z-paging 同理:`<z-paging>` 直接用
- 其他第三方库组件按各自 easycom 规则

## 3. 新建分包页面(2 步)

1. 分包目录放 `src/pages/` **之外**(如 `src/pages-sub/xxx`),内建页面文件
2. 在 `vite.config.ts` 的 `UniPages({ subPackages: [...] })` 数组加目录路径

## 4. 新增 tabbar 项(1 步)

只改 `src/tabbar/config.ts`(唯一配置源),pages.json 的 tabBar 段自动生成。图标等资源同步放约定目录。

## 5. 新增组合式函数(1 步)

放 `src/hooks/`,auto-import 已配置 `dirs: ['src/hooks']`,页面内**直接调用,无需 import**。

## 6. 验证清单(新建任何东西后)

```bash
pnpm type-check   # 路由/组件类型生成且零错误
pnpm lint         # 格式合规
pnpm dev:mp       # 目标平台真机/模拟器跑一遍
```
