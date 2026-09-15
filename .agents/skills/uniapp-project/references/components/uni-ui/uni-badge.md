# uni-badge

## Instructions

组件名：uni-badge

代码块： uBadge

点击下载&安装

### Syntax

- 使用 `<uni-badge />`（或 `<uni-badge></uni-badge>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | String | - | 角标内容 |
| type | String | default | 颜色类型，可选值：default（灰色）、primary（蓝色）、success（绿色）、warning(黄色)、error(红色) |
| size | String | small | Badge 大小，可取值：normal、small |
| is-dot | Boolean | false | 不展示数字，只有一个小点 |
| max-num | String/Numbuer | 99 | 展示封顶的数字值，超过 99 显示99+ |
| custom-style | Object | {} | 自定义 Badge 样式, 样式对象语法 |
| inverted | Boolean | false | 是否无需背景颜色，为 true 时，背景颜色将变为文字的字体颜色 |
| absolute(不支持 nvue) | String | rightTop | 开启绝对定位, 角标将定位到其包裹的标签的四个角上，可选值： rightTop(右上角)、rightBottom（右下角）、leftBottom（左下角） 、leftTop（左上角） |
| offset | Array[number] | [0, 0] | 距定位角中心点的偏移量，[-10, -10] 表示向 absolute 指定的方向偏移 10px，[10, 10] 表示向 absolute 指定的反方向偏移 10px，只有存在 absolute 属性时有效，与absolute 的值一一对应（例如：值为rightTop， 对应 offset 为 [right, Top]） |

#### Events

| 事件名 | 事件说明 | 返回参数 |
| --- | --- | --- |
| @click | 点击 Badge 触发事件 | - |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-badge.html`

### Examples

### Example (Example 1)

```vue
<uni-badge size="small" :text="100" absolute="rightBottom" type="primary">
	<button type="default">右下</button>
</uni-badge>

<uni-badge text="1"></uni-badge>

<uni-badge text="2" type="purple" @click="bindClick"></uni-badge>

<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
```

### Example (Example 2)

```html
<uni-badge size="small" :text="100" absolute="rightBottom" type="primary">
	<button type="default">右下</button>
</uni-badge>

<uni-badge text="1"></uni-badge>

<uni-badge text="2" type="purple" @click="bindClick"></uni-badge>

<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
```

### Example (Example 3)

```vue
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">数字角标通用来标记重点信息使用，如接受到新消息、有未读消息等</text>
		</uni-card>
		<uni-section title="基础用法" type="line" padding>
			<view class="example-body">
				<uni-badge class="uni-badge-left-margin" text="1" />
				<uni-badge class="uni-badge-left-margin" text="2" type="primary" />
				<uni-badge class="uni-badge-left-margin" text="34" type="success" />
				<uni-badge class="uni-badge-left-margin" text="45" type="warning" />
				<uni-badge class="uni-badge-left-margin" text="123" type="info" />
			</view>
		</uni-section>
		<uni-section title="无底色" type="line" padding>
			<view class="example-body">
				<uni-badge class="uni-badge-left-margin" :inverted="true" text="1" />
				<uni-badge class="uni-badge-left-margin" :inverted="true" text="2" type="primary" />
				<uni-badge class="uni-badge-left-margin" :inverted="true" text="34" type="success" />
				<uni-badge class="uni-badge-left-margin" :inverted="true" text="45" type="warning" />
				<uni-badge class="uni-badge-left-margin" :inverted="true" text="123" type="info" />
			</view>
		</uni-section>

		<uni-section title="自定义样式" type="line" padding>
			<view class="example-body">
				<uni-badge class="uni-badge-left-margin" text="2" type="primary"
					:customStyle="{background: '#4335d6'}" />
				<uni-badge class="uni-badge-left-margin" text="2" type="primary" :customStyle="customStyle" />
			</view>
		</uni-section>

		<uni-section title="定位: aboslute 属性" subTitle="注：在安卓端不支持 nvue" type="line" padding>
				<uni-badge class="uni-badge-left-margin" :text="value" absolute="rightTop" size="small">
					<view class="box"><text class="box-text">右上</text></view>
				</uni-badge>
		</uni-section>

		<uni-section title="偏移: offset 属性(存在 aboslute)" type="line" padding>
			<uni-badge class="uni-badge-left-margin" :text="8" absolute="rightTop" :offset="[-3, -3]" size="small">
				<view class="box"><text class="box-text">右上</text></view>
			</uni-badge>
		</uni-section>
		<uni-section title="仅显示点: is-dot 属性" type="line" padding>
			<uni-badge class="uni-badge-left-margin" :is-dot="true" :text="value" absolute="rightTop" size="small">
				<view class="box"><text class="box-text">圆点</text></view>
			</uni-badge>
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				value: 0,
				customStyle: {
					backgroundColor: '#62ed0d',
					color: '#fff'
				}
			};
		},
		mounted() {
			const timer = setInterval(() => {
				if (this.value >= 199) {
					clearInterval(timer)
					return
				}
				this.value++
			}, 100)
		}
	};
</script>

<style lang="scss">
	/* #ifdef MP-ALIPAY */
	.uni-badge {
		margin-left: 20rpx;
	}

	/* #endif */
	.example-body {
		flex-direction: row;
		justify-content: flex-start;
	}

	.uni-badge-left-margin {
		margin-left: 10px;
	}

	.uni-badge-absolute {
		margin-left: 40px;
	}

	.box {
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: #DCDFE6;
		color: #fff;
		font-size: 12px;
	}

	.box-text {
		text-align: center;
		color: #fff;
		font-size: 12px;
	}
</style>
```

