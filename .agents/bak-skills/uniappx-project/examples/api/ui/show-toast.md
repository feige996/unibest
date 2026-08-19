# uni.showToast - 消息提示示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#showtoast

## 概述

`uni.showToast` 用于显示消息提示框，常用于操作反馈。

## 基础用法

```javascript
uni.showToast({
  title: '操作成功',
  icon: 'success'
})
```

## 完整示例

### 示例 1: 成功提示

```javascript
uni.showToast({
  title: '操作成功',
  icon: 'success',
  duration: 2000
})
```

### 示例 2: 错误提示

```javascript
uni.showToast({
  title: '操作失败',
  icon: 'error',
  duration: 2000
})
```

### 示例 3: 加载提示

```javascript
uni.showToast({
  title: '加载中...',
  icon: 'loading',
  duration: 2000
})
```

### 示例 4: 无图标提示

```javascript
uni.showToast({
  title: '这是一条消息',
  icon: 'none',
  duration: 2000
})
```

### 示例 5: 自定义图片

```javascript
uni.showToast({
  title: '自定义图标',
  image: '/static/custom-icon.png',
  duration: 2000
})
```

### 示例 6: 封装提示函数

```javascript
// utils/toast.js
const toast = {
  success(title, duration = 2000) {
    uni.showToast({
      title: title,
      icon: 'success',
      duration: duration
    })
  },
  
  error(title, duration = 2000) {
    uni.showToast({
      title: title,
      icon: 'error',
      duration: duration
    })
  },
  
  loading(title, duration = 2000) {
    uni.showToast({
      title: title,
      icon: 'loading',
      duration: duration
    })
  },
  
  info(title, duration = 2000) {
    uni.showToast({
      title: title,
      icon: 'none',
      duration: duration
    })
  }
}

// 使用
toast.success('保存成功')
toast.error('保存失败')
toast.info('这是一条消息')
```

### 示例 7: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="handleSuccess">成功提示</button>
    <button @click="handleError">错误提示</button>
    <button @click="handleLoading">加载提示</button>
  </view>
</template>

<script>
export default {
  methods: {
    handleSuccess() {
      uni.showToast({
        title: '操作成功',
        icon: 'success'
      })
    },
    handleError() {
      uni.showToast({
        title: '操作失败',
        icon: 'error'
      })
    },
    handleLoading() {
      uni.showToast({
        title: '加载中...',
        icon: 'loading',
        duration: 3000
      })
    }
  }
}
</script>
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| title | String | 是 | 提示的内容 |
| icon | String | 否 | 图标类型，可选值：success、error、loading、none |
| image | String | 否 | 自定义图标的本地路径 |
| duration | Number | 否 | 提示的延迟时间，单位 ms，默认 2000 |
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

1. `title` 长度限制：微信小程序最多 7 个汉字长度
2. 同时只能显示一个 toast，新的 toast 会覆盖旧的
3. 使用 `uni.hideToast()` 可以手动关闭 toast
4. `mask` 参数在某些平台可能不支持

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#showtoast
- **隐藏提示**: https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#hidetoast
