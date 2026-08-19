# uni-file-picker

## Instructions

组件名：uni-file-picker

代码块： uFilePicker

点击下载&安装

### Syntax

- 使用 `<uni-file-picker />`（或 `<uni-file-picker></uni-file-picker>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| v-model/value | Array\Object | - | - | 组件数据，通常用来回显 ,类型由 return-type 属性决定 ， 格式见下文 |
| disabled | Boolean | false | - | 组件禁用 |
| readonly | Boolean | false | - | 组件只读，不可选择，不显示进度，不显示删除按钮 |
| return-type | String | array | array/object | 限制 value 格式，当为 object 时 ，组件只能单选，且会覆盖 |
| disable-preview | Boolean | false | - | 禁用图片预览，仅 mode:grid 生效 |
| del-icon | Boolean | true | - | 是否显示删除按钮 |
| auto-upload | Boolean | true | - | 是否自动上传，值为 false 则只触发@select,可自行上传 |
| limit | Number\String | 9 | - | 最大选择个数 ，h5 会自动忽略多选的部分 |
| title | String | - | - | 组件标题，右侧显示上传计数 |
| mode | String | list | list/grid | 选择文件后的文件列表样式 |
| file-mediatype | String | image | image/video/all | 选择文件类型,all 只支持 H5 和微信小程序平台 |
| file-extname | Array\String | - | - | 选择文件后缀，字符串的情况下需要用逗号分隔（推荐使用字符串），根据 file-mediatype 属性而不同 |
| list-styles | Object | - | - | mode:list 时的样式 |
| image-styles | Object | - | - | mode:grid 时的样式 |
| sizeType | Array | ['original', 'compressed'] | 'original', 'compressed' | original 原图，compressed 压缩图，默认二者都有 |
| sourceType | Array | ['album', 'camera'] | 'album', 'camera' | album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项 |
| dir | String | "/" | - | 需要上传到的文件夹，默认为 "/" ,即上传到根目录 |

#### Events

| 事件称名 | 说明 | 返回值 |
| --- | --- | --- |
| @select | 选择文件后触发 | 见下文 |
| @progress | 文件上传时触发 | 见下文 |
| @success | 上传成功触发 | 见下文 |
| @fail | 上传失败触发 | 见下文 |
| @delete | 文件从列表移除时触发 | 见下文 |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-file-picker.html`

### Examples

### Example (Example 1)

```vue
<uni-file-picker 
	v-model="imageValue" 
	fileMediatype="image" 
	mode="grid" 
	@select="select" 
	@progress="progress" 
	@success="success" 
	@fail="fail" 
/>
<script>
	export default {
		data() {
			return {
				imageValue:[]
			}
		},
		methods:{
			// 获取上传状态
			select(e){
				console.log('选择文件：',e)
			},
			// 获取上传进度
			progress(e){
				console.log('上传进度：',e)
			},
			
			// 上传成功
			success(e){
				console.log('上传成功')
			},
			
			// 上传失败
			fail(e){
				console.log('上传失败：',e)
			}
		}
	}
</script>
```

### Example (Example 2)

```html
<uni-file-picker 
	v-model="imageValue" 
	fileMediatype="image" 
	mode="grid" 
	@select="select" 
	@progress="progress" 
	@success="success" 
	@fail="fail" 
/>
<script>
	export default {
		data() {
			return {
				imageValue:[]
			}
		},
		methods:{
			// 获取上传状态
			select(e){
				console.log('选择文件：',e)
			},
			// 获取上传进度
			progress(e){
				console.log('上传进度：',e)
			},
			
			// 上传成功
			success(e){
				console.log('上传成功')
			},
			
			// 上传失败
			fail(e){
				console.log('上传失败：',e)
			}
		}
	}
</script>
```

### Example (Example 3)

```vue
<uni-file-picker 
	v-model="imageValue"  
	file-mediatype="image"
	mode="grid"
	file-extname="png,jpg"
	:limit="1"
	@progress="progress" 
	@success="success" 
	@fail="fail" 
	@select="select"
/>
```

### Example (Example 4)

```html
<uni-file-picker 
	v-model="imageValue"  
	file-mediatype="image"
	mode="grid"
	file-extname="png,jpg"
	:limit="1"
	@progress="progress" 
	@success="success" 
	@fail="fail" 
	@select="select"
/>
```

### Example (Example 5)

```vue
<template>
	<view>
		<uni-file-picker  ref="files" :auto-upload="false"/>
		<button @click="upload">上传文件</button>
	</view>
</template>
<script>
	export default {
		data() {},
		methods:{
			upload(){
				this.$refs.files.upload()
			}
		}
	}
</script>
```

### Example (Example 6)

```html
<template>
	<view>
		<uni-file-picker  ref="files" :auto-upload="false"/>
		<button @click="upload">上传文件</button>
	</view>
</template>
<script>
	export default {
		data() {},
		methods:{
			upload(){
				this.$refs.files.upload()
			}
		}
	}
</script>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-file-picker.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=file-picker)
- [Local Example](examples/uni-ui/uni-file-picker.vue)
