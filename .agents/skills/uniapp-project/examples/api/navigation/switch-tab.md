# uni.switchTab - 切换 TabBar 页面示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/router.html#switchtab

## 概述

`uni.switchTab` 用于跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。

## 基础用法

```javascript
uni.switchTab({
  url: '/pages/index/index'
})
```

## 完整示例

### 示例 1: 基本切换

```javascript
uni.switchTab({
  url: '/pages/index/index',
  success: () => {
    console.log('切换成功')
  },
  fail: (err) => {
    console.error('切换失败', err)
  }
})
```

### 示例 2: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="goToHome">回到首页</button>
    <button @click="goToCategory">分类</button>
    <button @click="goToCart">购物车</button>
    <button @click="goToProfile">我的</button>
  </view>
</template>

<script>
export default {
  methods: {
    goToHome() {
      uni.switchTab({
        url: '/pages/index/index'
      })
    },
    goToCategory() {
      uni.switchTab({
        url: '/pages/category/category'
      })
    },
    goToCart() {
      uni.switchTab({
        url: '/pages/cart/cart'
      })
    },
    goToProfile() {
      uni.switchTab({
        url: '/pages/profile/profile'
      })
    }
  }
}
</script>
```

### 示例 3: 登录后跳转到首页

```javascript
function login() {
  uni.request({
    url: 'https://api.example.com/login',
    method: 'POST',
    data: { username: 'test', password: '123456' },
    success: (res) => {
      if (res.data.success) {
        uni.setStorageSync('token', res.data.token)
        // 跳转到 tabBar 首页
        uni.switchTab({
          url: '/pages/index/index'
        })
      }
    }
  })
}
```

### 示例 4: 封装切换函数

```javascript
// utils/navigation.js
const navigation = {
  switchToTab(url) {
    uni.switchTab({
      url: url,
      fail: (err) => {
        console.error('切换失败', err)
        // 如果不是 tabBar 页面，使用 navigateTo
        uni.navigateTo({
          url: url
        })
      }
    })
  }
}

// 使用
navigation.switchToTab('/pages/index/index')
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| url | String | 是 | 需要跳转的 tabBar 页面的路径 |

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

1. 只能跳转到 `pages.json` 中配置的 tabBar 页面
2. 不能传递参数（URL 参数会被忽略）
3. 会关闭所有非 tabBar 页面
4. 如果目标页面不是 tabBar 页面，会触发 fail 回调

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/router.html#switchtab
- **页面跳转**: https://uniapp.dcloud.net.cn/api/router.html#navigateto
