# textarea

## Instructions

多行输入框。

属性说明

confirm-type 有效值

### Syntax

- 使用 `<textarea />`（或 `<textarea></textarea>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| value | String |  | 输入框的内容 |  |
| placeholder | String |  | 输入框为空时占位符 |  |
| placeholder-style | String |  | 指定 placeholder 的样式 |  |
| placeholder-class | String | textarea-placeholder | 指定 placeholder 的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/ | 抖音小程序、飞书小程序、快手小程序不支持 |
| disabled | Boolean | false | 是否禁用 |  |
| maxlength | Number | 140 | 最大输入长度，设置为 -1 的时候不限制最大长度 |  |
| focus | Boolean | false | 获取焦点 | 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点 |
| auto-focus | Boolean | false | 自动聚焦，拉起键盘 | 京东小程序、小红书小程序 |
| auto-height | Boolean | false | 是否自动增高，设置auto-height时，style.height不生效 |  |
| fixed | Boolean | false | 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true | 微信小程序、百度小程序、抖音小程序、飞书小程序、QQ小程序、快手小程序、京东小程序 |
| cursor-spacing | Number | 0 | 指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 | App、微信小程序、百度小程序、抖音小程序、飞书小程序、QQ小程序、京东小程序 |
| cursor | Number |  | 指定focus时的光标位置 | 微信小程序、App、H5、百度小程序、抖音小程序、飞书小程序、QQ小程序、京东小程序、小红书小程序 |
| cursor-color | String |  | 光标颜色 | H5(4.0+)、App-Vue(4.0+) |
| confirm-type | String | done | 设置键盘右下角按钮的文字 | 微信小程序(2.13.0+)、支付宝小程序(2.7.23+)、App-vue和H5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+) |
| confirm-hold | Boolean | false | 点击键盘右下角按钮时是否保持键盘不收起 | App(3.3.7+)、H5 (3.3.7+)、微信小程序 (基础库 2.16.0+)、百度小程序 (基础库 3.130.1+)、快手小程序 |
| show-confirm-bar | Boolean | true | 是否显示键盘上方带有”完成“按钮那一栏 | App-iOS、微信小程序、百度小程序、QQ小程序、京东小程序 |
| selection-start | Number | -1 | 光标起始位置，自动聚焦时有效，需与selection-end搭配使用 | 微信小程序、App、H5、百度小程序、抖音小程序、飞书小程序、QQ小程序、京东小程序、小红书小程序 |
| selection-end | Number | -1 | 光标结束位置，自动聚焦时有效，需与selection-start搭配使用 | 微信小程序、App、H5、百度小程序、抖音小程序、飞书小程序、QQ小程序、京东小程序、小红书小程序 |
| adjust-position | Boolean | true | 键盘弹起时，是否自动上推页面 | App-Android（softinputMode 为 adjustResize 时无效）、微信小程序、百度小程序、QQ小程序、京东小程序 |
| disable-default-padding | boolean | false | 是否去掉 iOS 下的默认内边距 | 微信小程序2.10.0、飞书小程序 3.46 |
| hold-keyboard | boolean | false | focus时，点击页面的时候不收起键盘 | 微信小程序2.8.2 |
| auto-blur | boolean | false | 键盘收起时，是否自动失去焦点 | App-vue 3.0.0+ ，App-nvue不支持 |
| ignoreCompositionEvent | boolean | true | 是否忽略组件内对文本合成系统事件的处理。为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件 | App-vue (3.4.4+)、H5 (3.4.4+)、App-nvue不支持 |
| inputmode | String | "text" | 是一个枚举属性，它提供了用户在编辑元素或其内容时可能输入的数据类型的提示。 有效值 | H5（3.7.0+）、App-vue（3.7.0+） |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| @focus | EventHandle |  | 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度 | 仅微信小程序、京东小程序、App（HBuilderX 2.0+ nvue uni-app模式 ） 、QQ小程序支持 height |
| @blur | EventHandle |  | 输入框失去焦点时触发，event.detail = {value, cursor} | 快手小程序不支持 cursor |
| @linechange | EventHandle |  | 输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0} | 飞书小程序、快手小程序不支持 |
| @input | EventHandle |  | 当键盘输入时，触发 input 事件，event.detail = {value, cursor}， @input 处理函数的返回值并不会反映到 textarea 上 | 快手小程序不支持 |
| @confirm | EventHandle |  | 点击完成时， 触发 confirm 事件，event.detail = {value: value} | 微信小程序、百度小程序、QQ小程序、京东小程序 |
| @keyboardheightchange | Eventhandle |  | 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration} | 微信小程序基础库2.7.0+、App 3.1.0+ |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/textarea.html`

### Examples

### Example (Example 1)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-title uni-common-pl">输入区域高度自适应，不会出现滚动条</view>
		<view class="uni-textarea">
			<textarea @blur="bindTextAreaBlur" auto-height />
			</view>
			<view class="uni-title uni-common-pl">占位符字体是红色的textarea</view>
			<view class="uni-textarea">
				<textarea placeholder-style="color:#F76260" placeholder="占位符字体是红色的"/>
			</view>
		</view>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        bindTextAreaBlur: function (e) {
            console.log(e.detail.value)
        }
    }
}
</script>
```

### Example (Example 2)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-title uni-common-pl">输入区域高度自适应，不会出现滚动条</view>
		<view class="uni-textarea">
			<textarea @blur="bindTextAreaBlur" auto-height />
			</view>
			<view class="uni-title uni-common-pl">占位符字体是红色的textarea</view>
			<view class="uni-textarea">
				<textarea placeholder-style="color:#F76260" placeholder="占位符字体是红色的"/>
			</view>
		</view>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        bindTextAreaBlur: function (e) {
            console.log(e.detail.value)
        }
    }
}
</script>
```

### Example (Example 3)

```vue
<template>
    <view class="content">
        <textarea class="textarea" v-model="txt"></textarea>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                "txt":"hello world！\n textarea多行输入框"
            }
        }
    }
</script>
```

### Example (Example 4)

```html
<template>
    <view class="content">
        <textarea class="textarea" v-model="txt"></textarea>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                "txt":"hello world！\n textarea多行输入框"
            }
        }
    }
</script>
```

### Example (Example 5)

```vue
<template>
	<view class="content">
		<textarea class="textarea" v-model="txt"></textarea>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				txt:"txt"
			}
		},
		watch: {
			txt(txt) {
				if( txt.indexOf('\n') != -1 ){ //敲了回车键了
				   uni.hideKeyboard() //收起软键盘
				}
			}
		},
		methods: {
		}
	}
</script>

<style>
.textarea{
	border: solid 1px red;
}
</style>
```

### Example (Example 6)

```html
<template>
	<view class="content">
		<textarea class="textarea" v-model="txt"></textarea>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				txt:"txt"
			}
		},
		watch: {
			txt(txt) {
				if( txt.indexOf('\n') != -1 ){ //敲了回车键了
				   uni.hideKeyboard() //收起软键盘
				}
			}
		},
		methods: {
		}
	}
</script>

<style>
.textarea{
	border: solid 1px red;
}
</style>
```

Reference: [Official Documentation](https://uniapp.dcloud.net.cn/component/textarea.html)
