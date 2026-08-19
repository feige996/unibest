---
name: Manifest.json Configuration
description: App configuration, permissions, and platform-specific settings
---

# Manifest.json Configuration

`manifest.json` is the application configuration file, defining app name, icon, permissions, and platform-specific settings.

## Basic Configuration

```json
{
  "name": "My App",
  "appid": "__UNI__XXXXXXX",
  "description": "App description",
  "versionName": "1.0.0",
  "versionCode": 100,
  "locale": "auto",
  "debug": false
}
```

### Basic Properties

| Property | Type | Description |
|----------|------|-------------|
| name | String | App name |
| appid | String | DCloud app ID |
| description | String | App description |
| versionName | String | Version name (1.0.0) |
| versionCode | Number | Version code (integer) |
| locale | String | Default language |
| debug | Boolean | Debug mode |
| networkTimeout | Object | Network timeout settings |
| uniStatistics | Object | Statistics configuration |

## Network Timeout

```json
{
  "networkTimeout": {
    "request": 60000,
    "connectSocket": 60000,
    "uploadFile": 60000,
    "downloadFile": 60000
  }
}
```

## App Configuration (app-plus)

```json
{
  "app-plus": {
    "splashscreen": {
      "alwaysShowBeforeRender": true,
      "autoclose": true,
      "waiting": true
    },
    "screenOrientation": ["portrait-primary"],
    "modules": {
      "OAuth": {},
      "Payment": {},
      "Push": {}
    },
    "distribute": {
      "android": {
        "permissions": [
          "<uses-permission android:name=\"android.permission.INTERNET\" />"
        ],
        "minSdkVersion": 21,
        "targetSdkVersion": 30
      },
      "ios": {
        "capabilities": {
          "entitlements": {
            "com.apple.developer.push": true
          }
        }
      },
      "sdkConfigs": {
        "payment": {
          "alipay": {},
          "weixin": {}
        }
      }
    },
    "optimization": {
      "subPackages": true
    }
  }
}
```

### Splash Screen

| Property | Type | Description |
|----------|------|-------------|
| alwaysShowBeforeRender | Boolean | Show until first page renders |
| autoclose | Boolean | Auto close splash screen |
| waiting | Boolean | Show loading indicator |

## Mini-Program Configuration

### WeChat (mp-weixin)

```json
{
  "mp-weixin": {
    "appid": "wx1234567890",
    "setting": {
      "urlCheck": false,
      "es6": true,
      "postcss": true,
      "minified": true
    },
    "usingComponents": true,
    "permission": {
      "scope.userLocation": {
        "desc": "Your location is needed"
      }
    },
    "requiredPrivateInfos": [
      "getLocation"
    ]
  }
}
```

### Alipay (mp-alipay)

```json
{
  "mp-alipay": {
    "appid": "2021...",
    "allowsAlignRight": true,
    "component2": true
  }
}
```

### Baidu (mp-baidu)

```json
{
  "mp-baidu": {
    "appid": "12345678",
    "navigationBarForceEnable": true
  }
}
```

### Douyin (mp-toutiao)

```json
{
  "mp-toutiao": {
    "appid": "tt...",
    "setting": {
      "es6": true,
      "minified": true
    }
  }
}
```

## H5 Configuration

```json
{
  "h5": {
    "title": "My App",
    "template": "index.html",
    "router": {
      "mode": "hash",
      "base": "./"
    },
    "optimization": {
      "treeShaking": {
        "enable": true
      }
    },
    "publicPath": "./",
    "devServer": {
      "port": 8080,
      "disableHostCheck": true
    },
    "sdkConfigs": {
      "maps": {
        "qqmap": {
          "key": "..."
        }
      }
    }
  }
}
```

## Vue Configuration

### Vue 2

```json
{
  "vueVersion": "2",
  "sassImplementationName": "dart-sass"
}
```

### Vue 3

```json
{
  "vueVersion": "3"
}
```

## Permission Configuration

### Android Permissions

```json
{
  "app-plus": {
    "distribute": {
      "android": {
        "permissions": [
          "<uses-permission android:name=\"android.permission.INTERNET\" />",
          "<uses-permission android:name=\"android.permission.CAMERA\" />",
          "<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
          "<uses-permission android:name=\"android.permission.READ_EXTERNAL_STORAGE\" />",
          "<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />"
        ]
      }
    }
  }
}
```

### iOS Privacy Descriptions

```json
{
  "app-plus": {
    "distribute": {
      "ios": {
        "privacyDescription": {
          "NSCameraUsageDescription": "Camera access is needed for scanning QR codes",
          "NSPhotoLibraryUsageDescription": "Photo access is needed for uploading images",
          "NSLocationWhenInUseUsageDescription": "Location is needed for finding nearby stores"
        }
      }
    }
  }
}
```

## Common Module Configuration

### OAuth (Login)

```json
{
  "app-plus": {
    "modules": {
      "OAuth": {}
    },
    "distribute": {
      "sdkConfigs": {
        "oauth": {
          "weixin": {
            "appid": "wx...",
            "appsecret": "...",
            "UniversalLinks": "https://..."
          }
        }
      }
    }
  }
}
```

### Payment

```json
{
  "app-plus": {
    "modules": {
      "Payment": {}
    },
    "distribute": {
      "sdkConfigs": {
        "payment": {
          "alipay": {},
          "weixin": {
            "appid": "wx..."
          }
        }
      }
    }
  }
}
```

### Push Notifications

```json
{
  "app-plus": {
    "modules": {
      "Push": {}
    },
    "distribute": {
      "sdkConfigs": {
        "push": {
          "unipush": {}
        }
      }
    }
  }
}
```

### Share

```json
{
  "app-plus": {
    "modules": {
      "Share": {}
    },
    "distribute": {
      "sdkConfigs": {
        "share": {
          "weixin": {
            "appid": "wx..."
          }
        }
      }
    }
  }
}
```

## Statistics Configuration

```json
{
  "uniStatistics": {
    "enable": true
  },
  "app-plus": {
    "uniStatistics": {
      "enable": true
    }
  },
  "mp-weixin": {
    "uniStatistics": {
      "enable": true
    }
  }
}
```

<!--
Source references:
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/collocation/manifest.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/collocation/manifest-app.md
-->
