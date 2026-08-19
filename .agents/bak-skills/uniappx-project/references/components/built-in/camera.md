# camera

## Instructions

页面内嵌的区域相机组件。注意这不是点击后全屏打开的相机。

平台差异说明

属性说明

### Syntax

- 使用 `<camera />`（或 `<camera></camera>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| mode | String | normal | 应用模式，有效值为 normal(相机模式), scanCode(扫码模式)，不支持动态修改 |  |
| resolution | string | medium | 分辨率，有效值为low, medium, high，不支持动态修改 | 微信小程序2.10.0、抖音小程序、飞书小程序 |
| device-position | String | back | 前置或后置摄像头，值为front, back |  |
| flash | String | auto | 闪光灯，值为auto, on, off, torch |  |
| frame-size | string | medium | 指定期望的相机帧数据尺寸，值为small, medium, large | 微信小程序2.7.0、快应用、支付宝小程序、抖音小程序 |
| output-dimension | String | 720P | 相机拍照，录制的分辨率。有效值为 360P、540P、720P、1080P、max。 | 支付宝小程序1.23.0 |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| @stop | EventHandle |  | 摄像头在非正常终止时触发，如退出后台等情况 |  |
| @error | EventHandle |  | 用户不允许使用摄像头时触发 |  |
| @initdone | eventhandle |  | 相机初始化完成时触发，e.detail = {maxZoom} | 微信小程序2.7.0、抖音小程序1.78.0、飞书小程序、快手小程序 |
| @ready | EventHandle |  | 相机初始化成功时触发。event.detail = {maxZoom} | 支付宝小程序1.24.3 |
| @scancode | EventHandle |  | 在扫码识别成功时触发，仅在 mode="scanCode" 时生效 | 微信小程序、支付宝小程序、抖音小程序、飞书小程序、快手小程序 |

#### Platform Compatibility

See official docs for platform support table: `https://doc.dcloud.net.cn/uni-app-x/component/camera.html`

### Examples

### Example (Example 1)

```vue
<template>
	<view>
        <camera device-position="back" flash="off" @error="error" style="width: 100%; height: 300px;"></camera>
        <button type="primary" @click="takePhoto">拍照</button>
        <view>预览</view>
        <image mode="widthFix" :src="src"></image>
    </view>
</template>
```

### Example (Example 2)

```html
<template>
	<view>
        <camera device-position="back" flash="off" @error="error" style="width: 100%; height: 300px;"></camera>
        <button type="primary" @click="takePhoto">拍照</button>
        <view>预览</view>
        <image mode="widthFix" :src="src"></image>
    </view>
</template>
```

### Example (Example 3)

```vue
export default {
    data() {
        return {
            src:""
        }
    },
    methods: {
         takePhoto() {
            const ctx = uni.createCameraContext();
            ctx.takePhoto({
                quality: 'high',
                success: (res) => {
                    this.src = res.tempImagePath
                }
            });
        },
        error(e) {
            console.log(e.detail);
        }
    }
}
```

### Example (Example 4)

```javascript
export default {
    data() {
        return {
            src:""
        }
    },
    methods: {
         takePhoto() {
            const ctx = uni.createCameraContext();
            ctx.takePhoto({
                quality: 'high',
                success: (res) => {
                    this.src = res.tempImagePath
                }
            });
        },
        error(e) {
            console.log(e.detail);
        }
    }
}
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/camera.html)
