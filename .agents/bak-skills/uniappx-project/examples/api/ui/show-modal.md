# uni.showModal - 模态弹窗示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#showmodal

## 概述

`uni.showModal` 用于显示模态弹窗，常用于确认操作。

## 基础用法

```javascript
uni.showModal({
  title: '提示',
  content: '确定要删除吗？',
  success: (res) => {
    if (res.confirm) {
      console.log('用户点击确定')
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})
```

## 完整示例

### 示例 1: 确认删除

```javascript
uni.showModal({
  title: '提示',
  content: '确定要删除这条记录吗？',
  confirmText: '删除',
  cancelText: '取消',
  success: (res) => {
    if (res.confirm) {
      // 执行删除操作
      console.log('确认删除')
    }
  }
})
```

### 示例 2: 自定义按钮文字

```javascript
uni.showModal({
  title: '提示',
  content: '确定要退出登录吗？',
  confirmText: '退出',
  cancelText: '取消',
  confirmColor: '#ff3b30',
  success: (res) => {
    if (res.confirm) {
      // 退出登录
      uni.removeStorageSync('token')
      uni.reLaunch({
        url: '/pages/login/login'
      })
    }
  }
})
```

### 示例 3: 只显示确定按钮

```javascript
uni.showModal({
  title: '提示',
  content: '操作成功',
  showCancel: false,
  success: (res) => {
    if (res.confirm) {
      console.log('用户点击确定')
    }
  }
})
```

### 示例 4: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="handleDelete">删除记录</button>
    <button @click="handleLogout">退出登录</button>
  </view>
</template>

<script>
export default {
  methods: {
    handleDelete() {
      uni.showModal({
        title: '确认删除',
        content: '删除后无法恢复，确定要删除吗？',
        confirmText: '删除',
        cancelText: '取消',
        confirmColor: '#ff3b30',
        success: (res) => {
          if (res.confirm) {
            // 执行删除
            this.deleteRecord()
          }
        }
      })
    },
    handleLogout() {
      uni.showModal({
        title: '提示',
        content: '确定要退出登录吗？',
        success: (res) => {
          if (res.confirm) {
            uni.removeStorageSync('token')
            uni.reLaunch({
              url: '/pages/login/login'
            })
          }
        }
      })
    },
    deleteRecord() {
      // 删除逻辑
      uni.showToast({
        title: '删除成功',
        icon: 'success'
      })
    }
  }
}
</script>
```

### 示例 5: 封装确认函数

```javascript
// utils/modal.js
const modal = {
  confirm(title, content) {
    return new Promise((resolve, reject) => {
      uni.showModal({
        title: title,
        content: content,
        success: (res) => {
          if (res.confirm) {
            resolve(true)
          } else {
            resolve(false)
          }
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  },
  
  alert(title, content) {
    return new Promise((resolve) => {
      uni.showModal({
        title: title,
        content: content,
        showCancel: false,
        success: () => {
          resolve()
        }
      })
    })
  }
}

// 使用
const result = await modal.confirm('提示', '确定要删除吗？')
if (result) {
  console.log('用户确认')
} else {
  console.log('用户取消')
}
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| title | String | 否 | 提示的标题 |
| content | String | 否 | 提示的内容 |
| showCancel | Boolean | 否 | 是否显示取消按钮，默认 true |
| cancelText | String | 否 | 取消按钮的文字，默认"取消" |
| cancelColor | String | 否 | 取消按钮的文字颜色 |
| confirmText | String | 否 | 确认按钮的文字，默认"确定" |
| confirmColor | String | 否 | 确认按钮的文字颜色 |

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| confirm | Boolean | 为 true 时，表示用户点击了确定按钮 |
| cancel | Boolean | 为 true 时，表示用户点击了取消按钮 |

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

1. `title` 和 `content` 至少需要提供一个
2. 确认和取消按钮的文字可以自定义
3. 可以通过 `showCancel: false` 只显示确定按钮
4. 建议用于重要的确认操作

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#showmodal
- **消息提示**: https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#showtoast
