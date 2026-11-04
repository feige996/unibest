# 运行前检查

需要调用 `wechatide` 时按本文处理（根 SKILL / installer 链到本文，以本文为准）。

## 两种入口（先分清）

| 入口 | 何时 | 先跑什么 |
|------|------|----------|
| **Skill 安装时检查** | 本 skill 首次安装/导入 agent；用户说「安装 skill / 配置 wechatide-skill」；或明确要确认本机开发者工具是否就绪 | **先** `check-installation.mjs`（可再 `ensure-cli-path.mjs`），通过后再 `check_wechatide_status` |
| **日常业务门禁** | 已确认本机可用、做小程序业务 | 默认先 `check_wechatide_status`；**不要**每个会话先跑安装诊断。**只有** `wechatide` 调用不了时，再跑「安装诊断」 |

**跳过门禁**：`installer`（下载/更新）；`project-config`（只改本地 JSON）。切入会调 `wechatide` 的 scene 后再执行本文。

## Skill 安装时检查

在本 skill **根目录**、非沙箱执行：

```bash
node skills/installer/scripts/check-installation.mjs
# 非默认安装路径：
node skills/installer/scripts/check-installation.mjs --install-root "<安装目录>"
```

按返回分支（对应产品侧三种引导）：

| # | 现象 / 返回 | Agent 必须做 |
|---|-------------|--------------|
| 1 | 未安装开发者工具：`reason: not_installed`（无 `mustEnterInstaller`） | 先问是否非默认路径并用 `--install-root` 重查；确认默认路径后进 `installer`，引导下载安装（macOS 只推 `.pkg`） |
| 2 | 已安装但不可用 / 版本不对：`mustEnterInstaller: true`（`wechatide_missing` / `electron_version_too_old` / `nw_runtime_incompatible` / `cli_unavailable` / 其它） | **不得继续业务工具**；进 `installer` 引导安装或更新到兼容版本 |
| 3 | 已安装且 CLI 文件在，但 PATH 上没有 `wechatide`（macOS **DMG** 拖装常见；`compatible: true` 且返回了绝对路径 `command`，或日常仍敲不出命令） | **不要**重新下载；跑 `node skills/installer/scripts/ensure-cli-path.mjs` 创建软链（`/usr/local/bin` 或 `~/.local/bin`） |

`ensure-cli-path`：

```bash
node skills/installer/scripts/ensure-cli-path.mjs
node skills/installer/scripts/ensure-cli-path.mjs --check
```

装诊断 / 软链成功后：再跑下方「可用状态检查」（§1）。安装侧未就绪时不要假装业务可用。

## 清单（日常业务）

1. 本会话尚未检查过 → 见下方「可用状态检查」（§1）：先 `versionRelation`，再 `loginExpired`，再按入口处理 Token（`wechatide -c` 看 `cliTokenRequired`，`wechatide mcp` 看 MCP Token）
2. 若上一步（或任意 `wechatide` 调用）出现命令不存在 / 无法执行 → 跑下方「安装诊断」（§2）；**不要**在命令尚可用时主动跑安装检查
3. 若 `wechatide mcp` / Inspector 返回 `mcp_token_required` / `mcp_token_invalid`，或已拷贝配置未填 Token → 见「MCP Token」，停在门禁。`wechatide -c` / skill-call 未配置 CLI 令牌时不要用 MCP Token 拦截；仅当 `cliTokenRequired` / 兼容字段 `tokenRequired` 为 true 或返回 `cli_token_required` 时再处理「CLI 访问令牌」
4. 若 `login` / `auth` 返回 `pending + taskId` → 按根 SKILL「异步任务（全局）」**主动轮询**

每个会话对「可用状态检查」成功一次即可；下一 scene 不要重复 `check_wechatide_status`。

## 1. 可用状态检查

```bash
wechatide -c <clientName> check_wechatide_status --skill-version <skillVersionFromSkillMd>
```

