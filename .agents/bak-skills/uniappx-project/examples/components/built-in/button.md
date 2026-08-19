# button 组件示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/component/button.html

## 概述

`button` 是按钮组件，用于触发操作。

## 基础用法

```vue
<template>
  <button @click="handleClick">点击按钮</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('按钮被点击')
    }
  }
}
</script>
```

## 完整示例

### 示例 1: 按钮类型

```vue
<template>
  <view class="container">
    <button type="default">默认按钮</button>
    <button type="primary">主要按钮</button>
    <button type="warn">警告按钮</button>
  </view>
</template>

<style>
.container {
  padding: 20px;
}
button {
  margin-bottom: 20px;
}
</style>
```

### 示例 2: 按钮大小

```vue
<template>
  <view class="container">
    <button size="mini">小按钮</button>
    <button size="default">默认按钮</button>
  </view>
</template>
```

### 示例 3: 镂空按钮

```vue
<template>
  <view class="container">
    <button type="primary" plain>镂空按钮</button>
    <button type="warn" plain>镂空警告按钮</button>
  </view>
</template>
```

### 示例 4: 禁用按钮

```vue
<template>
  <view class="container">
    <button disabled>禁用按钮</button>
    <button :disabled="isDisabled" @click="handleClick">
      {{ isDisabled ? '已禁用' : '可点击' }}
    </button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: false
    }
  },
  methods: {
    handleClick() {
      this.isDisabled = true
      setTimeout(() => {
        this.isDisabled = false
      }, 2000)
    }
  }
}
</script>
```

### 示例 5: 加载状态

```vue
<template>
  <view class="container">
    <button :loading="isLoading" @click="handleSubmit">
      提交
    </button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true
      try {
        // 模拟请求
        await new Promise(resolve => setTimeout(resolve, 2000))
        uni.showToast({
          title: '提交成功',
          icon: 'success'
        })
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
```

### 示例 6: 表单提交

```vue
<template>
  <form @submit="handleSubmit">
    <input name="username" placeholder="用户名" />
    <input name="password" type="password" placeholder="密码" />
    <button form-type="submit">提交</button>
    <button form-type="reset">重置</button>
  </form>
</template>

<script>
export default {
  methods: {
    handleSubmit(e) {
      console.log('表单数据', e.detail.value)
    }
  }
}
</script>
```

### 示例 7: 开放能力（微信小程序）

```vue
<template>
  <view class="container">
    <!-- 获取用户信息 -->
    <button open-type="getUserInfo" @getuserinfo="getUserInfo">
      获取用户信息
    </button>
    
    <!-- 打开客服会话 -->
    <button open-type="contact">联系客服</button>
    
    <!-- 分享 -->
    <button open-type="share">分享</button>
    
    <!-- 打开设置 -->
    <button open-type="openSetting">打开设置</button>
  </view>
</template>

<script>
export default {
  methods: {
    getUserInfo(e) {
      console.log('用户信息', e.detail.userInfo)
    }
  }
}
</script>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| size | String | default | 按钮的大小，可选值：default、mini |
| type | String | default | 按钮的样式类型，可选值：primary、default、warn |
| plain | Boolean | false | 按钮是否镂空，背景色透明 |
| disabled | Boolean | false | 是否禁用 |
| loading | Boolean | false | 名称前是否带 loading 图标 |
| form-type | String | - | 用于 form 组件，可选值：submit、reset |
| open-type | String | - | 开放能力，如：getUserInfo、contact、share 等 |

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

1. `open-type` 在不同平台支持的能力不同
2. 按钮的样式可以通过 CSS 自定义
3. `loading` 图标在不同平台显示可能不同
4. 建议使用 `@click` 事件处理点击，而不是依赖 `open-type`

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/component/button.html
- **表单组件**: https://doc.dcloud.net.cn/uni-app-x/component/form.html
