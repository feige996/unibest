# uni.getSavedFileList - 获取已保存的文件列表示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/file/file.html#getsavedfilelist

## 概述

`uni.getSavedFileList` 用于获取本地已保存的文件列表。

## 基础用法

```javascript
uni.getSavedFileList({
  success: (res) => {
    console.log('文件列表', res.fileList)
  }
})
```

## 完整示例

### 示例 1: 获取文件列表

```javascript
uni.getSavedFileList({
  success: (res) => {
    console.log('文件数量', res.fileList.length)
    res.fileList.forEach((file, index) => {
      console.log(`文件${index + 1}:`, file.filePath)
      console.log(`大小:`, file.size, '字节')
      console.log(`创建时间:`, new Date(file.createTime))
    })
  },
  fail: (err) => {
    console.error('获取失败', err)
  }
})
```

### 示例 2: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="getFileList">获取文件列表</button>
    <view v-if="fileList.length > 0" class="file-list">
      <view 
        v-for="(file, index) in fileList" 
        :key="index"
        class="file-item"
      >
        <text class="file-path">{{ file.filePath }}</text>
        <text class="file-size">大小：{{ formatFileSize(file.size) }}</text>
        <text class="file-time">创建时间：{{ formatTime(file.createTime) }}</text>
        <button @click="removeFile(file.filePath)">删除</button>
      </view>
    </view>
    <view v-else class="empty">
      <text>暂无保存的文件</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      fileList: []
    }
  },
  onLoad() {
    this.getFileList()
  },
  methods: {
    getFileList() {
      uni.getSavedFileList({
        success: (res) => {
          this.fileList = res.fileList
        },
        fail: (err) => {
          uni.showToast({
            title: '获取失败',
            icon: 'none'
          })
        }
      })
    },
    removeFile(filePath) {
      uni.removeSavedFile({
        filePath: filePath,
        success: () => {
          uni.showToast({
            title: '删除成功',
            icon: 'success'
          })
          this.getFileList()
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
    },
    formatTime(timestamp) {
      const date = new Date(timestamp)
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
    }
  }
}
</script>

<style>
.file-list {
  margin-top: 20px;
}
.file-item {
  padding: 20px;
  border-bottom: 1px solid #eee;
}
.file-path {
  display: block;
  font-size: 28rpx;
  color: #333;
  margin-bottom: 10px;
}
.file-size, .file-time {
  display: block;
  font-size: 24rpx;
  color: #666;
  margin-bottom: 5px;
}
</style>
```

### 示例 3: 计算总文件大小

```javascript
function getTotalFileSize() {
  return new Promise((resolve, reject) => {
    uni.getSavedFileList({
      success: (res) => {
        const totalSize = res.fileList.reduce((sum, file) => sum + file.size, 0)
        const totalSizeMB = (totalSize / 1024 / 1024).toFixed(2)
        console.log('总文件大小', totalSizeMB, 'MB')
        resolve({
          fileList: res.fileList,
          totalSize: totalSize,
          totalSizeMB: totalSizeMB
        })
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

// 使用
getTotalFileSize().then(result => {
  console.log('文件统计', result)
})
```

### 示例 4: 清理旧文件

```javascript
function cleanOldFiles(maxAge = 7 * 24 * 60 * 60 * 1000) {
  // maxAge: 最大保留时间（毫秒），默认7天
  uni.getSavedFileList({
    success: (res) => {
      const now = Date.now()
      let deletedCount = 0
      
      res.fileList.forEach(file => {
        if (now - file.createTime > maxAge) {
          uni.removeSavedFile({
            filePath: file.filePath,
            success: () => {
              deletedCount++
              console.log('已删除旧文件', file.filePath)
            }
          })
        }
      })
      
      setTimeout(() => {
        uni.showToast({
          title: `已清理${deletedCount}个文件`,
          icon: 'success'
        })
      }, 1000)
    }
  })
}

// 使用：清理7天前的文件
cleanOldFiles()
```

### 示例 5: 文件管理

```vue
<template>
  <view class="container">
    <view class="header">
      <text>文件管理</text>
      <text class="total-size">总大小：{{ totalSizeMB }}MB</text>
    </view>
    <view class="file-list">
      <view 
        v-for="(file, index) in fileList" 
        :key="index"
        class="file-item"
      >
        <view class="file-info">
          <text class="file-name">{{ getFileName(file.filePath) }}</text>
          <text class="file-detail">{{ formatFileSize(file.size) }} · {{ formatTime(file.createTime) }}</text>
        </view>
        <view class="file-actions">
          <button size="mini" @click="previewFile(file)">预览</button>
          <button size="mini" @click="removeFile(file.filePath)">删除</button>
        </view>
      </view>
    </view>
    <button @click="clearAllFiles" class="clear-btn">清空所有文件</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      totalSizeMB: '0.00'
    }
  },
  onLoad() {
    this.getFileList()
  },
  methods: {
    getFileList() {
      uni.getSavedFileList({
        success: (res) => {
          this.fileList = res.fileList
          const totalSize = res.fileList.reduce((sum, file) => sum + file.size, 0)
          this.totalSizeMB = (totalSize / 1024 / 1024).toFixed(2)
        }
      })
    },
    getFileName(filePath) {
      return filePath.split('/').pop()
    },
    removeFile(filePath) {
      uni.removeSavedFile({
        filePath: filePath,
        success: () => {
          this.getFileList()
        }
      })
    },
    clearAllFiles() {
      uni.showModal({
        title: '确认',
        content: '确定要清空所有文件吗？',
        success: (res) => {
          if (res.confirm) {
            this.fileList.forEach(file => {
              uni.removeSavedFile({
                filePath: file.filePath
              })
            })
            setTimeout(() => {
              this.getFileList()
            }, 500)
          }
        }
      })
    },
    previewFile(file) {
      // 根据文件类型预览
      if (file.filePath.endsWith('.jpg') || file.filePath.endsWith('.png')) {
        uni.previewImage({
          urls: [file.filePath]
        })
      } else {
        uni.showToast({
          title: '暂不支持预览此类型文件',
          icon: 'none'
        })
      }
    },
    formatFileSize(size) {
      if (size < 1024) {
        return size + ' B'
      } else if (size < 1024 * 1024) {
        return (size / 1024).toFixed(2) + ' KB'
      } else {
        return (size / 1024 / 1024).toFixed(2) + ' MB'
      }
    },
    formatTime(timestamp) {
      const date = new Date(timestamp)
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
    }
  }
}
</script>
```

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| fileList | Array | 文件列表，每个文件包含 filePath、size、createTime |

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
2. 返回的文件列表包含通过 `uni.saveFile` 保存的文件
3. 可以通过 `createTime` 判断文件创建时间
4. 建议定期清理不需要的文件

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/file/file.html#getsavedfilelist
- **保存文件**: https://uniapp.dcloud.net.cn/api/file/file.html#savefile
- **删除文件**: https://uniapp.dcloud.net.cn/api/file/file.html#removesavedfile
