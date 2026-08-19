# uni-drawer

## Instructions

组件名：uni-drawer

代码块： uDrawer

点击下载&安装

### Syntax

- 使用 `<uni-drawer />`（或 `<uni-drawer></uni-drawer>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| mask | Boolean | true | 是否显示遮罩 |
| maskClick | Boolean | true | 点击遮罩是否可以关闭抽屉 |
| mode | String | left | Drawer滑出位置，可选值：left（从左侧滑出）， right（从右侧滑出） |
| width | Number | 220 | Drawer 宽度，仅vue页面设置生效 |

#### Events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| @change | 抽屉状态发生变化触发事件 | true：抽屉已经打开；false：抽屉已经关闭； |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-drawer.html`

### Examples

### Example (Example 1)

```vue
<template>
	<view>
		<button @click="showDrawer" type="primary">右侧弹出 显示Drawer</button>
		<uni-drawer ref="showRight" mode="right" :mask-click="false">
			<scroll-view style="height: 100%;" scroll-y="true">
				<button @click="closeDrawer" type="primary">关闭Drawer</button>
				<view v-for="item in 60" :key="item">可滚动内容 {{ item }}</view>
			</scroll-view>
		</uni-drawer>
	</view>
</template>

<script>
	export default {
		methods: {
			showDrawer() {
				this.$refs.showRight.open();
			},
			closeDrawer() {
				this.$refs.showRight.close();
			}

		}
	}
</script>
```

### Example (Example 2)

```html
<template>
	<view>
		<button @click="showDrawer" type="primary">右侧弹出 显示Drawer</button>
		<uni-drawer ref="showRight" mode="right" :mask-click="false">
			<scroll-view style="height: 100%;" scroll-y="true">
				<button @click="closeDrawer" type="primary">关闭Drawer</button>
				<view v-for="item in 60" :key="item">可滚动内容 {{ item }}</view>
			</scroll-view>
		</uni-drawer>
	</view>
</template>

<script>
	export default {
		methods: {
			showDrawer() {
				this.$refs.showRight.open();
			},
			closeDrawer() {
				this.$refs.showRight.close();
			}

		}
	}
</script>
```

### Example (Example 3)

```vue
<template>
	<view>
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">这是抽屉式导航组件使用示例，可以指定菜单左侧或者右侧弹出（仅初始化生效），组件内部可以放置任何内容。点击页面按钮即可显示导航菜单。</text>
		</uni-card>

		<uni-section title="左侧滑出" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showLeft')"><text class="word-btn-white">显示Drawer</text>
				</button>
				<uni-drawer ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
					<view class="close">
						<button @click="closeDrawer('showLeft')"><text class="word-btn-white">关闭Drawer</text></button>
					</view>
				</uni-drawer>
			</view>
		</uni-section>

		<uni-section title="右侧滑出" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showRight')"><text class="word-btn-white">显示Drawer</text>
				</button>
				<uni-drawer ref="showRight" mode="right" :mask-click="false" @change="change($event,'showRight')">
					<view class="scroll-view">
						<scroll-view class="scroll-view-box" scroll-y="true">
							<view class="info">
								<text class="info-text">右侧遮罩只能通过按钮关闭，不能通过点击遮罩关闭</text>
							</view>
							<view class="close">
								<button @click="closeDrawer('showRight')"><text class="word-btn-white">关闭Drawer</text></button>
							</view>
							<view class="info-content" v-for="item in 100" :key="item">
								<text>可滚动内容 {{item}}</text>
							</view>
							<view class="close">
								<button  @click="closeDrawer('showRight')"><text class="word-btn-white">关闭Drawer</text></button>
							</view>
						</scroll-view>
					</view>
				</uni-drawer>
			</view>
		</uni-section>
	</view>
</template>
```

### Example (Example 4)

```html
<template>
	<view>
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">这是抽屉式导航组件使用示例，可以指定菜单左侧或者右侧弹出（仅初始化生效），组件内部可以放置任何内容。点击页面按钮即可显示导航菜单。</text>
		</uni-card>

		<uni-section title="左侧滑出" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showLeft')"><text class="word-btn-white">显示Drawer</text>
				</button>
				<uni-drawer ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
					<view class="close">
						<button @click="closeDrawer('showLeft')"><text class="word-btn-white">关闭Drawer</text></button>
					</view>
				</uni-drawer>
			</view>
		</uni-section>

		<uni-section title="右侧滑出" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showRight')"><text class="word-btn-white">显示Drawer</text>
				</button>
				<uni-drawer ref="showRight" mode="right" :mask-click="false" @change="change($event,'showRight')">
					<view class="scroll-view">
						<scroll-view class="scroll-view-box" scroll-y="true">
							<view class="info">
								<text class="info-text">右侧遮罩只能通过按钮关闭，不能通过点击遮罩关闭</text>
							</view>
							<view class="close">
								<button @click="closeDrawer('showRight')"><text class="word-btn-white">关闭Drawer</text></button>
							</view>
							<view class="info-content" v-for="item in 100" :key="item">
								<text>可滚动内容 {{item}}</text>
							</view>
							<view class="close">
								<button  @click="closeDrawer('showRight')"><text class="word-btn-white">关闭Drawer</text></button>
							</view>
						</scroll-view>
					</view>
				</uni-drawer>
			</view>
		</uni-section>
	</view>
</template>
```

### Example (Example 5)

```html
<script>
	export default {
		data() {
			return {
				showRight: false,
				showLeft: false
			}
		},
		methods: {
			confirm() {},
			// 打开窗口
			showDrawer(e) {
				this.$refs[e].open()
			},
			// 关闭窗口
			closeDrawer(e) {
				this.$refs[e].close()
			},
			// 抽屉状态发生变化触发
			change(e, type) {
				console.log((type === 'showLeft' ? '左窗口' : '右窗口') + (e ? '打开' : '关闭'));
				this[type] = e
			}
		},
		onNavigationBarButtonTap(e) {
			if (this.showLeft) {
				this.$refs.showLeft.close()
			} else {
				this.$refs.showLeft.open()
			}
		},
		// app端拦截返回事件 ，仅app端生效
		onBackPress() {
			if (this.showRight || this.showLeft) {
				this.$refs.showLeft.close()
				this.$refs.showRight.close()
				return true
			}
		}
	}
</script>
```

### Example (Example 6)

```html
<style lang="scss">
.example-body {
	padding: 10px;
}
.scroll-view {
	/* #ifndef APP-NVUE */
	width: 100%;
	height: 100%;
	/* #endif */
	flex:1
}
// 处理抽屉内容滚动
.scroll-view-box {
	flex: 1;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
.info {
	padding: 15px;
	color: #666;
}

.info-text {
	font-size: 14px;
	color: #666;
}
.info-content {
	padding: 5px 15px;
}
.close {
	padding: 10px;
}
</style>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-drawer.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=drawer)
- [Local Example](examples/uni-ui/uni-drawer.vue)
