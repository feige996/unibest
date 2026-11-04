# 创建小程序 / 小游戏项目流程

本流程对**小程序与小游戏同等适用**；用 `compileType` 区分（`miniprogram` / `game`），用 `get_user_appids --type` 过滤 AppID。

**不是**独立 scene：走完后按下方「移交」进入目标 scene。

## 前置条件

进入本流程前，须已能调用 `wechatide` 并完成可用状态检查（见根入口 / [运行前检查](../../references/environment-readiness.md)）；本流程不重复这些检查。`wechatide` 命令不存在时先走 installer，不要在本流程里猜安装状态。

## 第一步：获取 AppID

每个项目必须绑定一个 AppID：

```bash
wechatide -c <clientName> get_user_appids
wechatide -c <clientName> get_user_appids --type miniprogram
wechatide -c <clientName> get_user_appids --type minigame
```

让用户从列表选择，或使用其已知的 AppID。没有 AppID 无法创建正式项目；测试号可在微信公众平台申请。

## 第二步：确认云开发环境（如需要）

项目要用云开发时，用已选 AppID 列环境（此时本地目录可能还不存在，**优先只传 `appid`**）：

```bash
wechatide -c <clientName> cloud_env_list --appid <appid>
```

- 云环境需在公众平台预先开通
- 一个 AppID 可有多个环境；`env` 不明确时禁止自动挑选
- 后续云操作见 `skills/cloudbase-operator/SKILL.md`

## 第三步：准备目录与 `project.config.json`

1. 在用户指定的本地路径创建项目目录与最小可运行文件结构（见下方）。
2. 写入 / 补全 `project.config.json`（至少含有效 `appid`、`projectname`、`compileType`）。
   - 小程序：`compileType` 为 `miniprogram`
   - 小游戏：`compileType` 为 `game`
3. **字段含义、private/common 写入规则、常见开关**：一律按 `skills/project-config/SKILL.md`（及 `references/project-config-fields.md`）处理，本指南不复述字段表。
4. 需要云函数目录时，在 common 配置中设置 `cloudfunctionRoot`（同上，走 project-config）。

## 第四步：导入项目列表

目录与配置就绪后，**调用 `project_import` 写入 WechatIDE 项目列表**（不开窗口）：

```bash
wechatide -c <clientName> project_import --project <project>
```

- `<project>` 为项目本地绝对路径
- 已在列表中时返回 `alreadyImported: true`，视为成功
- 工具说明见 `skills/project-manager/SKILL.md`
- 失败（`PROJECT_PATH_NOT_FOUND` / `PROJECT_CONFIG_JSON_ERROR` / `APPID_ERROR`）→ 按 [project-tool-error-guide.md](project-tool-error-guide.md) **后置**修复后重试；勿改成调用前预检

## 移交（导入成功后）

按根 SKILL「跨 scene 移交」带上至少：

- `project`：刚导入的本地绝对路径
- `confirmed`：已登录且版本对齐、已 `project_import`（或 `alreadyImported`）、`appid` / `compileType`；若已选云环境则含 `env`
- `nextScene` 与附加字段按下表

| 用户下一步目标 | nextScene | 还需 |
|----------------|-----------|------|
| 打开模拟器做编译 / 调试 / 自动化 | `initializer` | 说明需 `open_project_window`；再交 compiler / debugger / automator |
| 预览 / 上传 | `previewer` | 可不打开窗口 |
| 云函数 / 云库 / 云存储 | `cloudbase-operator` | `appid`、`env`（未定则作 blocker） |
| 仅留在列表 | 结束 | 说明已导入，无需开窗 |

## 最小可运行项目结构

### 小程序（`compileType: miniprogram`）

```
project/
├── project.config.json    # 必须；写法见 project-config
├── app.json               # 必须，至少含 pages
├── app.js
├── app.wxss
└── pages/
    └── index/
        ├── index.json
        ├── index.wxml
        ├── index.wxss
        └── index.js
```

`app.json` 至少需要类似：`{"pages":["pages/index/index"]}`。

### 小游戏（`compileType: game`）

```
project/
├── project.config.json    # 必须；compileType 为 game
├── game.json              # 小游戏配置
└── game.js                # 小游戏入口
```

具体文件以用户模板 / 官方示例为准；配置字段仍走 `project-config`。

## 失败快表

| 情况 | 处理 |
|------|------|
| `loginExpired: true` / `versionRelation` 为 `skip_check` 或 `agent_behind` | 回到根入口；完成登录或单向导入前勿继续创建 |
| `PROJECT_*` / `APPID_ERROR` | [project-tool-error-guide.md](project-tool-error-guide.md) |
| AppID 无效 / 无权限 | 换有权限的 AppID 或重新 `login`；勿死循环 |
| 缺入口文件 | 补齐小程序 `app.json` 或小游戏 `game.json` / `game.js` 后再导入或开窗 |
| 云相关失败 | 核对 `cloudfunctionRoot` 与 env（见 cloudbase-operator） |
