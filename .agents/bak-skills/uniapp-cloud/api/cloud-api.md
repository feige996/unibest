# uniCloud API 参考

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uniCloud/

## 云数据库 API

### 获取数据库引用

```javascript
const db = uniCloud.database()
```

### 获取集合引用

```javascript
const collection = db.collection('users')
```

### 查询数据

```javascript
// 获取所有数据
collection.get().then(res => {
  console.log(res.data)
})

// 条件查询
collection.where({
  age: db.command.gt(18)
}).get().then(res => {
  console.log(res.data)
})

// 分页查询
collection.skip(0).limit(10).get().then(res => {
  console.log(res.data)
})
```

### 添加数据

```javascript
collection.add({
  name: 'John',
  age: 25
}).then(res => {
  console.log(res.id)
})
```

### 更新数据

```javascript
collection.doc('doc-id').update({
  age: 26
}).then(res => {
  console.log('更新成功')
})
```

### 删除数据

```javascript
collection.doc('doc-id').remove().then(res => {
  console.log('删除成功')
})
```

## 云函数 API

### 调用云函数

```javascript
uniCloud.callFunction({
  name: 'function-name',
  data: {
    param1: 'value1'
  }
}).then(res => {
  console.log(res.result)
})
```

## 云存储 API

### 上传文件

```javascript
uniCloud.uploadFile({
  filePath: 'path/to/file',
  cloudPath: 'cloud/path/file.jpg'
}).then(res => {
  console.log(res.fileID)
})
```

### 下载文件

```javascript
uniCloud.downloadFile({
  fileID: 'cloud://xxx.jpg'
}).then(res => {
  console.log(res.tempFilePath)
})
```

### 删除文件

```javascript
uniCloud.deleteFile({
  fileList: ['cloud://xxx.jpg']
}).then(res => {
  console.log('删除成功')
})
```

## 参考资源

- uniCloud API 文档：https://doc.dcloud.net.cn/uniCloud/client-sdk.html
