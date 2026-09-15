# uni-app 快速开始

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/quickstart-cli.html

## 创建第一个项目

### 一句话创建（CLI）

```bash
# Vue 2 项目
npx degit dcloudio/uni-preset-vue my-uniapp

# Vue 3 + Vite 项目
npx degit dcloudio/uni-preset-vue#vite-ts my-uniapp
```

### 使用 HBuilderX

1. **打开 HBuilderX**
2. **文件 → 新建 → 项目**
3. **选择项目类型**：
   - uni-app
   - 选择模板（默认模板、uni-ui 项目模板等）
4. **填写项目信息**：
   - 项目名称：my-first-uniapp
   - 项目路径：选择保存位置
5. **点击创建**

### 使用 Vue CLI

```bash
# 创建项目
vue create -p dcloudio/uni-preset-vue my-first-uniapp

# 进入项目目录
cd my-first-uniapp

# 安装依赖
npm install

# 运行到 H5
npm run dev:h5

# 运行到微信小程序
npm run dev:mp-weixin
```

### 使用官方 CLI

```bash
# 使用 degit 创建项目
npx degit dcloudio/uni-preset-vue my-first-uniapp

# 进入项目目录
cd my-first-uniapp

# 安装依赖
npm install

# 运行项目
npm run dev:h5
```

## 项目结构

创建后的项目结构：

```
my-first-uniapp/
├── pages/                  # 页面目录
│   ├── index/
│   │   └── index.vue      # 首页
│   └── ...
├── components/             # 组件目录
├── static/                 # 静态资源
├── uni_modules/            # uni_modules 插件
├── App.vue                 # 应用入口
├── main.js                 # 入口文件
├── manifest.json           # 应用配置
├── pages.json              # 页面路由配置
└── uni.scss                # 全局样式
```

## 运行项目

### H5 平台

```bash
npm run dev:h5
```

浏览器会自动打开 `http://localhost:8080`

### 微信小程序

```bash
npm run dev:mp-weixin
```

项目会编译到 `dist/dev/mp-weixin`，使用微信开发者工具打开该目录。

### App 平台

```bash
# 使用 HBuilderX 运行
# 或使用 CLI
npm run dev:app-plus
```

## 创建第一个页面

1. **在 `pages` 目录下创建页面文件夹**：

```
pages/
└── hello/
    └── hello.vue
```

2. **创建页面文件 `hello.vue`**：

```vue
<template>
  <view class="container">
    <text class="title">Hello uni-app!</text>
    <button @click="handleClick">点击我</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello uni-app!'
    }
  },
  methods: {
    handleClick() {
      uni.showToast({
        title: '按钮被点击了',
        icon: 'success'
      })
    }
  },
  onLoad() {
    console.log('页面加载')
  }
}
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

4. **页面跳转**：

```javascript
// 在 index.vue 中
uni.navigateTo({
  url: '/pages/hello/hello'
})
```

## 创建第一个组件

1. **在 `components` 目录下创建组件**：

```
components/
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

<script>
export default {
  name: 'MyButton',
  props: {
    text: {
      type: String,
      default: '按钮'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
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

<script>
import MyButton from '@/components/my-button/my-button.vue'

export default {
  components: {
    MyButton
  },
  methods: {
    handleButtonClick() {
      console.log('按钮被点击')
    }
  }
}
</script>
```

## 下一步

- 学习 uni-app 组件：参考 `uniapp-project`
- 学习 uni-app API：参考 `uniapp-project`
- 配置项目：参考 `templates/project-templates.md`
