# `--project` 工具错误后置处理

带 `--project` 的 toolCall，微信开发者工具可能对项目路径、`project.config.json` 与 appid 做内部校验。

**不要**调用前预读 / 预检 `project.config.json`；先调工具，仅在返回下列错误后再修复并重试。

本文件是该规则的**唯一详细说明**；其它文档只应链接此处。

## 适用范围

- **适用**：凡带 `--project` 且未列入下方跳过名单的工具（含 `open_project_window`、`project_import`、预览/上传、编译、自动化、调试，以及用 `--project` 解析 appid 的云相关工具等）
- **不适用（不做上述校验）**：`project_remove`、`close_project_window`、已废弃的 `project_setting_get` / `project_setting_update`
- **无 `--project` 入参**：如 `project_list`、`login`、`check_wechatide_status` 等，不走本流程

## 正常路径

```bash
wechatide -c <clientName> open_project_window --project <project>
wechatide -c <clientName> auto_preview --project <project>
```

## 收到 `PROJECT_PATH_NOT_FOUND` 后

表示 `--project` 指向的目录不存在。

1. 核对路径是否为**已存在的本地绝对路径**（拼写、盘符、是否尚未创建目录）。
2. 若是新建流程：先建目录与最小项目文件，再重试。
3. **用同一参数重试**刚才失败的工具。

## 收到 `PROJECT_CONFIG_JSON_ERROR` 后

表示目录存在，但 `project.config.json` 缺失、读取失败、JSON 解析失败或内容不合法。

1. **先确认目录存在**（若路径本身不对，应先表现为 `PROJECT_PATH_NOT_FOUND`）。
2. 确认 `<project>/project.config.json` 是否存在；缺失则创建最小配置（见下）。但若已有迹象表明该目录体量很大且不像小程序 / 小游戏项目（如未见 `app.json` / `game.json`，却有大量无关工程或数据目录），先停止并让用户确认是否选错项目目录；未经确认不要写入。只做快速判断，勿为此递归扫描超大目录。
3. 若存在：修复非法 JSON（注释、尾逗号、截断、编码等），保证可被标准 JSON 解析。
4. 合并写入，保留无关字段；字段语义见 `skills/project-config/SKILL.md`。
5. **用同一参数重试**；若又得到 `APPID_ERROR`，再走下方流程。

## 收到 `APPID_ERROR` 后

表示配置可读，但 `appid` 无效（缺省 / 空 / `touristappid`），或 AppID 属性校验失败（无权限、AppID 不存在、需重新登录等）。

1. 读 `project.config.json`；补全有效 `appid`：
   - `get_user_appids`（用户已给出 AppID 则可跳过）
   - 已有文件只更新 `appid` 字段
2. **用同一参数重试一次**。
3. **若补完 appid 后仍然 `APPID_ERROR`**：
   - 向用户说明：可换另一个有权限的 AppID，或重新扫码登录后再试
   - **不要**在同一 appid / 同一登录态下死循环重试
   - 停在当前步，等待用户决策

## 最小 `project.config.json`

```json
{
  "appid": "<用户选择的 AppID>",
  "projectname": "<项目目录名>",
  "compileType": "miniprogram",
  "libVersion": "latest"
}
```

小游戏将 `compileType` 设为 `game`。字段细节见 `skills/project-config/SKILL.md`。

## 注意

- `get_user_appids` 需已登录
- 按返回的 `code` 分支处理，不要猜测或改成「先预检再调用」
- 处理顺序建议：`PROJECT_PATH_NOT_FOUND` → `PROJECT_CONFIG_JSON_ERROR` → `APPID_ERROR`
