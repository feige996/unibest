# uni.getStorageSync - 同步获取存储数据示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/storage/storage.html#getstoragesync

## 概述

`uni.getStorageSync` 用于从本地缓存中同步获取指定 key 的内容。

## 基础用法

```javascript
try {
  const value = uni.getStorageSync('key')
  console.log('获取的数据', value)
} catch (err) {
  console.error('获取失败', err)
}
```

## 完整示例

### 示例 1: 获取用户信息

```javascript
try {
  const userInfo = uni.getStorageSync('userInfo')
  if (userInfo) {
    console.log('用户信息', userInfo)
  } else {
    console.log('数据不存在')
  }
} catch (err) {
  console.error('获取失败', err)
}
```

### 示例 2: 获取 Token

```javascript
function getToken() {
  try {
    const token = uni.getStorageSync('token')
    return token || null
  } catch (err) {
    console.error('获取Token失败', err)
    return null
  }
}

// 使用
const token = getToken()
if (token) {
  console.log('Token存在', token)
} else {
  console.log('未登录')
}
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <view v-if="userInfo" class="user-info">
      <text>用户名：{{ userInfo.name }}</text>
      <text>邮箱：{{ userInfo.email }}</text>
    </view>
    <view v-else>
      <text>未登录</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfo: null
    }
  },
  onLoad() {
    this.loadUserInfo()
  },
  methods: {
    loadUserInfo() {
      try {
        const userInfo = uni.getStorageSync('userInfo')
        if (userInfo) {
          this.userInfo = userInfo
        }
      } catch (err) {
        console.error('获取用户信息失败', err)
      }
    }
  }
}
</script>
```

### 示例 4: 封装获取函数

```javascript
// utils/storage.js
const storage = {
  get(key, defaultValue = null) {
    try {
      const value = uni.getStorageSync(key)
      return value !== '' ? value : defaultValue
    } catch (err) {
      console.error(`获取${key}失败`, err)
      return defaultValue
    }
  },
  
  getString(key, defaultValue = '') {
    return this.get(key, defaultValue)
  },
  
  getNumber(key, defaultValue = 0) {
    const value = this.get(key, defaultValue)
    return Number(value) || defaultValue
  },
  
  getBoolean(key, defaultValue = false) {
    const value = this.get(key, defaultValue)
    return Boolean(value)
  },
  
  getObject(key, defaultValue = {}) {
    const value = this.get(key, defaultValue)
    return typeof value === 'object' ? value : defaultValue
  }
}

// 使用
const userInfo = storage.getObject('userInfo', {})
const token = storage.getString('token', '')
const count = storage.getNumber('count', 0)
```

### 示例 5: 检查数据是否存在

```javascript
function hasStorage(key) {
  try {
    const value = uni.getStorageSync(key)
    return value !== '' && value !== null && value !== undefined
  } catch (err) {
    return false
  }
}

// 使用
if (hasStorage('userInfo')) {
  console.log('用户信息存在')
} else {
  console.log('用户信息不存在')
}
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| key | String | 是 | 本地缓存中指定的 key |

## 返回值

| 类型 | 说明 |
|------|------|
| Any | key 对应的内容 |

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

1. 同步接口会阻塞后续代码执行，性能比异步接口好
2. 如果 key 不存在，返回空字符串
3. 建议使用 try-catch 处理错误
4. 适合在页面初始化时获取数据

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/storage/storage.html#getstoragesync
- **异步版本**: https://uniapp.dcloud.net.cn/api/storage/storage.html#getstorage
- **设置存储**: https://uniapp.dcloud.net.cn/api/storage/storage.html#setstoragesync
