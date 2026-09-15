# custom-tab-bar

## Instructions

自定义tabBar组件。

在小程序和App端，为提升性能，在 pages.json 里配置固定的原生tabBar。但在H5端，这一设计并不会提升性能。

同时，H5端尤其是PC宽屏，对tabBar的位置和样式有更灵活的需求，tabBar作为一级导航，更多的时候是在PC网页顶部而不是底部。

### Syntax

- 使用 `<custom-tab-bar />`（或 `<custom-tab-bar></custom-tab-bar>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| direction | String | horizontal | 选项的排列方向 可选值：horizontal，vertical |
| show-icon | Boolean | false | 是否显示icon |
| selected | Number | 0 | 选中的tabBar选项索引值 |

#### Events

| 事件名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| onTabItemTap | EventHandle |  | 点击事件，参数为Object，具体见下表 |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/custom-tab-bar.html`

### Examples

### Example (Example 1)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中的 top-window 查看 -->
<template>
    <view>
        <custom-tab-bar direction="horizontal" :show-icon="false" :selected="selected" @onTabItemTap="onTabItemTap" />
    </view>
</template>
```

### Example (Example 2)

```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中的 top-window 查看 -->
<template>
    <view>
        <custom-tab-bar direction="horizontal" :show-icon="false" :selected="selected" @onTabItemTap="onTabItemTap" />
    </view>
</template>
```

Reference: [Official Documentation](https://uniapp.dcloud.net.cn/component/custom-tab-bar.html)
