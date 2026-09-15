# radio

## Instructions

单项选择器，内部由多个 <radio> 组成。通过把多个 radio 包裹在一个 radio-group 下，实现这些 radio 的单选。

属性说明

单选项目。

### Syntax

- 使用 `<radio />`（或 `<radio></radio>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

See official docs for full properties list: `https://uniapp.dcloud.net.cn/component/radio.html`

#### Events

| 事件名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| @change | EventHandle |  | <radio-group> 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项radio的value} |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/radio.html`

### Examples

### Example (Example 1)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="uni-title">默认样式</view>
			<view>
				<label class="radio"><radio value="r1" :checked="true" />选中</label>
				<label class="radio"><radio value="r2" />未选中</label>
			</view>
		</view>
		<view class="uni-title uni-common-mt uni-common-pl">推荐展示样式</view>
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === current" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</radio-group>
		</view>
	</view>
</template>
```

### Example (Example 2)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="uni-title">默认样式</view>
			<view>
				<label class="radio"><radio value="r1" :checked="true" />选中</label>
				<label class="radio"><radio value="r2" />未选中</label>
			</view>
		</view>
		<view class="uni-title uni-common-mt uni-common-pl">推荐展示样式</view>
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === current" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</radio-group>
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
            items: [{
                    value: 'USA',
                    name: '美国',
                    checked: 'true'
                },
                {
                    value: 'CHN',
                    name: '中国'
                },
                {
                    value: 'BRA',
                    name: '巴西'
                },
                {
                    value: 'JPN',
                    name: '日本'
                },
                {
                    value: 'ENG',
                    name: '英国'
                },
                {
                    value: 'FRA',
                    name: '法国'
                },
            ],
            current: 0
        }
    },
    methods: {
        radioChange: function(evt) {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].value === evt.detail.value) {
                    this.current = i;
                    break;
                }
            }
        }
    }
}
</script>
```

Reference: [Official Documentation](https://uniapp.dcloud.net.cn/component/radio.html)
