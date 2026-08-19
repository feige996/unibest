# 权限与安全规则

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uniCloud/

## 关键点

- 按最小权限原则配置读写规则
- 对敏感数据进行字段级控制
- 使用用户身份信息限制访问范围

## 示例（规则示意）

```json
{
  "read": "auth.uid != null",
  "write": "auth.uid == _id"
}
```

## 参考资源

- https://doc.dcloud.net.cn/uniCloud/
