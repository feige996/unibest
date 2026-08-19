# Basic UniApp Project Template

## 基础 UniApp 项目模板

这是一个基础的 UniApp + uCharts 项目模板。

### 项目结构

```
uniapp-ucharts-project/
├── uni_modules/
│   └── qiun-data-charts/   # uCharts 插件
├── pages/
│   ├── index/
│   │   └── index.vue
│   └── ...
├── static/                 # 静态资源
├── App.vue                 # 应用入口
├── main.js                 # 主入口文件
├── pages.json              # 页面配置
├── manifest.json           # 应用配置
└── uni.scss                # 全局样式变量
```

### App.vue

```vue
<template>
  <view id="app">
    <!-- 应用根组件 -->
  </view>
</template>

<script>
export default {
  onLaunch: function() {
    console.log('App Launch')
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
/* 全局样式 */
page {
  background-color: #f5f5f5;
}
</style>
```

### main.js

```javascript
import App from './App'

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif
```

### pages.json

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "qiun-data-charts": "@/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue"
    }
  },
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页"
      }
    }
  ],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "UniApp",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#f5f5f5"
  }
}
```

### uni.scss

```scss
/* uni.scss */
/* 自定义全局变量 */
$uni-color-primary: #409EFF;
$uni-bg-color: #f5f5f5;
```

### manifest.json

```json
{
  "name": "uniapp-ucharts-project",
  "appid": "",
  "versionName": "1.0.0",
  "versionCode": "100",
  "transformPx": false,
  "app-plus": {
    "usingComponents": true
  },
  "h5": {
    "router": {
      "mode": "hash"
    }
  },
  "mp-weixin": {
    "appid": "",
    "setting": {
      "urlCheck": false
    },
    "usingComponents": true
  }
}
```

### pages/index/index.vue

```vue
<template>
  <view class="container">
    <view class="chart-wrapper">
      <qiun-data-charts 
        type="line"
        :opts="opts"
        :chartData="chartData"
      />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [{
          name: '数据',
          data: [120, 200, 150, 80, 70, 110, 130]
        }]
      },
      opts: {
        color: ['#409EFF'],
        padding: [15, 15, 0, 15],
        enableScroll: false,
        legend: {
          show: false
        },
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          gridType: 'dash',
          dashLength: 2
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20rpx;
}

.chart-wrapper {
  width: 100%;
  height: 400px;
  background-color: #ffffff;
  border-radius: 8rpx;
  padding: 20rpx;
}
</style>
```
