# uni.uploadFile - 上传文件示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/request/network-file.html#uploadfile

## 概述

`uni.uploadFile` 用于将本地资源上传到服务器。

## 基础用法

```javascript
uni.uploadFile({
  url: 'https://api.example.com/upload',
  filePath: '/tmp/image.jpg',
  name: 'file',
  success: (res) => {
    console.log('上传成功', res.data)
  }
})
```

## 完整示例

### 示例 1: 上传图片

```javascript
// 先选择图片
uni.chooseImage({
  count: 1,
  success: (res) => {
    const tempFilePath = res.tempFilePaths[0]
    
    // 上传图片
    uni.uploadFile({
      url: 'https://api.example.com/upload',
      filePath: tempFilePath,
      name: 'file',
      formData: {
        'user': 'test'
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
        uni.showToast({
          title: '上传失败',
          icon: 'none'
        })
      }
    })
  }
})
```

### 示例 2: 上传多张图片

```javascript
uni.chooseImage({
  count: 9,
  success: (res) => {
    const tempFilePaths = res.tempFilePaths
    let uploadCount = 0
    
    tempFilePaths.forEach((filePath, index) => {
      uni.uploadFile({
        url: 'https://api.example.com/upload',
        filePath: filePath,
        name: 'file',
        success: () => {
          uploadCount++
          if (uploadCount === tempFilePaths.length) {
            uni.showToast({
              title: '全部上传成功',
              icon: 'success'
            })
          }
        },
        fail: (err) => {
          console.error(`第${index + 1}张图片上传失败`, err)
        }
      })
    })
  }
})
```

### 示例 3: 显示上传进度

```javascript
uni.chooseImage({
  count: 1,
  success: (res) => {
    const tempFilePath = res.tempFilePaths[0]
    
    uni.uploadFile({
      url: 'https://api.example.com/upload',
      filePath: tempFilePath,
      name: 'file',
      success: (res) => {
        console.log('上传成功', res)
      },
      fail: (err) => {
        console.error('上传失败', err)
      }
    })
  }
})
```

### 示例 4: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="uploadImage">上传图片</button>
    <view v-if="uploading" class="upload-status">
      <text>上传中...</text>
    </view>
    <image v-if="imageUrl" :src="imageUrl" mode="aspectFit" class="uploaded-image"></image>
  </view>
</template>

<script>
export default {
  data() {
    return {
      uploading: false,
      imageUrl: ''
    }
  },
  methods: {
    uploadImage() {
      uni.chooseImage({
        count: 1,
        success: (res) => {
          this.uploading = true
          const tempFilePath = res.tempFilePaths[0]
          
          uni.uploadFile({
            url: 'https://api.example.com/upload',
            filePath: tempFilePath,
            name: 'file',
            header: {
              'Authorization': 'Bearer ' + uni.getStorageSync('token')
            },
            success: (uploadRes) => {
              const data = JSON.parse(uploadRes.data)
              this.imageUrl = data.url
              this.uploading = false
              uni.showToast({
                title: '上传成功',
                icon: 'success'
              })
            },
            fail: (err) => {
              this.uploading = false
              uni.showToast({
                title: '上传失败',
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
```

### 示例 5: 封装上传函数

```javascript
// utils/upload.js
const upload = {
  uploadImage(filePath, options = {}) {
    return new Promise((resolve, reject) => {
      uni.uploadFile({
        url: options.url || 'https://api.example.com/upload',
        filePath: filePath,
        name: options.name || 'file',
        formData: options.formData || {},
        header: options.header || {},
        success: (res) => {
          try {
            const data = JSON.parse(res.data)
            resolve(data)
          } catch (e) {
            resolve(res.data)
          }
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  }
}

// 使用
const filePath = '/tmp/image.jpg'
upload.uploadImage(filePath, {
  url: 'https://api.example.com/upload',
  formData: { userId: '123' }
}).then(data => {
  console.log('上传成功', data)
}).catch(err => {
  console.error('上传失败', err)
})
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| url | String | 是 | 开发者服务器地址 |
| filePath | String | 是 | 要上传文件资源的路径 |
| name | String | 是 | 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 |
| header | Object | 否 | HTTP 请求 Header |
| formData | Object | 否 | HTTP 请求中其他额外的 form data |

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| data | String | 服务器返回的数据 |
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

1. 上传文件前需要先选择文件（使用 `uni.chooseImage` 等）
2. `filePath` 必须是本地路径
3. 可以通过 `formData` 传递额外的表单数据
4. 建议在请求头中添加认证信息

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/request/network-file.html#uploadfile
- **选择图片**: https://uniapp.dcloud.net.cn/api/media/image.html#chooseimage
- **下载文件**: https://uniapp.dcloud.net.cn/api/request/network-file.html#downloadfile
