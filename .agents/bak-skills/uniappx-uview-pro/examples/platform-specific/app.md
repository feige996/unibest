# App Platform | App 平台

## Instructions

This example demonstrates App platform-specific considerations when using uView Pro in UniAppX.

### Key Concepts

- App manifest configuration
- Native capabilities
- Performance optimization
- Platform-specific features

### Example: App Configuration

```json
// manifest.json
{
  "app-plus": {
    "usingComponents": true,
    "nvueStyleCompiler": "uni-app",
    "compilerVersion": 3,
    "splashscreen": {
      "alwaysShowBeforeRender": true,
      "waiting": true,
      "autoclose": true,
      "delay": 0
    },
    "modules": {},
    "distribute": {
      "android": {
        "permissions": [
          "<uses-permission android:name=\"android.permission.INTERNET\"/>"
        ]
      },
      "ios": {}
    }
  }
}
```

### Example: App Component Usage

```vue
<!-- pages/index/index.vue -->
<template>
  <view class="container">
    <u-button type="primary" @click="handleClick">按钮</u-button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const handleClick = () => {
  // #ifdef APP-PLUS
  // App specific code
  plus.navigator.setStatusBarStyle('dark')
  // #endif
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 20rpx;
}
</style>
```

### Key Points

- Configure `usingComponents: true` in manifest.json
- Use App-specific APIs when needed
- Optimize for native performance
- Handle status bar and navigation bar
- Test on actual device for best results
- Use conditional compilation for App-specific code