### Example (Example 4)

```html
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">数字角标通用来标记重点信息使用，如接受到新消息、有未读消息等</text>
		</uni-card>
		<uni-section title="基础用法" type="line" padding>
			<view class="example-body">
				<uni-badge class="uni-badge-left-margin" text="1" />
				<uni-badge class="uni-badge-left-margin" text="2" type="primary" />
				<uni-badge class="uni-badge-left-margin" text="34" type="success" />
				<uni-badge class="uni-badge-left-margin" text="45" type="warning" />
				<uni-badge class="uni-badge-left-margin" text="123" type="info" />
			</view>
		</uni-section>
		<uni-section title="无底色" type="line" padding>
			<view class="example-body">
				<uni-badge class="uni-badge-left-margin" :inverted="true" text="1" />
				<uni-badge class="uni-badge-left-margin" :inverted="true" text="2" type="primary" />
				<uni-badge class="uni-badge-left-margin" :inverted="true" text="34" type="success" />
				<uni-badge class="uni-badge-left-margin" :inverted="true" text="45" type="warning" />
				<uni-badge class="uni-badge-left-margin" :inverted="true" text="123" type="info" />
			</view>
		</uni-section>

		<uni-section title="自定义样式" type="line" padding>
			<view class="example-body">
				<uni-badge class="uni-badge-left-margin" text="2" type="primary"
					:customStyle="{background: '#4335d6'}" />
				<uni-badge class="uni-badge-left-margin" text="2" type="primary" :customStyle="customStyle" />
			</view>
		</uni-section>

		<uni-section title="定位: aboslute 属性" subTitle="注：在安卓端不支持 nvue" type="line" padding>
				<uni-badge class="uni-badge-left-margin" :text="value" absolute="rightTop" size="small">
					<view class="box"><text class="box-text">右上</text></view>
				</uni-badge>
		</uni-section>

		<uni-section title="偏移: offset 属性(存在 aboslute)" type="line" padding>
			<uni-badge class="uni-badge-left-margin" :text="8" absolute="rightTop" :offset="[-3, -3]" size="small">
				<view class="box"><text class="box-text">右上</text></view>
			</uni-badge>
		</uni-section>
		<uni-section title="仅显示点: is-dot 属性" type="line" padding>
			<uni-badge class="uni-badge-left-margin" :is-dot="true" :text="value" absolute="rightTop" size="small">
				<view class="box"><text class="box-text">圆点</text></view>
			</uni-badge>
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				value: 0,
				customStyle: {
					backgroundColor: '#62ed0d',
					color: '#fff'
				}
			};
		},
		mounted() {
			const timer = setInterval(() => {
				if (this.value >= 199) {
					clearInterval(timer)
					return
				}
				this.value++
			}, 100)
		}
	};
</script>

<style lang="scss">
	/* #ifdef MP-ALIPAY */
	.uni-badge {
		margin-left: 20rpx;
	}

	/* #endif */
	.example-body {
		flex-direction: row;
		justify-content: flex-start;
	}

	.uni-badge-left-margin {
		margin-left: 10px;
	}

	.uni-badge-absolute {
		margin-left: 40px;
	}

	.box {
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: #DCDFE6;
		color: #fff;
		font-size: 12px;
	}

	.box-text {
		text-align: center;
		color: #fff;
		font-size: 12px;
	}
</style>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-badge.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=badge)
- [Local Example](examples/uni-ui/uni-badge.vue)
