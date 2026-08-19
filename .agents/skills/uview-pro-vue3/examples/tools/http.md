# HTTP Request

**官方文档**: https://uviewpro.cn


## Instructions

This example demonstrates HTTP request utilities in uView Pro.

### Key Concepts

- Request methods
- Request interceptors
- Response interceptors
- Error handling

### Example: Basic Request

```javascript
import { request } from 'uview-pro'

request({
  url: '/api/user',
  method: 'GET'
}).then(res => {
  console.log('Response:', res)
}).catch(err => {
  console.error('Error:', err)
})
```

### Example: POST Request

```javascript
import { request } from 'uview-pro'

request({
  url: '/api/user',
  method: 'POST',
  data: {
    name: 'John',
    email: 'john@example.com'
  }
}).then(res => {
  console.log('Response:', res)
})
```

### Example: Request Interceptor

```javascript
import { request } from 'uview-pro'

request.interceptors.request.use(config => {
  // Add token
  config.header = {
    ...config.header,
    'Authorization': 'Bearer token'
  }
  return config
})
```

### Example: Response Interceptor

```javascript
import { request } from 'uview-pro'

request.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.error('Request error:', error)
    return Promise.reject(error)
  }
)
```

### Example: Request Config

```javascript
import { request } from 'uview-pro'

request({
  url: '/api/user',
  method: 'GET',
  header: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})
```

### Key Points

- Support GET, POST, PUT, DELETE methods
- Request and response interceptors
- Error handling
- Configurable timeout
- Support custom headers
