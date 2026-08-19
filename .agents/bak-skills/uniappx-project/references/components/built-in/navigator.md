# navigator

## Instructions

页面跳转。

该组件类似HTML中的 <a> 组件，但只能跳转本地页面。目标页面必须在pages.json中注册。

除了组件方式，API方式也可以实现页面跳转，另见： https://uniapp.dcloud.io/api/router?id=navigateto

### Syntax

- 使用 `<navigator />`（或 `<navigator></navigator>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| url | String |  | 应用内的跳转链接，值为相对路径或绝对路径，如："../first/first"，"/pages/first/first"，注意不能加 .vue 后缀 |  |
| open-type | String | navigate | 跳转方式 |  |
| delta | Number |  | 当 open-type 为 'navigateBack' 时有效，表示回退的层数 | 支付宝小程序不支持 |
| animation-type | String | pop-in/out | 当 open-type 为 navigate、navigateBack 时有效，窗口的显示/关闭动画效果，详见： 窗口动画 | App |
| animation-duration | Number | 300 | 当 open-type 为 navigate、navigateBack 时有效，窗口显示/关闭动画的持续时间。 | App |
| render-link | boolean | true | 是否给 navigator 组件加一层 a 标签控制 ssr 渲染 | web3.7.6+、App-vue3.7.6+ |
| hover-class | String | navigator-hover | 指定点击时的样式类，当hover-class="none"时，没有点击态效果 |  |
| hover-stop-propagation | Boolean | false | 指定是否阻止本节点的祖先节点出现点击态 | 微信小程序、小红书小程序 |
| hover-start-time | Number | 50 | 按住后多久出现点击态，单位毫秒 |  |
| hover-stay-time | Number | 600 | 手指松开后点击态保留时间，单位毫秒 |  |
| target | String | self | 在哪个小程序目标上发生跳转，默认当前小程序，值域self/miniProgram | 微信2.0.7+、百度2.5.2+、QQ |

#### Events

See official docs for full events list: `https://doc.dcloud.net.cn/uni-app-x/component/navigator.html`

#### Platform Compatibility

| 值 | 说明 | 平台差异说明 |
| --- | --- | --- |
| navigate | 对应 uni.navigateTo 的功能，保留当前页面，跳转到应用内的某个页面 |  |
| redirect | 对应 uni.redirectTo 的功能，关闭当前页面，跳转到应用内的某个页面 |  |
| switchTab | 对应 uni.switchTab 的功能，跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 |  |
| reLaunch | 对应 uni.reLaunch 的功能，关闭所有页面，打开到应用内的某个页面 | 抖音小程序与飞书小程序不支持 |
| navigateBack | 对应 uni.navigateBack 的功能，关闭当前页面，返回上一页面或多级页面 |  |
| exit | 退出小程序，target="miniProgram"时生效 | 微信2.1.0+、百度2.5.2+、QQ1.4.7+、小红书小程序 |

### Examples

### Example (Example 1)

```vue
<template>
	<view>
		<view class="page-body">
			<view class="btn-area">
				<navigator url="navigate/navigate?title=navigate" hover-class="navigator-hover">
					<button type="default">跳转到新页面</button>
				</navigator>
				<navigator url="redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">
					<button type="default">在当前页打开</button>
				</navigator>
				<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
					<button type="default">跳转tab页面</button>
				</navigator>
			</view>
		</view>
	</view>
</template>
<script>
// navigate.vue页面接受参数
export default {
	onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		console.log(option.id); //打印出上个页面传递的参数。
		console.log(option.name); //打印出上个页面传递的参数。
	}
}
</script>
```

### Example (Example 2)

```html
<template>
	<view>
		<view class="page-body">
			<view class="btn-area">
				<navigator url="navigate/navigate?title=navigate" hover-class="navigator-hover">
					<button type="default">跳转到新页面</button>
				</navigator>
				<navigator url="redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">
					<button type="default">在当前页打开</button>
				</navigator>
				<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
					<button type="default">跳转tab页面</button>
				</navigator>
			</view>
		</view>
	</view>
</template>
<script>
// navigate.vue页面接受参数
export default {
	onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		console.log(option.id); //打印出上个页面传递的参数。
		console.log(option.name); //打印出上个页面传递的参数。
	}
}
</script>
```

### Example (Example 3)

```vue
<navigator :url="'/pages/navigate/navigate?item='+ encodeURIComponent(JSON.stringify(item))"></navigator>
```

### Example (Example 4)

```html
<navigator :url="'/pages/navigate/navigate?item='+ encodeURIComponent(JSON.stringify(item))"></navigator>
```

### Example (Example 5)

```vue
// navigate.vue页面接受参数
onLoad: function (option) {
	const item = JSON.parse(decodeURIComponent(option.item));
}
```

### Example (Example 6)

```javascript
// navigate.vue页面接受参数
onLoad: function (option) {
	const item = JSON.parse(decodeURIComponent(option.item));
}
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/navigator.html)
