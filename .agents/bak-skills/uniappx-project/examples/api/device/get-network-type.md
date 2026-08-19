# uni.getNetworkType - 获取网络类型示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/system/network.html#getnetworktype

## 概述

`uni.getNetworkType` 用于获取设备当前网络类型。

## 基础用法

```javascript
uni.getNetworkType({
  success: (res) => {
    console.log('网络类型', res.networkType)
  }
})
```

## 完整示例

### 示例 1: 获取网络类型

```javascript
uni.getNetworkType({
  success: (res) => {
    console.log('网络类型', res.networkType)
    // 可能的值：wifi、2g、3g、4g、5g、unknown、none
  },
  fail: (err) => {
    console.error('获取失败', err)
  }
})
```

### 示例 2: 检查网络状态

```javascript
function checkNetwork() {
  uni.getNetworkType({
    success: (res) => {
      if (res.networkType === 'none') {
        uni.showToast({
          title: '网络不可用',
          icon: 'none'
        })
      } else if (res.networkType === '2g' || res.networkType === '3g') {
        uni.showModal({
          title: '提示',
          content: '当前网络较慢，建议使用WiFi',
          showCancel: false
        })
      } else {
        console.log('网络正常', res.networkType)
      }
    }
  })
}
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="checkNetwork">检查网络</button>
    <view v-if="networkType" class="network-info">
      <text>当前网络类型：{{ networkType }}</text>
      <text>网络状态：{{ networkStatus }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      networkType: '',
      networkStatus: ''
    }
  },
  onLoad() {
    this.checkNetwork()
  },
  methods: {
    checkNetwork() {
      uni.getNetworkType({
        success: (res) => {
          this.networkType = res.networkType
          if (res.networkType === 'none') {
            this.networkStatus = '无网络'
          } else if (res.networkType === 'wifi') {
            this.networkStatus = 'WiFi网络'
          } else {
            this.networkStatus = '移动网络'
          }
        }
      })
    }
  }
}
</script>
```

### 示例 4: 监听网络状态变化

```javascript
// 监听网络状态变化
uni.onNetworkStatusChange((res) => {
  console.log('网络类型', res.networkType)
  console.log('是否联网', res.isConnected)
  
  if (!res.isConnected) {
    uni.showToast({
      title: '网络已断开',
      icon: 'none'
    })
  } else {
    uni.showToast({
      title: '网络已连接',
      icon: 'success'
    })
  }
})

// 获取当前网络状态
uni.getNetworkType({
  success: (res) => {
    console.log('当前网络类型', res.networkType)
  }
})
```

### 示例 5: 根据网络类型调整策略

```javascript
function getNetworkType() {
  return new Promise((resolve, reject) => {
    uni.getNetworkType({
      success: (res) => {
        resolve(res.networkType)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

// 根据网络类型决定是否加载高清图片
async function loadImage() {
  const networkType = await getNetworkType()
  
  if (networkType === 'wifi' || networkType === '4g' || networkType === '5g') {
    // 加载高清图片
    return 'https://example.com/hd-image.jpg'
  } else {
    // 加载压缩图片
    return 'https://example.com/compressed-image.jpg'
  }
}
```

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| networkType | String | 网络类型，可能的值：wifi、2g、3g、4g、5g、unknown、none |

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

1. `networkType` 可能的值：wifi、2g、3g、4g、5g、unknown、none
2. `none` 表示无网络连接
3. 建议配合 `onNetworkStatusChange` 监听网络变化
4. 可以根据网络类型调整加载策略

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/system/network.html#getnetworktype
- **监听网络变化**: https://doc.dcloud.net.cn/uni-app-x/api/system/network.html#onnetworkstatuschange
