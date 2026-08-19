# checkbox

## Instructions

多选框组

属性说明

多选项。在1组check-group中可选择多个

### Syntax

- 使用 `<checkbox />`（或 `<checkbox></checkbox>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

See official docs for full properties list: `https://uniapp.dcloud.net.cn/component/checkbox.html`

#### Events

| 事件名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| @change | EventHandle |  | <checkbox-group> 中选中项发生改变是触发 change 事件，detail = {value:[选中的checkbox的value的数组]} |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/checkbox.html`

### Examples

### Example (Example 1)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">默认样式</view>
			<view>
				<checkbox-group>
					<label>
						<checkbox value="cb" :checked="true" />选中
					</label>
					<label>
						<checkbox value="cb" />未选中
					</label>
				</checkbox-group>
			</view>
			<view class="uni-title uni-common-mt">不同颜色和尺寸的checkbox</view>
			<view>
				<checkbox-group>
					<label>
						<checkbox value="cb" :checked="true" color="#FFCC33" style="transform:scale(0.7)" />选中
					</label>
					<label>
						<checkbox value="cb" color="#FFCC33" style="transform:scale(0.7)" />未选中
					</label>
				</checkbox-group>
			</view>
		</view>

		<view class="uni-padding-wrap">
			<view class="uni-title uni-common-mt">
				推荐展示样式
				<text>\n使用 uni-list 布局</text>
			</view>
		</view>
		<view class="uni-list">
			<checkbox-group @change="checkboxChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
					<view>
						<checkbox :value="item.value" :checked="item.checked" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</checkbox-group>
		</view>
	</view>
</template>
```

### Example (Example 2)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">默认样式</view>
			<view>
				<checkbox-group>
					<label>
						<checkbox value="cb" :checked="true" />选中
					</label>
					<label>
						<checkbox value="cb" />未选中
					</label>
				</checkbox-group>
			</view>
			<view class="uni-title uni-common-mt">不同颜色和尺寸的checkbox</view>
			<view>
				<checkbox-group>
					<label>
						<checkbox value="cb" :checked="true" color="#FFCC33" style="transform:scale(0.7)" />选中
					</label>
					<label>
						<checkbox value="cb" color="#FFCC33" style="transform:scale(0.7)" />未选中
					</label>
				</checkbox-group>
			</view>
		</view>

		<view class="uni-padding-wrap">
			<view class="uni-title uni-common-mt">
				推荐展示样式
				<text>\n使用 uni-list 布局</text>
			</view>
		</view>
		<view class="uni-list">
			<checkbox-group @change="checkboxChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
					<view>
						<checkbox :value="item.value" :checked="item.checked" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</checkbox-group>
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
				title: 'checkbox 复选框',
				items: [{
						value: 'USA',
						name: '美国'
					},
					{
						value: 'CHN',
						name: '中国',
						checked: 'true'
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
					}
				]
			}
		},
		methods: {
			checkboxChange: function (e) {
				var items = this.items,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if(values.includes(item.value)){
						this.$set(item,'checked',true)
					}else{
						this.$set(item,'checked',false)
					}
				}
			}
		}
	}
</script>
```

### Example (Example 4)

```vue
<style>
.uni-list-cell {
	justify-content: flex-start
}
</style>
```

Reference: [Official Documentation](https://uniapp.dcloud.net.cn/component/checkbox.html)
