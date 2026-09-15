# rich-text 组件示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/component/rich-text.html

## 概述

`rich-text` 是富文本组件，用于显示富文本内容。

## 基础用法

```vue
<template>
  <rich-text :nodes="htmlContent"></rich-text>
</template>

<script>
export default {
  data() {
    return {
      htmlContent: '<div>这是富文本内容</div>'
    }
  }
}
</script>
```

## 完整示例

### 示例 1: 显示 HTML 内容

```vue
<template>
  <view class="container">
    <rich-text :nodes="htmlContent"></rich-text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      htmlContent: `
        <div>
          <h1>标题</h1>
          <p>这是一段<strong>加粗</strong>的文字</p>
          <p>这是一段<em>斜体</em>的文字</p>
          <ul>
            <li>列表项1</li>
            <li>列表项2</li>
          </ul>
        </div>
      `
    }
  }
}
</script>
```

### 示例 2: 显示网络 HTML

```vue
<template>
  <view class="container">
    <rich-text :nodes="htmlContent"></rich-text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      htmlContent: ''
    }
  },
  onLoad() {
    this.loadHtmlContent()
  },
  methods: {
    loadHtmlContent() {
      uni.request({
        url: 'https://api.example.com/article',
        success: (res) => {
          this.htmlContent = res.data.content
        }
      })
    }
  }
}
</script>
```

### 示例 3: 使用对象数组

```vue
<template>
  <view class="container">
    <rich-text :nodes="nodes"></rich-text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      nodes: [
        {
          name: 'div',
          attrs: {
            class: 'wrapper',
            style: 'color: red;'
          },
          children: [
            {
              type: 'text',
              text: 'Hello World!'
            }
          ]
        }
      ]
    }
  }
}
</script>
```

### 示例 4: 混合使用

```vue
<template>
  <view class="container">
    <rich-text :nodes="mixedContent"></rich-text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      mixedContent: [
        '<p>这是HTML字符串</p>',
        {
          name: 'div',
          attrs: {
            style: 'color: blue;'
          },
          children: [
            {
              type: 'text',
              text: '这是对象节点'
            }
          ]
        }
      ]
    }
  }
}
</script>
```

### 示例 5: 文章详情页

```vue
<template>
  <view class="container">
    <view class="article-header">
      <text class="title">{{ article.title }}</text>
      <text class="date">{{ article.date }}</text>
    </view>
    <rich-text :nodes="article.content" class="article-content"></rich-text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: '文章标题',
        date: '2024-01-01',
        content: `
          <div>
            <h2>第一章</h2>
            <p>这是文章的第一段内容...</p>
            <img src="https://example.com/image.jpg" />
            <h2>第二章</h2>
            <p>这是文章的第二段内容...</p>
          </div>
        `
      }
    }
  }
}
</script>

<style>
.article-header {
  padding: 20px;
  border-bottom: 1px solid #eee;
}
.title {
  font-size: 36rpx;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
}
.date {
  font-size: 24rpx;
  color: #999;
}
.article-content {
  padding: 20px;
}
</style>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| nodes | String/Array | - | 节点列表/HTML String |

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

1. `nodes` 可以是 HTML 字符串或对象数组
2. 不同平台支持的 HTML 标签可能不同
3. 建议使用对象数组格式以获得更好的兼容性
4. 图片需要配置合法域名

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/component/rich-text.html
