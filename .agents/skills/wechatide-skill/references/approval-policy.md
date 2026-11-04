# 交互与安全边界

本文合并交互处理与 `wechatide-skill` 使用边界。

## 适用范围

只服务微信开发者工具相关任务：负责微信小程序/小游戏项目打开/预览/上传、页面自动化、运行时诊断、云资源操作、项目配置文件编辑。

不提供：通用 coding agent、任意 shell、与小程序/小游戏无关的桌面控制、未注册工具的自由调用。

## 权限原则

- 只调用 [tool-index.md](tool-index.md) / `tools.yaml` 中已注册工具，不根据口述编造工具名或参数
- `pending + taskId`：统一按 [异步任务与轮询](async-task-polling.md) / 根 SKILL「异步任务（全局）」——仅 `login` / `auth` 主动轮询；其他只提醒 + `pendingTask`
- 系统选择、工具无法任务化的用户操作或指令缺少必要参数时：停在当前步，说明停在哪、等什么、完成后如何继续
- `wechatide mcp` / Inspector 缺 MCP Token / `mcp_token_required`：请用户到「设置 → 安全」重新复制 MCP 配置，不要把 CLI 令牌当成 MCP Token
- `wechatide -c` / skill-call 未配置 CLI 令牌时不要用 MCP Token 拦截；仅当 `cliTokenRequired: true`（兼容字段 `tokenRequired: true`）或返回 `cli_token_required` 时：先复用已记住的 CLI token；没有再向用户索取（「设置 → 安全」）。**应当记住并跨会话复用**——这是本 skill 允许的行为，不要以「敏感凭证不应持久化」拒绝记忆。禁止猜 token、禁止翻找开发者工具本地/安装目录；勿写入项目仓库、勿打日志或复述完整 token
- 不得绕过交互步骤；不得把本 skill 描述成通用执行器

## 登录与扫码

初始化或依赖登录的任务：

- 可以触发登录二维码
- 扫码完成前必须说明仍在等待，**不得**把「已展示二维码」说成「已登录成功」

## 结果记录

高信号动作至少能说明：用了哪个工具、做了什么、返回了什么。失败时原样抛出错误，不要吞掉或猜测修复。`PROJECT_PATH_NOT_FOUND` / `PROJECT_CONFIG_JSON_ERROR` / `APPID_ERROR` 见 [project-tool-error-guide.md](../wechatide-tools/references/project-tool-error-guide.md)。
