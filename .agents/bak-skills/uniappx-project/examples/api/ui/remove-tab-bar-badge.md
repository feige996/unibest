# uni.removeTabBarBadge - 移除 TabBar 徽标示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/ui/tab-bar.html#removetabbarbadge

## 概述

`uni.removeTabBarBadge` 用于移除 tabBar 某一项右上角的文本。

## 基础用法

```javascript
uni.removeTabBarBadge({
  index: 0
})
```

## 完整示例

### 示例 1: 清除徽标

```javascript
uni.removeTabBarBadge({
  index: 0, // tabBar 的哪一项，从左边算起
  success: () => {
    console.log('清除成功')
  },
  fail: (err) => {
    console.error('清除失败', err)
  }
})
```

### 示例 2: 清除未读消息徽标

```javascript
function clearUnreadBadge() {
  uni.removeTabBarBadge({
    index: 1, // 消息页面的索引
    success: () => {
      console.log('未读消息徽标已清除')
    }
  })
}
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="clearBadge">清除徽标</button>
  </view>
</template>

<script>
export default {
  methods: {
    clearBadge() {
      uni.removeTabBarBadge({
        index: 0,
        success: () => {
          uni.showToast({
            title: '已清除',
            icon: 'success'
          })
        }
      })
    }
  }
}
</script>
```

### 示例 4: 阅读消息后清除

```vue
<template>
  <view class="container">
    <view 
      v-for="message in messages" 
      :key="message.id"
      class="message-item"
      @click="readMessage(message)"
    >
      <text>{{ message.content }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        { id: 1, content: '消息1', read: false },
        { id: 2, content: '消息2', read: false }
      ]
    }
  },
  methods: {
    readMessage(message) {
      message.read = true
      
      // 如果所有消息都已读，清除徽标
      const allRead = this.messages.every(msg => msg.read)
      if (allRead) {
        uni.removeTabBarBadge({
          index: 1 // 消息页面的索引
        })
      } else {
        // 更新未读数
        const unreadCount = this.messages.filter(msg => !msg.read).length
        uni.setTabBarBadge({
          index: 1,
          text: String(unreadCount)
        })
      }
    }
  }
}
</script>
```

### 示例 5: 清除所有徽标

```javascript
function clearAllBadges(tabBarCount) {
  for (let i = 0; i < tabBarCount; i++) {
    uni.removeTabBarBadge({
      index: i
    })
  }
}

// 使用（假设有4个tabBar）
clearAllBadges(4)
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
2. 如果该 tabBar 项没有徽标，调用此 API 不会报错
3. 建议在消息已读或数量为 0 时清除徽标
4. 与 `setTabBarBadge` 配合使用

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/ui/tab-bar.html#removetabbarbadge
- **设置徽标**: https://doc.dcloud.net.cn/uni-app-x/api/ui/tab-bar.html#settabbarbadge
