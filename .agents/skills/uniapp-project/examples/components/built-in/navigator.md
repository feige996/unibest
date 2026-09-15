# navigator 组件示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/component/navigator.html

## 概述

`navigator` 是页面链接组件，用于页面跳转。

## 基础用法

```vue
<template>
  <navigator url="/pages/detail/detail">跳转到详情页</navigator>
</template>
```

## 完整示例

### 示例 1: 基本跳转

```vue
<template>
  <view class="container">
    <navigator url="/pages/detail/detail">跳转到详情页</navigator>
  </view>
</template>
```

### 示例 2: 带参数跳转

```vue
<template>
  <view class="container">
    <navigator url="/pages/detail/detail?id=123&name=test">
      跳转到详情页
    </navigator>
  </view>
</template>
```

### 示例 3: 不同跳转方式

```vue
<template>
  <view class="container">
    <!-- 保留当前页面，可以返回 -->
    <navigator url="/pages/detail/detail" open-type="navigate">
      保留页面跳转
    </navigator>
    
    <!-- 关闭当前页面，不能返回 -->
    <navigator url="/pages/detail/detail" open-type="redirect">
      关闭页面跳转
    </navigator>
    
    <!-- 关闭所有页面，重新启动 -->
    <navigator url="/pages/index/index" open-type="reLaunch">
      重新启动
    </navigator>
    
    <!-- 跳转到 tabBar 页面 -->
    <navigator url="/pages/index/index" open-type="switchTab">
      切换到首页
    </navigator>
    
    <!-- 返回上一页 -->
    <navigator open-type="navigateBack" :delta="1">
      返回上一页
    </navigator>
  </view>
</template>
```

### 示例 4: 列表跳转

```vue
<template>
  <view class="container">
    <view 
      v-for="item in list" 
      :key="item.id"
      class="list-item"
    >
      <navigator :url="`/pages/detail/detail?id=${item.id}`">
        <text>{{ item.title }}</text>
        <text class="arrow">></text>
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, title: '项目1' },
        { id: 2, title: '项目2' },
        { id: 3, title: '项目3' }
      ]
    }
  }
}
</script>

<style>
.list-item {
  padding: 20px;
  border-bottom: 1px solid #eee;
}
.arrow {
  float: right;
  color: #999;
}
</style>
```

### 示例 5: 条件跳转

```vue
<template>
  <view class="container">
    <navigator 
      v-if="isLogin"
      url="/pages/user/user"
      open-type="navigate"
    >
      个人中心
    </navigator>
    <navigator 
      v-else
      url="/pages/login/login"
      open-type="navigate"
    >
      登录
    </navigator>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false
    }
  },
  onLoad() {
    this.checkLogin()
  },
  methods: {
    checkLogin() {
      const token = uni.getStorageSync('token')
      this.isLogin = !!token
    }
  }
}
</script>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| url | String | - | 应用内的跳转链接 |
| open-type | String | navigate | 跳转方式，可选值：navigate、redirect、switchTab、reLaunch、navigateBack |
| delta | Number | 1 | 当 open-type 为 navigateBack 时有效，表示返回的页面数 |

## open-type 可选值

| 值 | 说明 |
|----|------|
| navigate | 保留当前页面，跳转到应用内的某个页面 |
| redirect | 关闭当前页面，跳转到应用内的某个页面 |
| switchTab | 跳转到 tabBar 页面 |
| reLaunch | 关闭所有页面，打开到应用内的某个页面 |
| navigateBack | 关闭当前页面，返回上一页面或多级页面 |

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

1. `url` 必须以 `/` 开头
2. `open-type` 为 `switchTab` 时，只能跳转到 tabBar 页面
3. `open-type` 为 `navigateBack` 时，不需要 `url` 参数
4. 可以通过 `delta` 控制返回的页面数

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/component/navigator.html
- **页面路由**: https://uniapp.dcloud.net.cn/api/router.html
