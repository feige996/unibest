# uni.getFileInfo - 获取文件信息示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/file/file.html#getfileinfo

## 概述

`uni.getFileInfo` 用于获取文件信息。

## 基础用法

```javascript
uni.getFileInfo({
  filePath: 'file_path',
  success: (res) => {
    console.log('文件大小', res.size)
  }
})
```

## 完整示例

### 示例 1: 获取文件信息

```javascript
uni.getFileInfo({
  filePath: 'file_path',
  success: (res) => {
    console.log('文件大小', res.size, '字节')
    console.log('文件大小（KB）', (res.size / 1024).toFixed(2), 'KB')
    console.log('文件大小（MB）', (res.size / 1024 / 1024).toFixed(2), 'MB')
  },
  fail: (err) => {
    console.error('获取失败', err)
  }
})
```

### 示例 2: 检查文件大小

```javascript
function checkFileSize(filePath) {
  return new Promise((resolve, reject) => {
    uni.getFileInfo({
      filePath: filePath,
      success: (res) => {
        const sizeInMB = res.size / 1024 / 1024
        if (sizeInMB > 10) {
          uni.showModal({
            title: '提示',
            content: `文件大小 ${sizeInMB.toFixed(2)}MB，超过10MB，建议压缩后上传`,
            showCancel: false
          })
        }
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

// 使用
checkFileSize('file_path').then(res => {
  console.log('文件信息', res)
})
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="chooseAndCheckFile">选择文件并检查</button>
    <view v-if="fileInfo" class="file-info">
      <text>文件大小：{{ formatFileSize(fileInfo.size) }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      fileInfo: null
    }
  },
  methods: {
    chooseAndCheckFile() {
      uni.chooseFile({
        count: 1,
        success: (res) => {
          const filePath = res.tempFiles[0].path
          this.getFileInfo(filePath)
        }
      })
    },
    getFileInfo(filePath) {
      uni.getFileInfo({
        filePath: filePath,
        success: (res) => {
          this.fileInfo = res
        },
        fail: (err) => {
          uni.showToast({
            title: '获取失败',
            icon: 'none'
          })
        }
      })
    },
    formatFileSize(size) {
      if (size < 1024) {
        return size + ' B'
      } else if (size < 1024 * 1024) {
        return (size / 1024).toFixed(2) + ' KB'
      } else {
        return (size / 1024 / 1024).toFixed(2) + ' MB'
      }
    }
  }
}
</script>
```

### 示例 4: 上传前检查文件大小

```javascript
function uploadFileWithSizeCheck(filePath) {
  uni.getFileInfo({
    filePath: filePath,
    success: (res) => {
      const maxSize = 10 * 1024 * 1024 // 10MB
      
      if (res.size > maxSize) {
        uni.showModal({
          title: '提示',
          content: `文件大小 ${(res.size / 1024 / 1024).toFixed(2)}MB，超过限制`,
          showCancel: false
        })
        return
      }
      
      // 上传文件
      uni.uploadFile({
        url: 'https://api.example.com/upload',
        filePath: filePath,
        name: 'file',
        success: (uploadRes) => {
          console.log('上传成功', uploadRes)
        }
      })
    }
  })
}
```

### 示例 5: 获取多个文件信息

```javascript
function getMultipleFileInfo(filePaths) {
  const fileInfoList = []
  let completedCount = 0
  
  filePaths.forEach((filePath, index) => {
    uni.getFileInfo({
      filePath: filePath,
      success: (res) => {
        fileInfoList[index] = {
          path: filePath,
          size: res.size
        }
        completedCount++
        
        if (completedCount === filePaths.length) {
          console.log('所有文件信息', fileInfoList)
          const totalSize = fileInfoList.reduce((sum, info) => sum + info.size, 0)
          console.log('总大小', (totalSize / 1024 / 1024).toFixed(2), 'MB')
        }
      }
    })
  })
}

// 使用
uni.chooseFile({
  count: 5,
  success: (res) => {
    const filePaths = res.tempFiles.map(file => file.path)
    getMultipleFileInfo(filePaths)
  }
})
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| filePath | String | 是 | 文件路径 |

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| size | Number | 文件大小，单位：字节 |

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

1. H5 平台不支持此 API
2. `size` 单位是字节（bytes）
3. 可以通过 `size` 判断文件大小，进行上传限制
4. 建议在上传前检查文件大小

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/file/file.html#getfileinfo
