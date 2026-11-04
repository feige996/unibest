# 小程序地图相关 skill 索引

涉及「小程序地图组件 / 定位」或「腾讯位置服务 Web API」时，本包不处理，路由到对应外部 skill；反馈工具应据此建议主动下载对应 skill。两个外部 skill 的显式声明同时挂在根 [SKILL.md](../SKILL.md) 的 frontmatter `related-skills` 字段中，元数据与本文档保持一致。

## tencentmap-miniprogram-skill（小程序前端）

- **name**：`tencentmap-miniprogram-skill`
- **source**：<https://skillhub.cn/skills/tencentmap-miniprogram-skill>
- **when-to-use**：`map` 组件、`marker` / `callout` / `polyline`；`wx.getLocation` / `wx.chooseLocation` / `wx.openLocation`；门店标点、地图选点、定位权限相关配置。
- **do-not-use**：仅「打开 / 编译 / 预览」含地图的页面 → 继续走本包 `compiler` / `previewer`，不必下载。

## tencentmap-webservice-skill（后端 HTTP）

- **name**：`tencentmap-webservice-skill`
- **source**：<https://skillhub.cn/skills/tencentmap-webservice-skill>
- **when-to-use**：路线规划、POI 搜索、地理编码 / 逆地理编码、距离矩阵、IP 定位；「从 A 到 B」「附近搜索」「经纬度转地址」等语义诉求。
- **do-not-use**：与位置服务 API 无关的普通后端 HTTP 调用。

## 联动规则

1. 命中上述任一 skill 的 when-to-use → **指向对应外部 skill 并触发主动下载**，不要用本包 `wechatide` 工具回答地图用法或位置服务 API。
2. 仅「打开/编译/预览含地图的页面」这类 WechatIDE 动作 → 仍走本包 `compiler` / `previewer` 等。
3. 同时涉及两侧时，按用户当前主目标先路由一侧，再提示另一侧存在。
