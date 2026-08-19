# Installation

## 在 UniApp 项目中安装 uView UI

uView UI 是专为 UniApp 设计的 UI 组件库，需要正确集成到 UniApp 项目中。

### 方式一：通过 DCloud 插件市场安装（推荐）

1. 访问 DCloud 插件市场：https://ext.dcloud.net.cn/plugin?id=1593
2. 在 HBuilderX 中：
   - 打开项目
   - 点击"工具" → "插件安装"
   - 搜索 "uView UI" 或直接输入插件 ID: 1593
   - 点击"导入插件"
3. 插件会自动导入到 `uni_modules/uview-ui` 目录

### 方式二：通过 npm 安装

```bash
npm install uview-ui
```

安装后，uView UI 位于 `node_modules/uview-ui` 目录。

### 方式三：手动下载安装

1. 从 GitHub 下载：https://github.com/umicro/uView
2. 将下载的文件解压到项目的 `uni_modules/uview-ui` 目录

## UniApp 项目配置

### 1. 在 main.js 中引入

```javascript
// main.js
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

### 2. 在 App.vue 中引入样式

```vue
<!-- App.vue -->
<style lang="scss">
/* 引入 uView 基础样式 */
@import "uview-ui/index.scss";
</style>
```

### 3. 在 uni.scss 中引入主题变量（可选）

```scss
/* uni.scss */
@import "uview-ui/theme.scss";
```

### 4. 配置 easycom（重要）

在 `pages.json` 中配置 easycom，实现组件自动引入：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
    }
  },
  "pages": [
    // ... 页面配置
  ]
}
```

### 5. 验证安装

创建测试页面 `pages/index/index.vue`：

```vue
<template>
  <view class="container">
    <u-button type="primary">uView 按钮</u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20rpx;
}
</style>
```

如果按钮正常显示，说明安装成功。

## 目录结构

安装后的项目结构：

```
uniapp-project/
├── uni_modules/
│   └── uview-ui/          # uView UI 插件
│       ├── components/    # 组件目录
│       ├── index.scss     # 基础样式
│       └── theme.scss     # 主题变量
├── pages/                 # 页面目录
├── static/                # 静态资源
├── App.vue                # 应用入口
├── main.js                # 主入口文件
├── pages.json             # 页面配置
├── manifest.json          # 应用配置
└── uni.scss               # 全局样式变量
```

## 注意事项

1. **SCSS 支持**：确保项目支持 SCSS，在 HBuilderX 中创建项目时选择支持 SCSS
2. **easycom 配置**：必须配置 easycom，否则需要手动引入每个组件
3. **路径问题**：如果使用 npm 安装，注意路径可能需要调整
4. **版本兼容**：确保 uView UI 版本与 UniApp 版本兼容
5. **Vue 版本**：uView UI 支持 Vue 2 和 Vue 3，注意对应的使用方式

## 常见问题

### 组件找不到

- 检查 easycom 配置是否正确
- 检查组件名称是否正确（u-button, u-input 等）
- 检查是否在 main.js 中注册了 uView

### 样式不生效

- 检查是否在 App.vue 中引入了 `uview-ui/index.scss`
- 检查 style 标签是否设置了 `lang="scss"`
- 检查项目是否支持 SCSS

### 主题变量不生效

- 检查是否在 uni.scss 中引入了 `uview-ui/theme.scss`
- 检查变量名称是否正确
- 检查 SCSS 语法是否正确
