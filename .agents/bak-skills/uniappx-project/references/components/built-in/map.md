# map

## Instructions

地图组件。

地图组件用于展示地图，而定位API只是获取坐标，请勿混淆两者。

平台差异说明

### Syntax

- 使用 `<map />`（或 `<map></map>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| longitude | Number |  | 中心经度 |  |
| latitude | Number |  | 中心纬度 |  |
| scale | Number | 16 | 缩放级别，取值范围为3-20 | 高德地图缩放比例与微信小程序不同 |
| theme | String | normal | 主题（satellite 或 normal）只在初始化时有效，不能动态变更（仅Android支持） | 京东小程序 |
| min-scale | Number | 3 | 最小缩放级别 | App-nvue 3.1.0+、微信小程序2.13+、小红书小程序 |
| max-scale | Number | 20 | 最大缩放级别 | App-nvue 3.1.0+、微信小程序2.13+、小红书小程序 |
| layer-style | Number/String | 1 | 个性化地图 | App-nvue 3.1.0+、微信小程序2.13+、小红书小程序 |
| markers | Array |  | 标记点 |  |
| polyline | Array |  | 路线 | 飞书小程序、小红书小程序不支持 |
| circles | Array |  | 圆 | 小红书小程序不支持 |
| controls | Array |  | 控件 | 小红书小程序不支持 |
| include-points | Array |  | 缩放视野以包含所有给定的坐标点 | App-nvue 2.1.5+、微信小程序、H5、百度小程序、支付宝小程序、京东小程序 |
| zIndex | number | false | 显示层级 | 微信小程序2.3.0 |
| enable-3D | Boolean | false | 是否显示3D楼块 | App-nvue 2.1.5+、微信小程序2.3.0、小红书小程序 |
| show-compass | Boolean | false | 是否显示指南针 | App-nvue 2.1.5+、微信小程序2.3.0、小红书小程序 |
| enable-zoom | Boolean | true | 是否支持缩放 | App-nvue 2.1.5+、微信小程序2.3.0 |
| enable-scroll | Boolean | true | 是否支持拖动 | App-nvue 2.1.5+、微信小程序2.3.0 |
| enable-rotate | Boolean | false | 是否支持旋转 | App-nvue 2.1.5+、微信小程序2.3.0、小红书小程序 |
| rotate | Number | 0 | 旋转角度(范围0-360)地图正北和设备 y 轴角度的夹角 | 微信小程序2.5.0、支付宝小程序、抖音小程序、QQ小程序、小红书小程序 |
| skew | Number | 0 | 倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角 | 微信小程序2.5.0、支付宝小程序、抖音小程序、QQ小程序、小红书小程序 |
| enable-overlooking | Boolean | false | 是否开启俯视 | App-nvue 2.1.5+、微信小程序2.3.0 |
| enable-satellite | Boolean | false | 是否开启卫星图 | App-nvue 2.1.5+、微信小程序2.7.0 |
| enable-traffic | Boolean | false | 是否开启实时路况 | App-nvue 2.1.5+、微信小程序2.7.0 |
| enable-poi | Boolean | false | 是否展示 POI 点 | App-nvue 3.1.0+ |
| enable-building | Boolean | false | 是否展示建筑物 | App-nvue 3.1.0+ 支持 ( 废除原enable-3D属性 高德地图默认开启建筑物就是3D无法设置 ) |
| show-location | Boolean |  | 显示带有方向的当前定位点 | 微信小程序、H5、百度小程序、支付宝小程序、京东小程序、元服务 |
| polygons（支付宝为: polygon） | Array. <polygon> |  | 多边形 | App-nvue 2.1.5+、App-vue 3.4.3+、H5 3.4.3+、微信小程序、百度小程序、支付宝小程序、元服务 |
| enable-indoorMap | Boolean | false | 是否展示室内地图 | App-nvue 3.1.0+ |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| @markertap | EventHandle |  | 点击标记点时触发，e.detail = {markerId} | App-nvue 2.3.3+、H5、微信小程序、支付宝小程序 （App和H5平台需要指定 marker 对象属性 id）、小红书小程序 |
| @labeltap | EventHandle |  | 点击label时触发，e.detail = {markerId} | 微信小程序2.9.0、小红书小程序 |
| @callouttap | EventHandle |  | 点击标记点对应的气泡时触发，e.detail = {markerId} |  |
| @controltap | EventHandle |  | 点击控件时触发，e.detail = {controlId} |  |
| @regionchange | EventHandle |  | 视野发生变化时触发 | 微信小程序、H5、百度小程序、支付宝小程序、京东小程序、元服务 |
| @tap | EventHandle |  | 点击地图时触发; App-nvue、微信小程序2.9支持返回经纬度 |  |
| @updated | EventHandle |  | 在地图渲染更新完成时触发 | 微信小程序、H5、百度小程序 |
| @anchorpointtap | EventHandle |  | 点击定位标时触发，e.detail = {longitude, latitude} | App-nvue 3.1.0+、微信小程序2.13+ |
| @poitap | EventHandle |  | 点击地图poi点时触发，e.detail = {name, longitude, latitude} | 微信小程序2.3.0+ |

#### Platform Compatibility

See official docs for platform support table: `https://doc.dcloud.net.cn/uni-app-x/component/map.html`

### Examples

### Example (Example 1)

```vue
<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
	</view>
</template>
```

### Example (Example 2)

```vue
<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
	</view>
</template>
```

### Example (Example 3)

```vue
<script>
export default {
	data() {
		return {
			id:0, // 使用 marker点击事件 需要填写id
			title: 'map',
			latitude: 39.909,
			longitude: 116.39742,
			covers: [{
				latitude: 39.909,
				longitude: 116.39742,
				iconPath: '../../../static/location.png'
			}, {
				latitude: 39.90,
				longitude: 116.39,
				iconPath: '../../../static/location.png'
			}]
		}
	},
	methods: {

	}
}
</script>
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/map.html)
