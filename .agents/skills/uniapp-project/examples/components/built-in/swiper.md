# swiper 组件示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/component/swiper.html

## 概述

`swiper` 是滑块视图容器组件，常用于轮播图。

## 基础用法

```vue
<template>
  <swiper class="swiper">
    <swiper-item>
      <view class="swiper-item">1</view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item">2</view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item">3</view>
    </swiper-item>
  </swiper>
</template>

<style>
.swiper {
  height: 400px;
}
.swiper-item {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
```

## 完整示例

### 示例 1: 基础轮播图

```vue
<template>
  <swiper 
    class="swiper"
    :indicator-dots="true"
    :autoplay="true"
    :interval="3000"
    :duration="500"
  >
    <swiper-item v-for="(item, index) in bannerList" :key="index">
      <image 
        :src="item.image" 
        mode="aspectFill"
        class="swiper-image"
      ></image>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [
        { image: 'https://example.com/banner1.jpg' },
        { image: 'https://example.com/banner2.jpg' },
        { image: 'https://example.com/banner3.jpg' }
      ]
    }
  }
}
</script>

<style>
.swiper {
  height: 400px;
}
.swiper-image {
  width: 100%;
  height: 100%;
}
</style>
```

### 示例 2: 自定义指示点

```vue
<template>
  <swiper 
    class="swiper"
    :indicator-dots="true"
    indicator-color="rgba(0, 0, 0, 0.3)"
    indicator-active-color="#007aff"
  >
    <swiper-item v-for="(item, index) in list" :key="index">
      <view class="swiper-item">{{ item }}</view>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      list: ['页面1', '页面2', '页面3']
    }
  }
}
</script>
```

### 示例 3: 垂直滑动

```vue
<template>
  <swiper 
    class="swiper-vertical"
    :vertical="true"
    :indicator-dots="true"
  >
    <swiper-item v-for="(item, index) in list" :key="index">
      <view class="swiper-item">{{ item }}</view>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      list: ['页面1', '页面2', '页面3']
    }
  }
}
</script>

<style>
.swiper-vertical {
  height: 500px;
}
</style>
```

### 示例 4: 切换事件

```vue
<template>
  <view class="container">
    <swiper 
      class="swiper"
      :current="current"
      @change="handleChange"
    >
      <swiper-item v-for="(item, index) in list" :key="index">
        <view class="swiper-item">{{ item }}</view>
      </swiper-item>
    </swiper>
    <text>当前页：{{ current + 1 }} / {{ list.length }}</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      list: ['页面1', '页面2', '页面3']
    }
  },
  methods: {
    handleChange(e) {
      this.current = e.detail.current
      console.log('切换到', this.current + 1, '页')
    }
  }
}
</script>
```

### 示例 5: 图片轮播

```vue
<template>
  <swiper 
    class="swiper"
    :indicator-dots="true"
    :autoplay="true"
    :interval="3000"
    :circular="true"
    @change="handleChange"
  >
    <swiper-item 
      v-for="(item, index) in imageList" 
      :key="index"
      @click="handleImageClick(item)"
    >
      <image 
        :src="item.url" 
        mode="aspectFill"
        class="swiper-image"
      ></image>
      <view class="image-title">{{ item.title }}</view>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      imageList: [
        { url: 'https://example.com/image1.jpg', title: '标题1' },
        { url: 'https://example.com/image2.jpg', title: '标题2' },
        { url: 'https://example.com/image3.jpg', title: '标题3' }
      ]
    }
  },
  methods: {
    handleChange(e) {
      console.log('切换到', e.detail.current)
    },
    handleImageClick(item) {
      uni.previewImage({
        urls: this.imageList.map(img => img.url),
        current: item.url
      })
    }
  }
}
</script>

<style>
.swiper {
  height: 400px;
  position: relative;
}
.swiper-image {
  width: 100%;
  height: 100%;
}
.image-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.5));
  color: white;
  padding: 20px;
}
</style>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| indicator-dots | Boolean | false | 是否显示面板指示点 |
| indicator-color | String | rgba(0, 0, 0, 0.3) | 指示点颜色 |
| indicator-active-color | String | #000000 | 当前选中的指示点颜色 |
| autoplay | Boolean | false | 是否自动切换 |
| interval | Number | 5000 | 自动切换时间间隔 |
| duration | Number | 500 | 滑动动画时长 |
| circular | Boolean | false | 是否采用衔接滑动 |
| vertical | Boolean | false | 滑动方向是否为纵向 |
| current | Number | 0 | 当前所在滑块的 index |

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

1. 必须设置固定高度才能正常显示
2. `swiper-item` 内只能放置一个根元素
3. `circular` 设置为 true 时可以实现循环轮播
4. 图片轮播建议使用 `mode="aspectFill"` 保持比例

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/component/swiper.html
