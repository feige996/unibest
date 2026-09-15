# uni.chooseLocation - 选择位置示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/location/choose-location.html#chooselocation

## 概述

`uni.chooseLocation` 用于打开地图选择位置。

## 基础用法

```javascript
uni.chooseLocation({
  success: (res) => {
    console.log('选择的位置', res.name, res.address)
  }
})
```

## 完整示例

### 示例 1: 基本选择位置

```javascript
uni.chooseLocation({
  success: (res) => {
    console.log('位置名称', res.name)
    console.log('详细地址', res.address)
    console.log('纬度', res.latitude)
    console.log('经度', res.longitude)
  },
  fail: (err) => {
    console.error('选择失败', err)
  }
})
```

### 示例 2: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="chooseLocation">选择位置</button>
    <view v-if="location" class="location-info">
      <text>位置：{{ location.name }}</text>
      <text>地址：{{ location.address }}</text>
      <text>坐标：{{ location.latitude }}, {{ location.longitude }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      location: null
    }
  },
  methods: {
    chooseLocation() {
      uni.chooseLocation({
        success: (res) => {
          this.location = res
          uni.showToast({
            title: '选择成功',
            icon: 'success'
          })
        },
        fail: (err) => {
          if (err.errMsg.includes('auth deny')) {
            uni.showModal({
              title: '提示',
              content: '需要位置权限才能选择位置',
              success: (modalRes) => {
                if (modalRes.confirm) {
                  uni.openSetting()
                }
              }
            })
          } else {
            uni.showToast({
              title: '选择失败',
              icon: 'none'
            })
          }
        }
      })
    }
  }
}
</script>
```

### 示例 3: 选择收货地址

```vue
<template>
  <view class="container">
    <view class="address-item" @click="chooseAddress">
      <view v-if="address">
        <text class="address-name">{{ address.name }}</text>
        <text class="address-detail">{{ address.address }}</text>
      </view>
      <view v-else>
        <text>请选择收货地址</text>
      </view>
      <text class="arrow">></text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      address: null
    }
  },
  methods: {
    chooseAddress() {
      uni.chooseLocation({
        success: (res) => {
          this.address = {
            name: res.name,
            address: res.address,
            latitude: res.latitude,
            longitude: res.longitude
          }
          // 保存地址
          uni.setStorageSync('deliveryAddress', this.address)
        }
      })
    }
  },
  onLoad() {
    // 加载保存的地址
    const savedAddress = uni.getStorageSync('deliveryAddress')
    if (savedAddress) {
      this.address = savedAddress
    }
  }
}
</script>

<style>
.address-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
.address-name {
  display: block;
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
}
.address-detail {
  display: block;
  font-size: 28rpx;
  color: #999;
}
.arrow {
  color: #999;
}
</style>
```

### 示例 4: 检查权限

```javascript
function chooseLocationWithPermission() {
  // 先检查权限
  uni.getSetting({
    success: (res) => {
      if (res.authSetting['scope.userLocation']) {
        // 已授权，直接选择
        chooseLocation()
      } else {
        // 请求授权
        uni.authorize({
          scope: 'scope.userLocation',
          success: () => {
            chooseLocation()
          },
          fail: () => {
            uni.showModal({
              title: '提示',
              content: '需要位置权限才能选择位置',
              success: (modalRes) => {
                if (modalRes.confirm) {
                  uni.openSetting()
                }
              }
            })
          }
        })
      }
    }
  })
}

function chooseLocation() {
  uni.chooseLocation({
    success: (res) => {
      console.log('选择的位置', res)
    }
  })
}
```

### 示例 5: 在地图上显示选择的位置

```vue
<template>
  <view class="container">
    <button @click="chooseLocation">选择位置</button>
    <map 
      v-if="location"
      :latitude="location.latitude"
      :longitude="location.longitude"
      :markers="markers"
      class="map"
    ></map>
  </view>
</template>

<script>
export default {
  data() {
    return {
      location: null,
      markers: []
    }
  },
  methods: {
    chooseLocation() {
      uni.chooseLocation({
        success: (res) => {
          this.location = res
          this.markers = [{
            id: 1,
            latitude: res.latitude,
            longitude: res.longitude,
            title: res.name
          }]
        }
      })
    }
  }
}
</script>

<style>
.map {
  width: 100%;
  height: 500px;
  margin-top: 20px;
}
</style>
```

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| name | String | 位置名称 |
| address | String | 详细地址 |
| latitude | Number | 纬度 |
| longitude | Number | 经度 |

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

1. 需要用户授权位置权限
2. H5 平台不支持此 API
3. 选择的位置包含名称、地址和坐标信息
4. 建议在需要时再请求权限

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/location/choose-location.html#chooselocation
- **获取位置**: https://doc.dcloud.net.cn/uni-app-x/api/location/location.html#getlocation
- **打开地图**: https://doc.dcloud.net.cn/uni-app-x/api/location/open-location.html#openlocation
