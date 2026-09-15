# uni-table

## Instructions

组件名：uni-table

代码块： uTable

点击下载&安装

### Syntax

- 使用 `<uni-table />`（或 `<uni-table></uni-table>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| border | Boolean | false | - | 是否带有纵向边框 |
| stripe | Boolean | false | - | 是否显示斑马线样式 |
| type | String | '' | - | 值为type="selection" 时开启多选 |
| emptyText | String | 没有更多数据 | - | 空数据时显示的文本内容 |
| loading | Boolean | false | - | 显示加载中 |

#### Events

| 事件称名 | 说明 | 返回参数 |
| --- | --- | --- |
| selection-change | 开启多选时，当选择项发生变化时会触发该事件 | Function(Object) |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-table.html`

### Examples

### Example (Example 1)

```vue
<uni-table border stripe emptyText="暂无更多数据" >
	<!-- 表头行 -->
	<uni-tr>
		<uni-th align="center">日期</uni-th>
		<uni-th align="center">姓名</uni-th>
		<uni-th align="left">地址</uni-th>
	</uni-tr>
	<!-- 表格数据行 -->
	<uni-tr>
		<uni-td>2020-10-20</uni-td>
		<uni-td>Jeson</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>
	<uni-tr>
		<uni-td>2020-10-21</uni-td>
		<uni-td>HanMeiMei</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>
	<uni-tr>
		<uni-td>2020-10-22</uni-td>
		<uni-td>LiLei</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>
	<uni-tr>
		<uni-td>2020-10-23</uni-td>
		<uni-td>Danner</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>

</uni-table>
```

### Example (Example 2)

```html
<uni-table border stripe emptyText="暂无更多数据" >
	<!-- 表头行 -->
	<uni-tr>
		<uni-th align="center">日期</uni-th>
		<uni-th align="center">姓名</uni-th>
		<uni-th align="left">地址</uni-th>
	</uni-tr>
	<!-- 表格数据行 -->
	<uni-tr>
		<uni-td>2020-10-20</uni-td>
		<uni-td>Jeson</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>
	<uni-tr>
		<uni-td>2020-10-21</uni-td>
		<uni-td>HanMeiMei</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>
	<uni-tr>
		<uni-td>2020-10-22</uni-td>
		<uni-td>LiLei</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>
	<uni-tr>
		<uni-td>2020-10-23</uni-td>
		<uni-td>Danner</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>

</uni-table>
```

### Example (Example 3)

```vue
e = {
	filterType: "", //筛选类型 search/select/range 和传入的相同
	filter: "" // 值, filterType=search字符串类型，filterType=select数组类型，filterType=range数组类型，[0]开始值， [1]结束值
}
```

### Example (Example 4)

```javascript
e = {
	filterType: "", //筛选类型 search/select/range 和传入的相同
	filter: "" // 值, filterType=search字符串类型，filterType=select数组类型，filterType=range数组类型，[0]开始值， [1]结束值
}
```

### Example (Example 5)

```vue
<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe type="selection" emptyText="暂无更多数据" @selection-change="selectionChange">
				<uni-tr>
					<uni-th width="150" align="center">日期</uni-th>
					<uni-th width="150" align="center">姓名</uni-th>
					<uni-th align="center">地址</uni-th>
					<uni-th width="204" align="center">设置</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td>{{ item.date }}</uni-td>
					<uni-td>
						<view class="name">{{ item.name }}</view>
					</uni-td>
					<uni-td align="center">{{ item.address }}</uni-td>
					<uni-td>
						<view class="uni-group">
							<button class="uni-button" size="mini" type="primary">修改</button>
							<button class="uni-button" size="mini" type="warn">删除</button>
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>
			<view class="uni-pagination-box"><uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" /></view>
		</view>
	</view>
</template>
```

### Example (Example 6)

```html
<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe type="selection" emptyText="暂无更多数据" @selection-change="selectionChange">
				<uni-tr>
					<uni-th width="150" align="center">日期</uni-th>
					<uni-th width="150" align="center">姓名</uni-th>
					<uni-th align="center">地址</uni-th>
					<uni-th width="204" align="center">设置</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td>{{ item.date }}</uni-td>
					<uni-td>
						<view class="name">{{ item.name }}</view>
					</uni-td>
					<uni-td align="center">{{ item.address }}</uni-td>
					<uni-td>
						<view class="uni-group">
							<button class="uni-button" size="mini" type="primary">修改</button>
							<button class="uni-button" size="mini" type="warn">删除</button>
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>
			<view class="uni-pagination-box"><uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" /></view>
		</view>
	</view>
</template>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-table.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=table)
- [Local Example](examples/uni-ui/uni-table.vue)
