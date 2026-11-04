---
name: project-config
description: >-
  通过读写项目根目录 project.config.json / project.private.config.json 管理
  小程序/小游戏项目配置（合法域名校验、热重载、ES6/增强编译、上传压缩、
  miniprogramRoot、appid、基础库、compileType 等）。不调用 wechatide。
  用户提到 project.config、项目设置、关域名校验时使用。
---

# project-config

## 用途

直接编辑项目配置文件管理本地/编译设置。**不调用** `wechatide`。

进入本 scene 时跳过根 SKILL 的可用状态检查门禁。只有后续移交到调用 `wechatide` 的 scene 时才执行门禁（仍不要无故先跑安装检查）。

字段与写入规则以本 scene 及 [project-config-fields.md](../../references/project-config-fields.md) 为准；官方文档仅作补充：[项目配置文件](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html)。

## 文件与生效规则

| 文件 | 作用 |
|------|------|
| `project.config.json` | 团队共享；影响编译/上传产物的开关必须写这里 |
| `project.private.config.json` | 个人本机偏好；同名字段优先级更高 |

1. private 覆盖 common 同名字段
2. 开发期偏好 → 优先改 private 的 `setting`
3. 编译/上传产物开关 → 只能改 common 的 `setting`
4. 不生效时先查 private 是否覆盖
5. `packOptions` / `watchOptions` 等改后可能需重开项目

## 工作流

读 common（及 private）→ 按覆盖规则理解生效值 → 选对写入文件 → **合并修改**（保留其余字段、合法 JSON）→ 说明改了哪个文件/字段。

## 常见意图

| 意图 | 文件 | 修改 |
|------|------|------|
| 关合法域名校验 | private | `setting.urlCheck` → `false` |
| 开热重载 | private | `setting.compileHotReLoad` → `true` |
| 开 Skyline 调试 | private | `setting.skylineRenderEnable` → `true` |
| 开 ES6 + 增强编译 | common | `setting.es6` 与 `enhance` **同开同关** |
| 上传压缩 JS/WXSS/WXML | common | `minified` / `minifyWXSS` / `minifyWXML` |
| 改源码目录 / 基础库 / appid | common（appid 若 private 已有则以 private 为准） | `miniprogramRoot` / `libVersion` / `appid` |

完整字段表：[references/project-config-fields.md](../../references/project-config-fields.md)

## 约定

- 不为此调用 `wechatide ...`
- 不为此检查或启动微信开发者工具，不要求登录
- 优先使用本 skill / 字段速查中的字段；勿编造未出现过的字段名
- 不适合：开/关窗口、预览、上传、自动化；也不改 WechatIDE 全局偏好

## 移交

改完配置后按根 SKILL 移交：`project` + 已改文件/字段。需要模拟器生效 → `initializer`（可能需重开窗）；预览/上传 → `previewer`；导入列表 → `project-manager` / create-project-guide。
