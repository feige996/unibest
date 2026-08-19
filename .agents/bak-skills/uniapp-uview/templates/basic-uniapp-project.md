# Basic UniApp Project Template

## 基础 UniApp 项目模板

这是一个基础的 UniApp + uView UI 项目模板。

### 项目结构

```
uniapp-uview-project/
├── uni_modules/
│   └── uview-ui/          # uView UI 插件
├── pages/
│   ├── index/
│   │   └── index.vue
│   └── ...
├── static/                # 静态资源
├── App.vue                # 应用入口
├── main.js                # 主入口文件
├── pages.json             # 页面配置
├── manifest.json          # 应用配置
└── uni.scss               # 全局样式变量
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
/* 引入 uView 基础样式 */
@import "uview-ui/index.scss";

/* 全局样式 */
page {
  background-color: #f5f5f5;
}
</style>
```

### main.js

```javascript
import App from './App'
import uView from 'uview-ui'

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(uView)
  return {
    app
  }
}
// #endif

// #ifndef VUE3
import Vue from 'vue'
Vue.use(uView)
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
      "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
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
/* 引入 uView 主题变量 */
@import "uview-ui/theme.scss";
```

### manifest.json

```json
{
  "name": "uniapp-uview-project",
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
    <u-navbar title="首页"></u-navbar>
    <view class="content">
      <u-button type="primary" @click="handleClick">点击按钮</u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.$u.toast('按钮被点击')
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
