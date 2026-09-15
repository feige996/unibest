# editor

## Instructions

富文本编辑器，可以对图片、文字格式进行编辑和混排。

在web开发时，可以使用 contenteditable 来实现内容编辑。但这是一个dom API，在非H5平台无法使用。于是微信小程序和uni-app的App-vue提供了 editor 组件来实现这个功能，并且在uni-app的H5平台也提供了兼容。从技术本质来讲，这个组件仍然运行在视图层webview中，利用的也是浏览器的 contenteditable 功能。

编辑器导出内容支持带标签的 html 和纯文本的 text ，编辑器内部采用 delta 格式进行存储。

### Syntax

- 使用 `<editor />`（或 `<editor></editor>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| read-only | boolean | false | 否 | 设置编辑器为只读 |
| placeholder | string |  | 否 | 提示信息 |
| show-img-size | boolean | false | 否 | 点击图片时显示图片大小控件 |
| show-img-toolbar | boolean | false | 否 | 点击图片时显示工具栏控件 |
| show-img-resize | boolean | false | 否 | 点击图片时显示修改尺寸控件 |

#### Events

| 事件名 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| @ready | eventhandle |  | 否 | 编辑器初始化完成时触发 |
| @focus | eventhandle |  | 否 | 编辑器聚焦时触发，event.detail = {html, text, delta} |
| @blur | eventhandle |  | 否 | 编辑器失去焦点时触发，detail = {html, text, delta} |
| @input | eventhandle |  | 否 | 编辑器内容改变时触发，detail = {html, text, delta} |
| @statuschange | eventhandle |  | 否 | 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式 |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/editor.html`

### Examples

### Example (Example 1)

```vue
<head>
  <script src="/static/quill-1.3.7.min.js"></script>
  <script src="/static/image-resize-3.0.1.min.js"></script>
</head>
```

### Example (Example 2)

```html
<head>
  <script src="/static/quill-1.3.7.min.js"></script>
  <script src="/static/image-resize-3.0.1.min.js"></script>
</head>
```

### Example (Example 3)

```vue
// #ifdef H5
import quill from "quill";
window.Quill = quill;
// #endif
```

### Example (Example 4)

```javascript
// #ifdef H5
import quill from "quill";
window.Quill = quill;
// #endif
```

### Example (Example 5)

