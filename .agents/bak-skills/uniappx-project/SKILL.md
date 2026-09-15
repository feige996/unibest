---
name: uniappx-project
description: Provides comprehensive uni-app-x component and API integration guidance. Use when the user needs official uni-app-x components or APIs, wants per-component or per-API examples, or needs cross-platform compatibility details for uni-app-x.
license: Complete terms in LICENSE.txt
---

## When to use this skill

Use this skill whenever the user wants to:
- Use any uni-app-x built-in component
- Use any uni-app-x API (network, storage, device, UI, navigation, media, etc.)
- Access per-component or per-API examples with official doc links
- Check platform compatibility for components and APIs in uni-app-x
- Build uni-app-x applications with Vue 3 + TypeScript + Vite

## How to use this skill

This skill is organized to match the official uni-app-x components and API documentation:

1. **Choose component or API category**:
   - Components → `examples/components/built-in/`
   - APIs → `examples/api/` (categorized by domain)

2. **Open the matching example file**:
   - Each component or API has its own example file
   - Each example includes the official documentation URL
   - Examples mirror the official documentation examples

3. **Use references when you need full specs**:
   - `references/components/built-in/` for built-in components
   - `references/api/` for API parameter/return/compatibility details

## Examples and References

### Components (Built-in)
- Examples: `examples/components/built-in/*.md`
- References: `references/components/built-in/*.md`
- Official docs: https://doc.dcloud.net.cn/uni-app-x/component/

### APIs
- Examples: `examples/api/{category}/*.md`
- References: `references/api/*.md`
- Official docs: https://doc.dcloud.net.cn/uni-app-x/api/

## Best Practices

1. **One file per component/API**: Each component and API has an independent example file with official doc link.
2. **Follow platform compatibility**: Check the compatibility section in each example/reference.
3. **Use conditional compilation**: Use `#ifdef`/`#endif` for platform-specific logic.
4. **Keep examples aligned**: Use the official documentation examples as the source of truth.
5. **Prefer references for specs**: Use `references/` for full parameter tables and compatibility.

## Resources

- **Components**: https://doc.dcloud.net.cn/uni-app-x/component/
- **APIs**: https://doc.dcloud.net.cn/uni-app-x/api/
- **uni-app-x**: https://doc.dcloud.net.cn/uni-app-x/

## Keywords

uniappx, uni-app-x, components, api, built-in components, examples, references, Vue 3, TypeScript, Vite, H5, App, mini program, 跨平台, 组件, API, 官方文档

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
