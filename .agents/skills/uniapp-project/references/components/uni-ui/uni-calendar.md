# uni-calendar

## Instructions

组件名：uni-calendar

代码块： uCalendar

点击下载&安装

### Syntax

- 使用 `<uni-calendar />`（或 `<uni-calendar></uni-calendar>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| date | String | - | 自定义当前时间，默认为今天 |
| lunar | Boolean | false | 显示农历 |
| startDate | String | - | 日期选择范围-开始日期 |
| endDate | String | - | 日期选择范围-结束日期 |
| range | Boolean | false | 范围选择 |
| insert | Boolean | true | 插入模式，可选值，ture：插入模式；false：弹窗模式；默认为插入模式 |
| clearDate | Boolean | true | 弹窗模式是否清空上次选择内容 |
| selected | Array | - | 打点，期待格式[{date: '2019-06-27', info: '签到', data: { custom: '自定义信息', name: '自定义消息头',xxx:xxx... }}] |
| showMonth | Boolean | true | 是否显示月份为背景 |

#### Events

| 事件名 | 事件说明 | 返回参数 |
| --- | --- | --- |
| @change | 仅插入模式时生效 日期改变时触发 | {"year":2024,"month":2,"date":24} |
| @confirm | 仅弹出模式时生效 确认选择时触发 | {"year":2024,"month":2,"date":24} |
| @monthSwitch | 切换月份时触发 | {"year":2024,"month":2} |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-calendar.html`

### Examples

### Example (Example 1)

```vue
<view>
	<uni-calendar 
	:insert="true"
	:lunar="true" 
	:start-date="'2019-3-2'"
	:end-date="'2019-5-20'"
	@change="change"
	 />
</view>
```

### Example (Example 2)

```html
<view>
	<uni-calendar 
	:insert="true"
	:lunar="true" 
	:start-date="'2019-3-2'"
	:end-date="'2019-5-20'"
	@change="change"
	 />
</view>
```

### Example (Example 3)

```vue
<view>
	<uni-calendar 
	ref="calendar"
	:insert="false"
	@confirm="confirm"
	 />
	 <button @click="open">打开日历</button>
</view>
```

### Example (Example 4)

```html
<view>
	<uni-calendar 
	ref="calendar"
	:insert="false"
	@confirm="confirm"
	 />
	 <button @click="open">打开日历</button>
</view>
```

### Example (Example 5)

```vue
export default {
	data() {
		return {};
	},
	methods: {
		open(){
			this.$refs.calendar.open();
		},
		confirm(e) {
			console.log(e);
		}
	}
};
```

### Example (Example 6)

```javascript
export default {
	data() {
		return {};
	},
	methods: {
		open(){
			this.$refs.calendar.open();
		},
		confirm(e) {
			console.log(e);
		}
	}
};
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-calendar.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=calendar)
- [Local Example](examples/uni-ui/uni-calendar.vue)
