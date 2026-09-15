# uni.request - 网络请求示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/request/request.html

## 概述

`uni.request` 用于发起网络请求，支持 GET、POST、PUT、DELETE 等方法。

## 基础用法

### GET 请求

```javascript
uni.request({
  url: 'https://api.example.com/data',
  method: 'GET',
  success: (res) => {
    console.log('请求成功', res.data)
  },
  fail: (err) => {
    console.error('请求失败', err)
  }
})
```

### POST 请求

```javascript
uni.request({
  url: 'https://api.example.com/user',
  method: 'POST',
  data: {
    name: 'John',
    age: 30
  },
  header: {
    'Content-Type': 'application/json'
  },
  success: (res) => {
    console.log('请求成功', res.data)
  }
})
```

## 完整示例

### 示例 1: 带参数的 GET 请求

```javascript
uni.request({
  url: 'https://api.example.com/users',
  method: 'GET',
  data: {
    page: 1,
    limit: 10
  },
  success: (res) => {
    if (res.statusCode === 200) {
      console.log('用户列表', res.data)
    }
  },
  fail: (err) => {
    uni.showToast({
      title: '请求失败',
      icon: 'none'
    })
  }
})
```

### 示例 2: POST 请求上传数据

```javascript
uni.request({
  url: 'https://api.example.com/users',
  method: 'POST',
  data: {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  },
  header: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  success: (res) => {
    if (res.statusCode === 200 || res.statusCode === 201) {
      uni.showToast({
        title: '创建成功',
        icon: 'success'
      })
    }
  }
})
```

### 示例 3: 使用 Promise

```javascript
// Promise 方式（部分平台支持）
uni.request({
  url: 'https://api.example.com/data'
}).then(res => {
  console.log('请求成功', res.data)
}).catch(err => {
  console.error('请求失败', err)
})
```

### 示例 4: 封装请求函数

```javascript
// utils/request.js
const request = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: {
        'Content-Type': 'application/json',
        ...options.header
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          reject(new Error(`请求失败: ${res.statusCode}`))
        }
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

// 使用
request({
  url: 'https://api.example.com/data',
  method: 'GET'
}).then(data => {
  console.log('数据', data)
}).catch(err => {
  console.error('错误', err)
})
```

### 示例 5: 请求拦截和响应拦截

```javascript
// utils/http.js
const baseURL = 'https://api.example.com'

// 请求拦截
const requestInterceptor = (config) => {
  // 添加 token
  const token = uni.getStorageSync('token')
  if (token) {
    config.header = {
      ...config.header,
      'Authorization': `Bearer ${token}`
    }
  }
  return config
}

// 响应拦截
const responseInterceptor = (res) => {
  if (res.statusCode === 401) {
    // token 过期，跳转登录
    uni.navigateTo({
      url: '/pages/login/login'
    })
    return Promise.reject(new Error('未授权'))
  }
  return res.data
}

const http = {
  request(options) {
    const config = requestInterceptor({
      url: baseURL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: options.header || {}
    })
    
    return new Promise((resolve, reject) => {
      uni.request({
        ...config,
        success: (res) => {
          try {
            const data = responseInterceptor(res)
            resolve(data)
          } catch (err) {
            reject(err)
          }
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  }
}

export default http
```

### 示例 6: 超时处理

```javascript
uni.request({
  url: 'https://api.example.com/data',
  method: 'GET',
  timeout: 5000, // 5秒超时
  success: (res) => {
    console.log('请求成功', res.data)
  },
  fail: (err) => {
    if (err.errMsg && err.errMsg.includes('timeout')) {
      uni.showToast({
        title: '请求超时',
        icon: 'none'
      })
    } else {
      uni.showToast({
        title: '请求失败',
        icon: 'none'
      })
    }
  }
})
```

### 示例 7: 处理不同数据类型

```javascript
// JSON 数据
uni.request({
  url: 'https://api.example.com/data',
  dataType: 'json',
  success: (res) => {
    console.log('JSON 数据', res.data)
  }
})

// 文本数据
uni.request({
  url: 'https://api.example.com/text',
  dataType: 'text',
  success: (res) => {
    console.log('文本数据', res.data)
  }
})

// ArrayBuffer 数据
uni.request({
  url: 'https://api.example.com/binary',
  responseType: 'arraybuffer',
  success: (res) => {
    console.log('二进制数据', res.data)
  }
})
```

## 平台差异

- **H5**: 支持 `withCredentials` 参数，用于跨域请求携带凭证
- **App**: 支持 `sslVerify` 参数，用于验证 SSL 证书
- **App**: 支持 `firstIpv4` 参数，DNS 解析时优先使用 IPv4

## 注意事项

1. 默认超时时间为 60000ms（60秒）
2. 默认 `dataType` 为 `json`，会自动解析 JSON 数据
3. 请求 header 中不能设置 `Referer`
4. 部分平台支持 Promise 方式调用
5. 建议封装统一的请求函数，便于统一处理错误和拦截

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/request/request.html
- **网络请求最佳实践**: https://uniapp.dcloud.net.cn/api/request/request.html