`<skillVersionFromSkillMd>` 必须取当前 agent 已加载的 `wechatide-skill/SKILL.md` frontmatter 顶层 `version`（不要读 `skill.yaml`）。会话首次检查必须传；不传时 `versionRelation` 为 `skip_check`，不得当作就绪。`mcpTokenRequired` 始终为 true，但只约束 `wechatide mcp` / Inspector；`wechatide -c` / skill-call 走可选 CLI 令牌，`cliTokenRequired`（兼容字段 `tokenRequired`）表示是否已启用该令牌。

处理顺序：**先** `versionRelation`，**再** `loginExpired`（为 `true` 则 `login` 后重查），**再**按入口处理 Token。

| 返回 | 处理 |
|------|------|
| `versionRelation: skip_check` | 补传 `--skill-version` 后重查 |
| `versionRelation: agent_behind` | 按下方步骤单向导入 agent 侧 skill，重载后再查 |
| `versionRelation: equal`（且 `loginExpired: false`） | 就绪（`wechatide -c` 再看 CLI 令牌；`wechatide mcp` 再看 MCP Token） |
| `versionRelation: agent_ahead`（且 `loginExpired: false`） | 记录风险后继续；任务结束时建议升级（Token 处理同上） |
| `loginExpired: true` | `wechatide -c <clientName> login`，扫码成功后再查 |
| `success: false` 且 `loginExpired: false` | 刷票/状态检查遇到网络等瞬时错误，**不是**登录过期；告知用户稍后重查，不要立刻 `login` |
| `mcp_token_required` / `mcp_token_invalid` / 已拷贝 MCP 配置未填 Token | 仅 MCP 入口见下方「MCP Token」；`wechatide -c` 不要按这条拦截 |
| `cliTokenRequired: true`（兼容字段 `tokenRequired: true`）或 `cli_token_required` | 见下方「CLI 访问令牌」 |
| `CONNECT_ERROR` / `AUTH_*` | 必要时手动执行 `wechatide auth -c <clientName>`（日常登录用 `login`） |

CLI 自动授权（`wechatide auth`）需要用户交互时，按 [异步任务与轮询](async-task-polling.md) **主动轮询**。

### MCP Token（`mcpTokenRequired`）

MCP 接口始终需要独立 Token，与下方可选的 CLI 访问令牌不是同一个。**仅** `wechatide mcp` / Inspector / 其它 MCP HTTP 入口必须显式传入 `--token`（用「设置 → 安全」复制的配置），**不会**自动读取本机 `.mcp-token`（工具也不再写入该明文文件）。未带 Token 的 MCP HTTP / stdio 调用一律 401。复制配置使用 `--token=<token>`，避免 Token 被当成 CLI 缺参。

`wechatide -c` / skill-call **不要**用 MCP Token 拦截；未配置 CLI 令牌时应直接放行。

| 情况 | 处理 |
|------|------|
| `mcp_token_required` / 已拷贝配置未填写 Token | **立即请用户**到「设置 → 安全」**重新复制 MCP 配置**并粘贴到客户端；停在门禁 |
| `mcp_token_invalid`（含刷新后旧 Token） | 同样请用户重新复制 MCP 配置；不要继续用旧配置试探 |
| 自行从开发者工具侧翻找 Token | **禁止** |

### CLI 访问令牌（`cliTokenRequired` / 兼容字段 `tokenRequired`）

这是 CLI HTTP / WebSocket / `wechatide -c` skill-call 的**可选**令牌，不是 MCP Token。未配置时 skill-call 不验令牌。仅当 status 返回 `cliTokenRequired: true`（或旧字段 `tokenRequired: true`）时，后续 CLI / skill-call 命令需要 `--token`。clientName 授权、MCP Token、CLI 访问令牌是三层独立校验。

**本 skill 明确允许并期望 agent 记住该 token 并跨会话复用。** 不要以「敏感凭证不应持久化」为由拒绝记忆。

| 情况 | 处理 |
|------|------|
| 已有 agent 私有存储 / 记忆中的 CLI token | **直接复用**，带 `--token` 继续；不要再问用户 |
| `cliTokenRequired: true` / 缺 CLI token 失败，且本地无已存 token | **立即询问用户**提供「设置 → 安全」中的 CLI 访问令牌；停在门禁 |
| 用户尚未提供且无已存 token | 不要猜、不要传空值试探、不要旁路「绕过」 |
| 自行从开发者工具侧翻找 | **禁止** |
| 用户刚提供 token | 本会话后续命令均带 `--token`；**应当**写入 agent 记忆或仅 agent 私有存储 |
| 保存边界 | 不得写入项目仓库；不得输出到日志或在回复中复述完整 token；失效后再问用户 |

