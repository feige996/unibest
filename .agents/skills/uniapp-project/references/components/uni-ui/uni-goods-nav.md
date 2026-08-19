# uni-goods-nav

## Instructions

组件名：uni-goods-nav

代码块： uGoodsNav

点击下载&安装

### Syntax

- 使用 `<uni-goods-nav />`（或 `<uni-goods-nav></uni-goods-nav>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| options | Array | - | 组件参数 |
| buttonGroup | Array | - | 组件按钮组参数 |
| fill | Boolean | false | 按钮是否平铺 |

#### Events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| @click | 左侧点击事件 | e = {index,content} |
| @buttonClick | 右侧按钮组点击事件 | e = {index,content} |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-goods-nav.html`

### Examples

### Example (Example 1)

```vue
<template>
	<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
</template>
<script>

export default {
	data () {
	  return {
	    options: [{
			icon: 'headphones',
			text: '客服'
		}, {
			icon: 'shop',
			text: '店铺',
			info: 2,
			infoBackgroundColor:'#007aff',
			infoColor:"red"
		}, {
			icon: 'cart',
			text: '购物车',
			info: 2
		}],
	    buttonGroup: [{
	      text: '加入购物车',
	      backgroundColor: '#ff0000',
	      color: '#fff'
	    },
	    {
	      text: '立即购买',
	      backgroundColor: '#ffa200',
	      color: '#fff'
	    }
	    ]
	  }
	},
	methods: {
	  onClick (e) {
	    uni.showToast({
	      title: `点击${e.content.text}`,
	      icon: 'none'
	    })
	  },
	  buttonClick (e) {
	    console.log(e)
	    this.options[2].info++
	  }
	}
}
</script>
```

### Example (Example 2)

```html
<template>
	<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
</template>
<script>

export default {
	data () {
	  return {
	    options: [{
			icon: 'headphones',
			text: '客服'
		}, {
			icon: 'shop',
			text: '店铺',
			info: 2,
			infoBackgroundColor:'#007aff',
			infoColor:"red"
		}, {
			icon: 'cart',
			text: '购物车',
			info: 2
		}],
	    buttonGroup: [{
	      text: '加入购物车',
	      backgroundColor: '#ff0000',
	      color: '#fff'
	    },
	    {
	      text: '立即购买',
	      backgroundColor: '#ffa200',
	      color: '#fff'
	    }
	    ]
	  }
	},
	methods: {
	  onClick (e) {
	    uni.showToast({
	      title: `点击${e.content.text}`,
	      icon: 'none'
	    })
	  },
	  buttonClick (e) {
	    console.log(e)
	    this.options[2].info++
	  }
	}
}
</script>
```

### Example (Example 3)

```vue
<template>
	<view class="uni-container">
		<uni-card is-full>
			<text class="uni-h6"> uni-goods-nav 组件主要用于电商类应用底部导航，可自定义加入购物车，购买等操作</text>
		</uni-card>
		<uni-section title="基础用法" type="line">
			<uni-goods-nav @click="onClick" />
		</uni-section>
		<uni-section title="自定义用法" type="line">
			<uni-goods-nav :fill="true" :options="options" :button-group="customButtonGroup" @click="onClick"
				@buttonClick="buttonClick" />
			<uni-goods-nav :fill="true" :options="options" :button-group="customButtonGroup1" @click="onClick"
				@buttonClick="buttonClick" style="margin-top: 20px;" />
		</uni-section>
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>

	</view>
</template>
```

### Example (Example 4)

```html
<template>
	<view class="uni-container">
		<uni-card is-full>
			<text class="uni-h6"> uni-goods-nav 组件主要用于电商类应用底部导航，可自定义加入购物车，购买等操作</text>
		</uni-card>
		<uni-section title="基础用法" type="line">
			<uni-goods-nav @click="onClick" />
		</uni-section>
		<uni-section title="自定义用法" type="line">
			<uni-goods-nav :fill="true" :options="options" :button-group="customButtonGroup" @click="onClick"
				@buttonClick="buttonClick" />
			<uni-goods-nav :fill="true" :options="options" :button-group="customButtonGroup1" @click="onClick"
				@buttonClick="buttonClick" style="margin-top: 20px;" />
		</uni-section>
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>

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
				options: [{
					icon: 'chat',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "#f5f5f5"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
						color: '#fff'
					}
				],
				customButtonGroup: [{
						text: '加入购物车',
						backgroundColor: 'linear-gradient(90deg, #1E83FF, #0053B8)',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: 'linear-gradient(90deg, #60F3FF, #088FEB)',
						color: '#fff'
					}
				],
				customButtonGroup1: [{
					text: '立即购买',
					backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
					color: '#fff'
				}]
			}
		},
		onLoad() {},
		methods: {
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>
```

### Example (Example 6)

```html
<style lang="scss">
	.example-body {
		padding: 0;
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}

	.goods-carts {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 0;
	}
</style>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-goods-nav.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=goods-nav)
- [Local Example](examples/uni-ui/uni-goods-nav.vue)
