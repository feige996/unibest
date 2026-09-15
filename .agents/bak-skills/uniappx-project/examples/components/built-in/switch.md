# switch 组件示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/component/switch.html

## 概述

`switch` 是开关选择器组件，用于两种状态的切换。

## 基础用法

```vue
<template>
  <switch :checked="isChecked" @change="handleChange" />
</template>

<script>
export default {
  data() {
    return {
      isChecked: false
    }
  },
  methods: {
    handleChange(e) {
      this.isChecked = e.detail.value
    }
  }
}
</script>
```

## 完整示例

### 示例 1: 基本开关

```vue
<template>
  <view class="container">
    <view class="switch-item">
      <text>通知开关</text>
      <switch :checked="notifyEnabled" @change="handleNotifyChange" />
    </view>
    <view class="switch-item">
      <text>声音开关</text>
      <switch :checked="soundEnabled" @change="handleSoundChange" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      notifyEnabled: true,
      soundEnabled: false
    }
  },
  methods: {
    handleNotifyChange(e) {
      this.notifyEnabled = e.detail.value
      console.log('通知开关', this.notifyEnabled)
    },
    handleSoundChange(e) {
      this.soundEnabled = e.detail.value
      console.log('声音开关', this.soundEnabled)
    }
  }
}
</script>

<style>
.switch-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
</style>
```

### 示例 2: 自定义颜色

```vue
<template>
  <view class="container">
    <view class="switch-item">
      <text>默认颜色</text>
      <switch :checked="checked1" @change="checked1 = $event.detail.value" />
    </view>
    <view class="switch-item">
      <text>自定义颜色</text>
      <switch 
        :checked="checked2" 
        color="#ff3b30"
        @change="checked2 = $event.detail.value" 
      />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: false
    }
  }
}
</script>
```

### 示例 3: 禁用状态

```vue
<template>
  <view class="container">
    <view class="switch-item">
      <text>可用开关</text>
      <switch :checked="checked" @change="handleChange" />
    </view>
    <view class="switch-item">
      <text>禁用开关</text>
      <switch :checked="checked" disabled />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    }
  },
  methods: {
    handleChange(e) {
      this.checked = e.detail.value
    }
  }
}
</script>
```

### 示例 4: 设置项列表

```vue
<template>
  <view class="container">
    <view 
      v-for="item in settings" 
      :key="item.key"
      class="setting-item"
    >
      <view class="setting-info">
        <text class="setting-title">{{ item.title }}</text>
        <text class="setting-desc">{{ item.desc }}</text>
      </view>
      <switch 
        :checked="item.value" 
        @change="handleSettingChange(item.key, $event.detail.value)"
      />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      settings: [
        {
          key: 'notify',
          title: '消息通知',
          desc: '接收新消息通知',
          value: true
        },
        {
          key: 'sound',
          title: '声音提醒',
          desc: '收到消息时播放声音',
          value: false
        },
        {
          key: 'vibrate',
          title: '震动提醒',
          desc: '收到消息时震动',
          value: true
        }
      ]
    }
  },
  methods: {
    handleSettingChange(key, value) {
      const item = this.settings.find(s => s.key === key)
      if (item) {
        item.value = value
        // 保存设置
        uni.setStorageSync(`setting_${key}`, value)
        console.log(`设置 ${key} 已更新为`, value)
      }
    }
  },
  onLoad() {
    // 加载保存的设置
    this.settings.forEach(item => {
      const saved = uni.getStorageSync(`setting_${item.key}`)
      if (saved !== '') {
        item.value = saved
      }
    })
  }
}
</script>

<style>
.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
.setting-info {
  flex: 1;
  margin-right: 20px;
}
.setting-title {
  display: block;
  font-size: 32rpx;
  color: #333;
  margin-bottom: 10rpx;
}
.setting-desc {
  display: block;
  font-size: 24rpx;
  color: #999;
}
</style>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| checked | Boolean | false | 是否选中 |
| disabled | Boolean | false | 是否禁用 |
| type | String | switch | 样式类型，可选值：switch、checkbox |
| color | String | #007aff | switch 的颜色 |

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

1. `checked` 属性控制开关状态
2. `@change` 事件返回 `e.detail.value` 为布尔值
3. 可以通过 `color` 自定义开关颜色
4. `disabled` 为 true 时开关不可操作

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/component/switch.html
