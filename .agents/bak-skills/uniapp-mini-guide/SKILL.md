---
name: uniapp-mini-guide
description: A comprehensive skill for uni-app mini program development. Use when building uni-app mini programs, configuring mini program settings, or working with mini program components and APIs based on the official native support docs.
license: Complete terms in LICENSE.txt
---

## When to use this skill

Use this skill whenever the user wants to:
- Build uni-app mini programs
- Configure mini program settings and capabilities
- Use mini program components and APIs within uni-app
- Understand native mini program limitations and compatibility

## How to use this skill

1. **Start with the overview**:
   - `examples/guide/intro.md`

2. **Configure mini program settings**:
   - `examples/guide/config.md`

3. **Check component and API references**:
   - `examples/components/overview.md`
   - `examples/api/overview.md`

## Examples and Templates

- `examples/guide/intro.md` - Mini program overview
- `examples/guide/config.md` - Configuration and capability setup
- `examples/components/overview.md` - Component references and usage
- `examples/api/overview.md` - API references and usage

## Best Practices

1. Follow mini program platform requirements and audits
2. Keep package size small and optimize assets
3. Validate API compatibility per platform
4. Use conditional compilation for platform-specific code

## Resources

- https://nativesupport.dcloud.net.cn/

## Keywords

uniapp, uni-app, mini program, 小程序, native support, components, api, 平台兼容

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
