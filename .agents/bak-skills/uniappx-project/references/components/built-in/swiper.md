# swiper

## Instructions

滑块视图容器。

一般用于左右滑动或上下滑动，比如banner轮播图。

注意滑动切换和滚动的区别，滑动切换是一屏一屏的切换。swiper下的每个swiper-item是一个滑动切换区域，不能停留在2个滑动区域之间。

### Syntax

- 使用 `<swiper />`（或 `<swiper></swiper>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| indicator-dots | Boolean | false | 是否显示面板指示点 |  |
| indicator-color | Color | rgba(0, 0, 0, .3) | 指示点颜色 |  |
| indicator-active-color | Color | #000000 | 当前选中的指示点颜色 |  |
| active-class | String |  | swiper-item 可见时的 class | 支付宝小程序 |
| changing-class | String |  | acceleration 设置为 true 时且处于滑动过程中，中间若干屏处于可见时的class | 支付宝小程序 |
| autoplay | Boolean | false | 是否自动切换 |  |
| current | Number | 0 | 当前所在滑块的 index |  |
| current-item-id | String |  | 当前所在滑块的 item-id ，不能与 current 被同时指定 | 支付宝小程序不支持、小红书小程序不支持 |
| interval | Number | 5000 | 自动切换时间间隔 |  |
| duration | Number | 500 | 滑动动画时长 | app-nvue不支持 |
| circular | Boolean | false | 是否采用衔接滑动，即播放到末尾后重新回到开头 |  |
| vertical | Boolean | false | 滑动方向是否为纵向 |  |
| previous-margin | String | 0px | 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值 | app-nvue、抖音小程序、飞书小程序不支持 |
| next-margin | String | 0px | 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值 | app-nvue、抖音小程序、飞书小程序不支持 |
| acceleration | Boolean | false | 当开启时，会根据滑动速度，连续滑动多屏 | 支付宝小程序 |
| disable-programmatic-animation | Boolean | false | 是否禁用代码变动触发 swiper 切换时使用动画。 | 支付宝小程序 |
| display-multiple-items | Number | 1 | 同时显示的滑块数量 | app-nvue、支付宝小程序不支持、小红书小程序不支持 |
| skip-hidden-item-layout | Boolean | false | 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息 | App、微信小程序、京东小程序 |
| disable-touch | Boolean | false | 是否禁止用户 touch 操作 | App 2.5.5+、H5 2.5.5+、支付宝小程序 |
| easing-function | String | default | 指定 swiper 切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic | 微信小程序、快手小程序、京东小程序 |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| @change | EventHandle |  | current 改变时会触发 change 事件，event.detail = {current: current, source: source} |  |
| @transition | EventHandle |  | swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}，支付宝小程序暂不支持dx, dy | App、H5、微信小程序、支付宝小程序、抖音小程序、飞书小程序、QQ小程序、快手小程序 |
| @animationfinish | EventHandle |  | 动画结束时会触发 animationfinish 事件，event.detail = {current: current, source: source} | 抖音小程序、飞书小程序与小红书小程序不支持 |

#### Platform Compatibility

See official docs for platform support table: `https://doc.dcloud.net.cn/uni-app-x/component/swiper.html`

### Examples

### Example (Example 1)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="swiper-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">指示点</view>
				<switch :checked="indicatorDots" @change="changeIndicatorDots" />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">自动播放</view>
				<switch :checked="autoplay" @change="changeAutoplay" />
			</view>
		</view>

		<view class="uni-padding-wrap">
			<view class="uni-common-mt">
				<text>幻灯片切换时长(ms)</text>
				<text class="info">{{duration}}</text>
			</view>
			<slider @change="durationChange" :value="duration" min="500" max="2000" />
			<view class="uni-common-mt">
				<text>自动播放间隔时长(ms)</text>
				<text class="info">{{interval}}</text>
			</view>
			<slider @change="intervalChange" :value="interval" min="2000" max="10000" />
		</view>
	</view>
</template>
```

### Example (Example 2)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="swiper-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">指示点</view>
				<switch :checked="indicatorDots" @change="changeIndicatorDots" />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">自动播放</view>
				<switch :checked="autoplay" @change="changeAutoplay" />
			</view>
		</view>

		<view class="uni-padding-wrap">
			<view class="uni-common-mt">
				<text>幻灯片切换时长(ms)</text>
				<text class="info">{{duration}}</text>
			</view>
			<slider @change="durationChange" :value="duration" min="500" max="2000" />
			<view class="uni-common-mt">
				<text>自动播放间隔时长(ms)</text>
				<text class="info">{{interval}}</text>
			</view>
			<slider @change="intervalChange" :value="interval" min="2000" max="10000" />
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
            background: ['color1', 'color2', 'color3'],
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 500
        }
    },
    methods: {
        changeIndicatorDots(e) {
            this.indicatorDots = !this.indicatorDots
        },
        changeAutoplay(e) {
            this.autoplay = !this.autoplay
        },
        intervalChange(e) {
            this.interval = e.target.value
        },
        durationChange(e) {
            this.duration = e.target.value
        }
    }
}
</script>
```

### Example (Example 4)

```vue
<style>
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}
	.swiper {
		height: 300rpx;
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}
	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}
	.info {
		position: absolute;
		right: 20rpx;
	}
	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}
</style>
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/swiper.html)
