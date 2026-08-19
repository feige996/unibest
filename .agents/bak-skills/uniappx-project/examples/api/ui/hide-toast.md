# uni.hideToast - 隐藏消息提示示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#hidetoast

## 概述

`uni.hideToast` 用于隐藏消息提示框。

## 基础用法

```javascript
uni.hideToast()
```

## 完整示例

### 示例 1: 基本使用

```javascript
// 显示提示
uni.showToast({
  title: '操作成功',
  icon: 'success'
})

// 提前隐藏
setTimeout(() => {
  uni.hideToast()
}, 1000)
```

### 示例 2: 手动控制提示显示时间

```javascript
function showCustomToast(title, duration = 2000) {
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration
  })
  
  // 如果需要提前隐藏
  setTimeout(() => {
    uni.hideToast()
  }, duration - 500)
}
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="showMessage">显示消息</button>
    <button @click="hideMessage">隐藏消息</button>
  </view>
</template>

<script>
export default {
  methods: {
    showMessage() {
      uni.showToast({
        title: '这是一条消息',
        icon: 'none',
        duration: 5000
      })
    },
    hideMessage() {
      uni.hideToast()
    }
  }
}
</script>
```

### 示例 4: 替换提示内容

```javascript
function showReplacingToast(messages) {
  let currentIndex = 0
  
  const showNext = () => {
    if (currentIndex < messages.length) {
      uni.showToast({
        title: messages[currentIndex],
        icon: 'none',
        duration: 2000
      })
      currentIndex++
      
      setTimeout(() => {
        uni.hideToast()
        setTimeout(showNext, 100)
      }, 2000)
    }
  }
  
  showNext()
}

// 使用
showReplacingToast(['消息1', '消息2', '消息3'])
```

### 示例 5: 确保隐藏提示

```javascript
function showTemporaryToast(title) {
  uni.showToast({
    title: title,
    icon: 'none',
    duration: 3000
  })
  
  // 3秒后自动隐藏
  setTimeout(() => {
    uni.hideToast()
  }, 3000)
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

1. 用于提前隐藏通过 `uni.showToast` 显示的提示
2. 如果不调用，提示会在 `duration` 时间后自动消失
3. 建议在需要立即隐藏提示时使用
4. 通常不需要手动调用，除非需要提前隐藏

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#hidetoast
- **显示提示**: https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#showtoast
