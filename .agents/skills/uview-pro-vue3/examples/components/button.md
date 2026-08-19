# Button Component

**官方文档**: https://uviewpro.cn


## Instructions

This example demonstrates the Button component in uView Pro.

### Key Concepts

- Button types
- Button sizes
- Button states
- Button events

### Example: Basic Button

```vue
<template>
  <u-button>Default</u-button>
  <u-button type="primary">Primary</u-button>
  <u-button type="success">Success</u-button>
  <u-button type="info">Info</u-button>
  <u-button type="warning">Warning</u-button>
  <u-button type="error">Error</u-button>
</template>
```

### Example: Button Sizes

```vue
<template>
  <u-button size="large">Large</u-button>
  <u-button size="normal">Normal</u-button>
  <u-button size="small">Small</u-button>
  <u-button size="mini">Mini</u-button>
</template>
```

### Example: Button States

```vue
<template>
  <u-button disabled>Disabled</u-button>
  <u-button loading>Loading</u-button>
  <u-button plain>Plain</u-button>
  <u-button shape="circle">Circle</u-button>
  <u-button shape="round">Round</u-button>
</template>
```

### Example: Button Events

```vue
<template>
  <u-button type="primary" @click="handleClick">
    Click Me
  </u-button>
</template>

<script setup>
const handleClick = () => {
  console.log('Button clicked')
}
</script>
```

### Example: Button with Icon

```vue
<template>
  <u-button icon="search">Search</u-button>
  <u-button icon="heart" icon-color="#f56c6c">Like</u-button>
</template>
```

### Key Points

- Multiple types: primary, success, info, warning, error
- Multiple sizes: large, normal, small, mini
- Support disabled, loading, plain, shape
- Icon support
- Custom styling with custom-class or custom-style
