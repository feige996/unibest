# uni-data-checkbox

## Instructions

组件名：uni-data-checkbox

代码块： uDataCheckbox

点击下载&安装

### Syntax

- 使用 `<uni-data-checkbox />`（或 `<uni-data-checkbox></uni-data-checkbox>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 可选值 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| value/v-model | Array/String/Number | - | - | 默认值，multiple=true时为 Array类型，否则为 String或Number类型 |
| localdata | Array | - | - | 本地渲染数据 |
| mode | String | default/list/button/tag | default | 显示模式 |
| multiple | Boolean | - | false | 是否多选 |
| min | String/Number | - | - | 最小选择个数 ，multiple为true时生效 |
| max | String/Number | - | - | 最大选择个数 ，multiple为true时生效 |
| wrap | Boolean | - | - | 是否换行显示 |
| icon | String | left/right | left | list 列表模式下 icon 显示的位置 |
| selectedColor | String | - | #007aff | 选中颜色 |
| selectedTextColor | String | - | #333 | 选中文本颜色，如不填写则自动显示 |
| emptyText | String | - | 暂无数据 | 没有数据时显示的文字 ，本地数据无效 |
| map | Object | - | {text:'text',value:'value'} | 字段映射，将text/value映射到数据中的其他字段 |

#### Events

| 事件名 | 事件说明 | 返回参数 |
| --- | --- | --- |
| @change | 选中状态改变时触发事件 | - |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-data-checkbox.html`

### Examples

### Example (Example 1)

```vue
<template>
	<view>
		<uni-data-checkbox v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>
<script>
	export default {
		data() { 
			return {
				value: 0,
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

### Example (Example 2)

```vue
<template>
	<view>
		<uni-data-checkbox v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>
<script>
	export default {
		data() { 
			return {
				value: 0,
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

### Example (Example 3)

```vue
<template>
	<view>
		<uni-data-checkbox multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>
<script>
	export default {
		data() { 
			return {
				value: [0,2],
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

### Example (Example 4)

```vue
<template>
	<view>
		<uni-data-checkbox multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>
<script>
	export default {
		data() { 
			return {
				value: [0,2],
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

### Example (Example 5)

```vue
<template>
	<view>
		<uni-data-checkbox min="1" max="2" multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>
<script>
	export default {
		data() { 
			return {
				value: [0,2],
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

### Example (Example 6)

```vue
<template>
	<view>
		<uni-data-checkbox min="1" max="2" multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>
<script>
	export default {
		data() { 
			return {
				value: [0,2],
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-data-checkbox.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=data-checkbox)
- [Local Example](examples/uni-ui/uni-data-checkbox.vue)
