# Pages Configuration Template

## pages.json 配置模板

UniApp + uCharts 项目的 pages.json 配置模板。

### 完整模板

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
        "navigationBarTitleText": "首页",
        "navigationBarBackgroundColor": "#409EFF",
        "navigationBarTextStyle": "white"
      }
    },
    {
      "path": "pages/chart/line",
      "style": {
        "navigationBarTitleText": "折线图",
        "enablePullDownRefresh": true
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
  },
  "tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#409EFF",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "static/tab-home.png",
        "selectedIconPath": "static/tab-home-current.png"
      },
      {
        "pagePath": "pages/chart/chart",
        "text": "图表",
        "iconPath": "static/tab-chart.png",
        "selectedIconPath": "static/tab-chart-current.png"
      }
    ]
  }
}
```

### 使用说明

1. **easycom 配置**：必须配置，用于自动引入 uCharts 组件
2. **pages 配置**：配置所有页面路径和样式
3. **globalStyle**：配置全局样式
4. **tabBar**：配置底部导航栏（可选）
