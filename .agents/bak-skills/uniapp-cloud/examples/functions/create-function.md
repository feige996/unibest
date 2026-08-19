# 云函数创建

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uniCloud/cf-functions.html

## 创建云函数

1. 在项目根目录创建 `cloudfunctions/`。
2. 新建函数目录（如 `getUser`）。
3. 编写 `index.js` 入口。

```javascript
'use strict'
exports.main = async (event, context) => {
  return {
    code: 0,
    data: 'Hello uniCloud'
  }
}
```

## 参考资源

- https://doc.dcloud.net.cn/uniCloud/cf-functions.html
