# uni-app-x 快速开始

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/quickstart-cli.html

## 创建第一个项目

### 一句话创建（CLI）

```bash
# 官方脚手架（推荐）
npm create uni-app-x@latest my-uniappx

# 或使用官方模板
npx degit dcloudio/uni-preset-vue-x my-uniappx
```

### 使用 HBuilderX

1. **打开 HBuilderX**（版本 3.93+）
2. **文件 → 新建 → 项目**
3. **选择项目类型**：uni-app x
4. **选择模板**：默认模板或示例模板
5. **填写项目信息**：
   - 项目名称：my-first-uniappx
   - 项目路径：选择保存位置
6. **点击创建**

### 使用 CLI

```bash
# 创建项目
npx degit dcloudio/uni-preset-vue-x my-first-uniappx

# 进入项目目录
cd my-first-uniappx

# 安装依赖
npm install

# 运行到 H5
npm run dev:h5

# 运行到微信小程序
npm run dev:mp-weixin
```

## 项目结构

创建后的项目结构：

```
my-first-uniappx/
├── src/
│   ├── pages/
│   │   ├── index/
│   │   │   └── index.vue
│   │   └── ...
│   ├── components/
│   ├── static/
│   ├── App.vue
│   └── main.ts          # TypeScript 入口
├── manifest.json
├── pages.json
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 运行项目

### H5 平台

```bash
npm run dev:h5
```

浏览器会自动打开 `http://localhost:3000`

### 微信小程序

```bash
npm run dev:mp-weixin
```

项目会编译到 `dist/dev/mp-weixin`，使用微信开发者工具打开该目录。

## 创建第一个页面（TypeScript + Composition API）

1. **在 `src/pages` 目录下创建页面**：

```
src/pages/
└── hello/
    └── hello.vue
```

2. **创建页面文件 `hello.vue`**：

```vue
<template>
  <view class="container">
    <text class="title">{{ title }}</text>
    <button @click="handleClick">点击我</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

const title = ref<string>('Hello uni-app-x!')

const handleClick = () => {
  uni.showToast({
    title: '按钮被点击了',
    icon: 'success'
  })
}

onLoad((options) => {
  console.log('页面加载', options)
})
</script>

<style scoped>
.container {
  padding: 20px;
  text-align: center;
}
.title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}
</style>
```

3. **在 `pages.json` 中注册页面**：

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页"
      }
    },
    {
      "path": "pages/hello/hello",
      "style": {
        "navigationBarTitleText": "Hello"
      }
    }
  ]
}
```

## 创建第一个组件（TypeScript）

1. **在 `src/components` 目录下创建组件**：

```
src/components/
└── my-button/
    └── my-button.vue
```

2. **组件代码**：

```vue
<template>
  <button class="my-button" @click="handleClick">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  text?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: '按钮'
})

const emit = defineEmits<{
  (e: 'click'): void
}>()

const handleClick = () => {
  emit('click')
}
</script>

<style scoped>
.my-button {
  background-color: #007aff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
}
</style>
```

3. **在页面中使用**：

```vue
<template>
  <view>
    <my-button text="点击我" @click="handleButtonClick"></my-button>
  </view>
</template>

<script setup lang="ts">
import MyButton from '@/components/my-button/my-button.vue'

const handleButtonClick = () => {
  console.log('按钮被点击')
}
</script>
```

## 与 uni-app 的区别

### 1. 技术栈

- **uni-app**：Vue 2/3 + JavaScript
- **uni-app-x**：Vue 3 + TypeScript + Vite

### 2. 开发体验

- 更好的 TypeScript 支持
- 更快的构建速度（Vite）
- 更好的代码提示

### 3. 性能

- 更小的包体积
- 更快的启动速度
- 更好的运行时性能

## 下一步

- 学习 uni-app-x 组件：参考 `uniappx-project`
- 学习 uni-app-x API：参考 `uniappx-project`
- 配置项目：参考 `templates/project-templates.md`
