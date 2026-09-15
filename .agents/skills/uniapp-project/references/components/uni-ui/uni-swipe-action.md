# uni-swipe-action

## Instructions

组件名：uni-swipe-action

代码块： uSwipeAction 、 uSwipeActionItem

点击下载&安装

### Syntax

- 使用 `<uni-swipe-action />`（或 `<uni-swipe-action></uni-swipe-action>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 可选值 | 默认值 | 是否必填 | 说明 |
| --- | --- | --- | --- | --- | --- |
| show | String | left/right/none | none | 否 | 开启关闭组件，auto-close = false 时生效 |
| threshold | Number | - | 20 | 否 | 滑动阈值 |
| disabled | Boolean | - | false | 否 | 是否禁止滑动 |
| autoClose | Boolean | - | true | 否 | 其他组件开启的时候，当前组件是否自动关闭， 注意：长列表使用会有性能问题 |
| left-options | Array/Object | - | - | 否 | 左侧选项内容及样式 |
| right-options | Array/Object | - | - | 否 | 右侧选项内容及样式 |

#### Events

| 事件称名 | 说明 | 返回值 |
| --- | --- | --- |
| @click | 点击选项按钮时触发事件 | e = {content,index} ，content（点击内容）、index（下标）、position (位置信息) |
| @change | 组件打开或关闭时触发 | left:左侧 ，right：右侧，none：关闭 |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-swipe-action.html`

### Examples

### Example (Example 1)

```vue
<uni-swipe-action>
	<!-- 基础用法 -->
	<uni-swipe-action-item :right-options="options" :left-options="options" @click="onClick" @change="change">
		<view>SwipeAction 基础使用场景</view>
	</uni-swipe-action-item>
	<!-- 使用插槽 （请自行给定插槽内容宽度）-->
	<uni-swipe-action-item>
		<template v-slot:left>
			<view><text>置顶</text></view>
		</template>
		<view>
			<text>使用插槽</text>
		</view>
		<template v-slot:right>
			<view><text>删除</text></view>
		</template>
	</uni-swipe-action-item>
	<!-- 混合用法 -->
	<uni-swipe-action-item :right-options="options">
		<template v-slot:left>
			<view><text>置顶</text></view>
		</template>
		<view><text>混合使用</text></view>
	</uni-swipe-action-item>
</uni-swipe-action>

<!-- 禁止滑动 -->
<uni-swipe-action>
	<uni-swipe-action-item :disabled="true" :right-options="options">
		<view>SwipeAction 基础使用场景</view>
	</uni-swipe-action-item>
</uni-swipe-action>

<!-- 按组使用 -->
<uni-swipe-action>
	<uni-swipe-action-item :right-options="options" @click="onClick" @change="swipeChange($event, 0)">
		<view>item1</view>
	</uni-swipe-action-item>
	<uni-swipe-action-item :right-options="options" @click="onClick" @change="swipeChange($event, 1)">
		<view>item2</view>
	</uni-swipe-action-item>
	<uni-swipe-action-item :right-options="options" @click="onClick" @change="swipeChange($event, 2)">
		<view>item3</view>
	</uni-swipe-action-item>
</uni-swipe-action>
```

### Example (Example 2)

```html
<uni-swipe-action>
	<!-- 基础用法 -->
	<uni-swipe-action-item :right-options="options" :left-options="options" @click="onClick" @change="change">
		<view>SwipeAction 基础使用场景</view>
	</uni-swipe-action-item>
	<!-- 使用插槽 （请自行给定插槽内容宽度）-->
	<uni-swipe-action-item>
		<template v-slot:left>
			<view><text>置顶</text></view>
		</template>
		<view>
			<text>使用插槽</text>
		</view>
		<template v-slot:right>
			<view><text>删除</text></view>
		</template>
	</uni-swipe-action-item>
	<!-- 混合用法 -->
	<uni-swipe-action-item :right-options="options">
		<template v-slot:left>
			<view><text>置顶</text></view>
		</template>
		<view><text>混合使用</text></view>
	</uni-swipe-action-item>
</uni-swipe-action>

<!-- 禁止滑动 -->
<uni-swipe-action>
	<uni-swipe-action-item :disabled="true" :right-options="options">
		<view>SwipeAction 基础使用场景</view>
	</uni-swipe-action-item>
</uni-swipe-action>

<!-- 按组使用 -->
<uni-swipe-action>
	<uni-swipe-action-item :right-options="options" @click="onClick" @change="swipeChange($event, 0)">
		<view>item1</view>
	</uni-swipe-action-item>
	<uni-swipe-action-item :right-options="options" @click="onClick" @change="swipeChange($event, 1)">
		<view>item2</view>
	</uni-swipe-action-item>
	<uni-swipe-action-item :right-options="options" @click="onClick" @change="swipeChange($event, 2)">
		<view>item3</view>
	</uni-swipe-action-item>
</uni-swipe-action>
```

### Example (Example 3)

```vue
export default {
	data() {
		return {
			options: [{
				text: '取消',
				style: {
					backgroundColor: '#007aff'
				}
			}, {
				text: '确认',
				style: {
					backgroundColor: '#dd524d'
				}
			}]
		}
	},
	methods: {
		onClick(e) {
			console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
		},
		change(event) {
			console.log('改变事件', event);
		},
		swipeChange(e, index) {
			console.log('当前状态：' + e + '，下标：' + index)
		}
	}
}
```

### Example (Example 4)

```javascript
export default {
	data() {
		return {
			options: [{
				text: '取消',
				style: {
					backgroundColor: '#007aff'
				}
			}, {
				text: '确认',
				style: {
					backgroundColor: '#dd524d'
				}
			}]
		}
	},
	methods: {
		onClick(e) {
			console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
		},
		change(event) {
			console.log('改变事件', event);
		},
		swipeChange(e, index) {
			console.log('当前状态：' + e + '，下标：' + index)
		}
	}
}
```

### Example (Example 5)

```vue
{
	"path": "swipe-action/swipe-action",
	"style": {
		"navigationBarTitleText": "SwipeAction 滑动操作",
		"disableScroll":true,
		"app-plus":{
			"bounce":"none"
		}
	}
}
```

### Example (Example 6)

```javascript
{
	"path": "swipe-action/swipe-action",
	"style": {
		"navigationBarTitleText": "SwipeAction 滑动操作",
		"disableScroll":true,
		"app-plus":{
			"bounce":"none"
		}
	}
}
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-swipe-action.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=swipe-action)
- [Local Example](examples/uni-ui/uni-swipe-action.vue)
