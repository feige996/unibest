# image 组件示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/component/image.html

## 概述

`image` 是图片组件，用于显示图片。

## 基础用法

```vue
<template>
  <image src="/static/logo.png" mode="aspectFit"></image>
</template>
```

## 完整示例

### 示例 1: 图片显示模式

```vue
<template>
  <view class="container">
    <view class="image-item">
      <text>scaleToFill（默认）</text>
      <image 
        src="/static/logo.png" 
        mode="scaleToFill"
        style="width: 200px; height: 200px;"
      ></image>
    </view>
    
    <view class="image-item">
      <text>aspectFit</text>
      <image 
        src="/static/logo.png" 
        mode="aspectFit"
        style="width: 200px; height: 200px;"
      ></image>
    </view>
    
    <view class="image-item">
      <text>aspectFill</text>
      <image 
        src="/static/logo.png" 
        mode="aspectFill"
        style="width: 200px; height: 200px;"
      ></image>
    </view>
    
    <view class="image-item">
      <text>widthFix</text>
      <image 
        src="/static/logo.png" 
        mode="widthFix"
        style="width: 200px;"
      ></image>
    </view>
  </view>
</template>

<style>
.container {
  padding: 20px;
}
.image-item {
  margin-bottom: 30px;
}
</style>
```

### 示例 2: 图片列表

```vue
<template>
  <view class="container">
    <view class="image-list">
      <image 
        v-for="(item, index) in imageList" 
        :key="index"
        :src="item"
        mode="aspectFill"
        class="image-item"
        @click="previewImage(index)"
      ></image>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      imageList: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
      ]
    }
  },
  methods: {
    previewImage(index) {
      uni.previewImage({
        current: index,
        urls: this.imageList
      })
    }
  }
}
</script>

<style>
.image-list {
  display: flex;
  flex-wrap: wrap;
}
.image-item {
  width: 200rpx;
  height: 200rpx;
  margin: 10rpx;
  border-radius: 8rpx;
}
</style>
```

### 示例 3: 图片懒加载

```vue
<template>
  <scroll-view scroll-y class="scroll-view">
    <image 
      v-for="(item, index) in imageList" 
      :key="index"
      :src="item"
      mode="aspectFill"
      lazy-load
      class="lazy-image"
    ></image>
  </scroll-view>
</template>

<script>
export default {
  data() {
    return {
      imageList: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        // ... 更多图片
      ]
    }
  }
}
</script>

<style>
.scroll-view {
  height: 100vh;
}
.lazy-image {
  width: 100%;
  height: 400rpx;
  margin-bottom: 20rpx;
}
</style>
```

### 示例 4: 图片加载和错误处理

```vue
<template>
  <view class="container">
    <image 
      :src="imageUrl"
      mode="aspectFit"
      @load="handleLoad"
      @error="handleError"
      :class="{ 'error-image': hasError }"
    ></image>
    <text v-if="hasError" class="error-text">图片加载失败</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'https://example.com/image.jpg',
      hasError: false
    }
  },
  methods: {
    handleLoad(e) {
      console.log('图片加载成功', e.detail)
      this.hasError = false
    },
    handleError(e) {
      console.error('图片加载失败', e.detail)
      this.hasError = true
    }
  }
}
</script>

<style>
.error-image {
  background-color: #f5f5f5;
}
.error-text {
  color: #ff3b30;
  font-size: 24rpx;
  margin-top: 10rpx;
}
</style>
```

### 示例 5: 占位图和加载状态

```vue
<template>
  <view class="container">
    <view class="image-wrapper">
      <image 
        v-if="!imageLoaded"
        src="/static/placeholder.png"
        mode="aspectFit"
        class="placeholder"
      ></image>
      <image 
        :src="imageUrl"
        mode="aspectFit"
        @load="imageLoaded = true"
        :class="{ 'hidden': !imageLoaded }"
        class="main-image"
      ></image>
      <view v-if="loading" class="loading">加载中...</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'https://example.com/image.jpg',
      imageLoaded: false,
      loading: true
    }
  },
  methods: {
    handleLoad() {
      this.imageLoaded = true
      this.loading = false
    }
  }
}
</script>

<style>
.image-wrapper {
  position: relative;
  width: 400rpx;
  height: 400rpx;
}
.placeholder {
  width: 100%;
  height: 100%;
}
.main-image {
  width: 100%;
  height: 100%;
}
.hidden {
  display: none;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #999;
}
</style>
```

### 示例 6: 网络图片和本地图片

```vue
<template>
  <view class="container">
    <!-- 本地图片 -->
    <image src="/static/logo.png" mode="aspectFit"></image>
    
    <!-- 网络图片 -->
    <image 
      src="https://example.com/image.jpg" 
      mode="aspectFit"
    ></image>
    
    <!-- 动态图片 -->
    <image 
      :src="dynamicImageUrl" 
      mode="aspectFit"
    ></image>
  </view>
</template>

<script>
export default {
  data() {
    return {
      dynamicImageUrl: 'https://example.com/image.jpg'
    }
  }
}
</script>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| src | String | - | 图片资源地址 |
| mode | String | scaleToFill | 图片裁剪、缩放的模式 |
| lazy-load | Boolean | false | 图片懒加载 |
| webp | Boolean | false | 是否启用 webp 格式 |

## mode 可选值

| 值 | 说明 |
|----|------|
| scaleToFill | 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素 |
| aspectFit | 保持纵横比缩放图片，使图片的长边能完全显示出来 |
| aspectFill | 保持纵横比缩放图片，只保证图片的短边能完全显示出来 |
| widthFix | 宽度不变，高度自动变化，保持原图宽高比不变 |
| heightFix | 高度不变，宽度自动变化，保持原图宽高比不变 |
| top | 不缩放图片，只显示图片的顶部区域 |
| bottom | 不缩放图片，只显示图片的底部区域 |
| center | 不缩放图片，只显示图片的中间区域 |
| left | 不缩放图片，只显示图片的左边区域 |
| right | 不缩放图片，只显示图片的右边区域 |
| top left | 不缩放图片，只显示图片的左上边区域 |
| top right | 不缩放图片，只显示图片的右上边区域 |
| bottom left | 不缩放图片，只显示图片的左下边区域 |
| bottom right | 不缩放图片，只显示图片的右下边区域 |

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

1. 网络图片需要配置合法域名
2. 本地图片路径需要使用 `/static/` 开头
3. `lazy-load` 只对 page 和 scroll-view 下的 image 有效
4. 建议使用合适的 `mode` 值以优化显示效果

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/component/image.html
- **预览图片**: https://doc.dcloud.net.cn/uni-app-x/api/media/image.html#previewimage
