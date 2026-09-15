# uni-app 安装指南

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/quickstart-cli.html

## 安装方式

### 方式一：使用 HBuilderX（推荐新手）

HBuilderX 是 DCloud 官方提供的 IDE，内置 uni-app 开发环境。

**下载安装**：
1. 访问 https://www.dcloud.io/hbuilderx.html
2. 下载 HBuilderX（标准版或 App 开发版）
3. 安装并启动 HBuilderX

**创建项目**：
1. 文件 → 新建 → 项目
2. 选择 uni-app
3. 选择模板（默认模板、uni-ui 项目模板等）
4. 填写项目名称和路径
5. 点击创建

### 方式二：使用 Vue CLI（推荐有经验开发者）

**安装 Vue CLI**：

```bash
# 全局安装 Vue CLI
npm install -g @vue/cli

# 检查版本
vue --version
```

**创建 uni-app 项目**：

```bash
# 使用官方预设模板
vue create -p dcloudio/uni-preset-vue my-project

# 或使用 degit（更快）
npx degit dcloudio/uni-preset-vue my-project
```

**选择 Vue 版本**：
- Vue 2：稳定版本，兼容性好
- Vue 3：最新版本，性能更好

### 方式三：使用官方 CLI（uni-app CLI）

```bash
# 安装 uni-app CLI
npm install -g @dcloudio/uvm
uvm

# 创建项目
npx degit dcloudio/uni-preset-vue my-project
```

## 环境要求

### Node.js 版本

- **推荐版本**：Node.js 14.x 或更高版本
- **最低版本**：Node.js 12.x

```bash
# 检查 Node.js 版本
node --version

# 检查 npm 版本
npm --version
```

### 其他工具

- **微信开发者工具**：用于开发微信小程序
- **Android Studio**：用于开发 Android App
- **Xcode**：用于开发 iOS App（仅 macOS）

## 验证安装

创建项目后，验证安装是否成功：

```bash
cd my-project
npm install
npm run dev:h5
```

如果浏览器自动打开并显示 uni-app 欢迎页面，说明安装成功。

## 常见问题

### 1. npm 安装慢

使用国内镜像：

```bash
npm config set registry https://registry.npmmirror.com
```

### 2. Vue CLI 版本问题

确保使用最新版本：

```bash
npm update -g @vue/cli
```

### 3. HBuilderX 无法创建项目

检查 HBuilderX 版本，确保是最新版本。

## 下一步

安装完成后，参考 `quick-start.md` 开始创建第一个项目。
