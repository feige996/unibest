# uni-app-x CLI 命令模板

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/quickstart-cli.html

## 项目创建命令

### 使用官方模板

```bash
# 创建项目
npx degit dcloudio/uni-preset-vue-x my-project

# 或使用官方脚手架
npm create uni-app-x@latest my-project
```

### 使用 HBuilderX

1. 文件 → 新建 → 项目
2. 选择 **uni-app x**
3. 选择模板
4. 填写项目信息
5. 点击创建

## 项目运行命令

### 开发环境

```bash
# H5 平台
npm run dev:h5

# 微信小程序
npm run dev:mp-weixin

# App（需要 HBuilderX）
npm run dev:app
```

### 生产环境

```bash
# H5 平台
npm run build:h5

# 微信小程序
npm run build:mp-weixin

# App（需要 HBuilderX）
npm run build:app
```

## 常用命令

### 安装依赖

```bash
npm install
```

### 类型检查

```bash
# TypeScript 类型检查
npm run type-check

# 或使用 tsc
npx tsc --noEmit
```

### 代码检查

```bash
# ESLint 检查
npm run lint

# 自动修复
npm run lint:fix
```

## 一键创建项目脚本

```bash
#!/bin/bash
# create-uniappx-project.sh

PROJECT_NAME=$1

if [ -z "$PROJECT_NAME" ]; then
  echo "Usage: ./create-uniappx-project.sh <project-name>"
  exit 1
fi

echo "Creating uni-app-x project: $PROJECT_NAME"
npx degit dcloudio/uni-preset-vue-x $PROJECT_NAME
cd $PROJECT_NAME
npm install
echo "Project created successfully!"
echo "Run 'npm run dev:h5' to start development server"
```

## 项目初始化完整流程

```bash
# 1. 创建项目
npx degit dcloudio/uni-preset-vue-x my-project

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

## 参考资源

- uni-app-x 文档：https://doc.dcloud.net.cn/uni-app-x/
- TypeScript 文档：https://www.typescriptlang.org/
- Vite 文档：https://cn.vitejs.dev/
