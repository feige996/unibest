# uni-rate

## Instructions

组件名：uni-rate

代码块： uRate 关联组件： uni-icons

点击下载&安装

### Syntax

- 使用 `<uni-rate />`（或 `<uni-rate></uni-rate>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value/v-model | Number | 0 | 当前评分 |
| color | String | #ececec | 未选中状态的星星颜色 |
| activeColor | String | #ffca3e | 选中状态的星星颜色 |
| disabledColor | String | #c0c0c0 | 禁用状态的星星颜色 |
| size | Number | 24 | 星星的大小 |
| max | Number | 5 | 最大评分评分数量，目前一分一颗星 |
| margin | Number | 0 | 星星的间距，单位 px |
| isFill | Boolean | true | 星星的类型，是否为实心类型 |
| disabled | Boolean | false | 是否为禁用状态 (之前版本为已读状态，现更正为禁用状态) |
| readonly | Boolean | false | 是否为只读状态 |
| allowHalf | Boolean | false | 是否展示半星 |
| touchable | Boolean | true | 是否支持滑动手势 |

#### Events

| 事件称名 | 说明 | 返回参数 |
| --- | --- | --- |
| @change | 改变 value 的值返回 | e = { value:number } |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-rate.html`

### Examples

### Example (Example 1)

```vue
<!-- 基本用法 -->
<!-- 需要在 script 中绑定 value 变量 -->
<uni-rate v-model="value" @change="onChange"/>

<!-- 不支持滑动手势选择评分 -->
<uni-rate :touchable="false" :value="5"/>
<!-- 设置尺寸大小 -->
<uni-rate :size="18" :value="5"/>

<!-- 设置评分数 -->
<uni-rate :max="10" :value="5" />
	
<!-- 设置星星间隔 -->
<uni-rate :value="4" :margin="20" />	

<!-- 设置颜色 -->
<uni-rate :value="3" color="#bbb" active-color="red" />

<!-- 选择半星 -->
<uni-rate allow-half :value="3.5" />

<!-- 只读状态 -->
<uni-rate :readonly="true" :value="2" />

<!-- 禁用状态 -->
<uni-rate :disabled="true" disabledColor="#ccc" :value="3" />

<!-- 未选中的星星为镂空状态 -->
<uni-rate :value="3" :is-fill="false" />
```

### Example (Example 2)

```html
<!-- 基本用法 -->
<!-- 需要在 script 中绑定 value 变量 -->
<uni-rate v-model="value" @change="onChange"/>

<!-- 不支持滑动手势选择评分 -->
<uni-rate :touchable="false" :value="5"/>
<!-- 设置尺寸大小 -->
<uni-rate :size="18" :value="5"/>

<!-- 设置评分数 -->
<uni-rate :max="10" :value="5" />
	
<!-- 设置星星间隔 -->
<uni-rate :value="4" :margin="20" />	

<!-- 设置颜色 -->
<uni-rate :value="3" color="#bbb" active-color="red" />

<!-- 选择半星 -->
<uni-rate allow-half :value="3.5" />

<!-- 只读状态 -->
<uni-rate :readonly="true" :value="2" />

<!-- 禁用状态 -->
<uni-rate :disabled="true" disabledColor="#ccc" :value="3" />

<!-- 未选中的星星为镂空状态 -->
<uni-rate :value="3" :is-fill="false" />
```

### Example (Example 3)

```vue
export default {
	components: {},
	data() {
		return {
			value: 2
		}
	},
	methods: {
		onChange(e) {
			console.log('rate发生改变:' + JSON.stringify(e))
		}
	}
}
```

### Example (Example 4)

```javascript
export default {
	components: {},
	data() {
		return {
			value: 2
		}
	},
	methods: {
		onChange(e) {
			console.log('rate发生改变:' + JSON.stringify(e))
		}
	}
}
```

### Example (Example 5)

