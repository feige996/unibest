# uni.hideLoading - 隐藏加载提示示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#hideloading

## 概述

`uni.hideLoading` 用于隐藏加载提示框。

## 基础用法

```javascript
uni.hideLoading()
```

## 完整示例

### 示例 1: 基本使用

```javascript
// 显示加载
uni.showLoading({
  title: '加载中...'
})

// 隐藏加载
setTimeout(() => {
  uni.hideLoading()
}, 2000)
```

### 示例 2: 网络请求中使用

```javascript
// 显示加载
uni.showLoading({
  title: '加载中...',
  mask: true
})

uni.request({
  url: 'https://api.example.com/data',
  success: (res) => {
    console.log('数据', res.data)
  },
  complete: () => {
    // 请求完成后隐藏加载
    uni.hideLoading()
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
      uni.showLoading({
        title: '加载中...',
        mask: true
      })
      
      uni.request({
        url: 'https://api.example.com/data',
        success: (res) => {
          console.log('数据', res.data)
        },
        fail: (err) => {
          console.error('加载失败', err)
        },
        complete: () => {
          // 无论成功失败都要隐藏加载
          uni.hideLoading()
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
  show(title = '加载中...') {
    uni.showLoading({
      title: title,
      mask: true
    })
  },
  
  hide() {
    uni.hideLoading()
  },
  
  async withLoading(fn, title = '加载中...') {
    this.show(title)
    try {
      const result = await fn()
      return result
    } finally {
      this.hide()
    }
  }
}

// 使用
loading.withLoading(async () => {
  const data = await fetchData()
  return data
}, '加载数据中...')
```

### 示例 5: 确保隐藏加载

```javascript
function loadData() {
  let loadingShown = false
  
  try {
    uni.showLoading({
      title: '加载中...',
      mask: true
    })
    loadingShown = true
    
    // 执行加载逻辑
    uni.request({
      url: 'https://api.example.com/data',
      success: (res) => {
        console.log('数据', res.data)
      },
      complete: () => {
        if (loadingShown) {
          uni.hideLoading()
          loadingShown = false
        }
      }
    })
  } catch (err) {
    // 确保异常时也隐藏加载
    if (loadingShown) {
      uni.hideLoading()
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

1. 必须与 `uni.showLoading` 配对使用
2. 建议在 `complete` 回调中调用，确保无论成功失败都会隐藏
3. 多次调用 `showLoading` 后，只需调用一次 `hideLoading` 即可隐藏
4. 建议使用 try-finally 确保异常时也能隐藏

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#hideloading
- **显示加载**: https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#showloading
