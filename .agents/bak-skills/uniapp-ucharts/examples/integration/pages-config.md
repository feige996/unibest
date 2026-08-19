# Pages Configuration

## pages.json 配置

在 UniApp 项目中，`pages.json` 是页面配置文件，需要正确配置以使用 uCharts。

### 基本配置

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

### 图表页面配置

```json
{
  "pages": [
    {
      "path": "pages/chart/chart",
      "style": {
        "navigationBarTitleText": "图表",
        "navigationBarBackgroundColor": "#409EFF",
        "navigationBarTextStyle": "white",
        "backgroundColor": "#f5f5f5"
      }
    }
  ]
}
```

### 下拉刷新配置

如果图表页面需要下拉刷新：

```json
{
  "pages": [
    {
      "path": "pages/chart/chart",
      "style": {
        "navigationBarTitleText": "图表",
        "enablePullDownRefresh": true
      }
    }
  ]
}
```

页面中处理下拉刷新：

```vue
<template>
  <view>
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
  },
  onPullDownRefresh() {
    // 刷新图表数据
    this.loadChartData()
    setTimeout(() => {
      uni.stopPullDownRefresh()
    }, 1000)
  },
  methods: {
    loadChartData() {
      // 加载图表数据
    }
  }
}
</script>
```

### 完整示例

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
    },
    {
      "path": "pages/chart/line",
      "style": {
        "navigationBarTitleText": "折线图"
      }
    },
    {
      "path": "pages/chart/bar",
      "style": {
        "navigationBarTitleText": "柱状图"
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

## 注意事项

1. **easycom 配置**：必须在 pages.json 中配置 easycom
2. **路径正确性**：确保组件路径正确
3. **样式配置**：合理配置页面样式
4. **平台差异**：注意不同平台的配置差异
5. **性能优化**：合理配置下拉刷新和上拉加载
