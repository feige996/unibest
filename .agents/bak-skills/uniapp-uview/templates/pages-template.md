# Pages Configuration Template

## pages.json 配置模板

UniApp + uView 项目的 pages.json 配置模板。

### 完整模板

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
    },
    {
      "path": "pages/detail/detail",
      "style": {
        "navigationBarTitleText": "详情",
        "navigationStyle": "custom"
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
        "text": "首页",
        "iconPath": "static/tab-home.png",
        "selectedIconPath": "static/tab-home-current.png"
      },
      {
        "pagePath": "pages/user/user",
        "text": "我的",
        "iconPath": "static/tab-user.png",
        "selectedIconPath": "static/tab-user-current.png"
      }
    ]
  },
  "condition": {
    "current": 0,
    "list": [
      {
        "name": "首页",
        "path": "pages/index/index"
      }
    ]
  }
}
```

### 使用说明

1. **easycom 配置**：必须配置，用于自动引入 uView 组件
2. **pages 配置**：配置所有页面路径和样式
3. **globalStyle**：配置全局样式
4. **tabBar**：配置底部导航栏（可选）
5. **condition**：配置条件编译（开发工具用）
