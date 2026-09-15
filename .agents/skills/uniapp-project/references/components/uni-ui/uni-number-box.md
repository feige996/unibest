# uni-number-box

## Instructions

组件名：uni-number-box

代码块： uNumberBox

点击下载&安装

### Syntax

- 使用 `<uni-number-box />`（或 `<uni-number-box></uni-number-box>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value/v-model | Number | 0 | 输入框当前值 |
| min | Number | 0 | 最小值 |
| max | Number | 100 | 最大值 |
| step | Number | 1 | 每次点击改变的间隔大小 |
| disabled | Boolean | false | 是否为禁用状态 |
| width | Number | 40 | 宽度（单位：px） |

#### Events

| 事件名称 | 说明 | 返回值 |
| --- | --- | --- |
| change | 输入框值改变时触发的事件，参数为输入框当前的 value | - |
| focus | 输入框聚焦时触发的事件，参数为 event 对象 | - |
| blur | 输入框失焦时触发的事件，参数为 event 对象 | - |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-number-box.html`

### Examples

### Example (Example 1)

```vue
<uni-number-box></uni-number-box>
<uni-number-box v-model="vModelValue" ></uni-number-box>
<uni-number-box :min="0" :max="9"></uni-number-box>
<uni-number-box @change="bindChange"></uni-number-box>
```

### Example (Example 2)

```html
<uni-number-box></uni-number-box>
<uni-number-box v-model="vModelValue" ></uni-number-box>
<uni-number-box :min="0" :max="9"></uni-number-box>
<uni-number-box @change="bindChange"></uni-number-box>
```

### Example (Example 3)

```vue
<template>
	<view class="page">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">数字输入框组件多用于购物车加减商品等场景</text>
		</uni-card>
		<uni-section title="基本用法" type="line" padding>
			<uni-number-box @change="changeValue" />
		</uni-section>
		<uni-section :title="'使用v-model : '+ vModelValue" subTitle="使用 v-model 显示默认值" type="line" padding>
			<uni-number-box v-model="vModelValue" @blur="blur" @focus="focus" @change="changeValue" />
		</uni-section>
		<uni-section title="设置最小值和最大值" subTitle="使用 min \ max 属性设置最大最小值" type="line" padding>
			<uni-number-box :min="2" :max="9" :value="555" />
		</uni-section>
		<uni-section title="设置步长（步长0.1)" subTitle="使用 step 属性设置步长" type="line" padding>
			<uni-number-box :value="1.1" :step="0.1" />
		</uni-section>
		<uni-section title="自定义背景" type="line" subTitle="使用 background 属性设置自定义背景色" padding>
			<uni-number-box :value="50" background="#2979FF" color="#fff" />
		</uni-section>
		<uni-section title="禁用状态" subTitle="使用 disabled 属性设置组件禁用" type="line" padding>
			<uni-number-box :disabled="true" />
		</uni-section>
		<uni-section :title="'获取输入的值 : '+ numberValue" type="line" padding>
			<uni-number-box :value="numberValue" @change="change" />
		</uni-section>
	</view>
</template>
```

### Example (Example 4)

```html
<template>
	<view class="page">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">数字输入框组件多用于购物车加减商品等场景</text>
		</uni-card>
		<uni-section title="基本用法" type="line" padding>
			<uni-number-box @change="changeValue" />
		</uni-section>
		<uni-section :title="'使用v-model : '+ vModelValue" subTitle="使用 v-model 显示默认值" type="line" padding>
			<uni-number-box v-model="vModelValue" @blur="blur" @focus="focus" @change="changeValue" />
		</uni-section>
		<uni-section title="设置最小值和最大值" subTitle="使用 min \ max 属性设置最大最小值" type="line" padding>
			<uni-number-box :min="2" :max="9" :value="555" />
		</uni-section>
		<uni-section title="设置步长（步长0.1)" subTitle="使用 step 属性设置步长" type="line" padding>
			<uni-number-box :value="1.1" :step="0.1" />
		</uni-section>
		<uni-section title="自定义背景" type="line" subTitle="使用 background 属性设置自定义背景色" padding>
			<uni-number-box :value="50" background="#2979FF" color="#fff" />
		</uni-section>
		<uni-section title="禁用状态" subTitle="使用 disabled 属性设置组件禁用" type="line" padding>
			<uni-number-box :disabled="true" />
		</uni-section>
		<uni-section :title="'获取输入的值 : '+ numberValue" type="line" padding>
			<uni-number-box :value="numberValue" @change="change" />
		</uni-section>
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
				numberValue: 0,
				vModelValue: 3
			}
		},
		methods: {
			change(value) {
				this.numberValue = value
			},
			changeValue(value) {
				console.log('返回数值：', value);
			},
			blur(e) {
				console.log('blur:', e);
			},
			focus(e) {
				console.log('focus:', e);
			}

		}
	}
</script>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-number-box.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=number-box)
- [Local Example](examples/uni-ui/uni-number-box.vue)
