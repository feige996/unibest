# form

## Instructions

表单，将组件内的用户输入的 <switch> <input> <checkbox> <slider> <radio> <picker> 提交。

当点击 <form> 表单中 formType 为 submit 的 <button> 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。

属性说明

### Syntax

- 使用 `<form />`（或 `<form></form>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 说明 | 平台差异说明 |
| --- | --- | --- | --- |
| report-submit | Boolean | 是否返回 formId 用于发送 模板消息 | 微信小程序、支付宝小程序 |
| report-submit-timeout | number | 等待一段时间（毫秒数）以确认 formId 是否生效。如果未指定这个参数，formId 有很小的概率是无效的（如遇到网络失败的情况）。指定这个参数将可以检测 formId 是否有效，以这个参数的时间作为这项检测的超时时间。如果失败，将返回 requestFormId:fail 开头的 formId | 微信小程序2.6.2 |

#### Events

| 事件名 | 类型 | 说明 | 平台差异说明 |
| --- | --- | --- | --- |
| @submit | EventHandle | 携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}，report-submit 为 true 时才会返回 formId |  |
| @reset | EventHandle | 表单重置时会触发 reset 事件 |  |

#### Platform Compatibility

See official docs for platform support table: `https://doc.dcloud.net.cn/uni-app-x/component/form.html`

### Examples

### Example (Example 1)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view>
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="title">switch</view>
					<view>
						<switch name="switch" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">radio</view>
					<radio-group name="radio">
						<label>
							<radio value="radio1" /><text>选项一</text>
						</label>
						<label>
							<radio value="radio2" /><text>选项二</text>
						</label>
					</radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">checkbox</view>
					<checkbox-group name="checkbox">
						<label>
							<checkbox value="checkbox1" /><text>选项一</text>
						</label>
						<label>
							<checkbox value="checkbox2" /><text>选项二</text>
						</label>
					</checkbox-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">slider</view>
					<slider value="50" name="slider" show-value></slider>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">input</view>
					<input class="uni-input" name="input" placeholder="这是一个输入框" />
				</view>
				<view class="uni-btn-v">
					<button form-type="submit">Submit</button>
					<button type="default" form-type="reset">Reset</button>
				</view>
			</form>
		</view>
	</view>
</template>
```

### Example (Example 2)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view>
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="title">switch</view>
					<view>
						<switch name="switch" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">radio</view>
					<radio-group name="radio">
						<label>
							<radio value="radio1" /><text>选项一</text>
						</label>
						<label>
							<radio value="radio2" /><text>选项二</text>
						</label>
					</radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">checkbox</view>
					<checkbox-group name="checkbox">
						<label>
							<checkbox value="checkbox1" /><text>选项一</text>
						</label>
						<label>
							<checkbox value="checkbox2" /><text>选项二</text>
						</label>
					</checkbox-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">slider</view>
					<slider value="50" name="slider" show-value></slider>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">input</view>
					<input class="uni-input" name="input" placeholder="这是一个输入框" />
				</view>
				<view class="uni-btn-v">
					<button form-type="submit">Submit</button>
					<button type="default" form-type="reset">Reset</button>
				</view>
			</form>
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
			}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		}
	}
</script>
```

### Example (Example 4)

```vue
<style>
	.uni-form-item .title {
		padding: 20rpx 0;
	}
</style>
```

### Example (Example 5)

```vue
<!-- /pages/index/index.vue -->
<template>
    <view class="content">
        <form @submit="onSubmit">
            <compInput name="test" v-model="testValue"></compInput>
            <button form-type="submit">Submit</button>
        </form>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                testValue: 'Hello'
            }
        },
        methods: {
            onSubmit(e) {
                console.log(e)
            }
        }
    }
</script>
```

### Example (Example 6)

```html
<!-- /pages/index/index.vue -->
<template>
    <view class="content">
        <form @submit="onSubmit">
            <compInput name="test" v-model="testValue"></compInput>
            <button form-type="submit">Submit</button>
        </form>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                testValue: 'Hello'
            }
        },
        methods: {
            onSubmit(e) {
                console.log(e)
            }
        }
    }
</script>
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/form.html)
