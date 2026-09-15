# nvue Platform

## nvue 平台注意事项

在 nvue 页面使用 uView UI 时的特殊注意事项。

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

### 样式限制

nvue 平台样式有限制：

```vue
<template>
  <view class="container">
    <u-button type="primary">按钮</u-button>
  </view>
</template>

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

### 组件兼容性

某些 uView 组件在 nvue 中可能不完全支持，需要使用条件编译：

```vue
<template>
  <view>
    <!-- #ifndef APP-PLUS-NVUE -->
    <u-parse :html="content"></u-parse>
    <!-- #endif -->
    
    <!-- #ifdef APP-PLUS-NVUE -->
    <text>{{ content }}</text>
    <!-- #endif -->
  </view>
</template>
```

### Flex 布局

nvue 主要使用 Flex 布局：

```vue
<template>
  <view class="container">
    <view class="item">Item 1</view>
    <view class="item">Item 2</view>
  </view>
</template>

<style lang="scss" scoped>
.container {
  flex-direction: row;
  justify-content: space-between;
}

.item {
  flex: 1;
}
</style>
```

### 注意事项

1. **样式限制**：nvue 不支持所有 CSS 属性
2. **组件兼容**：某些组件在 nvue 中可能不完全支持
3. **Flex 布局**：主要使用 Flex 布局
4. **性能**：nvue 性能更好，但功能有限
5. **条件编译**：使用条件编译处理兼容性问题
