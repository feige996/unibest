# Layout Introduction

**官方文档**: https://uviewpro.cn


## Instructions

This example provides an introduction to uView Pro layout templates.

### Key Concepts

- Layout categories
- Layout usage
- Responsive layout

### Example: Layout Categories

**Grid Layout (网格布局)**:
- Grid system
- Responsive grid
- Grid columns

**Flex Layout (弹性布局)**:
- Flex container
- Flex items
- Flex direction

**Container Layout (容器布局)**:
- Container
- Header
- Content
- Footer

### Example: Grid Layout

```vue
<template>
  <u-grid :col="3">
    <u-grid-item>
      <view>Item 1</view>
    </u-grid-item>
    <u-grid-item>
      <view>Item 2</view>
    </u-grid-item>
    <u-grid-item>
      <view>Item 3</view>
    </u-grid-item>
  </u-grid>
</template>
```

### Example: Flex Layout

```vue
<template>
  <view class="flex-container">
    <view class="flex-item">Item 1</view>
    <view class="flex-item">Item 2</view>
    <view class="flex-item">Item 3</view>
  </view>
</template>

<style>
.flex-container {
  display: flex;
  justify-content: space-between;
}
</style>
```

### Key Points

- Multiple layout options
- Responsive design
- Easy to use
- Well documented
- Flexible configuration
