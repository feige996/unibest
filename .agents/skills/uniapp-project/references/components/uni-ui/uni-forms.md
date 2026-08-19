# uni-forms

## Instructions

组件名：uni-forms

代码块： uForms 、 uni-forms-item 关联组件： uni-forms-item 、 uni-easyinput 、 uni-data-checkbox 、 uni-group 。

点击下载&安装

### Syntax

- 使用 `<uni-forms />`（或 `<uni-forms></uni-forms>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| required | Boolean | - | - | 是否必填，配置此参数不会显示输入框左边的必填星号，如需要，请配置 uni-forms-item 组件的的required为true |
| range | Array | - | - | 数组至少要有一个元素，且数组内的每一个元素都是唯一的。 |
| format | String | - | - | 内置校验规则，如这些规则无法满足需求，可以使用正则匹配或者自定义规则 |
| pattern | RegExp | - | - | 正则表达式，注意事项见下方说明 |
| maximum | Number | - | - | 校验最大值(大于) |
| minimum | Number | - | - | 校验最小值(小于) |
| maxLength | Number | - | - | 校验数据最大长度 |
| errorMessage | String | - | - | 校验失败提示信息语，可添加属性占位符，当前表格内属性都可用作占位符 |
| validateFunction | Function | - | - | 自定义校验规则 |

#### Events

| 事件称名 | 说明 |
| --- | --- |
| @validate | 任意表单项被校验后触发，返回表单校验信息 |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-forms.html`

### Examples

### Example (Example 1)

```vue
<template>
	<view class="">
		<uni-forms :modelValue="formData">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="年龄" name="age">
				<input type="text" v-model="formData.age" placeholder="请输入年龄" />
			</uni-forms-item>
			<uni-forms-item required name="hobby" label="兴趣爱好">
				<uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby"/>
			</uni-forms-item>
		</uni-forms>
		<button @click="submitForm">Submit</button>
	</view>
</template>
```

### Example (Example 2)

```html
<template>
	<view class="">
		<uni-forms :modelValue="formData">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="年龄" name="age">
				<input type="text" v-model="formData.age" placeholder="请输入年龄" />
			</uni-forms-item>
			<uni-forms-item required name="hobby" label="兴趣爱好">
				<uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby"/>
			</uni-forms-item>
		</uni-forms>
		<button @click="submitForm">Submit</button>
	</view>
</template>
```

### Example (Example 3)

```vue
<template>
	<view class="">
		<uni-forms :modelValue="formData" label-position="top">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item required name="hobby" label="兴趣爱好">
				<uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby"/>
			</uni-forms-item>
		</uni-forms>
	</view>
</template>
```

### Example (Example 4)

```html
<template>
	<view class="">
		<uni-forms :modelValue="formData" label-position="top">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item required name="hobby" label="兴趣爱好">
				<uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby"/>
			</uni-forms-item>
		</uni-forms>
	</view>
</template>
```

### Example (Example 5)

```vue
<!-- rules 内容详见下方完整示例 -->
<uni-forms ref="form" :rules="rules">
	...
</uni-forms>
```

### Example (Example 6)

```html
<!-- rules 内容详见下方完整示例 -->
<uni-forms ref="form" :rules="rules">
	...
</uni-forms>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-forms.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=forms)
- [Local Example](examples/uni-ui/uni-forms.vue)
