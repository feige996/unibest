# textarea 组件示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/component/textarea.html

## 概述

`textarea` 是多行输入框组件，用于输入多行文本。

## 基础用法

```vue
<template>
  <textarea v-model="content" placeholder="请输入内容"></textarea>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  }
}
</script>
```

## 完整示例

### 示例 1: 基本多行输入

```vue
<template>
  <view class="container">
    <textarea 
      v-model="content"
      placeholder="请输入内容"
      @input="handleInput"
    ></textarea>
    <text>已输入：{{ content.length }} 字</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  methods: {
    handleInput(e) {
      this.content = e.detail.value
    }
  }
}
</script>
```

### 示例 2: 限制输入长度

```vue
<template>
  <view class="container">
    <textarea 
      v-model="content"
      placeholder="最多输入200字"
      maxlength="200"
      @input="handleInput"
    ></textarea>
    <text class="count">{{ content.length }}/200</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  methods: {
    handleInput(e) {
      this.content = e.detail.value
    }
  }
}
</script>

<style>
.count {
  color: #999;
  font-size: 24rpx;
  text-align: right;
}
</style>
```

### 示例 3: 自动调整高度

```vue
<template>
  <view class="container">
    <textarea 
      v-model="content"
      placeholder="输入内容会自动调整高度"
      :auto-height="true"
      :min-height="100"
    ></textarea>
  </view>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  }
}
</script>
```

### 示例 4: 固定高度

```vue
<template>
  <view class="container">
    <textarea 
      v-model="content"
      placeholder="固定高度输入框"
      :show-confirm-bar="true"
      confirm-type="done"
      @confirm="handleConfirm"
    ></textarea>
  </view>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  methods: {
    handleConfirm(e) {
      console.log('确认输入', e.detail.value)
    }
  }
}
</script>

<style>
textarea {
  width: 100%;
  height: 200px;
}
</style>
```

### 示例 5: 表单验证

```vue
<template>
  <view class="container">
    <textarea 
      v-model="content"
      placeholder="请输入反馈内容"
      maxlength="500"
      @blur="validateContent"
    ></textarea>
    <text v-if="error" class="error">{{ error }}</text>
    <text class="count">{{ content.length }}/500</text>
    <button @click="submit">提交</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      content: '',
      error: ''
    }
  },
  methods: {
    validateContent() {
      if (this.content.length < 10) {
        this.error = '内容至少需要10个字符'
      } else {
        this.error = ''
      }
    },
    submit() {
      this.validateContent()
      if (!this.error && this.content) {
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
.count {
  color: #999;
  font-size: 24rpx;
  text-align: right;
}
</style>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | String | - | 输入框的内容 |
| placeholder | String | - | 输入框为空时占位符 |
| placeholder-style | String | - | 指定 placeholder 的样式 |
| disabled | Boolean | false | 是否禁用 |
| maxlength | Number | 140 | 最大输入长度，-1 表示不限制 |
| auto-focus | Boolean | false | 是否自动聚焦 |
| focus | Boolean | false | 获取焦点 |
| auto-height | Boolean | false | 是否自动增高 |
| fixed | Boolean | false | 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true |

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
3. `auto-height` 可以让输入框随内容自动调整高度
4. 建议使用 `@input` 事件监听输入变化

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/component/textarea.html
- **单行输入**: https://doc.dcloud.net.cn/uni-app-x/component/input.html
