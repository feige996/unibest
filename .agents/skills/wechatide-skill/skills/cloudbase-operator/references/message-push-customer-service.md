# 消息推送与客服自动回复

面向 **微信小程序 + 云开发** 的消息推送与客服自动回复实操指南。

## 操作面（强制）

**唯一支持路径：** 微信开发者工具（IDE）与 wxide CLI（Nightly `wechatide` / 经典 `cli`）。

| 应当 | 禁止 |
| --- | --- |
| 用下方高层 CLI / MCP 工具完成查询与配置 | 用 qbase 直连、uploadappconfig/getappconfig、newticket、Whistle 等底层绕过 |
| `wechatide -c <clientName> -t <toolName>`（`--help` 发现参数） | 臆造工具名或参数 |
| 优先 `cloud_query_msg_push` / `cloud_manage_msg_push` | 把 CloudBase MCP 内部名 `queryMessagePush` / `manageMessagePush` 当作日常 CLI |


## 何时阅读本参考

- 将消息类型或事件绑定到云函数
- 实现必须能回复用户聊天的客服自动回复
- 部署接收端云函数 / 上传体验版以便真机验证
- 推送触发后查找云函数日志位置

---

## 1. 消息推送配置机制

### 消息类型 vs 事件类

回调路由以 **(MsgType, Event)** 对为键：

| 类别 | `MsgType` | `Event` | 典型用途 |
| --- | --- | --- | --- |
| 消息类型 | `text` / `image` / `voice` / `video` / `miniprogrampage` | 空字符串 (`""`) | 用户向客服发送聊天消息 / 卡片 |
| 事件类 | `event` | 具体事件名（如虚拟支付通知事件） | 平台 / 业务事件 |

规则：

- **同一 (MsgType, Event) 对只能绑定一个云函数**（重新绑定会替换原先函数）。
- `MsgType=event` 的合法事件名先用 `cloud_query_msg_push` 的 `listSupportedEvents` 查询，不要臆造。
- 写操作需用户确认；用户拒绝或超时后不要重试。

### 配置回调（CLI 优先）

```bash
# 查看当前订阅
wechatide -c <clientName> cloud_query_msg_push \
  --appid <appid> --env <envId> --action list

# 查看全部合法消息类型 / 事件
wechatide -c <clientName> cloud_query_msg_push \
  --appid <appid> --action listSupportedEvents

# 订阅（msg_type=event 且未传 event_types 时默认虚拟支付 7 事件）
wechatide -c <clientName> cloud_manage_msg_push \
  --appid <appid> --env <envId> \
  --function-name <fnName> --action subscribe

# 订阅客服 text 消息类型
wechatide -c <clientName> cloud_manage_msg_push \
  --appid <appid> --env <envId> \
  --function-name <fnName> --action subscribe --msg-type text

# 确保云函数推送模式（非云托管整包）
wechatide -c <clientName> cloud_manage_msg_push \
  --appid <appid> --env <envId> \
  --function-name <fnName> --action ensureCloudFunctionMode
```

备选：IDE **云开发控制台 → 消息推送** 面板手工配置。

### 部署接收端云函数

务必在**云端**安装 npm 依赖：

```bash
wechatide -c <clientName> cloud_fn_deploy \
  --appid <appid> --env <envId> \
  --path <absCloudFunctionDir> --remote-npm-install
```

注意：函数目录名 = 函数名；省略 `--remote-npm-install` 常见 `Cannot find module`。

### 体验版 / 真机验证

```bash
wechatide -c <clientName> miniprogram_upload \
  --project <absProjectPath> \
  --upload-version <x.y.z> --desc "<desc>"
```

手机快速推送优先 `auto_preview`。客服入口通常需要 `<button open-type="contact">`。

---

## 2. 云函数作为推送接收端

```js
const cloud = require("wx-server-sdk");
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

exports.main = async (event, context) => {
  console.log("msg-push", event.MsgType, event.Event, event);
  // ... 业务逻辑 ...
  return {}; // 仅靠返回值不会回复用户（见 §3）
};
```

---

## 3. 客服自动回复机制

云函数消息推送模式下，函数 **返回值不会** 变成客服回复。必须通过 OpenAPI **主动发送**：

```js
await cloud.openapi.customerServiceMessage.send({
  touser: event.FromUserName,
  msgtype: "text",
  text: { content: "收到，我们会尽快处理" },
});
```

`config.json` 声明权限：

```json
{
  "permissions": {
    "openapi": ["customerServiceMessage.send"]
  }
}
```

---

## 4. 云函数日志

**微信开发者工具 → 云开发控制台 → 云函数 → \<function\> → 日志**

CLI 日志查询工具若尚未稳定，不要教授底层 CGI 绕过；优先 IDE 控制台。

---

## 5. 推送模式：云函数 vs 云托管

消息推送有**推送模式**，IDE「消息推送」面板右上角展示（云函数 / 云托管）：

| 模式 | 行为 | 配置方式 |
|---|---|---|
| **云函数**（默认） | 按 (消息类型, 事件) 二元组逐条推送至对应云函数 | IDE 面板逐条添加，或 `cloud_manage_msg_push(action=subscribe)` |
| **云托管** | **整包接收所有消息**至云托管服务（一条 path 全收），云函数回调失效 | IDE 面板「云托管」切换 |

### 行为要点（MCP / IDE 一致）

- 云托管模式下，云函数回调**存在但不生效**——查询会返回 `pushMode=container` 及提示
- 云托管模式下 `subscribe/unsubscribe/setEnable` 会被**拒绝**（提示先切回云函数模式）
- 切换模式是**写操作**，需确认；切到云托管需提供服务路径（真实环境需已有云托管服务）
- 云托管开通：IDE 云开发控制台 → 云托管 → 立即开通（可能与按量付费联动）；若环境无云托管服务，配置容器回调会失败

### 操作方式（当前）

```text
# 当前唯一操作途径：微信开发者工具 IDE（消息推送面板 + 云托管页面）
# 微信侧：cloud_query_msg_push 可读 pushMode；cloud_manage_msg_push(ensureCloudFunctionMode/ensureContainerMode/setContainerCallback) 管理模式
# 底层 CGI / 开通接口细节不在本参考展开
```

---

## 6. 建议的端到端流程

1. 实现接收端云函数（若需自动回复则加 OpenAPI send）。
2. `cloud_fn_deploy` **并带上** `--remote-npm-install`。
3. `cloud_manage_msg_push` 绑定 (MsgType, Event) → 函数（或 IDE 面板）。
4. 测试 `text` / 媒体时确保已有客服入口 / 能力。
5. 上传体验版 / 预览；真机触发。
6. 在 IDE 云函数日志中验证。

---

## 相关

- 本 scene 总览：[`../SKILL.md`](../SKILL.md)
