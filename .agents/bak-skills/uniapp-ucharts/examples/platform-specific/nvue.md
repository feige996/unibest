# nvue Platform

## nvue 平台注意事项

在 nvue 页面使用 uCharts 时的特殊注意事项。

### manifest.json 配置

```json
{
  "app-plus": {
    "nvueStyleCompiler": "uni-app",
    "nvue": {
      "flex-direction": "column"
    }
  }
}
```

### Canvas 限制

nvue 平台对 Canvas 的支持可能有限，需要注意：

```vue
<template>
  <view class="container">
    <!-- #ifndef APP-PLUS-NVUE -->
    <qiun-data-charts 
      type="line"
      :opts="opts"
      :chartData="chartData"
    />
    <!-- #endif -->
    
    <!-- #ifdef APP-PLUS-NVUE -->
    <view class="nvue-tip">nvue 平台可能不支持 Canvas 图表</view>
    <!-- #endif -->
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

<style scoped>
.container {
  flex-direction: column;
  padding: 20rpx;
}

.nvue-tip {
  padding: 20rpx;
  text-align: center;
  color: #909399;
}
</style>
```

### 样式限制

nvue 平台样式有限制：

```vue
<style lang="scss" scoped>
.container {
  /* nvue 支持的样式 */
  flex-direction: column;
  padding: 20rpx;
  
  /* nvue 不支持的样式需要条件编译 */
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
}
</style>
```

### 注意事项

1. **Canvas 限制**：nvue 平台对 Canvas 的支持可能有限
2. **样式限制**：nvue 不支持所有 CSS 属性
3. **条件编译**：使用条件编译处理兼容性问题
4. **性能**：nvue 性能更好，但功能有限
5. **替代方案**：考虑使用其他图表方案或条件编译
