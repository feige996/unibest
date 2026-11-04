---
name: cloudbase-operator
description: >-
  小程序/小游戏云开发操作：云环境、云函数部署、云数据库、云存储、消息推送。
  用户提到云环境、云函数、集合/文档、云存储上传下载、消息推送/客服回调时使用。
---

# cloudbase-operator

## 用途

云资源查询与变更。`env` 不明确时先 `cloud_env_list`，**禁止自动选环境**。

## 通用约束

- 云数据库 / 云存储 / 消息推送写工具必须显式传 `appid` + `env`（`cloud_query_msg_push` 的 listSupportedEvents 可省略 env）
- `env` 只能来自用户明确提供、上游已确认上下文，或 `cloud_env_list` 返回的环境 ID；禁止猜测
- 写操作需用户确认；用户拒绝或超时后不要重试破坏性操作
- 临时下载链接仅用于当前任务，勿写入代码或长期文档

## 参数来源与调用顺序

1. 确定 `appid`：使用用户提供或上游已确认的 AppID；只有本地项目路径时，可调用 `cloud_env_list --project <project>` 从项目配置解析
2. 确定 `env`：已有用户确认的环境 ID 时复用；否则先调用 `cloud_env_list`，多环境时让用户选择
3. 将选定的环境 ID 作为后续 `cloud_fn_*`、`cloud_db_*`、`cloud_query_storage`、`cloud_manage_storage`、`cloud_*_msg_push` 的 `env`
4. 再执行目标操作

目标名称或路径不明确时，先读后写：

- 云函数：`cloud_fn_list` → `cloud_fn_info` / 部署
- 云数据库：`cloud_db_read_struct` → `cloud_db_read_doc` / 写结构 / 写文档
- 云存储：`cloud_query_storage` 的 `list` / `info` → `cloud_manage_storage`
- 消息推送：`cloud_query_msg_push` → `cloud_manage_msg_push`（详见 [references/message-push-customer-service.md](references/message-push-customer-service.md)）

## 意图 → 工具

| 意图 | 工具 |
|------|------|
| 列环境 | `cloud_env_list`（优先 `--appid`；本地工程已有时也可用 `--project`） |
| 列/查云函数 | `cloud_fn_list` / `cloud_fn_info` |
| 完整部署 | `cloud_fn_deploy`（`appid` + `env` + 函数目录 `path`） |
| 增量部署 | `cloud_fn_inc_deploy`（另需相对函数目录的 `file`） |
| 库结构读/写 | `cloud_db_read_struct` / `cloud_db_write_struct` |
| 文档读/写 | `cloud_db_read_doc` / `cloud_db_write_doc` |
| 存储读 | `cloud_query_storage`（`list`/`info`/`url`/`read`） |
| 存储写 | `cloud_manage_storage`（`upload`/`download`/`delete`；upload/delete 需确认） |
| 消息推送查询 | `cloud_query_msg_push`（`list` / `listSupportedEvents`） |
| 消息推送管理 | `cloud_manage_msg_push`（`subscribe`/`unsubscribe`/`setEnable`/`ensureCloudFunctionMode`；需确认） |

```bash
wechatide -c <clientName> cloud_env_list --appid <appid>
wechatide -c <clientName> cloud_fn_deploy --appid <appid> --env <envId> --path <cloudFunctionDir> --remote-npm-install
wechatide -c <clientName> cloud_fn_inc_deploy --appid <appid> --env <envId> --path <cloudFunctionDir> --file index.js
wechatide -c <clientName> cloud_db_read_doc --appid <appid> --env <envId> --collection-name <collection> --query-file ./query.json
wechatide -c <clientName> cloud_query_storage --appid <appid> --env <envId> --action list --cloud-path <cloudPath>
wechatide -c <clientName> cloud_query_msg_push --appid <appid> --env <envId> --action list
wechatide -c <clientName> cloud_manage_msg_push --appid <appid> --env <envId> --function-name <fnName> --action subscribe
```

复杂 JSON 参数用 `--*-file`。更新文档优先 `$set`/`$inc`/`$unset`。完整参数见 `--help`。消息推送/客服自动回复详见 [references/message-push-customer-service.md](references/message-push-customer-service.md)。

## 边界

- 部署固定 `appid + path`；目录名即函数名
- `cloud_query_storage` 的 `url` 与 upload 返回的临时链接不是永久 URL；勿依赖返回里的 `publicUrl`/`note`
- 删除存储目录须明确 `cloudPath` 范围并传 `--is-directory`
- 消息推送：同一 (MsgType, Event) 只能绑一个云函数；事件名以 `listSupportedEvents` 为准
- 部分成功时保留真实返回结构

## 失败快表

| 情况 | 处理 |
|------|------|
| env 不明 / 多环境 | `cloud_env_list` 后让用户选；**禁止**自动挑 |
| 环境未开通 / 无权限 | 说明需公众平台开通或换有权限账号；勿死循环部署 |
| 用户拒绝或确认超时 | **不要**重试写操作 |
| `--project` 相关错误 | [project-tool-error-guide.md](../../wechatide-tools/references/project-tool-error-guide.md) |
| 部署/写库部分成功 | 原样保留返回结构，说明已成功与失败项 |
| 消息推送 version 冲突 | 先 `cloud_query_msg_push --action list` 再重试 manage |

## 移交

遵循根 SKILL「跨 scene 移交」。

| 目标 | 还需 |
|------|------|
| project-config | 需改 `cloudfunctionRoot` 等本地配置时 |
| debugger | 云调用失败且要对照小程序侧日志时：`project` + 现象 |
| 结束 | appid、env、已做读写操作摘要 |

## 备注

小程序/小游戏侧 FileId 形如 `cloud://<envid>.<bucketid>/xxx/`。
