# Project Setup Templates

## uni-app Project Setup

```bash
# Create uni-app project
# Using HBuilderX or CLI

# Install uView Pro
npm install uview-pro
```

## pages.json Configuration

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-pro/components/u-$1/u-$1.vue"
    }
  },
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页"
      }
    }
  ]
}
```

## main.js Setup

```javascript
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

## App.vue Setup

```vue
<template>
  <view id="app">
    <!-- Your app content -->
  </view>
</template>

<script>
export default {
  onLaunch() {
    console.log('App Launch')
  }
}
</script>

<style lang="scss">
@import 'uview-pro/index.scss';
</style>
```
