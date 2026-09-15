# uni-app 项目类型

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/quickstart-cli.html

## 项目类型

### 1. Vue 2 项目

**特点**：
- 使用 Vue 2.x
- 使用 Options API
- 稳定成熟，兼容性好

**创建方式**：

```bash
# 使用 Vue CLI
vue create -p dcloudio/uni-preset-vue my-vue2-project

# 选择 Vue 2
```

**适用场景**：
- 需要兼容旧版本 Vue 的项目
- 团队熟悉 Vue 2 语法
- 需要稳定性的项目

### 2. Vue 3 项目

**特点**：
- 使用 Vue 3.x
- 支持 Composition API 和 Options API
- 性能更好，包体积更小

**创建方式**：

```bash
# 使用 Vue CLI
vue create -p dcloudio/uni-preset-vue my-vue3-project

# 选择 Vue 3
```

**适用场景**：
- 新项目推荐使用
- 需要更好的性能
- 需要使用 Composition API

### 3. TypeScript 项目

**特点**：
- 使用 TypeScript
- 类型安全
- 更好的代码提示

**创建方式**：

```bash
# 使用 Vue CLI，选择 TypeScript
vue create -p dcloudio/uni-preset-vue my-ts-project

# 选择 TypeScript
```

**项目结构**：

```
my-ts-project/
├── src/
│   ├── pages/
│   ├── components/
│   ├── App.vue
│   └── main.ts          # TypeScript 入口文件
├── tsconfig.json        # TypeScript 配置
└── ...
```

**适用场景**：
- 大型项目
- 需要类型安全
- 团队使用 TypeScript

### 4. uni-ui 项目模板

**特点**：
- 预装 uni-ui 组件库
- 包含常用组件示例
- 快速开发

**创建方式**：

在 HBuilderX 中：
1. 文件 → 新建 → 项目
2. 选择 uni-ui 项目模板

**适用场景**：
- 需要快速开发 UI
- 使用 uni-ui 组件库
- 需要组件示例

### 5. 空项目模板

**特点**：
- 最基础的项目结构
- 不包含示例代码
- 完全自定义

**创建方式**：

```bash
# 使用 degit
npx degit dcloudio/uni-preset-vue#empty my-empty-project
```

**适用场景**：
- 需要完全自定义
- 从零开始开发
- 学习项目结构

## 模板选择建议

### 新手推荐

1. **HBuilderX + 默认模板**：最简单，适合学习
2. **Vue 2 项目**：语法简单，文档丰富

### 有经验开发者推荐

1. **Vue 3 + TypeScript**：现代化，性能好
2. **Vue CLI 创建**：更灵活，可定制

### 企业项目推荐

1. **Vue 3 + TypeScript**：类型安全，可维护性好
2. **uni-ui 模板**：快速开发，组件丰富

## 项目配置

### manifest.json 配置

不同项目类型的基本配置相同，但可以根据需要调整：

```json
{
  "name": "my-app",
  "appid": "",
  "description": "",
  "versionName": "1.0.0",
  "versionCode": "100",
  "transformPx": false,
  "app-plus": {
    "usingComponents": true
  },
  "h5": {
    "router": {
      "mode": "hash"
    }
  },
  "mp-weixin": {
    "appid": "",
    "setting": {
      "urlCheck": false
    }
  }
}
```

### pages.json 配置

所有项目类型的 pages.json 结构相同：

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页"
      }
    }
  ],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "uni-app",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  }
}
```

## 迁移指南

### Vue 2 升级到 Vue 3

参考官方迁移指南：https://v3-migration.vuejs.org/

主要变化：
- 使用 Composition API
- 生命周期钩子变化
- 响应式 API 变化

### JavaScript 迁移到 TypeScript

1. 安装 TypeScript 依赖
2. 添加 `tsconfig.json`
3. 将 `.js` 文件改为 `.ts`
4. 添加类型定义

## 参考资源

- Vue 2 文档：https://v2.cn.vuejs.org/
- Vue 3 文档：https://cn.vuejs.org/
- TypeScript 文档：https://www.typescriptlang.org/
- uni-app 文档：https://uniapp.dcloud.net.cn/
