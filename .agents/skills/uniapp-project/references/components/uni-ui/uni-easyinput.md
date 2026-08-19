# uni-easyinput

## Instructions

组件名：uni-easyinput

代码块： uEasyinput

点击下载&安装

### Syntax

- 使用 `<uni-easyinput />`（或 `<uni-easyinput></uni-easyinput>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 可选值 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| value | String/ Number | - | - | 输入内容 |
| type | String | 见 type Options | text | 输入框的类型（默认text） |
| clearable | Boolean | - | true | 是否显示右侧清空内容的图标控件(输入框有内容且不禁用时显示)，点击可清空输入框内容 |
| autoHeight | Boolean | - | false | 是否自动增高输入区域，type为textarea时有效 |
| placeholder | String | - | - | 输入框的提示文字 |
| placeholderStyle | String | - | - | placeholder的样式(内联样式，字符串)，如"color: #ddd" |
| focus | Boolean | - | false | 是否自动获得焦点 |
| disabled | Boolean | - | false | 是否不可输入 |
| maxlength | Number | - | 140 | 最大输入长度，设置为 -1 的时候不限制最大长度 |
| confirmType | String | - | done | 设置键盘右下角按钮的文字，仅在type="text"时生效 |
| clearSize | Number | - | 24 | 清除图标的大小，单位px |
| prefixIcon | String | - | - | 输入框头部图标 |
| suffixIcon | String | - | - | 输入框尾部图标 |
| trim | Boolean/String | 见 trim Options | false | 是否自动去除空格，传入类型为 Boolean 时，自动去除前后空格 |
| inputBorder | Boolean | - | true | 是否显示input输入框的边框 |
| styles | Object | - | - | 样式自定义 |
| passwordIcon | Boolean | - | true | type=password 时，是否显示小眼睛图标 |
| adjust-position | Boolean | - | true | 弹起键盘时，是否上推页面，平台差异性与内置input组件一致 |
| primaryColor | String | - | #2979ff | 设置清除按钮focus时的颜色 |
| cursorSpacing | Number | - | 0 | 指定光标与键盘的距离，单位 px 。取 textarea/input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离。详见 textarea / input |

#### Events

| 事件称名 | 说明 | 返回值 | 兼容说明 |
| --- | --- | --- | --- |
| @input | 输入框内容发生变化时触发 | - |  |
| @clear | 点击右侧叉号图标时触发 | - | 1.1.0新增 |
| @focus | 输入框获得焦点时触发 | - |  |
| @blur | 输入框失去焦点时触发 | - |  |
| @confirm | 点击完成按钮时触发 | - |  |
| @iconClick | 点击图标时触发 | prefix/suffix |  |
| @change | 仅在输入框失去焦点或用户按下回车时触发 |  | 1.1.0新增 |
| @keyboardheightchange | 键盘高度发生变化时触发 |  | 1.1.6新增 |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-easyinput.html`

### Examples

### Example (Example 1)

```vue
<uni-easyinput v-model="value" placeholder="请输入内容"></uni-easyinput>
```

### Example (Example 2)

```html
<uni-easyinput v-model="value" placeholder="请输入内容"></uni-easyinput>
```

### Example (Example 3)

```vue
<!-- 输入框头部图标 -->
<uni-easyinput prefixIcon="search" v-model="value" placeholder="请输入内容" @iconClick="onClick"></uni-easyinput>
<!-- 展示输入框尾部图标 -->
<uni-easyinput suffixIcon="search"  v-model="value" placeholder="请输入内容" @iconClick="onClick"></uni-easyinput>
```

### Example (Example 4)

```html
<!-- 输入框头部图标 -->
<uni-easyinput prefixIcon="search" v-model="value" placeholder="请输入内容" @iconClick="onClick"></uni-easyinput>
<!-- 展示输入框尾部图标 -->
<uni-easyinput suffixIcon="search"  v-model="value" placeholder="请输入内容" @iconClick="onClick"></uni-easyinput>
```

### Example (Example 5)

```vue
<uni-easyinput>
	<template #right>
		<view>密码</view>
	</template>
</uni-easyinput>
```

### Example (Example 6)

```html
<uni-easyinput>
	<template #right>
		<view>密码</view>
	</template>
</uni-easyinput>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-easyinput.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=easyinput)
- [Local Example](examples/uni-ui/uni-easyinput.vue)
