# uni.openLocation - 打开地图查看位置示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/location/open-location.html#openlocation

## 概述

`uni.openLocation` 用于使用地图查看位置，可以打开系统地图应用显示指定位置。

## 基础用法

```javascript
uni.openLocation({
  latitude: 39.908823,
  longitude: 116.397470,
  name: '天安门',
  address: '北京市东城区'
})
```

## 完整示例

### 示例 1: 打开地图查看位置

```javascript
uni.openLocation({
  latitude: 39.908823,
  longitude: 116.397470,
  name: '天安门',
  address: '北京市东城区天安门广场',
  scale: 18,
  success: () => {
    console.log('打开地图成功')
  },
  fail: (err) => {
    console.error('打开地图失败', err)
  }
})
```

### 示例 2: 先获取位置再打开地图

```javascript
// 先获取当前位置
uni.getLocation({
  type: 'gcj02',
  success: (locationRes) => {
    // 打开地图显示当前位置
    uni.openLocation({
      latitude: locationRes.latitude,
      longitude: locationRes.longitude,
      name: '我的位置',
      address: locationRes.address || '当前位置'
    })
  }
})
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="openCurrentLocation">查看当前位置</button>
    <button @click="openTargetLocation">查看目标位置</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      targetLocation: {
        latitude: 39.908823,
        longitude: 116.397470,
        name: '天安门',
        address: '北京市东城区天安门广场'
      }
    }
  },
  methods: {
    openCurrentLocation() {
      uni.getLocation({
        type: 'gcj02',
        success: (res) => {
          uni.openLocation({
            latitude: res.latitude,
            longitude: res.longitude,
            name: '我的位置',
            address: res.address || '当前位置'
          })
        },
        fail: () => {
          uni.showToast({
            title: '获取位置失败',
            icon: 'none'
          })
        }
      })
    },
    openTargetLocation() {
      uni.openLocation({
        latitude: this.targetLocation.latitude,
        longitude: this.targetLocation.longitude,
        name: this.targetLocation.name,
        address: this.targetLocation.address
      })
    }
  }
}
</script>
```

### 示例 4: 查看商家位置

```javascript
function openStoreLocation(store) {
  uni.openLocation({
    latitude: store.latitude,
    longitude: store.longitude,
    name: store.name,
    address: store.address,
    scale: 18,
    success: () => {
      console.log('打开商家位置成功')
    }
  })
}

// 使用
const store = {
  name: '星巴克咖啡',
  address: '北京市朝阳区xxx路xxx号',
  latitude: 39.908823,
  longitude: 116.397470
}
openStoreLocation(store)
```

### 示例 5: 导航到位置

```javascript
// 在某些平台上，openLocation 可以用于导航
uni.openLocation({
  latitude: 39.908823,
  longitude: 116.397470,
  name: '目的地',
  address: '北京市东城区',
  scale: 18
})
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| latitude | Number | 是 | 纬度，范围为 -90~90，负数表示南纬 |
| longitude | Number | 是 | 经度，范围为 -180~180，负数表示西经 |
| scale | Number | 否 | 缩放比例，范围 5~18，默认为 18 |
| name | String | 否 | 位置名称 |
| address | String | 否 | 地址的详细说明 |

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

1. 需要使用 `gcj02` 类型的坐标（通过 `uni.getLocation` 获取）
2. `scale` 值越大，地图显示越详细
3. `name` 和 `address` 用于在地图上显示位置信息
4. 不同平台打开的地图应用可能不同

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/location/open-location.html#openlocation
- **获取位置**: https://doc.dcloud.net.cn/uni-app-x/api/location/location.html#getlocation
