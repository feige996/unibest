# audio

## Instructions

音频。

平台差异说明

注意： 微信小程序平台自基础库 1.6.0 版本开始，不再维护 audio 组件，推荐使用API方式而不是组件方式来播放音频。API见 uni.createInnerAudioContext 替代。

### Syntax

- 使用 `<audio />`（或 `<audio></audio>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| id | String |  | audio 组件的唯一标识符 |
| src | String |  | 要播放音频的资源地址 |
| loop | Boolean | false | 是否循环播放 |
| controls | Boolean | false | 是否显示默认控件 |
| poster | String |  | 默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效 |
| name | String | 未知音频 | 默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效 |
| author | String | 未知作者 | 默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效 |

#### Events

| 事件名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| @error | EventHandle |  | 当发生错误时触发 error 事件，detail = {errMsg: MediaError.code} |
| @play | EventHandle |  | 当开始/继续播放时触发play事件 |
| @pause | EventHandle |  | 当暂停播放时触发 pause 事件 |
| @timeupdate | EventHandle |  | 当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration} |
| @ended | EventHandle |  | 当播放到末尾时触发 ended 事件 |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/audio.html`

### Examples

### Example (Example 1)

```vue
<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap" style="text-align: center;">
				<audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" :action="audioAction" controls></audio>
			</view>
		</view>
	</view>
</template>
```

### Example (Example 2)

```html
<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap" style="text-align: center;">
				<audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" :action="audioAction" controls></audio>
			</view>
		</view>
	</view>
</template>
```

### Example (Example 3)

```vue
export default {
	data() {
		return {
			current: {
				poster: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/music-a.png',
				name: '致爱丽丝',
				author: '暂无',
				src: 'https://web-ext-storage.dcloud.net.cn/doc/uniapp/ForElise.mp3',
			},
			audioAction: {
				method: 'pause'
			}
		}
	}
}
```

### Example (Example 4)

```javascript
export default {
	data() {
		return {
			current: {
				poster: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/music-a.png',
				name: '致爱丽丝',
				author: '暂无',
				src: 'https://web-ext-storage.dcloud.net.cn/doc/uniapp/ForElise.mp3',
			},
			audioAction: {
				method: 'pause'
			}
		}
	}
}
```

Reference: [Official Documentation](https://uniapp.dcloud.net.cn/component/audio.html)
