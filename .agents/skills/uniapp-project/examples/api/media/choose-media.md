# uni.chooseMedia - 选择媒体文件示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/media/video.html#choosemedia

## 概述

`uni.chooseMedia` 用于从本地相册选择图片或视频，或者使用相机拍摄图片或视频。

## 基础用法

```javascript
uni.chooseMedia({
  count: 9,
  success: (res) => {
    console.log('选择的文件', res.tempFiles)
  }
})
```

## 完整示例

### 示例 1: 选择图片和视频

```javascript
uni.chooseMedia({
  count: 9,
  mediaType: ['image', 'video'],
  sourceType: ['album', 'camera'],
  success: (res) => {
    console.log('选择的文件', res.tempFiles)
    res.tempFiles.forEach((file, index) => {
      console.log(`文件${index + 1}:`, file.tempFilePath)
      if (file.fileType === 'image') {
        console.log('图片大小', file.size)
      } else if (file.fileType === 'video') {
        console.log('视频时长', file.duration)
      }
    })
  }
})
```

### 示例 2: 只选择图片

```javascript
uni.chooseMedia({
  count: 9,
  mediaType: ['image'],
  sourceType: ['album', 'camera'],
  sizeType: ['original', 'compressed'],
  success: (res) => {
    console.log('选择的图片', res.tempFiles)
  }
})
```

### 示例 3: 只选择视频

```javascript
uni.chooseMedia({
  count: 1,
  mediaType: ['video'],
  sourceType: ['album', 'camera'],
  maxDuration: 60,
  camera: 'back',
  success: (res) => {
    console.log('选择的视频', res.tempFiles)
  }
})
```

### 示例 4: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="chooseMedia">选择媒体文件</button>
    <view class="media-list">
      <view 
        v-for="(item, index) in mediaList" 
        :key="index"
        class="media-item"
      >
        <image 
          v-if="item.fileType === 'image'"
          :src="item.tempFilePath"
          mode="aspectFill"
          class="media-preview"
        ></image>
        <video 
          v-else-if="item.fileType === 'video'"
          :src="item.tempFilePath"
          controls
          class="media-preview"
        ></video>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      mediaList: []
    }
  },
  methods: {
    chooseMedia() {
      uni.chooseMedia({
        count: 9,
        mediaType: ['image', 'video'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          this.mediaList = res.tempFiles
          uni.showToast({
            title: `选择了${res.tempFiles.length}个文件`,
            icon: 'success'
          })
        },
        fail: (err) => {
          console.error('选择失败', err)
        }
      })
    }
  }
}
</script>

<style>
.media-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.media-item {
  width: 200rpx;
  height: 200rpx;
  margin: 10rpx;
  border-radius: 8rpx;
  overflow: hidden;
}
.media-preview {
  width: 100%;
  height: 100%;
}
</style>
```

### 示例 5: 上传媒体文件

```javascript
uni.chooseMedia({
  count: 9,
  mediaType: ['image', 'video'],
  success: (res) => {
    const files = res.tempFiles
    let uploadCount = 0
    
    files.forEach((file, index) => {
      uni.uploadFile({
        url: 'https://api.example.com/upload',
        filePath: file.tempFilePath,
        name: 'file',
        formData: {
          fileType: file.fileType,
          size: file.size
        },
        success: (uploadRes) => {
          uploadCount++
          console.log(`文件${index + 1}上传成功`)
          
          if (uploadCount === files.length) {
            uni.showToast({
              title: '全部上传成功',
              icon: 'success'
            })
          }
        },
        fail: (err) => {
          console.error(`文件${index + 1}上传失败`, err)
        }
      })
    })
  }
})
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| count | Number | 否 | 最多可以选择的文件个数，默认 9 |
| mediaType | Array | 否 | 文件类型，可选值：image、video |
| sourceType | Array | 否 | 选择文件来源，可选值：album、camera |
| maxDuration | Number | 否 | 拍摄视频最长拍摄时间，单位秒 |
| camera | String | 否 | 使用前置或后置摄像头，可选值：back、front |

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| tempFiles | Array | 选中的文件列表，每个文件包含 tempFilePath、size、fileType 等 |

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

1. `mediaType` 可以同时选择图片和视频
2. `count` 表示最多可以选择的文件个数
3. 返回的文件包含 `fileType` 字段，用于区分图片和视频
4. 建议根据实际需求设置 `maxDuration` 限制视频时长

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/media/video.html#choosemedia
- **选择图片**: https://uniapp.dcloud.net.cn/api/media/image.html#chooseimage
- **选择视频**: https://uniapp.dcloud.net.cn/api/media/video.html#choosevideo
