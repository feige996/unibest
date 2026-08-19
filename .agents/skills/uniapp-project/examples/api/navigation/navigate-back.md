# uni.navigateBack - 返回上一页示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/router.html#navigateback

## 概述

`uni.navigateBack` 用于关闭当前页面，返回上一页面或多级页面。

## 基础用法

```javascript
uni.navigateBack()
```

## 完整示例

### 示例 1: 基本返回

```javascript
uni.navigateBack({
  success: () => {
    console.log('返回成功')
  },
  fail: (err) => {
    console.error('返回失败', err)
  }
})
```

### 示例 2: 返回多级页面

```javascript
// 返回上一页
uni.navigateBack({
  delta: 1
})

// 返回上两页
uni.navigateBack({
  delta: 2
})
```

### 示例 3: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="goBack">返回</button>
    <button @click="goBackTwoPages">返回上两页</button>
  </view>
</template>

<script>
export default {
  methods: {
    goBack() {
      uni.navigateBack()
    },
    goBackTwoPages() {
      uni.navigateBack({
        delta: 2
      })
    }
  }
}
</script>
```

### 示例 4: 带数据返回

```vue
<!-- 当前页面 -->
<template>
  <view class="container">
    <button @click="saveAndBack">保存并返回</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: 'test',
        value: '123'
      }
    }
  },
  methods: {
    saveAndBack() {
      // 保存数据到上一页
      const pages = getCurrentPages()
      const prevPage = pages[pages.length - 2]
      if (prevPage) {
        prevPage.setData({
          savedData: this.formData
        })
      }
      
      uni.navigateBack()
    }
  }
}
</script>
```

### 示例 5: 返回前确认

```vue
<template>
  <view class="container">
    <button @click="handleBack">返回</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      hasChanges: false
    }
  },
  methods: {
    handleBack() {
      if (this.hasChanges) {
        uni.showModal({
          title: '提示',
          content: '有未保存的更改，确定要返回吗？',
          success: (res) => {
            if (res.confirm) {
              uni.navigateBack()
            }
          }
        })
      } else {
        uni.navigateBack()
      }
    }
  }
}
</script>
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| delta | Number | 否 | 返回的页面数，如果 delta 大于现有页面数，则返回到首页 |

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

1. `delta` 默认为 1，表示返回上一页
2. 如果 `delta` 大于现有页面数，会返回到首页
3. 可以通过 `getCurrentPages()` 获取页面栈信息
4. 返回时可以传递数据给上一页

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/router.html#navigateback
- **页面跳转**: https://uniapp.dcloud.net.cn/api/router.html#navigateto
