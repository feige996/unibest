---
name: uniapp-project-creator
description: Provides one-command project creation for uni-app using the official quickstart CLI, including project initialization, configuration, and template selection. Use when the user asks to create a uni-app project with a single command, needs to initialize a new uni-app project, or generate uni-app project structure.
license: Complete terms in LICENSE.txt
---

## When to use this skill

Use this skill whenever the user wants to:
- Create a new uni-app project from scratch
- Initialize uni-app project structure and configuration files
- Set up development environment for uni-app
- Generate project templates with different configurations
- Configure manifest.json and pages.json files
- Create uni-app pages and components
- Set up uni-app project with HBuilderX or CLI

## How to use this skill

To create a uni-app project with a single command or via HBuilderX:

1. **Identify the project type** from the user's request:
   - Standard uni-app project → Use Vue 2 or Vue 3 template
   - HBuilderX project → Use HBuilderX creation method
   - CLI project → Use Vue CLI or official CLI commands

2. **Load the appropriate example file** from the `examples/guide/` directory:
   - `examples/guide/installation.md` - Installation and environment setup
   - `examples/guide/quick-start.md` - Quick start guide
   - `examples/guide/project-types.md` - Different project types and templates

3. **Load the appropriate template file** from the `templates/` directory:
   - `templates/project-templates.md` - Project structure templates
   - `templates/cli-commands.md` - CLI command templates

4. **Follow the specific instructions** in those files for project creation, structure, and configuration

5. **Generate the project structure** with proper files and configurations

**Important Notes**:
- This skill focuses on uni-app CLI quickstart and HBuilderX creation flows
- Use one command creation when the user wants "一句话创建"
- Ensure Vue 2/Vue 3 template choice matches the user's target stack

## Examples and Templates

### Examples

Located in `examples/guide/`:

- **installation.md** - Installation guide for uni-app development environment
- **quick-start.md** - Quick start guide for creating first uni-app project
- **project-types.md** - Different project types (Vue 2, Vue 3, TypeScript, etc.)

### Templates

Located in `templates/`:

- **project-templates.md** - Complete project structure templates
- **cli-commands.md** - CLI command templates for project creation

## API Reference

This skill focuses on project creation and initialization. For component and API references, see `uniapp-project-guide`.

## Best Practices

1. **Choose the right template**: Select Vue 2 or Vue 3 based on project requirements
2. **Configure properly**: Set up manifest.json and pages.json correctly
3. **Organize structure**: Follow standard uni-app directory structure
4. **Use CLI when possible**: CLI provides more flexibility than HBuilderX
5. **Version control**: Initialize git repository after project creation

## Resources

- **Official Documentation**: https://uniapp.dcloud.net.cn/quickstart-cli.html
- **HBuilderX**: https://www.dcloud.io/hbuilderx.html
- **Vue CLI**: https://cli.vuejs.org/
- **uni-app GitHub**: https://github.com/dcloudio/uni-app

## Keywords

uniapp, uni-app, project creator, project initialization, HBuilderX, Vue CLI, manifest.json, pages.json, uni-app setup, uni-app template, 创建项目, 项目初始化, 快速开始

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
