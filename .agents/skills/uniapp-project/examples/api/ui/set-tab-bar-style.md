# uni.setTabBarStyle - 设置 TabBar 样式示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/ui/tab-bar.html#settabbarstyle

## 概述

`uni.setTabBarStyle` 用于动态设置 tabBar 的整体样式。

## 基础用法

```javascript
uni.setTabBarStyle({
  color: '#7A7E83',
  selectedColor: '#3cc51f',
  backgroundColor: '#ffffff'
})
```

## 完整示例

### 示例 1: 设置 TabBar 样式

```javascript
uni.setTabBarStyle({
  color: '#7A7E83', // 未选中时的文字颜色
  selectedColor: '#3cc51f', // 选中时的文字颜色
  backgroundColor: '#ffffff', // 背景颜色
  borderStyle: 'black', // 边框颜色
  success: () => {
    console.log('设置成功')
  }
})
```

### 示例 2: 深色主题

```javascript
function setDarkTheme() {
  uni.setTabBarStyle({
    color: '#999999',
    selectedColor: '#ffffff',
    backgroundColor: '#000000',
    borderStyle: 'white'
  })
}
```

### 示例 3: 浅色主题

```javascript
function setLightTheme() {
  uni.setTabBarStyle({
    color: '#7A7E83',
    selectedColor: '#007aff',
    backgroundColor: '#ffffff',
    borderStyle: 'black'
  })
}
```

### 示例 4: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="setDarkTheme">深色主题</button>
    <button @click="setLightTheme">浅色主题</button>
    <button @click="setCustomTheme">自定义主题</button>
  </view>
</template>

<script>
export default {
  methods: {
    setDarkTheme() {
      uni.setTabBarStyle({
        color: '#999999',
        selectedColor: '#ffffff',
        backgroundColor: '#000000',
        borderStyle: 'white'
      })
    },
    setLightTheme() {
      uni.setTabBarStyle({
        color: '#7A7E83',
        selectedColor: '#007aff',
        backgroundColor: '#ffffff',
        borderStyle: 'black'
      })
    },
    setCustomTheme() {
      uni.setTabBarStyle({
        color: '#666666',
        selectedColor: '#ff3b30',
        backgroundColor: '#f5f5f5',
        borderStyle: 'black'
      })
    }
  }
}
</script>
```

### 示例 5: 根据系统主题设置

```javascript
function setTabBarThemeBySystem() {
  uni.getSystemInfo({
    success: (res) => {
      // 根据系统主题设置（需要自己判断）
      const isDark = res.theme === 'dark' // 某些平台支持
      
      if (isDark) {
        uni.setTabBarStyle({
          color: '#999999',
          selectedColor: '#ffffff',
          backgroundColor: '#000000',
          borderStyle: 'white'
        })
      } else {
        uni.setTabBarStyle({
          color: '#7A7E83',
          selectedColor: '#007aff',
          backgroundColor: '#ffffff',
          borderStyle: 'black'
        })
      }
    }
  })
}
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| color | String | 否 | tab 上的文字默认颜色 |
| selectedColor | String | 否 | tab 上的文字选中时的颜色 |
| backgroundColor | String | 否 | tab 的背景色 |
| borderStyle | String | 否 | tabbar 上边框的颜色，可选值：black、white |

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

1. 设置后立即生效
2. `color` 和 `selectedColor` 建议使用对比度高的颜色
3. `borderStyle` 可选值为 `black` 或 `white`
4. 建议与页面主题色保持一致

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/ui/tab-bar.html#settabbarstyle
- **设置 TabBar 项**: https://uniapp.dcloud.net.cn/api/ui/tab-bar.html#settabbaritem
