# uni-app-x 项目类型

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/quickstart-cli.html

## 项目特点

uni-app-x 项目统一使用：
- **Vue 3**：必须使用 Vue 3
- **TypeScript**：必须使用 TypeScript
- **Vite**：使用 Vite 作为构建工具
- **Composition API**：推荐使用 Composition API

## 项目结构

所有 uni-app-x 项目都遵循相同的结构：

```
my-uniappx-project/
├── src/
│   ├── pages/             # 页面目录
│   ├── components/        # 组件目录
│   ├── static/            # 静态资源
│   ├── utils/             # 工具函数
│   ├── api/               # API 接口
│   ├── store/             # 状态管理
│   ├── App.vue            # 应用入口
│   └── main.ts            # TypeScript 入口
├── manifest.json          # 应用配置
├── pages.json             # 页面路由配置
├── vite.config.ts         # Vite 配置
├── tsconfig.json          # TypeScript 配置
└── package.json
```

## 配置文件

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM"],
    "jsx": "preserve",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "types": ["@dcloudio/types"]
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"],
  "exclude": ["node_modules"]
}
```

### vite.config.ts

```typescript
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
  plugins: [uni()],
  server: {
    port: 3000,
    open: true
  }
})
```

### manifest.json

```json
{
  "name": "my-app-x",
  "appid": "",
  "description": "",
  "versionName": "1.0.0",
  "versionCode": "100",
  "uni-app-x": {
    "compilerVersion": "1.0.0",
    "vueVersion": "3",
    "typescript": true
  },
  "app-plus": {
    "usingComponents": true,
    "compilerVersion": 3
  },
  "h5": {
    "router": {
      "mode": "hash",
      "base": "/"
    }
  },
  "mp-weixin": {
    "appid": "",
    "setting": {
      "urlCheck": false
    },
    "usingComponents": true
  }
}
```

## 创建方式

### 使用 HBuilderX

1. 文件 → 新建 → 项目
2. 选择 **uni-app x**
3. 选择模板（默认模板、示例模板等）
4. 填写项目信息
5. 点击创建

### 使用 CLI

```bash
# 使用官方模板
npx degit dcloudio/uni-preset-vue-x my-project

# 或使用官方脚手架
npm create uni-app-x@latest my-project
```

## 开发规范

### 1. TypeScript 使用

- 为所有组件和函数添加类型定义
- 使用接口定义数据结构
- 利用类型推断减少冗余代码

### 2. Composition API

- 使用 `<script setup>` 语法
- 提取可复用的组合式函数
- 合理组织代码逻辑

### 3. 代码规范

- 遵循 Vue 3 最佳实践
- 使用 ESLint 和 Prettier
- 统一代码风格

## 参考资源

- uni-app-x 文档：https://doc.dcloud.net.cn/uni-app-x/
- Vue 3 文档：https://cn.vuejs.org/
- TypeScript 文档：https://www.typescriptlang.org/
- Vite 文档：https://cn.vitejs.dev/
