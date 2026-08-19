# uni-collapse

## Instructions

组件名：uni-collapse

代码块： uCollapse

关联组件： uni-collapse-item 、 uni-icons 。

### Syntax

- 使用 `<uni-collapse />`（或 `<uni-collapse></uni-collapse>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value/v-model | String/Array | - | 当前激活面板改变时触发(如果是手风琴模式，参数类型为string，否则为array) |
| accordion | Boolean | false | 是否开启手风琴效果 |

#### Events

| 事件称名 | 说明 | 返回值 |
| --- | --- | --- |
| @change | 切换面板时触发 | 切换面板时触发，如果是手风琴模式，返回类型为string，否则为array |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-collapse.html`

### Examples

### Example (Example 1)

```vue
<uni-collapse>
	<uni-collapse-item title="默认开启" :open="true">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="折叠内容">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="禁用状态" disabled>
		<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

### Example (Example 2)

```html
<uni-collapse>
	<uni-collapse-item title="默认开启" :open="true">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="折叠内容">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="禁用状态" disabled>
		<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

### Example (Example 3)

```vue
<uni-collapse accordion>
	<uni-collapse-item title="手风琴效果">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="手风琴效果">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="禁用状态" disabled>
		<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

### Example (Example 4)

```html
<uni-collapse accordion>
	<uni-collapse-item title="手风琴效果">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="手风琴效果">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="禁用状态" disabled>
		<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

### Example (Example 5)

```vue
<uni-collapse v-model="value">
	<uni-collapse-item name="key1" title="默认开启">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item name="key2" title="默认开启">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item name="key3" title="默认不开启">
			<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

### Example (Example 6)

```html
<uni-collapse v-model="value">
	<uni-collapse-item name="key1" title="默认开启">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item name="key2" title="默认开启">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item name="key3" title="默认不开启">
			<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-collapse.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=collapse)
- [Local Example](examples/uni-ui/uni-collapse.vue)