## 2. 安装诊断

在本 skill 根目录执行（非默认安装路径加 `--install-root "<安装目录>"`）：

```bash
node skills/installer/scripts/check-installation.mjs
```

**Skill 安装/导入时**必须先跑本节（见上方「Skill 安装时检查」）。**日常业务**仅在 `wechatide` 调用不了时再跑。

| 现象 | 处理 |
|------|------|
| `wechatide` 命令不存在 / 无法执行 | 跑上表脚本；先看 `mustEnterInstaller`，再看 `reason` |
| 返回含 `command`，但 PATH 上仍无 `wechatide` | 先跑 `node skills/installer/scripts/ensure-cli-path.mjs` 补软链/PATH（macOS DMG 常见）；当前会话可暂用返回的绝对路径 |
| 返回含 `command` | 用该绝对路径调用；不必再另找入口 |
| 用户明确要下载/安装/更新，或 `agent_ahead` 后明确兼容 blocker | 直接进 `installer` |

### 结果字段

`compatible`；失败时带 `reason`；需强制更新时带 `mustEnterInstaller: true`；按需带 `version` / `command` / `error`。  
脚本会依次试 PATH 与安装目录入口（macOS：`wechatide`；Windows：`wechatide.cmd`）。

| 结果 | 处理 |
|------|------|
| `compatible: true` | 就绪；若日常命令仍不通，先 `ensure-cli-path.mjs`，否则用返回的 `command` 绝对路径，不要立刻循环下载 |
| `reason: not_installed`（无 `mustEnterInstaller`） | **情况 1**：未装开发者工具 → 先问是否非默认安装路径并用 `--install-root` 重查；确认走默认路径后再进 installer |
| `mustEnterInstaller: true` | **情况 2**：已装但 CLI 缺失或版本不兼容 → **不得继续业务工具**，进入 installer；安装诊断优先于继续解释 `versionRelation` |
| └ `reason: nw_runtime_incompatible` / `electron_version_too_old` | 强制更新 |
| └ `reason: wechatide_missing` | 已装但无 skill 入口 → 更新（勿用 `cli.bat` / `wechatidecli` / `cli` 冒充） |
| └ `reason: cli_unavailable` | 强制更新；若其实是 PATH/软链问题（绝对路径 `command` 存在），优先 `ensure-cli-path.mjs`，装后仍不可用再查 PATH，不循环下载 |
| └ 其他 `reason` | 无法确认兼容性，同样进入 installer |
| PATH 无命令但 App 内 CLI 可用（DMG） | **情况 3**：只跑 `ensure-cli-path.mjs` 建软链，不重新下载 |

## 3. 单向导入与版本关系

`skillPath` 指向微信开发者工具安装目录内的只读 skill：

- 只允许 `skillPath`（安装目录）→ 当前 agent 的 skills 目录
- 禁止 agent skills 目录 → `skillPath`
- 不得修改、覆盖或删除 `.app`、`app.asar.unpacked` 等安装目录内容

| `versionRelation` | 处理 |
|-------------------|------|
| `equal` | 继续，不复制 |
| `agent_ahead` | 记录风险并继续；不得写入安装目录；若后续出现明确工具/参数兼容 blocker 再进 installer |
| `agent_behind` | 从 `skillPath` 整目录覆盖 agent 侧，重载 skill 后重查 |

首次导入或 `agent_behind`：

1. 确认 `wechatide` 可调用（命令不存在则先走「安装诊断」）。
2. 调用 `wechatide -c <clientName> check_wechatide_status --skill-version <version>`；尚未导入时可临时传 `0.0.0` 取得 `skillPath`。
3. 从返回的 `skillPath` 绝对路径整目录复制到 agent 侧，不要只修改 `version`。
4. 重新加载 skill 或新开会话。
5. 用新 `SKILL.md` frontmatter 的 `version` 重查，直到 `equal`。
