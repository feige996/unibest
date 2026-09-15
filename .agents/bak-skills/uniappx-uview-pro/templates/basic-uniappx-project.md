# Basic UniAppX Project Template | 基础 UniAppX 项目模板

## Instructions

This template provides a basic UniAppX project structure with uView Pro integration.

### Project Structure

```
uniappx-uview-pro-project/
├── uni_modules/
│   └── uview-pro/
├── pages/
│   ├── index/
│   │   └── index.vue
│   └── detail/
│       └── detail.vue
├── components/
├── static/
├── App.vue
├── main.uts
├── pages.json
├── manifest.json
└── uni.scss
```

### main.uts

```typescript
// main.uts
import { createSSRApp } from 'vue'
import App from './App.vue'
import uViewPro from 'uview-pro'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uViewPro)
  return {
    app
  }
}
```

### App.vue

```vue
<!-- App.vue -->
<template>
  <view id="app">
    <!-- App root -->
  </view>
</template>

<script setup lang="ts">
// App setup
</script>

<style lang="scss">
/* Import uView Pro styles */
@import "uview-pro/index.scss";
</style>
```

### pages.json

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页"
      }
    }
  ],
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-pro/components/u-$1/u-$1.vue"
    }
  },
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "UniAppX uView Pro",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  }
}
```

### manifest.json

```json
{
  "name": "uniappx-uview-pro-demo",
  "appid": "__UNI__XXXXX",
  "versionName": "1.0.0",
  "versionCode": "100",
  "transformPx": false,
  "h5": {
    "router": {
      "mode": "hash"
    }
  },
  "mp-weixin": {
    "appid": "",
    "setting": {
      "urlCheck": false
    },
    "usingComponents": true
  },
  "app-plus": {
    "usingComponents": true
  }
}
```

### pages/index/index.vue

```vue
<!-- pages/index/index.vue -->
<template>
  <view class="container">
    <u-button type="primary" @click="handleClick">按钮</u-button>
  </view>
</template>

<script setup lang="ts">
const handleClick = () => {
  uni.showToast({
    title: '点击成功',
    icon: 'success'
  })
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20rpx;
}
</style>
```

### Key Points

- Use TypeScript (.uts files) for main entry
- Use Composition API and setup syntax
- Configure easycom for automatic component import
- Import uView Pro styles in App.vue
- Use rpx units for responsive sizing
