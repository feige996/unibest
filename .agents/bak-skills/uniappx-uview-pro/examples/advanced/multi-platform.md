# Multi-Platform Deployment | 多平台部署

## Instructions

This example demonstrates multi-platform deployment strategies for UniAppX projects with uView Pro.

### Key Concepts

- Platform-specific builds
- Conditional compilation
- Platform testing
- Deployment configuration

### Example: Platform-Specific Code

```vue
<!-- pages/index/index.vue -->
<template>
  <view>
    <!-- #ifdef H5 -->
    <u-button type="primary">H5 按钮</u-button>
    <!-- #endif -->
    
    <!-- #ifdef MP-WEIXIN -->
    <u-button type="primary">微信小程序按钮</u-button>
    <!-- #endif -->
    
    <!-- #ifdef APP-PLUS -->
    <u-button type="primary">App 按钮</u-button>
    <!-- #endif -->
  </view>
</template>

<script setup lang="ts">
// #ifdef H5
// H5 specific code
const h5Function = () => {
  console.log('H5 only')
}
// #endif

// #ifdef MP-WEIXIN
// WeChat mini-program specific code
const mpFunction = () => {
  console.log('MP only')
}
// #endif
</script>
```

### Example: Platform Testing Checklist

```markdown
## Testing Checklist

### H5
- [ ] Test in Chrome
- [ ] Test in Safari
- [ ] Test responsive design
- [ ] Test browser compatibility

### Mini-Program
- [ ] Test in WeChat DevTools
- [ ] Test on actual device
- [ ] Check code size
- [ ] Test performance

### App
- [ ] Test on Android device
- [ ] Test on iOS device
- [ ] Test native features
- [ ] Test performance
```

### Key Points

- Use conditional compilation for platform-specific code
- Test on all target platforms
- Configure platform-specific settings in manifest.json
- Optimize for each platform's requirements
- Handle platform differences gracefully
- Document platform-specific behaviors
