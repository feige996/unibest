# uni-notice-bar

## Instructions

组件名：uni-notice-bar

代码块： uNoticeBar

点击下载&安装

### Syntax

- 使用 `<uni-notice-bar />`（或 `<uni-notice-bar></uni-notice-bar>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| speed | Number | 100 | 文字滚动的速度，默认100px/秒 |
| text | String | - | 显示文字 |
| background-color | String | #fffbe8 | 背景颜色 |
| color | String | #de8c17 | 文字颜色 |
| moreColor | String | #999999 | 查看更多文字的颜色 |
| moreText | String | - | 设置“查看更多”的文本 |
| single | Boolean | false | 是否单行 |
| scrollable | Boolean | false | 是否滚动，为true时，NoticeBar为单行 |
| showIcon | Boolean | false | 是否显示左侧喇叭图标 |
| showClose | Boolean | false | 是否显示右侧关闭按钮 |
| showGetMore | Boolean | false | 是否显示右侧查看更多图标，为true时，NoticeBar为单行 |

#### Events

| 事件名称 | 说明 | 返回值 |
| --- | --- | --- |
| @click | 点击 NoticeBar 触发事件 | - |
| @close | 关闭 NoticeBar 触发事件 | - |
| @getmore | 点击”查看更多“时触发事件 | - |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-notice-bar.html`

### Examples

### Example (Example 1)

```vue
<uni-notice-bar single text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
<uni-notice-bar text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

### Example (Example 2)

```html
<uni-notice-bar single text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
<uni-notice-bar text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

### Example (Example 3)

```vue
<uni-notice-bar scrollable single text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

### Example (Example 4)

```html
<uni-notice-bar scrollable single text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

### Example (Example 5)

```vue
<uni-notice-bar showIcon text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

### Example (Example 6)

```html
<uni-notice-bar showIcon text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-notice-bar.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=notice-bar)
- [Local Example](examples/uni-ui/uni-notice-bar.vue)
