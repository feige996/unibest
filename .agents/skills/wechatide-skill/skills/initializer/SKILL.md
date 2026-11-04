---
name: initializer
description: >-
  初始化微信开发者工具环境：打开/关闭项目窗口、扫码登录、获取 AppID、读取运行时上下文。
  用户说打开项目、接管项目、登录、有哪些 AppID、退出开发者工具时使用。不负责自动化、预览或云操作。
---

# initializer

## 用途

开发前基础初始化。准备好登录态、项目窗口与关键上下文后，移交给目标 scene。

## 工具（参数以 `--help` / tools.yaml 为准）

| 意图 | 工具 |
|------|------|
| 查登录/版本 | `check_wechatide_status`（会话已在根入口查过则跳过） |
| 登录 | `login --type window`（打开登录窗口，如果 agent 能处理图片返回，可以改为 `image`） |
| 打开项目窗口 | `open_project_window` |
| 关闭项目窗口 | `close_project_window` |
| 退出 WechatIDE | `quit` |
| 可用 AppID 列表 | `get_user_appids`（可选 `--type miniprogram\|minigame`） |
| 当前页/系统信息 | `automation_runtime_info`（**主归属本 scene**） |

项目设置读写 → `skills/project-config/SKILL.md`（勿调已废弃的 `project_setting_*`）。

构建 npm → `skills/compiler/SKILL.md` 的 `build_npm`。

带 `--project` 的配置/appid 错误 → [project-tool-error-guide.md](../../wechatide-tools/references/project-tool-error-guide.md)。

### login

`login` 只表示二维码已就绪，不代表已登录。返回 `pending + taskId` 后按根 SKILL「异步任务（全局）」与 [异步任务与轮询](../../references/async-task-polling.md) **主动轮询**（`login` 为会阻塞后续的派生任务）。仅当最终为 `success` 才继续；其他终态停止并如实告知用户。

### open_project_window

```bash
wechatide -c <clientName> open_project_window --project <project> [--window-mode liteMode|fullMode]
```

默认 `liteMode` 仅打开模拟器；需要编辑器和调试器时显式使用 `fullMode`。

## 使用边界

- 只准备环境与基础信息，不顺带自动化/调试/预览/上传/云写操作
- AppID、路径等未齐时，作为 blocker 输出，不要猜

## 失败快表

| 情况 | 处理 |
|------|------|
| `PROJECT_*` / `APPID_ERROR` | [project-tool-error-guide.md](../../wechatide-tools/references/project-tool-error-guide.md) |
| `login` 已出码但 `loginExpired: true` | 按全局规则主动轮询至终态；勿声称已登录 |
| 开窗失败且路径/配置无误 | 原样抛错；勿反复无差别 `open_project_window` |

## 移交

遵循根 SKILL「跨 scene 移交」。信息齐备后再给 `nextScene`，`handoffContext` 至少含 `project`。

| 目标 | 还需带上 |
|------|----------|
| automator | 当前/目标页、关键选择器或待验证结果；`confirmed` 含窗口已开 |
| debugger | currentPage、异常现象、可复现步骤或关键字；窗口已开 |
| compiler | 目标页或文件、是否需 build_npm；窗口已开 |
| cloudbase-operator | appid/env、函数目录；增量还需相对变更路径 |
| previewer | `project`；**通常不经本 scene**，可直接预览 |

预览 / 上传通常**不经本 scene**：直接走 `previewer`（可不打开窗口）。
