---
name: uniapp-plugin
description: A comprehensive skill for the uni-app plugin market and automatic plugin installation. Use this skill to browse plugins, auto-install plugins, configure plugin settings, and integrate third-party plugins based on the official plugin market docs.
license: Complete terms in LICENSE.txt
---

## When to use this skill

Use this skill whenever the user wants to:
- Use plugins from the uni-app plugin market
- Automatically install plugins into projects
- Configure plugin settings
- Integrate third-party plugins
- Handle plugin dependencies
- Update and manage plugins
- Work with different plugin types (components, APIs, templates, etc.)

## How to use this skill

To use plugins:

1. **Identify the plugin type** from the user's request:
   - Component plugins → Use component plugin examples
   - API plugins → Use API plugin examples
   - Template plugins → Use template plugin examples

2. **Load the appropriate example file** from the `examples/` directory:
   - `examples/guide/` - Plugin usage guide
   - `examples/plugin-types/` - Different plugin type examples
   - `examples/installation/` - Plugin installation methods

3. **Load the appropriate template** from the `templates/` directory:
   - `templates/plugin-usage.md` - Plugin usage templates

4. **Follow the specific instructions** in those files for plugin integration

## Examples and Templates

### Examples

Located in `examples/`:

- **guide/** - Plugin usage guide and best practices
- **plugin-types/** - Different plugin type examples
- **installation/** - Plugin installation methods and examples

### Templates

Located in `templates/`:

- **plugin-usage.md** - Plugin usage templates and examples

## Best Practices

1. **Choose reliable plugins**: Use plugins from trusted sources
2. **Check compatibility**: Ensure plugin compatibility with your uni-app version
3. **Read documentation**: Always read plugin documentation before use
4. **Update regularly**: Keep plugins updated to latest versions
5. **Handle dependencies**: Manage plugin dependencies properly

## Resources

- **Plugin Market**: https://ext.dcloud.net.cn/
- **Official Documentation**: https://uniapp.dcloud.net.cn/plugin/

## Keywords

plugin market, 插件市场, uni-app plugin, 插件安装, plugin integration, 插件使用

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
