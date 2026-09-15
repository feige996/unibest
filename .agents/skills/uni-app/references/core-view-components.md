---
name: View Components
description: Core container components for layout and structure
---

# View Components

## view

Basic container component, similar to HTML `<div>`.

```vue
<template>
  <view class="container">
    <view class="flex-row">
      <view class="item">A</view>
      <view class="item">B</view>
    </view>
    <view class="flex-column">
      <view class="item">C</view>
      <view class="item">D</view>
    </view>
  </view>
</template>
```

**Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| hover-class | String | none | CSS class when pressed |
| hover-stop-propagation | Boolean | false | Stop propagation to ancestor nodes |
| hover-start-time | Number | 50 | Delay before hover state (ms) |
| hover-stay-time | Number | 400 | Duration to keep hover state (ms) |

**Tips:**
- `<div>` is auto-converted to `<view>` in mini-programs
- Use `<text>` to wrap text in nvue pages

## scroll-view

Scrollable container with enhanced scroll capabilities.

```vue
<template>
  <!-- Vertical scroll -->
  <scroll-view
    scroll-y
    class="scroll-container"
    @scroll="onScroll"
    @scrolltolower="loadMore"
    :scroll-top="scrollTop"
    :scroll-into-view="targetId"
  >
    <view id="item1">Item 1</view>
    <view id="item2">Item 2</view>
  </scroll-view>

  <!-- Horizontal scroll -->
  <scroll-view scroll-x class="horizontal-scroll">
    <view class="scroll-item">1</view>
    <view class="scroll-item">2</view>
  </scroll-view>
</template>
```

**Properties:**

| Property | Type | Description |
|----------|------|-------------|
| scroll-x | Boolean | Enable horizontal scroll |
| scroll-y | Boolean | Enable vertical scroll |
| upper-threshold | Number | Distance from top to trigger scrolltoupper (px) |
| lower-threshold | Number | Distance from bottom to trigger scrolltolower (px) |
| scroll-top | Number | Vertical scroll position |
| scroll-left | Number | Horizontal scroll position |
| scroll-into-view | String | Element ID to scroll into view |
| scroll-with-animation | Boolean | Enable smooth scroll animation |
| enable-back-to-top | Boolean | iOS: tap status bar to scroll top |

**Events:**
- `@scroll` - Scroll event
- `@scrolltoupper` - Reached top
- `@scrolltolower` - Reached bottom

## swiper

Carousel/slider container for switching content.

```vue
<template>
  <swiper
    :current="currentIndex"
    :autoplay="true"
    :interval="3000"
    :duration="500"
    :circular="true"
    :indicator-dots="true"
    @change="onSwiperChange"
  >
    <swiper-item>
      <view class="slide">Slide 1</view>
    </swiper-item>
    <swiper-item>
      <view class="slide">Slide 2</view>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    onSwiperChange(e) {
      this.currentIndex = e.detail.current
    }
  }
}
</script>
```

**swiper Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| indicator-dots | Boolean | false | Show pagination dots |
| indicator-color | Color | rgba(0,0,0,.3) | Inactive dot color |
| indicator-active-color | Color | #000000 | Active dot color |
| autoplay | Boolean | false | Auto-play slides |
| current | Number | 0 | Current slide index |
| interval | Number | 5000 | Auto-play interval (ms) |
| duration | Number | 500 | Transition duration (ms) |
| circular | Boolean | false | Circular sliding |
| vertical | Boolean | false | Vertical sliding |
| previous-margin | String | 0px | Previous slide margin |
| next-margin | String | 0px | Next slide margin |

## movable-area / movable-view

Draggable and scalable container.

```vue
<template>
  <movable-area class="move-area">
    <movable-view
      :x="x"
      :y="y"
      direction="all"
      :scale="true"
      :scale-min="0.5"
      :scale-max="4"
      @change="onChange"
      @scale="onScale"
    >
      Draggable content
    </movable-view>
  </movable-area>
</template>
```

**movable-view Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| direction | String | none | Move direction: all/vertical/horizontal/none |
| x | Number | | Initial X position |
| y | Number | | Initial Y position |
| scale | Boolean | false | Enable scaling |
| scale-min | Number | 0.5 | Min scale |
| scale-max | Number | 10 | Max scale |
| scale-value | Number | 1 | Initial scale |

## cover-view / cover-image

Native overlay components that can cover native components (map, video, canvas).

```vue
<template>
  <map class="map">
    <cover-view class="overlay">Overlay text</cover-view>
    <cover-image class="marker" src="/static/marker.png" />
  </map>
</template>
```

**Limitations:**
- Only supported in WeChat MP, App, and H5
- Limited styling capabilities
- Cannot nest regular components inside

<!--
Source references:
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/view.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/scroll-view.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/swiper.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/movable-area.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/cover-view.md
-->
