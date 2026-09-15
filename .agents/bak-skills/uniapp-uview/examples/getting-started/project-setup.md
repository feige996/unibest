# Project Setup

## UniApp 项目配置

配置 UniApp 项目以正确使用 uView UI。

### 项目结构

标准的 UniApp + uView 项目结构：

```
uniapp-project/
├── uni_modules/
│   └── uview-ui/          # uView UI 插件
├── pages/                 # 页面目录
│   ├── index/
│   │   └── index.vue
│   └── ...
├── components/            # 自定义组件
├── static/               # 静态资源
├── utils/                # 工具函数
├── App.vue               # 应用入口
├── main.js               # 主入口文件
├── pages.json            # 页面配置
├── manifest.json         # 应用配置
└── uni.scss              # 全局样式变量
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
/* 引入 uView 基础样式 */
@import "uview-ui/index.scss";

/* 全局样式 */
page {
  background-color: #f5f5f5;
}
</style>
```

### main.js 配置

#### Vue 2 项目

```javascript
import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'

Vue.use(uView)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
```

#### Vue 3 项目

```javascript
import { createSSRApp } from 'vue'
import App from './App'
import uView from 'uview-ui'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uView)
  return {
    app
  }
}
```

### pages.json 配置

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
    }
  },
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页",
        "navigationStyle": "default",
        "navigationBarBackgroundColor": "#ffffff",
        "navigationBarTextStyle": "black"
      }
    }
  ],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "UniApp",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#f5f5f5"
  },
  "tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#3cc51f",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "iconPath": "static/tab-home.png",
        "selectedIconPath": "static/tab-home-current.png",
        "text": "首页"
      }
    ]
  }
}
```

### uni.scss 配置

```scss
/* uni.scss */
/* 引入 uView 主题变量 */
@import "uview-ui/theme.scss";

/* 自定义全局变量 */
$uni-color-primary: #409EFF;
$uni-bg-color: #f5f5f5;
```

### manifest.json 配置要点

```json
{
  "name": "uniapp-uview-project",
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

1. **启用 SCSS 支持**：
   - 创建项目时选择支持 SCSS
   - 或在项目设置中启用 SCSS 编译

2. **配置编译器**：
   - 工具 → 选项 → HBuilderX → 编译器
   - 确保启用 SCSS 编译

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
    <u-navbar title="测试页面"></u-navbar>
    <view class="content">
      <u-button type="primary" @click="test">测试按钮</u-button>
      <u-toast ref="uToast"></u-toast>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    test() {
      this.$u.toast('配置成功！')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.content {
  padding: 20rpx;
}
</style>
```

## 注意事项

1. **easycom 必须配置**：否则需要手动引入每个组件
2. **SCSS 必须支持**：uView 依赖 SCSS
3. **路径正确性**：确保引入路径正确
4. **版本兼容**：确保 UniApp 和 uView 版本兼容
5. **平台测试**：在不同平台测试功能
