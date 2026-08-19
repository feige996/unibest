# Installation | 安装

## Instructions

This example demonstrates how to install uCharts in UniApp projects via DCloud plugin marketplace (plugin ID: 271).

### Key Concepts

- Installing uCharts via DCloud plugin marketplace
- Installing via npm
- Project structure setup
- Component import methods
- Easycom configuration

### Example: Install via DCloud Plugin Marketplace (Recommended)

**Official Plugin**: https://ext.dcloud.net.cn/plugin?id=271

```bash
# 1. Open HBuilderX
# 2. Go to Tools -> Plugin Installation
# 3. Search for "uCharts" or enter plugin ID: 271
# 4. Click "Import Plugin"
# 5. Plugin will be installed to uni_modules/qiun-data-charts directory
```

**Project Structure After Installation:**
```
project-root/
├── uni_modules/
│   └── qiun-data-charts/
│       ├── components/
│       │   └── qiun-data-charts/
│       └── ...
├── pages/
├── pages.json
└── manifest.json
```

### Example: Install via npm

```bash
# Install uCharts package
npm install @qiun/ucharts

# Or using yarn
yarn add @qiun/ucharts
```

**Import in Component:**
```javascript
// pages/chart/chart.vue
import uCharts from '@qiun/ucharts'

export default {
  onReady() {
    // Use uCharts here
  }
}
```

### Example: Manual Installation

```bash
# 1. Download from DCloud plugin marketplace
# 2. Extract to project root
# 3. Ensure uni_modules/qiun-data-charts/ exists
```

## UniApp 项目配置

### 1. 引入 uCharts

在页面中引入 uCharts 组件：

```vue
<template>
  <view class="chart-container">
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
      chartData: {},
      opts: {}
    }
  }
}
</script>
```

### 2. 配置 easycom（推荐）

在 `pages.json` 中配置 easycom，实现组件自动引入：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "qiun-data-charts": "@/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue"
    }
  },
  "pages": [
    // ... 页面配置
  ]
}
```

### 3. 验证安装

创建测试页面验证安装是否成功：

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

<style scoped>
.container {
  width: 100%;
  height: 400px;
}
</style>
```

如果图表正常显示，说明安装成功。

## 目录结构

安装后的项目结构：

```
uniapp-project/
├── uni_modules/
│   └── qiun-data-charts/   # uCharts 插件
│       ├── components/     # 组件目录
│       └── ucharts/        # uCharts 核心文件
├── pages/                  # 页面目录
├── static/                 # 静态资源
├── App.vue                 # 应用入口
├── main.js                 # 主入口文件
├── pages.json              # 页面配置
├── manifest.json           # 应用配置
└── uni.scss                # 全局样式变量
```

### Example: Verify Installation

```vue
<!-- pages/index/index.vue -->
<template>
  <view>
    <qiun-data-charts type="line" :chartData="chartData" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        series: [{
          name: '数据',
          data: [35, 36, 31, 33, 13]
        }]
      }
    }
  }
}
</script>
```

### Key Points

- Install via DCloud plugin marketplace for easiest integration
- Plugin ID: 271
- Component will be in `uni_modules/qiun-data-charts/components/qiun-data-charts/`
- Configure easycom in pages.json for automatic import
- Test installation by using the component in a page
- Ensure canvas is supported on target platforms
