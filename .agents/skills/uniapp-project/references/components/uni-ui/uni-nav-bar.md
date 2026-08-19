# uni-nav-bar

## Instructions

组件名：uni-nav-bar

代码块： uNavBar

点击下载&安装

### Syntax

- 使用 `<uni-nav-bar />`（或 `<uni-nav-bar></uni-nav-bar>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | String | - | 标题文字 |
| leftText | String | - | 左侧按钮文本 |
| rightText | String | - | 右侧按钮文本 |
| leftIcon | String | - | 左侧按钮图标（图标类型参考 Icon 图标 type 属性） |
| rightIcon | String | - | 右侧按钮图标（图标类型参考 Icon 图标 type 属性） |
| color | String | #000000 | 图标和文字颜色 |
| backgroundColor | String | #FFFFFF | 导航栏背景颜色 |
| fixed | Boolean | false | 是否固定顶部 |
| statusBar | Boolean | false | 是否包含状态栏 |
| shadow | Boolean | false | 导航栏下是否有阴影 |
| border | Boolean | true | 导航栏下是否有边框 |
| height | Number/String | 44 | 导航栏高度 |
| dark | Boolean | false | 导航栏开启暗黑模式 |
| leftWidth | Number/String | 120rpx | 导航栏左侧插槽宽度 |
| rightWidth | Number/String | 120rpx | 导航栏右侧插槽宽度 |
| stat | Boolean |  | 是否开启统计标题功能。 注意：只有使用 title 属性 ，且开启了统计功能才生效 |
| showMenuButtonWidth | Boolean | false | 微信小程序是否开启胶囊避让功能，fixed:true 下生效。 注意：开启后会导致标题不在页面水平居中，如需使用右插槽请开启，不开启下，右侧插槽或者内容会被胶囊按钮覆盖 |

#### Events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| @clickLeft | 左侧按钮点击时触发 | - |
| @clickRight | 右侧按钮点击时触发 | - |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-nav-bar.html`

### Examples

### Example (Example 1)

```vue
<uni-nav-bar title="导航栏组件"></uni-nav-bar>
```

### Example (Example 2)

```html
<uni-nav-bar title="导航栏组件"></uni-nav-bar>
```

### Example (Example 3)

```vue
<uni-nav-bar shadow title="导航栏组件"></uni-nav-bar>
```

### Example (Example 4)

```html
<uni-nav-bar shadow title="导航栏组件"></uni-nav-bar>
```

### Example (Example 5)

```vue
<uni-nav-bar dark title="导航栏组件"></uni-nav-bar>
```

### Example (Example 6)

```html
<uni-nav-bar dark title="导航栏组件"></uni-nav-bar>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-nav-bar.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=nav-bar)
- [Local Example](examples/uni-ui/uni-nav-bar.vue)
