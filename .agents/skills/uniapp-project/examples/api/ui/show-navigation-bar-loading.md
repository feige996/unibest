# uni.showNavigationBarLoading - 显示导航栏加载动画示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/ui/navigation-bar.html#shownavigationbarloading

## 概述

`uni.showNavigationBarLoading` 用于在当前页面导航栏显示加载动画。

## 基础用法

```javascript
uni.showNavigationBarLoading()
```

## 完整示例

### 示例 1: 基本使用

```javascript
// 显示加载动画
uni.showNavigationBarLoading()

// 隐藏加载动画
setTimeout(() => {
  uni.hideNavigationBarLoading()
}, 2000)
```

### 示例 2: 网络请求时显示

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
      // 显示导航栏加载动画
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

### 示例 4: 封装加载函数

```javascript
// utils/loading.js
const loading = {
  showNavBar() {
    uni.showNavigationBarLoading()
  },
  
  hideNavBar() {
    uni.hideNavigationBarLoading()
  },
  
  async withNavBarLoading(fn) {
    this.showNavBar()
    try {
      const result = await fn()
      return result
    } finally {
      this.hideNavBar()
    }
  }
}

// 使用
loading.withNavBarLoading(async () => {
  const data = await fetchData()
  return data
})
```

### 示例 5: 页面刷新时显示

```vue
<template>
  <view class="container">
    <button @click="refresh">刷新</button>
  </view>
</template>

<script>
export default {
  methods: {
    refresh() {
      // 显示导航栏加载动画
      uni.showNavigationBarLoading()
      
      // 模拟刷新
      setTimeout(() => {
        uni.hideNavigationBarLoading()
        uni.showToast({
          title: '刷新成功',
          icon: 'success'
        })
      }, 2000)
    }
  },
  onPullDownRefresh() {
    // 下拉刷新时显示
    uni.showNavigationBarLoading()
    
    // 刷新数据
    this.loadData()
  },
  methods: {
    loadData() {
      uni.request({
        url: 'https://api.example.com/data',
        success: (res) => {
          console.log('数据', res.data)
        },
        complete: () => {
          uni.hideNavigationBarLoading()
          uni.stopPullDownRefresh()
        }
      })
    }
  }
}
</script>
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

1. 必须与 `uni.hideNavigationBarLoading` 配对使用
2. 在导航栏标题旁边显示加载动画
3. 适合页面级别的加载状态
4. 建议在 `complete` 回调中隐藏

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/ui/navigation-bar.html#shownavigationbarloading
- **隐藏加载**: https://uniapp.dcloud.net.cn/api/ui/navigation-bar.html#hidenavigationbarloading
