# checkbox 组件示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/component/checkbox.html

## 概述

`checkbox` 是多项选择器组件，用于多选场景。

## 基础用法

```vue
<template>
  <checkbox value="option1" checked>选项1</checkbox>
</template>
```

## 完整示例

### 示例 1: 单个复选框

```vue
<template>
  <view class="container">
    <checkbox value="agree" :checked="isAgreed" @tap="handleChange">
      我已阅读并同意协议
    </checkbox>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isAgreed: false
    }
  },
  methods: {
    handleChange(e) {
      this.isAgreed = e.detail.value.length > 0
      console.log('选中状态', this.isAgreed)
    }
  }
}
</script>
```

### 示例 2: 复选框组

```vue
<template>
  <view class="container">
    <checkbox-group @change="handleGroupChange">
      <label v-for="item in options" :key="item.value" class="checkbox-item">
        <checkbox :value="item.value" :checked="item.checked" />
        <text>{{ item.label }}</text>
      </label>
    </checkbox-group>
    <text>已选择：{{ selectedValues.join(', ') }}</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { value: 'option1', label: '选项1', checked: false },
        { value: 'option2', label: '选项2', checked: false },
        { value: 'option3', label: '选项3', checked: false }
      ],
      selectedValues: []
    }
  },
  methods: {
    handleGroupChange(e) {
      this.selectedValues = e.detail.value
      console.log('选中的值', this.selectedValues)
    }
  }
}
</script>

<style>
.checkbox-item {
  display: flex;
  align-items: center;
  padding: 10px;
}
</style>
```

### 示例 3: 全选功能

```vue
<template>
  <view class="container">
    <checkbox-group @change="handleGroupChange">
      <label class="checkbox-item">
        <checkbox 
          value="all" 
          :checked="isAllSelected"
          @tap="handleSelectAll"
        />
        <text>全选</text>
      </label>
      <label 
        v-for="item in list" 
        :key="item.id"
        class="checkbox-item"
      >
        <checkbox 
          :value="item.id" 
          :checked="item.checked"
        />
        <text>{{ item.name }}</text>
      </label>
    </checkbox-group>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: '1', name: '项目1', checked: false },
        { id: '2', name: '项目2', checked: false },
        { id: '3', name: '项目3', checked: false }
      ]
    }
  },
  computed: {
    isAllSelected() {
      return this.list.every(item => item.checked)
    }
  },
  methods: {
    handleSelectAll() {
      const allSelected = this.isAllSelected
      this.list.forEach(item => {
        item.checked = !allSelected
      })
    },
    handleGroupChange(e) {
      const selectedIds = e.detail.value.filter(id => id !== 'all')
      this.list.forEach(item => {
        item.checked = selectedIds.includes(item.id)
      })
    }
  }
}
</script>
```

### 示例 4: 在表单中使用

```vue
<template>
  <form @submit="handleSubmit">
    <view class="form-item">
      <text>兴趣爱好：</text>
      <checkbox-group name="hobbies" @change="handleHobbiesChange">
        <label v-for="hobby in hobbies" :key="hobby.value" class="checkbox-item">
          <checkbox :value="hobby.value" />
          <text>{{ hobby.label }}</text>
        </label>
      </checkbox-group>
    </view>
    <button form-type="submit">提交</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      hobbies: [
        { value: 'reading', label: '阅读' },
        { value: 'music', label: '音乐' },
        { value: 'sports', label: '运动' },
        { value: 'travel', label: '旅行' }
      ],
      selectedHobbies: []
    }
  },
  methods: {
    handleHobbiesChange(e) {
      this.selectedHobbies = e.detail.value
    },
    handleSubmit(e) {
      console.log('选中的兴趣爱好', this.selectedHobbies)
    }
  }
}
</script>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | String | - | checkbox 标识，选中时触发 change 事件，并携带 value |
| checked | Boolean | false | 当前是否选中 |
| disabled | Boolean | false | 是否禁用 |
| color | String | #007aff | checkbox 的颜色 |

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

1. 需要配合 `checkbox-group` 使用才能获取选中的值
2. `value` 用于标识不同的选项
3. `checked` 属性控制选中状态
4. 可以通过 `@change` 事件监听变化

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/component/checkbox.html
- **表单组件**: https://uniapp.dcloud.net.cn/component/form.html
