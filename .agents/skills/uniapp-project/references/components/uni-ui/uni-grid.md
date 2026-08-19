# uni-grid

## Instructions

组件名：uni-grid

代码块： uGrid

点击下载&安装

### Syntax

- 使用 `<uni-grid />`（或 `<uni-grid></uni-grid>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| column | Number | 3 | 每列显示个数 |
| borderColor | String | #d0dee5 | 边框颜色 |
| showBorder | Boolean | true | 是否显示边框 |
| square | Boolean | true | 是否方形显示 |
| highlight | Boolean | true | 点击背景是否高亮 |

#### Events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| @change | 点击 grid 触发 | e={detail:{index:0}}，index 为当前点击 grid下标 |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-grid.html`

### Examples

### Example (Example 1)

```vue
<uni-grid :column="3">
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
</uni-grid>
```

### Example (Example 2)

```html
<uni-grid :column="3">
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
</uni-grid>
```

### Example (Example 3)

```vue
<uni-grid :column="3" :showBorder="false"  :square="false">
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
</uni-grid>
```

### Example (Example 4)

```html
<uni-grid :column="3" :showBorder="false"  :square="false">
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
</uni-grid>
```

### Example (Example 5)

```vue
<template>
	<view class="warp">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">宫格组件主要使用场景如：商品推荐列表、热门内容等</text>
		</uni-card>
		<uni-section title="基础样式" type="line" padding>
			<uni-grid :column="4" :highlight="true" @change="change">
				<uni-grid-item v-for="(item, index) in 4" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<uni-icons type="image" :size="30" color="#777" />
						<text class="text">文本信息</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="自定义列数" type="line" padding>
			<uni-grid :column="4" :highlight="true" @change="change">
				<uni-grid-item v-for="(item, index) in 8" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<uni-icons type="image" :size="30" color="#777" />
						<text class="text">文本信息</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>

		<uni-section title="滑动视图" type="line" padding>
			<!-- 因为swiper特性的关系，请指定swiper的高度 ，swiper的高度并不会被内容撑开-->
			<swiper class="swiper" :indicator-dots="true">
				<swiper-item>
					<uni-grid :column="3" :highlight="true" @change="change">
						<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
							<view class="grid-item-box">
								<image :src="item.url" class="image" mode="aspectFill" />
								<text class="text">{{ item.text }}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</swiper-item>
				<swiper-item>
					<uni-grid :column="3" :highlight="true" @change="change">
						<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
							<view class="grid-item-box">
								<image :src="item.url" class="image" mode="aspectFill" />
								<text class="text">{{ item.text }}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</swiper-item>
				<swiper-item>
					<uni-grid :column="3" :highlight="true" @change="change">
						<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
							<view class="grid-item-box">
								<image :src="item.url" class="image" mode="aspectFill" />
								<text class="text">{{ item.text }}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</swiper-item>
			</swiper>
		</uni-section>
		<uni-section title="动态加载" type="line" padding>
			<view class="grid-dynamic-box">
				<uni-grid :column="3" :highlight="true" @change="change">
					<uni-grid-item v-for="(item, index) in dynamicList" :index="index" :key="index">
						<view class="grid-item-box" :style="{'backgroundColor':item.color}">
							<image :src="item.url" class="image" mode="aspectFill" />
							<text class="text">{{ item.text }}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
			<button type="primary" @click="add">点击添加一个宫格</button>
			<button v-if="dynamicList.length !== 0" type="primary" style="margin-top: 15px;"
				@click="del">点击删除一个宫格</button>
		</uni-section>
		<uni-section title="无边框带角标（3列）" type="line" padding>
			<uni-grid :column="3" :show-border="false" :square="false" @change="change">
				<uni-grid-item v-for="(item ,index) in list" :index="index" :key="index">
					<view class="grid-item-box">
						<image class="image" :src="item.url" mode="aspectFill" />
						<text class="text">{{item.text}}</text>
						<view v-if="item.badge" class="grid-dot">
							<uni-badge :text="item.badge" :type="item.type" />
						</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="矩形宫格（3列）" type="line" padding>
			<uni-grid :column="3" :square="false" :highlight="false" @change="change">
				<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.url" class="image" mode="aspectFill" />
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="边框颜色（4列 无文字）" type="line" padding>
			<uni-grid :column="4" border-color="#03a9f4" @change="change">
				<uni-grid-item :index="0">
					<view class="grid-item-box">
						<image class="image" src="/static/c1.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
				<uni-grid-item :index="1">
					<view class="grid-item-box">
						<image class="image" src="/static/c2.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
				<uni-grid-item :index="2">
					<view class="grid-item-box">
						<image class="image" src="/static/c3.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
				<uni-grid-item :index="3">
					<view class="grid-item-box">
						<image class="image" src="/static/c4.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
	</view>
</template>
```