```vue
<template>
	<view class="container">
		<view class="page-body">
			<view class='wrapper'>
				<view class='toolbar' @tap="format" style="height: 120px;overflow-y: auto;">
					<view :class="formats.bold ? 'ql-active' : ''" class="iconfont icon-zitijiacu" data-name="bold">
					</view>
					<view :class="formats.italic ? 'ql-active' : ''" class="iconfont icon-zitixieti" data-name="italic">
					</view>
					<view :class="formats.underline ? 'ql-active' : ''" class="iconfont icon-zitixiahuaxian"
						data-name="underline"></view>
					<view :class="formats.strike ? 'ql-active' : ''" class="iconfont icon-zitishanchuxian"
						data-name="strike"></view>
					<!-- #ifndef MP-BAIDU -->
					<view :class="formats.align === 'left' ? 'ql-active' : ''" class="iconfont icon-zuoduiqi"
						data-name="align" data-value="left"></view>
					<!-- #endif -->
					<view :class="formats.align === 'center' ? 'ql-active' : ''" class="iconfont icon-juzhongduiqi"
						data-name="align" data-value="center"></view>
					<view :class="formats.align === 'right' ? 'ql-active' : ''" class="iconfont icon-youduiqi"
						data-name="align" data-value="right"></view>
					<view :class="formats.align === 'justify' ? 'ql-active' : ''" class="iconfont icon-zuoyouduiqi"
						data-name="align" data-value="justify"></view>
					<!-- #ifndef MP-BAIDU -->
					<view :class="formats.lineHeight ? 'ql-active' : ''" class="iconfont icon-line-height"
						data-name="lineHeight" data-value="2"></view>
					<view :class="formats.letterSpacing ? 'ql-active' : ''" class="iconfont icon-Character-Spacing"
						data-name="letterSpacing" data-value="2em"></view>
					<view :class="formats.marginTop ? 'ql-active' : ''" class="iconfont icon-722bianjiqi_duanqianju"
						data-name="marginTop" data-value="20px"></view>
					<view :class="formats.marginBottom ? 'ql-active' : ''" class="iconfont icon-723bianjiqi_duanhouju"
						data-name="marginBottom" data-value="20px"></view>
					<!-- #endif -->

					<view class="iconfont icon-clearedformat" @tap="removeFormat"></view>

					<!-- #ifndef MP-BAIDU -->
					<view :class="formats.fontFamily ? 'ql-active' : ''" class="iconfont icon-font"
						data-name="fontFamily" data-value="Pacifico"></view>
					<view :class="formats.fontSize === '24px' ? 'ql-active' : ''" class="iconfont icon-fontsize"
						data-name="fontSize" data-value="24px"></view>
					<!-- #endif -->
					<view :class="formats.color === '#0000ff' ? 'ql-active' : ''" class="iconfont icon-text_color"
						data-name="color" data-value="#0000ff"></view>
					<view :class="formats.backgroundColor === '#00ff00' ? 'ql-active' : ''"
						class="iconfont icon-fontbgcolor" data-name="backgroundColor" data-value="#00ff00"></view>
					<view class="iconfont icon-date" @tap="insertDate"></view>
					<view class="iconfont icon--checklist" data-name="list" data-value="check"></view>
					<view :class="formats.list === 'ordered' ? 'ql-active' : ''" class="iconfont icon-youxupailie"
						data-name="list" data-value="ordered"></view>
					<view :class="formats.list === 'bullet' ? 'ql-active' : ''" class="iconfont icon-wuxupailie"
						data-name="list" data-value="bullet"></view>

					<view class="iconfont icon-undo" @tap="undo"></view>
					<view class="iconfont icon-redo" @tap="redo"></view>

					<view class="iconfont icon-outdent" data-name="indent" data-value="-1"></view>
					<view class="iconfont icon-indent" data-name="indent" data-value="+1"></view>
					<view class="iconfont icon-fengexian" @tap="insertDivider"></view>
					<view class="iconfont icon-charutupian" @tap="insertImage"></view>
					<view :class="formats.header === 1 ? 'ql-active' : ''" class="iconfont icon-format-header-1"
						data-name="header" :data-value="1"></view>
					<view :class="formats.script === 'sub' ? 'ql-active' : ''" class="iconfont icon-zitixiabiao"
						data-name="script" data-value="sub"></view>
					<view :class="formats.script === 'super' ? 'ql-active' : ''" class="iconfont icon-zitishangbiao"
						data-name="script" data-value="super"></view>

					<view class="iconfont icon-shanchu" @tap="clear"></view>

					<view :class="formats.direction === 'rtl' ? 'ql-active' : ''" class="iconfont icon-direction-rtl"
						data-name="direction" data-value="rtl"></view>
				</view>

				<view class="editor-wrapper">
					<editor id="editor" class="ql-container" placeholder="开始输入..." show-img-size show-img-toolbar
						show-img-resize @statuschange="onStatusChange" :read-only="readOnly" @ready="onEditorReady">
					</editor>
				</view>
			</view>
		</view>
	</view>
</template>
```

### Example (Example 6)

