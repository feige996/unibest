# label 组件示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/component/label.html

## 概述

`label` 是标签组件，用于改进表单组件的可用性。

## 基础用法

```vue
<template>
  <label>
    <checkbox value="option1" />
    <text>选项1</text>
  </label>
</template>
```

## 完整示例

### 示例 1: 配合 checkbox 使用

```vue
<template>
  <view class="container">
    <checkbox-group @change="handleChange">
      <label class="checkbox-label">
        <checkbox value="option1" />
        <text>选项1</text>
      </label>
      <label class="checkbox-label">
        <checkbox value="option2" />
        <text>选项2</text>
      </label>
      <label class="checkbox-label">
        <checkbox value="option3" />
        <text>选项3</text>
      </label>
    </checkbox-group>
  </view>
</template>

<script>
export default {
  methods: {
    handleChange(e) {
      console.log('选中的值', e.detail.value)
    }
  }
}
</script>

<style>
.checkbox-label {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
</style>
```

### 示例 2: 配合 radio 使用

```vue
<template>
  <view class="container">
    <radio-group @change="handleChange">
      <label class="radio-label">
        <radio value="male" />
        <text>男</text>
      </label>
      <label class="radio-label">
        <radio value="female" />
        <text>女</text>
      </label>
    </radio-group>
  </view>
</template>

<script>
export default {
  methods: {
    handleChange(e) {
      console.log('选中的值', e.detail.value)
    }
  }
}
</script>

<style>
.radio-label {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
</style>
```

### 示例 3: 配合 switch 使用

```vue
<template>
  <view class="container">
    <label class="switch-label">
      <text>开启通知</text>
      <switch :checked="notifyEnabled" @change="handleSwitchChange" />
    </label>
  </view>
</template>

<script>
export default {
  data() {
    return {
      notifyEnabled: false
    }
  },
  methods: {
    handleSwitchChange(e) {
      this.notifyEnabled = e.detail.value
    }
  }
}
</script>

<style>
.switch-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
</style>
```

### 示例 4: 配合 input 使用

```vue
<template>
  <view class="container">
    <label class="input-label">
      <text>用户名：</text>
      <input v-model="username" placeholder="请输入用户名" />
    </label>
    <label class="input-label">
      <text>密码：</text>
      <input v-model="password" type="password" placeholder="请输入密码" />
    </label>
  </view>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style>
.input-label {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
</style>
```

### 示例 5: 表单列表

```vue
<template>
  <view class="container">
    <view class="form-list">
      <label class="form-item">
        <text class="label-text">同意协议</text>
        <checkbox value="agree" />
      </label>
      <label class="form-item">
        <text class="label-text">接收通知</text>
        <switch :checked="notifyEnabled" @change="notifyEnabled = $event.detail.value" />
      </label>
      <label class="form-item">
        <text class="label-text">性别</text>
        <radio-group>
          <radio value="male" />男
          <radio value="female" />女
        </radio-group>
      </label>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      notifyEnabled: false
    }
  }
}
</script>

<style>
.form-list {
  padding: 20px;
}
.form-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}
.label-text {
  font-size: 32rpx;
  color: #333;
}
</style>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| for | String | - | 绑定控件的 id |

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

1. `label` 用于改进表单组件的可用性
2. 点击 `label` 内的文本可以触发关联的表单控件
3. 可以配合 `checkbox`、`radio`、`switch`、`input` 等使用
4. 建议使用 `label` 包裹表单控件和文本

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/component/label.html
- **复选框**: https://doc.dcloud.net.cn/uni-app-x/component/checkbox.html
- **单选框**: https://doc.dcloud.net.cn/uni-app-x/component/radio.html
