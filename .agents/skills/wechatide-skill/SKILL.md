---
name: wechatide-skill
version: 0.3.11
description: >-
  微信开发者工具（wechatide）工作流根入口：小程序/小游戏的创建与导入、编译预览上传、
  登录与项目管理、页面自动化、调试取证、云开发，以及开发者工具的下载安装更新。
  当当前项目明确是微信小程序或小游戏时使用；用户提到微信开发者工具、小程序/小游戏模拟器、
  新建项目、预览上传、自动化点击、console/network、云函数/云数据库、下载安装开发者工具时也使用。
metadata:
  short-description: 微信开发者工具 skill 包
related-skills:
  - name: tencentmap-miniprogram-skill
    source: https://skillhub.cn/skills/tencentmap-miniprogram-skill
    scope: 小程序前端地图组件与定位（map / marker / callout / polyline、wx.getLocation / chooseLocation / openLocation、门店标点、地图选点、定位权限）
    triggers:
      - map 组件 / marker / callout / polyline
      - wx.getLocation / wx.chooseLocation / wx.openLocation
      - 地图选点 / 门店标点 / 定位权限
  - name: tencentmap-webservice-skill
    source: https://skillhub.cn/skills/tencentmap-webservice-skill
    scope: 腾讯位置服务后端 HTTP API（路线规划、POI 搜索、地理编码 / 逆地理编码、距离矩阵、IP 定位）
    triggers:
      - 路线规划 / POI 搜索 / 地理编码 / 逆地理编码
      - 距离矩阵 / IP 定位
      - 从 A 到 B 距离 / 附近搜索 / 经纬度转地址
---

# wechatide-skill

## 用途

面向微信开发者工具工作流的根入口。**小程序与小游戏同等适用**（除非某工具参数或说明明确限定类型）。当前项目已明确是微信小程序或小游戏时，也应使用本 skill。

日常业务会话：默认假设本机已可调用 `wechatide`，需要时先跑 `check_wechatide_status`（见下方门禁），再进对应 scene。**不要**每个业务会话开头先跑安装检查。

**应使用**：小程序/小游戏的编译、预览、上传、登录、项目管理与 `project.config.json`；页面自动化与验证；运行时/截图/日志排查；云环境与云函数；以及下载、安装或更新微信开发者工具。

**不应使用**：通用编码辅助；与小程序/小游戏无关的桌面自动化；任意 shell / 未注册工具调用。

## Skill 安装时检查（首次必须）

下列任一成立时，**先**完成安装诊断，再调任何业务 `wechatide` 工具：本 skill **首次安装 / 首次导入到 agent**；用户说「安装 skill / 配置 wechatide-skill」；任意时刻 `wechatide` 调用不了。

