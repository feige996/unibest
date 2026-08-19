# uni.navigateTo - 页面跳转示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/router.html#navigateto

## 概述

`uni.navigateTo` 用于保留当前页面，跳转到应用内的某个页面。

## 基础用法

```javascript
uni.navigateTo({
  url: '/pages/detail/detail'
})
```

## 完整示例

### 示例 1: 基本跳转

```javascript
uni.navigateTo({
  url: '/pages/detail/detail',
  success: () => {
    console.log('跳转成功')
  },
  fail: (err) => {
    console.error('跳转失败', err)
  }
})
```

### 示例 2: 带参数跳转

```javascript
// 跳转并传递参数
uni.navigateTo({
  url: '/pages/detail/detail?id=123&name=test'
})

// 在目标页面接收参数
// pages/detail/detail.vue
export default {
  onLoad(options) {
    console.log('接收到的参数', options)
    // { id: '123', name: 'test' }
  }
}
```

### 示例 3: 传递对象参数

```javascript
// 传递对象
const params = {
  id: 123,
  name: 'test',
  data: { key: 'value' }
}

// 需要序列化
uni.navigateTo({
  url: `/pages/detail/detail?data=${encodeURIComponent(JSON.stringify(params))}`
})

// 在目标页面解析
export default {
  onLoad(options) {
    const data = JSON.parse(decodeURIComponent(options.data))
    console.log('解析后的数据', data)
  }
}
```

### 示例 4: 在组件中使用

```vue
<template>
  <view class="container">
    <button @click="goToDetail">查看详情</button>
    <button @click="goToDetailWithParams">带参数跳转</button>
  </view>
</template>

<script>
export default {
  methods: {
    goToDetail() {
      uni.navigateTo({
        url: '/pages/detail/detail'
      })
    },
    goToDetailWithParams() {
      uni.navigateTo({
        url: '/pages/detail/detail?id=123&name=test'
      })
    }
  }
}
</script>
```

### 示例 5: 封装跳转函数

```javascript
// utils/navigation.js
const navigation = {
  // 跳转到详情页
  toDetail(id) {
    uni.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  },
  
  // 跳转到用户页
  toUser(userId) {
    uni.navigateTo({
      url: `/pages/user/user?id=${userId}`
    })
  },
  
  // 通用跳转
  navigate(url, params = {}) {
    const query = Object.keys(params)
      .map(key => `${key}=${encodeURIComponent(params[key])}`)
      .join('&')
    const fullUrl = query ? `${url}?${query}` : url
    uni.navigateTo({
      url: fullUrl
    })
  }
}

// 使用
navigation.toDetail(123)
navigation.navigate('/pages/detail/detail', { id: 123, name: 'test' })
```

## 注意事项

1. 不能跳转到 tabBar 页面，需要使用 `uni.switchTab`
2. 路径前需要加 `/`，表示从根目录开始
3. 参数会拼接在 URL 后面，长度有限制
4. 复杂对象需要序列化后传递

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/router.html#navigateto
- **其他路由 API**: https://doc.dcloud.net.cn/uni-app-x/api/router.html
