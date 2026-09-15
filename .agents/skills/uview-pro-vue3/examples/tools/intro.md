# Tools Introduction

**官方文档**: https://uviewpro.cn


## Instructions

This example provides an introduction to uView Pro tools and utilities.

### Key Concepts

- Tool categories
- Tool usage
- Tool methods

### Example: Tool Categories

**HTTP Request (HTTP 请求)**:
- Request methods
- Request interceptors
- Response interceptors

**Storage (存储)**:
- setStorage, getStorage
- removeStorage, clearStorage

**Router (路由)**:
- navigateTo, redirectTo
- navigateBack, switchTab

**Validator (验证)**:
- Validation methods
- Form validation

**Format (格式化)**:
- Date format
- Number format
- Text format

**Color (颜色)**:
- Color conversion
- Color utilities

### Example: Using Tools

```javascript
// HTTP Request
import { request } from 'uview-pro'

request({
  url: '/api/user',
  method: 'GET'
})

// Storage
import { setStorage, getStorage } from 'uview-pro'

setStorage('key', 'value')
const value = getStorage('key')

// Router
import { navigateTo } from 'uview-pro'

navigateTo('/pages/index/index')
```

### Key Points

- Rich utility methods
- Easy to use
- Well documented
- TypeScript support
- Optimized for uni-app
