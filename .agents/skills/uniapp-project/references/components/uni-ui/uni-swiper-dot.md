# uni-swiper-dot

## Instructions

组件名：uni-swiper-dot

代码块： uSwiperDot

点击下载&安装

### Syntax

- 使用 `<uni-swiper-dot />`（或 `<uni-swiper-dot></uni-swiper-dot>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| current | Number | 0 | 当前指示点索引，必须是通过 swiper 的 change 事件获取到的 e.detail.current |
| mode | String | default | 指示点的类型，可选值：default 、round 、nav 、 indexes |
| field | String | - | mode 为 nav 时，显示的内容字段（mode = nav 时必填） |
| info | Array | - | 轮播图的数据，通过数组长度决定指示点个数 |
| dotsStyles | Object | - | 指示点样式 |

#### Events

See official docs for full events list: `https://uniapp.dcloud.net.cn/component/uniui/uni-swiper-dot.html`

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-swiper-dot.html`

### Examples

### Example (Example 1)

```vue
<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
	<swiper class="swiper-box" @change="change">
		<swiper-item v-for="(item ,index) in info" :key="index">
			<view class="swiper-item">
				{{item.content}}
			</view>
		</swiper-item>
	</swiper>
</uni-swiper-dot>
```

### Example (Example 2)

```html
<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
	<swiper class="swiper-box" @change="change">
		<swiper-item v-for="(item ,index) in info" :key="index">
			<view class="swiper-item">
				{{item.content}}
			</view>
		</swiper-item>
	</swiper>
</uni-swiper-dot>
```

### Example (Example 3)

```vue
export default {
	data() {
		return {
			info: [{
				content: '内容 A'
			}, {
				content: '内容 B'
			}, {
				content: '内容 C'
			}],
			current: 0,
			mode: 'round',
		}
	},
	methods: {
		change(e) {
			this.current = e.detail.current;
		}
	}
}
```

### Example (Example 4)

```javascript
export default {
	data() {
		return {
			info: [{
				content: '内容 A'
			}, {
				content: '内容 B'
			}, {
				content: '内容 C'
			}],
			current: 0,
			mode: 'round',
		}
	},
	methods: {
		change(e) {
			this.current = e.detail.current;
		}
	}
}
```

### Example (Example 5)

```vue
<template>
	<view class="content">
		<uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :info="info" :current="current" :mode="mode"
			:dots-styles="dotsStyles" field="content">
			<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
				<swiper-item v-for="(item, index) in 3" :key="index">
					<view class="swiper-item" :class="'swiper-item' + index">
						<text style="color: #fff; font-size: 32px;">{{index+1}}</text>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<uni-section title="模式选择" type="line">
			<view class="example-body">
				<view :class="{ active: modeIndex === 0 }" class="example-body-item" @click="selectMode('default', 0)">
					<text class="example-body-item-text">default</text></view>
				<view :class="{ active: modeIndex === 1 }" class="example-body-item" @click="selectMode('dot', 1)"><text
						class="example-body-item-text">dot</text></view>
				<view :class="{ active: modeIndex === 2 }" class="example-body-item" @click="selectMode('round', 2)">
					<text class="example-body-item-text">round</text></view>
				<view :class="{ active: modeIndex === 3 }" class="example-body-item" @click="selectMode('nav', 3)"><text
						class="example-body-item-text">nav</text></view>
				<view :class="{ active: modeIndex === 4 }" class="example-body-item" @click="selectMode('indexes', 4)">
					<text class="example-body-item-text">indexes</text></view>
			</view>
		</uni-section>

		<uni-section title="颜色样式选择" type="line">
			<view class="example-body">
				<template v-if="mode !== 'nav'">
					<view v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index"
						class="example-body-item" @click="selectStyle(index)">
						<view :style="{ 'background-color': item.selectedBackgroundColor, border: item.selectedBorder }"
							class="example-body-dots" />
						<view :style="{ 'background-color': item.backgroundColor, border: item.border }"
							class="example-body-dots" />
						<view :style="{ 'background-color': item.backgroundColor, border: item.border }"
							class="example-body-dots" />
					</view>
				</template>
				<template v-if="mode === 'nav'">
					<view v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index"
						:style="{ 'background-color': item.selectedBackgroundColor }" class="example-body-item"
						@click="selectStyle(index)">
						<text class="example-body-item-text" :style="{ color: item.color }">内容</text>
					</view>
				</template>
			</view>
		</uni-section>

	</view>
</template>
```

### Example (Example 6)

```html
<template>
	<view class="content">
		<uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :info="info" :current="current" :mode="mode"
			:dots-styles="dotsStyles" field="content">
			<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
				<swiper-item v-for="(item, index) in 3" :key="index">
					<view class="swiper-item" :class="'swiper-item' + index">
						<text style="color: #fff; font-size: 32px;">{{index+1}}</text>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<uni-section title="模式选择" type="line">
			<view class="example-body">
				<view :class="{ active: modeIndex === 0 }" class="example-body-item" @click="selectMode('default', 0)">
					<text class="example-body-item-text">default</text></view>
				<view :class="{ active: modeIndex === 1 }" class="example-body-item" @click="selectMode('dot', 1)"><text
						class="example-body-item-text">dot</text></view>
				<view :class="{ active: modeIndex === 2 }" class="example-body-item" @click="selectMode('round', 2)">
					<text class="example-body-item-text">round</text></view>
				<view :class="{ active: modeIndex === 3 }" class="example-body-item" @click="selectMode('nav', 3)"><text
						class="example-body-item-text">nav</text></view>
				<view :class="{ active: modeIndex === 4 }" class="example-body-item" @click="selectMode('indexes', 4)">
					<text class="example-body-item-text">indexes</text></view>
			</view>
		</uni-section>

		<uni-section title="颜色样式选择" type="line">
			<view class="example-body">
				<template v-if="mode !== 'nav'">
					<view v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index"
						class="example-body-item" @click="selectStyle(index)">
						<view :style="{ 'background-color': item.selectedBackgroundColor, border: item.selectedBorder }"
							class="example-body-dots" />
						<view :style="{ 'background-color': item.backgroundColor, border: item.border }"
							class="example-body-dots" />
						<view :style="{ 'background-color': item.backgroundColor, border: item.border }"
							class="example-body-dots" />
					</view>
				</template>
				<template v-if="mode === 'nav'">
					<view v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index"
						:style="{ 'background-color': item.selectedBackgroundColor }" class="example-body-item"
						@click="selectStyle(index)">
						<text class="example-body-item-text" :style="{ color: item.color }">内容</text>
					</view>
				</template>
			</view>
		</uni-section>

	</view>
</template>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-swiper-dot.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=swiper-dot)
- [Local Example](examples/uni-ui/uni-swiper-dot.vue)
