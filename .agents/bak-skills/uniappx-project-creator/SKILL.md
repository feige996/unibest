---
name: uniappx-project-creator
description: Provides one-command project creation for uni-app-x including Vue 3 + TypeScript + Vite setup, configuration, and template generation. Use when the user asks to create a uni-app-x project with a single command, needs to initialize a new uni-app-x project, or generate uni-app-x project structure.
license: Complete terms in LICENSE.txt
---

## When to use this skill

Use this skill whenever the user wants to:
- Create a new uni-app-x project from scratch
- Initialize uni-app-x project structure with TypeScript and Vue 3
- Set up development environment for uni-app-x
- Generate project templates with TypeScript configuration
- Configure manifest.json and pages.json for uni-app-x
- Create uni-app-x pages and components with TypeScript
- Set up uni-app-x project with HBuilderX or CLI

## How to use this skill

To create a uni-app-x project with a single command or via HBuilderX:

1. **Identify the project type** from the user's request:
   - Standard uni-app-x project → Use TypeScript + Vue 3 template
   - HBuilderX project → Use HBuilderX creation method
   - CLI project → Use official CLI commands

2. **Load the appropriate example file** from the `examples/guide/` directory:
   - `examples/guide/installation.md` - Installation and environment setup
   - `examples/guide/quick-start.md` - Quick start guide
   - `examples/guide/project-types.md` - Different project types and templates

3. **Load the appropriate template file** from the `templates/` directory:
   - `templates/project-templates.md` - Project structure templates
   - `templates/cli-commands.md` - CLI command templates

4. **Follow the specific instructions** in those files for project creation, structure, and configuration

5. **Generate the project structure** with proper TypeScript and Vue 3 configurations

**Important Notes**:
- This skill focuses on uni-app-x CLI quickstart and HBuilderX creation flows
- Use one command creation when the user wants "一句话创建"
- uni-app-x requires Vue 3 + TypeScript + Vite

## Examples and Templates

### Examples

Located in `examples/guide/`:

- **installation.md** - Installation guide for uni-app-x development environment
- **quick-start.md** - Quick start guide for creating first uni-app-x project
- **project-types.md** - Different project types and configurations

### Templates

Located in `templates/`:

- **project-templates.md** - Complete project structure templates with TypeScript
- **cli-commands.md** - CLI command templates for project creation

## API Reference

This skill focuses on project creation and initialization. For component and API references, see `uniappx-project-guide`.

## Best Practices

1. **Use TypeScript**: uni-app-x requires TypeScript, ensure proper type definitions
2. **Vue 3 Composition API**: Use Composition API with `<script setup>` syntax
3. **Configure properly**: Set up manifest.json, pages.json, and tsconfig.json correctly
4. **Organize structure**: Follow standard uni-app-x directory structure
5. **Version control**: Initialize git repository after project creation

## Resources

- **Official Documentation**: https://uniapp.dcloud.net.cn/quickstart-cli.html
- **uni-app-x Documentation**: https://doc.dcloud.net.cn/uni-app-x/
- **HBuilderX**: https://www.dcloud.io/hbuilderx.html
- **TypeScript**: https://www.typescriptlang.org/
- **Vue 3**: https://cn.vuejs.org/

## Keywords

uniappx, uni-app-x, project creator, TypeScript, Vue 3, project initialization, HBuilderX, manifest.json, pages.json, uni-app-x setup, uni-app-x template, 创建项目, 项目初始化, 快速开始

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
