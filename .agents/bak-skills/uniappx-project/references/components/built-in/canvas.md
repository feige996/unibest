# canvas

## Instructions

画布

属性说明

注意事项：

### Syntax

- 使用 `<canvas />`（或 `<canvas></canvas>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| type | String |  | 指定 canvas 类型，支持 2d 和 webgl | 微信小程序2.7.0+ 、抖音小程序1.78.0+、支付宝小程序2.7.0+ |
| canvas-id | String |  | canvas 组件的唯一标识符 |  |
| disable-scroll | Boolean | false | 当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新 | 抖音小程序与飞书小程序不支持 |
| hidpi | Boolean | true | 是否启用高清处理 | H5 (HBuilder X 3.4.0+)、App-vue (HBuilder X 3.4.0+) |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| @touchstart | EventHandle |  | 手指触摸动作开始 | 抖音小程序1.78.0+、小红书小程序 |
| @touchmove | EventHandle |  | 手指触摸后移动 | 抖音小程序1.78.0+、小红书小程序 |
| @touchend | EventHandle |  | 手指触摸动作结束 | 抖音小程序1.78.0+、小红书小程序 |
| @touchcancel | EventHandle |  | 手指触摸动作被打断，如来电提醒，弹窗 | 抖音小程序1.78.0+ |
| @longtap | EventHandle |  | 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动 | 抖音小程序与飞书小程序不支持 |
| @error | EventHandle |  | 当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'} | 抖音小程序与飞书小程序不支持 |

#### Platform Compatibility

See official docs for platform support table: `https://doc.dcloud.net.cn/uni-app-x/component/canvas.html`

### Examples

### Example (Example 1)

```vue
<template>
	<view>
		<canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas" id="firstCanvas"></canvas>
		<canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas" id="secondCanvas"></canvas>
		<canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas" id="secondCanvas" @error="canvasIdErrorCallback"></canvas>
	</view>
</template>
```

### Example (Example 2)

```vue
<template>
	<view>
		<canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas" id="firstCanvas"></canvas>
		<canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas" id="secondCanvas"></canvas>
		<canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas" id="secondCanvas" @error="canvasIdErrorCallback"></canvas>
	</view>
</template>
```

### Example (Example 3)

```vue
<script>
export default {
	onReady: function (e) {
		var context = uni.createCanvasContext('firstCanvas')
		context.setStrokeStyle("#00ff00")
		context.setLineWidth(5)
		context.rect(0, 0, 200, 200)
		context.stroke()
		context.setStrokeStyle("#ff0000")
		context.setLineWidth(2)
		context.moveTo(160, 100)
		context.arc(100, 100, 60, 0, 2 * Math.PI, true)
		context.moveTo(140, 100)
		context.arc(100, 100, 40, 0, Math.PI, false)
		context.moveTo(85, 80)
		context.arc(80, 80, 5, 0, 2 * Math.PI, true)
		context.moveTo(125, 80)
		context.arc(120, 80, 5, 0, 2 * Math.PI, true)
		context.stroke()
		context.draw()
	},
	methods: {
		canvasIdErrorCallback: function (e) {
			console.error(e.detail.errMsg)
		}
	}
}
</script>
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/canvas.html)
