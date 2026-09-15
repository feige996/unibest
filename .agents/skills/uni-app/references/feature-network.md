---
name: Network Requests
description: HTTP requests, file upload/download, and WebSocket
---

# Network Requests

## uni.request

Make HTTP requests to backend APIs.

```javascript
// GET request
uni.request({
  url: 'https://api.example.com/data',
  method: 'GET',
  data: { id: 123 },
  header: {
    'content-type': 'application/json',
    'Authorization': 'Bearer token'
  },
  timeout: 30000,
  success: (res) => {
    console.log(res.data)
  },
  fail: (err) => {
    console.error(err)
  },
  complete: () => {
    console.log('Request complete')
  }
})

// POST request with JSON
uni.request({
  url: 'https://api.example.com/submit',
  method: 'POST',
  data: {
    name: 'John',
    age: 30
  },
  header: {
    'content-type': 'application/json'
  },
  success: (res) => {
    if (res.statusCode === 200) {
      console.log('Success:', res.data)
    }
  }
})

// Using Promise
uni.request({
  url: 'https://api.example.com/data',
  method: 'GET'
}).then(res => {
  console.log(res.data)
}).catch(err => {
  console.error(err)
})

// Async/await
async function fetchData() {
  try {
    const res = await uni.request({
      url: 'https://api.example.com/data'
    })
    return res.data
  } catch (err) {
    console.error('Failed to fetch:', err)
    throw err
  }
}
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| url | String | Yes | Request URL |
| data | Object/String/Array/ArrayBuffer | No | Request data |
| header | Object | No | Request headers |
| method | String | No | HTTP method (default: GET) |
| timeout | Number | No | Timeout in ms (default: 60000) |
| dataType | String | No | Response data type (default: json) |
| responseType | String | No | Response type (default: text) |
| sslVerify | Boolean | No | Verify SSL certificate (default: true) |

**Response Object:**

```javascript
{
  data: Object | String | ArrayBuffer,  // Response data
  statusCode: Number,                   // HTTP status code
  header: Object,                       // Response headers
  cookies: Array                        // Response cookies
}
```

## uni.uploadFile

Upload files to server.

```javascript
uni.chooseImage({
  count: 1,
  success: (chooseRes) => {
    const tempFilePath = chooseRes.tempFilePaths[0]

    const uploadTask = uni.uploadFile({
      url: 'https://api.example.com/upload',
      filePath: tempFilePath,
      name: 'file',
      formData: {
        user: 'test',
        description: 'Image upload'
      },
      header: {
        'Authorization': 'Bearer token'
      },
      success: (res) => {
        console.log('Upload success:', JSON.parse(res.data))
      },
      fail: (err) => {
        console.error('Upload failed:', err)
      }
    })

    // Track upload progress
    uploadTask.onProgressUpdate((res) => {
      console.log('Progress:', res.progress)
      console.log('Uploaded bytes:', res.totalBytesSent)
      console.log('Total bytes:', res.totalBytesExpectedToSend)
    })

    // Abort upload if needed
    // uploadTask.abort()
  }
})
```

**Upload Task Methods:**
- `onProgressUpdate(callback)` - Listen for progress updates
- `abort()` - Cancel the upload
- `offProgressUpdate(callback)` - Remove progress listener

## uni.downloadFile

Download files from server.

```javascript
const downloadTask = uni.downloadFile({
  url: 'https://example.com/file.pdf',
  success: (res) => {
    if (res.statusCode === 200) {
      console.log('Downloaded to:', res.tempFilePath)

      // Save to local (App only)
      uni.saveFile({
        tempFilePath: res.tempFilePath,
        success: (saveRes) => {
          console.log('Saved to:', saveRes.savedFilePath)
        }
      })
    }
  }
})

// Track download progress
downloadTask.onProgressUpdate((res) => {
  console.log('Progress:', res.progress)
})
```

## WebSocket

Real-time bidirectional communication.

```javascript
// Connect to WebSocket
const socketTask = uni.connectSocket({
  url: 'wss://api.example.com/ws',
  protocols: ['protocol1'],
  header: {
    'Authorization': 'Bearer token'
  },
  success: () => {
    console.log('WebSocket connecting...')
  }
})

// Listen for connection open
uni.onSocketOpen((res) => {
  console.log('WebSocket connected')

  // Send message
  uni.sendSocketMessage({
    data: JSON.stringify({
      type: 'message',
      content: 'Hello server'
    })
  })
})

// Listen for messages
uni.onSocketMessage((res) => {
  console.log('Received:', res.data)
  const data = JSON.parse(res.data)
  // Handle message...
})

// Listen for errors
uni.onSocketError((err) => {
  console.error('WebSocket error:', err)
})

// Listen for close
uni.onSocketClose((res) => {
  console.log('WebSocket closed:', res)
})

// Close connection
function closeSocket() {
  uni.closeSocket({
    code: 1000,
    reason: 'User logout',
    success: () => {
      console.log('Socket closed successfully')
    }
  })
}
```

**Socket Task Methods:**
- `close(options)` - Close connection
- `send(options)` - Send message
- `onOpen(callback)` - Connection opened
- `onMessage(callback)` - Message received
- `onClose(callback)` - Connection closed
- `onError(callback)` - Error occurred

## Request Interceptors

Use `uni.addInterceptor` to intercept requests.

```javascript
// Add request interceptor
uni.addInterceptor('request', {
  invoke(args) {
    // Before request
    console.log('Request:', args)

    // Add auth token
    args.header = args.header || {}
    args.header.Authorization = `Bearer ${getToken()}`

    return args
  },
  success(res) {
    // After success
    console.log('Response:', res)
    return res
  },
  fail(err) {
    // After failure
    console.error('Request failed:', err)
    return err
  },
  complete(res) {
    // Always executed
    console.log('Request complete')
  }
})

// Remove interceptor
uni.removeInterceptor('request')
```

## Domain Configuration

### Mini-Program

Configure request domains in mini-program developer console:
- `request` domain: For `uni.request`
- `uploadFile` domain: For `uni.uploadFile`
- `downloadFile` domain: For `uni.downloadFile`
- `websocket` domain: For `uni.connectSocket`

### H5

H5 uses browser's same-origin policy. Configure CORS on server or use proxy in development.

```javascript
// vite.config.js proxy configuration
export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://api.example.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}
```

## Best Practices

```javascript
// Create a request wrapper
const request = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else if (res.statusCode === 401) {
          // Handle unauthorized
          uni.redirectTo({ url: '/pages/login/login' })
          reject(new Error('Unauthorized'))
        } else {
          reject(new Error(res.data.message || 'Request failed'))
        }
      },
      fail: reject
    })
  })
}

// Usage
const api = {
  getUser: () => request({ url: '/user' }),
  updateUser: (data) => request({ url: '/user', method: 'PUT', data })
}
```

<!--
Source references:
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/request/request.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/request/network-file.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/request/websocket.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/interceptor.md
-->
