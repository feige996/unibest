# uniCloud 云开发指南

## 官方文档

参考官方文档：https://doc.dcloud.net.cn/uniCloud/

## 什么是 uniCloud

uniCloud 是 DCloud 联合阿里云、腾讯云，为 uni-app 开发者提供的基于 serverless 模式和 js 编程的云开发平台。

## 核心功能

### 1. 云数据库

- 无需自建数据库
- 自动扩容
- 支持 JSON 文档存储
- 支持关系型数据

### 2. 云函数

- 无需管理服务器
- 按量计费
- 支持 Node.js
- 自动扩缩容

### 3. 云存储

- 文件上传下载
- CDN 加速
- 图片处理
- 安全防护

### 4. 前端网页托管

- 静态网站托管
- CDN 加速
- 自定义域名

## 服务空间

### 创建服务空间

1. 登录 DCloud 开发者中心
2. 进入 uniCloud 控制台
3. 创建服务空间
4. 选择云服务商（阿里云/腾讯云）

### 关联服务空间

在 HBuilderX 中：
1. 右键项目 → uniCloud → 关联云服务空间
2. 选择服务空间
3. 选择云服务商

## 项目结构

```
my-uniapp-project/
├── cloudfunctions/        # 云函数目录
│   ├── function1/
│   │   ├── index.js
│   │   └── package.json
│   └── ...
├── uniCloud/
│   └── database/         # 数据库 schema
│       └── db_init.json
└── ...
```

## 快速开始

### 1. 创建服务空间

在 DCloud 开发者中心创建服务空间。

### 2. 关联服务空间

在 HBuilderX 中关联服务空间。

### 3. 初始化云数据库

```javascript
// 在 uniCloud 控制台创建数据表
// 或使用 db_init.json 初始化
```

### 4. 使用云数据库

```javascript
// 在页面中使用
const db = uniCloud.database()
const collection = db.collection('users')

collection.get().then(res => {
  console.log(res.data)
})
```

## 参考资源

- uniCloud 文档：https://doc.dcloud.net.cn/uniCloud/
- 云数据库：https://doc.dcloud.net.cn/uniCloud/database.html
- 云函数：https://doc.dcloud.net.cn/uniCloud/cf-functions.html
