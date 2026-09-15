# uni.showLoading - 加载提示示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/ui/prompt.html#showloading

## 概述

`uni.showLoading` 用于显示加载提示框，常用于异步操作时显示加载状态。

## 基础用法

```javascript
uni.showLoading({
  title: '加载中...'
})
```

## 完整示例

### 示例 1: 基本加载提示

```javascript
uni.showLoading({
  title: '加载中...',
  mask: true
})

// 操作完成后隐藏
setTimeout(() => {
  uni.hideLoading()
}, 2000)
```

### 示例 2: 网络请求时显示加载

```javascript
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
    uni.hideLoading()
  }
})
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="loadData">加载数据</button>
    <view v-if="data">{{ data }}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      data: null
    }
  },
  methods: {
    loadData() {
      uni.showLoading({
        title: '加载中...',
        mask: true
      })
      
      // 模拟请求
      setTimeout(() => {
        this.data = '数据加载完成'
        uni.hideLoading()
        uni.showToast({
          title: '加载成功',
          icon: 'success'
        })
      }, 2000)
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

### 示例 5: 配合请求使用

```javascript
// 显示加载
uni.showLoading({
  title: '提交中...',
  mask: true
})

// 提交数据
uni.request({
  url: 'https://api.example.com/submit',
  method: 'POST',
  data: { name: 'test' },
  success: (res) => {
    uni.hideLoading()
    uni.showToast({
      title: '提交成功',
      icon: 'success'
    })
  },
  fail: (err) => {
    uni.hideLoading()
    uni.showToast({
      title: '提交失败',
      icon: 'none'
    })
  }
})
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| title | String | 是 | 提示的内容 |
| mask | Boolean | 否 | 是否显示透明蒙层，防止触摸穿透 |

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

1. 必须调用 `uni.hideLoading()` 才能关闭加载提示
2. `mask: true` 可以防止用户在加载时操作页面
3. 建议在异步操作的开始显示，在完成时隐藏
4. 不要在 `success` 回调中忘记调用 `hideLoading`

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/ui/prompt.html#showloading
- **隐藏加载**: https://uniapp.dcloud.net.cn/api/ui/prompt.html#hideloading
