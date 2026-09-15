# Project Setup | 项目设置

## Instructions

This example demonstrates how to set up a UniAppX project to work with uView Pro.

### Key Concepts

- UniAppX project structure
- TypeScript (.uts) file configuration
- Composition API and setup syntax
- SCSS style configuration
- Component directory organization

### 项目结构

标准的 UniAppX + uView Pro 项目结构：

```
uniappx-project/
├── uni_modules/
│   └── uview-pro/          # uView Pro 插件
├── pages/                 # 页面目录
│   ├── index/
│   │   └── index.vue
│   └── ...
├── components/            # 自定义组件
├── static/               # 静态资源
├── utils/                # 工具函数
├── App.vue               # 应用入口
├── main.uts              # 主入口文件（UniAppX 使用 .uts）
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

<script setup lang="ts">
// UniAppX 使用 setup 语法
</script>

<style lang="scss">
/* 引入 uView Pro 基础样式 */
@import "uview-pro/index.scss";

/* 全局样式 */
page {
  background-color: #f5f5f5;
}
</style>
```

### main.uts 配置

UniAppX 使用 TypeScript，主入口文件为 `main.uts`：

```typescript
// main.uts
import { createSSRApp } from 'vue'
import App from './App.vue'
import uViewPro from 'uview-pro'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uViewPro)
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
      "^u-(.*)": "uview-pro/components/u-$1/u-$1.vue"
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
    "navigationBarTitleText": "UniAppX",
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
/* 引入 uView Pro 主题变量 */
@import "uview-pro/theme.scss";

/* 自定义全局变量 */
$uni-color-primary: #409EFF;
$uni-bg-color: #f5f5f5;
```

### manifest.json 配置要点

```json
{
  "name": "uniappx-uview-pro-project",
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

1. **启用 TypeScript 支持**：
   - 创建 UniAppX 项目时自动启用 TypeScript
   - 确保 HBuilderX 版本支持 UniAppX

2. **启用 SCSS 支持**：
   - 创建项目时选择支持 SCSS
   - 或在项目设置中启用 SCSS 编译

### TypeScript 配置

UniAppX 项目自动包含 TypeScript 配置，无需额外配置。

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

<script setup lang="ts">
// #ifdef H5
// H5 平台特定代码
// #endif

// #ifdef MP-WEIXIN
// 微信小程序特定代码
// #endif

// #ifdef APP-PLUS
// App 平台特定代码
// #endif
</script>
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

<script setup lang="ts">
import { ref } from 'vue'

const uToast = ref()

const test = () => {
  uToast.value?.show({
    message: '配置成功！'
  })
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

1. **TypeScript 支持**：UniAppX 使用 TypeScript，确保类型正确
2. **Setup 语法**：推荐使用 Composition API 和 setup 语法
3. **easycom 必须配置**：否则需要手动引入每个组件
4. **SCSS 必须支持**：uView Pro 依赖 SCSS
5. **路径正确性**：确保引入路径正确
6. **版本兼容**：确保 UniAppX 和 uView Pro 版本兼容
7. **平台测试**：在不同平台测试功能
