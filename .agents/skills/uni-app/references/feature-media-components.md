---
name: Media Components
description: Image, video, audio, and camera components
---

# Media Components

## image

Display images with various mode options.

```vue
<template>
  <!-- Basic usage -->
  <image src="/static/logo.png" mode="aspectFit" />

  <!-- With event handling -->
  <image
    :src="imageUrl"
    mode="aspectFill"
    :lazy-load="true"
    :show-menu-by-longpress="true"
    @load="onImageLoad"
    @error="onImageError"
  />
</template>
```

**Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| src | String | | Image source URL |
| mode | String | scaleToFill | Display mode (see below) |
| lazy-load | Boolean | false | Lazy load image |
| show-menu-by-longpress | Boolean | false | Show menu on long press |
| webp | Boolean | false | Parse WebP format (Android) |

**Mode Values:**

| Mode | Description |
|------|-------------|
| scaleToFill | Fill container, may distort |
| aspectFit | Contain within container |
| aspectFill | Cover container, may clip |
| widthFix | Width fixed, height auto |
| heightFix | Height fixed, width auto |
| top / bottom / center / left / right | Align to position |
| top left / top right / bottom left / bottom right | Corner alignment |

**Events:**
- `@load` - Image loaded successfully
- `@error` - Image failed to load

## video

Video player component.

```vue
<template>
  <video
    id="myVideo"
    src="https://example.com/video.mp4"
    :controls="true"
    :autoplay="false"
    :loop="false"
    :muted="false"
    initial-time="30"
    :duration="300"
    poster="/static/poster.jpg"
    object-fit="contain"
    @play="onPlay"
    @pause="onPause"
    @ended="onEnded"
    @timeupdate="onTimeUpdate"
    @fullscreenchange="onFullscreenChange"
  />
</template>

<script>
export default {
  onReady() {
    this.videoContext = uni.createVideoContext('myVideo')
  },
  methods: {
    play() {
      this.videoContext.play()
    },
    pause() {
      this.videoContext.pause()
    },
    seek(time) {
      this.videoContext.seek(time)
    },
    sendDanmu(danmu) {
      this.videoContext.sendDanmu({
        text: danmu.text,
        color: danmu.color
      })
    },
    playbackRate(rate) {
      this.videoContext.playbackRate(rate)
    },
    onFullscreenChange(e) {
      console.log('Fullscreen:', e.detail.fullScreen)
    }
  }
}
</script>
```

**Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| src | String | | Video source URL |
| controls | Boolean | true | Show controls |
| autoplay | Boolean | false | Auto play |
| loop | Boolean | false | Loop playback |
| muted | Boolean | false | Muted |
| initial-time | Number | 0 | Start time (s) |
| duration | Number | | Total duration (s) |
| poster | String | | Poster image URL |
| object-fit | String | contain | contain/cover/fill |
| danmu-list | Array | | Danmu list |
| danmu-btn | Boolean | false | Show danmu button |
| enable-danmu | Boolean | false | Enable danmu |
| show-center-play-btn | Boolean | true | Show center play button |
| show-play-btn | Boolean | true | Show play button |
| show-fullscreen-btn | Boolean | true | Show fullscreen button |
| page-gesture | Boolean | false | Enable page gesture |
| enable-progress-gesture | Boolean | true | Enable progress gesture |

## audio

Audio player (deprecated, use `uni.getBackgroundAudioManager` instead).

```vue
<template>
  <audio
    :src="audioSrc"
    :poster="posterUrl"
    :name="audioName"
    :author="author"
    :controls="true"
    :loop="false"
    @play="onPlay"
    @pause="onPause"
    @ended="onEnded"
    @timeupdate="onTimeUpdate"
  />
</template>
```

## camera

Camera component for capturing photos/videos.

```vue
<template>
  <camera
    device-position="back"
    flash="auto"
    resolution="high"
    frame-size="large"
    @stop="onCameraStop"
    @error="onCameraError"
    @initdone="onCameraReady"
  />
  <button @click="takePhoto">Take Photo</button>
  <button @click="startRecord">Start Record</button>
  <button @click="stopRecord">Stop Record</button>
</template>

<script>
export default {
  onReady() {
    this.cameraContext = uni.createCameraContext()
  },
  methods: {
    takePhoto() {
      this.cameraContext.takePhoto({
        quality: 'high',
        success: (res) => {
          console.log(res.tempImagePath)
        }
      })
    },
    startRecord() {
      this.cameraContext.startRecord({
        success: () => console.log('Recording started')
      })
    },
    stopRecord() {
      this.cameraContext.stopRecord({
        success: (res) => {
          console.log(res.tempVideoPath)
        }
      })
    }
  }
}
</script>
```

**Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| mode | String | normal | normal/scanCode |
| resolution | String | medium | low/medium/high |
| device-position | String | back | front/back |
| flash | String | auto | auto/on/off |
| frame-size | String | large | small/medium/large |

## live-player / live-pusher

Live streaming components (mini-program only).

```vue
<template>
  <!-- Live player -->
  <live-player
    src="rtmp://example.com/live/stream"
    mode="live"
    :autoplay="true"
    :muted="false"
    orientation="vertical"
    object-fit="contain"
    @statechange="onStateChange"
    @error="onError"
  />
</template>
```

## map

Map component for displaying maps and markers.

```vue
<template>
  <map
    id="myMap"
    style="width: 100%; height: 300px;"
    :latitude="latitude"
    :longitude="longitude"
    :scale="14"
    :markers="markers"
    :polyline="polyline"
    :circles="circles"
    :controls="controls"
    :show-location="true"
    @markertap="onMarkerTap"
    @regionchange="onRegionChange"
    @tap="onMapTap"
  />
</template>

<script>
export default {
  data() {
    return {
      latitude: 39.909,
      longitude: 116.39742,
      markers: [{
        id: 1,
        latitude: 39.909,
        longitude: 116.39742,
        title: 'Marker 1',
        iconPath: '/static/marker.png',
        width: 30,
        height: 30
      }],
      polyline: [{
        points: [
          { latitude: 39.909, longitude: 116.39742 },
          { latitude: 39.91, longitude: 116.4 }
        ],
        color: '#FF0000',
        width: 2
      }]
    }
  },
  onReady() {
    this.mapContext = uni.createMapContext('myMap')
  },
  methods: {
    moveToLocation() {
      this.mapContext.moveToLocation({
        latitude: 39.91,
        longitude: 116.4
      })
    },
    getCenterLocation() {
      this.mapContext.getCenterLocation({
        success: (res) => {
          console.log(res.latitude, res.longitude)
        }
      })
    }
  }
}
</script>
```

<!--
Source references:
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/image.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/video.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/audio.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/camera.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/live-player.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/map.md
-->
