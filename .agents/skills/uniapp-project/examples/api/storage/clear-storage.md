# uni.clearStorage - 清除所有存储数据示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/storage/storage.html#clearstorage

## 概述

`uni.clearStorage` 用于清理本地数据缓存，清除所有存储的数据。

## 基础用法

```javascript
uni.clearStorage({
  success: () => {
    console.log('清除成功')
  }
})
```

## 完整示例

### 示例 1: 清除所有数据

```javascript
uni.clearStorage({
  success: () => {
    console.log('所有数据已清除')
    uni.showToast({
      title: '清除成功',
      icon: 'success'
    })
  },
  fail: (err) => {
    console.error('清除失败', err)
  }
})
```

### 示例 2: 退出登录时清除

```javascript
function logout() {
  uni.clearStorage({
    success: () => {
      console.log('数据已清除')
      // 跳转到登录页
      uni.reLaunch({
        url: '/pages/login/login'
      })
    }
  })
}
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="clearAllData">清除所有数据</button>
  </view>
</template>

<script>
export default {
  methods: {
    clearAllData() {
      uni.showModal({
        title: '提示',
        content: '确定要清除所有数据吗？此操作不可恢复',
        success: (res) => {
          if (res.confirm) {
            uni.clearStorage({
              success: () => {
                uni.showToast({
                  title: '清除成功',
                  icon: 'success'
                })
                // 重新加载页面
                setTimeout(() => {
                  uni.reLaunch({
                    url: '/pages/index/index'
                  })
                }, 1500)
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

### 示例 4: 同步版本

```javascript
try {
  uni.clearStorageSync()
  console.log('清除成功')
} catch (err) {
  console.error('清除失败', err)
}
```

## 参数说明

此 API 无需参数。

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

1. 此操作会清除所有本地存储的数据，请谨慎使用
2. 建议在清除前提示用户确认
3. 同步版本 `clearStorageSync` 性能更好
4. 清除后可能需要重新登录或初始化数据

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/storage/storage.html#clearstorage
- **同步版本**: https://uniapp.dcloud.net.cn/api/storage/storage.html#clearstoragesync
- **删除单个**: https://uniapp.dcloud.net.cn/api/storage/storage.html#removestorage
