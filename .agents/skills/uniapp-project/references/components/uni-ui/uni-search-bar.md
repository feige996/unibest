# uni-search-bar

## Instructions

组件名：uni-search-bar

代码块： uSearchBar

点击下载&安装

### Syntax

- 使用 `<uni-search-bar />`（或 `<uni-search-bar></uni-search-bar>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value/v-model | StringNumber |  | 搜索栏绑定值 |
| placeholder | String | 搜索 | 搜索栏Placeholder |
| radius | Number | 10 | 搜索栏圆角，单位px |
| clearButton | String | auto | 是否显示清除按钮，可选值 always -一直显示、 auto -输入框不为空时显示、 none -一直不显示 |
| cancelButton | String | auto | 是否显示取消按钮，可选值 always -一直显示、 auto -输入框不为空时显示、 none -一直不显示 |
| cancelText | String | 取消 | 取消按钮的文字 |
| bgColor | String | #F8F8F8 | 输入框背景颜色 |
| textColor | String | #F8F8F8 | 输入时文字颜色 |
| maxlength | Number | 100 | 输入最大长度 |
| focus | Boolean | false |  |

#### Events

| 事件称名 | 说明 | 返回参数 |
| --- | --- | --- |
| @confirm | uniSearchBar 的输入框 confirm 事件，返回参数为uniSearchBar的value | e={value:Number} |
| @input | uniSearchBar 的 value 改变时触发事件，返回参数为uniSearchBar的value | e=value |
| @cancel | 点击取消按钮时触发事件，返回参数为uniSearchBar的value | e={value:Number} |
| @clear | 点击清除按钮时触发事件，返回参数为uniSearchBar的value | e={value:Number} |
| @focus | input 获取焦点时触发事件，返回参数为uniSearchBar的value | e={value:Number} |
| @blur | input 失去焦点时触发事件，返回参数为uniSearchBar的value | e={value:Number} |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-search-bar.html`

### Examples

### Example (Example 1)

```vue
<!-- 基本用法 -->
<uni-search-bar @confirm="search" @input="input" ></uni-search-bar>

<!-- v-model 用法 -->
<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input" @cancel="cancel" @change="change" @clear="clear"></uni-search-bar>

<!-- 自定义Placeholder -->
<uni-search-bar placeholder="自定placeholder" @confirm="search"></uni-search-bar>

<!-- 设置圆角 -->
<uni-search-bar :radius="100" @confirm="search"></uni-search-bar>
```

### Example (Example 2)

```html
<!-- 基本用法 -->
<uni-search-bar @confirm="search" @input="input" ></uni-search-bar>

<!-- v-model 用法 -->
<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input" @cancel="cancel" @change="change" @clear="clear"></uni-search-bar>

<!-- 自定义Placeholder -->
<uni-search-bar placeholder="自定placeholder" @confirm="search"></uni-search-bar>

<!-- 设置圆角 -->
<uni-search-bar :radius="100" @confirm="search"></uni-search-bar>
```

### Example (Example 3)

```vue
<!-- 替换组件的搜索图标 -->
<uni-search-bar placeholder="自定义searchIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
	<template v-slot:searchIcon>
		<uni-icons  color="#999999" size="18" type="home" />
	</template>
</uni-search-bar>

<!-- 替换组件的清除图标 -->
<uni-search-bar placeholder="自定义clearIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
	
	<template v-slot:clearIcon>
		<view style="color: #999999" >X</view>
	</template>
</uni-search-bar>
```

### Example (Example 4)

```html
<!-- 替换组件的搜索图标 -->
<uni-search-bar placeholder="自定义searchIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
	<template v-slot:searchIcon>
		<uni-icons  color="#999999" size="18" type="home" />
	</template>
</uni-search-bar>

<!-- 替换组件的清除图标 -->
<uni-search-bar placeholder="自定义clearIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
	
	<template v-slot:clearIcon>
		<view style="color: #999999" >X</view>
	</template>
</uni-search-bar>
```

### Example (Example 5)

```vue
<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">搜索栏组件，通常用于搜索商品、文章等。</text>
		</uni-card>

		<uni-section title="基本用法" type="line">
			<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
				@cancel="cancel" @clear="clear">
			</uni-search-bar>
			<view class="search-result">
				<text class="search-result-text">当前输入为：{{ searchValue }}</text>
			</view>

		</uni-section>

		<uni-section title="自定义样式" subTitle="使用 bgColor 属性自定义背景色" type="line">
			<uni-search-bar placeholder="自定义背景色" bgColor="#EEEEEE" @confirm="search" />
		</uni-section>
		<uni-section title="自定义icon" type="line">
			<uni-search-bar placeholder="自定义searchIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
				<uni-icons slot="searchIcon" color="#999999" size="18" type="home" />
			</uni-search-bar>
		</uni-section>
		<uni-section title="控制清除/取消按钮" subTitle="使用 clearButton 属性设置清除按钮" type="line">
			<uni-search-bar radius="5" placeholder="一直显示" clearButton="always" cancelButton="always" @confirm="search"
				@cancel="cancel" />
			<uni-search-bar class="uni-mt-10" radius="5" placeholder="自动显示隐藏" clearButton="auto" cancelButton="none" @confirm="search" />
			<uni-search-bar class="uni-mt-10" radius="100" placeholder="一直不显示" clearButton="none" cancelButton="none" @confirm="search" />
		</uni-section>
	</view>
</template>
```

### Example (Example 6)

```html
<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">搜索栏组件，通常用于搜索商品、文章等。</text>
		</uni-card>

		<uni-section title="基本用法" type="line">
			<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
				@cancel="cancel" @clear="clear">
			</uni-search-bar>
			<view class="search-result">
				<text class="search-result-text">当前输入为：{{ searchValue }}</text>
			</view>

		</uni-section>

		<uni-section title="自定义样式" subTitle="使用 bgColor 属性自定义背景色" type="line">
			<uni-search-bar placeholder="自定义背景色" bgColor="#EEEEEE" @confirm="search" />
		</uni-section>
		<uni-section title="自定义icon" type="line">
			<uni-search-bar placeholder="自定义searchIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
				<uni-icons slot="searchIcon" color="#999999" size="18" type="home" />
			</uni-search-bar>
		</uni-section>
		<uni-section title="控制清除/取消按钮" subTitle="使用 clearButton 属性设置清除按钮" type="line">
			<uni-search-bar radius="5" placeholder="一直显示" clearButton="always" cancelButton="always" @confirm="search"
				@cancel="cancel" />
			<uni-search-bar class="uni-mt-10" radius="5" placeholder="自动显示隐藏" clearButton="auto" cancelButton="none" @confirm="search" />
			<uni-search-bar class="uni-mt-10" radius="100" placeholder="一直不显示" clearButton="none" cancelButton="none" @confirm="search" />
		</uni-section>
	</view>
</template>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-search-bar.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=search-bar)
- [Local Example](examples/uni-ui/uni-search-bar.vue)
