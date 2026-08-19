# uni-card

## Instructions

组件名：uni-card

代码块： uCard

点击下载&安装

### Syntax

- 使用 `<uni-card />`（或 `<uni-card></uni-card>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | String | - | 标题文字 |
| sub-title | String | - | 副标题文字 |
| extra | String | - | 标题额外信息 |
| thumbnail | String | - | 标题左侧缩略图,支持网络图片，本地图片，本图片需要传入一个绝对路径，如： /static/xxx.png |
| cover | String | - | 封面图,支持网络图片，本地图片，本图片需要传入一个绝对路径，如： /static/xxx.png |
| is-full | Boolean | false | 卡片内容是否通栏，为true时将去除padding值 |
| is-shadow | Boolean | false | 卡片内容是否开启阴影 |
| shadow | String | 0px 0px 3px 1px rgba(0, 0, 0, 0.08) | 卡片阴影,需符合 css 值 |
| margin | String | 10px | 卡片外边距 |
| spacing | String | 10px | 卡片内边距 |
| padding | String | 10px | 卡片内容内边距 |
| border | Boolean | true | 卡片边框 |
| mode[弃用] | String | basic | 卡片模式 ，可选值， basic：基础卡片 ；style ：图文卡片 ； title ：标题卡片 |
| note[弃用] | String | - | 底部信息 |

#### Events

| 事件称名 | 事件说明 | 返回参数 |
| --- | --- | --- |
| @click | 点击 Card 触发事件 | - |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-card.html`

### Examples

### Example (Example 1)

```vue
<uni-card>
	<text>这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
</uni-card>
```

### Example (Example 2)

```html
<uni-card>
	<text>这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
</uni-card>
```

### Example (Example 3)

```vue
<uni-card title="基础卡片" extra="额外信息">
	<text>这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
</uni-card>
```

### Example (Example 4)

```html
<uni-card title="基础卡片" extra="额外信息">
	<text>这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
</uni-card>
```

### Example (Example 5)

```vue
<uni-card title="基础卡片" sub-title="副标题" extra="额外信息" thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
	<text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
</uni-card>
```

### Example (Example 6)

```html
<uni-card title="基础卡片" sub-title="副标题" extra="额外信息" thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
	<text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
</uni-card>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-card.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=card)
- [Local Example](examples/uni-ui/uni-card.vue)
