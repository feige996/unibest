# Configuration API | 配置 API

## Instructions

This example provides configuration API reference for UniAppX projects with uView Pro.

### Key Concepts

- Project configuration
- Build configuration
- Platform configuration
- Component configuration

### Project Configuration

```json
// project.config.json (if exists)
{
  "miniprogramRoot": "string",
  "projectname": "string",
  "description": "string",
  "appid": "string"
}
```

### Build Configuration

```json
// manifest.json - Build settings
{
  "h5": {
    "devServer": {
      "port": number,
      "disableHostCheck": boolean
    },
    "router": {
      "mode": "hash" | "history",
      "base": "string"
    },
    "optimization": {
      "treeShaking": {
        "enable": boolean
      }
    }
  },
  "mp-weixin": {
    "setting": {
      "es6": boolean,
      "enhance": boolean,
      "postcss": boolean,
      "minified": boolean
    }
  }
}
```

### Platform Configuration

```json
// manifest.json - Platform settings
{
  "h5": {
    "router": {
      "mode": "hash" | "history"
    }
  },
  "mp-weixin": {
    "appid": "string",
    "setting": {
      "urlCheck": boolean
    }
  },
  "app-plus": {
    "distribute": {
      "android": {
        "permissions": ["string"]
      },
      "ios": {}
    }
  }
}
```

### Component Configuration

```vue
<!-- Component usage with configuration -->
<template>
  <u-button 
    type="primary"
    :custom-style="buttonStyle"
    :disabled="isDisabled"
  >
    按钮
  </u-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const buttonStyle = ref({
  borderRadius: '20rpx'
})
const isDisabled = ref(false)
</script>
```

### Key Points

- Configure project settings in manifest.json
- Set up build options for each platform
- Configure platform-specific settings
- Use component props for configuration
- Test configuration on all platforms
