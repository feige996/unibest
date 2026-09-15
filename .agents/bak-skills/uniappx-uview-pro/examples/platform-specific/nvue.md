# nvue Platform | nvue 平台

## Instructions

This example demonstrates nvue platform-specific considerations when using uView Pro in UniAppX.

### Key Concepts

- nvue rendering engine
- Weex syntax
- Performance considerations
- Style limitations

### Example: nvue Configuration

```json
// manifest.json
{
  "app-plus": {
    "nvueStyleCompiler": "uni-app",
    "compilerVersion": 3
  }
}
```

### Example: nvue Component Usage

```vue
<!-- pages/index/index.nvue -->
<template>
  <view class="container">
    <u-button type="primary">按钮</u-button>
  </view>
</template>

<script setup lang="ts">
// nvue uses same script setup syntax
</script>

<style lang="scss" scoped>
/* nvue: Limited CSS support */
.container {
  width: 750rpx;
  padding: 20rpx;
  /* Use flexbox for layout */
  flex-direction: column;
}
</style>
```

### Key Points

- nvue has limited CSS support
- Use flexbox for layout
- Avoid complex CSS selectors
- Test on actual device
- Use conditional compilation for nvue-specific code
- Consider performance implications
