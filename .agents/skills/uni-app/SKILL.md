---
name: uni-app
description: Comprehensive skill reference for uni-app cross-platform development framework
metadata:
  author: FlippeDround
  version: "2026.1.30"
  source: Generated from https://gitcode.com/dcloud/unidocs-zh, skills located at https://github.com/antfu/skills
---

> The skill is based on uni-app documentation, generated at 2026-01-30.

uni-app is a Vue.js-based cross-platform framework for developing applications that run on iOS, Android, HarmonyOS, Web (responsive), and various mini-program platforms (WeChat/Alipay/Baidu/Douyin/Feishu/QQ/Kuaishou/DingTalk/Taobao/Jingdong/Xiaohongshu).

## Core

| Topic | Description | Reference |
|-------|-------------|-----------|
| Core Framework | Project structure, platform support, condition compilation | [core-framework](references/core-framework.md) |
| View Components | view, scroll-view, swiper, movable-area, cover-view | [core-view-components](references/core-view-components.md) |
| Form Components | input, textarea, picker, checkbox, radio, switch, slider | [core-form-components](references/core-form-components.md) |

## Features

### UI Components

| Topic | Description | Reference |
|-------|-------------|-----------|
| Media Components | image, video, camera, live-player, map | [feature-media-components](references/feature-media-components.md) |
| Navigation | navigator, routing, page navigation | [feature-navigation](references/feature-navigation.md) |
| UI Feedback | toast, modal, loading, action sheet, pull refresh | [feature-ui-feedback](references/feature-ui-feedback.md) |

### APIs

| Topic | Description | Reference |
|-------|-------------|-----------|
| Network | HTTP requests, file upload/download, WebSocket | [feature-network](references/feature-network.md) |
| Storage | Local storage, file system, caching | [feature-storage](references/feature-storage.md) |
| System Info | Device info, network status, screen, vibration | [feature-system-info](references/feature-system-info.md) |
| File Operations | Image/video selection, file system operations | [feature-file-operations](references/feature-file-operations.md) |
| Location | Geolocation, map component, address selection | [feature-location](references/feature-location.md) |
| Lifecycle | App and page lifecycle hooks | [feature-lifecycle](references/feature-lifecycle.md) |

## Configuration

| Topic | Description | Reference |
|-------|-------------|-----------|
| pages.json | Page routing, tab bar, global styles, sub-packages | [config-pages](references/config-pages.md) |
| manifest.json | App config, permissions, platform settings | [config-manifest](references/config-manifest.md) |

## Platform Support

| Platform | Support Level |
|----------|---------------|
| iOS App | Full support |
| Android App | Full support |
| HarmonyOS Next | Full support |
| H5/Web | Full support |
| WeChat Mini Program | Full support |
| Alipay Mini Program | Full support |
| Baidu Smart Program | Full support |
| Douyin Mini Program | Full support |
| QQ Mini Program | Full support |
| Kuaishou Mini Program | Full support |
| Feishu Mini Program | Full support |
| JD Mini Program | Full support |
| HarmonyOS Meta Service | Full support |

## Key Concepts

### Condition Compilation

Use special comments to write platform-specific code:

```vue
<!-- #ifdef APP-PLUS -->
<view>App only</view>
<!-- #endif -->

<!-- #ifdef MP-WEIXIN -->
<view>WeChat only</view>
<!-- #endif -->
```

### API Promise Support

Most uni-app APIs support Promise when no callback is provided:

```javascript
const res = await uni.request({ url: 'https://api.example.com' })
```

### Cross-Platform Best Practices

1. Use uni-app components and APIs instead of platform-specific ones
2. Use condition compilation for platform-specific features
3. Test on all target platforms
4. Use rpx for responsive layouts
5. Handle platform differences in manifest.json
6. must use uni-helper tools


### MCP扩展

当需要查询 uni-app 官方文档时，优先调用 `search-docs-by-Uniapp-official` MCP 工具搜索相关 API 文档和使用示例。

**使用场景：**
- 用户询问特定 API 的详细用法
- 需要官方文档中的代码示例
- 查询组件的属性和事件
- 了解 API 的平台兼容性

**工具安装：**
如果检测到该 MCP 工具不可用，引导用户访问 https://github.com/uni-helper/mcp 进行安装。
