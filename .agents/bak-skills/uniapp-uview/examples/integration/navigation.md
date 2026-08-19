# Navigation

## 导航和路由

在 UniApp 中使用 uView UI 组件进行页面导航和路由管理。

### 使用 UniApp 导航 API

#### 页面跳转

```javascript
// 保留当前页面，跳转到应用内的某个页面
uni.navigateTo({
  url: '/pages/detail/detail?id=1'
})

// 关闭当前页面，跳转到应用内的某个页面
uni.redirectTo({
  url: '/pages/login/login'
})

// 跳转到 tabBar 页面
uni.switchTab({
  url: '/pages/index/index'
})

// 返回上一页面
uni.navigateBack({
  delta: 1
})
```

#### 使用 uView 按钮进行跳转

```vue
<template>
  <view>
    <u-button 
      type="primary" 
      @click="goToDetail"
    >
      跳转到详情页
    </u-button>
  </view>
</template>

<script>
export default {
  methods: {
    goToDetail() {
      uni.navigateTo({
        url: '/pages/detail/detail?id=1'
      })
    }
  }
}
</script>
```

### 使用 uView 导航栏

#### 自定义导航栏

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationStyle": "custom"
      }
    }
  ]
}
```

页面中使用 uView 导航栏：

```vue
<template>
  <view>
    <u-navbar 
      title="首页" 
      :border="true"
      :back-icon-color="'#ffffff'"
      :background="{
        background: 'linear-gradient(45deg, #409EFF, #67C23A)'
      }"
    >
      <view slot="right" @click="handleRight">
        <u-icon name="more-dot-fill" color="#ffffff"></u-icon>
      </view>
    </u-navbar>
    
    <!-- 页面内容 -->
  </view>
</template>

<script>
export default {
  methods: {
    handleRight() {
      // 右侧按钮点击事件
    }
  }
}
</script>
```

### 使用 uView 返回顶部

```vue
<template>
  <view class="container">
    <!-- 长列表内容 -->
    <u-back-top :scroll-top="scrollTop"></u-back-top>
  </view>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0
    }
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop
  }
}
</script>
```

### TabBar 导航

#### 使用原生 TabBar

```json
{
  "tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#409EFF",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/user/user",
        "text": "我的"
      }
    ]
  }
}
```

#### 使用 uView TabBar 组件

```vue
<template>
  <view>
    <u-tabbar 
      :list="tabbarList" 
      :mid-button="true"
      @change="tabbarChange"
    ></u-tabbar>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabbarList: [
        {
          iconPath: "static/tab-home.png",
          selectedIconPath: "static/tab-home-current.png",
          text: "首页",
          pagePath: "/pages/index/index"
        },
        {
          iconPath: "static/tab-user.png",
          selectedIconPath: "static/tab-user-current.png",
          text: "我的",
          pagePath: "/pages/user/user"
        }
      ]
    }
  },
  methods: {
    tabbarChange(index) {
      const pagePath = this.tabbarList[index].pagePath
      uni.switchTab({
        url: pagePath
      })
    }
  }
}
</script>
```

### 页面传参

#### 传递参数

```javascript
// 跳转并传递参数
uni.navigateTo({
  url: '/pages/detail/detail?id=1&name=test'
})
```

#### 接收参数

```vue
<template>
  <view>
    <text>ID: {{ id }}</text>
    <text>Name: {{ name }}</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      name: ''
    }
  },
  onLoad(options) {
    this.id = options.id
    this.name = options.name
  }
}
</script>
```

### 使用 uView 搜索框导航

```vue
<template>
  <view>
    <u-search 
      placeholder="搜索内容" 
      v-model="keyword"
      @search="handleSearch"
      @custom="handleCustom"
    ></u-search>
  </view>
</template>

<script>
export default {
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    handleSearch() {
      uni.navigateTo({
        url: `/pages/search/search?keyword=${this.keyword}`
      })
    },
    handleCustom() {
      // 自定义操作
    }
  }
}
</script>
```

### 导航栏返回按钮自定义

```vue
<template>
  <view>
    <u-navbar 
      title="详情页"
      :back-icon-name="'arrow-left'"
      @leftClick="handleBack"
    ></u-navbar>
  </view>
</template>

<script>
export default {
  methods: {
    handleBack() {
      // 自定义返回逻辑
      uni.navigateBack({
        delta: 1
      })
    }
  }
}
</script>
```

## 注意事项

1. **路径格式**：路径必须以 `/` 开头
2. **TabBar 跳转**：使用 `uni.switchTab` 跳转到 tabBar 页面
3. **参数传递**：URL 参数需要编码
4. **页面栈**：注意页面栈限制（最多 10 层）
5. **返回按钮**：自定义导航栏需要自己处理返回逻辑
