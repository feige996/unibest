# uni.showTabBarRedDot - 显示 TabBar 红点示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/ui/tab-bar.html#showtabbarreddot

## 概述

`uni.showTabBarRedDot` 用于显示 tabBar 某一项的右上角的红点。

## 基础用法

```javascript
uni.showTabBarRedDot({
  index: 0
})
```

## 完整示例

### 示例 1: 显示红点

```javascript
uni.showTabBarRedDot({
  index: 0, // tabBar 的哪一项，从左边算起
  success: () => {
    console.log('显示成功')
  },
  fail: (err) => {
    console.error('显示失败', err)
  }
})
```

### 示例 2: 显示消息红点

```javascript
function showMessageRedDot() {
  uni.showTabBarRedDot({
    index: 1, // 消息页面的索引
    success: () => {
      console.log('消息红点已显示')
    }
  })
}
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="showRedDot">显示红点</button>
    <button @click="hideRedDot">隐藏红点</button>
  </view>
</template>

<script>
export default {
  methods: {
    showRedDot() {
      uni.showTabBarRedDot({
        index: 0,
        success: () => {
          uni.showToast({
            title: '已显示红点',
            icon: 'success'
          })
        }
      })
    },
    hideRedDot() {
      uni.hideTabBarRedDot({
        index: 0,
        success: () => {
          uni.showToast({
            title: '已隐藏红点',
            icon: 'success'
          })
        }
      })
    }
  }
}
</script>
```

### 示例 4: 根据状态显示红点

```vue
<template>
  <view class="container">
    <view v-if="hasNewMessage" class="message-list">
      <view 
        v-for="message in messages" 
        :key="message.id"
        class="message-item"
        @click="readMessage(message)"
      >
        <text>{{ message.content }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      hasNewMessage: false
    }
  },
  onLoad() {
    this.loadMessages()
  },
  methods: {
    loadMessages() {
      uni.request({
        url: 'https://api.example.com/messages',
        success: (res) => {
          this.messages = res.data
          this.hasNewMessage = res.data.some(msg => !msg.read)
          
          // 根据是否有新消息显示红点
          if (this.hasNewMessage) {
            uni.showTabBarRedDot({
              index: 1 // 消息页面的索引
            })
          } else {
            uni.hideTabBarRedDot({
              index: 1
            })
          }
        }
      })
    },
    readMessage(message) {
      message.read = true
      this.hasNewMessage = this.messages.some(msg => !msg.read)
      
      if (!this.hasNewMessage) {
        uni.hideTabBarRedDot({
          index: 1
        })
      }
    }
  }
}
</script>
```

### 示例 5: 多个 TabBar 红点

```javascript
function showAllRedDots(indices) {
  indices.forEach(index => {
    uni.showTabBarRedDot({
      index: index
    })
  })
}

// 使用
showAllRedDots([0, 1, 2]) // 显示第0、1、2项的红点
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
2. 红点不显示数字，只显示一个小红点
3. 与 `setTabBarBadge` 的区别：红点不显示文字，徽标显示文字
4. 使用 `hideTabBarRedDot` 可以隐藏红点

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/ui/tab-bar.html#showtabbarreddot
- **隐藏红点**: https://doc.dcloud.net.cn/uni-app-x/api/ui/tab-bar.html#hidetabbarreddot
- **设置徽标**: https://doc.dcloud.net.cn/uni-app-x/api/ui/tab-bar.html#settabbarbadge