命令、返回分支与软链处理 → [运行前检查 · Skill 安装时检查](references/environment-readiness.md#skill-安装时检查)；下载/更新流程 → `skills/installer/SKILL.md`。

## 运行前门禁（必须）

**禁止在沙箱 / sandbox 中运行 `wechatide`。** 须在非沙箱、可访问本机桌面的 shell 中执行；环境强制沙箱时先向用户说明并改用非沙箱，勿反复重试。

需要 `wechatide` 时按下面做；完整规则见 [运行前检查](references/environment-readiness.md)。

0. 若属「Skill 安装时检查」触发条件 → **先**完成安装诊断，再继续
1. 本会话尚未检查过：
   `wechatide -c <clientName> check_wechatide_status --skill-version <本文件 frontmatter 的 version>`
   → 按运行前检查处理返回。**可继续业务**仅当：`versionRelation` 为 `equal` / `agent_ahead`，且 `loginExpired: false`（再按第 3 步处理 token）
2. 若上一步（或任意 `wechatide` 调用）命令不存在 / 无法执行 → 安装诊断；命令可用时不要主动跑
3. 分入口处理 Token：`wechatide -c` / skill-call 走可选 CLI 令牌，未配置则不验；仅当 `cliTokenRequired` / 兼容字段 `tokenRequired` 为 true 或返回 `cli_token_required` 时才带 CLI 令牌（复用已记 token，否则问用户）。`wechatide mcp` / Inspector 才需要独立 MCP Token（`mcpTokenRequired: true`）；缺 Token / `mcp_token_required` → 请用户到「设置 → 安全」**重新复制 MCP 配置**，不要把 CLI 可选令牌当成 MCP Token。禁止猜 / 翻本地

跳过：`installer`、`project-config`。用户要下载/安装/更新可直接进 `installer`。

## 异步任务（全局）

任意工具返回 `pending + taskId` 时，统一按 [异步任务与轮询](references/async-task-polling.md) 处理——**各 scene 不再重复说明**：

- **仅** `login` / `wechatide auth`：先提醒用户，再**主动轮询**（会阻塞后续）
- **其他**（上传、删除、云写、预览确认等）：提醒用户在开发者工具内确认 + 写 `pendingTask`，**不要**主动轮询；用户继续前先查旧 `taskId`，勿直接重发

## 调用方式

```bash
wechatide -c <clientName> <toolName> [flags...] [--token <cliAccessToken>]
```

- `-c`：当前 agent 产品简称（如 `CodeBuddy`、 `Cursor`），须与授权弹窗一致，同一会话内不变
- `<toolName>`：下划线工具名；勿编造，先查 [tool-index](references/tool-index.md) 或 `wechatide <toolName> -h`
- `--token` / clientName 细则 → [运行前检查](references/environment-readiness.md)
- `--project` 等需要路径的参数，使用本地绝对路径；
- 参数类型是 `object`/`array` 可用 JSON 或 `--<field>-file` 指定一个本地绝对路径

共享工具以 tool-index **主归属**为准；次要 scene 仅可按本 scene 文档调用，勿跨 scene 随便混用：

| 工具 | 主归属 | 说明 |
|------|--------|------|
| `automation_runtime_info` | initializer | automator / debugger 可只读取上下文，勿当「开窗」替代 |
| `automation_wx_api` | debugger | 自动化流程内 mock/调用可在 automator |
| `simulator_screenshot` | debugger | **唯一推荐截图**（参数见 `--help`） |
| `simulator_refresh` / `build_npm` | compiler | debugger 可借用刷新，勿无差别反复刷 |
| `polling_task_result` | 通用 | 任意 scene 查询需要用户交互的 toolCall 最终结果 |

完整主归属以 [tool-index](references/tool-index.md) 的 scene 列为准（多 scene 时第一项为主）。

## 路由

| 用户意图 | Scene |
|----------|--------|
| 下载、安装或更新微信开发者工具；本 skill 首次安装/导入后的安装诊断；`wechatide` 调用不了经诊断需安装/更新；`agent_ahead` 后遇到明确版本兼容 blocker；macOS DMG 需补 `wechatide` 软链 | `skills/installer/SKILL.md` |
| 从零创建小程序/小游戏项目（目录 + 配置 + 导入列表；**非**独立 scene） | `wechatide-tools/references/create-project-guide.md` |
| 打开/关闭项目窗口、登录、AppID、运行时上下文 | `skills/initializer/SKILL.md` |
| 项目列表查询 / 导入 / 从列表删除、代码片段分享 / 导入（不开窗口） | `skills/project-manager/SKILL.md` |
| 改 `project.config.json`（修改基础库版本、域名校验、热重载、编译开关等，不调 MCP） | `skills/project-config/SKILL.md` |
| 编译页面、单文件编译、构建 npm、刷新模拟器 | `skills/compiler/SKILL.md` |
| 预览、二维码、上传体验版（预览优先 `auto_preview`；可不打开窗口） | `skills/previewer/SKILL.md` |
| 点击、输入、滚动、页面断言、自动化脚本 | `skills/automator/SKILL.md` |
| console / network / 截图取证 / 状态诊断 | `skills/debugger/SKILL.md` |
| 云环境、云函数、云数据库、云存储、消息推送 | `skills/cloudbase-operator/SKILL.md` |
| 小程序地图组件 / 腾讯位置服务 API | 外部 skill：`tencentmap-miniprogram-skill`（前端）/ `tencentmap-webservice-skill`（后端）——本包不处理，需触发主动下载；详见 [map-skill-index](references/map-skill-index.md) |

选择原则：按**当前主目标**进一个 scene；不要跨 scene 混用原子工具。多目标时先完成 blocker，再移交。

## 跨 scene 移交（必须）

切换 scene / 走完 create-project 后，带上下列上下文（可写入回复，勿丢）：

| 字段 | 要求 |
|------|------|
| `nextScene` | 目标 scene 名，或 `create-project-guide` / 结束 |
| `project` | 已有项目时必填：本地绝对路径 |
| `confirmed` | 已确认事实（如已登录、`versionRelation` 及兼容性风险、窗口已开、appid、env、当前页） |
| `blocker` | 未决项；无则省略 |
| `pendingTask` | 有未完成异步任务时必填：`taskId`、原工具名、非敏感参数摘要、最后状态；后续不得直接重发原操作 |
| 附加 | 见目标 scene「移交」表（页面、选择器、env 等） |

下一 scene：**不要**重复 `check_wechatide_status`；**不要**无故 `open_project_window`（除非 `confirmed` 表明窗口未开且目标需要窗口）。

## 标准工作流

1. 识别目标并路由（见上表）：
   - 只改项目配置 → `project-config`（跳过门禁）
   - 从零创建 → `create-project-guide.md`（本地目录/配置可先做；**第一次**调用 `wechatide` 前完成门禁）
   - 管理项目列表或分享 / 导入代码片段 → `project-manager`
   - 预览 / 上传 → `previewer`（可不打开项目窗口）
   - 编译 / 调试 / 自动化 → `initializer` 开窗后再进对应 scene
2. 目标需要 `wechatide` 时：若属 Skill 首次安装/导入 → 先安装诊断；否则先直接调用（见 [运行前检查](references/environment-readiness.md)）；**日常业务不要**无故先跑安装检查
3. 有匹配的 `pendingTask` 时先查旧 `taskId`，不得直接重发原操作

## 交互与失败

异步任务 → [异步任务与轮询](references/async-task-polling.md)（规则见上方「异步任务（全局）」）。安全边界 → [approval-policy.md](references/approval-policy.md)。

执行失败：原样抛出错误，不要吞掉或猜测修复。`PROJECT_PATH_NOT_FOUND` / `PROJECT_CONFIG_JSON_ERROR` / `APPID_ERROR` 见 [project-tool-error-guide.md](wechatide-tools/references/project-tool-error-guide.md)（勿改成调用前预检）。各 scene「失败快表」只补充本场景特有处理。

## 参考

- 工具索引（含主归属）：[references/tool-index.md](references/tool-index.md)
- 运行前检查（可用状态 / 安装诊断）：[references/environment-readiness.md](references/environment-readiness.md)
- 异步任务与轮询：[references/async-task-polling.md](references/async-task-polling.md)
- 工具注册表：`wechatide-tools/references/tools.yaml`（按需读单工具，勿整文件灌入）
- `--project` 配置/appid 错误：`wechatide-tools/references/project-tool-error-guide.md`
- 创建项目：`wechatide-tools/references/create-project-guide.md`
- 地图外部 skill：`tencentmap-miniprogram-skill` / `tencentmap-webservice-skill`，索引见 `references/map-skill-index.md`