```vue
<template>
	<view class="container">
		<view class="page-body">
			<view class='wrapper'>
				<view class='toolbar' @tap="format" style="height: 120px;overflow-y: auto;">
					<view :class="formats.bold ? 'ql-active' : ''" class="iconfont icon-zitijiacu" data-name="bold">
					</view>
					<view :class="formats.italic ? 'ql-active' : ''" class="iconfont icon-zitixieti" data-name="italic">
					</view>
					<view :class="formats.underline ? 'ql-active' : ''" class="iconfont icon-zitixiahuaxian"
						data-name="underline"></view>
					<view :class="formats.strike ? 'ql-active' : ''" class="iconfont icon-zitishanchuxian"
						data-name="strike"></view>
					<!-- #ifndef MP-BAIDU -->
					<view :class="formats.align === 'left' ? 'ql-active' : ''" class="iconfont icon-zuoduiqi"
						data-name="align" data-value="left"></view>
					<!-- #endif -->
					<view :class="formats.align === 'center' ? 'ql-active' : ''" class="iconfont icon-juzhongduiqi"
						data-name="align" data-value="center"></view>
					<view :class="formats.align === 'right' ? 'ql-active' : ''" class="iconfont icon-youduiqi"
						data-name="align" data-value="right"></view>
					<view :class="formats.align === 'justify' ? 'ql-active' : ''" class="iconfont icon-zuoyouduiqi"
						data-name="align" data-value="justify"></view>
					<!-- #ifndef MP-BAIDU -->
					<view :class="formats.lineHeight ? 'ql-active' : ''" class="iconfont icon-line-height"
						data-name="lineHeight" data-value="2"></view>
					<view :class="formats.letterSpacing ? 'ql-active' : ''" class="iconfont icon-Character-Spacing"
						data-name="letterSpacing" data-value="2em"></view>
					<view :class="formats.marginTop ? 'ql-active' : ''" class="iconfont icon-722bianjiqi_duanqianju"
						data-name="marginTop" data-value="20px"></view>
					<view :class="formats.marginBottom ? 'ql-active' : ''" class="iconfont icon-723bianjiqi_duanhouju"
						data-name="marginBottom" data-value="20px"></view>
					<!-- #endif -->

					<view class="iconfont icon-clearedformat" @tap="removeFormat"></view>

					<!-- #ifndef MP-BAIDU -->
					<view :class="formats.fontFamily ? 'ql-active' : ''" class="iconfont icon-font"
						data-name="fontFamily" data-value="Pacifico"></view>
					<view :class="formats.fontSize === '24px' ? 'ql-active' : ''" class="iconfont icon-fontsize"
						data-name="fontSize" data-value="24px"></view>
					<!-- #endif -->
					<view :class="formats.color === '#0000ff' ? 'ql-active' : ''" class="iconfont icon-text_color"
						data-name="color" data-value="#0000ff"></view>
					<view :class="formats.backgroundColor === '#00ff00' ? 'ql-active' : ''"
						class="iconfont icon-fontbgcolor" data-name="backgroundColor" data-value="#00ff00"></view>
					<view class="iconfont icon-date" @tap="insertDate"></view>
					<view class="iconfont icon--checklist" data-name="list" data-value="check"></view>
					<view :class="formats.list === 'ordered' ? 'ql-active' : ''" class="iconfont icon-youxupailie"
						data-name="list" data-value="ordered"></view>
					<view :class="formats.list === 'bullet' ? 'ql-active' : ''" class="iconfont icon-wuxupailie"
						data-name="list" data-value="bullet"></view>

					<view class="iconfont icon-undo" @tap="undo"></view>
					<view class="iconfont icon-redo" @tap="redo"></view>

					<view class="iconfont icon-outdent" data-name="indent" data-value="-1"></view>
					<view class="iconfont icon-indent" data-name="indent" data-value="+1"></view>
					<view class="iconfont icon-fengexian" @tap="insertDivider"></view>
					<view class="iconfont icon-charutupian" @tap="insertImage"></view>
					<view :class="formats.header === 1 ? 'ql-active' : ''" class="iconfont icon-format-header-1"
						data-name="header" :data-value="1"></view>
					<view :class="formats.script === 'sub' ? 'ql-active' : ''" class="iconfont icon-zitixiabiao"
						data-name="script" data-value="sub"></view>
					<view :class="formats.script === 'super' ? 'ql-active' : ''" class="iconfont icon-zitishangbiao"
						data-name="script" data-value="super"></view>

					<view class="iconfont icon-shanchu" @tap="clear"></view>

					<view :class="formats.direction === 'rtl' ? 'ql-active' : ''" class="iconfont icon-direction-rtl"
						data-name="direction" data-value="rtl"></view>
				</view>

				<view class="editor-wrapper">
					<editor id="editor" class="ql-container" placeholder="开始输入..." show-img-size show-img-toolbar
						show-img-resize @statuschange="onStatusChange" :read-only="readOnly" @ready="onEditorReady">
					</editor>
				</view>
			</view>
		</view>
	</view>
</template>
```

Reference: [Official Documentation](https://uniapp.dcloud.net.cn/component/editor.html)
