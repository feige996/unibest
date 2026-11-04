# project.config 字段速查

本 skill 内的字段说明与写入规则（含 `skills/project-config/SKILL.md`）优先于外部文档。

官方文档仅作补充：[项目配置文件](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html)。

## `setting` 字段速查

### 可写 private（开发期偏好）

| 字段 | 类型 | 说明 |
|------|------|------|
| `urlCheck` | `boolean` | 检查安全域名与 TLS 版本 |
| `compileHotReLoad` | `boolean` | 保存后热重载 |
| `autoAudits` | `boolean` | 自动运行体验评分 |
| `bigPackageSizeSupport` | `boolean` | 预览 / 真机调试放宽主分包体积上限 |
| `skylineRenderEnable` | `boolean` | Skyline 渲染调试 |
| `preloadBackgroundData` | `boolean` | 加载时数据预拉取 |
| `lazyloadPlaceholderEnable` | `boolean` | 懒注入占位组件调试 |
| `ignoreDevUnusedFiles` | `boolean` | 开发阶段过滤无依赖文件 |
| `ignoreCodeQuality` | `boolean` | 开发阶段跳过代码质量检测 |
| `useApiHook` | `boolean` | API Hook（关闭可能影响 mock 等调试能力） |
| `checkInvalidKey` | `boolean` | 展示 JSON 校验错误 |

### 必须写 common（编译 / 上传产物）

| 字段 | 类型 | 说明 |
|------|------|------|
| `es6` | `boolean` | ES6 转 ES5；须与 `enhance` 同开同关 |
| `enhance` | `boolean` | 增强编译；须与 `es6` 同开同关 |
| `condition` | `boolean` | 条件编译 |
| `postcss` | `boolean` | 上传时样式自动补全 |
| `minified` | `boolean` | 上传时压缩脚本 |
| `minifyWXSS` | `boolean` | 上传时压缩样式 |
| `minifyWXML` | `boolean` | 上传时压缩 WXML |
| `swc` | `boolean` | SWC 编译 |
| `uglifyFileName` | `boolean` | 上传时代码保护 |
| `ignoreUploadUnusedFiles` | `boolean` | 上传时过滤无依赖文件 |
| `uploadWithSourceMap` | `boolean` | 上传带 sourcemap |
| `useCompilerPlugins` | `string[] \| false` | 编译插件，如 `["typescript","less"]`；关闭则写 `false` |
| `packNpmManually` | `boolean` | 是否手动配置构建 npm 路径 |
| `packNpmRelationList` | `object[]` | 仅 `packNpmManually` 为 `true` 时生效，指定 packageJson 与产物目录关系 |
| `babelSetting` | `object` | 增强编译下 Babel 配置（如 `ignore` 数组） |
| `minifyWXMLSetting` | `object` | WXML 压缩细节配置 |

## 其他常用一级字段

一般写入 `project.config.json`：

| 字段 | 类型 | 说明 |
|------|------|------|
| `appid` | `string` | 小程序 AppID；若 private 已有 `appid`，以 private 为准 |
| `projectname` | `string` | 项目名称 |
| `compileType` | `string` | `miniprogram`、`plugin` 或 `game` |
| `libVersion` | `string` | 基础库版本号；也可用 `latest` / `trial` / `widelyUsed`（这三项写在 private 无效） |
| `miniprogramRoot` | `string` | 小程序源码目录，相对项目根；`app.json`、页面与组件等通常在此目录下。未配置时默认为项目根 |
| `pluginRoot` | `string` | 插件项目源码目录，相对项目根；`compileType` 为 `plugin` 时使用 |
| `cloudfunctionRoot` | `string` | 云函数代码根目录，相对项目根；云开发云函数工程所在位置 |
| `cloudbaseRoot` | `string` | 云开发（CloudBase）代码根目录，相对项目根；与云开发相关的工程目录 |
| `packOptions` | `object` | 打包选项；含 `ignore` / `include` 数组，改后可能需重开项目 |
| `packOptions.ignore` | `object[]` | 打包时忽略的文件 / 目录规则列表 |
| `packOptions.include` | `object[]` | 打包时强制带上的文件 / 目录规则列表（优先于 `ignore`） |
| `watchOptions` | `object` | 文件监听配置 |
| `watchOptions.ignore` | `string[]` | 忽略展示与监听的 glob 列表；改后需重开项目 |
| `scripts` | `object` | 自定义预处理命令；在编译 / 预览 / 上传前由开发者工具执行本地 shell 命令 |
| `scripts.beforeCompile` | `string` | 编译前执行的命令，例如本地构建脚本 |
| `scripts.beforePreview` | `string` | 预览前执行的命令 |
| `scripts.beforeUpload` | `string` | 上传代码包前执行的命令 |
| `debugOptions` | `object` | 调试相关选项 |
| `debugOptions.hidedInDevtools` | `object[]` | 调试器 Sources 面板隐藏源码的规则（格式同 `packOptions.ignore`） |

`packOptions.ignore` / `include` 与 `debugOptions.hidedInDevtools` 的规则项：

| 字段 | 类型 | 说明 |
|------|------|------|
| `type` | `string` | `folder`、`file`、`suffix`、`prefix`、`regexp` 或 `glob` |
| `value` | `string` | 路径或匹配值；表示路径时相对 `miniprogramRoot` |

示例：

```json
{
  "type": "suffix",
  "value": ".webp"
}
```
