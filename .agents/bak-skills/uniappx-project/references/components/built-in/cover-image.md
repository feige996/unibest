# cover-image

## Instructions

覆盖在原生组件上的图片视图。可覆盖的原生组件同 cover-view ，支持嵌套在 cover-view 里。

平台差异说明

属性说明

### Syntax

- 使用 `<cover-image />`（或 `<cover-image></cover-image>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| src | String |  | 图标路径。支持本地路径、网络路径。不支持 base64 格式。 |  |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| @load | eventhandle |  | 图片加载成功时触发 | 微信小程序 2.1.0、百度小程序、QQ小程序、快手小程序、京东小程序 |
| @error | eventhandle |  | 图片加载失败时触发 | 微信小程序 2.1.0、百度小程序、QQ小程序、快手小程序、京东小程序 |

#### Platform Compatibility

See official docs for platform support table: `https://doc.dcloud.net.cn/uni-app-x/component/cover-image.html`

### Examples

### Example (Example 1)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view class="page">
		<video class="video" id="demoVideo" :controls="false" :enable-progress-gesture="false" :show-center-play-btn="true" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v">
			<cover-view class="controls-title">简单的自定义 controls</cover-view>
			<cover-image class="controls-play img" @click="play" src="/static/play.png"></cover-image>
			<cover-image class="controls-pause img" @click="pause" src="/static/pause.png"></cover-image>
		</video>
	</view>
</template>
```

### Example (Example 2)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view class="page">
		<video class="video" id="demoVideo" :controls="false" :enable-progress-gesture="false" :show-center-play-btn="true" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v">
			<cover-view class="controls-title">简单的自定义 controls</cover-view>
			<cover-image class="controls-play img" @click="play" src="/static/play.png"></cover-image>
			<cover-image class="controls-pause img" @click="pause" src="/static/pause.png"></cover-image>
		</video>
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
		mounted() {
			this.videoCtx = uni.createVideoContext('demoVideo')
		},
		methods: {
			play(event) {
				this.videoCtx.play();
				uni.showToast({
					title: '开始播放',
					icon: 'none'
				});
			},
			pause(event) {
				this.videoCtx.pause();
				uni.showToast({
					title: '暂停播放',
					icon: 'none'
				});
			}
		}
	}
</script>
```

### Example (Example 4)

```vue
<style>
	.page {
		display: flex;
		justify-content: center;
	}

	.video {
		position: relative;
	}

	cover-view,
	cover-image {
		display: inline-block;
	}

	.img {
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		top: 50%;
		margin-top: -50rpx;
	}

	.controls-play {
		left: 50rpx;
	}

	.controls-pause {
		right: 50rpx;
	}

	.controls-title {
		width: 100%;
		text-align: center;
		color: #FFFFFF;
	}
</style>
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/cover-image.html)
