# input

## Instructions

单行输入框。

html规范中input不仅是输入框，还有radio、checkbox、时间、日期、文件选择功能。在uni-app规范中，input仅仅是输入框。其他功能uni-app有单独的组件或API： radio组件 、 checkbox组件 、 时间选择 、 日期选择 、 图片选择 、 视频选择 、 多媒体文件选择(含图片视频) 、 通用文件选择 。

注意事项

### Syntax

- 使用 `<input />`（或 `<input></input>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| value | String |  | 输入框的初始内容 |  |
| type | String | text | input 的类型 有效值 |  |
| text-content-type | String |  | 文本区域的语义，根据类型自动填充 有效值 | 仅 App-nvue-iOS 支持 |
| password | Boolean | false | 是否是密码类型 | H5和App写此属性时，type失效 |
| placeholder | String |  | 输入框为空时占位符 |  |
| placeholder-style | String |  | 指定 placeholder 的样式 |  |
| placeholder-class | String | "input-placeholder" | 指定 placeholder 的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/ | 抖音小程序、飞书小程序、快手小程序不支持 |
| disabled | Boolean | false | 是否禁用 |  |
| maxlength | Number | 140 | 最大输入长度，设置为 -1 的时候不限制最大长度 |  |
| cursor-spacing | Number | 0 | 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 | App、微信小程序、百度小程序、QQ小程序、京东小程序 |
| focus | Boolean | false | 获取焦点。 | H5、App需要点击按钮获取焦点的，必须使用@touchend.prevent="onTap"阻止键盘收起默认事件才能获取焦点 关于软键盘弹出的逻辑说明 ，小程序、nvue需使用组件的 focus()、blur() 方法控制焦点 |
| confirm-type | String | done | 设置键盘右下角按钮的文字，仅在 type="text" 时生效。 有效值 | 微信小程序、App、H5、快手小程序、京东小程序、小红书小程序 |
| confirm-hold | Boolean | false | 点击键盘右下角按钮时是否保持键盘不收起 | App(3.3.7+)、H5 (3.3.7+)、微信小程序、支付宝小程序、百度小程序、QQ小程序、京东小程序、小红书小程序 |
| cursor | Number |  | 指定focus时的光标位置 |  |
| cursor-color | String |  | 光标颜色 | 微信小程序 3.1.0+、H5(4.0+)、App-Vue(4.0+) |
| selection-start | Number | -1 | 光标起始位置，自动聚集时有效，需与selection-end搭配使用 |  |
| selection-end | Number | -1 | 光标结束位置，自动聚集时有效，需与selection-start搭配使用 |  |
| adjust-position | Boolean | true | 键盘弹起时，是否自动上推页面 | App-Android（vue 页面 softinputMode 为 adjustResize 时无效，使用 x5 内核时无效）、微信小程序、百度小程序、QQ小程序、京东小程序、小红书小程序 |
| auto-blur | Boolean | false | 键盘收起时，是否自动失去焦点 | App-Vue 3.0.0+ |
| ignoreCompositionEvent | Boolean | true | 是否忽略组件内对文本合成系统事件的处理。为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件 | App-vue (3.4.4+)、H5 (3.4.4+)、App-nvue不支持 |
| always-embed | Boolean | false | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) | 微信小程序 2.10.4+ |
| hold-keyboard | Boolean | false | focus时，点击页面的时候不收起键盘 | 微信小程序 2.8.2+ |
| safe-password-cert-path | String |  | 安全键盘加密公钥的路径，只支持包内路径 | 微信小程序 2.18.0+ |
| safe-password-length | Number |  | 安全键盘输入密码长度 | 微信小程序 2.18.0+ |
| safe-password-time-stamp | Number |  | 安全键盘加密时间戳 | 微信小程序 2.18.0+ |
| safe-password-nonce | String |  | 安全键盘加密盐值 | 微信小程序 2.18.0+ |
| safe-password-salt | String |  | 安全键盘计算 hash 盐值，若指定custom-hash 则无效 | 微信小程序 2.18.0+ |
| safe-password-custom-hash | String |  | 安全键盘计算 hash 的算法表达式，如 md5(sha1('foo' + sha256(sm3(password + 'bar')))) | 微信小程序 2.18.0+ |
| random-number | Boolean | false | 当 type 为 number, digit, idcard 数字键盘是否随机排列 | 支付宝小程序 1.9.0+ |
| controlled | Boolean | false | 是否为受控组件。为 true 时，value 内容会完全受 setData 控制 | 支付宝小程序 1.9.0+ |
| always-system | Boolean | false | 是否强制使用系统键盘和 Web-view 创建的 input 元素。为 true 时，confirm-type、confirm-hold 可能失效 | 支付宝小程序 2.7.3+ |
| inputmode | String | "text" | 是一个枚举属性，它提供了用户在编辑元素或其内容时可能输入的数据类型的提示。 有效值 | H5（3.6.16+）、App-vue（3.6.16+） |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| @input | EventHandle |  | 当键盘输入时，触发input事件，event.detail = {value} | 差异见下方 Tips |
| @focus | EventHandle |  | 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度 | 仅微信小程序、京东小程序、App（2.2.3+） 、QQ小程序、快手小程序支持 height、小红书小程序 |
| @blur | EventHandle |  | 输入框失去焦点时触发，event.detail = {value: value} |  |
| @confirm | EventHandle |  | 点击完成按钮时触发，event.detail = {value: value} |  |
| @keyboardheightchange | eventhandle |  | 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration} | 微信小程序基础库2.7.0+、App 3.1.0+ |

#### Platform Compatibility

| 值 | 说明 | 平台差异说明 |
| --- | --- | --- |
| text | 文本输入键盘 |  |
| number | 数字输入键盘 | 均支持，App平台、H5平台 3.1.22 以下版本 vue 页面在 iOS 平台显示的键盘包含负数和小数。 |
| idcard | 身份证输入键盘 | 微信、支付宝、百度、QQ小程序、快手小程序、京东小程序 |
| digit | 带小数点的数字键盘 | 均支持，App平台、H5平台 vue 页面在 iOS 平台显示的键盘包含负数（原生键盘不支持负号）。 |
| tel | 电话输入键盘 | 小红书小程序不支持 |
| safe-password | 密码安全输入键盘 | 微信小程序 |
| nickname | 昵称输入键盘 | 微信小程序 |
| none | 无虚拟键盘。在应用程序或者站点需要实现自己的键盘输入控件时很有用。 | H5 (5.0+)、App (5.0+) |
| decimal | 小数输入键盘，包含数字和分隔符（通常是“ . ”或者“ , ”），设备可能也可能不显示减号键 | H5 (5.0+)、App (5.0+) |
| numeric | 数字输入键盘，所需要的就是 0 到 9 的数字，设备可能也可能不显示减号键。 | H5 (5.0+)、App (5.0+) |
| search | 为搜索输入优化的虚拟键盘，比如，返回键可能被重新标记为“搜索”，也可能还有其他的优化。 | H5 (5.0+)、App (5.0+) |
| email | 为邮件地址输入优化的虚拟键盘，通常包含""符号和其他优化。表单里面的邮件地址输入应该使用 。 | H5 (5.0+)、App (5.0+) |
| url | 为网址输入优化的虚拟键盘，比如，“/”键会更加明显、历史记录访问等。表单里面的网址输入通常应该使用 。 | H5 (5.0+)、App (5.0+) |

### Examples

### Example (Example 1)

```vue
"app-plus": {
	"softinputNavBar": "none"
}
```

### Example (Example 2)

```javascript
"app-plus": {
	"softinputNavBar": "none"
}
```

### Example (Example 3)

```vue
this.$scope.$getAppWebview().setStyle({
	softinputNavBar: 'none'
})
//this.$scope.$getAppWebview()相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
```

### Example (Example 4)

```javascript
this.$scope.$getAppWebview().setStyle({
	softinputNavBar: 'none'
})
//this.$scope.$getAppWebview()相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
```

### Example (Example 5)

```vue
"app-plus": {
	"softinputMode": "adjustResize"
}
```

### Example (Example 6)

```javascript
"app-plus": {
	"softinputMode": "adjustResize"
}
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/input.html)
