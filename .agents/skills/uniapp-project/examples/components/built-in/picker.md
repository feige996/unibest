# picker 组件示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/component/picker.html

## 概述

`picker` 是滚动选择器组件，支持普通选择器、多列选择器、时间选择器、日期选择器等。

## 基础用法

```vue
<template>
  <picker mode="selector" :range="options" @change="handleChange">
    <view>请选择</view>
  </picker>
</template>

<script>
export default {
  data() {
    return {
      options: ['选项1', '选项2', '选项3']
    }
  },
  methods: {
    handleChange(e) {
      console.log('选中的索引', e.detail.value)
    }
  }
}
</script>
```

## 完整示例

### 示例 1: 普通选择器

```vue
<template>
  <view class="container">
    <picker 
      mode="selector" 
      :range="options"
      :value="selectedIndex"
      @change="handleChange"
    >
      <view class="picker-view">
        <text>{{ selectedText || '请选择' }}</text>
        <text class="arrow">></text>
      </view>
    </picker>
  </view>
</template>

<script>
export default {
  data() {
    return {
      options: ['选项1', '选项2', '选项3', '选项4'],
      selectedIndex: 0,
      selectedText: ''
    }
  },
  methods: {
    handleChange(e) {
      this.selectedIndex = e.detail.value
      this.selectedText = this.options[e.detail.value]
      console.log('选中的值', this.selectedText)
    }
  }
}
</script>

<style>
.picker-view {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
.arrow {
  color: #999;
}
</style>
```

### 示例 2: 多列选择器

```vue
<template>
  <view class="container">
    <picker 
      mode="multiSelector" 
      :range="multiArray"
      :value="multiIndex"
      @change="handleMultiChange"
      @columnchange="handleColumnChange"
    >
      <view class="picker-view">
        <text>{{ displayText || '请选择省市区' }}</text>
        <text class="arrow">></text>
      </view>
    </picker>
  </view>
</template>

<script>
export default {
  data() {
    return {
      multiArray: [
        ['北京', '上海', '广东'],
        ['朝阳区', '海淀区', '丰台区'],
        ['街道1', '街道2', '街道3']
      ],
      multiIndex: [0, 0, 0],
      displayText: ''
    }
  },
  methods: {
    handleMultiChange(e) {
      this.multiIndex = e.detail.value
      this.updateDisplayText()
    },
    handleColumnChange(e) {
      // 当某一列改变时，可以更新其他列的数据
      const column = e.detail.column
      const row = e.detail.value
      this.multiIndex[column] = row
      this.updateDisplayText()
    },
    updateDisplayText() {
      this.displayText = this.multiArray.map((arr, index) => {
        return arr[this.multiIndex[index]]
      }).join(' ')
    }
  }
}
</script>
```

### 示例 3: 时间选择器

```vue
<template>
  <view class="container">
    <picker 
      mode="time" 
      :value="time"
      @change="handleTimeChange"
    >
      <view class="picker-view">
        <text>{{ time || '请选择时间' }}</text>
        <text class="arrow">></text>
      </view>
    </picker>
  </view>
</template>

<script>
export default {
  data() {
    return {
      time: ''
    }
  },
  methods: {
    handleTimeChange(e) {
      this.time = e.detail.value
      console.log('选择的时间', this.time)
    }
  }
}
</script>
```

### 示例 4: 日期选择器

```vue
<template>
  <view class="container">
    <picker 
      mode="date" 
      :value="date"
      :start="startDate"
      :end="endDate"
      @change="handleDateChange"
    >
      <view class="picker-view">
        <text>{{ date || '请选择日期' }}</text>
        <text class="arrow">></text>
      </view>
    </picker>
  </view>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      startDate: '2020-01-01',
      endDate: '2030-12-31'
    }
  },
  methods: {
    handleDateChange(e) {
      this.date = e.detail.value
      console.log('选择的日期', this.date)
    }
  }
}
</script>
```

### 示例 5: 地区选择器

```vue
<template>
  <view class="container">
    <picker 
      mode="region" 
      :value="region"
      @change="handleRegionChange"
    >
      <view class="picker-view">
        <text>{{ regionText || '请选择地区' }}</text>
        <text class="arrow">></text>
      </view>
    </picker>
  </view>
</template>

<script>
export default {
  data() {
    return {
      region: [],
      regionText: ''
    }
  },
  methods: {
    handleRegionChange(e) {
      this.region = e.detail.value
      this.regionText = e.detail.value.join(' ')
      console.log('选择的地区', this.region)
    }
  }
}
</script>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| mode | String | selector | 选择器类型，可选值：selector、multiSelector、time、date、region |
| range | Array | [] | mode 为 selector 或 multiSelector 时，range 有效 |
| value | Number/Array | 0 | 表示选择了 range 中的第几个（下标从 0 开始） |
| start | String | - | 有效值范围的开始，字符串格式为 "YYYY-MM-DD" |
| end | String | - | 有效值范围的结束，字符串格式为 "YYYY-MM-DD" |

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

1. `mode` 不同，`range` 和 `value` 的格式也不同
2. 时间选择器的 `value` 格式为 "HH:mm"
3. 日期选择器的 `value` 格式为 "YYYY-MM-DD"
4. 多列选择器需要配合 `@columnchange` 事件处理联动

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/component/picker.html
- **滚动选择器**: https://uniapp.dcloud.net.cn/component/picker-view.html
