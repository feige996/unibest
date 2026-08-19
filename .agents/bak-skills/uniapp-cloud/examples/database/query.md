# 云数据库查询

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uniCloud/database.html

## 条件查询

```javascript
const db = uniCloud.database()
const users = db.collection('users')

users.where({
  age: db.command.gt(18)
}).get().then(res => {
  console.log(res.data)
})
```

## 排序与分页

```javascript
users.orderBy('createdAt', 'desc')
  .skip(0)
  .limit(10)
  .get()
```

## 字段筛选

```javascript
users.field({
  name: true,
  age: true
}).get()
```

## 参考资源

- https://doc.dcloud.net.cn/uniCloud/database.html
