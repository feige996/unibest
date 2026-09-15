# Mini-Program Platform

## 小程序平台注意事项

在微信小程序等小程序平台使用 uCharts 时的特殊注意事项。

### manifest.json 配置

```json
{
  "mp-weixin": {
    "appid": "your-appid",
    "setting": {
      "urlCheck": false,
      "es6": true,
      "enhance": true,
      "postcss": true,
      "minified": true
    },
    "usingComponents": true
  }
}
```

### Canvas 支持

小程序平台支持 Canvas，但需要注意性能限制。

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
        padding: [15, 15, 0, 15],
        enableScroll: false
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 400rpx;
}
</style>
```

### 条件编译

使用条件编译处理小程序平台特定逻辑：

```vue
<template>
  <view>
    <!-- #ifdef MP-WEIXIN -->
    <view>微信小程序特有内容</view>
    <!-- #endif -->
  </view>
</template>

<script>
export default {
  methods: {
    loadChartData() {
      // #ifdef MP-WEIXIN
      // 微信小程序特定代码
      wx.request({
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

### 性能优化

小程序平台需要注意性能：

```vue
<template>
  <view>
    <qiun-data-charts 
      type="line"
      :opts="opts"
      :chartData="chartData"
      :canvas-id="canvasId"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      canvasId: 'chart-canvas',
      chartData: {},
      opts: {
        // 优化配置
        enableScroll: false,
        dataLabel: false
      }
    }
  }
}
</script>
```

### 注意事项

1. **Canvas 性能**：小程序平台 Canvas 性能有限，注意优化
2. **数据量**：避免过大的数据量
3. **代码包大小**：注意小程序代码包大小限制
4. **AppID 配置**：必须在 manifest.json 中配置正确的 AppID
5. **URL 检查**：开发时可以关闭 urlCheck
