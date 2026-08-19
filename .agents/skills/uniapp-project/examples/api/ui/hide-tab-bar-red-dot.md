# uni.hideTabBarRedDot - 隐藏 TabBar 红点示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/ui/tab-bar.html#hidetabbarreddot

## 概述

`uni.hideTabBarRedDot` 用于隐藏 tabBar 某一项的右上角的红点。

## 基础用法

```javascript
uni.hideTabBarRedDot({
  index: 0
})
```

## 完整示例

### 示例 1: 隐藏红点

```javascript
uni.hideTabBarRedDot({
  index: 0, // tabBar 的哪一项，从左边算起
  success: () => {
    console.log('隐藏成功')
  },
  fail: (err) => {
    console.error('隐藏失败', err)
  }
})
```

### 示例 2: 阅读消息后隐藏

```javascript
function readMessage(messageId) {
  // 标记消息为已读
  uni.request({
    url: `https://api.example.com/messages/${messageId}/read`,
    method: 'POST',
    success: () => {
      // 隐藏消息红点
      uni.hideTabBarRedDot({
        index: 1 // 消息页面的索引
      })
    }
  })
}
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="hideRedDot">隐藏红点</button>
  </view>
</template>

<script>
export default {
  methods: {
    hideRedDot() {
      uni.hideTabBarRedDot({
        index: 0,
        success: () => {
          uni.showToast({
            title: '已隐藏',
            icon: 'success'
          })
        }
      })
    }
  }
}
</script>
```

### 示例 4: 进入页面时隐藏

```vue
<template>
  <view class="container">
    <text>消息列表</text>
  </view>
</template>

<script>
export default {
  onLoad() {
    // 进入消息页面时隐藏红点
    uni.hideTabBarRedDot({
      index: 1 // 当前页面的索引
    })
  }
}
</script>
```

### 示例 5: 清除所有红点

```javascript
function clearAllRedDots(tabBarCount) {
  for (let i = 0; i < tabBarCount; i++) {
    uni.hideTabBarRedDot({
      index: i
    })
  }
}

// 使用（假设有4个tabBar）
clearAllRedDots(4)
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| index | Number | 是 | tabBar 的哪一项，从左边算起 |

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

1. `index` 从 0 开始，对应 `pages.json` 中 tabBar 的配置顺序
2. 如果该 tabBar 项没有红点，调用此 API 不会报错
3. 建议在用户查看相关内容后隐藏红点
4. 与 `showTabBarRedDot` 配合使用

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/ui/tab-bar.html#hidetabbarreddot
- **显示红点**: https://uniapp.dcloud.net.cn/api/ui/tab-bar.html#showtabbarreddot
