# web-view 组件示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/component/web-view.html

## 概述

`web-view` 是网页视图组件，用于在页面中嵌入网页。

## 基础用法

```vue
<template>
  <web-view src="https://example.com"></web-view>
</template>
```

## 完整示例

### 示例 1: 基本网页显示

```vue
<template>
  <view class="container">
    <web-view :src="webUrl"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      webUrl: 'https://example.com'
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  height: 100vh;
}
</style>
```

### 示例 2: 动态加载网页

```vue
<template>
  <view class="container">
    <input v-model="url" placeholder="输入网址" />
    <button @click="loadUrl">加载网页</button>
    <web-view v-if="webUrl" :src="webUrl"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      url: '',
      webUrl: ''
    }
  },
  methods: {
    loadUrl() {
      if (this.url) {
        // 确保 URL 以 http:// 或 https:// 开头
        if (!this.url.startsWith('http://') && !this.url.startsWith('https://')) {
          this.webUrl = 'https://' + this.url
        } else {
          this.webUrl = this.url
        }
      }
    }
  }
}
</script>
```

### 示例 3: 从参数加载网页

```vue
<template>
  <view class="container">
    <web-view :src="webUrl"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      webUrl: ''
    }
  },
  onLoad(options) {
    if (options.url) {
      this.webUrl = decodeURIComponent(options.url)
    } else {
      this.webUrl = 'https://example.com'
    }
  }
}
</script>
```

### 示例 4: 网页与小程序通信

```vue
<template>
  <view class="container">
    <web-view :src="webUrl" @message="handleMessage"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      webUrl: 'https://example.com'
    }
  },
  methods: {
    handleMessage(e) {
      console.log('收到网页消息', e.detail.data)
      // 处理来自网页的消息
      const data = e.detail.data[0]
      if (data && data.type === 'close') {
        uni.navigateBack()
      }
    }
  }
}
</script>
```

### 示例 5: 加载本地 HTML

```vue
<template>
  <view class="container">
    <web-view :src="localHtmlUrl"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      localHtmlUrl: '/static/webview.html'
    }
  }
}
</script>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| src | String | - | webview 指向网页的链接 |

## 事件说明

| 事件名 | 说明 | 返回值 |
|--------|------|--------|
| @message | 网页向小程序 postMessage 时触发 | e.detail.data 包含网页传递的数据 |

## 平台兼容性

| 平台 | 支持情况 |
|------|---------|
| H5 | ✅ |
| 微信小程序 | ✅ |
| 支付宝小程序 | ✅ |
| 百度小程序 | ✅ |
| 字节跳动小程序 | ✅ |
| QQ 小程序 | ✅ |
| 快手小程序 | ✅ |
| App | ✅ |
| 快应用 | ✅ |

## 注意事项

1. `src` 必须是 HTTPS 协议（H5 除外）
2. 需要在 `manifest.json` 中配置业务域名
3. 网页可以通过 `wx.miniProgram.postMessage` 向小程序发送消息
4. 建议使用全屏显示 web-view

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/component/web-view.html
- **配置业务域名**: https://uniapp.dcloud.net.cn/tutorial/app-webview.html
