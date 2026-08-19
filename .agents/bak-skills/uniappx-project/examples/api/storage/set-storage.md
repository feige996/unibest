# uni.setStorage - 数据存储示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/storage/storage.html#setstorage

## 概述

`uni.setStorage` 用于将数据存储在本地缓存中指定的 key 中，异步接口。

## 基础用法

```javascript
uni.setStorage({
  key: 'userInfo',
  data: {
    name: 'John',
    age: 30
  },
  success: () => {
    console.log('存储成功')
  },
  fail: (err) => {
    console.error('存储失败', err)
  }
})
```

## 完整示例

### 示例 1: 存储用户信息

```javascript
// 存储用户信息
const userInfo = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://example.com/avatar.jpg'
}

uni.setStorage({
  key: 'userInfo',
  data: userInfo,
  success: () => {
    uni.showToast({
      title: '保存成功',
      icon: 'success'
    })
  },
  fail: (err) => {
    uni.showToast({
      title: '保存失败',
      icon: 'none'
    })
  }
})
```

### 示例 2: 存储字符串

```javascript
uni.setStorage({
  key: 'token',
  data: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  success: () => {
    console.log('Token 已保存')
  }
})
```

### 示例 3: 存储数组

```javascript
const shoppingCart = [
  { id: 1, name: '商品1', price: 99 },
  { id: 2, name: '商品2', price: 199 }
]

uni.setStorage({
  key: 'shoppingCart',
  data: shoppingCart,
  success: () => {
    console.log('购物车已保存')
  }
})
```

### 示例 4: 封装存储函数

```javascript
// utils/storage.js
const storage = {
  set(key, data) {
    return new Promise((resolve, reject) => {
      uni.setStorage({
        key: key,
        data: data,
        success: () => {
          resolve()
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  },
  
  get(key) {
    return new Promise((resolve, reject) => {
      uni.getStorage({
        key: key,
        success: (res) => {
          resolve(res.data)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  }
}

// 使用
storage.set('userInfo', { name: 'John' })
  .then(() => {
    console.log('存储成功')
  })
  .catch(err => {
    console.error('存储失败', err)
  })
```

## 同步版本

使用 `uni.setStorageSync` 进行同步存储：

```javascript
try {
  uni.setStorageSync('userInfo', {
    name: 'John',
    age: 30
  })
  console.log('存储成功')
} catch (err) {
  console.error('存储失败', err)
}
```

## 注意事项

1. 存储的数据会被持久化，除非手动删除或清除缓存
2. 单个 key 允许存储的最大数据长度为 1MB
3. 异步接口不会阻塞后续代码执行
4. 建议使用 try-catch 处理同步接口的错误

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/storage/storage.html#setstorage
- **同步版本**: https://doc.dcloud.net.cn/uni-app-x/api/storage/storage.html#setstoragesync
