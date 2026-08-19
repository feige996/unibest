# icon 组件示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/component/icon.html

## 概述

`icon` 是图标组件，用于显示各种图标。

## 基础用法

```vue
<template>
  <icon type="success" size="20" color="#4cd964"></icon>
</template>
```

## 完整示例

### 示例 1: 不同类型的图标

```vue
<template>
  <view class="container">
    <view class="icon-item">
      <icon type="success" size="26" color="#4cd964"></icon>
      <text>成功</text>
    </view>
    <view class="icon-item">
      <icon type="info" size="26" color="#909399"></icon>
      <text>信息</text>
    </view>
    <view class="icon-item">
      <icon type="warn" size="26" color="#ff9500"></icon>
      <text>警告</text>
    </view>
    <view class="icon-item">
      <icon type="waiting" size="26" color="#007aff"></icon>
      <text>等待</text>
    </view>
    <view class="icon-item">
      <icon type="clear" size="26" color="#ff3b30"></icon>
      <text>清除</text>
    </view>
    <view class="icon-item">
      <icon type="search" size="26" color="#333"></icon>
      <text>搜索</text>
    </view>
  </view>
</template>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
</style>
```

### 示例 2: 不同大小的图标

```vue
<template>
  <view class="container">
    <icon type="success" size="20" color="#4cd964"></icon>
    <icon type="success" size="30" color="#4cd964"></icon>
    <icon type="success" size="40" color="#4cd964"></icon>
    <icon type="success" size="50" color="#4cd964"></icon>
  </view>
</template>

<style>
.container {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
}
</style>
```

### 示例 3: 不同颜色的图标

```vue
<template>
  <view class="container">
    <icon type="success" size="30" color="#4cd964"></icon>
    <icon type="success" size="30" color="#007aff"></icon>
    <icon type="success" size="30" color="#ff3b30"></icon>
    <icon type="success" size="30" color="#ff9500"></icon>
  </view>
</template>
```

### 示例 4: 在按钮中使用

```vue
<template>
  <view class="container">
    <button class="icon-button">
      <icon type="search" size="20" color="#fff"></icon>
      <text>搜索</text>
    </button>
    <button class="icon-button">
      <icon type="success" size="20" color="#fff"></icon>
      <text>确认</text>
    </button>
  </view>
</template>

<style>
.icon-button {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| type | String | - | icon 的类型，可选值：success、info、warn、waiting、clear、search 等 |
| size | Number | 23 | icon 的大小，单位 px |
| color | String | - | icon 的颜色，同 CSS 的 color |

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

1. `type` 的值在不同平台可能不同
2. 建议使用 uni-icons 组件库获得更多图标
3. `size` 单位为 px，不是 rpx
4. `color` 可以使用任何 CSS 颜色值

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/component/icon.html
- **uni-icons**: https://ext.dcloud.net.cn/plugin?id=28
