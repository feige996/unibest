---
name: uniapp-uview
description: A comprehensive skill for integrating and using uView UI with UniApp projects. This skill focuses on UniApp-specific integration, configuration, and platform-specific considerations when using uView UI in UniApp applications. Use this skill whenever the user needs to integrate uView UI into UniApp projects, configure UniApp-specific settings, or handle platform differences.
license: Complete terms in LICENSE.txt
---

## When to use this skill

Use this skill whenever the user wants to:
- Integrate uView UI into UniApp projects
- Configure UniApp projects to work with uView UI (pages.json, manifest.json, easycom)
- Handle platform-specific behaviors when using uView in UniApp (H5, mini-program, App, nvue)
- Use UniApp features (navigation, APIs, lifecycle) with uView components
- Build cross-platform UniApp applications with uView UI components
- Configure easycom for automatic uView component import in UniApp
- Handle navigation and routing with uView in UniApp
- Optimize UniApp projects using uView UI
- Deploy uView-based UniApp applications to multiple platforms

## How to use this skill

This skill is organized to match UniApp integration patterns and the official UniApp plugin structure (https://ext.dcloud.net.cn/plugin?id=1593). When working with uView UI in UniApp:

1. **Install and setup** uView UI in UniApp project:
   - Load `examples/getting-started/installation.md` for installation in UniApp
   - Load `examples/getting-started/project-setup.md` for UniApp project configuration
   - Load `examples/getting-started/easycom-config.md` for easycom configuration

2. **Integrate with UniApp features**:
   - Load `examples/integration/pages-config.md` for pages.json configuration
   - Load `examples/integration/manifest-config.md` for manifest.json configuration
   - Load `examples/integration/navigation.md` for navigation with uView
   - Load `examples/integration/uni-api.md` for using UniApp APIs with uView

3. **Handle platform-specific behaviors**:
   - Load `examples/platform-specific/h5.md` for H5 platform considerations
   - Load `examples/platform-specific/miniprogram.md` for mini-program considerations
   - Load `examples/platform-specific/app.md` for App platform considerations
   - Load `examples/platform-specific/nvue.md` for nvue considerations

4. **Advanced integration**:
   - Load `examples/advanced/custom-theme.md` for theme customization in UniApp
   - Load `examples/advanced/build-optimization.md` for build optimization
   - Load `examples/advanced/multi-platform.md` for multi-platform deployment

5. **Reference the API documentation** when needed:
   - `api/integration-api.md` - UniApp and uView integration API
   - `api/config-api.md` - Configuration API reference

6. **Use templates** for quick start:
   - `templates/basic-uniapp-project.md` - Basic UniApp project with uView
   - `templates/pages-template.md` - Pages configuration template
   - `templates/manifest-template.md` - Manifest configuration template

**Important Notes**:
- This skill focuses on UniApp integration, not uView UI API documentation
- uView UI supports both Vue 2 and Vue 3, use appropriate syntax
- Always configure easycom in pages.json for automatic component import
- Use conditional compilation (`#ifdef`, `#endif`) for platform-specific code
- Test on all target platforms (H5, mini-programs, App) before deployment
- Use rpx units for responsive sizing in UniApp

## Examples and Templates

### Getting Started
- **Installation**: `examples/getting-started/installation.md` - How to install uView UI in UniApp projects
- **Project Setup**: `examples/getting-started/project-setup.md` - Setting up UniApp project with uView
- **Easycom Config**: `examples/getting-started/easycom-config.md` - Configuring easycom for automatic component import

### Integration
- **Pages Config**: `examples/integration/pages-config.md` - Configuring pages.json with uView
- **Manifest Config**: `examples/integration/manifest-config.md` - Configuring manifest.json for uView
- **Navigation**: `examples/integration/navigation.md` - Navigation and routing with uView
- **UniApp API**: `examples/integration/uni-api.md` - Using UniApp APIs with uView components

### Platform-Specific
- **H5**: `examples/platform-specific/h5.md` - H5 platform considerations with uView
- **Mini-Program**: `examples/platform-specific/miniprogram.md` - Mini-program considerations with uView
- **App**: `examples/platform-specific/app.md` - App platform considerations with uView
- **nvue**: `examples/platform-specific/nvue.md` - nvue considerations with uView

### Advanced
- **Custom Theme**: `examples/advanced/custom-theme.md` - Customizing themes in UniApp projects
- **Build Optimization**: `examples/advanced/build-optimization.md` - Optimizing UniApp builds with uView
- **Multi-Platform**: `examples/advanced/multi-platform.md` - Multi-platform deployment strategies

### Templates
- **Basic Project**: `templates/basic-uniapp-project.md` - Basic UniApp project structure with uView
- **Pages Template**: `templates/pages-template.md` - pages.json configuration template
- **Manifest Template**: `templates/manifest-template.md` - manifest.json configuration template

## API Reference

- **Integration API**: `api/integration-api.md` - UniApp and uView integration API reference
- **Config API**: `api/config-api.md` - Configuration API reference for UniApp projects

## Best Practices

1. **Use easycom**: Configure easycom in pages.json for automatic uView component import
2. **Platform Testing**: Test on all target platforms (H5, mini-programs, App)
3. **Use rpx Units**: Use rpx for responsive sizing in UniApp, px for fixed sizes
4. **SCSS Support**: Ensure SCSS is properly configured in UniApp project
5. **Manifest Configuration**: Properly configure manifest.json for each platform
6. **Conditional Compilation**: Use conditional compilation for platform-specific code
7. **Performance**: Optimize for each platform's specific requirements
8. **Navigation**: Use UniApp navigation API with uView components

## Resources

- **Official Plugin**: https://ext.dcloud.net.cn/plugin?id=1593
- **UniApp Documentation**: https://uniapp.dcloud.net.cn/
- **uView UI**: https://www.uviewui.com/

## Keywords

uniapp, uview, uview-ui, uniapp integration, uniapp configuration, easycom, pages.json, manifest.json, uni-app, 小程序, 跨平台, H5, App, nvue, 条件编译, 平台差异

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
