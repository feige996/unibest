# uni.getStorage - 获取存储数据示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/storage/storage.html#getstorage

## 概述

`uni.getStorage` 用于从本地缓存中异步获取指定 key 的内容。

## 基础用法

```javascript
uni.getStorage({
  key: 'userInfo',
  success: (res) => {
    console.log('获取的数据', res.data)
  }
})
```

## 完整示例

### 示例 1: 获取用户信息

```javascript
uni.getStorage({
  key: 'userInfo',
  success: (res) => {
    const userInfo = res.data
    console.log('用户信息', userInfo)
    // 使用用户信息
  },
  fail: (err) => {
    console.error('获取失败', err)
    // 数据不存在或获取失败
  }
})
```

### 示例 2: 获取字符串

```javascript
uni.getStorage({
  key: 'token',
  success: (res) => {
    const token = res.data
    console.log('Token', token)
    // 使用 token
  }
})
```

### 示例 3: 获取数组

```javascript
uni.getStorage({
  key: 'shoppingCart',
  success: (res) => {
    const cart = res.data || []
    console.log('购物车', cart)
  }
})
```

### 示例 4: 封装获取函数

```javascript
// utils/storage.js
const storage = {
  get(key) {
    return new Promise((resolve, reject) => {
      uni.getStorage({
        key: key,
        success: (res) => {
          resolve(res.data)
        },
        fail: (err) => {
          if (err.errMsg.includes('data not found')) {
            resolve(null) // 数据不存在返回 null
          } else {
            reject(err)
          }
        }
      })
    })
  }
}

// 使用
storage.get('userInfo')
  .then(data => {
    if (data) {
      console.log('用户信息', data)
    } else {
      console.log('数据不存在')
    }
  })
  .catch(err => {
    console.error('获取失败', err)
  })
```

### 示例 5: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="loadUserInfo">加载用户信息</button>
    <view v-if="userInfo" class="user-info">
      <text>用户名：{{ userInfo.name }}</text>
      <text>邮箱：{{ userInfo.email }}</text>
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
      uni.getStorage({
        key: 'userInfo',
        success: (res) => {
          this.userInfo = res.data
        },
        fail: () => {
          uni.showToast({
            title: '未登录',
            icon: 'none'
          })
        }
      })
    }
  }
}
</script>
```

## 同步版本

使用 `uni.getStorageSync` 进行同步获取：

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

## 注意事项

1. 如果 key 不存在，会触发 fail 回调
2. 建议使用 try-catch 处理同步接口的错误
3. 获取的数据类型与存储时一致
4. 异步接口不会阻塞后续代码执行

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/storage/storage.html#getstorage
- **同步版本**: https://uniapp.dcloud.net.cn/api/storage/storage.html#getstoragesync
- **设置存储**: https://uniapp.dcloud.net.cn/api/storage/storage.html#setstorage
