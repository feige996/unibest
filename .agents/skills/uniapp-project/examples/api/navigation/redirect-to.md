# uni.redirectTo - 重定向跳转示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/router.html#redirectto

## 概述

`uni.redirectTo` 用于关闭当前页面，跳转到应用内的某个页面。

## 基础用法

```javascript
uni.redirectTo({
  url: '/pages/detail/detail'
})
```

## 完整示例

### 示例 1: 基本重定向

```javascript
uni.redirectTo({
  url: '/pages/detail/detail',
  success: () => {
    console.log('跳转成功')
  },
  fail: (err) => {
    console.error('跳转失败', err)
  }
})
```

### 示例 2: 带参数重定向

```javascript
uni.redirectTo({
  url: '/pages/detail/detail?id=123&name=test'
})

// 在目标页面接收参数
// pages/detail/detail.vue
export default {
  onLoad(options) {
    console.log('接收到的参数', options)
    // { id: '123', name: 'test' }
  }
}
```

### 示例 3: 登录后重定向

```javascript
function login() {
  // 登录逻辑
  uni.request({
    url: 'https://api.example.com/login',
    method: 'POST',
    data: { username: 'test', password: '123456' },
    success: (res) => {
      if (res.data.success) {
        // 保存 token
        uni.setStorageSync('token', res.data.token)
        // 重定向到首页（关闭登录页）
        uni.redirectTo({
          url: '/pages/index/index'
        })
      }
    }
  })
}
```

### 示例 4: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="goToDetail">跳转到详情页</button>
  </view>
</template>

<script>
export default {
  methods: {
    goToDetail() {
      uni.redirectTo({
        url: '/pages/detail/detail?id=123'
      })
    }
  }
}
</script>
```

### 示例 5: 与 navigateTo 的区别

```javascript
// navigateTo: 保留当前页面，可以返回
uni.navigateTo({
  url: '/pages/detail/detail'
})
// 页面栈: [首页, 详情页]

// redirectTo: 关闭当前页面，不能返回
uni.redirectTo({
  url: '/pages/detail/detail'
})
// 页面栈: [详情页] (首页被关闭)
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| url | String | 是 | 需要跳转的应用内非 tabBar 的页面的路径 |

## 平台兼容性

| 平台 | 支持情况 |
|------|---------|
| H5 | ✅ |
| 微信小程序 | ✅ |
| 支付宝小程序 | ✅ |
| 微信小程序 | ✅ |
| 支付宝小程序 | ✅ |
| 百度小程序 | ✅ |
| 字节跳动小程序 | ✅ |
| QQ 小程序 | ✅ |
| 快手小程序 | ✅ |
| App | ✅ |
| 快应用 | ✅ |

## 注意事项

1. 不能跳转到 tabBar 页面，需要使用 `uni.switchTab`
2. 会关闭当前页面，无法返回
3. 路径前需要加 `/`，表示从根目录开始
4. 适合登录后跳转等不需要返回的场景

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/router.html#redirectto
- **保留页面跳转**: https://uniapp.dcloud.net.cn/api/router.html#navigateto
- **重新启动**: https://uniapp.dcloud.net.cn/api/router.html#relaunch
