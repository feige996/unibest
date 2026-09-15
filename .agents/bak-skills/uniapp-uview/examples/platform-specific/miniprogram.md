# Mini-Program Platform

## 小程序平台注意事项

在微信小程序等小程序平台使用 uView UI 时的特殊注意事项。

### manifest.json 配置

```json
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

### 组件使用

小程序平台需要确保组件正确注册：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
    }
  }
}
```

### 条件编译

使用条件编译处理小程序平台特定逻辑：

```vue
<template>
  <view>
    <!-- #ifdef MP-WEIXIN -->
    <view>微信小程序特有内容</view>
    <!-- #endif -->
  </view>
</template>

<script>
export default {
  methods: {
    handleClick() {
      // #ifdef MP-WEIXIN
      // 微信小程序特定代码
      wx.login({
        success: (res) => {
          this.$u.toast('登录成功')
        }
      })
      // #endif
    }
  }
}
</script>
```

### 小程序 API

#### 登录

```javascript
// #ifdef MP-WEIXIN
wx.login({
  success: (res) => {
    if (res.code) {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      this.$u.post('/api/login', {
        code: res.code
      }).then(result => {
        this.$u.toast('登录成功')
      })
    }
  }
})
// #endif
```

#### 获取用户信息

```javascript
// #ifdef MP-WEIXIN
wx.getUserProfile({
  desc: '用于完善用户资料',
  success: (res) => {
    this.userInfo = res.userInfo
    this.$u.toast('获取用户信息成功')
  }
})
// #endif
```

#### 分享

```javascript
onShareAppMessage() {
  // #ifdef MP-WEIXIN
  return {
    title: '分享标题',
    path: '/pages/index/index',
    imageUrl: '/static/share.png'
  }
  // #endif
}
```

### 页面配置

小程序页面需要在 pages.json 中配置：

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页",
        "enablePullDownRefresh": true
      }
    }
  ]
}
```

### 下拉刷新

```vue
<template>
  <view>
    <u-list 
      :list="list"
      @refresh="onRefresh"
    ></u-list>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  onPullDownRefresh() {
    this.onRefresh()
  },
  methods: {
    onRefresh() {
      // 刷新数据
      setTimeout(() => {
        uni.stopPullDownRefresh()
      }, 1000)
    }
  }
}
</script>
```

### 注意事项

1. **AppID 配置**：必须在 manifest.json 中配置正确的 AppID
2. **URL 检查**：开发时可以关闭 urlCheck
3. **组件注册**：确保 easycom 配置正确
4. **页面路径**：页面路径必须以 `/` 开头
5. **代码包大小**：注意小程序代码包大小限制
