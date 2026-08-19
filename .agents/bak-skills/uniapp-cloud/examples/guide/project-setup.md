# uniCloud 项目初始化

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uniCloud/

## 使用场景

- 创建新 uni-app 项目并启用 uniCloud
- 为已有项目关联云服务空间
- 初始化云函数与数据库目录

## 步骤

1. **创建或打开项目**（HBuilderX 或 CLI 项目均可）。
2. **启用 uniCloud**：
   - 在 HBuilderX 中右键项目 → `uniCloud` → `关联云服务空间`。
3. **确认目录结构**：

```
my-uniapp-project/
├── cloudfunctions/      # 云函数目录
├── uniCloud/            # 云数据库与存储配置
└── ...
```

4. **初始化云数据库**：
   - 使用 `uniCloud/database` 下的 schema 或控制台创建集合。

## 示例

```javascript
// 获取数据库引用
const db = uniCloud.database()
const collection = db.collection('users')
```

## 参考资源

- https://doc.dcloud.net.cn/uniCloud/
