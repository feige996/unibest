# uni-list

## Instructions

组件名：uni-list

代码块： uList 、 uListItem 关联组件： uni-list-item 、 uni-badge 、 uni-icons 、 uni-list-chat

点击下载&安装

### Syntax

- 使用 `<uni-list />`（或 `<uni-list></uni-list>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| border | Boolean | true | 是否显示边框 |

#### Events

| 事件称名 | 说明 | 返回参数 |
| --- | --- | --- |
| click | 点击 uniListItem 触发事件，需开启点击反馈 | - |
| switchChange | 点击切换 Switch 时触发，需显示 switch | e={value:checked} |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-list.html`

### Examples

### Example (Example 1)

```vue
<uni-list>
	<uni-list-item  title="列表文字" ></uni-list-item>
	<uni-list-item :disabled="true" title="列表禁用状态" ></uni-list-item>
</uni-list>
```

### Example (Example 2)

```html
<uni-list>
	<uni-list-item  title="列表文字" ></uni-list-item>
	<uni-list-item :disabled="true" title="列表禁用状态" ></uni-list-item>
</uni-list>
```

### Example (Example 3)

```vue
<uni-list>
	<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
	<uni-list-item :disabled="true" title="列表文字" note="列表禁用状态"></uni-list-item>
</uni-list>
```

### Example (Example 4)

```html
<uni-list>
	<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
	<uni-list-item :disabled="true" title="列表文字" note="列表禁用状态"></uni-list-item>
</uni-list>
```

### Example (Example 5)

```vue
<uni-list>
	<uni-list-item  title="列表右侧显示角标" :show-badge="true" badge-text="12" ></uni-list-item>
	<uni-list-item title="列表右侧显示 switch"  :show-switch="true"  @switchChange="switchChange" ></uni-list-item>
</uni-list>
```

### Example (Example 6)

```html
<uni-list>
	<uni-list-item  title="列表右侧显示角标" :show-badge="true" badge-text="12" ></uni-list-item>
	<uni-list-item title="列表右侧显示 switch"  :show-switch="true"  @switchChange="switchChange" ></uni-list-item>
</uni-list>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-list.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=list)
- [Local Example](examples/uni-ui/uni-list.vue)
