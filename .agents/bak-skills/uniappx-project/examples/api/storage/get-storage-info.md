# uni.getStorageInfo - 获取存储信息示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/storage/storage.html#getstorageinfo

## 概述

`uni.getStorageInfo` 用于异步获取当前 storage 的相关信息。

## 基础用法

```javascript
uni.getStorageInfo({
  success: (res) => {
    console.log('存储信息', res)
  }
})
```

## 完整示例

### 示例 1: 获取存储信息

```javascript
uni.getStorageInfo({
  success: (res) => {
    console.log('所有key', res.keys)
    console.log('当前占用的空间大小', res.currentSize, 'KB')
    console.log('限制的空间大小', res.limitSize, 'KB')
  },
  fail: (err) => {
    console.error('获取失败', err)
  }
})
```

### 示例 2: 检查存储空间

```javascript
function checkStorageSpace() {
  uni.getStorageInfo({
    success: (res) => {
      const usagePercent = (res.currentSize / res.limitSize * 100).toFixed(2)
      console.log(`存储使用率：${usagePercent}%`)
      
      if (usagePercent > 80) {
        uni.showModal({
          title: '提示',
          content: '存储空间不足，建议清理缓存',
          showCancel: false
        })
      }
    }
  })
}
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="getStorageInfo">查看存储信息</button>
    <view v-if="storageInfo" class="storage-info">
      <text>已使用：{{ storageInfo.currentSize }}KB / {{ storageInfo.limitSize }}KB</text>
      <text>使用率：{{ usagePercent }}%</text>
      <text>存储的key数量：{{ storageInfo.keys.length }}</text>
      <view class="key-list">
        <text v-for="key in storageInfo.keys" :key="key" class="key-item">
          {{ key }}
        </text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      storageInfo: null
    }
  },
  computed: {
    usagePercent() {
      if (!this.storageInfo) return 0
      return ((this.storageInfo.currentSize / this.storageInfo.limitSize) * 100).toFixed(2)
    }
  },
  methods: {
    getStorageInfo() {
      uni.getStorageInfo({
        success: (res) => {
          this.storageInfo = res
        }
      })
    }
  }
}
</script>

<style>
.storage-info {
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}
.key-list {
  margin-top: 10px;
}
.key-item {
  display: block;
  padding: 5px;
  font-size: 24rpx;
  color: #666;
}
</style>
```

### 示例 4: 清理存储空间

```javascript
function clearStorageIfNeeded() {
  uni.getStorageInfo({
    success: (res) => {
      const usagePercent = (res.currentSize / res.limitSize) * 100
      
      if (usagePercent > 80) {
        uni.showModal({
          title: '提示',
          content: '存储空间不足，是否清理缓存？',
          success: (modalRes) => {
            if (modalRes.confirm) {
              // 清理非关键数据
              const importantKeys = ['token', 'userInfo']
              res.keys.forEach(key => {
                if (!importantKeys.includes(key)) {
                  uni.removeStorageSync(key)
                }
              })
              uni.showToast({
                title: '清理完成',
                icon: 'success'
              })
            }
          }
        })
      }
    }
  })
}
```

### 示例 5: 同步版本

```javascript
try {
  const storageInfo = uni.getStorageInfoSync()
  console.log('所有key', storageInfo.keys)
  console.log('当前大小', storageInfo.currentSize, 'KB')
  console.log('限制大小', storageInfo.limitSize, 'KB')
} catch (err) {
  console.error('获取失败', err)
}
```

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| keys | Array | 当前 storage 中所有的 key |
| currentSize | Number | 当前占用的空间大小，单位 KB |
| limitSize | Number | 限制的空间大小，单位 KB |

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

1. 可以通过 `keys` 获取所有存储的 key
2. `currentSize` 和 `limitSize` 单位都是 KB
3. 建议定期检查存储空间使用情况
4. 同步版本 `getStorageInfoSync` 性能更好

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/storage/storage.html#getstorageinfo
- **同步版本**: https://doc.dcloud.net.cn/uni-app-x/api/storage/storage.html#getstorageinfosync
- **清除存储**: https://doc.dcloud.net.cn/uni-app-x/api/storage/storage.html#clearstorage
