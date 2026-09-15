# button

## Instructions

按钮。

属性说明

button组件也支持style中通过css定义文字大小。 见下

### Syntax

- 使用 `<button />`（或 `<button></button>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 生效时机 | 平台差异说明 |
| --- | --- | --- | --- | --- | --- |
| size | String | default | 按钮的大小 |  |  |
| type | String | default | 按钮的样式类型 |  |  |
| plain | Boolean | false | 按钮是否镂空，背景色透明 |  |  |
| disabled | Boolean | false | 是否禁用 |  |  |
| loading | Boolean | false | 名称前是否带 loading 图标 |  | H5、App(App-nvue 平台，在 ios 上为雪花，Android上为圆圈) |
| form-type | String |  | 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件 |  |  |
| open-type | String |  | 开放能力 |  |  |
| hover-class | String | button-hover | 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果 |  | App-nvue 平台暂不支持 |
| hover-start-time | Number | 20 | 按住后多久出现点击态，单位毫秒 |  |  |
| hover-stay-time | Number | 70 | 手指松开后点击态保留时间，单位毫秒 |  |  |
| app-parameter | String |  | 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 |  | 微信小程序、QQ小程序 |
| hover-stop-propagation | boolean | false | 指定是否阻止本节点的祖先节点出现点击态 |  | 微信小程序 |
| lang | string | 'en' | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。 |  | 微信小程序 |
| session-from | string |  | 会话来源，open-type="contact"时有效 |  | 微信小程序 |
| send-message-title | string | 当前标题 | 会话内消息卡片标题，open-type="contact"时有效 |  | 微信小程序 |
| send-message-path | string | 当前分享路径 | 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效 |  | 微信小程序 |
| send-message-img | string | 截图 | 会话内消息卡片图片，open-type="contact"时有效 |  | 微信小程序 |
| show-message-card | boolean | false | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效 |  | 微信小程序 |
| group-id | String |  | 打开群资料卡时，传递的群号 | open-type="openGroupProfile" | QQ小程序 |
| guild-id | String |  | 打开频道页面时，传递的频道号 | open-type="openGuildProfile" | QQ小程序 |
| public-id | String |  | 打开公众号资料卡时，传递的号码 | open-type="openPublicProfile" | QQ小程序 |
| data-im-id | String |  | 客服的抖音号 | open-type="im" | 抖音小程序2.68.0版本+ |
| data-im-type | String |  | IM卡片类型 | open-type="im" | 抖音小程序2.80.0版本+ |
| data-goods-id | String |  | 商品的id，仅支持泛知识课程库和生活服务商品库中的商品 | open-type="im" | 抖音小程序2.80.0版本+ |
| data-order-id | String |  | 订单的id，仅支持交易2.0订单 | open-type="im" | 抖音小程序2.80.0版本+ |
| data-biz-line | String |  | 商品类型，“1”代表生活服务，“2”代表泛知识。 | open-type="im" | 抖音小程序2.80.0版本+ |
| contact-type | String |  | 客服类型，默认值 seller |  | 小红书小程序 |
| contact-id | String |  | contact-type 对应的key。contact-type 为 seller 时非必传；goods 时第三方商品 id；order时第三方订单 id。open-type=contact时有效 |  | 小红书小程序 |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 生效时机 | 平台差异说明 |
| --- | --- | --- | --- | --- | --- |
| @getphonenumber | Handler |  | 获取用户手机号回调 | open-type="getPhoneNumber" | 微信、支付宝、百度、抖音、快手、京东小程序、小红书小程序 |
| @getuserinfo | Handler |  | 用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo | open-type="getUserInfo" | 微信、QQ、百度、快手、京东小程序、小红书小程序 |
| @error | Handler |  | 当使用开放能力时，发生错误的回调 | open-type="launchApp" | 微信、QQ、快手、京东小程序 |
| @opensetting | Handler |  | 在打开授权设置页并关闭后回调 | open-type="openSetting" | 微信、QQ、百度、快手、京东小程序、小红书小程序 |
| @launchapp | Handler |  | 从小程序打开 App 成功的回调 | open-type="launchApp" | 微信、QQ、快手、京东小程序 |
| @contact | Handler |  | 客服消息回调 | open-type="contact" | 微信、QQ、百度、快手小程序 |
| @chooseavatar | Handler |  | 获取用户头像回调 | open-type="chooseAvatar" | 微信、支付宝小程序 |
| @agreeprivacyauthorization | Handler |  | 用户同意隐私协议事件回调，open-type="agreePrivacyAuthorization"时有效 | open-type="agreeprivacyauthorization" | 微信小程序2.32.3 |
| @addgroupapp | Handler |  | 添加群应用的回调 | open-type="addGroupApp" | QQ小程序 |
| @chooseaddress | Handler |  | 调起用户编辑并选择收货地址的回调 | open-type="chooseAddress" | 百度小程序 |
| @chooseinvoicetitle | Handler |  | 用户选择发票抬头的回调 | open-type="chooseInvoiceTitle" | 百度小程序 |
| @subscribe | Handler |  | 订阅消息授权回调 | open-type="subscribe" | 百度小程序 |
| @login | Handler |  | 登录回调 | open-type="login" | 百度小程序 |
| @im | Handler |  | 监听跳转IM的成功回调 | open-type="im" | 抖音小程序2.68.0版本+ |

#### Platform Compatibility

| 值 | 说明 | 平台差异说明 |
| --- | --- | --- |
| feedback | 打开“意见反馈”页面，用户可提交反馈内容并上传日志 | App、微信小程序、QQ小程序 |
| share | 触发用户转发 | 微信小程序、百度小程序、支付宝小程序、抖音小程序、飞书小程序、QQ小程序、快手小程序、京东小程序、360小程序、小红书小程序 |
| getUserInfo | 获取用户信息，可以从@getuserinfo回调中获取到用户信息 | 微信小程序、百度小程序、QQ小程序、快手小程序、京东小程序、360小程序、小红书小程序 |
| contact | 打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 @contact 回调中获得具体信息 | 微信小程序、百度小程序、快手小程序、抖音小程序、小红书小程序 |
| getPhoneNumber | 获取用户手机号，可以从@getphonenumber回调中获取到用户信息 | 微信小程序、百度小程序、抖音小程序、支付宝小程序、快手小程序、京东小程序、小红书小程序。App平台另见 一键登陆 |
| launchApp | 小程序中打开APP，可以通过app-parameter属性设定向APP传的参数 | 微信小程序 、 QQ小程序 、快手小程序、京东小程序、 鸿蒙元服务 |
| openSetting | 打开授权设置页 | 微信小程序、QQ小程序、百度小程序、快手小程序、京东小程序、360小程序、小红书小程序、鸿蒙元服务 |
| chooseAvatar | 获取用户头像，可以从@chooseavatar回调中获取到头像信息 | 微信小程序2.21.2版本+ |
| agreePrivacyAuthorization | 用户同意隐私协议按钮。用户点击一次此按钮后，所有隐私接口可以正常调用。可通过 @agreeprivacyauthorization 监听用户同意隐私协议事件。隐私合规开发指南详情可见 《小程序隐私协议开发指南》 | 微信小程序2.32.3版本+ |
| uploadDouyinVideo | 发布抖音视频 | 抖音小程序2.65.0版本+ |
| im | 跳转到抖音IM客服 | 抖音小程序2.80.0版本+ |
| getAuthorize | 支持小程序授权 | 支付宝小程序 |
| lifestyle | 关注生活号 | 支付宝小程序 |
| contactShare | 分享到通讯录好友 | 支付宝小程序基础库1.11.0版本+ |
| openGroupProfile | 呼起QQ群资料卡页面，可以通过group-id属性设定需要打开的群资料卡的群号，同时manifest.json中必须配置groupIdList | QQ小程序基础库1.4.7版本+ |
| openGuildProfile | 呼起频道页面，可以通过guild-id属性设定需要打开的频道ID | QQ小程序基础库1.46.8版本+ |
| openPublicProfile | 打开公众号资料卡，可以通过public-id属性设定需要打开的公众号资料卡的号码，同时manifest.json中必须配置publicIdList | QQ小程序基础库1.12.0版本+ |
| shareMessageToFriend | 在自定义开放数据域组件中,向指定好友发起分享据 | QQ小程序基础库1.17.0版本+ |
| addFriend | 添加好友， 对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权 | QQ小程序 |
| addColorSign | 添加彩签，点击后添加状态有用户提示，无回调 | QQ小程序基础库1.10.0版本+ |
| addGroupApp | 添加群应用（只有管理员或群主有权操作），添加后给button绑定@addgroupapp事件接收回调数据 | QQ小程序基础库1.16.0版本+ |
| addToFavorites | 收藏当前页面，点击按钮后会触发Page.onAddToFavorites方法 | QQ小程序基础库1.19.0版本+ |
| chooseAddress | 选择用户收货地址，可以从@chooseaddress回调中获取到用户选择的地址信息 | 百度小程序3.160.3版本+ |
| chooseInvoiceTitle | 选择用户发票抬头，可以从@chooseinvoicetitle回调中获取到用户选择发票抬头信息 | 百度小程序3.160.3版本+ |
| login | 登录，可以从@login回调中确认是否登录成功 | 百度小程序3.230.1版本+ |
| subscribe | 订阅类模板消息，需要用户授权才可发送 | 百度小程序 |
| favorite | 触发用户收藏 | 快手小程序 |
| watchLater | 触发用户稍后再看 | 快手小程序 |
| openProfile | 触发打开用户主页 | 快手小程序 |

### Examples

### Example (Example 1)

```vue
<template>
	<button size="default" type="default"
	style="color:#ffffff;backgroundColor:#1AAD19;borderColor:#1AAD19"
	hover-class="is-hover">按钮</button>
