# uni.getImageInfo - 获取图片信息示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/media/image.html#getimageinfo

## 概述

`uni.getImageInfo` 用于获取图片信息，包括宽度、高度、路径等。

## 基础用法

```javascript
uni.getImageInfo({
  src: 'https://example.com/image.jpg',
  success: (res) => {
    console.log('图片宽度', res.width)
    console.log('图片高度', res.height)
  }
})
```

## 完整示例

### 示例 1: 获取网络图片信息

```javascript
uni.getImageInfo({
  src: 'https://example.com/image.jpg',
  success: (res) => {
    console.log('图片宽度', res.width)
    console.log('图片高度', res.height)
    console.log('图片路径', res.path)
  },
  fail: (err) => {
    console.error('获取失败', err)
  }
})
```

### 示例 2: 获取本地图片信息

```javascript
// 先选择图片
uni.chooseImage({
  count: 1,
  success: (res) => {
    const tempFilePath = res.tempFilePaths[0]
    
    // 获取图片信息
    uni.getImageInfo({
      src: tempFilePath,
      success: (imageInfo) => {
        console.log('图片信息', imageInfo)
        // { width: 800, height: 600, path: '...' }
      }
    })
  }
})
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="selectAndGetInfo">选择图片并获取信息</button>
    <view v-if="imageInfo" class="info">
      <text>宽度：{{ imageInfo.width }}px</text>
      <text>高度：{{ imageInfo.height }}px</text>
      <image :src="imageInfo.path" mode="aspectFit" class="preview"></image>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      imageInfo: null
    }
  },
  methods: {
    selectAndGetInfo() {
      uni.chooseImage({
        count: 1,
        success: (res) => {
          const tempFilePath = res.tempFilePaths[0]
          uni.getImageInfo({
            src: tempFilePath,
            success: (imageInfo) => {
              this.imageInfo = imageInfo
            },
            fail: (err) => {
              uni.showToast({
                title: '获取图片信息失败',
                icon: 'none'
              })
            }
          })
        }
      })
    }
  }
}
</script>

<style>
.info {
  margin-top: 20px;
  padding: 20px;
}
.preview {
  width: 100%;
  max-height: 400px;
  margin-top: 20px;
}
</style>
```

### 示例 4: 计算图片宽高比

```javascript
uni.getImageInfo({
  src: 'https://example.com/image.jpg',
  success: (res) => {
    const aspectRatio = res.width / res.height
    console.log('宽高比', aspectRatio)
    
    // 根据宽高比调整显示
    if (aspectRatio > 1) {
      console.log('横向图片')
    } else {
      console.log('纵向图片')
    }
  }
})
```

### 示例 5: 验证图片尺寸

```javascript
function validateImageSize(imagePath, minWidth, minHeight) {
  return new Promise((resolve, reject) => {
    uni.getImageInfo({
      src: imagePath,
      success: (res) => {
        if (res.width >= minWidth && res.height >= minHeight) {
          resolve(res)
        } else {
          reject(new Error(`图片尺寸不符合要求，需要至少 ${minWidth}x${minHeight}`))
        }
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

// 使用
validateImageSize('https://example.com/image.jpg', 800, 600)
  .then(info => {
    console.log('图片符合要求', info)
  })
  .catch(err => {
    console.error('验证失败', err)
  })
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| src | String | 是 | 图片的路径，可以是相对路径、临时文件路径或网络图片路径 |

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| width | Number | 图片宽度，单位 px |
| height | Number | 图片高度，单位 px |
| path | String | 返回图片的本地路径 |

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

1. 网络图片需要配置合法域名
2. 本地图片路径需要使用 `/static/` 开头或临时文件路径
3. 获取图片信息是异步操作
4. 可以用于验证图片尺寸、计算宽高比等

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/media/image.html#getimageinfo
- **选择图片**: https://doc.dcloud.net.cn/uni-app-x/api/media/image.html#chooseimage