### Example (Example 6)

```html
<template>
	<view class="warp">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">宫格组件主要使用场景如：商品推荐列表、热门内容等</text>
		</uni-card>
		<uni-section title="基础样式" type="line" padding>
			<uni-grid :column="4" :highlight="true" @change="change">
				<uni-grid-item v-for="(item, index) in 4" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<uni-icons type="image" :size="30" color="#777" />
						<text class="text">文本信息</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="自定义列数" type="line" padding>
			<uni-grid :column="4" :highlight="true" @change="change">
				<uni-grid-item v-for="(item, index) in 8" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<uni-icons type="image" :size="30" color="#777" />
						<text class="text">文本信息</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>

		<uni-section title="滑动视图" type="line" padding>
			<!-- 因为swiper特性的关系，请指定swiper的高度 ，swiper的高度并不会被内容撑开-->
			<swiper class="swiper" :indicator-dots="true">
				<swiper-item>
					<uni-grid :column="3" :highlight="true" @change="change">
						<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
							<view class="grid-item-box">
								<image :src="item.url" class="image" mode="aspectFill" />
								<text class="text">{{ item.text }}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</swiper-item>
				<swiper-item>
					<uni-grid :column="3" :highlight="true" @change="change">
						<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
							<view class="grid-item-box">
								<image :src="item.url" class="image" mode="aspectFill" />
								<text class="text">{{ item.text }}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</swiper-item>
				<swiper-item>
					<uni-grid :column="3" :highlight="true" @change="change">
						<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
							<view class="grid-item-box">
								<image :src="item.url" class="image" mode="aspectFill" />
								<text class="text">{{ item.text }}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</swiper-item>
			</swiper>
		</uni-section>
		<uni-section title="动态加载" type="line" padding>
			<view class="grid-dynamic-box">
				<uni-grid :column="3" :highlight="true" @change="change">
					<uni-grid-item v-for="(item, index) in dynamicList" :index="index" :key="index">
						<view class="grid-item-box" :style="{'backgroundColor':item.color}">
							<image :src="item.url" class="image" mode="aspectFill" />
							<text class="text">{{ item.text }}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
			<button type="primary" @click="add">点击添加一个宫格</button>
			<button v-if="dynamicList.length !== 0" type="primary" style="margin-top: 15px;"
				@click="del">点击删除一个宫格</button>
		</uni-section>
		<uni-section title="无边框带角标（3列）" type="line" padding>
			<uni-grid :column="3" :show-border="false" :square="false" @change="change">
				<uni-grid-item v-for="(item ,index) in list" :index="index" :key="index">
					<view class="grid-item-box">
						<image class="image" :src="item.url" mode="aspectFill" />
						<text class="text">{{item.text}}</text>
						<view v-if="item.badge" class="grid-dot">
							<uni-badge :text="item.badge" :type="item.type" />
						</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="矩形宫格（3列）" type="line" padding>
			<uni-grid :column="3" :square="false" :highlight="false" @change="change">
				<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.url" class="image" mode="aspectFill" />
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="边框颜色（4列 无文字）" type="line" padding>
			<uni-grid :column="4" border-color="#03a9f4" @change="change">
				<uni-grid-item :index="0">
					<view class="grid-item-box">
						<image class="image" src="/static/c1.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
				<uni-grid-item :index="1">
					<view class="grid-item-box">
						<image class="image" src="/static/c2.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
				<uni-grid-item :index="2">
					<view class="grid-item-box">
						<image class="image" src="/static/c3.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
				<uni-grid-item :index="3">
					<view class="grid-item-box">
						<image class="image" src="/static/c4.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
	</view>
</template>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-grid.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=grid)
- [Local Example](examples/uni-ui/uni-grid.vue)
