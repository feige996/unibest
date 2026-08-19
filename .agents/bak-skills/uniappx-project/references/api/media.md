# 媒体处理 API

## 概述

媒体处理 API 用于选择图片、预览图片、选择视频等。

## API 列表

### uni.chooseImage

从本地相册选择图片或使用相机拍照。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/media/image.html#chooseimage

**参数**：
- `count` (Number) - 最多可以选择的图片张数，默认 9
- `sizeType` (Array) - 所选的图片的尺寸（original、compressed）
- `sourceType` (Array) - 选择图片的来源（album、camera）

**返回值**：
- `tempFilePaths` - 图片的本地文件路径列表
- `tempFiles` - 图片的本地文件列表

**示例**：
```javascript
uni.chooseImage({
  count: 1,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  success: (res) => {
    console.log('选择的图片', res.tempFilePaths)
  }
})
```

### uni.previewImage

预览图片。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/media/image.html#previewimage

**参数**：
- `urls` (Array) - 需要预览的图片 http 链接列表
- `current` (Number) - 当前显示图片的索引

### uni.getImageInfo

获取图片信息。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/media/image.html#getimageinfo

### uni.saveImageToPhotosAlbum

保存图片到系统相册。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/media/image.html#saveimagetophotosalbum

### uni.chooseVideo

从本地相册选择视频或使用相机拍摄视频。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/media/video.html#choosevideo

## 参考资源

- [uni-app 图片文档](https://doc.dcloud.net.cn/uni-app-x/api/media/image.html)
- [uni-app 视频文档](https://doc.dcloud.net.cn/uni-app-x/api/media/video.html)