</template>
<style>
.is-hover {
	color: rgba(255, 255, 255, 0.6);
	background-color: #179b16;
	border-color: #179b16;
  }
</style>
```

### Example (Example 2)

```html
<template>
	<button size="default" type="default"
	style="color:#ffffff;backgroundColor:#1AAD19;borderColor:#1AAD19"
	hover-class="is-hover">按钮</button>
</template>
<style>
.is-hover {
	color: rgba(255, 255, 255, 0.6);
	background-color: #179b16;
	border-color: #179b16;
  }
</style>
```

### Example (Example 3)

```vue
<template>
	<view>
		<navigator url="/pages/about/about"><button type="default">通过navigator组件跳转到about页面</button></navigator>
		<button type="default" @click="goto('/pages/about/about')">通过方法跳转到about页面</button>
		<button type="default" @click="navigateTo('/pages/about/about')">跳转到about页面</button><!-- 这种写法只有h5平台支持，不跨端，不推荐使用 -->
	</view>
</template>
<script>
	export default {
		methods: {
			goto(url) {
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>
```

### Example (Example 4)

```html
<template>
	<view>
		<navigator url="/pages/about/about"><button type="default">通过navigator组件跳转到about页面</button></navigator>
		<button type="default" @click="goto('/pages/about/about')">通过方法跳转到about页面</button>
		<button type="default" @click="navigateTo('/pages/about/about')">跳转到about页面</button><!-- 这种写法只有h5平台支持，不跨端，不推荐使用 -->
	</view>
</template>
<script>
	export default {
		methods: {
			goto(url) {
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>
```

### Example (Example 5)

```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<button type="primary">页面主操作 Normal</button>
			<button type="primary" loading="true">页面主操作 Loading</button>
			<button type="primary" disabled="true">页面主操作 Disabled</button>
			<button type="default">页面次要操作 Normal</button>
			<button type="default" disabled="true">页面次要操作 Disabled</button>
			<button type="warn">警告类操作 Normal</button>
			<button type="warn" disabled="true">警告类操作 Disabled</button>
			<view class="button-sp-area">
				<button type="primary" plain="true">按钮</button>
				<button type="primary" disabled="true" plain="true">不可点击的按钮</button>
				<button type="default" plain="true">按钮</button>
				<button type="default" disabled="true" plain="true">按钮</button>
				<button class="mini-btn" type="primary" size="mini">按钮</button>
				<button class="mini-btn" type="default" size="mini">按钮</button>
				<button class="mini-btn" type="warn" size="mini">按钮</button>
			</view>
		</view>
	</view>
</template>
```

### Example (Example 6)

```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<button type="primary">页面主操作 Normal</button>
			<button type="primary" loading="true">页面主操作 Loading</button>
			<button type="primary" disabled="true">页面主操作 Disabled</button>
			<button type="default">页面次要操作 Normal</button>
			<button type="default" disabled="true">页面次要操作 Disabled</button>
			<button type="warn">警告类操作 Normal</button>
			<button type="warn" disabled="true">警告类操作 Disabled</button>
			<view class="button-sp-area">
				<button type="primary" plain="true">按钮</button>
				<button type="primary" disabled="true" plain="true">不可点击的按钮</button>
				<button type="default" plain="true">按钮</button>
				<button type="default" disabled="true" plain="true">按钮</button>
				<button class="mini-btn" type="primary" size="mini">按钮</button>
				<button class="mini-btn" type="default" size="mini">按钮</button>
				<button class="mini-btn" type="warn" size="mini">按钮</button>
			</view>
		</view>
	</view>
</template>
```

Reference: [Official Documentation](https://uniapp.dcloud.net.cn/component/button.html)
