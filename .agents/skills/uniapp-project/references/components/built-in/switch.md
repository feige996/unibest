# switch

## Instructions

开关选择器。

属性说明

示例 查看演示

### Syntax

- 使用 `<switch />`（或 `<switch></switch>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| checked | Boolean | false | 是否选中 |  |
| disabled | Boolean | false | 是否禁用 | 抖音小程序与飞书小程序不支持 |
| type | String | switch | 样式，有效值：switch, checkbox |  |
| color | Color | - | switch 的颜色，同 css 的 color |  |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| @change | EventHandle | - | checked 改变时触发 change 事件，event.detail={ value:checked} |  |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/switch.html`

### Examples

### Example (Example 1)

```vue
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">默认样式</view>
			<view>
				<switch checked @change="switch1Change" />
				<switch @change="switch2Change" />
			</view>
			<view class="uni-title">不同颜色和尺寸的switch</view>
			<view>
				<switch checked color="#FFCC33" style="transform:scale(0.7)"/>
				<switch color="#FFCC33" style="transform:scale(0.7)"/>
			</view>
			<view class="uni-title">推荐展示样式</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">开启中</view>
				<switch checked />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">关闭</view>
				<switch />
			</view>
		</view>
	</view>
</template>
```

### Example (Example 2)

```vue
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">默认样式</view>
			<view>
				<switch checked @change="switch1Change" />
				<switch @change="switch2Change" />
			</view>
			<view class="uni-title">不同颜色和尺寸的switch</view>
			<view>
				<switch checked color="#FFCC33" style="transform:scale(0.7)"/>
				<switch color="#FFCC33" style="transform:scale(0.7)"/>
			</view>
			<view class="uni-title">推荐展示样式</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">开启中</view>
				<switch checked />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">关闭</view>
				<switch />
			</view>
		</view>
	</view>
</template>
```

### Example (Example 3)

```vue
<script>
export default {
    data() {
        return {}
    },
    methods: {
        switch1Change: function (e) {
            console.log('switch1 发生 change 事件，携带值为', e.detail.value)
        },
        switch2Change: function (e) {
            console.log('switch2 发生 change 事件，携带值为', e.detail.value)
        }
    }
}
</script>
```

Reference: [Official Documentation](https://uniapp.dcloud.net.cn/component/switch.html)
