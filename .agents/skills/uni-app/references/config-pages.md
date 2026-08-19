---
name: Pages.json Configuration
description: Page routing, tab bar, and global style configuration
---

# Pages.json Configuration

`pages.json` is the global configuration file for uni-app, defining page routes, window styles, native navigation bar, and tab bar.

## Basic Structure

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "Home"
      }
    }
  ],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarBackgroundColor": "#F8F8F8"
  },
  "tabBar": {
    "list": [
      { "pagePath": "pages/index/index", "text": "Home" }
    ]
  }
}
```

## Root Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| pages | Array | Yes | Page routes |
| globalStyle | Object | No | Default window style |
| tabBar | Object | No | Tab bar configuration |
| condition | Object | No | Launch mode (dev only) |
| subPackages | Array | No | Sub-packages |
| preloadRule | Object | No | Preload rules (MP) |
| easycom | Object | No | Auto component import |
| leftWindow/topWindow/rightWindow | Object | No | Multi-window (H5) |

## Pages Configuration

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "Home",
        "enablePullDownRefresh": true
      }
    },
    {
      "path": "pages/detail/detail",
      "style": {
        "navigationBarTitleText": "Detail",
        "navigationStyle": "custom"
      }
    }
  ]
}
```

### Page Style Options

| Property | Type | Description |
|----------|------|-------------|
| navigationBarTitleText | String | Navigation title |
| navigationBarTextStyle | String | Title color: black/white |
| navigationBarBackgroundColor | HexColor | Nav background |
| navigationStyle | String | default/custom |
| enablePullDownRefresh | Boolean | Enable pull refresh |
| backgroundColor | HexColor | Background color |
| backgroundTextStyle | String | dark/light |
| onReachBottomDistance | Number | Bottom distance (px) |
| disableScroll | Boolean | Disable scroll (MP) |
| usingComponents | Object | Using custom components |

## Global Style

Applied to all pages unless overridden.

```json
{
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "My App",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8",
    "backgroundTextStyle": "dark",
    "enablePullDownRefresh": false,
    "onReachBottomDistance": 50,
    "rpxCalcMaxDeviceWidth": 960,
    "rpxCalcBaseDeviceWidth": 375,
    "rpxCalcIncludeWidth": 750
  }
}
```

## Tab Bar Configuration

```json
{
  "tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#3cc51f",
    "backgroundColor": "#ffffff",
    "borderStyle": "black",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "Home",
        "iconPath": "static/image/home.png",
        "selectedIconPath": "static/image/home-active.png"
      },
      {
        "pagePath": "pages/category/category",
        "text": "Category",
        "iconPath": "static/image/cat.png",
        "selectedIconPath": "static/image/cat-active.png"
      },
      {
        "pagePath": "pages/cart/cart",
        "text": "Cart",
        "iconPath": "static/image/cart.png",
        "selectedIconPath": "static/image/cart-active.png"
      },
      {
        "pagePath": "pages/user/user",
        "text": "User",
        "iconPath": "static/image/user.png",
        "selectedIconPath": "static/image/user-active.png"
      }
    ]
  }
}
```

### Tab Bar Properties

| Property | Type | Description |
|----------|------|-------------|
| color | HexColor | Unselected text color |
| selectedColor | HexColor | Selected text color |
| backgroundColor | HexColor | Background color |
| borderStyle | String | black/white |
| list | Array | Tab items (2-5 items) |
| position | String | bottom/top |

### Tab Item Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| pagePath | String | Yes | Page path |
| text | String | Yes | Tab text |
| iconPath | String | No | Icon path (81x81px) |
| selectedIconPath | String | No | Selected icon |

### Custom Tab Bar (WeChat/QQ/Douyin)

```json
{
  "tabBar": {
    "custom": true,
    "list": [
      { "pagePath": "pages/index/index", "text": "Home" }
    ]
  }
}
```

Create `custom-tab-bar/index` component in root.

## Sub-packages

Split app into smaller chunks for faster loading.

```json
{
  "subPackages": [
    {
      "root": "packageA",
      "pages": [
        { "path": "pages/cat/cat" },
        { "path": "pages/dog/dog" }
      ]
    },
    {
      "root": "packageB",
      "pages": [
        { "path": "pages/apple/apple" },
        { "path": "pages/banana/banana" }
      ]
    }
  ],
  "preloadRule": {
    "pages/index/index": {
      "network": "all",
      "packages": ["packageA"]
    }
  }
}
```

## EasyCom (Auto Component Import)

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u--(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
    }
  }
}
```

With this config, components are auto-imported without registration.

## Conditional Compilation in Config

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "Home"
      }
    }
  ],
  "globalStyle": {
    "navigationBarTextStyle": "black"
  },
  "condition": {
    "current": 0,
    "list": [
      {
        "name": "test",
        "path": "pages/test/test",
        "query": "id=1"
      }
    ]
  },
  "mp-weixin": {
    "appid": "wx...",
    "setting": {
      "urlCheck": false
    }
  },
  "app-plus": {
    "splashscreen": {
      "alwaysShowBeforeRender": true
    }
  }
}
```

<!--
Source references:
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/collocation/pages.md
-->
