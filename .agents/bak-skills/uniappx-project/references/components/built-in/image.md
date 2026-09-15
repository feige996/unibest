# # image

## Instructions

图片需要上传？推荐 uni-cdn ，帮你节省至少30%的 CDN 费用！ 详情 。

HarmonyOS

图片组件。

### Syntax

- 使用 `<image />`（或 `<image></image>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| src | String |  | 图片资源地址 |  |
| mode | String | 'scaleToFill' | 图片裁剪、缩放的模式 |  |
| lazy-load | Boolean | false | 图片懒加载。只针对page与scroll-view下的image有效 | 微信小程序、百度小程序、抖音小程序、飞书小程序、小红书小程序 |
| fade-show | Boolean | true | 图片显示动画效果 | 仅App-nvue 2.3.4+ Android有效 |
| webp | boolean | false | 在系统不支持webp的情况下是否单独启用webp。默认false，只支持网络资源。webp支持详见下面说明 | 微信小程序2.9.0、抖音小程序2.90.0 |
| show-menu-by-longpress | boolean | false | 开启长按图片显示识别小程序码菜单 | 微信小程序2.7.0 |
| draggable | boolean | false | 是否能拖动图片 | H5 3.1.1+、App（iOS15+） |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| @error | HandleEvent |  | 当错误发生时，发布到 AppService 的事件名，事件对象event.detail = {errMsg: 'something wrong'} |  |
| @load | HandleEvent |  | 当图片载入完毕时，发布到 AppService 的事件名，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'} |  |

#### Platform Compatibility

See official docs for platform support table: `https://doc.dcloud.net.cn/uni-app-x/component/image.html`

### Examples

### Example (Example 1)

```vue
<template>
    <view class="page">
        <view class="image-list">
            <view class="image-item" v-for="(item,index) in array" :key="index">
                <view class="image-content">
                    <image style="width: 200px; height: 200px; background-color: #eeeeee;" :mode="item.mode" :src="src"
                        @error="imageError"></image>
                </view>
                <view class="image-title">{{item.text}}</view>
            </view>
        </view>
    </view>
</template>
```

### Example (Example 2)

```vue
<template>
    <view class="page">
        <view class="image-list">
            <view class="image-item" v-for="(item,index) in array" :key="index">
                <view class="image-content">
                    <image style="width: 200px; height: 200px; background-color: #eeeeee;" :mode="item.mode" :src="src"
                        @error="imageError"></image>
                </view>
                <view class="image-title">{{item.text}}</view>
            </view>
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
            array: [{
                mode: 'scaleToFill',
                text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
            }, {
                mode: 'aspectFit',
                text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
            }, {
                mode: 'aspectFill',
                text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
            }, {
                mode: 'top',
                text: 'top：不缩放图片，只显示图片的顶部区域'
            }, {
                mode: 'bottom',
                text: 'bottom：不缩放图片，只显示图片的底部区域'
            }, {
                mode: 'center',
                text: 'center：不缩放图片，只显示图片的中间区域'
            }, {
                mode: 'left',
                text: 'left：不缩放图片，只显示图片的左边区域'
            }, {
                mode: 'right',
                text: 'right：不缩放图片，只显示图片的右边边区域'
            }, {
                mode: 'top left',
                text: 'top left：不缩放图片，只显示图片的左上边区域'
            }, {
                mode: 'top right',
                text: 'top right：不缩放图片，只显示图片的右上边区域'
            }, {
                mode: 'bottom left',
                text: 'bottom left：不缩放图片，只显示图片的左下边区域'
            }, {
                mode: 'bottom right',
                text: 'bottom right：不缩放图片，只显示图片的右下边区域'
            }],
            src: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg'
        }
    },
    methods: {
        imageError: function(e) {
            console.error('image发生error事件，携带值为' + e.detail.errMsg)
        }
    }
}
</script>
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/image.html)
