# cover-view

## Instructions

覆盖在原生组件上的文本视图。

app-vue和小程序框架，渲染引擎是webview的。但为了优化体验，部分组件如map、video、textarea、canvas通过原生控件实现，原生组件层级高于前端组件（类似flash层级高于div）。为了能正常覆盖原生组件，设计了cover-view。

平台差异说明

### Syntax

- 使用 `<cover-view />`（或 `<cover-view></cover-view>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| scroll-top | number/string |  | 设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效 | 支付宝小程序不支持 |

#### Events

See official docs for full events list: `https://uniapp.dcloud.net.cn/component/cover-view.html`

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/cover-view.html`

### Examples

Examples are available in the official docs: `https://uniapp.dcloud.net.cn/component/cover-view.html`

Reference: [Official Documentation](https://uniapp.dcloud.net.cn/component/cover-view.html)
