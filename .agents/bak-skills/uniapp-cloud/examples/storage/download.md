# 云存储下载

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uniCloud/storage.html

## 获取临时链接

```javascript
uniCloud.getTempFileURL({
  fileList: ['cloud://xxx/xxx.png']
}).then(res => {
  console.log(res.fileList)
})
```

## 参考资源

- https://doc.dcloud.net.cn/uniCloud/storage.html
