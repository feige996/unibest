# camera 组件示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/component/camera.html

## 概述

`camera` 是相机组件，用于调用设备相机进行拍照或录像。

## 基础用法

```vue
<template>
  <camera 
    device-position="back"
    @error="handleError"
  ></camera>
</template>

<script>
export default {
  methods: {
    handleError(e) {
      console.error('相机错误', e.detail)
    }
  }
}
</script>
```

## 完整示例

### 示例 1: 基本相机

```vue
<template>
  <view class="container">
    <camera 
      device-position="back"
      flash="off"
      class="camera"
      @error="handleError"
    ></camera>
    <button @click="takePhoto">拍照</button>
  </view>
</template>

<script>
export default {
  methods: {
    takePhoto() {
      const ctx = uni.createCameraContext('myCamera', this)
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          console.log('拍照成功', res.tempImagePath)
          uni.previewImage({
            urls: [res.tempImagePath]
          })
        }
      })
    },
    handleError(e) {
      console.error('相机错误', e.detail)
    }
  }
}
</script>

<style>
.camera {
  width: 100%;
  height: 500px;
}
</style>
```

### 示例 2: 拍照和录像

```vue
<template>
  <view class="container">
    <camera 
      ref="camera"
      device-position="back"
      flash="off"
      class="camera"
      @error="handleError"
    ></camera>
    <view class="controls">
      <button @click="takePhoto">拍照</button>
      <button @click="startRecord">开始录像</button>
      <button @click="stopRecord">停止录像</button>
      <button @click="switchCamera">切换摄像头</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isRecording: false
    }
  },
  methods: {
    takePhoto() {
      const ctx = uni.createCameraContext('myCamera', this)
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          console.log('拍照成功', res.tempImagePath)
        }
      })
    },
    startRecord() {
      const ctx = uni.createCameraContext('myCamera', this)
      ctx.startRecord({
        success: () => {
          this.isRecording = true
          console.log('开始录像')
        }
      })
    },
    stopRecord() {
      const ctx = uni.createCameraContext('myCamera', this)
      ctx.stopRecord({
        success: (res) => {
          this.isRecording = false
          console.log('录像成功', res.tempVideoPath)
        }
      })
    },
    switchCamera() {
      // 需要通过 ref 切换
      this.$refs.camera.switchCamera()
    },
    handleError(e) {
      console.error('相机错误', e.detail)
    }
  }
}
</script>
```

### 示例 3: 切换摄像头和闪光灯

```vue
<template>
  <view class="container">
    <camera 
      :device-position="devicePosition"
      :flash="flash"
      class="camera"
    ></camera>
    <view class="controls">
      <button @click="switchCamera">切换摄像头</button>
      <button @click="toggleFlash">切换闪光灯</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      devicePosition: 'back',
      flash: 'off'
    }
  },
  methods: {
    switchCamera() {
      this.devicePosition = this.devicePosition === 'back' ? 'front' : 'back'
    },
    toggleFlash() {
      const flashOptions = ['off', 'on', 'auto', 'torch']
      const currentIndex = flashOptions.indexOf(this.flash)
      this.flash = flashOptions[(currentIndex + 1) % flashOptions.length]
    }
  }
}
</script>
```

### 示例 4: 拍照并上传

```vue
<template>
  <view class="container">
    <camera 
      device-position="back"
      class="camera"
    ></camera>
    <button @click="takePhotoAndUpload">拍照并上传</button>
  </view>
</template>

<script>
export default {
  methods: {
    takePhotoAndUpload() {
      const ctx = uni.createCameraContext('myCamera', this)
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          // 上传图片
          uni.uploadFile({
            url: 'https://api.example.com/upload',
            filePath: res.tempImagePath,
            name: 'file',
            success: (uploadRes) => {
              const data = JSON.parse(uploadRes.data)
              console.log('上传成功', data.url)
              uni.showToast({
                title: '上传成功',
                icon: 'success'
              })
            }
          })
        }
      })
    }
  }
}
</script>
```

### 示例 5: 自定义相机界面

```vue
<template>
  <view class="container">
    <camera 
      device-position="back"
      flash="off"
      class="camera"
    ></camera>
    <view class="camera-overlay">
      <view class="camera-controls">
        <button class="control-btn" @click="switchCamera">切换</button>
        <button class="control-btn capture-btn" @click="takePhoto">拍照</button>
        <button class="control-btn" @click="toggleFlash">闪光</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      devicePosition: 'back',
      flash: 'off'
    }
  },
  methods: {
    takePhoto() {
      const ctx = uni.createCameraContext('myCamera', this)
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          uni.previewImage({
            urls: [res.tempImagePath]
          })
        }
      })
    },
    switchCamera() {
      this.devicePosition = this.devicePosition === 'back' ? 'front' : 'back'
    },
    toggleFlash() {
      const flashOptions = ['off', 'on', 'auto']
      const currentIndex = flashOptions.indexOf(this.flash)
      this.flash = flashOptions[(currentIndex + 1) % flashOptions.length]
    }
  }
}
</script>

<style>
.camera {
  width: 100%;
  height: 100vh;
}
.camera-overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
}
.camera-controls {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.control-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
}
.capture-btn {
  width: 80px;
  height: 80px;
  background-color: white;
  color: #333;
}
</style>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| device-position | String | back | 摄像头朝向，可选值：back、front |
| flash | String | off | 闪光灯，可选值：on、off、auto、torch |
| frame-size | String | medium | 指定期望的相机帧数据尺寸，可选值：small、medium、large |

## 平台兼容性

| 平台 | 支持情况 |
|------|---------|
| H5 | ❌ |
| 微信小程序 | ✅ |
| 支付宝小程序 | ✅ |
| 百度小程序 | ✅ |
| 字节跳动小程序 | ✅ |
| QQ 小程序 | ✅ |
| 快手小程序 | ✅ |
| App | ✅ |
| 快应用 | ✅ |

## 注意事项

1. H5 平台不支持此组件
2. 需要通过 `uni.createCameraContext` 创建相机上下文
3. 拍照和录像需要通过上下文方法调用
4. 建议全屏显示相机组件

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/component/camera.html
- **Camera API**: https://doc.dcloud.net.cn/uni-app-x/api/media/camera.html
