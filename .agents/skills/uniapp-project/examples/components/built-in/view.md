# view 组件示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/component/view.html

## 概述

`view` 是视图容器组件，类似于 HTML 中的 `div`，用于包裹各种元素内容。

## 基础用法

### 基本视图容器

```vue
<template>
  <view class="container">
    <text>这是内容</text>
  </view>
</template>

<style>
.container {
  padding: 20px;
  background-color: #f5f5f5;
}
</style>
```

## 完整示例

### 示例 1: Flex 布局 - 横向布局

```vue
<template>
  <view class="uni-padding-wrap uni-common-mt">
    <view class="uni-title uni-common-mt">
      flex-direction: row
      <text>\n横向布局</text>
    </view>
    <view class="uni-flex uni-row">
      <view class="flex-item uni-bg-red">A</view>
      <view class="flex-item uni-bg-green">B</view>
      <view class="flex-item uni-bg-blue">C</view>
    </view>
  </view>
</template>

<style>
.uni-flex {
  display: flex;
}
.uni-row {
  flex-direction: row;
}
.flex-item {
  flex: 1;
  height: 100px;
  text-align: center;
  line-height: 100px;
}
.uni-bg-red {
  background-color: #ff3b30;
}
.uni-bg-green {
  background-color: #4cd964;
}
.uni-bg-blue {
  background-color: #007aff;
}
</style>
```

### 示例 2: Flex 布局 - 纵向布局

```vue
<template>
  <view class="uni-padding-wrap uni-common-mt">
    <view class="uni-title uni-common-mt">
      flex-direction: column
      <text>\n纵向布局</text>
    </view>
    <view class="uni-flex uni-column">
      <view class="flex-item flex-item-V uni-bg-red">A</view>
      <view class="flex-item flex-item-V uni-bg-green">B</view>
      <view class="flex-item flex-item-V uni-bg-blue">C</view>
    </view>
  </view>
</template>

<style>
.uni-flex {
  display: flex;
}
.uni-column {
  flex-direction: column;
}
.flex-item-V {
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 100px;
}
</style>
```

### 示例 3: 点击态效果

```vue
<template>
  <view class="container">
    <view 
      class="clickable-item"
      hover-class="hover"
      hover-start-time="50"
      hover-stay-time="400"
      @click="handleClick"
    >
      点击我
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    handleClick() {
      uni.showToast({
        title: '被点击了',
        icon: 'success'
      })
    }
  }
}
</script>

<style>
.clickable-item {
  padding: 20px;
  background-color: #007aff;
  color: white;
  text-align: center;
  border-radius: 8px;
}
.hover {
  background-color: #0051d5;
  opacity: 0.8;
}
</style>
```

### 示例 4: 阻止点击态冒泡

```vue
<template>
  <view class="container" hover-class="container-hover">
    <view 
      class="inner-item"
      hover-class="inner-hover"
      hover-stop-propagation="true"
      @click="handleInnerClick"
    >
      内部元素（阻止冒泡）
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    handleInnerClick() {
      console.log('内部元素被点击')
    }
  }
}
</script>

<style>
.container {
  padding: 40px;
  background-color: #f5f5f5;
}
.container-hover {
  background-color: #e0e0e0;
}
.inner-item {
  padding: 20px;
  background-color: #007aff;
  color: white;
  text-align: center;
  border-radius: 8px;
}
.inner-hover {
  background-color: #0051d5;
}
</style>
```

### 示例 5: 嵌套视图

```vue
<template>
  <view class="page">
    <view class="header">
      <text class="title">页面标题</text>
    </view>
    <view class="content">
      <view class="section">
        <text class="section-title">第一部分</text>
        <view class="section-content">
          <text>这是第一部分的内容</text>
        </view>
      </view>
      <view class="section">
        <text class="section-title">第二部分</text>
        <view class="section-content">
          <text>这是第二部分的内容</text>
        </view>
      </view>
    </view>
    <view class="footer">
      <text>页脚</text>
    </view>
  </view>
</template>

<style>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  padding: 20px;
  background-color: #007aff;
  color: white;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
.content {
  flex: 1;
  padding: 20px;
}
.section {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
}
.section-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}
.section-content {
  padding: 10px;
  background-color: white;
  border-radius: 4px;
}
.footer {
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
}
</style>
```

### 示例 6: 条件渲染

```vue
<template>
  <view class="container">
    <view v-if="showContent" class="content">
      <text>这是显示的内容</text>
    </view>
    <view v-else class="empty">
      <text>暂无内容</text>
    </view>
    <button @click="toggleContent">切换显示</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      showContent: true
    }
  },
  methods: {
    toggleContent() {
      this.showContent = !this.showContent
    }
  }
}
</script>

<style>
.container {
  padding: 20px;
}
.content {
  padding: 20px;
  background-color: #4cd964;
  color: white;
  border-radius: 8px;
  margin-bottom: 20px;
}
.empty {
  padding: 20px;
  background-color: #f5f5f5;
  color: #999;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
}
</style>
```

### 示例 7: 列表渲染

```vue
<template>
  <view class="container">
    <view 
      v-for="(item, index) in list" 
      :key="index"
      class="list-item"
      @click="handleItemClick(item)"
    >
      <text>{{ item.name }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: '项目 1' },
        { id: 2, name: '项目 2' },
        { id: 3, name: '项目 3' }
      ]
    }
  },
  methods: {
    handleItemClick(item) {
      uni.showToast({
        title: `点击了 ${item.name}`,
        icon: 'none'
      })
    }
  }
}
</script>

<style>
.container {
  padding: 20px;
}
.list-item {
  padding: 15px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
}
</style>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| hover-class | String | none | 指定按下去的样式类 |
| hover-stop-propagation | Boolean | false | 指定是否阻止本节点的祖先节点出现点击态 |
| hover-start-time | Number | 50 | 按住后多久出现点击态，单位毫秒 |
| hover-stay-time | Number | 400 | 手指松开后点击态保留时间，单位毫秒 |

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

1. `view` 组件本身不显示任何可视化元素，主要用于包裹其他组件
2. 可以使用 CSS 样式控制 `view` 的显示效果
3. 支持 Flex 布局，常用于页面布局
4. `hover-class` 属性用于设置点击态效果
5. `hover-stop-propagation` 在某些平台可能不支持

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/component/view.html
- **Flex 布局**: https://uniapp.dcloud.net.cn/tutorial/css-flex.html
