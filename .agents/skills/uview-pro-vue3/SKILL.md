---
name: uview-pro-vue3
description: Provides comprehensive guidance for uView Pro Vue 3 component library including components, tools, layouts, and templates. Use when the user asks about uView Pro, needs to build Vue 3 applications with uView Pro, or implement mobile-first UI components.
license: Complete terms in LICENSE.txt
---

## When to use this skill

Use this skill whenever the user wants to:
- Install and set up uView Pro in a uni-app project
- Use uView Pro components in Vue 3 / uni-app applications
- Configure uView Pro (theme, i18n, etc.)
- Use form components (Button, Input, Form, etc.)
- Use data display components (List, Card, etc.)
- Use feedback components (Toast, Modal, etc.)
- Use navigation components (Tabs, NavBar, etc.)
- Use uView Pro tools and utilities
- Use uView Pro layout templates
- Customize component styles and themes
- Handle component events
- Understand uView Pro API and methods
- Troubleshoot uView Pro issues

## How to use this skill

This skill is organized to match the uView Pro official documentation structure (https://uviewpro.cn/, https://uviewpro.cn/zh/guide/intro.html, https://uviewpro.cn/zh/components/intro.html, https://uviewpro.cn/zh/tools/intro.html, https://uviewpro.cn/zh/layout/intro.html). When working with uView Pro:

1. **Identify the topic** from the user's request:
   - Installation/安装 → `examples/guide/installation.md`
   - Quick Start/快速开始 → `examples/guide/quick-start.md`
   - Components/组件 → `examples/components/`
   - Tools/工具 → `examples/tools/`
   - Layout/布局 → `examples/layout/`
   - API/API 文档 → `api/`

2. **Load the appropriate example file** from the `examples/` directory:

   **Guide (使用指南)**:
   - `examples/guide/intro.md` - Introduction
   - `examples/guide/installation.md` - Installation guide
   - `examples/guide/quick-start.md` - Quick start guide
   - `examples/guide/theme.md` - Theme customization
   - `examples/guide/i18n.md` - Internationalization
   - `examples/guide/config.md` - Configuration

   **Components (组件)**:
   - `examples/components/intro.md` - Components introduction
   - `examples/components/button.md` - Button component
   - `examples/components/input.md` - Input component
   - `examples/components/form.md` - Form component
   - `examples/components/list.md` - List component
   - `examples/components/card.md` - Card component
   - `examples/components/toast.md` - Toast component
   - `examples/components/modal.md` - Modal component
   - `examples/components/tabs.md` - Tabs component
   - `examples/components/navbar.md` - NavBar component
   - `examples/components/date-picker.md` - DatePicker component
   - `examples/components/select.md` - Select component
   - `examples/components/switch.md` - Switch component
   - `examples/components/checkbox.md` - Checkbox component
   - `examples/components/radio.md` - Radio component
   - `examples/components/upload.md` - Upload component
   - `examples/components/pagination.md` - Pagination component
   - `examples/components/avatar.md` - Avatar component
   - `examples/components/badge.md` - Badge component
   - `examples/components/tag.md` - Tag component
   - `examples/components/empty.md` - Empty component
   - `examples/components/loading.md` - Loading component
   - `examples/components/popup.md` - Popup component
   - `examples/components/dropdown.md` - Dropdown component
   - `examples/components/drawer.md` - Drawer component

   **Tools (工具)**:
   - `examples/tools/intro.md` - Tools introduction
   - `examples/tools/http.md` - HTTP request
   - `examples/tools/storage.md` - Storage utilities
   - `examples/tools/router.md` - Router utilities
   - `examples/tools/validator.md` - Validator utilities
   - `examples/tools/format.md` - Format utilities
   - `examples/tools/color.md` - Color utilities

   **Layout (布局)**:
   - `examples/layout/intro.md` - Layout introduction
   - `examples/layout/grid.md` - Grid layout
   - `examples/layout/flex.md` - Flex layout
   - `examples/layout/container.md` - Container layout

3. **Follow the specific instructions** in that example file for syntax, structure, and best practices

   **Important Notes**:
   - uView Pro is for Vue 3 and uni-app
   - Components use Vue 3 Composition API
   - Examples include both Options API and Composition API
   - Each example file includes key concepts, code examples, and key points

4. **Reference API documentation** in the `api/` directory when needed:
   - `api/component-api.md` - Component API reference
   - `api/props-and-events.md` - Props and events reference
   - `api/tools-api.md` - Tools API reference
   - `api/config-api.md` - Configuration API

5. **Use templates** from the `templates/` directory:
   - `templates/installation.md` - Installation templates
   - `templates/component-usage.md` - Component usage templates
   - `templates/project-setup.md` - Project setup templates

### 1. Understanding uView Pro

uView Pro is a Vue 3 component library designed for uni-app development, providing rich components and utility methods.

**Key Concepts**:
- **Vue 3 Support**: Built for Vue 3 with Composition API
- **uni-app Support**: Optimized for uni-app development
- **Rich Components**: 100+ components for various use cases
- **Theme Customization**: Support for theme customization
- **i18n**: Internationalization support
- **Tools**: Rich utility methods

### 2. Installation

**Using npm**:

```bash
npm install uview-pro
```

**Using yarn**:

```bash
yarn add uview-pro
```

**Using pnpm**:

```bash
pnpm add uview-pro
```

### 3. Basic Setup

```javascript
// main.js
import { createSSRApp } from 'vue'
import uView from 'uview-pro'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uView)
  return {
    app
  }
}
```


### Doc mapping (one-to-one with official documentation)

**Guide (指南)**:
- See guide files in `examples/guide/` or `examples/getting-started/` → https://uviewpro.cn/zh/guide/intro.html

**Components (组件)**:
- See component files in `examples/components/` → https://uviewpro.cn/zh/components/intro.html

## Examples and Templates

This skill includes detailed examples organized to match the official documentation structure. All examples are in the `examples/` directory (see mapping above).

**To use examples:**
- Identify the topic from the user's request
- Load the appropriate example file from the mapping above
- Follow the instructions, syntax, and best practices in that file
- Adapt the code examples to your specific use case

**To use templates:**
- Reference templates in `templates/` directory for common scaffolding
- Adapt templates to your specific needs and coding style

## API Reference

Detailed API documentation is available in the `api/` directory, organized to match the official uView Pro API documentation structure:

### Component API (`api/component-api.md`)
- Component props and events
- Component methods
- Component slots

### Props and Events (`api/props-and-events.md`)
- Common props
- Common events
- Event handling

### Tools API (`api/tools-api.md`)
- HTTP request methods
- Storage methods
- Router methods
- Validator methods
- Format methods
- Color methods

### Configuration API (`api/config-api.md`)
- Global configuration options
- Theme configuration
- i18n configuration

**To use API reference:**
1. Identify the API you need help with
2. Load the corresponding API file from the `api/` directory
3. Find the API signature, parameters, return type, and examples
4. Reference the linked example files for detailed usage patterns
5. All API files include links to relevant example files in the `examples/` directory

## Best Practices

1. **Use on-demand import**: Import only the components you need to reduce bundle size
2. **Use Composition API**: Prefer Composition API for better code organization
3. **Handle events properly**: Use proper event handlers for component interactions
4. **Customize theme**: Use theme variables for customization
5. **Follow design specs**: Follow uView Pro design specifications
6. **Use tools**: Leverage uView Pro tools for common operations
7. **Use layouts**: Use layout templates for consistent page structure

## Resources

- **Official Documentation**: https://uviewpro.cn/
- **Guide**: https://uviewpro.cn/zh/guide/intro.html
- **Components**: https://uviewpro.cn/zh/components/intro.html
- **Tools**: https://uviewpro.cn/zh/tools/intro.html
- **Layout**: https://uviewpro.cn/zh/layout/intro.html

## Keywords

uView Pro, uview-pro, Vue 3, Vue3, uni-app, UI components, component library, 组件库, 按钮, 表单, 列表, 卡片, 提示, 弹窗, 标签页, 导航栏, 日期选择器, 选择器, 开关, 复选框, 单选框, 上传, 分页, 头像, 徽标, 标签, 空状态, 加载, 弹出层, 下拉菜单, 抽屉, HTTP, 存储, 路由, 验证, 格式化, 颜色, 网格布局, 弹性布局, 容器布局, Button, Form, List, Card, Toast, Modal, Tabs, NavBar, DatePicker, Select, Switch, Checkbox, Radio, Upload, Pagination, Avatar, Badge, Tag, Empty, Loading, Popup, Dropdown, Drawer

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
