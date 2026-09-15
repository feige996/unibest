# Manifest Configuration Template

## manifest.json 配置模板

UniApp + uCharts 项目的 manifest.json 配置模板。

### 完整模板

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
  },
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
    "usingComponents": true,
    "permission": {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序位置接口的效果展示"
      }
    }
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
  "vueVersion": "2"
}
```

### 使用说明

1. **appid**：小程序平台需要配置对应的 AppID
2. **usingComponents**：所有平台都需要设置为 true
3. **transformPx**：建议设置为 false，使用 rpx
4. **vueVersion**：指定 Vue 版本（2 或 3）
5. **平台配置**：根据目标平台配置相应参数
