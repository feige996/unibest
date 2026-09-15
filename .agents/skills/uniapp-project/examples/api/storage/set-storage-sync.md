# uni.setStorageSync - 同步设置存储数据示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/storage/storage.html#setstoragesync

## 概述

`uni.setStorageSync` 用于同步将数据存储在本地缓存中指定的 key 中。

## 基础用法

```javascript
try {
  uni.setStorageSync('key', 'value')
  console.log('存储成功')
} catch (err) {
  console.error('存储失败', err)
}
```

## 完整示例

### 示例 1: 存储用户信息

```javascript
try {
  const userInfo = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  }
  uni.setStorageSync('userInfo', userInfo)
  console.log('存储成功')
} catch (err) {
  console.error('存储失败', err)
}
```

### 示例 2: 存储 Token

```javascript
function saveToken(token) {
  try {
    uni.setStorageSync('token', token)
    return true
  } catch (err) {
    console.error('存储Token失败', err)
    return false
  }
}

// 使用
if (saveToken('abc123')) {
  console.log('Token已保存')
}
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <input v-model="username" placeholder="用户名" />
    <input v-model="email" placeholder="邮箱" />
    <button @click="saveUserInfo">保存用户信息</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: ''
    }
  },
  methods: {
    saveUserInfo() {
      try {
        const userInfo = {
          username: this.username,
          email: this.email
        }
        uni.setStorageSync('userInfo', userInfo)
        uni.showToast({
          title: '保存成功',
          icon: 'success'
        })
      } catch (err) {
        uni.showToast({
          title: '保存失败',
          icon: 'none'
        })
      }
    }
  }
}
</script>
```

### 示例 4: 封装存储函数

```javascript
// utils/storage.js
const storage = {
  set(key, value) {
    try {
      uni.setStorageSync(key, value)
      return true
    } catch (err) {
      console.error(`存储${key}失败`, err)
      return false
    }
  },
  
  setString(key, value) {
    return this.set(key, String(value))
  },
  
  setNumber(key, value) {
    return this.set(key, Number(value))
  },
  
  setBoolean(key, value) {
    return this.set(key, Boolean(value))
  },
  
  setObject(key, value) {
    return this.set(key, value)
  }
}

// 使用
storage.setString('token', 'abc123')
storage.setNumber('count', 10)
storage.setBoolean('isLogin', true)
storage.setObject('userInfo', { name: 'John' })
```

### 示例 5: 批量存储

```javascript
function saveMultipleData(data) {
  try {
    Object.keys(data).forEach(key => {
      uni.setStorageSync(key, data[key])
    })
    return true
  } catch (err) {
    console.error('批量存储失败', err)
    return false
  }
}

// 使用
saveMultipleData({
  token: 'abc123',
  userInfo: { name: 'John' },
  settings: { theme: 'dark' }
})
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| key | String | 是 | 本地缓存中指定的 key |
| data | Any | 是 | 需要存储的内容 |

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
2. 存储的数据类型与设置时一致
3. 建议使用 try-catch 处理错误
4. 单个 key 允许存储的最大数据长度为 1MB

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/storage/storage.html#setstoragesync
- **异步版本**: https://uniapp.dcloud.net.cn/api/storage/storage.html#setstorage
- **获取存储**: https://uniapp.dcloud.net.cn/api/storage/storage.html#getstoragesync
