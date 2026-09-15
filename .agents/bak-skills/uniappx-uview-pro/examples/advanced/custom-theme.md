# Custom Theme | 自定义主题

## Instructions

This example demonstrates how to customize uView Pro theme in UniAppX projects.

### Key Concepts

- Theme variable customization
- SCSS variable override
- Global theme configuration
- Component-specific styling

### Example: Custom Theme Variables

```scss
/* uni.scss */
// Override uView Pro theme variables
$u-primary: #409EFF;
$u-success: #67C23A;
$u-warning: #E6A23C;
$u-error: #F56C6C;
$u-info: #909399;

// Import uView Pro theme
@import "uview-pro/theme.scss";
```

### Example: Component-Specific Styling

```vue
<!-- pages/index/index.vue -->
<template>
  <view>
    <u-button type="primary" custom-style="background: #ff0000;">
      自定义按钮
    </u-button>
  </view>
</template>

<style lang="scss" scoped>
// Component-specific styles
:deep(.u-button) {
  border-radius: 20rpx;
}
</style>
```

### Key Points

- Override theme variables in uni.scss
- Use custom-style prop for inline styles
- Use :deep() for component style override
- Test theme changes on all platforms
- Maintain consistency across components
