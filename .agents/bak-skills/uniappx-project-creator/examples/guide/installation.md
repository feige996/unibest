# uni-app-x 安装指南

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/quickstart-cli.html

## 环境要求

### HBuilderX 版本

- **最低版本**：HBuilderX 3.93+
- **推荐版本**：最新版本

### Node.js 版本

- **推荐版本**：Node.js 16.x 或更高版本
- **最低版本**：Node.js 14.x

```bash
# 检查 Node.js 版本
node --version

# 检查 npm 版本
npm --version
```

### TypeScript

uni-app-x 使用 TypeScript，需要 TypeScript 支持。

## 安装方式

### 方式一：使用 HBuilderX（推荐）

HBuilderX 是 DCloud 官方提供的 IDE，内置 uni-app-x 开发环境。

**下载安装**：
1. 访问 https://www.dcloud.io/hbuilderx.html
2. 下载 HBuilderX（App 开发版，版本 3.93+）
3. 安装并启动 HBuilderX

**创建项目**：
1. 文件 → 新建 → 项目
2. 选择 **uni-app x**
3. 选择模板（默认模板、示例模板等）
4. 填写项目名称和路径
5. 点击创建

### 方式二：使用 CLI

```bash
# 使用官方模板创建项目
npx degit dcloudio/uni-preset-vue-x my-project

# 或使用官方脚手架
npm create uni-app-x@latest my-project
```

## 项目结构

创建后的项目结构：

```
my-project/
├── src/                    # 源代码目录
│   ├── pages/             # 页面目录
│   │   ├── index/
│   │   │   └── index.vue
│   │   └── ...
│   ├── components/        # 组件目录
│   │   └── ...
│   ├── static/            # 静态资源
│   │   └── ...
│   ├── utils/             # 工具函数
│   ├── api/               # API 接口
│   ├── store/             # 状态管理
│   ├── App.vue            # 应用入口
│   └── main.ts            # 入口文件（TypeScript）
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

## 验证安装

创建项目后，验证安装是否成功：

```bash
cd my-project
npm install
npm run dev:h5
```

如果浏览器自动打开并显示 uni-app-x 欢迎页面，说明安装成功。

## 常见问题

### 1. HBuilderX 版本过低

确保使用 HBuilderX 3.93 或更高版本。

### 2. TypeScript 错误

检查 `tsconfig.json` 配置是否正确，确保安装了 `@dcloudio/types`。

### 3. 依赖安装失败

使用国内镜像：

```bash
npm config set registry https://registry.npmmirror.com
```

## 下一步

安装完成后，参考 `quick-start.md` 开始创建第一个项目。
