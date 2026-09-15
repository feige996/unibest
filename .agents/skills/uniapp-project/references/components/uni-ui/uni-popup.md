# uni-popup

## Instructions

组件名：uni-popup

代码块： uPopup 关联组件： uni-popup-dialog , uni-popup-message , uni-popup-share , uni-transition

点击下载&安装

### Syntax

- 使用 `<uni-popup />`（或 `<uni-popup></uni-popup>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| animation | Boolean | true | 是否开启动画 |
| type | String | 'center' | 弹出方式 |
| mask-click [即将废弃] | Boolean | true | 蒙版点击是否关闭弹窗 |
| is-mask-click [1.7.4新增] | Boolean | true | 蒙版点击是否关闭弹窗 |
| mask-background-color [1.7.4新增] | rgba | rgba(0,0,0,0.4) | 蒙版颜色，建议使用 rgba 颜色值 |
| background-color | String | 'none' | 主窗口背景色 |
| borderRadius | String | - | 设置圆角(左上、右上、右下和左下) 示例:"10px 10px 10px 10px" |
| safe-area | Boolean | true | 是否适配底部安全区 |

#### Events

| 事件称名 | 说明 | 返回值 |
| --- | --- | --- |
| change | 组件状态发生变化触发 | e={show: true｜false,type:当前模式} |
| maskClick | 点击遮罩层触发 | - |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html`

### Examples

### Example (Example 1)

```vue
<template>
	<view>
		<button @click="open">打开弹窗</button>
		<uni-popup ref="popup" type="bottom" border-radius="10px 10px 0 0">底部弹出 Popup 自定义圆角</uni-popup>
	</view>
</template>
<script>
export default {
   methods:{
      open(){
        // 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
        this.$refs.popup.open('top')
      }
   }
}
</script>
```

### Example (Example 2)

```html
<template>
	<view>
		<button @click="open">打开弹窗</button>
		<uni-popup ref="popup" type="bottom" border-radius="10px 10px 0 0">底部弹出 Popup 自定义圆角</uni-popup>
	</view>
</template>
<script>
export default {
   methods:{
      open(){
        // 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
        this.$refs.popup.open('top')
      }
   }
}
</script>
```

### Example (Example 3)

```vue
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="bottom" background-color="#fff">底部弹出 Popup</uni-popup>
```

### Example (Example 4)

```html
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="bottom" background-color="#fff">底部弹出 Popup</uni-popup>
```

### Example (Example 5)

```vue
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="center" :animation="false">中间弹出 Popup</uni-popup>
```

### Example (Example 6)

```html
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="center" :animation="false">中间弹出 Popup</uni-popup>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=popup)
- [Local Example](examples/uni-ui/uni-popup.vue)
