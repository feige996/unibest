# uni-transition

## Instructions

组件名：uni-transition

代码块： uTransition

点击下载&安装

### Syntax

- 使用 `<uni-transition />`（或 `<uni-transition></uni-transition>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show | Boolean | false | 控制组件显示或隐藏 |
| mode-class | Array/String | - | 内置过渡动画类型 |
| custom-class | String | - | 自定义类名 |
| duration | Number | 300 | 过渡动画持续时间 |
| styles | Object | - | 组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如： backgroundColor:red |

#### Events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| click | 点击组件触发 | - |
| change | 过渡动画结束时触发 | e = {detail:true} |

#### Platform Compatibility

| 值 | 说明 | 平台差异 |
| --- | --- | --- |
| linear | 动画从头到尾的速度是相同的 | - |
| ease | 动画以低速开始，然后加快，在结束前变慢 | - |
| ease-in | 动画以低速开始 | - |
| ease-in-out | 动画以低速开始和结束 | - |
| ease-out | 动画以低速结束 | - |
| step-start | 动画第一帧就跳至结束状态直到结束 | nvue不支持 |
| step-end | 动画一直保持开始状态，最后一帧跳到结束状态 | nvue不支持 |

### Examples

### Example (Example 1)

```vue
<template>
	<view>
		<button type="primary" @click="open">fade</button>
		<uni-transition mode-class="fade" :styles="{'width':'100px','height':'100px','backgroundColor':'red'}" :show="show" @change="change" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
		}
	},
	onLoad() {},
	methods: {
		open(mode) {
			this.show = !this.show
		},
		change() {
			console.log('触发动画')
		}
	}
}
</script>
```

### Example (Example 2)

```html
<template>
	<view>
		<button type="primary" @click="open">fade</button>
		<uni-transition mode-class="fade" :styles="{'width':'100px','height':'100px','backgroundColor':'red'}" :show="show" @change="change" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
		}
	},
	onLoad() {},
	methods: {
		open(mode) {
			this.show = !this.show
		},
		change() {
			console.log('触发动画')
		}
	}
}
</script>
```

### Example (Example 3)

```vue
<template>
	<view class="content">
		<uni-transition custom-class="custom-transition" mode-class="fade" :duration="0" :show="true" />
	</view>
</template>

<style>
/* 常规样式覆盖  */
.content >>> .custom-transition {
	width:100px;
	height:100px;
	background-color:red;
}
</style>
<style lang="scss">
/* 如果使用 scss 需要使用 /deep/  */
.content /deep/ .custom-transition {
	width:100px;
	height:100px;
	background-color:red;
}
</style>
```

### Example (Example 4)

```html
<template>
	<view class="content">
		<uni-transition custom-class="custom-transition" mode-class="fade" :duration="0" :show="true" />
	</view>
</template>

<style>
/* 常规样式覆盖  */
.content >>> .custom-transition {
	width:100px;
	height:100px;
	background-color:red;
}
</style>
<style lang="scss">
/* 如果使用 scss 需要使用 /deep/  */
.content /deep/ .custom-transition {
	width:100px;
	height:100px;
	background-color:red;
}
</style>
```

### Example (Example 5)

```vue
<template>
	<view class="content">
		<uni-transition :styles="styles" mode-class="fade" :duration="0" :show="true" />
	</view>
</template>
<script>
export default {
	data() {
		return {
			styles:{
				'width':'100px',
				'height':'100px',
				'backgroundColor':'red'
			}
		}
	}
}
</script>
```

### Example (Example 6)

```html
<template>
	<view class="content">
		<uni-transition :styles="styles" mode-class="fade" :duration="0" :show="true" />
	</view>
</template>
<script>
export default {
	data() {
		return {
			styles:{
				'width':'100px',
				'height':'100px',
				'backgroundColor':'red'
			}
		}
	}
}
</script>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-transition.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=transition)
- [Local Example](examples/uni-ui/uni-transition.vue)
