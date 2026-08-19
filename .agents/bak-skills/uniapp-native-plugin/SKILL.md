---
name: uniapp-native-plugin
description: A comprehensive skill for developing native plugins for uni-app. Use this skill when building Android/iOS native plugins, integrating native capabilities, or publishing plugins based on official native plugin docs.
license: Complete terms in LICENSE.txt
---

## When to use this skill

Use this skill whenever the user wants to:
- Develop native Android plugins
- Develop native iOS plugins
- Integrate native functionality into uni-app
- Create custom native modules
- Extend uni-app with native capabilities
- Handle native plugin communication
- Package and distribute native plugins

## How to use this skill

To develop native plugins:

1. **Identify the platform** from the user's request:
   - Android → Use Android plugin examples
   - iOS → Use iOS plugin examples

2. **Load the appropriate example file** from the `examples/` directory:
   - `examples/guide/` - Native plugin development guide
   - `examples/android-plugin/` - Android plugin examples
   - `examples/ios-plugin/` - iOS plugin examples

3. **Load the appropriate template** from the `templates/` directory:
   - `templates/plugin-template.md` - Plugin development templates

4. **Follow the specific instructions** in those files for development

## Examples and Templates

### Examples

Located in `examples/`:

- **guide/** - Native plugin development guide
- **android-plugin/** - Android plugin development examples
- **ios-plugin/** - iOS plugin development examples

### Templates

Located in `templates/`:

- **plugin-template.md** - Plugin development templates

## Best Practices

1. **Follow platform guidelines**: Adhere to Android and iOS development standards
2. **Error handling**: Implement proper error handling and logging
3. **Documentation**: Provide clear documentation for plugin usage
4. **Testing**: Test plugins thoroughly on real devices

## Resources

- **Official Documentation**: https://nativesupport.dcloud.net.cn/NativePlugin/

## Keywords

native plugin, 原生插件, Android插件, iOS插件, plugin development, native module

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