```vue
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">评分组件多用于商品评价打分、服务态度评价、用户满意度等场景。</text>
		</uni-card>
		<uni-section title="基本用法" type="line" padding>
			<uni-rate v-model="rateValue" @change="onChange" />
		</uni-section>
		<uni-section title="不支持滑动手势选择评分" subTitle="设置 touchable 属性控制是否开启手势选择" type="line" padding>
			<uni-rate :touchable="false" :value="5" @change="onChange" />
		</uni-section>
		<uni-section title="设置尺寸大小" subTitle="设置 size 属性控制组件大小" type="line" padding>
			<uni-rate size="18" :value="5" />
		</uni-section>
		<uni-section title="设置评分数" subTitle="设置 max 属性控制组件最大星星数量" type="line" padding>
			<uni-rate :max="10" :value="5" />
		</uni-section>
		<uni-section title="设置星星间隔" subTitle="设置 margin 属性控制星星间隔" type="line" padding>
			<uni-rate :value="4" margin="20" />
		</uni-section>
		<uni-section title="设置颜色" subTitle="使用 color 属性设置星星颜色" type="line" padding>
			<uni-rate :value="3" color="#bbb" active-color="red" />
		</uni-section>
		<uni-section title="半星" subTitle="使用 allow-half 属性设置是否显示半星" type="line" padding>
			<uni-rate allow-half :value="3.5" />
		</uni-section>
		<uni-section title="只读状态" subTitle="使用 readonly 属性设置组件只读" type="line" padding>
			<uni-rate :readonly="true" :value="2" />
		</uni-section>
		<uni-section title="禁用状态" subTitle="使用 disabled 属性设置组件禁用" type="line" padding>
			<uni-rate :disabled="true" disabledColor="#ccc" :value="3" />
		</uni-section>
		<uni-section title="未选中的星星为镂空状态" subTitle="使用 is-fill 属性设置星星镂空" type="line" padding>
			<uni-rate :value="3" :is-fill="false" />
		</uni-section>
	</view>
</template>
```

### Example (Example 6)

```html
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">评分组件多用于商品评价打分、服务态度评价、用户满意度等场景。</text>
		</uni-card>
		<uni-section title="基本用法" type="line" padding>
			<uni-rate v-model="rateValue" @change="onChange" />
		</uni-section>
		<uni-section title="不支持滑动手势选择评分" subTitle="设置 touchable 属性控制是否开启手势选择" type="line" padding>
			<uni-rate :touchable="false" :value="5" @change="onChange" />
		</uni-section>
		<uni-section title="设置尺寸大小" subTitle="设置 size 属性控制组件大小" type="line" padding>
			<uni-rate size="18" :value="5" />
		</uni-section>
		<uni-section title="设置评分数" subTitle="设置 max 属性控制组件最大星星数量" type="line" padding>
			<uni-rate :max="10" :value="5" />
		</uni-section>
		<uni-section title="设置星星间隔" subTitle="设置 margin 属性控制星星间隔" type="line" padding>
			<uni-rate :value="4" margin="20" />
		</uni-section>
		<uni-section title="设置颜色" subTitle="使用 color 属性设置星星颜色" type="line" padding>
			<uni-rate :value="3" color="#bbb" active-color="red" />
		</uni-section>
		<uni-section title="半星" subTitle="使用 allow-half 属性设置是否显示半星" type="line" padding>
			<uni-rate allow-half :value="3.5" />
		</uni-section>
		<uni-section title="只读状态" subTitle="使用 readonly 属性设置组件只读" type="line" padding>
			<uni-rate :readonly="true" :value="2" />
		</uni-section>
		<uni-section title="禁用状态" subTitle="使用 disabled 属性设置组件禁用" type="line" padding>
			<uni-rate :disabled="true" disabledColor="#ccc" :value="3" />
		</uni-section>
		<uni-section title="未选中的星星为镂空状态" subTitle="使用 is-fill 属性设置星星镂空" type="line" padding>
			<uni-rate :value="3" :is-fill="false" />
		</uni-section>
	</view>
</template>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-rate.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=rate)
- [Local Example](examples/uni-ui/uni-rate.vue)
