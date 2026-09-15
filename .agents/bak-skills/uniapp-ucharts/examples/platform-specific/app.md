# App Platform

## App 平台注意事项

在 App 平台（iOS/Android）使用 uCharts 时的特殊注意事项。

### manifest.json 配置

```json
{
  "app-plus": {
    "usingComponents": true,
    "nvueStyleCompiler": "uni-app",
    "splashscreen": {
      "alwaysShowBeforeRender": true,
      "waiting": true,
      "autoclose": true,
      "delay": 0
    },
    "distribute": {
      "android": {
        "permissions": [
          "<uses-permission android:name=\"android.permission.INTERNET\"/>"
        ]
      },
      "ios": {}
    }
  }
}
```

### Canvas 支持

App 平台支持 Canvas，但 nvue 页面可能有限制。

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
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        series: [{
          name: '数据',
          data: [120, 200, 150, 80, 70]
        }]
      },
      opts: {
        color: ['#409EFF'],
        padding: [15, 15, 0, 15]
      }
    }
  }
}
</script>
```

### 条件编译

使用条件编译处理 App 平台特定逻辑：

```vue
<template>
  <view>
    <!-- #ifdef APP-PLUS -->
    <view>App 平台特有内容</view>
    <!-- #endif -->
  </view>
</template>

<script>
export default {
  methods: {
    loadChartData() {
      // #ifdef APP-PLUS
      // App 平台特定代码
      plus.net.XMLHttpRequest({
        url: 'https://api.example.com/chart-data',
        success: (res) => {
          this.chartData = res.data
        }
      })
      // #endif
    }
  }
}
</script>
```

### 注意事项

1. **Canvas 支持**：App 平台支持 Canvas，但 nvue 可能有限制
2. **权限配置**：根据功能需求配置相应权限
3. **性能优化**：App 平台需要注意性能优化
4. **打包配置**：正确配置打包参数
5. **版本号**：正确配置版本号和版本名称
