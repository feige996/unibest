# 云数据库权限控制

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uniCloud/

## 说明

- 通过数据库权限规则限制读写
- 配合用户身份（如用户登录态）实现访问控制

## 示例（规则示意）

```json
{
  "read": true,
  "write": "auth.uid == _id"
}
```

## 参考资源

- https://doc.dcloud.net.cn/uniCloud/
