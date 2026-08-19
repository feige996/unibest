# Manifest Configuration

## manifest.json 配置

`manifest.json` 是 UniApp 的应用配置文件，需要正确配置以支持 uCharts 在不同平台运行。

### 基本配置

```json
{
  "name": "uniapp-ucharts-project",
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
    "distribute": {
      "android": {
        "permissions": [
          "<uses-permission android:name=\"android.permission.INTERNET\"/>"
        ]
      },
      "ios": {}
    }
  }
}
```

### 完整配置示例

```json
{
  "name": "uniapp-ucharts-project",
  "appid": "",
  "description": "UniApp + uCharts 项目",
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
  }
}
```

## 关键配置说明

### usingComponents

所有平台都需要设置 `"usingComponents": true`，以支持组件使用。

### transformPx

建议设置为 `false`，使用 rpx 单位进行响应式布局。

### Canvas 支持

uCharts 依赖 Canvas，确保目标平台支持 Canvas：

- **H5**：完全支持 Canvas
- **小程序**：支持 Canvas，但可能有性能限制
- **App**：支持 Canvas，但 nvue 可能有限制

## 注意事项

1. **usingComponents**：必须设置为 true
2. **平台差异**：不同平台对 Canvas 的支持可能有差异
3. **AppID**：小程序平台需要配置对应的 AppID
4. **权限配置**：根据功能需求配置相应权限
5. **版本号**：正确配置版本号和版本名称
6. **Canvas 兼容性**：注意不同平台的 Canvas 兼容性
