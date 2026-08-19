# 云数据库 CRUD

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uniCloud/database.html

## 新增数据

```javascript
const db = uniCloud.database()
const users = db.collection('users')

users.add({
  name: 'Alice',
  age: 20
}).then(res => {
  console.log('新增 ID', res.id)
})
```

## 查询数据

```javascript
users.get().then(res => {
  console.log(res.data)
})
```

## 更新数据

```javascript
users.doc('doc-id').update({
  age: 21
})
```

## 删除数据

```javascript
users.doc('doc-id').remove()
```

## 参考资源

- https://doc.dcloud.net.cn/uniCloud/database.html
