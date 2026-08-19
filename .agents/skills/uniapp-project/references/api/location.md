# 位置服务 API

## 概述

位置服务 API 用于获取地理位置、打开地图等。

## API 列表

### uni.getLocation

获取当前地理位置。

**详细文档**：https://uniapp.dcloud.net.cn/api/location/location.html#getlocation

**参数**：
- `type` (String) - 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 uni.openLocation 的坐标
- `altitude` (Boolean) - 传入 true 会返回高度信息
- `geocode` (Boolean) - 默认 false，传入 true 会解析地址信息

**返回值**：
- `latitude` - 纬度
- `longitude` - 经度
- `speed` - 速度
- `accuracy` - 位置的精确度
- `altitude` - 高度
- `verticalAccuracy` - 垂直精度
- `horizontalAccuracy` - 水平精度

**示例**：
```javascript
uni.getLocation({
  type: 'gcj02',
  success: (res) => {
    console.log('当前位置', res.latitude, res.longitude)
  }
})
```

### uni.openLocation

使用微信内置地图查看位置。

**详细文档**：https://uniapp.dcloud.net.cn/api/location/open-location.html#openlocation

**参数**：
- `latitude` (Number) - 纬度
- `longitude` (Number) - 经度
- `name` (String) - 位置名称
- `address` (String) - 地址的详细说明

### uni.chooseLocation

打开地图选择位置。

**详细文档**：https://uniapp.dcloud.net.cn/api/location/choose-location.html#chooselocation

## 参考资源

- [uni-app 位置服务文档](https://uniapp.dcloud.net.cn/api/location/location.html)
