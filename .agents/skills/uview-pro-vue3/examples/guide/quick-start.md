# Quick Start

**官方文档**: https://uviewpro.cn


## Instructions

This example provides a quick start guide for uView Pro.

### Key Concepts

- Basic setup
- First component
- Component usage
- Project structure

### Example: Basic Setup

```vue
<template>
  <view class="container">
    <u-button type="primary">Button</u-button>
  </view>
</template>

<script setup>
// Component is auto-imported if using easycom
</script>
```

### Example: With Options API

```vue
<template>
  <u-button type="primary" @click="handleClick">
    Click Me
  </u-button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('Button clicked')
    }
  }
}
</script>
```

### Example: With Composition API

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

### Example: Project Structure

```
project/
├── pages/
│   └── index/
│       ├── index.vue
│       └── index.json
├── uni_modules/
│   └── uview-pro/
├── App.vue
├── main.js
└── pages.json
```

### Key Points

- Use u- prefix for components
- Support both Options API and Composition API
- Auto-import with easycom
- Import styles globally
- Follow uni-app project structure
