# uni-app-x 项目模板

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/quickstart-cli.html

## 标准项目结构

```
my-uniappx-project/
├── src/
│   ├── pages/                  # 页面目录
│   │   ├── index/
│   │   │   └── index.vue
│   │   └── ...
│   ├── components/             # 组件目录
│   │   └── ...
│   ├── static/                 # 静态资源
│   ├── utils/                  # 工具函数
│   ├── api/                    # API 接口
│   ├── store/                  # 状态管理（Pinia）
│   ├── App.vue                 # 应用入口
│   └── main.ts                 # TypeScript 入口
├── manifest.json               # 应用配置
├── pages.json                  # 页面路由配置
├── vite.config.ts              # Vite 配置
├── tsconfig.json               # TypeScript 配置
└── package.json
```

## manifest.json 模板

```json
{
  "name": "my-uniappx",
  "appid": "",
  "description": "uni-app-x 项目",
  "versionName": "1.0.0",
  "versionCode": "100",
  "transformPx": false,
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

## pages.json 模板

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
    "navigationBarTitleText": "uni-app-x",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  }
}
```

## 页面模板（TypeScript + Composition API）

```vue
<template>
  <view class="container">
    <text class="title">{{ title }}</text>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad, onShow, onReady, onHide, onUnload } from '@dcloudio/uni-app'

const title = ref<string>('Hello uni-app-x')

onLoad((options) => {
  console.log('页面加载', options)
})

onShow(() => {
  console.log('页面显示')
})

onReady(() => {
  console.log('页面初次渲染完成')
})

onHide(() => {
  console.log('页面隐藏')
})

onUnload(() => {
  console.log('页面卸载')
})
</script>

<style scoped>
.container {
  padding: 20px;
}
.title {
  font-size: 18px;
  color: #333;
}
</style>
```

## 组件模板（TypeScript）

```vue
<template>
  <view class="my-component">
    <text>{{ message }}</text>
  </view>
</template>

<script setup lang="ts">
interface Props {
  message?: string
}

const props = withDefaults(defineProps<Props>(), {
  message: 'Hello'
})

const emit = defineEmits<{
  (e: 'update', value: string): void
  (e: 'delete'): void
}>()
</script>

<style scoped>
.my-component {
  padding: 10px;
}
</style>
```

## App.vue 模板

```vue
<template>
  <view id="app">
    <!-- 应用内容 -->
  </view>
</template>

<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
})

onShow(() => {
  console.log('App Show')
})

onHide(() => {
  console.log('App Hide')
})
</script>

<style>
/* 全局样式 */
</style>
```

## main.ts 模板

```typescript
import { createSSRApp } from 'vue'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
```

## vite.config.ts 模板

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

## tsconfig.json 模板

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
