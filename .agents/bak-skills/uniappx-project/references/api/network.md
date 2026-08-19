# 网络请求 API

## uni.request

发起网络请求。

### 参数

| 参数名 | 类型 | 必填 | 说明 | 平台差异说明 |
|--------|------|------|------|--------------|
| url | String | 是 | 开发者服务器接口地址 | - |
| data | Object/String/ArrayBuffer | 否 | 请求的参数 | - |
| header | Object | 否 | 设置请求的 header，header 中不能设置 Referer | - |
| method | String | 否 | HTTP 请求方法，默认为 GET | - |
| timeout | Number | 否 | 超时时间，单位为 ms，默认为 60000 | - |
| dataType | String | 否 | 如果设为 json，会尝试对返回的数据做一次 JSON.parse | - |
| responseType | String | 否 | 设置响应的数据类型，默认为 text | - |
| sslVerify | Boolean | 否 | 验证 ssl 证书 | App |
| withCredentials | Boolean | 否 | 跨域请求时是否携带凭证（cookies） | H5 |
| firstIpv4 | Boolean | 否 | DNS 解析时优先使用 ipv4 | App |

### 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| data | Object/String/ArrayBuffer | 服务器返回的数据 |
| statusCode | Number | HTTP 状态码 |
| header | Object | 服务器返回的 header |
| cookies | Array | 服务器返回的 cookies |

### 平台支持

| 平台 | 支持情况 |
|------|---------|
| H5 | ✅ |
| 微信小程序 | ✅ |
| 支付宝小程序 | ✅ |
| 百度小程序 | ✅ |
| 字节跳动小程序 | ✅ |
| QQ 小程序 | ✅ |
| 快手小程序 | ✅ |
| App | ✅ |
| 快应用 | ✅ |

### 示例

```javascript
// GET 请求
uni.request({
  url: 'https://api.example.com/data',
  method: 'GET',
  data: {
    id: 123
  },
  success: (res) => {
    console.log(res.data)
  },
  fail: (err) => {
    console.error(err)
  }
})

// POST 请求
uni.request({
  url: 'https://api.example.com/data',
  method: 'POST',
  data: {
    name: 'John',
    age: 30
  },
  header: {
    'Content-Type': 'application/json'
  },
  success: (res) => {
    console.log(res.data)
  }
})

// 使用 Promise
uni.request({
  url: 'https://api.example.com/data'
}).then(res => {
  console.log(res.data)
}).catch(err => {
  console.error(err)
})
```

## uni.uploadFile

上传文件。

### 参数

| 参数名 | 类型 | 必填 | 说明 | 平台差异说明 |
|--------|------|------|------|--------------|
| url | String | 是 | 开发者服务器 url | - |
| filePath | String | 是 | 要上传文件资源的路径 | - |
| name | String | 是 | 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 | - |
| header | Object | 否 | HTTP 请求 Header，header 中不能设置 Referer | - |
| formData | Object | 否 | HTTP 请求中其他额外的 form data | - |
| timeout | Number | 否 | 超时时间，单位为 ms，默认为 60000 | - |

### 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| data | String | 服务器返回的数据 |
| statusCode | Number | HTTP 状态码 |

### 平台支持

| 平台 | 支持情况 |
|------|---------|
| H5 | ✅ |
| 微信小程序 | ✅ |
| 支付宝小程序 | ✅ |
| 百度小程序 | ✅ |
| 字节跳动小程序 | ✅ |
| QQ 小程序 | ✅ |
| 快手小程序 | ✅ |
| App | ✅ |
| 快应用 | ❌ |

### 示例

```javascript
uni.chooseImage({
  count: 1,
  success: (res) => {
    const tempFilePaths = res.tempFilePaths
    uni.uploadFile({
      url: 'https://api.example.com/upload',
      filePath: tempFilePaths[0],
      name: 'file',
      formData: {
        'user': 'test'
      },
      success: (uploadRes) => {
        console.log(uploadRes.data)
      },
      fail: (err) => {
        console.error(err)
      }
    })
  }
})
```

## uni.downloadFile

下载文件。

### 参数

| 参数名 | 类型 | 必填 | 说明 | 平台差异说明 |
|--------|------|------|------|--------------|
| url | String | 是 | 下载资源的 url | - |
| header | Object | 否 | HTTP 请求 Header，header 中不能设置 Referer | - |
| timeout | Number | 否 | 超时时间，单位为 ms，默认为 60000 | - |

### 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| tempFilePath | String | 临时文件路径，下载后的文件会存储到一个临时文件 |
| statusCode | Number | HTTP 状态码 |

### 平台支持

| 平台 | 支持情况 |
|------|---------|
| H5 | ✅ |
| 微信小程序 | ✅ |
| 支付宝小程序 | ✅ |
| 百度小程序 | ✅ |
| 字节跳动小程序 | ✅ |
| QQ 小程序 | ✅ |
| 快手小程序 | ✅ |
| App | ✅ |
| 快应用 | ❌ |

### 示例

```javascript
uni.downloadFile({
  url: 'https://example.com/file.pdf',
  success: (res) => {
    if (res.statusCode === 200) {
      console.log('下载成功', res.tempFilePath)
      // 可以调用 uni.openDocument 打开文件
      uni.openDocument({
        filePath: res.tempFilePath,
        success: () => {
          console.log('打开文档成功')
        }
      })
    }
  },
  fail: (err) => {
    console.error('下载失败', err)
  }
})
```

## uni.connectSocket

创建 WebSocket 连接。

### 参数

| 参数名 | 类型 | 必填 | 说明 | 平台差异说明 |
|--------|------|------|------|--------------|
| url | String | 是 | 服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名 | - |
| header | Object | 否 | HTTP Header，header 中不能设置 Referer | - |
| protocols | Array | 否 | 子协议数组 | H5 |
| method | String | 否 | 请求方法 | App |

### 平台支持

| 平台 | 支持情况 |
|------|---------|
| H5 | ✅ |
| 微信小程序 | ✅ |
| 支付宝小程序 | ✅ |
| 百度小程序 | ✅ |
| 字节跳动小程序 | ✅ |
| QQ 小程序 | ✅ |
| 快手小程序 | ✅ |
| App | ✅ |
| 快应用 | ❌ |

### 示例

```javascript
// 创建 WebSocket 连接
uni.connectSocket({
  url: 'wss://example.com/websocket',
  success: () => {
    console.log('连接成功')
  }
})

// 监听 WebSocket 连接打开事件
uni.onSocketOpen((res) => {
  console.log('WebSocket 连接已打开')
})

// 监听 WebSocket 错误事件
uni.onSocketError((res) => {
  console.error('WebSocket 错误', res)
})

// 发送数据
uni.sendSocketMessage({
  data: JSON.stringify({
    type: 'message',
    content: 'Hello'
  })
})

// 监听接收消息
uni.onSocketMessage((res) => {
  console.log('收到消息', res.data)
})

// 关闭连接
uni.closeSocket()
```

## 参考资源

- [uni-app 网络请求文档](https://doc.dcloud.net.cn/uni-app-x/api/network/request.html)
- [uni-app 文件上传文档](https://doc.dcloud.net.cn/uni-app-x/api/network/upload.html)
- [uni-app 文件下载文档](https://doc.dcloud.net.cn/uni-app-x/api/network/download.html)
- [uni-app WebSocket 文档](https://doc.dcloud.net.cn/uni-app-x/api/network/websocket.html)
