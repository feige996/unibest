# movable-area

## Instructions

可拖动区域

由于app和小程序的架构是逻辑层与视图层分离，使用js监听拖动时会引发逻辑层和视图层的频繁通讯，影响性能。为了方便高性能的实现拖动，平台特封装了 movable-area 组件。

movable-area 指代可拖动的范围，在其中内嵌 movable-view 组件用于指示可拖动的区域。

### Syntax

- 使用 `<movable-area />`（或 `<movable-area></movable-area>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| scale-area | Boolean | false | 当里面的 movable-view 设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个 movable-area |

#### Events

See official docs for full events list: `https://uniapp.dcloud.net.cn/component/movable-area.html`

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/movable-area.html`

### Examples

Examples are available in the official docs: `https://uniapp.dcloud.net.cn/component/movable-area.html`

Reference: [Official Documentation](https://uniapp.dcloud.net.cn/component/movable-area.html)
