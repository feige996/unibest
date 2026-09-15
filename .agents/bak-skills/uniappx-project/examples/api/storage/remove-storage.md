# uni.removeStorage - 删除存储数据示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/storage/storage.html#removestorage

## 概述

`uni.removeStorage` 用于从本地缓存中异步移除指定 key。

## 基础用法

```javascript
uni.removeStorage({
  key: 'userInfo',
  success: () => {
    console.log('删除成功')
  }
})
```

## 完整示例

### 示例 1: 删除单个数据

```javascript
uni.removeStorage({
  key: 'token',
  success: () => {
    console.log('Token 已删除')
  },
  fail: (err) => {
    console.error('删除失败', err)
  }
})
```

### 示例 2: 退出登录时清除数据

```javascript
function logout() {
  // 删除用户信息
  uni.removeStorage({
    key: 'userInfo',
    success: () => {
      console.log('用户信息已清除')
    }
  })
  
  // 删除 Token
  uni.removeStorage({
    key: 'token',
    success: () => {
      console.log('Token 已清除')
      // 跳转到登录页
      uni.reLaunch({
        url: '/pages/login/login'
      })
    }
  })
}
```

### 示例 3: 批量删除

```javascript
const keysToRemove = ['userInfo', 'token', 'settings']

keysToRemove.forEach(key => {
  uni.removeStorage({
    key: key,
    success: () => {
      console.log(`${key} 已删除`)
    }
  })
})
```

### 示例 4: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="clearUserData">清除用户数据</button>
    <button @click="clearAllData">清除所有数据</button>
  </view>
</template>

<script>
export default {
  methods: {
    clearUserData() {
      uni.removeStorage({
        key: 'userInfo',
        success: () => {
          uni.showToast({
            title: '用户数据已清除',
            icon: 'success'
          })
        }
      })
    },
    clearAllData() {
      uni.clearStorage({
        success: () => {
          uni.showToast({
            title: '所有数据已清除',
            icon: 'success'
          })
        }
      })
    }
  }
}
</script>
```

### 示例 5: 同步版本

```javascript
try {
  uni.removeStorageSync('userInfo')
  console.log('删除成功')
} catch (err) {
  console.error('删除失败', err)
}
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| key | String | 是 | 本地缓存中指定的 key |

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

1. 如果 key 不存在，不会报错
2. 建议使用同步版本 `removeStorageSync` 性能更好
3. 删除操作是异步的，需要等待 success 回调
4. 退出登录时建议清除所有相关数据

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/storage/storage.html#removestorage
- **同步版本**: https://doc.dcloud.net.cn/uni-app-x/api/storage/storage.html#removestoragesync
- **清除所有**: https://doc.dcloud.net.cn/uni-app-x/api/storage/storage.html#clearstorage
