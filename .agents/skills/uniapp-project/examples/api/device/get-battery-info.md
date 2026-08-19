# uni.getBatteryInfo - 获取电池信息示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/system/battery.html#getbatteryinfo

## 概述

`uni.getBatteryInfo` 用于获取设备电池信息。

## 基础用法

```javascript
uni.getBatteryInfo({
  success: (res) => {
    console.log('电池信息', res)
  }
})
```

## 完整示例

### 示例 1: 获取电池信息

```javascript
uni.getBatteryInfo({
  success: (res) => {
    console.log('电池电量', res.level, '%')
    console.log('是否正在充电', res.isCharging)
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
    <button @click="getBatteryInfo">获取电池信息</button>
    <view v-if="batteryInfo" class="battery-info">
      <text>电量：{{ batteryInfo.level }}%</text>
      <text>充电状态：{{ batteryInfo.isCharging ? '充电中' : '未充电' }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      batteryInfo: null
    }
  },
  methods: {
    getBatteryInfo() {
      uni.getBatteryInfo({
        success: (res) => {
          this.batteryInfo = res
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

### 示例 3: 低电量提醒

```javascript
function checkBatteryLevel() {
  uni.getBatteryInfo({
    success: (res) => {
      if (res.level < 20 && !res.isCharging) {
        uni.showModal({
          title: '低电量提醒',
          content: `当前电量仅剩${res.level}%，建议连接充电器`,
          showCancel: false
        })
      }
    }
  })
}

// 定时检查
setInterval(checkBatteryLevel, 60000) // 每分钟检查一次
```

### 示例 4: 同步版本

```javascript
try {
  const batteryInfo = uni.getBatteryInfoSync()
  console.log('电池电量', batteryInfo.level, '%')
  console.log('是否正在充电', batteryInfo.isCharging)
} catch (err) {
  console.error('获取失败', err)
}
```

### 示例 5: 根据电量调整策略

```javascript
function getBatteryInfo() {
  return new Promise((resolve, reject) => {
    uni.getBatteryInfo({
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

// 根据电量决定是否执行耗电操作
async function performHeavyTask() {
  const batteryInfo = await getBatteryInfo()
  
  if (batteryInfo.level < 20 && !batteryInfo.isCharging) {
    uni.showModal({
      title: '提示',
      content: '电量较低，建议连接充电器后再执行',
      success: (res) => {
        if (res.confirm) {
          // 执行任务
          console.log('执行任务')
        }
      }
    })
  } else {
    // 直接执行
    console.log('执行任务')
  }
}
```

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| level | Number | 设备电量，范围 1 - 100 |
| isCharging | Boolean | 是否正在充电 |

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
2. `level` 范围是 1-100，表示电量百分比
3. `isCharging` 表示设备是否正在充电
4. 同步版本 `getBatteryInfoSync` 性能更好

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/system/battery.html#getbatteryinfo
- **同步版本**: https://uniapp.dcloud.net.cn/api/system/battery.html#getbatteryinfosync
