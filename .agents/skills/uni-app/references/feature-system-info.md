---
name: System Information
description: Device info, system info, and environment detection APIs
---

# System Information

## uni.getSystemInfo / getSystemInfoSync

Get device and system information.

```javascript
// Synchronous (faster, recommended)
const info = uni.getSystemInfoSync()
console.log(info)

// Asynchronous
uni.getSystemInfo({
  success: (res) => {
    console.log(res)
  }
})

// Promise
uni.getSystemInfo().then(res => {
  console.log(res)
})
```

### System Info Properties

| Property | Type | Description |
|----------|------|-------------|
| brand | String | Device brand |
| model | String | Device model |
| pixelRatio | Number | Device pixel ratio |
| screenWidth | Number | Screen width (px) |
| screenHeight | Number | Screen height (px) |
| windowWidth | Number | Window width (px) |
| windowHeight | Number | Window height (px) |
| statusBarHeight | Number | Status bar height (px) |
| language | String | Language |
| system | String | OS version |
| version | String | WeChat/Runtime version |
| platform | String | Platform: ios/android/windows/mac/devtools |
| SDKVersion | String | Client base library version |
| appId | String | App ID (DCloud) |
| appName | String | App name |
| appVersion | String | App version |
| appCodeName | String | App code name |
| uniPlatform | String | uni-app platform |
| uniCompileVersion | String | Compilation version |
| uniRuntimeVersion | String | Runtime version |
| deviceId | String | Device ID |
| deviceBrand | String | Device brand |
| deviceModel | String | Device model |
| deviceType | String | Device type: phone/pad |
| osName | String | OS name |
| osVersion | String | OS version |
| osLanguage | String | OS language |
| osTheme | String | OS theme: light/dark |
| batteryLevel | Number | Battery level (0-100) |

## uni.getAppBaseInfo

Get app base information.

```javascript
const info = uni.getAppBaseInfo()
// Returns: appId, appName, appVersion, appVersionCode, etc.
```

## uni.getDeviceInfo

Get device hardware information.

```javascript
const info = uni.getDeviceInfo()
// Returns: brand, model, deviceId, deviceBrand, deviceModel, deviceType
```

## uni.getWindowInfo

Get window information.

```javascript
const info = uni.getWindowInfo()
// Returns: pixelRatio, screenWidth, screenHeight, windowWidth, windowHeight,
//          statusBarHeight, safeArea, screenTop
```

## Safe Area

Handle notched devices and safe areas.

```javascript
const info = uni.getSystemInfoSync()

// Safe area info
const safeArea = info.safeArea
console.log(safeArea) // { top, left, right, bottom, width, height }

// Check if device has notch (unsafe area at top)
const hasNotch = info.safeAreaInsets && info.safeAreaInsets.top > 0
```

### Safe Area CSS Variables (App/H5)

```css
.safe-area-bottom {
  padding-bottom: constant(safe-area-inset-bottom); /* iOS 11.0 */
  padding-bottom: env(safe-area-inset-bottom); /* iOS 11.2+ */
}
```

## Network Status

### uni.getNetworkType

```javascript
uni.getNetworkType({
  success: (res) => {
    // res.networkType: wifi/2g/3g/4g/5g/unknown/none
    console.log('Network:', res.networkType)
  }
})
```

### uni.onNetworkStatusChange

```javascript
// Listen for network changes
uni.onNetworkStatusChange((res) => {
  console.log('Network type:', res.networkType)
  console.log('Is connected:', res.isConnected)
})

// Remove listener
uni.offNetworkStatusChange(callback)
```

## Battery Info

### uni.getBatteryInfo

```javascript
uni.getBatteryInfo({
  success: (res) => {
    console.log('Level:', res.level) // 0-100
    console.log('Is charging:', res.isCharging)
  }
})
```

## Device Orientation

### uni.onDeviceMotionChange

```javascript
uni.startDeviceMotionListening({
  interval: 'normal', // game/ui/normal
  success: () => {
    uni.onDeviceMotionChange((res) => {
      console.log('Alpha:', res.alpha) // 0-360
      console.log('Beta:', res.beta)   // -180 to 180
      console.log('Gamma:', res.gamma) // -90 to 90
    })
  }
})

// Stop listening
uni.stopDeviceMotionListening()
```

### Screen Orientation

```javascript
// Get current orientation
const info = uni.getSystemInfoSync()
const isLandscape = info.screenWidth > info.screenHeight

// Lock orientation (App only)
plus.screen.lockOrientation('portrait-primary')
// Options: portrait-primary/portrait-secondary/landscape-primary/landscape-secondary
```

## Screen Brightness

```javascript
// Set brightness (0-1)
uni.setScreenBrightness({
  value: 0.8
})

// Get brightness
uni.getScreenBrightness({
  success: (res) => {
    console.log('Brightness:', res.value)
  }
})

// Keep screen on
uni.setKeepScreenOn({
  keepScreenOn: true
})
```

## Vibration

```javascript
// Short vibration (15ms)
uni.vibrateShort()

// Long vibration (400ms)
uni.vibrateLong()

// Pattern vibration (App only)
uni.vibrateLong() // or custom pattern
```

## Clipboard

```javascript
// Set clipboard
uni.setClipboardData({
  data: 'Text to copy',
  success: () => {
    uni.showToast({ title: 'Copied' })
  }
})

// Get clipboard
uni.getClipboardData({
  success: (res) => {
    console.log('Clipboard:', res.data)
  }
})
```

## Phone Call

```javascript
uni.makePhoneCall({
  phoneNumber: '13800138000'
})
```

## Scan Code

```javascript
uni.scanCode({
  onlyFromCamera: false, // Allow from album
  scanType: ['qrCode', 'barCode'], // Types to scan
  success: (res) => {
    console.log('Result:', res.result)
    console.log('Type:', res.scanType)
    console.log('CharSet:', res.charSet)
  }
})
```

## Platform Detection

```javascript
const info = uni.getSystemInfoSync()

// Platform checks
const isIOS = info.platform === 'ios'
const isAndroid = info.platform === 'android'
const isWindows = info.platform === 'windows'
const isMac = info.platform === 'mac'
const isDevtools = info.platform === 'devtools'

// App platform checks
const isApp = info.uniPlatform === 'app'
const isH5 = info.uniPlatform === 'web'
const isWeixinMP = info.uniPlatform === 'mp-weixin'

// Safe area calculation
const safeAreaTop = info.statusBarHeight + (isApp ? 44 : 0) // 44px for nav bar
```

## Storage Info

```javascript
uni.getStorageInfo({
  success: (res) => {
    console.log('Keys:', res.keys)
    console.log('Current size:', res.currentSize)
    console.log('Limit size:', res.limitSize)
  }
})
```

<!--
Source references:
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/system/info.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/system/network.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/system/phone.md
-->
