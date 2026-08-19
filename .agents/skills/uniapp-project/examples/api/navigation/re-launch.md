# uni.reLaunch - 重新启动应用示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/router.html#relaunch

## 概述

`uni.reLaunch` 用于关闭所有页面，打开到应用内的某个页面。

## 基础用法

```javascript
uni.reLaunch({
  url: '/pages/index/index'
})
```

## 完整示例

### 示例 1: 基本重新启动

```javascript
uni.reLaunch({
  url: '/pages/index/index',
  success: () => {
    console.log('重新启动成功')
  },
  fail: (err) => {
    console.error('重新启动失败', err)
  }
})
```

### 示例 2: 退出登录后重新启动

```javascript
function logout() {
  // 清除所有数据
  uni.clearStorageSync()
  
  // 重新启动到登录页
  uni.reLaunch({
    url: '/pages/login/login'
  })
}
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="restartApp">重新启动应用</button>
  </view>
</template>

<script>
export default {
  methods: {
    restartApp() {
      uni.showModal({
        title: '提示',
        content: '确定要重新启动应用吗？',
        success: (res) => {
          if (res.confirm) {
            uni.reLaunch({
              url: '/pages/index/index'
            })
          }
        }
      })
    }
  }
}
</script>
```

### 示例 4: 与 navigateTo 和 redirectTo 的区别

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

// reLaunch: 关闭所有页面，重新启动
uni.reLaunch({
  url: '/pages/detail/detail'
})
// 页面栈: [详情页] (所有页面都被关闭)
```

### 示例 5: 登录后重新启动

```javascript
function login() {
  uni.request({
    url: 'https://api.example.com/login',
    method: 'POST',
    data: { username: 'test', password: '123456' },
    success: (res) => {
      if (res.data.success) {
        uni.setStorageSync('token', res.data.token)
        // 重新启动到首页
        uni.reLaunch({
          url: '/pages/index/index'
        })
      }
    }
  })
}
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
| 百度小程序 | ✅ |
| 字节跳动小程序 | ✅ |
| QQ 小程序 | ✅ |
| 快手小程序 | ✅ |
| App | ✅ |
| 快应用 | ✅ |

## 注意事项

1. 不能跳转到 tabBar 页面，需要使用 `uni.switchTab`
2. 会关闭所有页面，无法返回
3. 路径前需要加 `/`，表示从根目录开始
4. 适合退出登录、重新启动等场景

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/router.html#relaunch
- **页面跳转**: https://uniapp.dcloud.net.cn/api/router.html#navigateto
