# form 组件示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/component/form.html

## 概述

`form` 是表单组件，用于收集用户输入的数据。

## 基础用法

```vue
<template>
  <form @submit="handleSubmit">
    <input name="username" placeholder="用户名" />
    <button form-type="submit">提交</button>
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

## 完整示例

### 示例 1: 基本表单

```vue
<template>
  <form @submit="handleSubmit">
    <view class="form-item">
      <text>用户名：</text>
      <input name="username" placeholder="请输入用户名" />
    </view>
    <view class="form-item">
      <text>密码：</text>
      <input name="password" type="password" placeholder="请输入密码" />
    </view>
    <button form-type="submit">提交</button>
    <button form-type="reset">重置</button>
  </form>
</template>

<script>
export default {
  methods: {
    handleSubmit(e) {
      const formData = e.detail.value
      console.log('表单数据', formData)
      // { username: 'xxx', password: 'xxx' }
    }
  }
}
</script>

<style>
.form-item {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
</style>
```

### 示例 2: 完整登录表单

```vue
<template>
  <form @submit="handleLogin">
    <view class="form-item">
      <input 
        name="username" 
        placeholder="请输入用户名"
        v-model="username"
      />
    </view>
    <view class="form-item">
      <input 
        name="password" 
        type="password"
        placeholder="请输入密码"
        v-model="password"
      />
    </view>
    <button form-type="submit" :loading="loading">登录</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      loading: false
    }
  },
  methods: {
    handleLogin(e) {
      const formData = e.detail.value
      this.loading = true
      
      uni.request({
        url: 'https://api.example.com/login',
        method: 'POST',
        data: formData,
        success: (res) => {
          if (res.data.success) {
            uni.setStorageSync('token', res.data.token)
            uni.showToast({
              title: '登录成功',
              icon: 'success'
            })
            setTimeout(() => {
              uni.switchTab({
                url: '/pages/index/index'
              })
            }, 1500)
          }
        },
        complete: () => {
          this.loading = false
        }
      })
    }
  }
}
</script>
```

### 示例 3: 表单验证

```vue
<template>
  <form @submit="handleSubmit">
    <view class="form-item">
      <input 
        name="email" 
        type="text"
        placeholder="请输入邮箱"
        v-model="email"
      />
      <text v-if="emailError" class="error">{{ emailError }}</text>
    </view>
    <view class="form-item">
      <input 
        name="phone" 
        type="tel"
        placeholder="请输入手机号"
        maxlength="11"
        v-model="phone"
      />
      <text v-if="phoneError" class="error">{{ phoneError }}</text>
    </view>
    <button form-type="submit">提交</button>
  </form>
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
      if (!this.email) {
        this.emailError = '邮箱不能为空'
      } else if (!emailRegex.test(this.email)) {
        this.emailError = '邮箱格式不正确'
      } else {
        this.emailError = ''
      }
    },
    validatePhone() {
      const phoneRegex = /^1[3-9]\d{9}$/
      if (!this.phone) {
        this.phoneError = '手机号不能为空'
      } else if (!phoneRegex.test(this.phone)) {
        this.phoneError = '手机号格式不正确'
      } else {
        this.phoneError = ''
      }
    },
    handleSubmit(e) {
      this.validateEmail()
      this.validatePhone()
      
      if (!this.emailError && !this.phoneError) {
        const formData = e.detail.value
        console.log('表单数据', formData)
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

### 示例 4: 复杂表单

```vue
<template>
  <form @submit="handleSubmit">
    <view class="form-item">
      <text>姓名：</text>
      <input name="name" placeholder="请输入姓名" />
    </view>
    
    <view class="form-item">
      <text>性别：</text>
      <radio-group name="gender">
        <label>
          <radio value="male" /> 男
        </label>
        <label>
          <radio value="female" /> 女
        </label>
      </radio-group>
    </view>
    
    <view class="form-item">
      <text>兴趣爱好：</text>
      <checkbox-group name="hobbies">
        <label>
          <checkbox value="reading" /> 阅读
        </label>
        <label>
          <checkbox value="music" /> 音乐
        </label>
        <label>
          <checkbox value="sports" /> 运动
        </label>
      </checkbox-group>
    </view>
    
    <view class="form-item">
      <text>城市：</text>
      <picker mode="region" name="city">
        <view>请选择城市</view>
      </picker>
    </view>
    
    <button form-type="submit">提交</button>
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

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| report-submit | Boolean | false | 是否返回 formId 用于发送模板消息 |

## 事件说明

| 事件名 | 说明 | 返回值 |
|--------|------|--------|
| @submit | 携带 form 中的数据触发 submit 事件 | e.detail.value 包含所有表单数据 |
| @reset | 表单重置时会触发 reset 事件 | - |

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

1. 表单内的组件需要设置 `name` 属性才能被收集
2. `form-type="submit"` 的按钮会触发表单提交
3. `form-type="reset"` 的按钮会重置表单
4. 可以通过 `e.detail.value` 获取所有表单数据

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/component/form.html
- **输入框**: https://doc.dcloud.net.cn/uni-app-x/component/input.html
