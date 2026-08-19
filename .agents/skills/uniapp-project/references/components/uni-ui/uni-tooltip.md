# uni-tooltip

## Instructions

组件名：uni-tooltip

代码块： utooltip

点击下载&安装

### Syntax

- 使用 `<uni-tooltip />`（或 `<uni-tooltip></uni-tooltip>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| content | String |  | 弹出层显示的内容 |
| placement | String | left | Tooltip 的出现位置, 支持 left,right,top,bottom |

#### Events

See official docs for full events list: `https://uniapp.dcloud.net.cn/component/uniui/uni-tooltip.html`

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-tooltip.html`

### Examples

### Example (Example 1)

```vue
<uni-tooltip :content="tooltip显示的内容" placement="left">
  <button>被包裹的组件</button>
</uni-tooltip>
```

### Example (Example 2)

```html
<uni-tooltip :content="tooltip显示的内容" placement="left">
  <button>被包裹的组件</button>
</uni-tooltip>
```

### Example (Example 3)

```vue
<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">常用于展示鼠标 hover 时的提示信息，注意：无法覆盖原生组件</text>
    </uni-card>
    <uni-section title="基础用法" type="line" padding>
      <uni-tooltip content="提示文字" />
    </uni-section>
    <uni-section title="自定义弹出层方向" type="line" padding>
			<view class="direction-container">
				<uni-tooltip content="示例文字" placement="top">
					<view class="item">上</view>
				</uni-tooltip>
				<uni-tooltip class="item" content="示例文字" placement="bottom">
					<view class="item">下</view>
				</uni-tooltip>
				<uni-tooltip class="item" content="示例文字" placement="left">
					<view class="item">左</view>
				</uni-tooltip>
				<uni-tooltip class="item" content="示例文字" placement="right">
					<view class="item">右</view>
				</uni-tooltip>
			</view>
		</uni-section>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  .direction-container {
		display: flex;
		width: 100px;
		margin: 0 auto;
		flex-wrap: wrap;
	}

	.item {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		background-color: #ebebeb;
		border-radius: 10px;
		margin: 5px;
	}
</style>
```

### Example (Example 4)

```html
<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">常用于展示鼠标 hover 时的提示信息，注意：无法覆盖原生组件</text>
    </uni-card>
    <uni-section title="基础用法" type="line" padding>
      <uni-tooltip content="提示文字" />
    </uni-section>
    <uni-section title="自定义弹出层方向" type="line" padding>
			<view class="direction-container">
				<uni-tooltip content="示例文字" placement="top">
					<view class="item">上</view>
				</uni-tooltip>
				<uni-tooltip class="item" content="示例文字" placement="bottom">
					<view class="item">下</view>
				</uni-tooltip>
				<uni-tooltip class="item" content="示例文字" placement="left">
					<view class="item">左</view>
				</uni-tooltip>
				<uni-tooltip class="item" content="示例文字" placement="right">
					<view class="item">右</view>
				</uni-tooltip>
			</view>
		</uni-section>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  .direction-container {
		display: flex;
		width: 100px;
		margin: 0 auto;
		flex-wrap: wrap;
	}

	.item {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		background-color: #ebebeb;
		border-radius: 10px;
		margin: 5px;
	}
</style>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-tooltip.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=tooltip)
- [Local Example](examples/uni-ui/uni-tooltip.vue)
