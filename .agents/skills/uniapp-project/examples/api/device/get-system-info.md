# uni.getSystemInfo - 获取系统信息示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/system/info.html#getsysteminfo

## 概述

`uni.getSystemInfo` 用于获取系统信息，包括设备信息、屏幕信息等。

## 基础用法

```javascript
uni.getSystemInfo({
  success: (res) => {
    console.log('系统信息', res)
  }
})
```

## 完整示例

### 示例 1: 获取系统信息

```javascript
uni.getSystemInfo({
  success: (res) => {
    console.log('手机品牌', res.brand)
    console.log('手机型号', res.model)
    console.log('系统版本', res.system)
    console.log('平台', res.platform)
    console.log('屏幕宽度', res.windowWidth)
    console.log('屏幕高度', res.windowHeight)
  }
})
```

### 示例 2: 同步获取系统信息

```javascript
try {
  const systemInfo = uni.getSystemInfoSync()
  console.log('系统信息', systemInfo)
} catch (err) {
  console.error('获取失败', err)
}
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="getSystemInfo">获取系统信息</button>
    <view v-if="systemInfo" class="info-list">
      <view class="info-item">
        <text class="label">手机品牌：</text>
        <text>{{ systemInfo.brand }}</text>
      </view>
      <view class="info-item">
        <text class="label">手机型号：</text>
        <text>{{ systemInfo.model }}</text>
      </view>
      <view class="info-item">
        <text class="label">系统版本：</text>
        <text>{{ systemInfo.system }}</text>
      </view>
      <view class="info-item">
        <text class="label">平台：</text>
        <text>{{ systemInfo.platform }}</text>
      </view>
      <view class="info-item">
        <text class="label">屏幕宽度：</text>
        <text>{{ systemInfo.windowWidth }}px</text>
      </view>
      <view class="info-item">
        <text class="label">屏幕高度：</text>
        <text>{{ systemInfo.windowHeight }}px</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      systemInfo: null
    }
  },
  onLoad() {
    this.getSystemInfo()
  },
  methods: {
    getSystemInfo() {
      uni.getSystemInfo({
        success: (res) => {
          this.systemInfo = res
        }
      })
    }
  }
}
</script>

<style>
.info-list {
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}
.info-item {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
.label {
  font-weight: bold;
  color: #333;
}
</style>
```

### 示例 4: 适配不同屏幕

```vue
<template>
  <view class="container" :style="containerStyle">
    <text>自适应内容</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      containerStyle: {}
    }
  },
  onLoad() {
    const systemInfo = uni.getSystemInfoSync()
    this.containerStyle = {
      width: systemInfo.windowWidth + 'px',
      height: systemInfo.windowHeight + 'px'
    }
  }
}
</script>
```

### 示例 5: 判断平台

```javascript
const systemInfo = uni.getSystemInfoSync()

// 判断平台
if (systemInfo.platform === 'ios') {
  console.log('iOS 平台')
} else if (systemInfo.platform === 'android') {
  console.log('Android 平台')
}

// 判断是否为 App
if (systemInfo.platform !== 'devtools') {
  console.log('非开发工具环境')
}
```

## 返回值说明

| 参数名 | 类型 | 说明 |
|--------|------|------|
| brand | String | 手机品牌 |
| model | String | 手机型号 |
| system | String | 操作系统版本 |
| platform | String | 客户端平台 |
| windowWidth | Number | 窗口宽度 |
| windowHeight | Number | 窗口高度 |
| pixelRatio | Number | 设备像素比 |
| screenWidth | Number | 屏幕宽度 |
| screenHeight | Number | 屏幕高度 |
| statusBarHeight | Number | 状态栏高度 |
| safeArea | Object | 安全区域 |

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

1. 建议在 `onLoad` 中获取系统信息
2. 同步版本 `getSystemInfoSync` 性能更好
3. 不同平台返回的信息可能不同
4. 使用 `windowWidth` 和 `windowHeight` 进行屏幕适配

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/system/info.html#getsysteminfo
- **同步版本**: https://uniapp.dcloud.net.cn/api/system/info.html#getsysteminfosync
