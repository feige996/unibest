# uni-load-more

## Instructions

组件名：uni-load-more

代码块： uLoadMore

点击下载&安装

### Syntax

- 使用 `<uni-load-more />`（或 `<uni-load-more></uni-load-more>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 可选值 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| iconSize | Number | - | 24 | 指定图标大小 |
| status | String | more/loading/noMore | more | loading 的状态 |
| showIcon | Boolean | - | true | 是否显示 loading 图标 |
| showText | Boolean | - | true | **[1.3.3新增]**是否显示文本 |
| iconType | String | snow/circle/auto | auto | 指定图标样式 |
| color | String | - | #777777 | 图标和文字颜色 |
| contentText | Object | - | {contentdown: "上拉显示更多",contentrefresh: "正在加载...",contentnomore: "没有更多数据了"} | 各状态文字说明 |

#### Events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| clickLoadMore | 点击加载更多时触发 | e.detail={status:'loading'} |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-load-more.html`

### Examples

### Example (Example 1)

```vue
<uni-load-more status="more"></uni-load-more>
```

### Example (Example 2)

```html
<uni-load-more status="more"></uni-load-more>
```

### Example (Example 3)

```vue
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">加载更多组件用于页面加载更多数据时，页面底部显示内容等场景</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<uni-load-more :status="status" />
		</uni-section>
		<uni-section title="修改默认文字" type="line">
			<uni-load-more :status="status" :content-text="contentText" />
		</uni-section>
		<uni-section title="改变颜色" type="line">
			<uni-load-more color="#007AFF" :status="status" />
		</uni-section>
		<uni-section title="指定加载图标样式 - 按平台自动选择样式" type="line">
			<uni-load-more iconType="auto" :status="status" />
		</uni-section>
		<uni-section title="指定加载图标样式 - 环形" type="line">
			<uni-load-more iconType="circle" :status="status" />
		</uni-section>

		<uni-section title="改变组件状态" type="line">
			<radio-group class="uni-list" @change="onChange">
				<view v-for="(item, index) in statusTypes" :key="index" class="uni-list-item">
					<view class="uni-list-item__container">
						<view class="uni-list-item__content">
							<text class="uni-list-item__content-title">{{ item.text }}</text>
						</view>
						<view class="uni-list-item__extra">
							<radio :value="item.value" :checked="item.checked" />
						</view>
					</view>
				</view>
			</radio-group>
		</uni-section>

	</view>
</template>
```

### Example (Example 4)

```html
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">加载更多组件用于页面加载更多数据时，页面底部显示内容等场景</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<uni-load-more :status="status" />
		</uni-section>
		<uni-section title="修改默认文字" type="line">
			<uni-load-more :status="status" :content-text="contentText" />
		</uni-section>
		<uni-section title="改变颜色" type="line">
			<uni-load-more color="#007AFF" :status="status" />
		</uni-section>
		<uni-section title="指定加载图标样式 - 按平台自动选择样式" type="line">
			<uni-load-more iconType="auto" :status="status" />
		</uni-section>
		<uni-section title="指定加载图标样式 - 环形" type="line">
			<uni-load-more iconType="circle" :status="status" />
		</uni-section>

		<uni-section title="改变组件状态" type="line">
			<radio-group class="uni-list" @change="onChange">
				<view v-for="(item, index) in statusTypes" :key="index" class="uni-list-item">
					<view class="uni-list-item__container">
						<view class="uni-list-item__content">
							<text class="uni-list-item__content-title">{{ item.text }}</text>
						</view>
						<view class="uni-list-item__extra">
							<radio :value="item.value" :checked="item.checked" />
						</view>
					</view>
				</view>
			</radio-group>
		</uni-section>

	</view>
</template>
```

### Example (Example 5)

```html
<script>
	export default {
		components: {},
		data() {
			return {
				status: 'more',
				statusTypes: [{
					value: 'more',
					text: '加载前',
					checked: true
				}, {
					value: 'loading',
					text: '加载中',
					checked: false
				}, {
					value: 'noMore',
					text: '没有更多',
					checked: false
				}],
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			}
		},
		methods: {
			onChange(e) {
				this.status = e.detail.value
			},
			clickLoadMore(e) {
				uni.showToast({
					icon: 'none',
					title: "当前状态：" + e.detail.status
				})
			}
		}
	}
</script>
```

### Example (Example 6)

```html
<style lang="scss">
	.uni-list-item {
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #eee;
		font-size: 14px;
	}

	.uni-list-item__container {
		/* #ifndef APP-NVUE */
		display: flex;
		width: 100%;
		box-sizing: border-box;
		/* #endif */
		padding: 12px 15px;
		flex: 1;
		position: relative;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-list-item__content-title {
		font-size: 14px;
		color: #666;
	}
</style>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-load-more.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=load-more)
- [Local Example](examples/uni-ui/uni-load-more.vue)
