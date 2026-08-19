# Mini-Program Platform | 小程序平台

## Instructions

This example demonstrates mini-program platform-specific considerations when using uView Pro in UniAppX.

### Key Concepts

- Mini-program manifest configuration
- Component performance
- Code size limits
- Platform-specific APIs

### Example: Mini-Program Configuration

```json
// manifest.json
{
  "mp-weixin": {
    "appid": "your-appid",
    "setting": {
      "urlCheck": false,
      "es6": true,
      "enhance": true,
      "postcss": true,
      "minified": true
    },
    "usingComponents": true
  }
}
```

### Example: Mini-Program Component Usage

```vue
<!-- pages/index/index.vue -->
<template>
  <view class="container">
    <u-button type="primary" @click="handleClick">按钮</u-button>
    <u-form :model="formData">
      <u-form-item label="姓名">
        <u-input v-model="formData.name" />
      </u-form-item>
    </u-form>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: ''
})

const handleClick = () => {
  // #ifdef MP-WEIXIN
  // WeChat mini-program specific code
  wx.showToast({
    title: '操作成功',
    icon: 'success'
  })
  // #endif
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 20rpx;
}
</style>
```

### Example: Performance Optimization

```vue
<template>
  <view>
    <u-list>
      <u-list-item 
        v-for="item in dataList" 
        :key="item.id"
        :lazy-load="true"
      >
        {{ item.name }}
      </u-list-item>
    </u-list>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dataList = ref([])

// #ifdef MP-WEIXIN
// Mini-program: Optimize for performance
const loadData = () => {
  // Load data in chunks
  uni.request({
    url: 'https://api.example.com/data',
    success: (res) => {
      dataList.value = res.data.slice(0, 20) // Limit initial load
    }
  })
}
// #endif
</script>
```

### Key Points

- Configure `usingComponents: true` in manifest.json
- Use lazy loading for large lists
- Optimize component usage for code size limits
- Use conditional compilation for platform-specific code
- Test on actual mini-program platform
- Be aware of code package size limits
