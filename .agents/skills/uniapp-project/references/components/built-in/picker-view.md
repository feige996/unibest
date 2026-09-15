# picker-view

## Instructions

嵌入页面的滚动选择器。

相对于 picker 组件， picker-view 拥有更强的灵活性。当需要对自定义选择的弹出方式和UI表现时，往往需要使用 picker-view 。

属性说明

### Syntax

- 使用 `<picker-view />`（或 `<picker-view></picker-view>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 平台差异说明 |
| --- | --- | --- | --- |
| value | Array＜Number＞ | 数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。 |  |
| indicator-style | String | 设置选择器中间选中框的样式 |  |
| indicator-class | String | 设置选择器中间选中框的类名，注意页面或组件的style中写了scoped时，需要在类名前写/deep/ | app-nvue与抖音小程序与飞书小程序不支持 |
| mask-style | String | 设置蒙层的样式 |  |
| mask-top-style | String | 设置蒙层上半部分的样式（使用 background-image 覆盖） | 仅 app-nvue（3.6.7+） 支持 |
| mask-bottom-style | String | 设置蒙层下半部分的样式（使用 background-image 覆盖） | 仅 app-nvue（3.6.7+） 支持 |
| mask-class | String | 设置蒙层的类名 | app-nvue与抖音小程序与飞书小程序不支持 |
| immediate-change | Boolean | 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件。 | 微信小程序 2.21.1 |

#### Events

| 事件名 | 类型 | 默认值 | 平台差异说明 |
| --- | --- | --- | --- |
| @change | EventHandle | 当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始） |  |
| @pickstart | eventhandle | 当滚动选择开始时候触发事件 | 微信小程序2.3.1、快手小程序、小红书小程序 |
| @pickend | eventhandle | 当滚动选择结束时候触发事件 | 微信小程序2.3.1、快手小程序、小红书小程序 |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/picker-view.html`

### Examples

### Example (Example 1)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="uni-title">日期：{{year}}年{{month}}月{{day}}日</view>
        </view>
        <picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange" class="picker-view">
            <picker-view-column>
                <view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
            </picker-view-column>
            <picker-view-column>
                <view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
            </picker-view-column>
            <picker-view-column>
                <view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
            </picker-view-column>
        </picker-view>
    </view>
</template>
```

### Example (Example 2)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="uni-title">日期：{{year}}年{{month}}月{{day}}日</view>
        </view>
        <picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange" class="picker-view">
            <picker-view-column>
                <view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
            </picker-view-column>
            <picker-view-column>
                <view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
            </picker-view-column>
            <picker-view-column>
                <view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
            </picker-view-column>
        </picker-view>
    </view>
</template>
```

### Example (Example 3)

```vue
<script>
    export default {
        data: function () {
            const date = new Date()
            const years = []
            const year = date.getFullYear()
            const months = []
            const month = date.getMonth() + 1
            const days = []
            const day = date.getDate()
            for (let i = 1990; i <= date.getFullYear(); i++) {
                years.push(i)
            }
            for (let i = 1; i <= 12; i++) {
                months.push(i)
            }
            for (let i = 1; i <= 31; i++) {
                days.push(i)
            }
            return {
                title: 'picker-view',
                years,
                year,
                months,
                month,
                days,
                day,
                value: [9999, month - 1, day - 1],
                visible: true,
                indicatorStyle: `height: 50px;`
            }
        },
        methods: {
            bindChange: function (e) {
                const val = e.detail.value
                this.year = this.years[val[0]]
                this.month = this.months[val[1]]
                this.day = this.days[val[2]]
            }
        }
    }
</script>
```

### Example (Example 4)

```vue
<style>
	.picker-view {
		width: 750rpx;
		height: 600rpx;
		margin-top: 20rpx;
	}
	.item {
		line-height: 100rpx;
		text-align: center;
	}
</style>
```

Reference: [Official Documentation](https://uniapp.dcloud.net.cn/component/picker-view.html)
