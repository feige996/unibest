# 云函数调用

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uniCloud/cf-functions.html

## 前端调用示例

```javascript
uniCloud.callFunction({
  name: 'getUser',
  data: { userId: '123' }
}).then(res => {
  console.log(res.result)
})
```

## 参考资源

- https://doc.dcloud.net.cn/uniCloud/cf-functions.html
