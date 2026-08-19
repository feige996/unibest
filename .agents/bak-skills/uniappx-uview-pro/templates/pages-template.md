# Pages Configuration Template | Pages 配置模板

## Instructions

This template provides pages.json configuration for UniAppX projects with uView Pro.

### Basic Template

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
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-pro/components/u-$1/u-$1.vue"
    }
  },
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "UniAppX uView Pro",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  }
}
```

### With Tab Bar

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
      "path": "pages/user/user",
      "style": {
        "navigationBarTitleText": "我的"
      }
    }
  ],
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
        "pagePath": "pages/user/user",
        "iconPath": "static/tab-user.png",
        "selectedIconPath": "static/tab-user-current.png",
        "text": "我的"
      }
    ]
  },
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-pro/components/u-$1/u-$1.vue"
    }
  }
}
```

### Key Points

- Configure pages array with all pages
- Set up easycom for automatic uView Pro component import
- Configure navigation bar titles
- Use tabBar for bottom navigation
- Configure global styles
