# uni-row

## Instructions

组件名 uni-row、uni-col

代码块： uRow 、 uCol

点击下载&安装

### Syntax

- 使用 `<uni-row />`（或 `<uni-row></uni-row>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 可选值 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- | --- |
| gutter | Number | - | 0 | 否 | 栅格间隔 |

#### Events

See official docs for full events list: `https://uniapp.dcloud.net.cn/component/uniui/uni-row.html`

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-row.html`

### Examples

### Example (Example 1)

```vue
<uni-row class="demo-uni-row">
	<uni-col>
		<view class="demo-uni-col dark_deep"></view>
	</uni-col>
</uni-row>

<uni-row class="demo-uni-row">
	<uni-col :span="12">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :span="12">
		<view class="demo-uni-col light"></view>
	</uni-col>
</uni-row>
```

### Example (Example 2)

```html
<uni-row class="demo-uni-row">
	<uni-col>
		<view class="demo-uni-col dark_deep"></view>
	</uni-col>
</uni-row>

<uni-row class="demo-uni-row">
	<uni-col :span="12">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :span="12">
		<view class="demo-uni-col light"></view>
	</uni-col>
</uni-row>
```

### Example (Example 3)

```vue
<uni-row class="demo-uni-row">
	<uni-col :span="8">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :span="8" :offset="6">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>

<uni-row class="demo-uni-row">
	<uni-col :span="12" :pull="6">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>

<uni-row class="demo-uni-row">
	<uni-col :span="12" :push="6">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>
```

### Example (Example 4)

```html
<uni-row class="demo-uni-row">
	<uni-col :span="8">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :span="8" :offset="6">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>

<uni-row class="demo-uni-row">
	<uni-col :span="12" :pull="6">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>

<uni-row class="demo-uni-row">
	<uni-col :span="12" :push="6">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>
```

### Example (Example 5)

```vue
<uni-row class="demo-uni-row">
	<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
		<view class="demo-uni-col light"></view>
	</uni-col>
	<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
		<view class="demo-uni-col light"></view>
	</uni-col>
</uni-row>
```

### Example (Example 6)

```html
<uni-row class="demo-uni-row">
	<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
		<view class="demo-uni-col light"></view>
	</uni-col>
	<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
		<view class="demo-uni-col light"></view>
	</uni-col>
</uni-row>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-row.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=row)
- [Local Example](examples/uni-ui/uni-row.vue)
