# uni.hideNavigationBarLoading - 隐藏导航栏加载动画示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/ui/navigation-bar.html#hidenavigationbarloading

## 概述

`uni.hideNavigationBarLoading` 用于隐藏当前页面导航栏的加载动画。

## 基础用法

```javascript
uni.hideNavigationBarLoading()
```

## 完整示例

### 示例 1: 基本使用

```javascript
// 显示加载动画
uni.showNavigationBarLoading()

// 隐藏加载动画
uni.hideNavigationBarLoading()
```

### 示例 2: 网络请求中使用

```javascript
// 显示加载动画
uni.showNavigationBarLoading()

uni.request({
  url: 'https://api.example.com/data',
  success: (res) => {
    console.log('数据', res.data)
  },
  complete: () => {
    // 请求完成后隐藏
    uni.hideNavigationBarLoading()
  }
})
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="loadData">加载数据</button>
  </view>
</template>

<script>
export default {
  methods: {
    loadData() {
      uni.showNavigationBarLoading()
      
      uni.request({
        url: 'https://api.example.com/data',
        success: (res) => {
          console.log('数据', res.data)
        },
        fail: (err) => {
          console.error('加载失败', err)
        },
        complete: () => {
          // 无论成功失败都要隐藏
          uni.hideNavigationBarLoading()
        }
      })
    }
  }
}
</script>
```

### 示例 4: 确保隐藏

```javascript
function loadData() {
  let loadingShown = false
  
  try {
    uni.showNavigationBarLoading()
    loadingShown = true
    
    uni.request({
      url: 'https://api.example.com/data',
      success: (res) => {
        console.log('数据', res.data)
      },
      complete: () => {
        if (loadingShown) {
          uni.hideNavigationBarLoading()
          loadingShown = false
        }
      }
    })
  } catch (err) {
    // 确保异常时也隐藏
    if (loadingShown) {
      uni.hideNavigationBarLoading()
      loadingShown = false
    }
  }
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

1. 必须与 `uni.showNavigationBarLoading` 配对使用
2. 建议在 `complete` 回调中调用，确保无论成功失败都会隐藏
3. 多次调用 `showNavigationBarLoading` 后，只需调用一次 `hideNavigationBarLoading` 即可隐藏

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/ui/navigation-bar.html#hidenavigationbarloading
- **显示加载**: https://doc.dcloud.net.cn/uni-app-x/api/ui/navigation-bar.html#shownavigationbarloading
