# Configuration API

## API Reference

uView Pro global configuration options.

### Global Config Options

When using `app.use(uView, options)`, you can pass:

```typescript
interface uViewOptions {
  locale?: string
  theme?: string
}
```

### ConfigProvider Props

**Props:**
- `locale` - Global locale (zh-cn, en-us)
- `theme` - Global theme (light, dark)

### Example: Global Config

```javascript
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

### Example: ConfigProvider

```vue
<template>
  <u-config-provider :locale="locale" :theme="theme">
    <u-button>Button</u-button>
  </u-config-provider>
</template>

<script setup>
import { ref } from 'vue'

const locale = ref('zh-cn')
const theme = ref('light')
</script>
```

### Locale Configuration

**Options:**
- `'zh-cn'` - Chinese (Simplified)
- `'en-us'` - English (US)

### Theme Configuration

**Options:**
- `'light'` - Light theme
- `'dark'` - Dark theme

### Component Config

Components can be configured individually:

```vue
<u-button :config="{ size: 'large' }">Button</u-button>
```

**See also:** `examples/guide/config.md` for configuration examples
