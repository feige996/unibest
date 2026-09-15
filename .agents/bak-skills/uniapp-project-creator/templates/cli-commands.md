# uni-app CLI 命令模板

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/quickstart-cli.html

## 项目创建命令

### 使用 Vue CLI

```bash
# 安装 Vue CLI（如果未安装）
npm install -g @vue/cli

# 创建 uni-app 项目
vue create -p dcloudio/uni-preset-vue my-project

# 选择 Vue 版本
# - Vue 2
# - Vue 3
```

### 使用 degit（推荐，更快）

```bash
# 创建 Vue 2 项目
npx degit dcloudio/uni-preset-vue my-project

# 创建 Vue 3 项目
npx degit dcloudio/uni-preset-vue#vite-ts my-project

# 创建空项目
npx degit dcloudio/uni-preset-vue#empty my-project
```

### 使用官方 CLI

```bash
# 安装 uni-app CLI
npm install -g @dcloudio/uvm

# 创建项目
npx degit dcloudio/uni-preset-vue my-project
```

## 项目运行命令

### 开发环境

```bash
# H5 平台
npm run dev:h5

# 微信小程序
npm run dev:mp-weixin

# 支付宝小程序
npm run dev:mp-alipay

# 百度小程序
npm run dev:mp-baidu

# 字节跳动小程序
npm run dev:mp-toutiao

# QQ 小程序
npm run dev:mp-qq

# 快手小程序
npm run dev:mp-kuaishou

# App（需要 HBuilderX）
npm run dev:app-plus

# 快应用
npm run dev:quickapp-webview
```

### 生产环境

```bash
# H5 平台
npm run build:h5

# 微信小程序
npm run build:mp-weixin

# 支付宝小程序
npm run build:mp-alipay

# 百度小程序
npm run build:mp-baidu

# 字节跳动小程序
npm run build:mp-toutiao

# QQ 小程序
npm run build:mp-qq

# 快手小程序
npm run build:mp-kuaishou

# App（需要 HBuilderX）
npm run build:app-plus

# 快应用
npm run build:quickapp-webview
```

## 常用命令

### 安装依赖

```bash
# 安装项目依赖
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

### 清理构建

```bash
# 清理 dist 目录
npm run clean

# 或手动删除
rm -rf dist
```

### 代码检查

```bash
# ESLint 检查
npm run lint

# 自动修复
npm run lint:fix
```

## 一键创建项目脚本

### 创建 Vue 2 项目

```bash
#!/bin/bash
# create-vue2-project.sh

PROJECT_NAME=$1

if [ -z "$PROJECT_NAME" ]; then
  echo "Usage: ./create-vue2-project.sh <project-name>"
  exit 1
fi

echo "Creating Vue 2 uni-app project: $PROJECT_NAME"
npx degit dcloudio/uni-preset-vue $PROJECT_NAME
cd $PROJECT_NAME
npm install
echo "Project created successfully!"
echo "Run 'npm run dev:h5' to start development server"
```

### 创建 Vue 3 项目

```bash
#!/bin/bash
# create-vue3-project.sh

PROJECT_NAME=$1

if [ -z "$PROJECT_NAME" ]; then
  echo "Usage: ./create-vue3-project.sh <project-name>"
  exit 1
fi

echo "Creating Vue 3 uni-app project: $PROJECT_NAME"
npx degit dcloudio/uni-preset-vue#vite-ts $PROJECT_NAME
cd $PROJECT_NAME
npm install
echo "Project created successfully!"
echo "Run 'npm run dev:h5' to start development server"
```

## 快速命令别名

在 `~/.bashrc` 或 `~/.zshrc` 中添加：

```bash
# uni-app 快速创建
alias uniapp-create="npx degit dcloudio/uni-preset-vue"

# uni-app 运行 H5
alias uniapp-dev-h5="npm run dev:h5"

# uni-app 运行微信小程序
alias uniapp-dev-weixin="npm run dev:mp-weixin"

# uni-app 构建 H5
alias uniapp-build-h5="npm run build:h5"

# uni-app 构建微信小程序
alias uniapp-build-weixin="npm run build:mp-weixin"
```

使用：

```bash
# 创建项目
uniapp-create my-project

# 运行 H5
uniapp-dev-h5

# 构建微信小程序
uniapp-build-weixin
```

## 项目初始化完整流程

```bash
# 1. 创建项目
npx degit dcloudio/uni-preset-vue my-project

# 2. 进入项目目录
cd my-project

# 3. 安装依赖
npm install

# 4. 初始化 Git（可选）
git init
git add .
git commit -m "Initial commit"

# 5. 运行项目
npm run dev:h5
```

## 多平台同时运行

```bash
# 使用 concurrently 同时运行多个平台
npm install -g concurrently

# 同时运行 H5 和微信小程序
concurrently "npm run dev:h5" "npm run dev:mp-weixin"
```

## 自定义构建命令

在 `package.json` 中添加：

```json
{
  "scripts": {
    "dev": "npm run dev:h5",
    "build": "npm run build:h5",
    "dev:all": "concurrently \"npm run dev:h5\" \"npm run dev:mp-weixin\"",
    "build:all": "npm run build:h5 && npm run build:mp-weixin"
  }
}
```

## 常见问题解决

### 端口被占用

```bash
# 修改端口（在 vite.config.js 或 webpack 配置中）
# 或使用环境变量
PORT=3000 npm run dev:h5
```

### 清除缓存

```bash
# 清除 node_modules 和重新安装
rm -rf node_modules package-lock.json
npm install

# 清除构建缓存
rm -rf dist .cache
```

## 参考资源

- Vue CLI 文档：https://cli.vuejs.org/
- npm 文档：https://docs.npmjs.com/
- uni-app CLI 文档：https://uniapp.dcloud.net.cn/quickstart-cli.html
