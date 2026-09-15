# rich-text

## Instructions

富文本。

支持默认事件，包括：click、touchstart、touchmove、touchcancel、touchend、longpress。

属性说明

### Syntax

- 使用 `<rich-text />`（或 `<rich-text></rich-text>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台兼容 |
| --- | --- | --- | --- | --- |
| nodes | Array / String | [] | 节点列表 / HTML String |  |
| space | string |  | 显示连续空格 | App、H5、微信基础库2.4.1+ 详见 、QQ小程序、抖音小程序、快手小程序 详见 |
| selectable | Boolean | true | 富文本是否可以长按选中，可用于复制，粘贴等场景 | 百度小程序（仅真机支持，基础库 3.150.1 以下版本默认为 false） |
| image-menu-prevent | Boolean | false | 阻止长按图片时弹起默认菜单（将该属性设置为image-menu-prevent或image-menu-prevent="true"），只在初始化时有效，不能动态变更；若不想阻止弹起默认菜单，则不需要设置此属性 | 百度小程序 |
| preview | Boolean |  | 富文本中的图片是否可点击预览。在不设置的情况下，若 rich-text 未监听点击事件，则默认开启。未显示设置 preview 时会进行点击默认预览判断，建议显示设置 preview | 百度小程序 |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 平台兼容 |
| --- | --- | --- | --- | --- |
| @itemclick | EventHandle |  | 拦截点击事件（只支持 a 、 img 标签），返回当前node信息 event.detail={node} | H5 (3.2.13+)、App-Vue (3.2.13+) |

#### Platform Compatibility

See official docs for platform support table: `https://doc.dcloud.net.cn/uni-app-x/component/rich-text.html`

### Examples

### Example (Example 1)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view class="content">
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-title uni-common-mt">
				数组类型
				<text>\nnodes属性为Array</text>
			</view>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="nodes"></rich-text>
			</view>
			<view class="uni-title uni-common-mt">
				字符串类型
				<text>\nnodes属性为String</text>
			</view>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="strings"></rich-text>
			</view>
		</view>
	</view>
</template>
```

### Example (Example 2)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view class="content">
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-title uni-common-mt">
				数组类型
				<text>\nnodes属性为Array</text>
			</view>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="nodes"></rich-text>
			</view>
			<view class="uni-title uni-common-mt">
				字符串类型
				<text>\nnodes属性为String</text>
			</view>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="strings"></rich-text>
			</view>
		</view>
	</view>
</template>
```

### Example (Example 3)

```vue
<script>
export default {
    data() {
        return {
            nodes: [{
                name: 'div',
                attrs: {
                    class: 'div-class',
                    style: 'line-height: 60px; color: red; text-align:center;'
                },
                children: [{
                    type: 'text',
                    text: 'Hello&nbsp;uni-app!'
                }]
            }],
            strings: '<div style="text-align:center;"><img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png"/></div>'
        }
    }
}
</script>
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/rich-text.html)
