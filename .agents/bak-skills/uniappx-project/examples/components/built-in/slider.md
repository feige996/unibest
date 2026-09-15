# slider 组件示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/component/slider.html

## 概述

`slider` 是滑动选择器组件，用于选择数值。

## 基础用法

```vue
<template>
  <slider :value="50" @change="handleChange" />
</template>

<script>
export default {
  methods: {
    handleChange(e) {
      console.log('当前值', e.detail.value)
    }
  }
}
</script>
```

## 完整示例

### 示例 1: 基本滑动条

```vue
<template>
  <view class="container">
    <slider :value="value" @change="handleChange" />
    <text>当前值：{{ value }}</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value: 50
    }
  },
  methods: {
    handleChange(e) {
      this.value = e.detail.value
    }
  }
}
</script>
```

### 示例 2: 设置范围

```vue
<template>
  <view class="container">
    <slider 
      :value="value"
      min="0"
      max="100"
      step="5"
      @change="handleChange"
    />
    <text>当前值：{{ value }}</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value: 50
    }
  },
  methods: {
    handleChange(e) {
      this.value = e.detail.value
    }
  }
}
</script>
```

### 示例 3: 音量控制

```vue
<template>
  <view class="container">
    <view class="volume-control">
      <text>音量：{{ volume }}%</text>
      <slider 
        :value="volume"
        min="0"
        max="100"
        activeColor="#007aff"
        backgroundColor="#ebebeb"
        block-color="#007aff"
        @change="handleVolumeChange"
      />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      volume: 50
    }
  },
  methods: {
    handleVolumeChange(e) {
      this.volume = e.detail.value
      // 可以在这里控制实际音量
      console.log('音量设置为', this.volume)
    }
  }
}
</script>

<style>
.volume-control {
  padding: 20px;
}
</style>
```

### 示例 4: 亮度控制

```vue
<template>
  <view class="container">
    <view class="brightness-control">
      <text>亮度：{{ brightness }}%</text>
      <slider 
        :value="brightness"
        min="0"
        max="100"
        @change="handleBrightnessChange"
      />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      brightness: 50
    }
  },
  methods: {
    handleBrightnessChange(e) {
      this.brightness = e.detail.value
      // 设置屏幕亮度
      uni.setScreenBrightness({
        value: this.brightness / 100,
        success: () => {
          console.log('亮度已设置')
        }
      })
    }
  }
}
</script>
```

### 示例 5: 价格区间选择

```vue
<template>
  <view class="container">
    <view class="price-range">
      <text>价格区间：{{ minPrice }} - {{ maxPrice }}</text>
      <slider 
        :value="minPrice"
        min="0"
        max="1000"
        step="10"
        @change="handleMinPriceChange"
      />
      <text>最低价格：{{ minPrice }}</text>
      <slider 
        :value="maxPrice"
        min="0"
        max="1000"
        step="10"
        @change="handleMaxPriceChange"
      />
      <text>最高价格：{{ maxPrice }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      minPrice: 0,
      maxPrice: 1000
    }
  },
  methods: {
    handleMinPriceChange(e) {
      const value = e.detail.value
      if (value <= this.maxPrice) {
        this.minPrice = value
      }
    },
    handleMaxPriceChange(e) {
      const value = e.detail.value
      if (value >= this.minPrice) {
        this.maxPrice = value
      }
    }
  }
}
</script>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| min | Number | 0 | 最小值 |
| max | Number | 100 | 最大值 |
| step | Number | 1 | 步长，取值必须大于 0，并且可被(max - min)整除 |
| value | Number | 0 | 当前值 |
| activeColor | String | #007aff | 已选择的颜色 |
| backgroundColor | String | #ebebeb | 背景条的颜色 |
| block-size | Number | 28 | 滑块的大小，取值范围为 12 - 28 |
| block-color | String | #ffffff | 滑块的颜色 |

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

1. `value` 必须在 `min` 和 `max` 之间
2. `step` 必须能被 `(max - min)` 整除
3. 可以通过 `@change` 事件监听值的变化
4. 适合用于音量、亮度、价格区间等场景

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/component/slider.html
