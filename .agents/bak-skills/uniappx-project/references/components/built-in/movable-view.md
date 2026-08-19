# movable-view

## Instructions

可移动的视图容器，在页面中可以拖拽滑动或双指缩放。

movable-view 必须在 movable-area 组件中，并且必须是直接子节点，否则不能移动。

平台差异说明

### Syntax

- 使用 `<movable-view />`（或 `<movable-view></movable-view>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| direction | String | none | movable-view的移动方向，属性值有all、vertical、horizontal、none |  |
| inertia | Boolean | false | movable-view是否带有惯性 |  |
| out-of-bounds | Boolean | false | 超过可移动区域后，movable-view是否还可以移动 |  |
| x | Number / String |  | 定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画 |  |
| y | Number / String |  | 定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画 |  |
| damping | Number | 20 | 阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快 | 360小程序不支持 |
| friction | Number | 2 | 摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值 | 360小程序不支持 |
| disabled | Boolean | false | 是否禁用 |  |
| scale | Boolean | false | 是否支持双指缩放，默认缩放手势生效区域是在movable-view内 | 360小程序不支持 |
| scale-min | Number | 0.1/0.5 | 定义缩放倍数最小值 | 0.1 倍需要 App(4.51+)、H5(4.51+)、微信小程序(4.51+) |
| scale-max | Number | 10 | 定义缩放倍数最大值 |  |
| scale-value | Number | 1 | 定义缩放倍数，取值范围为 0.1/0.5 - 10 | 0.1 倍需要 App(4.51+)、H5(4.51+)、微信小程序(4.51+) |
| animation | Boolean | true | 是否使用动画 |  |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| @change | EventHandle |  | 拖动过程中触发的事件，event.detail = {x: x, y: y, source: source}，其中source表示产生移动的原因，值可为touch（拖动）、touch-out-of-bounds（超出移动范围）、out-of-bounds（超出移动范围后的回弹）、friction（惯性）和空字符串（setData） |  |
| @scale | EventHandle |  | 缩放过程中触发的事件，event.detail = {x: x, y: y, scale: scale}， |  |

#### Platform Compatibility

See official docs for platform support table: `https://doc.dcloud.net.cn/uni-app-x/component/movable-view.html`

### Examples

### Example (Example 1)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view class="page-body">
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				示例 1
				<text>\nmovable-view 区域小于 movable-area</text>
			</view>
			<movable-area>
				<movable-view :x="x" :y="y" direction="all" @change="onChange">text</movable-view>
			</movable-area>
			<view @tap="tap" class="uni-link uni-center uni-common-mt">
				点击这里移动至 (30px, 30px)
			</view>
			<view class="uni-title uni-common-mt">
				示例 2
				<text>\nmovable-view区域大于movable-area</text>
			</view>
			<movable-area>
				<movable-view class="max" direction="all">text</movable-view>
			</movable-area>
		</view>
	</view>
</template>
```

### Example (Example 2)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view class="page-body">
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				示例 1
				<text>\nmovable-view 区域小于 movable-area</text>
			</view>
			<movable-area>
				<movable-view :x="x" :y="y" direction="all" @change="onChange">text</movable-view>
			</movable-area>
			<view @tap="tap" class="uni-link uni-center uni-common-mt">
				点击这里移动至 (30px, 30px)
			</view>
			<view class="uni-title uni-common-mt">
				示例 2
				<text>\nmovable-view区域大于movable-area</text>
			</view>
			<movable-area>
				<movable-view class="max" direction="all">text</movable-view>
			</movable-area>
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
            x: 0,
            y: 0,
            old: {
                x: 0,
                y: 0
            }
        }
    },
    methods: {
        tap: function(e) {
            this.x = this.old.x
            this.y = this.old.y
            this.$nextTick(function() {
                this.x = 30
                this.y = 30
            })
        },
        onChange: function(e) {
            this.old.x = e.detail.x
            this.old.y = e.detail.y
        }
    }
}
</script>
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/movable-view.html)
