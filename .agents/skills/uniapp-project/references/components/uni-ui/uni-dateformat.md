# uni-dateformat

## Instructions

组件名：uni-dateformat

代码块： uDateformat

点击下载&安装

### Syntax

- 使用 `<uni-dateformat />`（或 `<uni-dateformat></uni-dateformat>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| date | Object|String|Number | Date.now() | 要格式化的日期对象/日期字符串/时间戳 |
| threshold | Array | [0, 0] | 转化类型阈值 |
| format | String | 'yyyy/MM/dd hh:mm:ss' | 格式字符串 |
| locale | String | zh | 格式化使用的语言，目前支持zh（中文）、en（英文） |

#### Events

See official docs for full events list: `https://uniapp.dcloud.net.cn/component/uniui/uni-dateformat.html`

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-dateformat.html`

### Examples

### Example (Example 1)

```vue
<!-- 一般用法 -->
<uni-dateformat date="2020/10/20 20:20:20"></uni-dateformat>

<!-- 不显示刚刚/马上/xx分钟前 -->
<uni-dateformat date="2020/10/20 20:20:20" :threshold="[0,0]"></uni-dateformat>
```

### Example (Example 2)

```html
<!-- 一般用法 -->
<uni-dateformat date="2020/10/20 20:20:20"></uni-dateformat>

<!-- 不显示刚刚/马上/xx分钟前 -->
<uni-dateformat date="2020/10/20 20:20:20" :threshold="[0,0]"></uni-dateformat>
```

### Example (Example 3)

```vue
<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">日期格式化组件，通常用于需要展示友好的日期格式的场景。</text>
		</uni-card>
		<uni-section title="基础用法" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 7200000"></uni-dateformat>
				<uni-dateformat date="2020/12/12"></uni-dateformat>
			</view>
		</uni-section>
		<uni-section title="设置阈值" subTitle="阈值用于控制什么时候显示刚刚|马上，什么时候显示xx分钟前|xx分钟后" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 30000" :threshold="[0,3600000]"></uni-dateformat>
				<uni-dateformat :date="now - 30000" :threshold="[0,0]"></uni-dateformat>
			</view>
		</uni-section>
		<uni-section title="使用英文" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 1200000" :threshold="[60000,3600000]" locale="en"></uni-dateformat>
				<uni-dateformat :date="now - 30000" :threshold="[60000,3600000]" locale="en"></uni-dateformat>
				<uni-dateformat :date="now - 80000" :threshold="[60000,3600000]" locale="en"></uni-dateformat>
			</view>
		</uni-section>
	</view>
</template>
```

### Example (Example 4)

```vue
<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">日期格式化组件，通常用于需要展示友好的日期格式的场景。</text>
		</uni-card>
		<uni-section title="基础用法" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 7200000"></uni-dateformat>
				<uni-dateformat date="2020/12/12"></uni-dateformat>
			</view>
		</uni-section>
		<uni-section title="设置阈值" subTitle="阈值用于控制什么时候显示刚刚|马上，什么时候显示xx分钟前|xx分钟后" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 30000" :threshold="[0,3600000]"></uni-dateformat>
				<uni-dateformat :date="now - 30000" :threshold="[0,0]"></uni-dateformat>
			</view>
		</uni-section>
		<uni-section title="使用英文" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 1200000" :threshold="[60000,3600000]" locale="en"></uni-dateformat>
				<uni-dateformat :date="now - 30000" :threshold="[60000,3600000]" locale="en"></uni-dateformat>
				<uni-dateformat :date="now - 80000" :threshold="[60000,3600000]" locale="en"></uni-dateformat>
			</view>
		</uni-section>
	</view>
</template>
```

### Example (Example 5)

```vue
<script>
	export default {
		data() {
			return {
				now: Date.now()
			}
		}
	}
</script>
```

### Example (Example 6)

```vue
<style lang="scss">
	.example-body {
		display: flex;
		flex-direction: column;
		line-height: 1.5em;
	}
</style>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-dateformat.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=dateformat)
- [Local Example](examples/uni-ui/uni-dateformat.vue)
