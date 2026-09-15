# uni-group

## Instructions

组件名：uni-group

代码块： uGroup

点击下载&安装

### Syntax

- 使用 `<uni-group />`（或 `<uni-group></uni-group>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | String | - | 主标题 |
| top | Number | - | 分组间隔 |
| mode | String | '' | 模式 ，card 为卡片模式 |

#### Events

See official docs for full events list: `https://uniapp.dcloud.net.cn/component/uniui/uni-group.html`

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-group.html`

### Examples

### Example (Example 1)

```vue
<uni-group title="分组1" top="20">
    <view>分组1 的内容</view>
    <view>分组1 的内容</view>
</uni-group>

<uni-group title="分组2">
    <view>分组2 的内容</view>
    <view>分组2 的内容</view>
</uni-group>
```

### Example (Example 2)

```html
<uni-group title="分组1" top="20">
    <view>分组1 的内容</view>
    <view>分组1 的内容</view>
</uni-group>

<uni-group title="分组2">
    <view>分组2 的内容</view>
    <view>分组2 的内容</view>
</uni-group>
```

### Example (Example 3)

```vue
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">分组组件可用于将组件分组，添加间隔，以产生明显的区块。</text>
		</uni-card>
		<uni-section title="基础分组" type="line">
			<uni-group>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>
			<uni-group title="基本模式" margin-top="20">
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>
		</uni-section>
		<uni-section title="卡片分组" type="line">
			<uni-group mode="card">
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>

			<uni-group title="card 模式" mode="card">
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>
		</uni-section>

	</view>
</template>
```

### Example (Example 4)

```html
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">分组组件可用于将组件分组，添加间隔，以产生明显的区块。</text>
		</uni-card>
		<uni-section title="基础分组" type="line">
			<uni-group>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>
			<uni-group title="基本模式" margin-top="20">
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>
		</uni-section>
		<uni-section title="卡片分组" type="line">
			<uni-group mode="card">
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>

			<uni-group title="card 模式" mode="card">
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>
		</uni-section>

	</view>
</template>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-group.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=group)
- [Local Example](examples/uni-ui/uni-group.vue)
