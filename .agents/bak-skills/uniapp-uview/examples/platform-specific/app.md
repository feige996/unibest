# App Platform

## App 平台注意事项

在 App 平台（iOS/Android）使用 uView UI 时的特殊注意事项。

### manifest.json 配置

```json
{
  "app-plus": {
    "usingComponents": true,
    "nvueStyleCompiler": "uni-app",
    "splashscreen": {
      "alwaysShowBeforeRender": true,
      "waiting": true,
      "autoclose": true,
      "delay": 0
    },
    "distribute": {
      "android": {
        "permissions": [
          "<uses-permission android:name=\"android.permission.INTERNET\"/>"
        ]
      },
      "ios": {}
    }
  }
}
```

### 权限配置

#### Android 权限

```json
{
  "app-plus": {
    "distribute": {
      "android": {
        "permissions": [
          "<uses-permission android:name=\"android.permission.INTERNET\"/>",
          "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\"/>",
          "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\"/>"
        ]
      }
    }
  }
}
```

#### iOS 权限

在 manifest.json 中配置，或在 Xcode 中配置 Info.plist。

### 原生插件

App 平台可以使用原生插件：

```javascript
// #ifdef APP-PLUS
// 使用 5+ API
plus.device.getInfo((info) => {
  console.log('设备信息', info)
})

// 使用原生插件
const plugin = uni.requireNativePlugin('your-plugin-name')
// #endif
```

### 条件编译

```vue
<template>
  <view>
    <!-- #ifdef APP-PLUS -->
    <view>App 平台特有内容</view>
    <!-- #endif -->
  </view>
</template>

<script>
export default {
  methods: {
    handleClick() {
      // #ifdef APP-PLUS
      // App 平台特定代码
      plus.share.sendWithSystem({
        content: '分享内容'
      })
      // #endif
    }
  }
}
</script>
```

### 状态栏适配

```vue
<template>
  <view>
    <u-navbar 
      title="首页"
      :safe-area-inset-top="true"
    ></u-navbar>
  </view>
</template>
```

### 注意事项

1. **权限配置**：根据功能需求配置相应权限
2. **原生插件**：可以使用原生插件扩展功能
3. **性能优化**：App 平台需要注意性能优化
4. **打包配置**：正确配置打包参数
5. **版本号**：正确配置版本号和版本名称
