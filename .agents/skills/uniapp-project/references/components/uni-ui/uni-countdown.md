# uni-countdown

## Instructions

组件名：uni-countdown

代码块： uCountDown

点击下载&安装

### Syntax

- 使用 `<uni-countdown />`（或 `<uni-countdown></uni-countdown>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| backgroundColor | String | #FFFFFF | 背景色 |
| color | String | #000000 | 文字颜色 |
| splitorColor | String | #000000 | 分割符号颜色 |
| day | Number | 0 | 天数 |
| hour | Number | 0 | 小时 |
| minute | Number | 0 | 分钟 |
| second | Number | 0 | 秒 |
| showDay | Boolean | true | 是否显示天数 |
| showHour | Boolean | true | 是否显示小时 |
| showMinute | Boolean | true | 是否显示分钟 |
| showColon | Boolean | true | 是否以冒号为分隔符 |
| start | Boolean | true | 是否初始化组件后就开始倒计时 |

#### Events

| 事件称名 | 说明 | 返回值 |
| --- | --- | --- |
| @timeup | 倒计时时间到触发事件 | - |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-countdown.html`

### Examples

### Example (Example 1)

```vue
<!-- 一般用法 -->
<uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>

<!-- 不显示天数 -->
<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12"></uni-countdown>

<!-- 修改颜色 -->
<uni-countdown color="#FFFFFF" background-color="#00B26A" border-color="#00B26A" :day="1" :hour="2" :minute="30" :second="0"></uni-countdown>
```

### Example (Example 2)

```html
<!-- 一般用法 -->
<uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>

<!-- 不显示天数 -->
<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12"></uni-countdown>

<!-- 修改颜色 -->
<uni-countdown color="#FFFFFF" background-color="#00B26A" border-color="#00B26A" :day="1" :hour="2" :minute="30" :second="0"></uni-countdown>
```

### Example (Example 3)

```vue
<template>
	<view class="container">
		<uni-card is-full>
			<text class="uni-h6">倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景</text>
		</uni-card>
		 <uni-section title="一般用法" type="line" padding>
			<uni-countdown :day="1" :hour="1" :minute="12" :second="40" />
		</uni-section>
		<uni-section title="不显示天数" subTitle="设置 show-day = false 不显示天" type="line" padding>
			<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12" />
		</uni-section>
		<uni-section title="文字分隔符" subTitle="设置 show-colon 属性设置分隔符样式" type="line" padding>
			<uni-countdown :minute="30" :second="0" :show-colon="false" />
		</uni-section>
		<uni-section title="修改颜色" subTitle="设置 color \ background 属性设置组件颜色" type="line" padding>
			<uni-countdown :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#007AFF" />
		</uni-section>
		<uni-section title="修改字体大小" subTitle="设置 font-size 属性设置组件大小" type="line" padding>
			<uni-countdown :font-size="30" :day="1" :hour="2" :minute="30" :second="0" />
		</uni-section>
		<uni-section title="修改颜色 + 字体大小" type="line" padding>
			<uni-countdown :font-size="30" :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#007AFF" />
		</uni-section>
		<uni-section title="自由控制开始/暂停" subTitle="设置 start 属性控制是否自动开启" type="line" padding>
			<uni-countdown :start="start" :day="1" :hour="1" :minute="12" :second="40" />
		</uni-section>
		<uni-section title="倒计时回调事件" type="line" padding>
			<uni-countdown :show-day="false" :second="timeupSecond" @timeup="timeup" />
		</uni-section>
		<uni-section title="动态赋值" type="line" padding>
			<uni-countdown  :show-day="false" :hour="testHour" :minute="testMinute" :second="testSecond" />
		</uni-section>
	</view>
</template>
```

### Example (Example 4)

```vue
<template>
	<view class="container">
		<uni-card is-full>
			<text class="uni-h6">倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景</text>
		</uni-card>
		 <uni-section title="一般用法" type="line" padding>
			<uni-countdown :day="1" :hour="1" :minute="12" :second="40" />
		</uni-section>
		<uni-section title="不显示天数" subTitle="设置 show-day = false 不显示天" type="line" padding>
			<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12" />
		</uni-section>
		<uni-section title="文字分隔符" subTitle="设置 show-colon 属性设置分隔符样式" type="line" padding>
			<uni-countdown :minute="30" :second="0" :show-colon="false" />
		</uni-section>
		<uni-section title="修改颜色" subTitle="设置 color \ background 属性设置组件颜色" type="line" padding>
			<uni-countdown :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#007AFF" />
		</uni-section>
		<uni-section title="修改字体大小" subTitle="设置 font-size 属性设置组件大小" type="line" padding>
			<uni-countdown :font-size="30" :day="1" :hour="2" :minute="30" :second="0" />
		</uni-section>
		<uni-section title="修改颜色 + 字体大小" type="line" padding>
			<uni-countdown :font-size="30" :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#007AFF" />
		</uni-section>
		<uni-section title="自由控制开始/暂停" subTitle="设置 start 属性控制是否自动开启" type="line" padding>
			<uni-countdown :start="start" :day="1" :hour="1" :minute="12" :second="40" />
		</uni-section>
		<uni-section title="倒计时回调事件" type="line" padding>
			<uni-countdown :show-day="false" :second="timeupSecond" @timeup="timeup" />
		</uni-section>
		<uni-section title="动态赋值" type="line" padding>
			<uni-countdown  :show-day="false" :hour="testHour" :minute="testMinute" :second="testSecond" />
		</uni-section>
	</view>
</template>
```

### Example (Example 5)

```vue
<script>
	export default {
		components: {},
		data() {
			return {
				testHour: 1,
				testMinute: 0,
				testSecond: 0,
				start: false,
				timeupSecond: 10
			}
		},
		mounted() {
			setTimeout(() => {
				this.testHour = 1
				this.testMinute = 1
				this.testSecond = 0
				this.start = true
			}, 3000)
			setTimeout(() => {
				this.start = false
			}, 10000)
		},
		methods: {
			timeup() {
				uni.showToast({
					title: '时间到'
				})
				this.timeupSecond = 29
			}
		}
	}
</script>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-countdown.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=countdown)
- [Local Example](examples/uni-ui/uni-countdown.vue)
