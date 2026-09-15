# uni-combox

## Instructions

组件名：uni-combox

代码块： uCombox

点击下载&安装

### Syntax

- 使用 `<uni-combox />`（或 `<uni-combox></uni-combox>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| label | String | - | 标签文字 |
| value | String | - | combox的值 |
| labelWidth | String | auto | 标签宽度，有单位字符串，如:'100px' |
| placeholder | String | - | 输入框占位符 |
| candidates | Array/String | [] | 候选字段 |
| emptyTips | String | 无匹配项 | 无匹配项时的提示语 |

#### Events

| 事件称名 | 说明 | 返回值 |
| --- | --- | --- |
| @input | combox输入事件 | 返回combox值 |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-combox.html`

### Examples

### Example (Example 1)

```vue
<uni-combox label="所在城市" :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
```

### Example (Example 2)

```html
<uni-combox label="所在城市" :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
```

### Example (Example 3)

```vue
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">组合框一般用于可以选择也可以输入的表单项。</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<view class="example-body">
				<uni-combox :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
				<view class="result-box">
					<text>所选城市为：{{city}}</text>
				</view>
			</view>
		</uni-section>

		<uni-section title="无边框" subTitle="使用 border = false 取消边框" type="line">
			<view class="example-body">
				<uni-combox :border="false" :candidates="candidates" placeholder="请选择所在城市"></uni-combox>
			</view>
		</uni-section>

		<uni-section title="设置无匹配项时的提示语" subTitle="使用 emptyTips 属性设置无匹配项时的提示语" type="line">
			<view class="example-body">
				<uni-combox emptyTips="这里啥都没有" placeholder="请选择所在城市"></uni-combox>
			</view>
		</uni-section>
	</view>
</template>
```

### Example (Example 4)

```vue
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">组合框一般用于可以选择也可以输入的表单项。</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<view class="example-body">
				<uni-combox :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
				<view class="result-box">
					<text>所选城市为：{{city}}</text>
				</view>
			</view>
		</uni-section>

		<uni-section title="无边框" subTitle="使用 border = false 取消边框" type="line">
			<view class="example-body">
				<uni-combox :border="false" :candidates="candidates" placeholder="请选择所在城市"></uni-combox>
			</view>
		</uni-section>

		<uni-section title="设置无匹配项时的提示语" subTitle="使用 emptyTips 属性设置无匹配项时的提示语" type="line">
			<view class="example-body">
				<uni-combox emptyTips="这里啥都没有" placeholder="请选择所在城市"></uni-combox>
			</view>
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
				candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
				city: ''
			}
		}
	}
</script>
```

### Example (Example 6)

```vue
<style lang="scss">
	.example-body {
		padding: 12px;
		background-color: #FFFFFF;
	}

	.result-box {
		text-align: center;
		padding: 20px 0px;
		font-size: 16px;
	}
</style>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-combox.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=combox)
- [Local Example](examples/uni-ui/uni-combox.vue)
