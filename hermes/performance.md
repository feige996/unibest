# 性能与分包规范

## 1. 分包(微信主包 2M 硬限制)

- 分包目录放 `src/pages/` 之外,注册到 `vite.config.ts` 的 `UniPages({ subPackages })`
- 低频/独立业务(如 demo、设置二级页)优先进分包
- bundle-optimizer 已启用(仅微信端):支持模块异步跨包调用、组件异步跨包引用,分包间复用代码不需要复制
- 判断该不该分包:页面是否首屏必需?不是 → 分包

## 2. 构建内置优化(不要重复做)

| 优化 | 状态 | 说明 |
|------|------|------|
| console/debugger 移除 | `VITE_DELETE_CONSOLE=true` | 提交前不用手工删 console |
| sourcemap | 关闭 | 需要时改 vite.config.ts,勿长期开 |
| minify | esbuild | dev 不压缩、prod 压缩 |
| build target | es6 | 兼容低版本 WebView |

## 3. 包体积日常检查

```bash
pnpm build:h5   # H5 生产构建自动打开 visualizer 分析
# 产物:node_modules/.cache/visualizer/stats.html
```

小程序端看微信开发者工具的「代码依赖分析」。

## 4. 编码侧规则

- 静态图片:大图优先网络地址或压缩后放 `src/static`;SVG 图标走 `src/static/my-icons/`(i-my-icons-*)
- UnoCSS `safelist` 只加**动态拼接类名**,每加一项全量注入,能不用则不用
- 列表页一律 z-paging(虚拟分页),不手写 onReachBottom 加载
- auto-import(`src/hooks`)按名导入即用,但不引入未使用的 hooks——eslint 可查
- 新增第三方依赖前看体积:小程序端无 tree-shake 保障的库(如全量 UI 库)优先按需引入
