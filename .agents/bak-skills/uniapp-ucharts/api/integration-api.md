# Integration API

## UniApp 与 uCharts 整合 API

UniApp 与 uCharts 整合使用的 API 参考。

### easycom 配置 API

```json
{
  "easycom": {
    "autoscan": boolean,
    "custom": {
      "qiun-data-charts": "string"
    }
  }
}
```

### pages.json API

```json
{
  "pages": [
    {
      "path": "string",
      "style": {
        "navigationBarTitleText": "string",
        "navigationStyle": "default" | "custom",
        "navigationBarBackgroundColor": "string",
        "navigationBarTextStyle": "black" | "white",
        "enablePullDownRefresh": boolean,
        "onReachBottomDistance": number
      }
    }
  ],
  "globalStyle": {
    "navigationBarTextStyle": "black" | "white",
    "navigationBarTitleText": "string",
    "navigationBarBackgroundColor": "string",
    "backgroundColor": "string"
  }
}
```

### manifest.json API

```json
{
  "name": "string",
  "appid": "string",
  "versionName": "string",
  "versionCode": "string",
  "transformPx": boolean,
  "app-plus": {
    "usingComponents": boolean,
    "nvueStyleCompiler": "uni-app" | "weex"
  },
  "h5": {
    "router": {
      "mode": "hash" | "history",
      "base": "string"
    }
  },
  "mp-weixin": {
    "appid": "string",
    "setting": {
      "urlCheck": boolean,
      "es6": boolean,
      "enhance": boolean,
      "postcss": boolean,
      "minified": boolean
    },
    "usingComponents": boolean
  }
}
```

### UniApp API 与 uCharts 配合

#### 导航 API

```javascript
// 页面跳转
uni.navigateTo({
  url: 'string',
  success: function,
  fail: function,
  complete: function
})

// 页面返回
uni.navigateBack({
  delta: number
})
```

#### 网络请求 API

```javascript
uni.request({
  url: 'string',
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data: object,
  header: object,
  success: function,
  fail: function,
  complete: function
})
```

#### 存储 API

```javascript
// 存储数据
uni.setStorage({
  key: 'string',
  data: any,
  success: function,
  fail: function
})

// 获取数据
uni.getStorage({
  key: 'string',
  success: function,
  fail: function
})
```

### 条件编译 API

```javascript
// #ifdef 平台名称
// 平台特定代码
// #endif

// #ifndef 平台名称
// 非平台特定代码
// #endif

// #ifdef H5
// H5 平台代码
// #endif

// #ifdef MP-WEIXIN
// 微信小程序代码
// #endif

// #ifdef APP-PLUS
// App 平台代码
// #endif
```
