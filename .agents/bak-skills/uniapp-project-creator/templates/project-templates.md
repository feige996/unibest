# uni-app 项目模板

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/quickstart-cli.html

## 标准项目结构

```
my-uniapp-project/
├── pages/                  # 页面目录
│   ├── index/
│   │   └── index.vue      # 首页
│   └── ...
├── components/             # 组件目录
│   └── ...
├── static/                 # 静态资源
│   ├── images/
│   ├── icons/
│   └── ...
├── uni_modules/            # uni_modules 插件
├── utils/                  # 工具函数
│   ├── request.js          # 网络请求封装
│   └── ...
├── api/                    # API 接口
│   └── ...
├── store/                  # 状态管理（Vuex/Pinia）
│   └── ...
├── App.vue                 # 应用入口
├── main.js                 # 入口文件
├── manifest.json           # 应用配置
├── pages.json              # 页面路由配置
├── uni.scss                # 全局样式
└── package.json            # 项目依赖
```

## manifest.json 模板

### 基础配置

```json
{
  "name": "my-uniapp",
  "appid": "",
  "description": "uni-app 项目",
  "versionName": "1.0.0",
  "versionCode": "100",
  "transformPx": false,
  "app-plus": {
    "usingComponents": true,
    "nvueStyleCompiler": "uni-app",
    "compilerVersion": 3,
    "splashscreen": {
      "alwaysShowBeforeRender": true,
      "waiting": true,
      "autoclose": true,
      "delay": 0
    },
    "modules": {},
    "distribute": {
      "android": {
        "permissions": [
          "<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\"/>",
          "<uses-permission android:name=\"android.permission.MOUNT_UNMOUNT_FILESYSTEMS\"/>",
          "<uses-permission android:name=\"android.permission.VIBRATE\"/>",
          "<uses-permission android:name=\"android.permission.READ_LOGS\"/>",
          "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\"/>",
          "<uses-feature android:name=\"android.hardware.camera.autofocus\"/>",
          "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\"/>",
          "<uses-permission android:name=\"android.permission.CAMERA\"/>",
          "<uses-permission android:name=\"android.permission.GET_ACCOUNTS\"/>",
          "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\"/>",
          "<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\"/>",
          "<uses-permission android:name=\"android.permission.WAKE_LOCK\"/>",
          "<uses-permission android:name=\"android.permission.FLASHLIGHT\"/>",
          "<uses-permission android:name=\"android.permission.WRITE_SETTINGS\"/>"
        ]
      },
      "ios": {},
      "sdkConfigs": {}
    }
  },
  "quickapp": {},
  "mp-weixin": {
    "appid": "",
    "setting": {
      "urlCheck": false
    },
    "usingComponents": true
  },
  "mp-alipay": {
    "usingComponents": true
  },
  "mp-baidu": {
    "usingComponents": true
  },
  "mp-toutiao": {
    "usingComponents": true
  },
  "h5": {
    "router": {
      "mode": "hash",
      "base": "/"
    }
  },
  "vueVersion": "2"
}
```

### Vue 3 配置

```json
{
  "name": "my-uniapp-vue3",
  "appid": "",
  "description": "uni-app Vue 3 项目",
  "versionName": "1.0.0",
  "versionCode": "100",
  "transformPx": false,
  "vueVersion": "3",
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

### 基础配置

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

### 带 TabBar 配置

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
      "path": "pages/category/category",
      "style": {
        "navigationBarTitleText": "分类"
      }
    },
    {
      "path": "pages/cart/cart",
      "style": {
        "navigationBarTitleText": "购物车"
      }
    },
    {
      "path": "pages/user/user",
      "style": {
        "navigationBarTitleText": "我的"
      }
    }
  ],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "uni-app",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  },
  "tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#3cc51f",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "iconPath": "static/tab-home.png",
        "selectedIconPath": "static/tab-home-current.png",
        "text": "首页"
      },
      {
        "pagePath": "pages/category/category",
        "iconPath": "static/tab-category.png",
        "selectedIconPath": "static/tab-category-current.png",
        "text": "分类"
      },
      {
        "pagePath": "pages/cart/cart",
        "iconPath": "static/tab-cart.png",
        "selectedIconPath": "static/tab-cart-current.png",
        "text": "购物车"
      },
      {
        "pagePath": "pages/user/user",
        "iconPath": "static/tab-user.png",
        "selectedIconPath": "static/tab-user-current.png",
        "text": "我的"
      }
    ]
  }
}
```

## 页面模板

### Vue 2 页面模板

```vue
<template>
  <view class="container">
    <text class="title">{{ title }}</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello uni-app'
    }
  },
  onLoad(options) {
    console.log('页面加载', options)
  },
  onShow() {
    console.log('页面显示')
  },
  onReady() {
    console.log('页面初次渲染完成')
  },
  onHide() {
    console.log('页面隐藏')
  },
  onUnload() {
    console.log('页面卸载')
  },
  methods: {
    // 方法
  }
}
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

### Vue 3 页面模板（Composition API）

```vue
<template>
  <view class="container">
    <text class="title">{{ title }}</text>
  </view>
</template>

<script setup>
import { ref, onLoad, onShow, onReady, onHide, onUnload } from '@dcloudio/uni-app'

const title = ref('Hello uni-app')

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

## 组件模板

### Vue 2 组件模板

```vue
<template>
  <view class="my-component">
    <text>{{ message }}</text>
  </view>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    message: {
      type: String,
      default: 'Hello'
    }
  },
  data() {
    return {
      // 数据
    }
  },
  methods: {
    // 方法
  }
}
</script>

<style scoped>
.my-component {
  padding: 10px;
}
</style>
```

### Vue 3 组件模板（Composition API）

```vue
<template>
  <view class="my-component">
    <text>{{ message }}</text>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: 'Hello'
  }
})

const emit = defineEmits(['update', 'delete'])

// 响应式数据
const count = ref(0)

// 方法
const handleClick = () => {
  emit('update', 'new value')
}
</script>

<style scoped>
.my-component {
  padding: 10px;
}
</style>
```

## App.vue 模板

### Vue 2 App.vue

```vue
<template>
  <view id="app">
    <!-- 应用内容 -->
  </view>
</template>

<script>
export default {
  onLaunch: function() {
    console.log('App Launch')
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style>
/* 全局样式 */
</style>
```

### Vue 3 App.vue

```vue
<template>
  <view id="app">
    <!-- 应用内容 -->
  </view>
</template>

<script setup>
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

## main.js 模板

### Vue 2 main.js

```javascript
import { createSSRApp } from 'vue'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
```

### Vue 3 main.js

```javascript
import { createSSRApp } from 'vue'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
```

## 使用说明

1. 根据项目类型选择合适的模板
2. 复制模板代码到对应文件
3. 根据项目需求修改配置
4. 添加页面和组件
