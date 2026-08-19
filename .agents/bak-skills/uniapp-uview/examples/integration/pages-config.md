# Pages Configuration

## pages.json 配置

在 UniApp 项目中，`pages.json` 是页面配置文件，需要正确配置以使用 uView UI。

### 基本配置

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
    }
  },
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
    "navigationBarTitleText": "UniApp",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#f5f5f5"
  }
}
```

### 使用 uView 导航栏

#### 方式一：使用 uView 导航栏组件

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationStyle": "custom",
        "navigationBarTitleText": "首页"
      }
    }
  ]
}
```

页面中使用 uView 导航栏：

```vue
<template>
  <view>
    <u-navbar title="首页" :border="true"></u-navbar>
    <!-- 页面内容 -->
  </view>
</template>
```

#### 方式二：使用原生导航栏

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页",
        "navigationBarBackgroundColor": "#409EFF",
        "navigationBarTextStyle": "white"
      }
    }
  ]
}
```

### TabBar 配置

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
        "iconPath": "static/tab-home.png",
        "selectedIconPath": "static/tab-home-current.png",
        "text": "首页"
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

### 使用 uView TabBar 组件

如果使用 uView 的 TabBar 组件，可以禁用原生 TabBar：

```json
{
  "tabBar": {
    "custom": true,
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      }
    ]
  }
}
```

### 页面样式配置

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页",
        "navigationBarBackgroundColor": "#409EFF",
        "navigationBarTextStyle": "white",
        "backgroundColor": "#f5f5f5",
        "enablePullDownRefresh": true,
        "onReachBottomDistance": 50
      }
    }
  ]
}
```

### 下拉刷新配置

```json
{
  "pages": [
    {
      "path": "pages/list/list",
      "style": {
        "navigationBarTitleText": "列表",
        "enablePullDownRefresh": true
      }
    }
  ]
}
```

页面中使用 uView 下拉刷新：

```vue
<template>
  <view>
    <u-list @refresh="onRefresh" @loadmore="onLoadMore">
      <!-- 列表内容 -->
    </u-list>
  </view>
</template>

<script>
export default {
  methods: {
    onRefresh() {
      // 刷新逻辑
    },
    onLoadMore() {
      // 加载更多逻辑
    }
  }
}
</script>
```

### 条件编译配置

不同平台可以有不同的配置：

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页",
        "// #ifdef H5": {
          "navigationStyle": "custom"
        },
        "// #ifdef MP-WEIXIN": {
          "navigationBarTitleText": "微信首页"
        }
      }
    }
  ]
}
```

### 完整示例

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
    }
  },
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页",
        "navigationBarBackgroundColor": "#409EFF",
        "navigationBarTextStyle": "white"
      }
    },
    {
      "path": "pages/list/list",
      "style": {
        "navigationBarTitleText": "列表",
        "enablePullDownRefresh": true
      }
    }
  ],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "UniApp",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#f5f5f5"
  },
  "tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#409EFF",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      }
    ]
  }
}
```

## 注意事项

1. **easycom 配置**：必须在 pages.json 中配置 easycom
2. **路径正确性**：确保组件路径正确
3. **样式配置**：合理配置页面样式，与 uView 主题协调
4. **平台差异**：注意不同平台的配置差异
5. **性能优化**：合理配置下拉刷新和上拉加载
