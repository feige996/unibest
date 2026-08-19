# Installation

**官方文档**: https://uviewpro.cn


## Instructions

This example demonstrates how to install uView Pro in a uni-app project.

### Key Concepts

- Package installation
- uni_modules installation
- Easycom configuration
- Style import

### Example: Package Installation

```bash
# Using npm
npm install uview-pro

# Using yarn
yarn add uview-pro

# Using pnpm
pnpm add uview-pro
```

### Example: uni_modules Installation

1. Download from uView Pro official website
2. Copy to `uni_modules` directory
3. Configure easycom in `pages.json`

### Example: Easycom Configuration

```json
// pages.json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-pro/components/u-$1/u-$1.vue"
    }
  }
}
```

### Example: Main.js Setup

```javascript
// main.js
import { createSSRApp } from 'vue'
import uView from 'uview-pro'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uView)
  return {
    app
  }
}
```

### Example: Style Import

```scss
// App.vue or main.js
@import 'uview-pro/index.scss';
```

### Key Points

- Install via npm or uni_modules
- Configure easycom for auto-import
- Import styles in App.vue or main.js
- Use createSSRApp for uni-app
- Support Vue 3 Composition API
