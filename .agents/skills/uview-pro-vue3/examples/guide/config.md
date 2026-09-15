# Configuration

**官方文档**: https://uviewpro.cn


## Instructions

This example demonstrates how to configure uView Pro globally.

### Key Concepts

- Global config options
- ConfigProvider
- Theme configuration
- Component configuration

### Example: Global Config

```javascript
// main.js
import { createSSRApp } from 'vue'
import uView from 'uview-pro'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uView, {
    locale: 'zh-cn',
    theme: 'light'
  })
  return {
    app
  }
}
```

### Example: Using ConfigProvider

```vue
<template>
  <u-config-provider :theme="theme" :locale="locale">
    <u-button>Button</u-button>
  </u-config-provider>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref('light')
const locale = ref('zh-cn')
</script>
```

### Example: Component Config

```vue
<template>
  <u-button :config="{ size: 'large' }">Button</u-button>
</template>
```

### Key Points

- Configure globally via app.use()
- Use ConfigProvider for component-level config
- Support theme and locale configuration
- Component-level config available
- Follow uni-app configuration patterns
