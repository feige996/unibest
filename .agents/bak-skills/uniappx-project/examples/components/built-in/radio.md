# radio 组件示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/component/radio.html

## 概述

`radio` 是单项选择器组件，用于单选场景。

## 基础用法

```vue
<template>
  <radio value="option1" checked>选项1</radio>
</template>
```

## 完整示例

### 示例 1: 单个单选框

```vue
<template>
  <view class="container">
    <radio value="male" :checked="gender === 'male'" @tap="handleChange">
      男
    </radio>
    <radio value="female" :checked="gender === 'female'" @tap="handleChange">
      女
    </radio>
  </view>
</template>

<script>
export default {
  data() {
    return {
      gender: 'male'
    }
  },
  methods: {
    handleChange(e) {
      this.gender = e.detail.value
      console.log('选择的性别', this.gender)
    }
  }
}
</script>
```

### 示例 2: 单选框组

```vue
<template>
  <view class="container">
    <radio-group @change="handleGroupChange">
      <label v-for="item in options" :key="item.value" class="radio-item">
        <radio :value="item.value" :checked="selectedValue === item.value" />
        <text>{{ item.label }}</text>
      </label>
    </radio-group>
    <text>已选择：{{ selectedValue }}</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { value: 'option1', label: '选项1' },
        { value: 'option2', label: '选项2' },
        { value: 'option3', label: '选项3' }
      ],
      selectedValue: 'option1'
    }
  },
  methods: {
    handleGroupChange(e) {
      this.selectedValue = e.detail.value
      console.log('选中的值', this.selectedValue)
    }
  }
}
</script>

<style>
.radio-item {
  display: flex;
  align-items: center;
  padding: 10px;
}
</style>
```

### 示例 3: 在表单中使用

```vue
<template>
  <form @submit="handleSubmit">
    <view class="form-item">
      <text>支付方式：</text>
      <radio-group name="payment" @change="handlePaymentChange">
        <label v-for="method in paymentMethods" :key="method.value" class="radio-item">
          <radio :value="method.value" />
          <text>{{ method.label }}</text>
        </label>
      </radio-group>
    </view>
    <button form-type="submit">提交</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      paymentMethods: [
        { value: 'alipay', label: '支付宝' },
        { value: 'wechat', label: '微信支付' },
        { value: 'bank', label: '银行卡' }
      ],
      selectedPayment: ''
    }
  },
  methods: {
    handlePaymentChange(e) {
      this.selectedPayment = e.detail.value
    },
    handleSubmit(e) {
      console.log('选择的支付方式', this.selectedPayment)
    }
  }
}
</script>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | String | - | radio 标识，选中时触发 change 事件，并携带 value |
| checked | Boolean | false | 当前是否选中 |
| disabled | Boolean | false | 是否禁用 |
| color | String | #007aff | radio 的颜色 |

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

1. 需要配合 `radio-group` 使用才能获取选中的值
2. 同一组内只能选择一个选项
3. `value` 用于标识不同的选项
4. `checked` 属性控制选中状态

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/component/radio.html
- **表单组件**: https://doc.dcloud.net.cn/uni-app-x/component/form.html
