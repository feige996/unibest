# Custom Theme

## 自定义主题

在 UniApp 项目中自定义 uCharts 主题。

### 配置主题颜色

在图表配置中设置主题颜色：

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
      chartData: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        series: [{
          name: '数据',
          data: [120, 200, 150, 80, 70]
        }]
      },
      opts: {
        color: ['#409EFF', '#67C23A', '#E6A23C', '#F56C6C'],
        padding: [15, 15, 0, 15],
        enableScroll: false,
        legend: {
          show: true
        }
      }
    }
  }
}
</script>
```

### 使用 SCSS 变量

在 `uni.scss` 中定义主题变量：

```scss
/* uni.scss */
$chart-primary-color: #409EFF;
$chart-success-color: #67C23A;
$chart-warning-color: #E6A23C;
$chart-error-color: #F56C6C;
```

在组件中使用：

```vue
<script>
export default {
  data() {
    return {
      opts: {
        color: [
          '#409EFF', // 使用主题变量
          '#67C23A',
          '#E6A23C',
          '#F56C6C'
        ]
      }
    }
  }
}
</script>
```

### 条件编译主题

不同平台可以使用不同主题：

```vue
<script>
export default {
  data() {
    return {
      opts: {
        // #ifdef H5
        color: ['#409EFF', '#67C23A'],
        // #endif
        
        // #ifdef MP-WEIXIN
        color: ['#07c160', '#ff976a'],
        // #endif
        
        // #ifdef APP-PLUS
        color: ['#007AFF', '#34C759'],
        // #endif
        
        padding: [15, 15, 0, 15],
        enableScroll: false
      }
    }
  }
}
</script>
```

### 注意事项

1. **颜色配置**：使用合理的颜色搭配
2. **平台差异**：使用条件编译处理平台差异
3. **主题一致性**：保持应用主题一致性
4. **可读性**：确保图表颜色具有良好的可读性
5. **测试验证**：在不同平台测试主题效果
