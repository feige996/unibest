# 设备信息 API

## 概述

设备信息 API 用于获取设备系统信息、网络状态等。

## API 列表

### uni.getSystemInfo

获取系统信息。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/system/system-info.html#getsysteminfo

**返回值**：
- `brand` - 手机品牌
- `model` - 手机型号
- `pixelRatio` - 设备像素比
- `screenWidth` - 屏幕宽度
- `screenHeight` - 屏幕高度
- `windowWidth` - 可使用窗口宽度
- `windowHeight` - 可使用窗口高度
- `statusBarHeight` - 状态栏的高度
- `language` - 应用设置的语言
- `version` - 版本号
- `platform` - 平台

**示例**：
```javascript
uni.getSystemInfo({
  success: (res) => {
    console.log('屏幕宽度', res.screenWidth)
    console.log('屏幕高度', res.screenHeight)
    console.log('状态栏高度', res.statusBarHeight)
  }
})
```

### uni.getSystemInfoSync

同步获取系统信息。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/system/system-info.html#getsysteminfosync

### uni.getNetworkType

获取网络类型。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/system/network.html#getnetworktype

**返回值**：
- `networkType` - 网络类型（wifi、2g、3g、4g、unknown、none）

### uni.onNetworkStatusChange

监听网络状态变化。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/system/network.html#onnetworkstatuschange

## 参考资源

- [uni-app 系统信息文档](https://doc.dcloud.net.cn/uni-app-x/api/system/system-info.html)
- [uni-app 网络状态文档](https://doc.dcloud.net.cn/uni-app-x/api/system/network.html)
