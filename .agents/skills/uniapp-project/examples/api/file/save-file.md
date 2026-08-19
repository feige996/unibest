# uni.saveFile - 保存文件示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/file/file.html#savefile

## 概述

`uni.saveFile` 用于保存文件到本地。

## 基础用法

```javascript
uni.saveFile({
  tempFilePath: 'temp_file_path',
  success: (res) => {
    console.log('保存成功', res.savedFilePath)
  }
})
```

## 完整示例

### 示例 1: 保存临时文件

```javascript
uni.saveFile({
  tempFilePath: 'temp_file_path',
  success: (res) => {
    console.log('保存成功', res.savedFilePath)
    uni.showToast({
      title: '保存成功',
      icon: 'success'
    })
  },
  fail: (err) => {
    console.error('保存失败', err)
  }
})
```

### 示例 2: 保存下载的文件

```javascript
uni.downloadFile({
  url: 'https://example.com/file.pdf',
  success: (res) => {
    if (res.statusCode === 200) {
      // 保存下载的文件
      uni.saveFile({
        tempFilePath: res.tempFilePath,
        success: (saveRes) => {
          console.log('文件已保存', saveRes.savedFilePath)
        }
      })
    }
  }
})
```

### 示例 3: 保存图片到本地

```javascript
uni.chooseImage({
  count: 1,
  success: (res) => {
    const tempFilePath = res.tempFilePaths[0]
    
    // 保存图片
    uni.saveFile({
      tempFilePath: tempFilePath,
      success: (saveRes) => {
        console.log('图片已保存', saveRes.savedFilePath)
        uni.showToast({
          title: '保存成功',
          icon: 'success'
        })
      }
    })
  }
})
```

### 示例 4: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="downloadAndSave">下载并保存文件</button>
    <view v-if="savedFilePath" class="file-info">
      <text>文件已保存：{{ savedFilePath }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      savedFilePath: ''
    }
  },
  methods: {
    downloadAndSave() {
      uni.showLoading({
        title: '下载中...'
      })
      
      uni.downloadFile({
        url: 'https://example.com/file.pdf',
        success: (res) => {
          if (res.statusCode === 200) {
            uni.saveFile({
              tempFilePath: res.tempFilePath,
              success: (saveRes) => {
                this.savedFilePath = saveRes.savedFilePath
                uni.hideLoading()
                uni.showToast({
                  title: '保存成功',
                  icon: 'success'
                })
              },
              fail: (err) => {
                uni.hideLoading()
                uni.showToast({
                  title: '保存失败',
                  icon: 'none'
                })
              }
            })
          }
        },
        fail: (err) => {
          uni.hideLoading()
          uni.showToast({
            title: '下载失败',
            icon: 'none'
          })
        }
      })
    }
  }
}
</script>
```

### 示例 5: 保存多个文件

```javascript
function saveMultipleFiles(tempFilePaths) {
  const savedFilePaths = []
  let completedCount = 0
  
  tempFilePaths.forEach((tempFilePath, index) => {
    uni.saveFile({
      tempFilePath: tempFilePath,
      success: (res) => {
        savedFilePaths[index] = res.savedFilePath
        completedCount++
        
        if (completedCount === tempFilePaths.length) {
          console.log('所有文件已保存', savedFilePaths)
          uni.showToast({
            title: '全部保存成功',
            icon: 'success'
          })
        }
      },
      fail: (err) => {
        console.error(`文件${index + 1}保存失败`, err)
        completedCount++
      }
    })
  })
}

// 使用
uni.chooseImage({
  count: 3,
  success: (res) => {
    saveMultipleFiles(res.tempFilePaths)
  }
})
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| tempFilePath | String | 是 | 需要保存的文件的临时路径 |

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| savedFilePath | String | 文件的保存路径 |

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
2. 保存的文件可以通过 `uni.getSavedFileList` 获取列表
3. 保存的文件可以通过 `uni.removeSavedFile` 删除
4. 建议在保存前检查文件大小

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/file/file.html#savefile
- **获取文件列表**: https://uniapp.dcloud.net.cn/api/file/file.html#getsavedfilelist
- **删除文件**: https://uniapp.dcloud.net.cn/api/file/file.html#removesavedfile
