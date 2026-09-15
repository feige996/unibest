# 数据存储 API

## 概述

数据存储 API 用于在本地存储和获取数据。

## API 列表

### uni.setStorage

将数据存储在本地缓存中指定的 key 中。

**详细文档**：https://uniapp.dcloud.net.cn/api/storage/storage.html#setstorage

**参数**：
- `key` (String) - 本地缓存中指定的 key
- `data` (Any) - 需要存储的内容
- `success` (Function) - 接口调用成功的回调函数
- `fail` (Function) - 接口调用失败的回调函数
- `complete` (Function) - 接口调用结束的回调函数

**示例**：
```javascript
uni.setStorage({
  key: 'userInfo',
  data: { name: 'John', age: 30 },
  success: () => {
    console.log('存储成功')
  }
})
```

### uni.getStorage

从本地缓存中异步获取指定 key 的内容。

**详细文档**：https://uniapp.dcloud.net.cn/api/storage/storage.html#getstorage

### uni.removeStorage

从本地缓存中异步移除指定 key。

**详细文档**：https://uniapp.dcloud.net.cn/api/storage/storage.html#removestorage

### uni.clearStorage

清理本地数据缓存。

**详细文档**：https://uniapp.dcloud.net.cn/api/storage/storage.html#clearstorage

### uni.setStorageSync

同步将数据存储在本地缓存中指定的 key 中。

**详细文档**：https://uniapp.dcloud.net.cn/api/storage/storage.html#setstoragesync

### uni.getStorageSync

从本地缓存中同步获取指定 key 的内容。

**详细文档**：https://uniapp.dcloud.net.cn/api/storage/storage.html#getstoragesync

## 参考资源

- [uni-app 数据存储文档](https://uniapp.dcloud.net.cn/api/storage/storage.html)
