---
name: Storage
description: Local data storage and caching APIs
---

# Storage

## Synchronous Storage (Recommended for small data)

### uni.setStorageSync

Store data synchronously.

```javascript
// Store simple value
uni.setStorageSync('username', 'John')

// Store object
uni.setStorageSync('userInfo', {
  name: 'John',
  age: 30,
  email: 'john@example.com'
})

// Store array
uni.setStorageSync('tags', ['vue', 'uniapp', 'javascript'])
```

### uni.getStorageSync

Retrieve data synchronously.

```javascript
// Get simple value
const username = uni.getStorageSync('username')
console.log(username) // 'John'

// Get object
const userInfo = uni.getStorageSync('userInfo')
console.log(userInfo.name) // 'John'

// Check if exists
const value = uni.getStorageSync('nonexistent')
console.log(value) // '' (empty string if not found)
```

### uni.removeStorageSync

Remove specific key.

```javascript
uni.removeStorageSync('username')
```

### uni.clearStorageSync

Clear all storage.

```javascript
uni.clearStorageSync()
```

## Asynchronous Storage (Recommended for large data)

### uni.setStorage

```javascript
uni.setStorage({
  key: 'userData',
  data: {
    id: 123,
    preferences: { theme: 'dark', language: 'zh' }
  },
  success: () => {
    console.log('Storage saved')
  },
  fail: (err) => {
    console.error('Save failed:', err)
  }
})

// Promise style
uni.setStorage({
  key: 'config',
  data: { debug: true }
}).then(() => {
  console.log('Config saved')
})
```

### uni.getStorage

```javascript
uni.getStorage({
  key: 'userData',
  success: (res) => {
    console.log('Data:', res.data)
  },
  fail: (err) => {
    console.log('Key not found')
  }
})

// Promise style
uni.getStorage({ key: 'userData' })
  .then(res => console.log(res.data))
  .catch(() => console.log('Not found'))
```

### uni.removeStorage

```javascript
uni.removeStorage({
  key: 'tempData',
  success: () => {
    console.log('Removed successfully')
  }
})
```

### uni.getStorageInfo

Get storage information.

```javascript
uni.getStorageInfo({
  success: (res) => {
    console.log('Keys:', res.keys)
    console.log('Current size:', res.currentSize, 'KB')
    console.log('Limit size:', res.limitSize, 'KB')
  }
})
```

## Storage Limits

| Platform | Limit |
|----------|-------|
| Mini Program | 10 MB (single) / 200+ MB total |
| App | No hard limit (device dependent) |
| H5 | ~5-10 MB (browser dependent) |

## Best Practices

### Data Persistence Helper

```javascript
const storage = {
  // Set with expiration (days)
  setWithExpiry(key, value, days) {
    const item = {
      value,
      expiry: Date.now() + days * 24 * 60 * 60 * 1000
    }
    uni.setStorageSync(key, item)
  },

  // Get with expiration check
  getWithExpiry(key) {
    const item = uni.getStorageSync(key)
    if (!item) return null

    if (Date.now() > item.expiry) {
      uni.removeStorageSync(key)
      return null
    }
    return item.value
  },

  // Safe get with default
  get(key, defaultValue = null) {
    try {
      const value = uni.getStorageSync(key)
      return value !== '' ? value : defaultValue
    } catch (e) {
      return defaultValue
    }
  },

  // Batch operations
  setBatch(data) {
    Object.entries(data).forEach(([key, value]) => {
      uni.setStorageSync(key, value)
    })
  },

  clear() {
    uni.clearStorageSync()
  }
}

// Usage
storage.setWithExpiry('token', 'abc123', 7) // Expires in 7 days
const token = storage.getWithExpiry('token')
```

### User Session Management

```javascript
const session = {
  setToken(token) {
    uni.setStorageSync('access_token', token)
  },

  getToken() {
    return uni.getStorageSync('access_token')
  },

  clearToken() {
    uni.removeStorageSync('access_token')
  },

  setUserInfo(info) {
    uni.setStorageSync('user_info', info)
  },

  getUserInfo() {
    return uni.getStorageSync('user_info')
  },

  isLoggedIn() {
    return !!this.getToken()
  },

  clear() {
    this.clearToken()
    uni.removeStorageSync('user_info')
  }
}
```

## File Storage (App only)

### Local File System

```javascript
// Get file system manager
const fs = uni.getFileSystemManager()

// Write file
fs.writeFile({
  filePath: `${uni.env.USER_DATA_PATH}/data.json`,
  data: JSON.stringify({ name: 'test' }),
  encoding: 'utf8',
  success: () => console.log('File written')
})

// Read file
fs.readFile({
  filePath: `${uni.env.USER_DATA_PATH}/data.json`,
  encoding: 'utf8',
  success: (res) => {
    const data = JSON.parse(res.data)
    console.log(data)
  }
})

// Check if file exists
fs.access({
  path: `${uni.env.USER_DATA_PATH}/data.json`,
  success: () => console.log('File exists'),
  fail: () => console.log('File not found')
})
```

## Storage Comparison

| Method | Data Type | Size Limit | Async | Use Case |
|--------|-----------|------------|-------|----------|
| StorageSync | Any | ~10MB | No | Small config data |
| Storage | Any | ~10MB | Yes | Large data objects |
| File System | Binary/Text | Large | Yes | Files, images |

<!--
Source references:
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/storage/storage.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/file/file.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/file/getFileSystemManager.md
-->
