# Multi-Platform Deployment

## 多平台部署

UniApp + uCharts 项目支持多平台部署的策略和注意事项。

### 平台差异处理

使用条件编译处理平台差异：

```vue
<template>
  <view>
    <!-- #ifdef H5 -->
    <view>H5 平台内容</view>
    <!-- #endif -->
    
    <!-- #ifdef MP-WEIXIN -->
    <view>微信小程序内容</view>
    <!-- #endif -->
    
    <!-- #ifdef APP-PLUS -->
    <view>App 平台内容</view>
    <!-- #endif -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      opts: {
        // #ifdef H5
        // H5 平台配置
        enableScroll: true,
        // #endif
        
        // #ifdef MP-WEIXIN
        // 微信小程序配置
        enableScroll: false,
        // #endif
        
        // #ifdef APP-PLUS
        // App 平台配置
        enableScroll: false,
        // #endif
        
        color: ['#409EFF'],
        padding: [15, 15, 0, 15]
      }
    }
  }
}
</script>
```

### 统一 API 封装

封装统一的 API 调用：

```javascript
// utils/api.js
export function request(url, options = {}) {
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      ...options,
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}
```

### 平台特定配置

在 manifest.json 中配置各平台：

```json
{
  "h5": {
    "router": {
      "mode": "hash"
    }
  },
  "mp-weixin": {
    "appid": "your-appid"
  },
  "app-plus": {
    "usingComponents": true
  }
}
```

### 注意事项

1. **条件编译**：使用条件编译处理平台差异
2. **API 统一**：封装统一的 API 调用
3. **配置管理**：正确配置各平台参数
4. **测试验证**：在各平台测试功能
5. **文档记录**：记录平台差异和注意事项
