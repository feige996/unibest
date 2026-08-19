# uni.chooseImage - 选择图片示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/media/image.html#chooseimage

## 概述

`uni.chooseImage` 用于从本地相册选择图片或使用相机拍照。

## 基础用法

```javascript
uni.chooseImage({
  count: 1,
  success: (res) => {
    console.log('选择的图片', res.tempFilePaths)
  }
})
```

## 完整示例

### 示例 1: 选择单张图片

```javascript
uni.chooseImage({
  count: 1,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  success: (res) => {
    console.log('选择的图片路径', res.tempFilePaths)
    console.log('图片文件信息', res.tempFiles)
  }
})
```

### 示例 2: 选择多张图片

```javascript
uni.chooseImage({
  count: 9, // 最多选择9张
  sizeType: ['compressed'], // 只选择压缩图
  sourceType: ['album'], // 只从相册选择
  success: (res) => {
    console.log('选择了', res.tempFilePaths.length, '张图片')
    res.tempFilePaths.forEach((path, index) => {
      console.log(`图片${index + 1}:`, path)
    })
  }
})
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="chooseImage">选择图片</button>
    <view class="image-list">
      <image 
        v-for="(item, index) in imageList" 
        :key="index"
        :src="item"
        mode="aspectFill"
        class="image-item"
        @click="previewImage(index)"
      ></image>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      imageList: []
    }
  },
  methods: {
    chooseImage() {
      uni.chooseImage({
        count: 9,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          this.imageList = res.tempFilePaths
          uni.showToast({
            title: `选择了${res.tempFilePaths.length}张图片`,
            icon: 'success'
          })
        },
        fail: (err) => {
          uni.showToast({
            title: '选择图片失败',
            icon: 'none'
          })
        }
      })
    },
    previewImage(index) {
      uni.previewImage({
        current: index,
        urls: this.imageList
      })
    }
  }
}
</script>

<style>
.image-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.image-item {
  width: 200rpx;
  height: 200rpx;
  margin: 10rpx;
  border-radius: 8rpx;
}
</style>
```

### 示例 4: 上传图片

```javascript
uni.chooseImage({
  count: 1,
  sizeType: ['compressed'],
  sourceType: ['album', 'camera'],
  success: (res) => {
    const tempFilePath = res.tempFilePaths[0]
    
    // 上传图片
    uni.uploadFile({
      url: 'https://api.example.com/upload',
      filePath: tempFilePath,
      name: 'file',
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
        uni.showToast({
          title: '上传失败',
          icon: 'none'
        })
      }
    })
  }
})
```

### 示例 5: 获取图片信息

```javascript
uni.chooseImage({
  count: 1,
  success: (res) => {
    const tempFilePath = res.tempFilePaths[0]
    
    // 获取图片信息
    uni.getImageInfo({
      src: tempFilePath,
      success: (imageInfo) => {
        console.log('图片宽度', imageInfo.width)
        console.log('图片高度', imageInfo.height)
        console.log('图片路径', imageInfo.path)
      }
    })
  }
})
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| count | Number | 否 | 最多可以选择的图片张数，默认 9 |
| sizeType | Array | 否 | 所选的图片的尺寸，可选值：original（原图）、compressed（压缩图） |
| sourceType | Array | 否 | 选择图片的来源，可选值：album（相册）、camera（相机） |

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| tempFilePaths | Array | 图片的本地文件路径列表 |
| tempFiles | Array | 图片的本地文件列表，每个文件包含 path 和 size |

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

1. 选择的图片是临时文件，需要上传到服务器才能永久保存
2. 临时文件路径在不同平台格式可能不同
3. 选择图片需要用户授权，首次使用会弹出授权提示
4. 建议使用压缩图以节省存储空间

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/media/image.html#chooseimage
- **预览图片**: https://doc.dcloud.net.cn/uni-app-x/api/media/image.html#previewimage
- **上传文件**: https://doc.dcloud.net.cn/uni-app-x/api/request/network-file.html#uploadfile
