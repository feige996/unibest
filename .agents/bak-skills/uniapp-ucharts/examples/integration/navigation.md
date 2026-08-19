# Navigation

## 导航和路由

在 UniApp 中使用 uCharts 组件进行页面导航和路由管理。

### 使用 UniApp 导航 API

#### 页面跳转

```javascript
// 保留当前页面，跳转到应用内的某个页面
uni.navigateTo({
  url: '/pages/chart/chart?type=line'
})

// 关闭当前页面，跳转到应用内的某个页面
uni.redirectTo({
  url: '/pages/chart/chart?type=bar'
})

// 返回上一页面
uni.navigateBack({
  delta: 1
})
```

#### 使用按钮进行跳转

```vue
<template>
  <view>
    <button @click="goToChart">查看图表</button>
  </view>
</template>

<script>
export default {
  methods: {
    goToChart() {
      uni.navigateTo({
        url: '/pages/chart/chart?type=line'
      })
    }
  }
}
</script>
```

### 页面传参

#### 传递参数

```javascript
// 跳转并传递参数
uni.navigateTo({
  url: '/pages/chart/chart?type=line&title=折线图'
})
```

#### 接收参数

```vue
<template>
  <view>
    <qiun-data-charts 
      :type="chartType"
      :opts="opts"
      :chartData="chartData"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      chartType: 'line',
      chartData: {},
      opts: {}
    }
  },
  onLoad(options) {
    this.chartType = options.type || 'line'
    this.loadChartData()
  },
  methods: {
    loadChartData() {
      // 根据 chartType 加载对应的图表数据
    }
  }
}
</script>
```

### TabBar 导航

#### 使用原生 TabBar

```json
{
  "tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#409EFF",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/chart/chart",
        "text": "图表"
      }
    ]
  }
}
```

### 图表页面导航示例

```vue
<template>
  <view class="container">
    <view class="nav-buttons">
      <button @click="goToChart('line')">折线图</button>
      <button @click="goToChart('bar')">柱状图</button>
      <button @click="goToChart('pie')">饼图</button>
    </view>
    <qiun-data-charts 
      :type="chartType"
      :opts="opts"
      :chartData="chartData"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      chartType: 'line',
      chartData: {},
      opts: {}
    }
  },
  methods: {
    goToChart(type) {
      uni.navigateTo({
        url: `/pages/chart/chart?type=${type}`
      })
    }
  }
}
</script>
```

## 注意事项

1. **路径格式**：路径必须以 `/` 开头
2. **参数传递**：URL 参数需要编码
3. **页面栈**：注意页面栈限制（最多 10 层）
4. **数据加载**：跳转后及时加载图表数据
5. **性能优化**：避免频繁跳转导致性能问题
