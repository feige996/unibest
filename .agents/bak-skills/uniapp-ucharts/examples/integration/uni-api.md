# UniApp API Integration

## UniApp API 与 uCharts 整合

在 UniApp 项目中使用 UniApp API 与 uCharts 组件配合使用。

### 网络请求

#### 使用 uni.request 获取图表数据

```javascript
// 获取图表数据
uni.request({
  url: 'https://api.example.com/chart-data',
  method: 'GET',
  data: {
    type: 'line'
  },
  success: (res) => {
    this.chartData = res.data
  },
  fail: (err) => {
    console.error('请求失败', err)
  }
})
```

#### 配合 uCharts 使用

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
  onLoad() {
    this.loadChartData()
  },
  methods: {
    loadChartData() {
      uni.request({
        url: 'https://api.example.com/chart-data',
        success: (res) => {
          this.chartData = {
            categories: res.data.categories,
            series: res.data.series
          }
        }
      })
    }
  }
}
</script>
```

### 存储 API

#### 缓存图表数据

```javascript
// 保存图表数据
uni.setStorage({
  key: 'chartData',
  data: this.chartData,
  success: () => {
    console.log('保存成功')
  }
})

// 获取缓存的图表数据
uni.getStorage({
  key: 'chartData',
  success: (res) => {
    this.chartData = res.data
  }
})
```

### 页面生命周期

#### 配合 uCharts 使用

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
  onLoad() {
    // 页面加载时获取数据
    this.loadChartData()
  },
  onShow() {
    // 页面显示时刷新数据
    this.loadChartData()
  },
  onPullDownRefresh() {
    // 下拉刷新
    this.loadChartData()
    setTimeout(() => {
      uni.stopPullDownRefresh()
    }, 1000)
  },
  methods: {
    loadChartData() {
      uni.request({
        url: 'https://api.example.com/chart-data',
        success: (res) => {
          this.chartData = res.data
        }
      })
    }
  }
}
</script>
```

### 条件编译

#### 平台特定 API

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
  methods: {
    loadChartData() {
      // #ifdef H5
      // H5 平台特定代码
      fetch('/api/chart-data')
        .then(res => res.json())
        .then(data => {
          this.chartData = data
        })
      // #endif
      
      // #ifdef MP-WEIXIN
      // 微信小程序特定代码
      wx.request({
        url: 'https://api.example.com/chart-data',
        success: (res) => {
          this.chartData = res.data
        }
      })
      // #endif
      
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

### 动态更新图表

```vue
<template>
  <view>
    <button @click="updateChart">更新图表</button>
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
  methods: {
    updateChart() {
      // 更新图表数据
      uni.request({
        url: 'https://api.example.com/chart-data',
        success: (res) => {
          this.chartData = res.data
        }
      })
    }
  }
}
</script>
```

## 注意事项

1. **API 兼容性**：注意不同平台 API 的兼容性
2. **数据格式**：确保数据格式符合 uCharts 要求
3. **错误处理**：始终处理 API 调用的错误情况
4. **条件编译**：使用条件编译处理平台差异
5. **性能优化**：合理使用缓存，避免频繁请求
