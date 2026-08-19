---
name: uniapp-cloud
description: A comprehensive skill for uniCloud cloud development in the uni-app ecosystem. Use this skill when you need uniCloud project setup, cloud database CRUD, cloud functions, storage, or datacom components, following official uniCloud documentation.
license: Complete terms in LICENSE.txt
---

## When to use this skill

Use this skill whenever the user wants to:
- Use uniCloud cloud development services
- Work with cloud databases (add, query, update, delete data)
- Create and deploy cloud functions
- Use cloud storage for file uploads and management
- Implement datacom components for data binding
- Integrate backend services with uni-app
- Set up uniCloud project and configuration
- Handle cloud database permissions and security

## How to use this skill

This skill is organized to match the official uniCloud documentation:

1. **Start with setup and project configuration**:
   - `examples/guide/intro.md`
   - `examples/guide/project-setup.md`
   - `examples/guide/cloud-space.md`

2. **Choose the cloud capability**:
   - Database → `examples/database/`
   - Cloud functions → `examples/functions/`
   - Storage → `examples/storage/`
   - Datacom → `examples/datacom/`
   - Security/permission → `examples/security/`

3. **Open the API reference**:
   - `api/cloud-api.md`

**Important Notes**:
- This skill focuses on uniCloud integration and usage, not general backend frameworks
- Each example includes official documentation URL
- Follow official permission and security guidance for production

## Examples and Templates

### Examples

Located in `examples/`:

- **guide/** - Intro, project setup, cloud space creation
- **database/** - CRUD, query, index, permissions
- **functions/** - Function structure, deploy, call
- **storage/** - Upload, download, delete
- **datacom/** - datacom components and binding
- **security/** - permissions and security rules

## Best Practices

1. **Security**: Always set proper database permissions and rules
2. **Performance**: Use indexes for frequently queried fields
3. **Cost**: Optimize cloud function execution time
4. **Error handling**: Implement proper error handling for all cloud operations
5. **Data validation**: Validate data before saving to database

## Resources

- **Official Documentation**: https://doc.dcloud.net.cn/uniCloud/
- **Cloud Database**: https://doc.dcloud.net.cn/uniCloud/database.html
- **Cloud Functions**: https://doc.dcloud.net.cn/uniCloud/cf-functions.html
- **Cloud Storage**: https://doc.dcloud.net.cn/uniCloud/storage.html

## Keywords

unicloud, uniCloud, cloud development, cloud database, cloud functions, cloud storage, datacom, 云开发, 云数据库, 云函数, 云存储

## 能力边界

### ✅ 适用场景
- 当你需要使用此技能对应的技术栈时
- 当项目需要遵循最佳实践时
- 当需要快速上手或深入理解核心概念时

### ⚠️ 需要注意
- 复杂业务逻辑需要结合具体场景调整
- 性能优化需要根据实际数据量评估

### ❌ 不适用场景
- 不相关的技术栈或框架
- 需要完全自定义的特殊场景

## 常见陷阱 (Gotchas)

1. **版本兼容性**：注意框架版本与依赖库的兼容性，不同版本 API 可能有差异
2. **配置文件格式**：配置文件格式错误是最常见的问题，建议使用编辑器的语法检查
3. **环境变量**：确保所有必要的环境变量已正确设置，敏感信息不要硬编码
4. **依赖冲突**：多版本共存时注意依赖冲突，使用 lock 文件锁定版本
5. **性能陷阱**：大数据量场景下注意性能优化，避免 N+1 查询等常见问题

## 使用流程

### Step 1: 环境准备
确保开发环境已安装必要的依赖和工具。

### Step 2: 配置初始化
根据项目需求进行基础配置。

### Step 3: 核心功能使用
按照示例代码实现核心功能。

### Step 4: 测试验证
运行测试确保功能正常。

### Step 5: 部署上线
完成开发后进行部署和监控。
