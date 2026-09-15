# Manifest Configuration

## manifest.json 配置

`manifest.json` 是 UniApp 的应用配置文件，需要正确配置以支持 uView UI 在不同平台运行。

### 基本配置

```json
{
  "name": "uniapp-uview-project",
  "appid": "",
  "description": "",
  "versionName": "1.0.0",
  "versionCode": "100",
  "transformPx": false,
  "app-plus": {
    "usingComponents": true
  },
  "h5": {
    "router": {
      "mode": "hash"
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

### H5 平台配置

```json
{
  "h5": {
    "router": {
      "mode": "hash",
      "base": "/"
    },
    "devServer": {
      "https": false,
      "port": 8080
    },
    "publicPath": "/",
    "template": "index.html"
  }
}
```

### 微信小程序配置

```json
{
  "mp-weixin": {
    "appid": "your-appid",
    "setting": {
      "urlCheck": false,
      "es6": true,
      "enhance": true,
      "postcss": true,
      "minified": true
    },
    "usingComponents": true,
    "permission": {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序位置接口的效果展示"
      }
    }
  }
}
```

### App 平台配置

```json
{
  "app-plus": {
    "usingComponents": true,
    "nvueStyleCompiler": "uni-app",
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
          "<uses-permission android:name=\"android.permission.INTERNET\"/>"
        ]
      },
      "ios": {},
      "sdkConfigs": {}
    }
  }
}
```

### 支付宝小程序配置

```json
{
  "mp-alipay": {
    "usingComponents": true
  }
}
```

### 百度小程序配置

```json
{
  "mp-baidu": {
    "usingComponents": true
  }
}
```

### 字节跳动小程序配置

```json
{
  "mp-toutiao": {
    "usingComponents": true
  }
}
```

### QQ 小程序配置

```json
{
  "mp-qq": {
    "usingComponents": true
  }
}
```

### 完整配置示例

```json
{
  "name": "uniapp-uview-project",
  "appid": "",
  "description": "UniApp + uView UI 项目",
  "versionName": "1.0.0",
  "versionCode": "100",
  "transformPx": false,
  "app-plus": {
    "usingComponents": true,
    "nvueStyleCompiler": "uni-app"
  },
  "h5": {
    "router": {
      "mode": "hash"
    },
    "devServer": {
      "port": 8080
    }
  },
  "mp-weixin": {
    "appid": "",
    "setting": {
      "urlCheck": false,
      "es6": true,
      "enhance": true,
      "postcss": true,
      "minified": true
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
  "mp-qq": {
    "usingComponents": true
  },
  "quickapp": {},
  "vueVersion": "3"
}
```

## 关键配置说明

### usingComponents

所有平台都需要设置 `"usingComponents": true`，以支持组件使用。

### transformPx

建议设置为 `false`，使用 rpx 单位进行响应式布局。

### vueVersion

指定 Vue 版本：
- `"2"` - Vue 2
- `"3"` - Vue 3

## 注意事项

1. **usingComponents**：必须设置为 true
2. **平台差异**：不同平台有不同的配置项
3. **AppID**：小程序平台需要配置对应的 AppID
4. **权限配置**：根据功能需求配置相应权限
5. **版本号**：正确配置版本号和版本名称
