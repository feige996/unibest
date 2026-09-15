# Installation | 安装

## Instructions

This example demonstrates how to install uView Pro in UniAppX projects via DCloud plugin marketplace (plugin ID: 24633).

### Key Concepts

- Installing uView Pro via DCloud plugin marketplace
- Installing via npm
- UniAppX project structure setup
- TypeScript (.uts) file configuration
- Composition API and setup syntax
- SCSS style configuration

### Example: Install via DCloud Plugin Marketplace (Recommended)

**Official Plugin**: https://ext.dcloud.net.cn/plugin?id=24633

```bash
# 1. Open HBuilderX
# 2. Open UniAppX project
# 3. Go to Tools -> Plugin Installation
# 4. Search for "uView Pro" or enter plugin ID: 24633
# 5. Click "Import Plugin"
# 6. Plugin will be installed to uni_modules/uview-pro directory
```

**Project Structure After Installation:**
```
project-root/
├── uni_modules/
│   └── uview-pro/
│       ├── components/
│       ├── index.scss
│       └── theme.scss
├── pages/
├── App.vue
├── main.uts
├── pages.json
└── manifest.json
```

### Example: Install via npm

```bash
# Install uView Pro package
npm install uview-pro

# Or using yarn
yarn add uview-pro
```

**Import in main.uts:**
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

### Example: Manual Installation

```bash
# 1. Download from DCloud plugin marketplace
# 2. Extract to project root
# 3. Ensure uni_modules/uview-pro/ exists
```

## UniAppX 项目配置

### 1. 在 main.uts 中引入

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

### 2. 在 App.vue 中引入样式

```vue
<!-- App.vue -->
<style lang="scss">
/* 引入 uView Pro 基础样式 */
@import "uview-pro/index.scss";
</style>
```

### 3. 在 uni.scss 中引入主题变量（可选）

```scss
/* uni.scss */
@import "uview-pro/theme.scss";
```

### 4. 配置 easycom（重要）

在 `pages.json` 中配置 easycom，实现组件自动引入：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-pro/components/u-$1/u-$1.vue"
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
    <u-button type="primary">uView Pro 按钮</u-button>
  </view>
</template>

<script setup lang="ts">
// UniAppX 使用 setup 语法
</script>

<style lang="scss" scoped>
.container {
  padding: 20rpx;
}
</style>
```

如果按钮正常显示，说明安装成功。

## 目录结构

安装后的 UniAppX 项目结构：

```
uniappx-project/
├── uni_modules/
│   └── uview-pro/          # uView Pro 插件
│       ├── components/    # 组件目录
│       ├── index.scss     # 基础样式
│       └── theme.scss     # 主题变量
├── pages/                 # 页面目录
├── static/                # 静态资源
├── App.vue                # 应用入口
├── main.uts               # 主入口文件（UniAppX 使用 .uts）
├── pages.json             # 页面配置
├── manifest.json          # 应用配置
└── uni.scss               # 全局样式变量
```

## UniAppX 特性

### TypeScript 支持

UniAppX 使用 TypeScript，需要类型定义：

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

### Setup 语法

UniAppX 推荐使用 Composition API 和 setup 语法：

```vue
<template>
  <view>
    <u-button type="primary" @click="handleClick">按钮</u-button>
  </view>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('按钮被点击')
}
</script>
```

### Example: Verify Installation

```vue
<!-- pages/index/index.vue -->
<template>
  <view>
    <u-button type="primary">uView Pro Button</u-button>
  </view>
</template>

<script setup lang="ts">
// UniAppX uses setup syntax
</script>

<style lang="scss" scoped>
// SCSS is required
</style>
```

### Key Points

- Install via DCloud plugin marketplace for easiest integration
- Plugin ID: 24633
- Component will be in `uni_modules/uview-pro/components/`
- Configure easycom in pages.json for automatic import
- Register uView Pro in main.uts (TypeScript)
- Import SCSS styles in App.vue
- Use setup syntax and Composition API (recommended for UniAppX)
- Test installation by using components in a page
