---
name: Core Framework
description: UniApp core framework concepts, project structure, and platform overview
---

# UniApp Core Framework

UniApp is a Vue.js-based cross-platform framework for developing applications that run on iOS, Android, HarmonyOS, Web, and various mini-program platforms (WeChat, Alipay, Baidu, Douyin, etc.).

## Project Structure

```
project-root/
├── pages/                  # Page files
│   └── index/
│       └── index.vue       # Page component
├── components/             # Reusable components
├── static/                 # Static assets (images, fonts)
├── App.vue                 # Application root component
├── main.js                 # Application entry
├── manifest.json           # App configuration
├── pages.json              # Page routing config
└── uni.scss                # Global SCSS variables
```

## Platform Support

| Platform | Value | Description |
|----------|-------|-------------|
| App | APP-PLUS | iOS/Android native apps |
| App nvue | APP-PLUS-NVUE | Native rendering pages |
| H5 | H5 / WEB | Web applications |
| WeChat Mini Program | MP-WEIXIN | WeChat MP |
| Alipay | MP-ALIPAY | Alipay MP |
| Baidu | MP-BAIDU | Baidu Smart Program |
| Douyin | MP-TOUTIAO | ByteDance MP |
| QQ | MP-QQ | QQ Mini Program |
| Kuaishou | MP-KUAISHOU | Kuaishou MP |
| HarmonyOS | APP-HARMONY | HarmonyOS Next |

## Condition Compilation

Handle platform differences using special comment syntax:

```vue
<template>
  <view>
    <!-- #ifdef APP-PLUS -->
    <text>App only content</text>
    <!-- #endif -->

    <!-- #ifdef MP-WEIXIN -->
    <text>WeChat MP only</text>
    <!-- #endif -->

    <!-- #ifndef H5 -->
    <text>All platforms except H5</text>
    <!-- #endif -->
  </view>
</template>

<script>
export default {
  methods: {
    getPlatform() {
      // #ifdef APP-PLUS
      return 'App'
      // #endif
      // #ifdef H5
      return 'Web'
      // #endif
    }
  }
}
</script>

<style>
/* #ifdef APP-PLUS */
.app-style { padding: 20px; }
/* #endif */
</style>
```

## Platform Values Reference

| Value | Description |
|-------|-------------|
| VUE3 / VUE2 | Vue version |
| UNI-APP-X | UniApp X project |
| APP-PLUS | App (JS engine) |
| APP-PLUS-NVUE / APP-NVUE | App nvue pages |
| APP-ANDROID | Android platform |
| APP-IOS | iOS platform |
| APP-HARMONY | HarmonyOS Next |
| H5 / WEB | Web platform |
| MP-WEIXIN | WeChat Mini Program |
| MP-ALIPAY | Alipay Mini Program |
| MP-BAIDU | Baidu Smart Program |
| MP-TOUTIAO | Douyin Mini Program |
| MP-LARK | Feishu Mini Program |
| MP-QQ | QQ Mini Program |
| MP-KUAISHOU | Kuaishou Mini Program |
| MP-HARMONY | HarmonyOS Meta Service |

## API Promise Support

UniApp APIs support Promise when no callback is provided:

```javascript
// Promise style
uni.request({ url: 'https://api.example.com' })
  .then(res => console.log(res))
  .catch(err => console.error(err))

// Async/await
async function fetchData() {
  try {
    const res = await uni.request({ url: 'https://api.example.com' })
    return res.data
  } catch (err) {
    console.error(err)
  }
}
```

**Note:** Synchronous APIs (ending in `Sync`), `create*` methods, and `*Manager` methods do not support Promise.

<!--
Source references:
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/README.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/tutorial/platform.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/README.md
-->
