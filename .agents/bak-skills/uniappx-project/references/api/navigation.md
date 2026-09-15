# 页面路由 API

## 概述

页面路由 API 用于页面跳转和导航。

## API 列表

### uni.navigateTo

保留当前页面，跳转到应用内的某个页面。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/router.html#navigateto

**参数**：
- `url` (String) - 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数
- `success` (Function) - 接口调用成功的回调函数
- `fail` (Function) - 接口调用失败的回调函数
- `complete` (Function) - 接口调用结束的回调函数

**示例**：
```javascript
uni.navigateTo({
  url: '/pages/detail/detail?id=123&name=test',
  success: () => {
    console.log('跳转成功')
  }
})
```

### uni.redirectTo

关闭当前页面，跳转到应用内的某个页面。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/router.html#redirectto

### uni.reLaunch

关闭所有页面，打开到应用内的某个页面。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/router.html#relaunch

### uni.switchTab

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/router.html#switchtab

### uni.navigateBack

关闭当前页面，返回上一页面或多级页面。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/router.html#navigateback

**参数**：
- `delta` (Number) - 返回的页面数，如果 delta 大于现有页面数，则返回到首页

## 参考资源

- [uni-app 路由文档](https://doc.dcloud.net.cn/uni-app-x/api/router.html)
