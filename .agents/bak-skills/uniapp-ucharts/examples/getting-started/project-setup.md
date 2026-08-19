# Project Setup

## UniApp 项目配置

配置 UniApp 项目以正确使用 uCharts。

### 项目结构

标准的 UniApp + uCharts 项目结构：

```
uniapp-project/
├── uni_modules/
│   └── qiun-data-charts/   # uCharts 插件
├── pages/                  # 页面目录
│   ├── index/
│   │   └── index.vue
│   └── ...
├── components/             # 自定义组件
├── static/                 # 静态资源
├── utils/                  # 工具函数
├── App.vue                 # 应用入口
├── main.js                 # 主入口文件
├── pages.json              # 页面配置
├── manifest.json           # 应用配置
└── uni.scss                # 全局样式变量
```

### App.vue 配置

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

### main.js 配置

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

### pages.json 配置

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

### uni.scss 配置

```scss
/* uni.scss */
/* 自定义全局变量 */
$uni-color-primary: #409EFF;
$uni-bg-color: #f5f5f5;
```

### manifest.json 配置要点

```json
{
  "name": "uniapp-ucharts-project",
  "appid": "",
  "description": "",
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

## 开发环境配置

### HBuilderX 配置

1. **启用 Canvas 支持**：
   - 确保项目支持 Canvas
   - 检查平台是否支持 Canvas

2. **配置编译器**：
   - 工具 → 选项 → HBuilderX → 编译器
   - 确保启用相关编译选项

### 条件编译

使用条件编译处理平台差异：

```vue
<template>
  <view>
    <!-- #ifdef H5 -->
    <view>H5 平台特有内容</view>
    <!-- #endif -->
    
    <!-- #ifdef MP-WEIXIN -->
    <view>微信小程序特有内容</view>
    <!-- #endif -->
    
    <!-- #ifdef APP-PLUS -->
    <view>App 平台特有内容</view>
    <!-- #endif -->
  </view>
</template>
```

## 验证配置

创建测试页面验证配置是否正确：

```vue
<template>
  <view class="container">
    <qiun-data-charts 
      type="line"
      :opts="opts"
      :chartData="chartData"
    />
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
  width: 100%;
  height: 400px;
  padding: 20rpx;
}
</style>
```

## 注意事项

1. **easycom 必须配置**：否则需要手动引入组件
2. **Canvas 支持**：确保目标平台支持 Canvas
3. **容器高度**：图表容器必须有明确的高度
4. **数据格式**：确保数据格式符合 uCharts 要求
5. **平台测试**：在不同平台测试图表功能
6. **性能优化**：注意图表性能，避免过多图表
