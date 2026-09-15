# input 组件示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/component/input.html

## 概述

`input` 是单行输入框组件，用于用户输入文本。

## 基础用法

```vue
<template>
  <input v-model="value" placeholder="请输入内容" />
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```

## 完整示例

### 示例 1: 基本输入框

```vue
<template>
  <view class="container">
    <input 
      v-model="inputValue" 
      placeholder="请输入内容"
      @input="handleInput"
    />
    <text>输入的内容：{{ inputValue }}</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleInput(e) {
      this.inputValue = e.detail.value
    }
  }
}
</script>
```

### 示例 2: 不同类型的输入框

```vue
<template>
  <view class="container">
    <input type="text" placeholder="文本输入" />
    <input type="number" placeholder="数字输入" />
    <input type="digit" placeholder="带小数点的数字" />
    <input type="idcard" placeholder="身份证号" />
    <input type="tel" placeholder="电话号码" />
    <input type="safe-password" placeholder="安全密码" />
    <input type="nickname" placeholder="昵称" />
  </view>
</template>
```

### 示例 3: 密码输入框

```vue
<template>
  <view class="container">
    <input 
      type="text"
      password
      placeholder="请输入密码"
      v-model="password"
    />
    <input 
      type="text"
      :password="!showPassword"
      placeholder="显示/隐藏密码"
      v-model="password2"
    />
    <button @click="showPassword = !showPassword">
      {{ showPassword ? '隐藏' : '显示' }}密码
    </button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      password2: '',
      showPassword: false
    }
  }
}
</script>
```

### 示例 4: 限制输入长度

```vue
<template>
  <view class="container">
    <input 
      v-model="value"
      placeholder="最多输入10个字符"
      maxlength="10"
      @input="handleInput"
    />
    <text>已输入：{{ value.length }}/10</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    handleInput(e) {
      this.value = e.detail.value
    }
  }
}
</script>
```

### 示例 5: 获取焦点

```vue
<template>
  <view class="container">
    <input 
      ref="input"
      v-model="value"
      placeholder="点击按钮获取焦点"
      :focus="isFocused"
    />
    <button @click="focusInput">获取焦点</button>
    <button @click="blurInput">失去焦点</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      isFocused: false
    }
  },
  methods: {
    focusInput() {
      this.isFocused = true
      // 或使用组件方法
      this.$refs.input.focus()
    },
    blurInput() {
      this.isFocused = false
      // 或使用组件方法
      this.$refs.input.blur()
    }
  }
}
</script>
```

### 示例 6: 确认按钮

```vue
<template>
  <view class="container">
    <input 
      v-model="value"
      placeholder="输入后点击键盘确认"
      confirm-type="search"
      @confirm="handleConfirm"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    handleConfirm(e) {
      console.log('确认输入', e.detail.value)
      uni.showToast({
        title: '搜索：' + e.detail.value,
        icon: 'none'
      })
    }
  }
}
</script>
```

### 示例 7: 表单验证

```vue
<template>
  <view class="container">
    <input 
      v-model="email"
      type="text"
      placeholder="请输入邮箱"
      @blur="validateEmail"
    />
    <text v-if="emailError" class="error">{{ emailError }}</text>
    
    <input 
      v-model="phone"
      type="tel"
      placeholder="请输入手机号"
      maxlength="11"
      @blur="validatePhone"
    />
    <text v-if="phoneError" class="error">{{ phoneError }}</text>
    
    <button @click="submit">提交</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      phone: '',
      emailError: '',
      phoneError: ''
    }
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (this.email && !emailRegex.test(this.email)) {
        this.emailError = '邮箱格式不正确'
      } else {
        this.emailError = ''
      }
    },
    validatePhone() {
      const phoneRegex = /^1[3-9]\d{9}$/
      if (this.phone && !phoneRegex.test(this.phone)) {
        this.phoneError = '手机号格式不正确'
      } else {
        this.phoneError = ''
      }
    },
    submit() {
      this.validateEmail()
      this.validatePhone()
      if (!this.emailError && !this.phoneError) {
        uni.showToast({
          title: '提交成功',
          icon: 'success'
        })
      }
    }
  }
}
</script>

<style>
.error {
  color: #ff3b30;
  font-size: 24rpx;
  margin-top: 10rpx;
}
</style>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | String | - | 输入框的初始内容 |
| type | String | text | input 的类型，可选值：text、number、digit、idcard、tel、safe-password、nickname |
| password | Boolean | false | 是否是密码类型 |
| placeholder | String | - | 输入框为空时占位符 |
| disabled | Boolean | false | 是否禁用 |
| maxlength | Number | 140 | 最大输入长度，-1 表示不限制 |
| focus | Boolean | false | 获取焦点 |
| confirm-type | String | done | 设置键盘右下角按钮的文字 |

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

1. `v-model` 是双向绑定的推荐方式
2. `maxlength` 设置为 -1 时不限制最大长度
3. `focus` 属性在 H5 和 App 上需要特殊处理
4. `confirm-type` 在不同平台支持的值可能不同

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/component/input.html
- **表单组件**: https://uniapp.dcloud.net.cn/component/form.html
