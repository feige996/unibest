# scroll-view

## Instructions

可滚动视图区域。用于区域滚动。

需注意在webview渲染的页面中，区域滚动的性能不及页面滚动。

使用竖向滚动时，需要给 <scroll-view> 一个固定高度，通过 css 设置 height；使用横向滚动时，需要给 <scroll-view> 添加 white-space: nowrap; 样式。

### Syntax

- 使用 `<scroll-view />`（或 `<scroll-view></scroll-view>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| scroll-x | Boolean | false | 允许横向滚动 |  |
| scroll-y | Boolean | false | 允许纵向滚动 |  |
| upper-threshold | Number/String | 50 | 距顶部/左边多远时（单位px），触发 scrolltoupper 事件 |  |
| lower-threshold | Number/String | 50 | 距底部/右边多远时（单位px），触发 scrolltolower 事件 |  |
| scroll-top | Number/String |  | 设置竖向滚动条位置 |  |
| scroll-left | Number/String |  | 设置横向滚动条位置 |  |
| scroll-into-view | String |  | 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 |  |
| scroll-with-animation | Boolean | false | 在设置滚动条位置时使用动画过渡 |  |
| enable-back-to-top | Boolean | false | iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向 | app-nvue，微信小程序 |
| show-scrollbar | Boolean | true | 控制是否出现滚动条 | App-nvue 2.1.5+ |
| refresher-enabled | Boolean | false | 开启自定义下拉刷新 | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+、小红书小程序 |
| refresher-threshold | Number | 45 | 设置自定义下拉刷新阈值 | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+、小红书小程序 |
| refresher-default-style | String | "black" | 设置自定义下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式 | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+、小红书小程序 |
| refresher-background | String | "#FFF" | 设置自定义下拉刷新区域背景颜色 | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+、小红书小程序 |
| refresher-triggered | Boolean | false | 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发 | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+、小红书小程序 |
| enable-flex | Boolean | false | 启用 flexbox 布局。开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点。 | 微信小程序 2.7.3、小红书小程序 |
| scroll-anchoring | Boolean | false | 开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性。 | 微信小程序 2.8.2 |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| @scrolltoupper | EventHandle |  | 滚动到顶部/左边，会触发 scrolltoupper 事件 |  |
| @scrolltolower | EventHandle |  | 滚动到底部/右边，会触发 scrolltolower 事件 |  |
| @scroll | EventHandle |  | 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} |  |
| @refresherpulling | EventHandle |  | 自定义下拉刷新控件被下拉 | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+、小红书小程序 |
| @refresherrefresh | EventHandle |  | 自定义下拉刷新被触发 | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+、小红书小程序 |
| @refresherrestore | EventHandle |  | 自定义下拉刷新被复位 | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+、小红书小程序 |
| @refresherabort | EventHandle |  | 自定义下拉刷新被中止 | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |

#### Platform Compatibility

See official docs for platform support table: `https://doc.dcloud.net.cn/uni-app-x/component/scroll-view.html`

### Examples

### Example (Example 1)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				Vertical Scroll
				<text>\n纵向滚动</text>
			</view>
			<view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<view id="demo1" class="scroll-view-item uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
				</scroll-view>
			</view>
			<view @tap="goTop" class="uni-link uni-center uni-common-mt">
				点击这里返回顶部
			</view>

			<view class="uni-title uni-common-mt">
				Horizontal Scroll
				<text>\n横向滚动</text>
			</view>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
					<view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
				</scroll-view>
			</view>
			<view class="uni-common-pb"></view>
		</view>
	</view>
</template>
```

### Example (Example 2)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				Vertical Scroll
				<text>\n纵向滚动</text>
			</view>
			<view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<view id="demo1" class="scroll-view-item uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
				</scroll-view>
			</view>
			<view @tap="goTop" class="uni-link uni-center uni-common-mt">
				点击这里返回顶部
			</view>

			<view class="uni-title uni-common-mt">
				Horizontal Scroll
				<text>\n横向滚动</text>
			</view>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
					<view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
				</scroll-view>
			</view>
			<view class="uni-common-pb"></view>
		</view>
	</view>
</template>
```

### Example (Example 3)

```vue
<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		methods: {
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			}
		}
	}
</script>
```

### Example (Example 4)

```vue
<style>
	.scroll-Y {
		height: 300rpx;
	}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
</style>
```

### Example (Example 5)

```vue
<template>
    <view>
        <scroll-view style="height: 300px;" scroll-y="true" refresher-enabled="true" :refresher-triggered="triggered"
            :refresher-threshold="100" refresher-background="lightgreen" @refresherpulling="onPulling"
            @refresherrefresh="onRefresh" @refresherrestore="onRestore" @refresherabort="onAbort"></scroll-view>
    </view>
</template>
```

### Example (Example 6)

```vue
<template>
    <view>
        <scroll-view style="height: 300px;" scroll-y="true" refresher-enabled="true" :refresher-triggered="triggered"
            :refresher-threshold="100" refresher-background="lightgreen" @refresherpulling="onPulling"
            @refresherrefresh="onRefresh" @refresherrestore="onRestore" @refresherabort="onAbort"></scroll-view>
    </view>
</template>
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/scroll-view.html)
