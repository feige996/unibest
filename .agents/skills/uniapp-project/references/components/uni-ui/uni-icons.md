# uni-icons

## Instructions

组件名：uni-icons（已支持 uni-app x）

代码块： uIcons

点击下载&安装

### Syntax

- 使用 `<uni-icons />`（或 `<uni-icons></uni-icons>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | Number | 24 | 图标大小 |
| type | String | - | 图标图案，参考示例 |
| color | String | - | 图标颜色 |
| customPrefix [即将废弃] | String | - | 自定义图标 |
| fontFamily | String | - | 自定义图标 2.0.0+支持 |

#### Events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| @click | 点击 Icon 触发事件 | - |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-icons.html`

### Examples

### Example (Example 1)

```vue
<uni-icons type="contact" size="30"></uni-icons>
```

### Example (Example 2)

```html
<uni-icons type="contact" size="30"></uni-icons>
```

### Example (Example 3)

```vue
@font-face {
	font-family: CustomFont;
	src: url('./iconfont.ttf');
}
```

### Example (Example 4)

```vue
@font-face {
	font-family: CustomFont;
	src: url('./iconfont.ttf');
}
```

### Example (Example 5)

```vue
<uni-icons fontFamily="CustomFont" :size="26">{{'\uebc6'}}</uni-icons>
```

### Example (Example 6)

```html
<uni-icons fontFamily="CustomFont" :size="26">{{'\uebc6'}}</uni-icons>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-icons.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=icons)
- [Local Example](examples/uni-ui/uni-icons.vue)
