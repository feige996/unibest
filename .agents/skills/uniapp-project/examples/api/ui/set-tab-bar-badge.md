# uni.setTabBarBadge - 设置 TabBar 徽标示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/ui/tab-bar.html#settabbarbadge

## 概述

`uni.setTabBarBadge` 用于为 tabBar 某一项的右上角添加文本。

## 基础用法

```javascript
uni.setTabBarBadge({
  index: 0,
  text: '1'
})
```

## 完整示例

### 示例 1: 设置徽标

```javascript
uni.setTabBarBadge({
  index: 0, // tabBar 的哪一项，从左边算起
  text: '5' // 显示的文本，超过 3 个字符则显示成 "..."
})
```

### 示例 2: 显示未读消息数

```javascript
function updateUnreadCount(count) {
  if (count > 0) {
    const text = count > 99 ? '99+' : String(count)
    uni.setTabBarBadge({
      index: 1, // 消息页面的索引
      text: text
    })
  } else {
    // 清除徽标
    uni.removeTabBarBadge({
      index: 1
    })
  }
}

// 使用
updateUnreadCount(5) // 显示 "5"
updateUnreadCount(100) // 显示 "99+"
updateUnreadCount(0) // 清除徽标
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="setBadge">设置徽标</button>
    <button @click="removeBadge">清除徽标</button>
  </view>
</template>

<script>
export default {
  methods: {
    setBadge() {
      uni.setTabBarBadge({
        index: 0,
        text: '5'
      })
      uni.showToast({
        title: '已设置徽标',
        icon: 'success'
      })
    },
    removeBadge() {
      uni.removeTabBarBadge({
        index: 0
      })
      uni.showToast({
        title: '已清除徽标',
        icon: 'success'
      })
    }
  }
}
</script>
```

### 示例 4: 实时更新未读消息

```vue
<template>
  <view class="container">
    <text>未读消息：{{ unreadCount }}</text>
    <button @click="refreshUnreadCount">刷新未读数</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      unreadCount: 0
    }
  },
  onLoad() {
    this.loadUnreadCount()
    // 定时刷新
    setInterval(() => {
      this.loadUnreadCount()
    }, 30000) // 每30秒刷新一次
  },
  methods: {
    loadUnreadCount() {
      uni.request({
        url: 'https://api.example.com/unread-count',
        success: (res) => {
          this.unreadCount = res.data.count
          this.updateTabBarBadge(res.data.count)
        }
      })
    },
    updateTabBarBadge(count) {
      if (count > 0) {
        const text = count > 99 ? '99+' : String(count)
        uni.setTabBarBadge({
          index: 1, // 消息页面的索引
          text: text
        })
      } else {
        uni.removeTabBarBadge({
          index: 1
        })
      }
    },
    refreshUnreadCount() {
      this.loadUnreadCount()
    }
  }
}
</script>
```

### 示例 5: 多个 TabBar 徽标

```javascript
function updateAllTabBarBadges(badges) {
  // badges: [{ index: 0, text: '5' }, { index: 1, text: '10' }]
  badges.forEach(badge => {
    if (badge.text && badge.text !== '0') {
      uni.setTabBarBadge({
        index: badge.index,
        text: badge.text
      })
    } else {
      uni.removeTabBarBadge({
        index: badge.index
      })
    }
  })
}

// 使用
updateAllTabBarBadges([
  { index: 0, text: '5' },
  { index: 1, text: '10' },
  { index: 2, text: '0' } // 清除
])
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| index | Number | 是 | tabBar 的哪一项，从左边算起 |
| text | String | 是 | 显示的文本，超过 3 个字符则显示成 "..." |

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
2. `text` 超过 3 个字符会显示成 "..."
3. 建议数字超过 99 时显示 "99+"
4. 使用 `removeTabBarBadge` 可以清除徽标

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/ui/tab-bar.html#settabbarbadge
- **清除徽标**: https://uniapp.dcloud.net.cn/api/ui/tab-bar.html#removetabbarbadge
