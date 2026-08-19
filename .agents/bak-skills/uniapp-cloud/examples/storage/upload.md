# 云存储上传

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uniCloud/storage.html

## 上传文件

```javascript
uniCloud.uploadFile({
  filePath: '/static/logo.png',
  cloudPath: 'images/logo.png'
}).then(res => {
  console.log('fileID:', res.fileID)
})
```

## 参考资源

- https://doc.dcloud.net.cn/uniCloud/storage.html
