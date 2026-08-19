# uni.saveImageToPhotosAlbum - 保存图片到相册示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/media/image.html#saveimagetophotosalbum

## 概述

`uni.saveImageToPhotosAlbum` 用于保存图片到系统相册。

## 基础用法

```javascript
uni.saveImageToPhotosAlbum({
  filePath: '/tmp/image.jpg',
  success: () => {
    console.log('保存成功')
  }
})
```

## 完整示例

### 示例 1: 保存网络图片

```javascript
// 先下载图片
uni.downloadFile({
  url: 'https://example.com/image.jpg',
  success: (res) => {
    if (res.statusCode === 200) {
      // 保存到相册
      uni.saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
        success: () => {
          uni.showToast({
            title: '保存成功',
            icon: 'success'
          })
        },
        fail: (err) => {
          console.error('保存失败', err)
          if (err.errMsg.includes('auth deny')) {
            uni.showModal({
              title: '提示',
              content: '需要相册权限才能保存图片',
              showCancel: false
            })
          }
        }
      })
    }
  }
})
```

### 示例 2: 保存选择的图片

```javascript
uni.chooseImage({
  count: 1,
  success: (res) => {
    const tempFilePath = res.tempFilePaths[0]
    
    uni.saveImageToPhotosAlbum({
      filePath: tempFilePath,
      success: () => {
        uni.showToast({
          title: '保存成功',
          icon: 'success'
        })
      },
      fail: (err) => {
        console.error('保存失败', err)
      }
    })
  }
})
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <image :src="imageUrl" mode="aspectFit" class="preview-image"></image>
    <button @click="saveImage">保存图片</button>
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
      // 先下载图片
      uni.downloadFile({
        url: this.imageUrl,
        success: (res) => {
          if (res.statusCode === 200) {
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: () => {
                uni.showToast({
                  title: '保存成功',
                  icon: 'success'
                })
              },
              fail: (err) => {
                if (err.errMsg.includes('auth deny')) {
                  uni.showModal({
                    title: '提示',
                    content: '需要相册权限，请在设置中开启',
                    success: (modalRes) => {
                      if (modalRes.confirm) {
                        uni.openSetting()
                      }
                    }
                  })
                } else {
                  uni.showToast({
                    title: '保存失败',
                    icon: 'none'
                  })
                }
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

### 示例 4: 检查权限

```javascript
function saveImageWithPermission(filePath) {
  // 先检查权限
  uni.getSetting({
    success: (res) => {
      if (res.authSetting['scope.writePhotosAlbum']) {
        // 已授权，直接保存
        saveImage(filePath)
      } else {
        // 请求授权
        uni.authorize({
          scope: 'scope.writePhotosAlbum',
          success: () => {
            saveImage(filePath)
          },
          fail: () => {
            uni.showModal({
              title: '提示',
              content: '需要相册权限才能保存图片',
              success: (modalRes) => {
                if (modalRes.confirm) {
                  uni.openSetting()
                }
              }
            })
          }
        })
      }
    }
  })
}

function saveImage(filePath) {
  uni.saveImageToPhotosAlbum({
    filePath: filePath,
    success: () => {
      uni.showToast({
        title: '保存成功',
        icon: 'success'
      })
    }
  })
}
```

### 示例 5: 长按保存图片

```vue
<template>
  <view class="container">
    <image 
      :src="imageUrl" 
      mode="aspectFit"
      @longpress="handleLongPress"
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
    handleLongPress() {
      uni.showActionSheet({
        itemList: ['保存图片'],
        success: (res) => {
          if (res.tapIndex === 0) {
            this.saveImage()
          }
        }
      })
    },
    saveImage() {
      uni.downloadFile({
        url: this.imageUrl,
        success: (res) => {
          if (res.statusCode === 200) {
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: () => {
                uni.showToast({
                  title: '保存成功',
                  icon: 'success'
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
| filePath | String | 是 | 图片文件路径，可以是临时文件路径或永久文件路径 |

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

1. 需要用户授权相册权限
2. 网络图片需要先下载到本地
3. 如果权限被拒绝，可以引导用户到设置中开启
4. 建议在保存前检查权限状态

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/media/image.html#saveimagetophotosalbum
- **下载文件**: https://uniapp.dcloud.net.cn/api/request/network-file.html#downloadfile
- **授权**: https://uniapp.dcloud.net.cn/api/other/authorize.html#authorize
