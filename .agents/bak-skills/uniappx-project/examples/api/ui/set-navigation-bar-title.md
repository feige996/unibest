# uni.setNavigationBarTitle - 设置导航栏标题示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/api/ui/navigation-bar.html#setnavigationbartitle

## 概述

`uni.setNavigationBarTitle` 用于设置当前页面导航栏标题。

## 基础用法

```javascript
uni.setNavigationBarTitle({
  title: '新标题'
})
```

## 完整示例

### 示例 1: 设置标题

```javascript
uni.setNavigationBarTitle({
  title: '我的页面',
  success: () => {
    console.log('设置成功')
  },
  fail: (err) => {
    console.error('设置失败', err)
  }
})
```

### 示例 2: 动态设置标题

```vue
<template>
  <view class="container">
    <input v-model="pageTitle" placeholder="输入页面标题" />
    <button @click="updateTitle">更新标题</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: ''
    }
  },
  methods: {
    updateTitle() {
      if (this.pageTitle) {
        uni.setNavigationBarTitle({
          title: this.pageTitle
        })
      }
    }
  }
}
</script>
```

### 示例 3: 在页面生命周期中设置

```vue
<template>
  <view class="container">
    <text>页面内容</text>
  </view>
</template>

<script>
export default {
  onLoad(options) {
    // 根据参数设置标题
    if (options.type === 'detail') {
      uni.setNavigationBarTitle({
        title: '详情页'
      })
    } else {
      uni.setNavigationBarTitle({
        title: '列表页'
      })
    }
  },
  onReady() {
    // 也可以在这里设置
    uni.setNavigationBarTitle({
      title: '页面标题'
    })
  }
}
</script>
```

### 示例 4: 根据数据设置标题

```vue
<template>
  <view class="container">
    <view v-if="article">
      <text>{{ article.title }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      article: null
    }
  },
  onLoad(options) {
    this.loadArticle(options.id)
  },
  methods: {
    loadArticle(id) {
      uni.request({
        url: `https://api.example.com/article/${id}`,
        success: (res) => {
          this.article = res.data
          // 使用文章标题作为页面标题
          uni.setNavigationBarTitle({
            title: res.data.title
          })
        }
      })
    }
  }
}
</script>
```

### 示例 5: 封装设置标题函数

```javascript
// utils/navigation.js
const navigation = {
  setTitle(title) {
    uni.setNavigationBarTitle({
      title: title
    })
  },
  
  setTitleWithSubtitle(mainTitle, subtitle) {
    const fullTitle = subtitle ? `${mainTitle} - ${subtitle}` : mainTitle
    uni.setNavigationBarTitle({
      title: fullTitle
    })
  }
}

// 使用
navigation.setTitle('我的页面')
navigation.setTitleWithSubtitle('商品', '详情')
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| title | String | 是 | 页面标题 |

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

1. 标题长度建议不超过 10 个字符
2. 可以在 `onLoad` 或 `onReady` 中设置
3. 设置后立即生效
4. 建议根据页面内容动态设置标题

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/api/ui/navigation-bar.html#setnavigationbartitle
- **设置导航栏颜色**: https://doc.dcloud.net.cn/uni-app-x/api/ui/navigation-bar.html#setnavigationbarcolor
