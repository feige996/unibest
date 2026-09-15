# progress 组件示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/component/progress.html

## 概述

`progress` 是进度条组件，用于显示任务进度。

## 基础用法

```vue
<template>
  <progress :percent="50"></progress>
</template>
```

## 完整示例

### 示例 1: 基本进度条

```vue
<template>
  <view class="container">
    <progress :percent="progress" />
    <text>{{ progress }}%</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      progress: 50
    }
  }
}
</script>
```

### 示例 2: 显示进度百分比

```vue
<template>
  <view class="container">
    <progress :percent="progress" :show-info="true" />
    <button @click="increaseProgress">增加进度</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      progress: 0
    }
  },
  methods: {
    increaseProgress() {
      if (this.progress < 100) {
        this.progress += 10
      }
    }
  }
}
</script>
```

### 示例 3: 不同颜色

```vue
<template>
  <view class="container">
    <progress :percent="50" color="#007aff" />
    <progress :percent="60" color="#4cd964" />
    <progress :percent="70" color="#ff3b30" />
  </view>
</template>
```

### 示例 4: 文件上传进度

```vue
<template>
  <view class="container">
    <progress :percent="uploadProgress" :show-info="true" />
    <button @click="uploadFile">上传文件</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      uploadProgress: 0
    }
  },
  methods: {
    uploadFile() {
      uni.chooseImage({
        count: 1,
        success: (res) => {
          const tempFilePath = res.tempFilePaths[0]
          this.uploadProgress = 0
          
          // 模拟上传进度
          const interval = setInterval(() => {
            this.uploadProgress += 10
            if (this.uploadProgress >= 100) {
              clearInterval(interval)
              uni.showToast({
                title: '上传完成',
                icon: 'success'
              })
            }
          }, 200)
          
          // 实际上传
          uni.uploadFile({
            url: 'https://api.example.com/upload',
            filePath: tempFilePath,
            name: 'file',
            success: () => {
              clearInterval(interval)
              this.uploadProgress = 100
            }
          })
        }
      })
    }
  }
}
</script>
```

### 示例 5: 动画进度条

```vue
<template>
  <view class="container">
    <progress 
      :percent="progress" 
      :active="true"
      :active-color="activeColor"
    />
    <button @click="startProgress">开始进度</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
      activeColor: '#007aff'
    }
  },
  methods: {
    startProgress() {
      this.progress = 0
      const interval = setInterval(() => {
        this.progress += 2
        if (this.progress >= 100) {
          clearInterval(interval)
          this.activeColor = '#4cd964'
        }
      }, 100)
    }
  }
}
</script>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| percent | Number | 0 | 百分比 0~100 |
| show-info | Boolean | false | 在进度条右侧显示百分比 |
| stroke-width | Number | 6 | 进度条线的宽度，单位 px |
| active | Boolean | false | 进度条是否显示动画 |
| active-color | String | #007aff | 已选择的进度条的颜色 |
| backgroundColor | String | #ebebeb | 未选择的进度条的颜色 |

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

1. `percent` 值范围是 0-100
2. `show-info` 可以在右侧显示百分比文字
3. `active` 可以启用动画效果
4. 可以通过 `active-color` 自定义颜色

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/component/progress.html
