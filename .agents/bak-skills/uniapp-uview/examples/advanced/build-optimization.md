# Build Optimization

## 构建优化

优化 UniApp + uView 项目的构建和性能。

### 代码分割

使用条件编译减少代码体积：

```vue
<template>
  <view>
    <!-- #ifdef H5 -->
    <u-button>H5 按钮</u-button>
    <!-- #endif -->
    
    <!-- #ifdef MP-WEIXIN -->
    <u-button>小程序按钮</u-button>
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
      "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
    }
  }
}
```

### 图片优化

```vue
<template>
  <view>
    <!-- 使用 webp 格式（H5） -->
    <!-- #ifdef H5 -->
    <image src="/static/image.webp"></image>
    <!-- #endif -->
    
    <!-- 使用 png 格式（小程序） -->
    <!-- #ifdef MP-WEIXIN -->
    <image src="/static/image.png"></image>
    <!-- #endif -->
  </view>
</template>
```

### 样式优化

```vue
<style lang="scss" scoped>
/* 使用 scoped 避免样式污染 */
.container {
  /* 样式 */
}
</style>
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
2. **图片优化**：使用合适的图片格式和大小
3. **样式优化**：使用 scoped 避免样式污染
4. **打包配置**：正确配置打包选项
5. **性能测试**：在不同平台测试性能
