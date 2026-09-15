# text 组件示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/component/text.html

## 概述

`text` 是文本组件，用于显示文本内容。

## 基础用法

```vue
<template>
  <text>这是一段文本</text>
</template>
```

## 完整示例

### 示例 1: 基本文本

```vue
<template>
  <view class="container">
    <text>普通文本</text>
    <text class="bold-text">加粗文本</text>
    <text class="colored-text">彩色文本</text>
  </view>
</template>

<style>
.bold-text {
  font-weight: bold;
}
.colored-text {
  color: #007aff;
}
</style>
```

### 示例 2: 文本嵌套

```vue
<template>
  <view class="container">
    <text>
      这是一段
      <text class="highlight">高亮</text>
      文本
    </text>
  </view>
</template>

<style>
.highlight {
  color: #ff3b30;
  font-weight: bold;
}
</style>
```

### 示例 3: 文本选择

```vue
<template>
  <view class="container">
    <text selectable>这段文本可以选择</text>
    <text :selectable="false">这段文本不可选择</text>
  </view>
</template>
```

### 示例 4: 文本换行

```vue
<template>
  <view class="container">
    <text class="text-wrap">
      这是一段很长的文本，会自动换行显示。这是一段很长的文本，会自动换行显示。
    </text>
  </view>
</template>

<style>
.text-wrap {
  width: 300px;
  word-wrap: break-word;
}
</style>
```

### 示例 5: 文本样式

```vue
<template>
  <view class="container">
    <text class="text-style">样式文本</text>
    <text class="text-decoration">装饰文本</text>
    <text class="text-shadow">阴影文本</text>
  </view>
</template>

<style>
.text-style {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
}
.text-decoration {
  text-decoration: underline;
  color: #007aff;
}
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}
</style>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| selectable | Boolean | false | 文本是否可选 |
| user-select | Boolean | false | 文本是否可选（H5） |
| space | String | - | 显示连续空格 |

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

1. `text` 组件内只能嵌套 `text` 组件
2. `selectable` 属性用于控制文本是否可选择
3. 文本样式通过 CSS 控制
4. 建议使用 `text` 组件而不是直接在 `view` 中写文本

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/component/text.html
