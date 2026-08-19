# uni.downloadFile - 下载文件示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/request/network-file.html#downloadfile

## 概述

`uni.downloadFile` 用于下载文件资源到本地。

## 基础用法

```javascript
uni.downloadFile({
  url: 'https://example.com/file.pdf',
  success: (res) => {
    console.log('下载成功', res.tempFilePath)
  }
})
```

## 完整示例

### 示例 1: 下载图片

```javascript
uni.downloadFile({
  url: 'https://example.com/image.jpg',
  success: (res) => {
    if (res.statusCode === 200) {
      console.log('下载成功', res.tempFilePath)
      // 可以预览或保存图片
      uni.previewImage({
        urls: [res.tempFilePath]
      })
    }
  },
  fail: (err) => {
    console.error('下载失败', err)
  }
})
```

### 示例 2: 下载并保存到相册

```javascript
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
        }
      })
    }
  }
})
```

### 示例 3: 显示下载进度

```javascript
uni.downloadFile({
  url: 'https://example.com/large-file.pdf',
  success: (res) => {
    console.log('下载完成', res.tempFilePath)
  },
  fail: (err) => {
    console.error('下载失败', err)
  }
})
```

### 示例 4: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="downloadFile">下载文件</button>
    <view v-if="downloading" class="download-status">
      <text>下载中...</text>
    </view>
    <view v-if="filePath" class="file-info">
      <text>文件路径：{{ filePath }}</text>
      <button @click="openFile">打开文件</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      downloading: false,
      filePath: ''
    }
  },
  methods: {
    downloadFile() {
      this.downloading = true
      uni.downloadFile({
        url: 'https://example.com/file.pdf',
        success: (res) => {
          if (res.statusCode === 200) {
            this.filePath = res.tempFilePath
            this.downloading = false
            uni.showToast({
              title: '下载成功',
              icon: 'success'
            })
          }
        },
        fail: (err) => {
          this.downloading = false
          uni.showToast({
            title: '下载失败',
            icon: 'none'
          })
        }
      })
    },
    openFile() {
      // 打开文件
      uni.openDocument({
        filePath: this.filePath,
        success: () => {
          console.log('打开成功')
        }
      })
    }
  }
}
</script>
```

### 示例 5: 封装下载函数

```javascript
// utils/download.js
const download = {
  downloadFile(url, options = {}) {
    return new Promise((resolve, reject) => {
      uni.downloadFile({
        url: url,
        header: options.header || {},
        success: (res) => {
          if (res.statusCode === 200) {
            resolve(res.tempFilePath)
          } else {
            reject(new Error(`下载失败，状态码：${res.statusCode}`))
          }
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  },
  
  async downloadAndSave(url) {
    try {
      const filePath = await this.downloadFile(url)
      // 根据文件类型保存
      if (filePath.endsWith('.jpg') || filePath.endsWith('.png')) {
        await uni.saveImageToPhotosAlbum({ filePath })
      } else {
        await uni.saveFile({ tempFilePath: filePath })
      }
      return filePath
    } catch (err) {
      throw err
    }
  }
}

// 使用
download.downloadFile('https://example.com/file.pdf')
  .then(filePath => {
    console.log('下载成功', filePath)
  })
  .catch(err => {
    console.error('下载失败', err)
  })
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| url | String | 是 | 下载资源的 url |
| header | Object | 否 | HTTP 请求 Header |

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| tempFilePath | String | 临时文件路径，下载后的文件会存储到一个临时文件 |
| statusCode | Number | HTTP 状态码 |

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

1. 下载的文件是临时文件，需要保存才能永久使用
2. 可以通过 `statusCode` 判断下载是否成功
3. 下载的文件路径是临时路径，应用关闭后可能失效
4. 建议下载后立即保存或使用

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/request/network-file.html#downloadfile
- **保存文件**: https://uniapp.dcloud.net.cn/api/file/file.html#savefile
- **打开文档**: https://uniapp.dcloud.net.cn/api/file/file.html#opendocument
