# slider

## Instructions

滑动选择器。

属性说明

示例 查看演示

### Syntax

- 使用 `<slider />`（或 `<slider></slider>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| min | Number | 0 | 最小值 |
| max | Number | 100 | 最大值 |
| step | Number | 1 | 步长，取值必须大于 0，并且可被(max - min)整除 |
| disabled | Boolean | false | 是否禁用 |
| value | Number | 0 | 当前取值 |
| activeColor | Color | 各个平台不同，详见下 | 滑块左侧已选择部分的线条颜色 |
| backgroundColor | Color | #e9e9e9 | 滑块右侧背景条的颜色 |
| block-size | Number | 28 | 滑块的大小，取值范围为 12 - 28 |
| block-color | Color | #ffffff | 滑块的颜色 |
| show-value | Boolean | false | 是否显示当前 value |

#### Events

| 事件名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| @change | EventHandle |  | 完成一次拖动后触发的事件，event.detail = {value: value} |
| @changing | EventHandle |  | 拖动过程中触发的事件，event.detail = {value: value} |

#### Platform Compatibility

See official docs for platform support table: `https://doc.dcloud.net.cn/uni-app-x/component/slider.html`

### Examples

### Example (Example 1)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">设置step</view>
			<view>
				<slider value="60" @change="sliderChange" step="5" />
			</view>

			<view class="uni-title">显示当前value</view>
			<view>
				<slider value="50" @change="sliderChange" show-value />
			</view>

			<view class="uni-title">设置最小/最大值</view>
			<view>
				<slider value="100" @change="sliderChange" min="50" max="200" show-value />
			</view>

			<view class="uni-title">不同颜色和大小的滑块</view>
			<view>
				<slider value="50" @change="sliderChange" activeColor="#FFCC33" backgroundColor="#000000" block-color="#8A6DE9" block-size="20" />
			</view>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        sliderChange(e) {
            console.log('value 发生变化：' + e.detail.value)
        }
    }
}
</script>
```

### Example (Example 2)

```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">设置step</view>
			<view>
				<slider value="60" @change="sliderChange" step="5" />
			</view>

			<view class="uni-title">显示当前value</view>
			<view>
				<slider value="50" @change="sliderChange" show-value />
			</view>

			<view class="uni-title">设置最小/最大值</view>
			<view>
				<slider value="100" @change="sliderChange" min="50" max="200" show-value />
			</view>

			<view class="uni-title">不同颜色和大小的滑块</view>
			<view>
				<slider value="50" @change="sliderChange" activeColor="#FFCC33" backgroundColor="#000000" block-color="#8A6DE9" block-size="20" />
			</view>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        sliderChange(e) {
            console.log('value 发生变化：' + e.detail.value)
        }
    }
}
</script>
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/slider.html)
