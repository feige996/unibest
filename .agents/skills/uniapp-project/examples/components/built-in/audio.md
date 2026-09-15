# audio 组件示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/component/audio.html

## 概述

`audio` 是音频播放组件，用于播放音频。

## 基础用法

```vue
<template>
  <audio src="https://example.com/audio.mp3" controls></audio>
</template>
```

## 完整示例

### 示例 1: 基本音频播放

```vue
<template>
  <view class="container">
    <audio 
      :src="audioSrc"
      controls
      class="audio-player"
    ></audio>
  </view>
</template>

<script>
export default {
  data() {
    return {
      audioSrc: 'https://example.com/audio.mp3'
    }
  }
}
</script>

<style>
.audio-player {
  width: 100%;
}
</style>
```

### 示例 2: 音频播放控制

```vue
<template>
  <view class="container">
    <audio 
      :src="audioSrc"
      :controls="showControls"
      :autoplay="autoplay"
      :loop="loop"
      @play="handlePlay"
      @pause="handlePause"
      @ended="handleEnded"
      class="audio-player"
    ></audio>
    <view class="controls">
      <button @click="togglePlay">{{ isPlaying ? '暂停' : '播放' }}</button>
      <button @click="toggleLoop">{{ loop ? '取消循环' : '循环播放' }}</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      audioSrc: 'https://example.com/audio.mp3',
      showControls: true,
      autoplay: false,
      loop: false,
      isPlaying: false
    }
  },
  methods: {
    handlePlay() {
      this.isPlaying = true
      console.log('音频开始播放')
    },
    handlePause() {
      this.isPlaying = false
      console.log('音频暂停')
    },
    handleEnded() {
      this.isPlaying = false
      console.log('音频播放结束')
    },
    togglePlay() {
      // 需要通过 ref 调用音频组件的方法
      if (this.isPlaying) {
        this.$refs.audio.pause()
      } else {
        this.$refs.audio.play()
      }
    },
    toggleLoop() {
      this.loop = !this.loop
    }
  }
}
</script>
```

### 示例 3: 音频列表

```vue
<template>
  <view class="container">
    <view 
      v-for="(item, index) in audioList" 
      :key="index"
      class="audio-item"
    >
      <text class="audio-title">{{ item.title }}</text>
      <audio 
        :src="item.src"
        controls
        class="audio-player"
        @play="handleAudioPlay(index)"
      ></audio>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      audioList: [
        {
          src: 'https://example.com/audio1.mp3',
          title: '音频1'
        },
        {
          src: 'https://example.com/audio2.mp3',
          title: '音频2'
        }
      ]
    }
  },
  methods: {
    handleAudioPlay(index) {
      console.log('播放音频', index)
    }
  }
}
</script>

<style>
.audio-item {
  margin-bottom: 20px;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
.audio-title {
  display: block;
  font-size: 32rpx;
  margin-bottom: 10px;
}
.audio-player {
  width: 100%;
}
</style>
```

### 示例 4: 播放进度显示

```vue
<template>
  <view class="container">
    <audio 
      :src="audioSrc"
      controls
      @timeupdate="handleTimeUpdate"
      class="audio-player"
    ></audio>
    <view class="progress-info">
      <text>播放进度：{{ currentTime }}s / {{ duration }}s</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      audioSrc: 'https://example.com/audio.mp3',
      currentTime: 0,
      duration: 0
    }
  },
  methods: {
    handleTimeUpdate(e) {
      this.currentTime = e.detail.currentTime
      this.duration = e.detail.duration
    }
  }
}
</script>
```

### 示例 5: 自定义播放器

```vue
<template>
  <view class="container">
    <view class="custom-player">
      <text class="audio-title">{{ currentAudio.title }}</text>
      <view class="player-controls">
        <button @click="playPrevious">上一首</button>
        <button @click="togglePlay">{{ isPlaying ? '暂停' : '播放' }}</button>
        <button @click="playNext">下一首</button>
      </view>
      <audio 
        ref="audio"
        :src="currentAudio.src"
        :autoplay="autoplay"
        @play="handlePlay"
        @pause="handlePause"
        @ended="handleEnded"
      ></audio>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      audioList: [
        { src: 'https://example.com/audio1.mp3', title: '音频1' },
        { src: 'https://example.com/audio2.mp3', title: '音频2' },
        { src: 'https://example.com/audio3.mp3', title: '音频3' }
      ],
      currentIndex: 0,
      isPlaying: false,
      autoplay: false
    }
  },
  computed: {
    currentAudio() {
      return this.audioList[this.currentIndex]
    }
  },
  methods: {
    togglePlay() {
      if (this.isPlaying) {
        this.$refs.audio.pause()
      } else {
        this.$refs.audio.play()
      }
    },
    playPrevious() {
      this.currentIndex = (this.currentIndex - 1 + this.audioList.length) % this.audioList.length
      this.autoplay = true
    },
    playNext() {
      this.currentIndex = (this.currentIndex + 1) % this.audioList.length
      this.autoplay = true
    },
    handlePlay() {
      this.isPlaying = true
      this.autoplay = false
    },
    handlePause() {
      this.isPlaying = false
    },
    handleEnded() {
      this.isPlaying = false
      // 自动播放下一首
      this.playNext()
    }
  }
}
</script>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| src | String | - | 要播放音频的资源地址 |
| controls | Boolean | false | 是否显示默认播放控件 |
| autoplay | Boolean | false | 是否自动播放 |
| loop | Boolean | false | 是否循环播放 |
| muted | Boolean | false | 是否静音播放 |

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

1. 音频地址需要配置合法域名
2. `autoplay` 在某些平台可能不生效
3. 可以通过事件监听播放状态
4. 建议使用 `controls` 显示播放控件

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/component/audio.html
