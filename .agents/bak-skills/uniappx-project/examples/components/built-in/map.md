# map 组件示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/component/map.html

## 概述

`map` 是地图组件，用于显示地图和标记位置。

## 基础用法

```vue
<template>
  <map 
    :latitude="latitude"
    :longitude="longitude"
    :markers="markers"
  ></map>
</template>

<script>
export default {
  data() {
    return {
      latitude: 39.908823,
      longitude: 116.397470,
      markers: [{
        id: 1,
        latitude: 39.908823,
        longitude: 116.397470,
        title: '天安门'
      }]
    }
  }
}
</script>
```

## 完整示例

### 示例 1: 基本地图

```vue
<template>
  <view class="container">
    <map 
      :latitude="latitude"
      :longitude="longitude"
      :scale="scale"
      class="map"
    ></map>
  </view>
</template>

<script>
export default {
  data() {
    return {
      latitude: 39.908823,
      longitude: 116.397470,
      scale: 16
    }
  }
}
</script>

<style>
.map {
  width: 100%;
  height: 500px;
}
</style>
```

### 示例 2: 地图标记

```vue
<template>
  <view class="container">
    <map 
      :latitude="latitude"
      :longitude="longitude"
      :markers="markers"
      :show-location="true"
      class="map"
      @markertap="handleMarkerTap"
    ></map>
  </view>
</template>

<script>
export default {
  data() {
    return {
      latitude: 39.908823,
      longitude: 116.397470,
      markers: [
        {
          id: 1,
          latitude: 39.908823,
          longitude: 116.397470,
          title: '天安门',
          iconPath: '/static/marker.png',
          width: 30,
          height: 30
        },
        {
          id: 2,
          latitude: 39.918823,
          longitude: 116.407470,
          title: '故宫',
          iconPath: '/static/marker.png',
          width: 30,
          height: 30
        }
      ]
    }
  },
  methods: {
    handleMarkerTap(e) {
      const markerId = e.detail.markerId
      const marker = this.markers.find(m => m.id === markerId)
      if (marker) {
        uni.showToast({
          title: marker.title,
          icon: 'none'
        })
      }
    }
  }
}
</script>
```

### 示例 3: 显示当前位置

```vue
<template>
  <view class="container">
    <map 
      :latitude="latitude"
      :longitude="longitude"
      :show-location="true"
      :enable-zoom="true"
      class="map"
    ></map>
    <button @click="getCurrentLocation">获取当前位置</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      latitude: 39.908823,
      longitude: 116.397470
    }
  },
  onLoad() {
    this.getCurrentLocation()
  },
  methods: {
    getCurrentLocation() {
      uni.getLocation({
        type: 'gcj02',
        success: (res) => {
          this.latitude = res.latitude
          this.longitude = res.longitude
        },
        fail: () => {
          uni.showToast({
            title: '获取位置失败',
            icon: 'none'
          })
        }
      })
    }
  }
}
</script>
```

### 示例 4: 地图控件

```vue
<template>
  <view class="container">
    <map 
      :latitude="latitude"
      :longitude="longitude"
      :controls="controls"
      :show-location="true"
      class="map"
      @controltap="handleControlTap"
    ></map>
  </view>
</template>

<script>
export default {
  data() {
    return {
      latitude: 39.908823,
      longitude: 116.397470,
      controls: [
        {
          id: 1,
          iconPath: '/static/location.png',
          position: {
            left: 10,
            top: 10,
            width: 30,
            height: 30
          },
          clickable: true
        }
      ]
    }
  },
  methods: {
    handleControlTap(e) {
      const controlId = e.detail.controlId
      if (controlId === 1) {
        this.getCurrentLocation()
      }
    },
    getCurrentLocation() {
      uni.getLocation({
        type: 'gcj02',
        success: (res) => {
          this.latitude = res.latitude
          this.longitude = res.longitude
        }
      })
    }
  }
}
</script>
```

### 示例 5: 地图事件

```vue
<template>
  <view class="container">
    <map 
      :latitude="latitude"
      :longitude="longitude"
      :markers="markers"
      class="map"
      @tap="handleMapTap"
      @regionchange="handleRegionChange"
      @updated="handleMapUpdated"
    ></map>
  </view>
</template>

<script>
export default {
  data() {
    return {
      latitude: 39.908823,
      longitude: 116.397470,
      markers: []
    }
  },
  methods: {
    handleMapTap(e) {
      console.log('地图点击', e.detail)
      // 添加标记
      const newMarker = {
        id: Date.now(),
        latitude: e.detail.latitude,
        longitude: e.detail.longitude,
        title: '新位置'
      }
      this.markers.push(newMarker)
    },
    handleRegionChange(e) {
      console.log('地图区域变化', e.detail)
    },
    handleMapUpdated() {
      console.log('地图更新完成')
    }
  }
}
</script>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| latitude | Number | - | 中心纬度 |
| longitude | Number | - | 中心经度 |
| scale | Number | 16 | 缩放级别，取值范围为 5-18 |
| markers | Array | [] | 标记点 |
| show-location | Boolean | false | 显示带有方向的当前定位点 |
| controls | Array | [] | 控件 |

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

1. 需要使用 `gcj02` 类型的坐标
2. `markers` 数组中的每个标记需要唯一 `id`
3. `show-location` 可以显示当前位置
4. 可以通过事件监听地图交互

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/component/map.html
- **获取位置**: https://doc.dcloud.net.cn/uni-app-x/api/location/location.html#getlocation
