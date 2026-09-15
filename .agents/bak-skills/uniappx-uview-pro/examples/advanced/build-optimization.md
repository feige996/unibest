# Build Optimization | 构建优化

## Instructions

This example demonstrates how to optimize UniAppX builds with uView Pro.

### Key Concepts

- Code splitting
- Tree shaking
- Component lazy loading
- Build configuration

### Example: Component Lazy Loading

```vue
<!-- pages/index/index.vue -->
<template>
  <view>
    <u-button @click="showModal = true">打开弹窗</u-button>
    <u-modal v-if="showModal" v-model="showModal">
      <view>内容</view>
    </u-modal>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(false)
</script>
```

### Example: Conditional Component Loading

```vue
<template>
  <view>
    <!-- #ifdef H5 -->
    <u-upload :file-list="fileList" />
    <!-- #endif -->
    
    <!-- #ifdef MP-WEIXIN -->
    <u-upload :file-list="fileList" />
    <!-- #endif -->
  </view>
</template>
```

### Key Points

- Use conditional compilation to exclude unused components
- Lazy load heavy components
- Optimize images and assets
- Use tree shaking for unused code
- Configure build options in manifest.json
- Test build size on each platform
