---
name: File Operations
description: File system operations, image/video selection, and file management
---

# File Operations

## Image Selection

### uni.chooseImage

Select images from album or camera.

```javascript
// Select from album
uni.chooseImage({
  count: 9, // Max 9
  sizeType: ['original', 'compressed'],
  sourceType: ['album'],
  success: (res) => {
    console.log('Selected:', res.tempFilePaths)
    // tempFilePaths: ['blob:xxx', 'blob:xxx']
    // tempFiles: [{ path, size }]
  }
})

// Take photo
uni.chooseImage({
  count: 1,
  sourceType: ['camera'],
  success: (res) => {
    const tempPath = res.tempFilePaths[0]
    this.uploadImage(tempPath)
  }
})

// Both album and camera
uni.chooseImage({
  count: 5,
  sizeType: ['compressed'], // Compressed only
  sourceType: ['album', 'camera'],
  success: (res) => {
    res.tempFilePaths.forEach(path => {
      this.previewImage(path)
    })
  }
})
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| count | Number | 9 | Max number of images |
| sizeType | Array | ['original', 'compressed'] | original/compressed |
| sourceType | Array | ['album', 'camera'] | album/camera |

## Video Selection

### uni.chooseVideo

Select or record video.

```javascript
uni.chooseVideo({
  sourceType: ['album', 'camera'],
  compressed: true,
  maxDuration: 60,
  camera: 'back', // front/back
  success: (res) => {
    console.log('Path:', res.tempFilePath)
    console.log('Duration:', res.duration) // seconds
    console.log('Size:', res.size) // bytes
    console.log('Height:', res.height)
    console.log('Width:', res.width)
  }
})
```

### uni.chooseMedia (WeChat/QQ)

Choose mixed media types.

```javascript
uni.chooseMedia({
  count: 9,
  mediaType: ['image', 'video'],
  sourceType: ['album', 'camera'],
  maxDuration: 30,
  camera: 'back',
  success: (res) => {
    console.log(res.tempFiles)
  }
})
```

## File Selection

### uni.chooseFile

Select any file type.

```javascript
uni.chooseFile({
  count: 1,
  type: 'all', // all/video/image/file
  extension: ['.pdf', '.doc', '.docx'], // Filter by extension
  success: (res) => {
    console.log(res.tempFilePaths)
    console.log(res.tempFiles)
  }
})
```

## File System Operations (App)

### Get File System Manager

```javascript
const fs = uni.getFileSystemManager()
```

### Read File

```javascript
// Read as text
fs.readFile({
  filePath: `${uni.env.USER_DATA_PATH}/data.txt`,
  encoding: 'utf8',
  success: (res) => {
    console.log(res.data)
  }
})

// Read as binary
fs.readFile({
  filePath: tempFilePath,
  encoding: 'binary',
  success: (res) => {
    console.log(res.data)
  }
})
```

### Write File

```javascript
fs.writeFile({
  filePath: `${uni.env.USER_DATA_PATH}/config.json`,
  data: JSON.stringify({ theme: 'dark' }),
  encoding: 'utf8',
  success: () => {
    console.log('File written')
  }
})
```

### Append to File

```javascript
fs.appendFile({
  filePath: `${uni.env.USER_DATA_PATH}/log.txt`,
  data: '\nNew log entry',
  encoding: 'utf8',
  success: () => {
    console.log('Appended')
  }
})
```

### Delete File

```javascript
fs.unlink({
  filePath: `${uni.env.USER_DATA_PATH}/temp.txt`,
  success: () => {
    console.log('File deleted')
  }
})
```

### Check File Exists

```javascript
fs.access({
  path: `${uni.env.USER_DATA_PATH}/data.json`,
  success: () => {
    console.log('File exists')
  },
  fail: () => {
    console.log('File not found')
  }
})
```

### Create Directory

```javascript
fs.mkdir({
  dirPath: `${uni.env.USER_DATA_PATH}/downloads`,
  recursive: true, // Create parent directories
  success: () => {
    console.log('Directory created')
  }
})
```

### Read Directory

```javascript
fs.readdir({
  dirPath: `${uni.env.USER_DATA_PATH}/downloads`,
  success: (res) => {
    console.log('Files:', res.files)
  }
})
```

### Get File Info

```javascript
fs.getFileInfo({
  filePath: tempFilePath,
  success: (res) => {
    console.log('Size:', res.size)
    console.log('Create time:', res.createTime)
    console.log('Last access:', res.lastAccessedTime)
  }
})
```

## Save and Open Files

### Save File

```javascript
uni.saveFile({
  tempFilePath: res.tempFilePath,
  success: (res) => {
    const savedPath = res.savedFilePath
    console.log('Saved to:', savedPath)
  }
})
```

### Get Saved File List

```javascript
uni.getSavedFileList({
  success: (res) => {
    console.log('Files:', res.fileList)
    // [{ filePath, createTime, size }, ...]
  }
})
```

### Get Saved File Info

```javascript
uni.getSavedFileInfo({
  filePath: savedFilePath,
  success: (res) => {
    console.log('Size:', res.size)
    console.log('Create time:', res.createTime)
  }
})
```

### Remove Saved File

```javascript
uni.removeSavedFile({
  filePath: savedFilePath,
  success: () => {
    console.log('File removed')
  }
})
```

### Open Document

```javascript
uni.openDocument({
  filePath: filePath,
  fileType: 'pdf', // Optional hint
  showMenu: true, // Show share menu (WeChat)
  success: () => {
    console.log('Document opened')
  }
})
```

## Image Operations

### Preview Image

```javascript
uni.previewImage({
  current: currentImage, // Current image URL
  urls: imageList, // All image URLs
  indicator: 'default',
  loop: false,
  longPressActions: {
    itemList: ['Save Image', 'Share'],
    success: (data) => {
      console.log('Selected:', data.tapIndex)
    }
  }
})
```

### Get Image Info

```javascript
uni.getImageInfo({
  src: imagePath,
  success: (res) => {
    console.log('Width:', res.width)
    console.log('Height:', res.height)
    console.log('Path:', res.path)
    console.log('Orientation:', res.orientation)
    console.log('Type:', res.type)
  }
})
```

### Compress Image

```javascript
uni.compressImage({
  src: originalPath,
  quality: 80, // 0-100
  success: (res) => {
    console.log('Compressed:', res.tempFilePath)
  }
})
```

### Save Image to Album

```javascript
uni.saveImageToPhotosAlbum({
  filePath: tempFilePath,
  success: () => {
    uni.showToast({ title: 'Saved to album' })
  }
})
```

## Video Operations

### Save Video to Album

```javascript
uni.saveVideoToPhotosAlbum({
  filePath: videoPath,
  success: () => {
    uni.showToast({ title: 'Video saved' })
  }
})
```

### Get Video Info

```javascript
uni.getVideoInfo({
  src: videoPath,
  success: (res) => {
    console.log('Duration:', res.duration)
    console.log('Size:', res.size)
    console.log('Bitrate:', res.bitrate)
    console.log('FPS:', res.fps)
  }
})
```

## File Paths Reference

| Path Type | Example | Description |
|-----------|---------|-------------|
| tempFilePath | `blob:xxx` or `_doc/uniapp_temp/xxx` | Temporary file |
| savedFilePath | `_doc/uniapp_save/xxx` | Saved file |
| USER_DATA_PATH | `_doc/` | App data directory |

<!--
Source references:
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/media/image.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/media/file.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/file/file.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/file/getFileSystemManager.md
-->
