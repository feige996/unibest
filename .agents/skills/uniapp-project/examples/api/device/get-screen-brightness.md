# uni.getScreenBrightness - 获取屏幕亮度示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/device/screen.html#getscreenbrightness

## 概述

`uni.getScreenBrightness` 用于获取屏幕亮度。

## 基础用法

```javascript
uni.getScreenBrightness({
  success: (res) => {
    console.log('屏幕亮度', res.value)
  }
})
```

## 完整示例

### 示例 1: 获取屏幕亮度

```javascript
uni.getScreenBrightness({
  success: (res) => {
    console.log('屏幕亮度', res.value) // 范围 0 - 1
    console.log('亮度百分比', (res.value * 100).toFixed(0) + '%')
  },
  fail: (err) => {
    console.error('获取失败', err)
  }
})
```

### 示例 2: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="getBrightness">获取屏幕亮度</button>
    <view v-if="brightness !== null" class="brightness-info">
      <text>当前亮度：{{ (brightness * 100).toFixed(0) }}%</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      brightness: null
    }
  },
  methods: {
    getBrightness() {
      uni.getScreenBrightness({
        success: (res) => {
          this.brightness = res.value
        },
        fail: (err) => {
          uni.showToast({
            title: '获取失败',
            icon: 'none'
          })
        }
      })
    }
  }
}
</script>
```

### 示例 3: 保存和恢复亮度

```vue
<template>
  <view class="container">
    <slider 
      :value="brightness * 100"
      min="0"
      max="100"
      @change="handleBrightnessChange"
    />
    <button @click="saveBrightness">保存亮度</button>
    <button @click="restoreBrightness">恢复亮度</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      brightness: 0.5,
      savedBrightness: 0.5
    }
  },
  onLoad() {
    this.getBrightness()
    // 加载保存的亮度
    const saved = uni.getStorageSync('screenBrightness')
    if (saved) {
      this.savedBrightness = saved
    }
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
        value: this.brightness
      })
    },
    saveBrightness() {
      this.savedBrightness = this.brightness
      uni.setStorageSync('screenBrightness', this.brightness)
      uni.showToast({
        title: '已保存',
        icon: 'success'
      })
    },
    restoreBrightness() {
      this.brightness = this.savedBrightness
      uni.setScreenBrightness({
        value: this.brightness
      })
      uni.showToast({
        title: '已恢复',
        icon: 'success'
      })
    }
  }
}
</script>
```

### 示例 4: 检查亮度设置

```javascript
function checkBrightness() {
  uni.getScreenBrightness({
    success: (res) => {
      if (res.value < 0.3) {
        console.log('屏幕较暗')
      } else if (res.value > 0.8) {
        console.log('屏幕较亮')
      } else {
        console.log('屏幕亮度适中')
      }
    }
  })
}
```

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| value | Number | 屏幕亮度值，范围 0 - 1 |

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
3. 可以配合 `setScreenBrightness` 使用
4. 建议在设置亮度前先获取当前亮度

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/device/screen.html#getscreenbrightness
- **设置亮度**: https://uniapp.dcloud.net.cn/api/device/screen.html#setscreenbrightness
