# picker

## Instructions

从底部弹起的滚动选择器。支持五种选择器，通过mode来区分，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。

mode = selector

属性说明

### Syntax

- 使用 `<picker />`（或 `<picker></picker>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| range | Array / Array<Object> | [] | mode为 selector 或 multiSelector 时，range 有效 |  |
| range-key | String |  | 当 range 是一个 Array＜Object＞ 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容 |  |
| value | Number | 0 | value 的值表示选择了 range 中的第几个（下标从 0 开始） |  |
| selector-type | String | auto | UI类型,仅大屏时该属性生效，支持 picker、select、auto，默认在 iPad 以 picker 样式展示而在 PC 以 select 样式展示 | H5 2.9.9+ |
| disabled | Boolean | false | 是否禁用 | 快手小程序不支持 |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| @change | EventHandle |  | value 改变时触发 change 事件，event.detail = {value: value} |  |
| @cancel | EventHandle |  | 取消选择或点遮罩层收起 picker 时触发 | 快手小程序不支持 |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/picker.html`

### Examples

### Example (Example 1)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-title uni-common-pl">地区选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title uni-common-pl">时间选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
						<view class="uni-input">{{time}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title uni-common-pl">日期选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
		</view>
	</view>
</template>
```

### Example (Example 2)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-title uni-common-pl">地区选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title uni-common-pl">时间选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
						<view class="uni-input">{{time}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title uni-common-pl">日期选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
		</view>
	</view>
</template>
```

### Example (Example 3)

```vue
<script>
export default {
    data() {
        const currentDate = this.getDate({
            format: true
        })
        return {
            title: 'picker',
            array: ['中国', '美国', '巴西', '日本'],
            index: 0,
            date: currentDate,
            time: '12:01'
        }
    },
    computed: {
        startDate() {
            return this.getDate('start');
        },
        endDate() {
            return this.getDate('end');
        }
    },
    methods: {
        bindPickerChange: function(e) {
            console.log('picker发送选择改变，携带值为', e.detail.value)
            this.index = e.detail.value
        },
        bindDateChange: function(e) {
            this.date = e.detail.value
        },
        bindTimeChange: function(e) {
            this.time = e.detail.value
        },
        getDate(type) {
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (type === 'start') {
                year = year - 10;
            } else if (type === 'end') {
                year = year + 10;
            }
            month = month > 9 ? month : '0' + month;
            day = day > 9 ? day : '0' + day;
            return `${year}-${month}-${day}`;
        }
    }
}
</script>
```

Reference: [Official Documentation](https://uniapp.dcloud.net.cn/component/picker.html)
