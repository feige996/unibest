# canvas 组件示例

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uni-app-x/component/canvas.html

## 概述

`canvas` 是画布组件，用于绘制图形、文字等。

## 基础用法

```vue
<template>
  <canvas canvas-id="myCanvas" class="canvas"></canvas>
</template>

<script>
export default {
  onReady() {
    this.drawCanvas()
  },
  methods: {
    drawCanvas() {
      const ctx = uni.createCanvasContext('myCanvas', this)
      ctx.setFillStyle('#007aff')
      ctx.fillRect(0, 0, 200, 200)
      ctx.draw()
    }
  }
}
</script>

<style>
.canvas {
  width: 200px;
  height: 200px;
}
</style>
```

## 完整示例

### 示例 1: 绘制矩形

```vue
<template>
  <view class="container">
    <canvas canvas-id="myCanvas" class="canvas"></canvas>
    <button @click="drawRect">绘制矩形</button>
  </view>
</template>

<script>
export default {
  onReady() {
    this.drawRect()
  },
  methods: {
    drawRect() {
      const ctx = uni.createCanvasContext('myCanvas', this)
      ctx.setFillStyle('#007aff')
      ctx.fillRect(10, 10, 150, 100)
      ctx.draw()
    }
  }
}
</script>

<style>
.canvas {
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
}
</style>
```

### 示例 2: 绘制圆形

```vue
<template>
  <view class="container">
    <canvas canvas-id="myCanvas" class="canvas"></canvas>
    <button @click="drawCircle">绘制圆形</button>
  </view>
</template>

<script>
export default {
  onReady() {
    this.drawCircle()
  },
  methods: {
    drawCircle() {
      const ctx = uni.createCanvasContext('myCanvas', this)
      ctx.beginPath()
      ctx.arc(100, 100, 50, 0, 2 * Math.PI)
      ctx.setFillStyle('#4cd964')
      ctx.fill()
      ctx.draw()
    }
  }
}
</script>
```

### 示例 3: 绘制文字

```vue
<template>
  <view class="container">
    <canvas canvas-id="myCanvas" class="canvas"></canvas>
    <button @click="drawText">绘制文字</button>
  </view>
</template>

<script>
export default {
  onReady() {
    this.drawText()
  },
  methods: {
    drawText() {
      const ctx = uni.createCanvasContext('myCanvas', this)
      ctx.setFontSize(20)
      ctx.setFillStyle('#333')
      ctx.fillText('Hello Canvas', 10, 50)
      ctx.draw()
    }
  }
}
</script>
```

### 示例 4: 绘制图片

```vue
<template>
  <view class="container">
    <canvas canvas-id="myCanvas" class="canvas"></canvas>
    <button @click="drawImage">绘制图片</button>
  </view>
</template>

<script>
export default {
  onReady() {
    this.drawImage()
  },
  methods: {
    drawImage() {
      const ctx = uni.createCanvasContext('myCanvas', this)
      uni.downloadFile({
        url: 'https://example.com/image.jpg',
        success: (res) => {
          ctx.drawImage(res.tempFilePath, 0, 0, 200, 200)
          ctx.draw()
        }
      })
    }
  }
}
</script>
```

### 示例 5: 保存为图片

```vue
<template>
  <view class="container">
    <canvas canvas-id="myCanvas" class="canvas"></canvas>
    <button @click="drawAndSave">绘制并保存</button>
  </view>
</template>

<script>
export default {
  onReady() {
    this.drawCanvas()
  },
  methods: {
    drawCanvas() {
      const ctx = uni.createCanvasContext('myCanvas', this)
      ctx.setFillStyle('#007aff')
      ctx.fillRect(0, 0, 200, 200)
      ctx.setFontSize(20)
      ctx.setFillStyle('#fff')
      ctx.fillText('Canvas', 70, 100)
      ctx.draw()
    },
    drawAndSave() {
      this.drawCanvas()
      setTimeout(() => {
        uni.canvasToTempFilePath({
          canvasId: 'myCanvas',
          success: (res) => {
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: () => {
                uni.showToast({
                  title: '保存成功',
                  icon: 'success'
                })
              }
            })
          }
        }, this)
      }, 500)
    }
  }
}
</script>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| canvas-id | String | - | canvas 组件的唯一标识符 |
| disable-scroll | Boolean | false | 当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新 |

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

1. 需要在 `onReady` 生命周期中绘制
2. 调用 `ctx.draw()` 才会真正绘制到画布上
3. 可以通过 `uni.canvasToTempFilePath` 将画布转为图片
4. 不同平台的 API 可能略有差异

## 参考资源

- **官方文档**: https://doc.dcloud.net.cn/uni-app-x/component/canvas.html
- **Canvas API**: https://doc.dcloud.net.cn/uni-app-x/api/canvas/canvas.html
