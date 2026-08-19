# uni-indexed-list

## Instructions

组件名：uni-indexed-list

代码块： uIndexedList

点击下载&安装

### Syntax

- 使用 `<uni-indexed-list />`（或 `<uni-indexed-list></uni-indexed-list>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| options | Object | - | 索引列表需要的数据对象 |
| showSelect | Boolean | false | 展示模式，true 为展示默认，false 为选择模式，默认为 false |

#### Events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| click | 点击列表事件 ，返回当前选择项的事件对象 | - |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-indexed-list.html`

### Examples

### Example (Example 1)

```vue
<uni-indexed-list :options="list" :showSelect="false" @click="bindClick"></uni-indexed-list>
```

### Example (Example 2)

```html
<uni-indexed-list :options="list" :showSelect="false" @click="bindClick"></uni-indexed-list>
```

### Example (Example 3)

```vue
[{
	"letter": "A",
	"data": [
		"阿克苏机场",
		"阿拉山口机场",
		"阿勒泰机场",
		"阿里昆莎机场",
		"安庆天柱山机场",
		"澳门国际机场"
	]
}, {
	"letter": "B",
	"data": [
		"保山机场",
		"包头机场",
		"北海福成机场",
		"北京南苑机场",
		"北京首都国际机场"
	]
}]
```

### Example (Example 4)

```javascript
[{
	"letter": "A",
	"data": [
		"阿克苏机场",
		"阿拉山口机场",
		"阿勒泰机场",
		"阿里昆莎机场",
		"安庆天柱山机场",
		"澳门国际机场"
	]
}, {
	"letter": "B",
	"data": [
		"保山机场",
		"包头机场",
		"北海福成机场",
		"北京南苑机场",
		"北京首都国际机场"
	]
}]
```

### Example (Example 5)

```vue
<template>
	<uni-indexed-list :options="list" :show-select="true" @click="bindClick" />
</template>
```

### Example (Example 6)

```html
<template>
	<uni-indexed-list :options="list" :show-select="true" @click="bindClick" />
</template>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-indexed-list.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=indexed-list)
- [Local Example](examples/uni-ui/uni-indexed-list.vue)
