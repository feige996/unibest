# uni-fab

## Instructions

组件名：uni-fab

代码块： uFab

点击下载&安装

### Syntax

- 使用 `<uni-fab />`（或 `<uni-fab></uni-fab>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| pattern | Object | - | 可选样式配置项 |
| horizontal | String | 'left' | 水平对齐方式。 left :左对齐， right ：右对齐 |
| vertical | String | 'bottom' | 垂直对齐方式。 bottom :下对齐， top ：上对齐 |
| direction | String | 'horizontal' | 展开菜单显示方式。 horizontal :水平显示， vertical ：垂直显示 |
| popMenu | Boolean | true | 是否使用弹出菜单 |
| content | Array | - | 展开菜单内容配置项 |

#### Events

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| @trigger | Function | 展开菜单点击事件，返回点击信息 |
| @fabClick | Function | 悬浮按钮点击事件 |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-fab.html`

### Examples

### Example (Example 1)

```vue
<template>
	<view>
		<uni-fab
			:pattern="pattern"
			:content="content"
			:horizontal="horizontal"
			:vertical="vertical"
			:direction="direction"
			@trigger="trigger"
		></uni-fab>
	</view>
</template>
```

### Example (Example 2)

```html
<template>
	<view>
		<uni-fab
			:pattern="pattern"
			:content="content"
			:horizontal="horizontal"
			:vertical="vertical"
			:direction="direction"
			@trigger="trigger"
		></uni-fab>
	</view>
</template>
```

### Example (Example 3)

```vue
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">uni-ui 规范颜色色板，通过内置样式快速指定元素前景和背景色。</text>
		</uni-card>

		<uni-section title="基本功能" subTitle="点击按钮,切换 fab 不同状态" type="line">
			<view class="warp">
				<button class="button" type="primary" @click="switchBtn(0)">切换菜单方向({{ directionStr }})</button>
				<button class="button" type="primary" @click="switchBtn('left', 'bottom')">左下角显示</button>
				<button class="button" type="primary" @click="switchBtn('right', 'bottom')">右下角显示</button>
				<button class="button" type="primary" @click="switchBtn('left', 'top')">左上角显示</button>
				<button class="button" type="primary" @click="switchBtn('left', 'top')">左上角显示</button>
				<button class="button" type="primary" @click="switchBtn('right', 'top')">右上角显示</button>
				<button class="button" type="primary" @click="switchColor">修改颜色</button>
			</view>
		</uni-section>
		<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
			:direction="direction" @trigger="trigger" @fabClick="fabClick" />
	</view>
</template>
```

### Example (Example 4)

```html
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">uni-ui 规范颜色色板，通过内置样式快速指定元素前景和背景色。</text>
		</uni-card>

		<uni-section title="基本功能" subTitle="点击按钮,切换 fab 不同状态" type="line">
			<view class="warp">
				<button class="button" type="primary" @click="switchBtn(0)">切换菜单方向({{ directionStr }})</button>
				<button class="button" type="primary" @click="switchBtn('left', 'bottom')">左下角显示</button>
				<button class="button" type="primary" @click="switchBtn('right', 'bottom')">右下角显示</button>
				<button class="button" type="primary" @click="switchBtn('left', 'top')">左上角显示</button>
				<button class="button" type="primary" @click="switchBtn('left', 'top')">左上角显示</button>
				<button class="button" type="primary" @click="switchBtn('right', 'top')">右上角显示</button>
				<button class="button" type="primary" @click="switchColor">修改颜色</button>
			</view>
		</uni-section>
		<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
			:direction="direction" @trigger="trigger" @fabClick="fabClick" />
	</view>
</template>
```

### Example (Example 5)

```html
<script>
	export default {
		components: {},
		data() {
			return {
				title: 'uni-fab',
				directionStr: '垂直',
				horizontal: 'left',
				vertical: 'bottom',
				direction: 'horizontal',
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#007AFF',
					iconColor: '#fff'
				},
				is_color_type: false,
				content: [{
						iconPath: '/static/image.png',
						selectedIconPath: '/static/image-active.png',
						text: '相册',
						active: false
					},
					{
						iconPath: '/static/home.png',
						selectedIconPath: '/static/home-active.png',
						text: '首页',
						active: false
					},
					{
						iconPath: '/static/star.png',
						selectedIconPath: '/static/star-active.png',
						text: '收藏',
						active: false
					}
				]
			}
		},
		onBackPress() {
			if (this.$refs.fab.isShow) {
				this.$refs.fab.close()
				return true
			}
			return false
		},
		methods: {
			trigger(e) {
				console.log(e)
				this.content[e.index].active = !e.item.active
				uni.showModal({
					title: '提示',
					content: `您${this.content[e.index].active ? '选中了' : '取消了'}${e.item.text}`,
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定')
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			},
			fabClick() {
				uni.showToast({
					title: '点击了悬浮按钮',
					icon: 'none'
				})
			},
			switchBtn(hor, ver) {
				if (hor === 0) {
					this.direction = this.direction === 'horizontal' ? 'vertical' : 'horizontal'
					this.directionStr = this.direction === 'horizontal' ? '垂直' : '水平'
				} else {
					this.horizontal = hor
					this.vertical = ver
				}
				this.$forceUpdate()
			},
			switchColor() {
				this.is_color_type = !this.is_color_type
				if (this.is_color_type) {
					this.pattern.iconColor = '#aaa'
					this.pattern.buttonColor = '#fff'
				} else {
					this.pattern.iconColor = '#fff'
					this.pattern.buttonColor = '#007AFF'
				}
			}
		}
	}
</script>
```

### Example (Example 6)

```html
<style lang="scss">
	.warp {
		padding: 10px;
	}

	.button {
		margin-bottom: 10px;
	}
</style>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-fab.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=fab)
- [Local Example](examples/uni-ui/uni-fab.vue)
