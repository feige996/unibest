# Configuration API

## 配置 API

UniApp + uCharts 项目的配置文件 API 参考。

### pages.json 配置

#### easycom 配置

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "qiun-data-charts": "@/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue"
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

### manifest.json 配置

#### 基本配置

```json
{
  "name": "uniapp-ucharts-project",
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
/* uni.scss */
/* 自定义变量 */
$uni-color-primary: #409EFF;
$uni-bg-color: #f5f5f5;
```

### App.vue 配置

```vue
<style lang="scss">
/* 全局样式 */
page {
  background-color: #f5f5f5;
}
</style>
```

### main.js 配置

#### Vue 2

```javascript
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
```

#### Vue 3

```javascript
import { createSSRApp } from 'vue'
import App from './App'

export function createApp() {
  const app = createSSRApp(App)
  return { app }
}
```
