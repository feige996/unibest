# video 组件示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/component/video.html

## 概述

`video` 是视频播放组件，用于播放视频内容。

## 基础用法

```vue
<template>
  <video 
    src="https://example.com/video.mp4"
    controls
  ></video>
</template>
```

## 完整示例

### 示例 1: 基本视频播放

```vue
<template>
  <view class="container">
    <video 
      :src="videoSrc"
      controls
      class="video-player"
    ></video>
  </view>
</template>

<script>
export default {
  data() {
    return {
      videoSrc: 'https://example.com/video.mp4'
    }
  }
}
</script>

<style>
.video-player {
  width: 100%;
  height: 400px;
}
</style>
```

### 示例 2: 视频播放控制

```vue
<template>
  <view class="container">
    <video 
      :src="videoSrc"
      :controls="showControls"
      :autoplay="autoplay"
      :loop="loop"
      :muted="muted"
      :poster="poster"
      @play="handlePlay"
      @pause="handlePause"
      @ended="handleEnded"
      class="video-player"
    ></video>
    <view class="controls">
      <button @click="togglePlay">{{ isPlaying ? '暂停' : '播放' }}</button>
      <button @click="toggleMute">{{ muted ? '取消静音' : '静音' }}</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      videoSrc: 'https://example.com/video.mp4',
      showControls: true,
      autoplay: false,
      loop: false,
      muted: false,
      poster: 'https://example.com/poster.jpg',
      isPlaying: false
    }
  },
  methods: {
    handlePlay() {
      this.isPlaying = true
      console.log('视频开始播放')
    },
    handlePause() {
      this.isPlaying = false
      console.log('视频暂停')
    },
    handleEnded() {
      this.isPlaying = false
      console.log('视频播放结束')
    },
    togglePlay() {
      // 需要通过 ref 调用视频组件的方法
      this.$refs.video.play()
    },
    toggleMute() {
      this.muted = !this.muted
    }
  }
}
</script>
```

### 示例 3: 视频列表

```vue
<template>
  <view class="container">
    <view 
      v-for="(item, index) in videoList" 
      :key="index"
      class="video-item"
    >
      <video 
        :src="item.src"
        :poster="item.poster"
        controls
        class="video-player"
        @play="handleVideoPlay(index)"
      ></video>
      <text class="video-title">{{ item.title }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      videoList: [
        {
          src: 'https://example.com/video1.mp4',
          poster: 'https://example.com/poster1.jpg',
          title: '视频1'
        },
        {
          src: 'https://example.com/video2.mp4',
          poster: 'https://example.com/poster2.jpg',
          title: '视频2'
        }
      ]
    }
  },
  methods: {
    handleVideoPlay(index) {
      console.log('播放视频', index)
    }
  }
}
</script>

<style>
.video-item {
  margin-bottom: 20px;
}
.video-player {
  width: 100%;
  height: 400px;
}
.video-title {
  display: block;
  padding: 10px;
  font-size: 32rpx;
}
</style>
```

### 示例 4: 全屏播放

```vue
<template>
  <view class="container">
    <video 
      :src="videoSrc"
      controls
      :show-fullscreen-btn="true"
      :enable-play-gesture="true"
      @fullscreenchange="handleFullscreenChange"
      class="video-player"
    ></video>
  </view>
</template>

<script>
export default {
  data() {
    return {
      videoSrc: 'https://example.com/video.mp4',
      isFullscreen: false
    }
  },
  methods: {
    handleFullscreenChange(e) {
      this.isFullscreen = e.detail.fullScreen
      console.log('全屏状态', this.isFullscreen)
    }
  }
}
</script>
```

### 示例 5: 视频弹幕

```vue
<template>
  <view class="container">
    <video 
      :src="videoSrc"
      :danmu-list="danmuList"
      :enable-danmu="true"
      :danmu-btn="true"
      controls
      class="video-player"
    ></video>
  </view>
</template>

<script>
export default {
  data() {
    return {
      videoSrc: 'https://example.com/video.mp4',
      danmuList: [
        {
          text: '第一条弹幕',
          color: '#ff0000',
          time: 1
        },
        {
          text: '第二条弹幕',
          color: '#00ff00',
          time: 3
        }
      ]
    }
  }
}
</script>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| src | String | - | 要播放视频的资源地址 |
| controls | Boolean | true | 是否显示默认播放控件 |
| autoplay | Boolean | false | 是否自动播放 |
| loop | Boolean | false | 是否循环播放 |
| muted | Boolean | false | 是否静音播放 |
| poster | String | - | 视频封面的图片网络资源地址 |
| show-fullscreen-btn | Boolean | true | 是否显示全屏按钮 |
| enable-play-gesture | Boolean | false | 是否开启播放手势 |

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

1. 视频地址需要配置合法域名
2. `autoplay` 在某些平台可能不生效
3. 建议设置 `poster` 作为视频封面
4. 可以通过事件监听播放状态

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/component/video.html
- **选择视频**: https://uniapp.dcloud.net.cn/api/media/video.html#choosevideo
