# Build Optimization

## 构建优化

优化 UniApp + uCharts 项目的构建和性能。

### 代码分割

使用条件编译减少代码体积：

```vue
<template>
  <view>
    <!-- #ifdef H5 -->
    <qiun-data-charts type="line" :opts="opts" :chartData="chartData" />
    <!-- #endif -->
    
    <!-- #ifdef MP-WEIXIN -->
    <qiun-data-charts type="bar" :opts="opts" :chartData="chartData" />
    <!-- #endif -->
  </view>
</template>
```

### 组件按需引入

虽然 easycom 会自动引入，但可以优化：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "qiun-data-charts": "@/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue"
    }
  }
}
```

### 图表数据优化

```vue
<script>
export default {
  data() {
    return {
      chartData: {},
      opts: {
        // 优化配置
        enableScroll: false,
        dataLabel: false,
        legend: {
          show: false
        }
      }
    }
  },
  methods: {
    // 数据采样，减少数据量
    sampleData(data, maxPoints = 100) {
      if (data.length <= maxPoints) {
        return data
      }
      const step = Math.ceil(data.length / maxPoints)
      return data.filter((_, index) => index % step === 0)
    }
  }
}
</script>
```

### 打包配置

在 manifest.json 中配置打包选项：

```json
{
  "mp-weixin": {
    "setting": {
      "minified": true,
      "postcss": true
    }
  },
  "h5": {
    "optimization": {
      "treeShaking": {
        "enable": true
      }
    }
  }
}
```

### 注意事项

1. **条件编译**：使用条件编译减少代码体积
2. **数据优化**：合理控制数据量，避免过大
3. **配置优化**：合理配置图表选项，提高性能
4. **打包配置**：正确配置打包选项
5. **性能测试**：在不同平台测试性能
