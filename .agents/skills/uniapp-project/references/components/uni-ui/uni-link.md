# uni-link

## Instructions

组件名：uni-link

代码块： uLink

点击下载&安装

### Syntax

- 使用 `<uni-link />`（或 `<uni-link></uni-link>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| href | String | - | 链接地址 |
| text | String | - | 显示文字 |
| download | String | - | H5平台下载文件名 |
| showUnderLine | Boolean | true | 是否显示下划线 |
| copyTips | String | 已自动复制网址，请在手机浏览器里粘贴该网址 | 在小程序端复制链接时的提示语 |
| color | String | #999999 | 链接文字颜色 |
| fontSize | String | 14 | 链接文字大小，单位px |

#### Events

See official docs for full events list: `https://uniapp.dcloud.net.cn/component/uniui/uni-link.html`

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-link.html`

### Examples

### Example (Example 1)

```vue
<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
```

### Example (Example 2)

```html
<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
```

### Example (Example 3)

```vue
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页。</text>
		</uni-card>
		<uni-section title="基本示例" subTitle="打开外部连接" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
		</uni-section>
		<uni-section title="自定义颜色" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" color="#007BFF"></uni-link>
		</uni-section>
		<uni-section title="自定义下划线" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false">
			</uni-link>
		</uni-section>
		<uni-section title="自定义字体大小" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false"
				font-size="20"></uni-link>
		</uni-section>
		<uni-section title="自定义插槽" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false"
				color="red">点击跳转</uni-link>
		</uni-section>
	</view>
</template>
```

### Example (Example 4)

```html
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页。</text>
		</uni-card>
		<uni-section title="基本示例" subTitle="打开外部连接" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
		</uni-section>
		<uni-section title="自定义颜色" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" color="#007BFF"></uni-link>
		</uni-section>
		<uni-section title="自定义下划线" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false">
			</uni-link>
		</uni-section>
		<uni-section title="自定义字体大小" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false"
				font-size="20"></uni-link>
		</uni-section>
		<uni-section title="自定义插槽" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false"
				color="red">点击跳转</uni-link>
		</uni-section>
	</view>
</template>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-link.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=link)
- [Local Example](examples/uni-ui/uni-link.vue)
