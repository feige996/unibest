# Integration API | 集成 API

## Instructions

This example provides API reference for UniAppX and uView Pro integration.

### Key Concepts

- Easycom configuration API
- Pages.json API
- Manifest.json API
- UniAppX API integration

### Easycom Configuration API

```json
{
  "easycom": {
    "autoscan": boolean,
    "custom": {
      "^u-(.*)": "string"
    }
  }
}
```

### Pages.json API

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
        "enablePullDownRefresh": boolean
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

### Manifest.json API

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

### UniAppX API Integration

#### Navigation API

```typescript
// Page navigation
uni.navigateTo({
  url: string,
  success?: function,
  fail?: function,
  complete?: function
})

// Page back
uni.navigateBack({
  delta?: number
})
```

#### Network Request API

```typescript
uni.request({
  url: string,
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: object,
  header?: object,
  success?: function,
  fail?: function,
  complete?: function
})
```

#### Storage API

```typescript
// Set storage
uni.setStorage({
  key: string,
  data: any,
  success?: function,
  fail?: function
})

// Get storage
uni.getStorage({
  key: string,
  success?: function,
  fail?: function
})
```

### Conditional Compilation API

```typescript
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

### Key Points

- Configure easycom for automatic component import
- Use pages.json for page routing configuration
- Configure manifest.json for each platform
- Use UniAppX APIs with uView Pro components
- Use conditional compilation for platform-specific code
- Use TypeScript for type safety
