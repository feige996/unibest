# uni.chooseVideo - 选择视频示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/media/video.html#choosevideo

## 概述

`uni.chooseVideo` 用于从本地相册选择视频或使用相机拍摄视频。

## 基础用法

```javascript
uni.chooseVideo({
  success: (res) => {
    console.log('选择的视频', res.tempFilePath)
  }
})
```

## 完整示例

### 示例 1: 选择视频

```javascript
uni.chooseVideo({
  sourceType: ['album', 'camera'],
  maxDuration: 60,
  camera: 'back',
  success: (res) => {
    console.log('视频路径', res.tempFilePath)
    console.log('视频时长', res.duration, '秒')
    console.log('视频大小', res.size, '字节')
    console.log('视频高度', res.height)
    console.log('视频宽度', res.width)
  }
})
```

### 示例 2: 拍摄视频

```javascript
uni.chooseVideo({
  sourceType: ['camera'],
  maxDuration: 30,
  camera: 'back',
  success: (res) => {
    console.log('拍摄的视频', res.tempFilePath)
    // 可以预览或上传视频
  }
})
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="chooseVideo">选择视频</button>
    <button @click="recordVideo">拍摄视频</button>
    <video 
      v-if="videoSrc" 
      :src="videoSrc" 
      controls
      class="video-player"
    ></video>
  </view>
</template>

<script>
export default {
  data() {
    return {
      videoSrc: ''
    }
  },
  methods: {
    chooseVideo() {
      uni.chooseVideo({
        sourceType: ['album'],
        maxDuration: 60,
        success: (res) => {
          this.videoSrc = res.tempFilePath
          uni.showToast({
            title: '选择成功',
            icon: 'success'
          })
        },
        fail: (err) => {
          uni.showToast({
            title: '选择失败',
            icon: 'none'
          })
        }
      })
    },
    recordVideo() {
      uni.chooseVideo({
        sourceType: ['camera'],
        maxDuration: 30,
        camera: 'back',
        success: (res) => {
          this.videoSrc = res.tempFilePath
          uni.showToast({
            title: '拍摄成功',
            icon: 'success'
          })
        }
      })
    }
  }
}
</script>

<style>
.video-player {
  width: 100%;
  height: 400px;
  margin-top: 20px;
}
</style>
```

### 示例 4: 上传视频

```javascript
uni.chooseVideo({
  sourceType: ['album', 'camera'],
  maxDuration: 60,
  success: (res) => {
    const tempFilePath = res.tempFilePath
    
    // 上传视频
    uni.uploadFile({
      url: 'https://api.example.com/upload-video',
      filePath: tempFilePath,
      name: 'video',
      formData: {
        duration: res.duration,
        size: res.size
      },
      success: (uploadRes) => {
        const data = JSON.parse(uploadRes.data)
        console.log('上传成功', data.url)
        uni.showToast({
          title: '上传成功',
          icon: 'success'
        })
      },
      fail: (err) => {
        console.error('上传失败', err)
      }
    })
  }
})
```

### 示例 5: 限制视频时长和大小

```javascript
uni.chooseVideo({
  sourceType: ['album', 'camera'],
  maxDuration: 30, // 最长30秒
  success: (res) => {
    // 检查视频大小（例如限制为50MB）
    const maxSize = 50 * 1024 * 1024 // 50MB
    if (res.size > maxSize) {
      uni.showModal({
        title: '提示',
        content: '视频文件过大，请选择小于50MB的视频',
        showCancel: false
      })
      return
    }
    
    // 检查视频时长
    if (res.duration > 30) {
      uni.showModal({
        title: '提示',
        content: '视频时长不能超过30秒',
        showCancel: false
      })
      return
    }
    
    console.log('视频符合要求', res)
  }
})
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| sourceType | Array | 否 | 选择视频的来源，可选值：album（相册）、camera（相机） |
| maxDuration | Number | 否 | 拍摄视频最长拍摄时间，单位秒 |
| camera | String | 否 | 使用前置或后置摄像头，可选值：back、front |

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| tempFilePath | String | 选定视频的临时文件路径 |
| duration | Number | 选定视频的时间长度，单位秒 |
| size | Number | 选定视频的数据量大小，单位字节 |
| width | Number | 选定视频的宽度，单位 px |
| height | Number | 选定视频的高度，单位 px |

## 平台兼容性

| 平台 | 支持情况 |
|------|---------|
| H5 | ✅ |
| 微信小程序 | ✅ |
| 支付宝小程序 | ✅ |
| 百度小程序 | ✅ |
| 字节跳动小程序 | ✅ |
| QQ 小程序 | ✅ |
| 快手小程序 | ✅ |
| App | ✅ |
| 快应用 | ✅ |

## 注意事项

1. 选择的视频是临时文件，需要上传到服务器才能永久保存
2. `maxDuration` 用于限制拍摄时长
3. 可以通过 `size` 检查视频文件大小
4. 建议在拍摄前提示用户视频时长限制

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/media/video.html#choosevideo
- **上传文件**: https://doc.dcloud.net.cn/uni-app-x/api/request/network-file.html#uploadfile
