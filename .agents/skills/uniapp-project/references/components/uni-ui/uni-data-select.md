# uni-data-select

## Instructions

组件名：uni-data-select

代码块： uDataSelect

点击下载&安装

### Syntax

- 使用 `<uni-data-select />`（或 `<uni-data-select></uni-data-select>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 可选值 | 默认值 | 说明 | 兼容说明 |
| --- | --- | --- | --- | --- | --- |
| value/v-model | String/Number | - | - | 已选择数据的 value 值（当其值为0时不进行初始化赋值） |  |
| localdata | Array | - | - | 本地渲染数据 |  |
| clear | Boolean | - | - | 是否可以清空已选项 |  |
| label | String |  |  | 左侧标题 |  |
| placeholder | String | - | 请选择 | 输入框的提示文字 |  |
| disabled | Boolean | - | false | 是否开启禁用 |  |
| emptyTips | String | - | 暂无数据 | 没有数据时显示的文字 ，本地数据无效 |  |
| placement | String | bottom,top | bottom | 弹出时位置 |  |
| page-size | Number | - | 20 | 返回的数据量（云端请求时有效，更多云端属性详见下方） |  |
| multiple | Boolean | - | false | 是否开启多选 | 1.1.0 新增 |
| wrap | Boolean | - | false | 是否开启换行展示(默认展示 1 行) | 1.1.0 新增 |
| align | String | left,center,right | left | 选择文字的位置 | 1.1.0 新增 |
| hideRight | Boolean | - | false | 是否隐藏右侧按钮 | 1.1.0 新增 |
| mode | String | default,underline,none | default | 边框样式,default(四周边框),underline(下边框),none(无边框) | 1.1.0 新增 |

#### Events

| 事件名 | 事件说明 | 返回参数 | 兼容性说明 |
| --- | --- | --- | --- |
| @change | 选中状态改变时触发事件 | - | - |
| @open | 选择框开启时触发 | - | 1.1.0 新增 |
| @close | 选择框关闭时触发 | - | 1.1.0 新增 |
| @clear | 点击清除按钮之后触发 | - | 1.1.0 新增 |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-data-select.html`

### Examples

### Example (Example 1)

```vue
<template>
  <view>
    <uni-data-select
      v-model="value"
      :localdata="range"
      @change="change"
    ></uni-data-select>
  </view>
</template>
```

### Example (Example 2)

```html
<template>
  <view>
    <uni-data-select
      v-model="value"
      :localdata="range"
      @change="change"
    ></uni-data-select>
  </view>
</template>
```

### Example (Example 3)

```vue
export default {
  data() {
    return {
      value: 1,
      range: [
        { value: 0, text: "篮球" },
        { value: 1, text: "足球" },
        { value: 2, text: "游泳" },
      ],
    };
  },
  methods: {
    change(e) {
      console.log("e:", e);
    },
  },
};
```

### Example (Example 4)

```javascript
export default {
  data() {
    return {
      value: 1,
      range: [
        { value: 0, text: "篮球" },
        { value: 1, text: "足球" },
        { value: 2, text: "游泳" },
      ],
    };
  },
  methods: {
    change(e) {
      console.log("e:", e);
    },
  },
};
```

### Example (Example 5)

```vue
<template>
	<view>
		<uni-data-select multiple v-model="value" :localdata="range" @change="change"></uni-data-select>
	</view>
</template>
<script>
	export default {
		data() { 
			return {
				value: [0,2],
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

### Example (Example 6)

```vue
<template>
	<view>
		<uni-data-select multiple v-model="value" :localdata="range" @change="change"></uni-data-select>
	</view>
</template>
<script>
	export default {
		data() { 
			return {
				value: [0,2],
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-data-select.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=data-select)
- [Local Example](examples/uni-ui/uni-data-select.vue)
