# uni.setScreenBrightness - 设置屏幕亮度示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/device/screen.html#setscreenbrightness

## 概述

`uni.setScreenBrightness` 用于设置屏幕亮度。

## 基础用法

```javascript
uni.setScreenBrightness({
  value: 0.5
})
```

## 完整示例

### 示例 1: 设置屏幕亮度

```javascript
uni.setScreenBrightness({
  value: 0.5, // 亮度值，范围 0 - 1
  success: () => {
    console.log('设置成功')
  },
  fail: (err) => {
    console.error('设置失败', err)
  }
})
```

### 示例 2: 在页面中使用

```vue
<template>
  <view class="container">
    <slider 
      :value="brightness * 100"
      min="0"
      max="100"
      @change="handleBrightnessChange"
    />
    <text>亮度：{{ (brightness * 100).toFixed(0) }}%</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      brightness: 0.5
    }
  },
  onLoad() {
    this.getBrightness()
  },
  methods: {
    getBrightness() {
      uni.getScreenBrightness({
        success: (res) => {
          this.brightness = res.value
        }
      })
    },
    handleBrightnessChange(e) {
      this.brightness = e.detail.value / 100
      uni.setScreenBrightness({
        value: this.brightness,
        success: () => {
          console.log('亮度已设置')
        }
      })
    }
  }
}
</script>
```

### 示例 3: 自动调节亮度

```javascript
function autoAdjustBrightness() {
  // 获取当前时间
  const hour = new Date().getHours()
  
  // 晚上（18:00-6:00）降低亮度
  if (hour >= 18 || hour < 6) {
    uni.setScreenBrightness({
      value: 0.3 // 较暗
    })
  } else {
    uni.setScreenBrightness({
      value: 0.8 // 较亮
    })
  }
}
```

### 示例 4: 护眼模式

```vue
<template>
  <view class="container">
    <switch :checked="eyeProtectionMode" @change="toggleEyeProtection" />
    <text>护眼模式</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      eyeProtectionMode: false,
      originalBrightness: 0.5
    }
  },
  methods: {
    toggleEyeProtection(e) {
      this.eyeProtectionMode = e.detail.value
      
      if (this.eyeProtectionMode) {
        // 保存当前亮度
        uni.getScreenBrightness({
          success: (res) => {
            this.originalBrightness = res.value
          }
        })
        // 降低亮度
        uni.setScreenBrightness({
          value: 0.3
        })
      } else {
        // 恢复原亮度
        uni.setScreenBrightness({
          value: this.originalBrightness
        })
      }
    }
  }
}
</script>
```

### 示例 5: 根据环境光调节

```javascript
// 注意：此功能需要配合其他API实现
function adjustBrightnessByAmbient() {
  // 获取环境光强度（需要其他API支持）
  // 这里只是示例逻辑
  const ambientLight = 0.5 // 假设获取到的环境光强度
  
  // 根据环境光设置屏幕亮度
  const screenBrightness = Math.max(0.2, Math.min(1.0, ambientLight))
  
  uni.setScreenBrightness({
    value: screenBrightness
  })
}
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| value | Number | 是 | 屏幕亮度值，范围 0 - 1，0 最暗，1 最亮 |

## 平台兼容性

| 平台 | 支持情况 |
|------|---------|
| H5 | ❌ |
| 微信小程序 | ✅ |
| 支付宝小程序 | ✅ |
| 百度小程序 | ✅ |
| 字节跳动小程序 | ✅ |
| QQ 小程序 | ✅ |
| 快手小程序 | ✅ |
| App | ✅ |
| 快应用 | ✅ |

## 注意事项

1. H5 平台不支持此 API
2. `value` 范围是 0-1，0 表示最暗，1 表示最亮
3. 设置后立即生效
4. 建议在用户退出应用时恢复系统默认亮度

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/device/screen.html#setscreenbrightness
- **获取亮度**: https://doc.dcloud.net.cn/uni-app-x/api/device/screen.html#getscreenbrightness
