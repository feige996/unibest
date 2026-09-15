---
name: uniapp-native-app
description: A comprehensive skill for uni-app native app offline packaging. Use this skill to package uni-app as native Android/iOS apps, configure native app settings, handle signing, and follow official offline packaging documentation.
license: Complete terms in LICENSE.txt
---

## When to use this skill

Use this skill whenever the user wants to:
- Package uni-app as native Android app
- Package uni-app as native iOS app
- Configure native app settings (manifest, permissions, etc.)
- Customize native app features
- Integrate native plugins
- Configure app signing and certificates
- Handle native app build and distribution

## How to use this skill

To package native apps:

1. **Identify the platform** from the user's request:
   - Android → Use Android examples
   - iOS → Use iOS examples

2. **Load the appropriate example file** from the `examples/` directory:
   - `examples/guide/` - Native app packaging guide
   - `examples/android/` - Android packaging examples
   - `examples/ios/` - iOS packaging examples

3. **Load the appropriate template** from the `templates/` directory:
   - `templates/build-config.md` - Build configuration templates

4. **Follow the specific instructions** in those files for packaging

## Examples and Templates

### Examples

Located in `examples/`:

- **guide/** - Offline packaging overview and setup
- **android/** - Android signing, keystore, build configs
- **ios/** - iOS signing, provisioning, build configs

### Templates

Located in `templates/`:

- **build-config.md** - Build configuration templates

## Best Practices

1. **Follow platform guidelines**: Adhere to Android and iOS development standards
2. **Optimize app size**: Minimize APK/IPA size
3. **Security**: Properly configure app signing and certificates
4. **Testing**: Test on real devices before release

## Resources

- **Official Documentation**: https://nativesupport.dcloud.net.cn/AppDocs/

## Keywords

native app, 原生App, Android打包, iOS打包, 离线打包, app packaging, native plugin

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
