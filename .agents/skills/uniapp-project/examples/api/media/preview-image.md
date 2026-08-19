# uni.previewImage - 预览图片示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/media/image.html#previewimage

## 概述

`uni.previewImage` 用于预览图片，支持缩放、滑动查看多张图片。

## 基础用法

```javascript
uni.previewImage({
  urls: ['https://example.com/image1.jpg'],
  current: 0
})
```

## 完整示例

### 示例 1: 预览单张图片

```javascript
uni.previewImage({
  urls: ['https://example.com/image1.jpg'],
  current: 'https://example.com/image1.jpg'
})
```

### 示例 2: 预览多张图片

```javascript
const imageList = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg'
]

uni.previewImage({
  urls: imageList,
  current: 0 // 从第一张开始
})
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
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
      imageList: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
      ]
    }
  },
  methods: {
    previewImage(index) {
      uni.previewImage({
        urls: this.imageList,
        current: index
      })
    }
  }
}
</script>

<style>
.image-list {
  display: flex;
  flex-wrap: wrap;
}
.image-item {
  width: 200rpx;
  height: 200rpx;
  margin: 10rpx;
  border-radius: 8rpx;
}
</style>
```

### 示例 4: 从选择图片到预览

```vue
<template>
  <view class="container">
    <button @click="chooseAndPreview">选择并预览图片</button>
    <view class="image-list">
      <image 
        v-for="(item, index) in selectedImages" 
        :key="index"
        :src="item"
        mode="aspectFill"
        class="image-item"
        @click="previewSelected(index)"
      ></image>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      selectedImages: []
    }
  },
  methods: {
    chooseAndPreview() {
      uni.chooseImage({
        count: 9,
        success: (res) => {
          this.selectedImages = res.tempFilePaths
          // 预览第一张
          if (res.tempFilePaths.length > 0) {
            uni.previewImage({
              urls: res.tempFilePaths,
              current: 0
            })
          }
        }
      })
    },
    previewSelected(index) {
      uni.previewImage({
        urls: this.selectedImages,
        current: index
      })
    }
  }
}
</script>
```

### 示例 5: 长按保存图片

```vue
<template>
  <view class="container">
    <image 
      :src="imageUrl"
      mode="aspectFit"
      @longpress="saveImage"
      class="preview-image"
    ></image>
  </view>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'https://example.com/image.jpg'
    }
  },
  methods: {
    saveImage() {
      uni.showActionSheet({
        itemList: ['保存图片'],
        success: (res) => {
          if (res.tapIndex === 0) {
            uni.downloadFile({
              url: this.imageUrl,
              success: (downloadRes) => {
                uni.saveImageToPhotosAlbum({
                  filePath: downloadRes.tempFilePath,
                  success: () => {
                    uni.showToast({
                      title: '保存成功',
                      icon: 'success'
                    })
                  }
                })
              }
            })
          }
        }
      })
    }
  }
}
</script>
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| urls | Array | 是 | 需要预览的图片 http 链接列表 |
| current | String/Number | 否 | 当前显示图片的索引或链接 |

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

1. `urls` 必须是网络图片或已下载的本地路径
2. `current` 可以是索引（Number）或图片链接（String）
3. 预览时支持手势缩放和滑动切换
4. 建议使用网络图片时确保图片可访问

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/media/image.html#previewimage
- **选择图片**: https://uniapp.dcloud.net.cn/api/media/image.html#chooseimage
