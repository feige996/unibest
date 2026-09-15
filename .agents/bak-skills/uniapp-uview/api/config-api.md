# Configuration API

## 配置 API

UniApp + uView 项目的配置文件 API 参考。

### pages.json 配置

#### easycom 配置

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
    }
  }
}
```

#### pages 配置

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页",
        "navigationStyle": "default" | "custom",
        "navigationBarBackgroundColor": "#ffffff",
        "navigationBarTextStyle": "black" | "white",
        "backgroundColor": "#f5f5f5",
        "enablePullDownRefresh": true,
        "onReachBottomDistance": 50
      }
    }
  ]
}
```

#### globalStyle 配置

```json
{
  "globalStyle": {
    "navigationBarTextStyle": "black" | "white",
    "navigationBarTitleText": "UniApp",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#f5f5f5"
  }
}
```

#### tabBar 配置

```json
{
  "tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#409EFF",
    "borderStyle": "black" | "white",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "static/tab-home.png",
        "selectedIconPath": "static/tab-home-current.png"
      }
    ]
  }
}
```

### manifest.json 配置

#### 基本配置

```json
{
  "name": "uniapp-uview-project",
  "appid": "",
  "versionName": "1.0.0",
  "versionCode": "100",
  "transformPx": false
}
```

#### H5 配置

```json
{
  "h5": {
    "router": {
      "mode": "hash" | "history",
      "base": "/"
    },
    "devServer": {
      "https": false,
      "port": 8080
    }
  }
}
```

#### 微信小程序配置

```json
{
  "mp-weixin": {
    "appid": "your-appid",
    "setting": {
      "urlCheck": false,
      "es6": true,
      "enhance": true,
      "postcss": true,
      "minified": true
    },
    "usingComponents": true
  }
}
```

#### App 配置

```json
{
  "app-plus": {
    "usingComponents": true,
    "nvueStyleCompiler": "uni-app",
    "distribute": {
      "android": {
        "permissions": []
      },
      "ios": {}
    }
  }
}
```

### uni.scss 配置

```scss
/* 引入 uView 主题变量 */
@import "uview-ui/theme.scss";

/* 自定义变量 */
$uni-color-primary: #409EFF;
$uni-bg-color: #f5f5f5;
```

### App.vue 配置

```vue
<style lang="scss">
/* 引入 uView 基础样式 */
@import "uview-ui/index.scss";
</style>
```

### main.js 配置

#### Vue 2

```javascript
import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'

Vue.use(uView)
```

#### Vue 3

```javascript
import { createSSRApp } from 'vue'
import App from './App'
import uView from 'uview-ui'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uView)
  return { app }
}
```
