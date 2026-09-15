# uni.setNavigationBarColor - 设置导航栏颜色示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/ui/navigation-bar.html#setnavigationbarcolor

## 概述

`uni.setNavigationBarColor` 用于设置页面导航栏颜色。

## 基础用法

```javascript
uni.setNavigationBarColor({
  frontColor: '#ffffff',
  backgroundColor: '#007aff'
})
```

## 完整示例

### 示例 1: 设置导航栏颜色

```javascript
uni.setNavigationBarColor({
  frontColor: '#ffffff', // 前景颜色，包括按钮、标题、状态栏的颜色
  backgroundColor: '#007aff', // 背景颜色
  success: () => {
    console.log('设置成功')
  }
})
```

### 示例 2: 深色主题

```javascript
uni.setNavigationBarColor({
  frontColor: '#ffffff',
  backgroundColor: '#000000',
  animation: {
    duration: 400,
    timingFunc: 'easeIn'
  }
})
```

### 示例 3: 浅色主题

```javascript
uni.setNavigationBarColor({
  frontColor: '#000000',
  backgroundColor: '#ffffff',
  animation: {
    duration: 400,
    timingFunc: 'easeIn'
  }
})
```

### 示例 4: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="setDarkTheme">深色主题</button>
    <button @click="setLightTheme">浅色主题</button>
    <button @click="setCustomColor">自定义颜色</button>
  </view>
</template>

<script>
export default {
  methods: {
    setDarkTheme() {
      uni.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#000000'
      })
    },
    setLightTheme() {
      uni.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#ffffff'
      })
    },
    setCustomColor() {
      uni.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#ff3b30',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      })
    }
  }
}
</script>
```

### 示例 5: 根据内容动态设置

```vue
<template>
  <view class="container">
    <view v-if="article">
      <text>{{ article.content }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      article: null
    }
  },
  onLoad(options) {
    this.loadArticle(options.id)
  },
  methods: {
    loadArticle(id) {
      uni.request({
        url: `https://api.example.com/article/${id}`,
        success: (res) => {
          this.article = res.data
          // 根据文章主题色设置导航栏
          if (res.data.theme === 'dark') {
            uni.setNavigationBarColor({
              frontColor: '#ffffff',
              backgroundColor: '#000000'
            })
          } else {
            uni.setNavigationBarColor({
              frontColor: '#000000',
              backgroundColor: '#ffffff'
            })
          }
        }
      })
    }
  }
}
</script>
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| frontColor | String | 是 | 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 |
| backgroundColor | String | 是 | 背景颜色值，有效值为十六进制颜色 |
| animation | Object | 否 | 动画效果 |

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

1. `frontColor` 仅支持 `#ffffff` 和 `#000000`
2. `backgroundColor` 支持任意十六进制颜色
3. 可以通过 `animation` 设置颜色切换动画
4. 建议与页面主题色保持一致

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/ui/navigation-bar.html#setnavigationbarcolor
- **设置标题**: https://uniapp.dcloud.net.cn/api/ui/navigation-bar.html#setnavigationbartitle
