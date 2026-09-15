# Theme Customization

**官方文档**: https://uviewpro.cn


## Instructions

This example demonstrates how to customize uView Pro theme.

### Key Concepts

- Custom class
- Custom style
- Global theme variables
- Style override

### Example: Custom Class

```vue
<template>
  <u-button custom-class="my-button">Button</u-button>
</template>

<style lang="scss">
.my-button {
  background-color: #409eff;
  color: #fff;
}
</style>
```

### Example: Custom Style

```vue
<template>
  <u-button :custom-style="{ backgroundColor: '#409eff', color: '#fff' }">
    Button
  </u-button>
</template>
```

### Example: Global Theme Variables

```scss
// uni.scss or App.vue
$u-primary: #409eff;
$u-success: #67c23a;
$u-warning: #e6a23c;
$u-error: #f56c6c;
$u-info: #909399;
```

### Example: Style Override with :deep()

```vue
<template>
  <u-button class="custom-button">Button</u-button>
</template>

<style lang="scss" scoped>
.custom-button {
  :deep(.u-button) {
    background-color: #409eff;
  }
}
</style>
```

### Key Points

- Use custom-class for class-based styling
- Use custom-style for inline styling
- Override global theme variables
- Use :deep() for style penetration
- Support SCSS variables
