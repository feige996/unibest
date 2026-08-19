# uni-tag

## Instructions

组件名：uni-tag

代码块： uTag

点击下载&安装

### Syntax

- 使用 `<uni-tag />`（或 `<uni-tag></uni-tag>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | String | - | 标签内容 |
| size | String | normal | 大小尺寸，可选值：normal、small |
| type | String | default | 颜色类型，可选值：default（灰色）、primary（蓝色）、success（绿色）、warning(黄色)、error(红色) |
| disabled | Boolean | false | 是否为禁用状态 |
| inverted | Boolean | false | 是否无需背景颜色（空心标签） |
| customStyle | Boolean | false | 自定义颜色 ，同元素的 style 属性 |
| circle | Boolean | false | 是否为圆角 |

#### Events

| 事件称名 | 说明 | 返回值 |
| --- | --- | --- |
| @click | 点击 Tag 触发事件 | - |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-tag.html`

### Examples

### Example (Example 1)

```vue
<uni-tag text="标签"></uni-tag>
<uni-tag text="标签" type="error" :circle="true"></uni-tag>
<uni-tag text="标签" @click="bindClick"></uni-tag>
```

### Example (Example 2)

```html
<uni-tag text="标签"></uni-tag>
<uni-tag text="标签" type="error" :circle="true"></uni-tag>
<uni-tag text="标签" @click="bindClick"></uni-tag>
```

### Example (Example 3)

```vue
<template>
	<view class="container">
		<uni-card is-full>
			<text class="uni-h6">标签组件多用于商品分类、重点内容显示等场景。</text>
		</uni-card>

		<uni-section title="实心标签" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag text="标签" type="primary" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="success" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="warning" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="error" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" />
				</view>
			</view>
		</uni-section>

		<uni-section title="空心标签" subTitle="使用 inverted 属性显示空心表签" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="primary" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="success" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="warning" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="error" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" />
				</view>
			</view>
		</uni-section>

		<uni-section title="标签尺寸" subTitle="使用 size 属性控制标签大小" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag text="标签" type="primary" size="normal" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="primary" size="small" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="primary" size="mini" />
				</view>
			</view>
		</uni-section>

		<uni-section title="圆角样式" subTitle="使用 circle 属性控制标签圆角" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :circle="true" text="标签" type="primary" />
				</view>
				<view class="tag-view">
					<uni-tag :circle="true" text="标签" type="primary" size="small" />
				</view>
				<view class="tag-view">
					<uni-tag :circle="true" text="标签" type="primary" size="mini" />
				</view>
			</view>
		</uni-section>

		<uni-section title="标记样式" subTitle="使用 mark 属性显示标记样式" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :mark="true" text="标签" type="primary" size="default" />
				</view>
				<view class="tag-view">
					<uni-tag :mark="true" text="标签" type="primary" size="small" />
				</view>
				<view class="tag-view">
					<uni-tag :mark="true" text="标签" type="primary" size="mini" />
				</view>
			</view>
		</uni-section>
		<uni-section title="不可点击状态" subTitle="使用 disabled 属性 显示禁用样式" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag disabled text="标签" type="primary" />
				</view>
			</view>
		</uni-section>

		<uni-section title="自定义样式" subTitle="使用 custom-style 属性自定义样式" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag text="自定义标签样式"
						custom-style="background-color: #4335d6; border-color: #4335d6; color: #fff;">
					</uni-tag>
				</view>
			</view>
		</uni-section>

		<uni-section title="点击事件" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :type="type" text="标签" @click="setType" />
				</view>
				<view class="tag-view">
					<uni-tag :circle="true" :inverted="inverted" text="标签" type="primary" @click="setInverted" />
				</view>
			</view>
		</uni-section>
	</view>
</template>
```

### Example (Example 4)

```html
<template>
	<view class="container">
		<uni-card is-full>
			<text class="uni-h6">标签组件多用于商品分类、重点内容显示等场景。</text>
		</uni-card>

		<uni-section title="实心标签" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag text="标签" type="primary" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="success" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="warning" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="error" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" />
				</view>
			</view>
		</uni-section>

		<uni-section title="空心标签" subTitle="使用 inverted 属性显示空心表签" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="primary" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="success" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="warning" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="error" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" />
				</view>
			</view>
		</uni-section>

		<uni-section title="标签尺寸" subTitle="使用 size 属性控制标签大小" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag text="标签" type="primary" size="normal" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="primary" size="small" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="primary" size="mini" />
				</view>
			</view>
		</uni-section>

		<uni-section title="圆角样式" subTitle="使用 circle 属性控制标签圆角" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :circle="true" text="标签" type="primary" />
				</view>
				<view class="tag-view">
					<uni-tag :circle="true" text="标签" type="primary" size="small" />
				</view>
				<view class="tag-view">
					<uni-tag :circle="true" text="标签" type="primary" size="mini" />
				</view>
			</view>
		</uni-section>

		<uni-section title="标记样式" subTitle="使用 mark 属性显示标记样式" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :mark="true" text="标签" type="primary" size="default" />
				</view>
				<view class="tag-view">
					<uni-tag :mark="true" text="标签" type="primary" size="small" />
				</view>
				<view class="tag-view">
					<uni-tag :mark="true" text="标签" type="primary" size="mini" />
				</view>
			</view>
		</uni-section>
		<uni-section title="不可点击状态" subTitle="使用 disabled 属性 显示禁用样式" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag disabled text="标签" type="primary" />
				</view>
			</view>
		</uni-section>

		<uni-section title="自定义样式" subTitle="使用 custom-style 属性自定义样式" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag text="自定义标签样式"
						custom-style="background-color: #4335d6; border-color: #4335d6; color: #fff;">
					</uni-tag>
				</view>
			</view>
		</uni-section>

		<uni-section title="点击事件" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :type="type" text="标签" @click="setType" />
				</view>
				<view class="tag-view">
					<uni-tag :circle="true" :inverted="inverted" text="标签" type="primary" @click="setInverted" />
				</view>
			</view>
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
				type: "default",
				inverted: false,
			};
		},
		methods: {
			setType() {
				let types = ["default", "primary", "success", "warning", "error"];
				let index = types.indexOf(this.type);
				types.splice(index, 1);
				let randomIndex = Math.floor(Math.random() * 4);
				this.type = types[randomIndex];
			},
			setInverted() {
				this.inverted = !this.inverted;
			},
		},
	};
</script>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-tag.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=tag)
- [Local Example](examples/uni-ui/uni-tag.vue)
