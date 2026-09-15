# Installation Templates

## npm Installation

```bash
npm install uview-pro
```

## Easycom Configuration

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

## Main.js Setup

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

## Style Import

```scss
// App.vue
@import 'uview-pro/index.scss';
```

## Complete Setup

```bash
# Install
npm install uview-pro

# Configure easycom in pages.json
# Import in main.js
# Import styles in App.vue
```
