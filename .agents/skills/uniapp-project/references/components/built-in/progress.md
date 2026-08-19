# progress

## Instructions

进度条。

属性说明

示例 查看演示

### Syntax

- 使用 `<progress />`（或 `<progress></progress>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| percent | Number | 无 | 百分比0~100 |  |
| show-info | Boolean | false | 在进度条右侧显示百分比 |  |
| border-radius | Number/String | 0 | 圆角大小 | app-nvue、微信基础库2.3.1+、QQ小程序、快手小程序、京东小程序、小红书小程序 |
| font-size | Number/String | 16 | 右侧百分比字体大小 | app-nvue、微信基础库2.3.1+、QQ小程序、京东小程序、小红书小程序 |
| stroke-width | Number/String | 6 | 进度条线的宽度，接受 px 和 rpx 值 |  |
| activeColor | Color | #09BB07（百度为#E6E6E6） | 已选择的进度条的颜色 |  |
| backgroundColor | Color | #EBEBEB | 未选择的进度条的颜色 |  |
| active | Boolean | false | 进度条从左往右的动画 |  |
| active-mode | String | backwards | backwards: 动画从头播；forwards：动画从上次结束点接着播 | App、H5、微信小程序、QQ小程序、快手小程序、京东小程序、小红书小程序 |
| duration | Number | 30 | 进度增加1%所需毫秒数 | App-nvue2.6.1+、微信基础库2.8.2+、H5 3.1.11+、App-Vue 3.1.11+、快手小程序、京东小程序、小红书小程序 |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| @activeend | EventHandle |  | 动画完成事件 | 微信小程序、京东小程序、小红书小程序 |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/progress.html`

### Examples

### Example (Example 1)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="progress-box">
				<progress :percent="pgList[0]" show-info stroke-width="3" />
			</view>
			<view class="progress-box">
				<progress :percent="pgList[1]" stroke-width="3" />
				<uni-icons type="close" class="progress-cancel" color="#dd524d"></uni-icons>
			</view>
			<view class="progress-box">
				<progress :percent="pgList[2]" stroke-width="3" />
			</view>
			<view class="progress-box">
				<progress :percent="pgList[3]" activeColor="#10AEFF" stroke-width="3" />
			</view>
			<view class="progress-control">
				<button type="primary" @click="setProgress">设置进度</button>
				<button type="warn" @click="clearProgress">清除进度</button>
			</view>
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
			<view class="progress-box">
				<progress :percent="pgList[0]" show-info stroke-width="3" />
			</view>
			<view class="progress-box">
				<progress :percent="pgList[1]" stroke-width="3" />
				<uni-icons type="close" class="progress-cancel" color="#dd524d"></uni-icons>
			</view>
			<view class="progress-box">
				<progress :percent="pgList[2]" stroke-width="3" />
			</view>
			<view class="progress-box">
				<progress :percent="pgList[3]" activeColor="#10AEFF" stroke-width="3" />
			</view>
			<view class="progress-control">
				<button type="primary" @click="setProgress">设置进度</button>
				<button type="warn" @click="clearProgress">清除进度</button>
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
			return {
				pgList: [0, 0, 0, 0]
			}
		},
		methods: {
			setProgress() {
				this.pgList = [20, 40, 60, 80]
			},
			clearProgress() {
				this.pgList = [0, 0, 0, 0]
			}
		}
	}
</script>
```

### Example (Example 4)

```vue
<style>
	.progress-box {
		display: flex;
		height: 50rpx;
		margin-bottom: 60rpx;
	}

	.uni-icon {
		line-height: 1.5;
	}

	.progress-cancel {
		margin-left: 40rpx;
	}

	.progress-control button {
		margin-top: 20rpx;
	}
</style>
```

Reference: [Official Documentation](https://uniapp.dcloud.net.cn/component/progress.html)
