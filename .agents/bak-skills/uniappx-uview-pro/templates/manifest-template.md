# Manifest Configuration Template | Manifest 配置模板

## Instructions

This template provides manifest.json configuration for UniAppX projects with uView Pro.

### Basic Template

```json
{
  "name": "uniappx-uview-pro-demo",
  "appid": "__UNI__XXXXX",
  "description": "UniAppX uView Pro Demo",
  "versionName": "1.0.0",
  "versionCode": "100",
  "transformPx": false,
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
  },
  "app-plus": {
    "usingComponents": true
  }
}
```

### Complete Template

```json
{
  "name": "uniappx-uview-pro-demo",
  "appid": "__UNI__XXXXX",
  "versionName": "1.0.0",
  "versionCode": "100",
  "transformPx": false,
  "h5": {
    "devServer": {
      "port": 8080
    },
    "router": {
      "mode": "hash",
      "base": "/"
    },
    "optimization": {
      "treeShaking": {
        "enable": true
      }
    }
  },
  "mp-weixin": {
    "appid": "your-appid",
    "setting": {
      "urlCheck": false,
      "es6": true,
      "enhance": true,
      "postcss": true,
      "minified": true
    },
    "usingComponents": true
  },
  "app-plus": {
    "usingComponents": true,
    "nvueStyleCompiler": "uni-app",
    "compilerVersion": 3,
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

### Key Points

- Configure `usingComponents: true` for mini-program and App
- Set platform-specific settings
- Configure build options
- Use `transformPx: false` to avoid unit conversion issues
- Test configuration on each platform
