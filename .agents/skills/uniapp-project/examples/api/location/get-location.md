# uni.getLocation - 获取位置示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/location/location.html#getlocation

## 概述

`uni.getLocation` 用于获取当前地理位置。

## 基础用法

```javascript
uni.getLocation({
  type: 'wgs84',
  success: (res) => {
    console.log('当前位置', res.latitude, res.longitude)
  }
})
```

## 完整示例

### 示例 1: 获取当前位置

```javascript
uni.getLocation({
  type: 'wgs84',
  success: (res) => {
    console.log('纬度', res.latitude)
    console.log('经度', res.longitude)
    console.log('速度', res.speed)
    console.log('精度', res.accuracy)
  },
  fail: (err) => {
    console.error('获取位置失败', err)
  }
})
```

### 示例 2: 高精度定位

```javascript
uni.getLocation({
  type: 'gcj02',
  altitude: true,
  geocode: true,
  success: (res) => {
    console.log('位置信息', res)
    // res.address 包含地址信息（需要 geocode: true）
  }
})
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="getCurrentLocation">获取当前位置</button>
    <view v-if="location" class="location-info">
      <text>纬度：{{ location.latitude }}</text>
      <text>经度：{{ location.longitude }}</text>
      <text>地址：{{ location.address || '未获取' }}</text>
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
    getCurrentLocation() {
      uni.showLoading({
        title: '定位中...'
      })
      
      uni.getLocation({
        type: 'gcj02',
        geocode: true,
        success: (res) => {
          this.location = res
          uni.hideLoading()
          uni.showToast({
            title: '定位成功',
            icon: 'success'
          })
        },
        fail: (err) => {
          uni.hideLoading()
          uni.showToast({
            title: '定位失败',
            icon: 'none'
          })
          console.error('定位失败', err)
        }
      })
    }
  }
}
</script>
```

### 示例 4: 检查定位权限

```javascript
// 先检查定位权限
uni.getSetting({
  success: (res) => {
    if (res.authSetting['scope.userLocation']) {
      // 已授权，直接获取位置
      uni.getLocation({
        type: 'gcj02',
        success: (res) => {
          console.log('位置', res)
        }
      })
    } else {
      // 未授权，请求授权
      uni.authorize({
        scope: 'scope.userLocation',
        success: () => {
          uni.getLocation({
            type: 'gcj02',
            success: (res) => {
              console.log('位置', res)
            }
          })
        },
        fail: () => {
          uni.showModal({
            title: '提示',
            content: '需要定位权限才能使用此功能',
            showCancel: false
          })
        }
      })
    }
  }
})
```

### 示例 5: 在地图上显示位置

```vue
<template>
  <view class="container">
    <button @click="getLocationAndShow">获取位置并显示</button>
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
    getLocationAndShow() {
      uni.getLocation({
        type: 'gcj02',
        success: (res) => {
          this.location = res
          this.markers = [{
            id: 1,
            latitude: res.latitude,
            longitude: res.longitude,
            title: '我的位置'
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

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| type | String | 否 | 坐标类型，可选值：wgs84、gcj02 |
| altitude | Boolean | 否 | 是否返回高度信息 |
| geocode | Boolean | 否 | 是否解析地址信息 |

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| latitude | Number | 纬度 |
| longitude | Number | 经度 |
| speed | Number | 速度 |
| accuracy | Number | 位置的精确度 |
| altitude | Number | 高度（需要 altitude: true） |
| address | Object | 地址信息（需要 geocode: true） |

## 平台兼容性

| 平台 | 支持情况 |
|------|---------|
| H5 | ✅（需要 HTTPS） |
| 微信小程序 | ✅ |
| 支付宝小程序 | ✅ |
| 百度小程序 | ✅ |
| 字节跳动小程序 | ✅ |
| QQ 小程序 | ✅ |
| 快手小程序 | ✅ |
| App | ✅ |
| 快应用 | ✅ |

## 注意事项

1. 需要用户授权定位权限
2. H5 平台需要 HTTPS 协议
3. `type` 为 `gcj02` 时返回的坐标可用于地图显示
4. `geocode` 为 true 时才能获取地址信息

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/location/location.html#getlocation
- **打开地图**: https://uniapp.dcloud.net.cn/api/location/location.html#openlocation
- **选择位置**: https://uniapp.dcloud.net.cn/api/location/location.html#chooselocation
