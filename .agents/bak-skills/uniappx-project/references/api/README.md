# UniApp API 参考文档

本文档提供 uni-app 所有 API 的完整参考信息。

## API 分类索引

### 1. 网络请求（Network）

- [uni.request](./network.md#uni-request) - 发起网络请求
- [uni.uploadFile](./network.md#uni-uploadfile) - 上传文件
- [uni.downloadFile](./network.md#uni-downloadfile) - 下载文件
- [uni.connectSocket](./network.md#uni-connectsocket) - 创建 WebSocket 连接
- [uni.onSocketOpen](./network.md#uni-onsocketopen) - 监听 WebSocket 连接打开事件
- [uni.onSocketError](./network.md#uni-onsocketerror) - 监听 WebSocket 错误事件
- [uni.sendSocketMessage](./network.md#uni-sendsocketmessage) - 通过 WebSocket 发送数据
- [uni.onSocketMessage](./network.md#uni-onsocketmessage) - 监听 WebSocket 接受到服务器的消息事件
- [uni.closeSocket](./network.md#uni-closesocket) - 关闭 WebSocket 连接
- [uni.onSocketClose](./network.md#uni-onsocketclose) - 监听 WebSocket 连接关闭事件

### 2. 数据存储（Storage）

- [uni.setStorage](./storage.md#uni-setstorage) - 将数据存储在本地缓存中指定的 key 中
- [uni.setStorageSync](./storage.md#uni-setstoragesync) - 同步将数据存储在本地缓存中指定的 key 中
- [uni.getStorage](./storage.md#uni-getstorage) - 从本地缓存中异步获取指定 key 的内容
- [uni.getStorageSync](./storage.md#uni-getstoragesync) - 从本地缓存中同步获取指定 key 的内容
- [uni.getStorageInfo](./storage.md#uni-getstorageinfo) - 异步获取当前 storage 的相关信息
- [uni.getStorageInfoSync](./storage.md#uni-getstorageinfosync) - 同步获取当前 storage 的相关信息
- [uni.removeStorage](./storage.md#uni-removestorage) - 从本地缓存中异步移除指定 key
- [uni.removeStorageSync](./storage.md#uni-removestoragesync) - 从本地缓存中同步移除指定 key
- [uni.clearStorage](./storage.md#uni-clearstorage) - 清理本地数据缓存
- [uni.clearStorageSync](./storage.md#uni-clearstoragesync) - 同步清理本地数据缓存

### 3. 设备信息（Device）

- [uni.getSystemInfo](./device.md#uni-getsysteminfo) - 获取系统信息
- [uni.getSystemInfoSync](./device.md#uni-getsysteminfosync) - 同步获取系统信息
- [uni.getNetworkType](./device.md#uni-getnetworktype) - 获取网络类型
- [uni.onNetworkStatusChange](./device.md#uni-onnetworkstatuschange) - 监听网络状态变化
- [uni.getBatteryInfo](./device.md#uni-getbatteryinfo) - 获取设备电量信息
- [uni.getBatteryInfoSync](./device.md#uni-getbatteryinfosync) - 同步获取设备电量信息
- [uni.setScreenBrightness](./device.md#uni-setscreenbrightness) - 设置屏幕亮度
- [uni.getScreenBrightness](./device.md#uni-getscreenbrightness) - 获取屏幕亮度
- [uni.setKeepScreenOn](./device.md#uni-setkeepscreenon) - 设置是否保持屏幕常亮

### 4. 界面交互（UI）

- [uni.showToast](./ui.md#uni-showtoast) - 显示消息提示框
- [uni.showLoading](./ui.md#uni-showloading) - 显示加载提示框
- [uni.hideToast](./ui.md#uni-hidetoast) - 隐藏消息提示框
- [uni.hideLoading](./ui.md#uni-hideloading) - 隐藏加载提示框
- [uni.showModal](./ui.md#uni-showmodal) - 显示模态弹窗
- [uni.showActionSheet](./ui.md#uni-showactionsheet) - 显示操作菜单
- [uni.setNavigationBarTitle](./ui.md#uni-setnavigationbartitle) - 设置当前页面标题
- [uni.setNavigationBarColor](./ui.md#uni-setnavigationbarcolor) - 设置页面导航栏颜色
- [uni.showNavigationBarLoading](./ui.md#uni-shownavigationbarloading) - 显示导航栏加载动画
- [uni.hideNavigationBarLoading](./ui.md#uni-hidenavigationbarloading) - 隐藏导航栏加载动画
- [uni.setTabBarBadge](./ui.md#uni-settabbarbadge) - 为 tabBar 某一项的右上角添加文本
- [uni.removeTabBarBadge](./ui.md#uni-removetabbarbadge) - 移除 tabBar 某一项右上角的文本
- [uni.showTabBarRedDot](./ui.md#uni-showtabbarreddot) - 显示 tabBar 某一项的右上角的红点
- [uni.hideTabBarRedDot](./ui.md#uni-hidetabbarreddot) - 隐藏 tabBar 某一项的右上角的红点
- [uni.setTabBarStyle](./ui.md#uni-settabbarstyle) - 动态设置 tabBar 的整体样式
- [uni.setTabBarItem](./ui.md#uni-settabbaritem) - 动态设置 tabBar 某一项的内容

### 5. 位置服务（Location）

- [uni.getLocation](./location.md#uni-getlocation) - 获取当前地理位置
- [uni.openLocation](./location.md#uni-openlocation) - 使用微信内置地图查看位置
- [uni.chooseLocation](./location.md#uni-chooselocation) - 打开地图选择位置

### 6. 媒体处理（Media）

- [uni.chooseImage](./media.md#uni-chooseimage) - 从本地相册选择图片或使用相机拍照
- [uni.previewImage](./media.md#uni-previewimage) - 预览图片
- [uni.getImageInfo](./media.md#uni-getimageinfo) - 获取图片信息
- [uni.saveImageToPhotosAlbum](./media.md#uni-saveimagetophotosalbum) - 保存图片到系统相册
- [uni.chooseVideo](./media.md#uni-choosevideo) - 从本地相册选择视频或使用相机拍摄视频
- [uni.saveVideoToPhotosAlbum](./media.md#uni-savevideotophotosalbum) - 保存视频到系统相册
- [uni.chooseMedia](./media.md#uni-choosemedia) - 拍摄或从手机相册中选择图片或视频
- [uni.chooseFile](./media.md#uni-choosefile) - 从本地选择文件

### 7. 页面路由（Navigation）

- [uni.navigateTo](./navigation.md#uni-navigateto) - 保留当前页面，跳转到应用内的某个页面
- [uni.redirectTo](./navigation.md#uni-redirectto) - 关闭当前页面，跳转到应用内的某个页面
- [uni.reLaunch](./navigation.md#uni-relaunch) - 关闭所有页面，打开到应用内的某个页面
- [uni.switchTab](./navigation.md#uni-switchtab) - 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
- [uni.navigateBack](./navigation.md#uni-navigateback) - 关闭当前页面，返回上一页面或多级页面

### 8. 文件操作（File）

- [uni.saveFile](./file.md#uni-savefile) - 保存文件到本地
- [uni.getFileInfo](./file.md#uni-getfileinfo) - 获取文件信息
- [uni.getSavedFileList](./file.md#uni-getsavedfilelist) - 获取已保存的文件列表
- [uni.getSavedFileInfo](./file.md#uni-getsavedfileinfo) - 获取已保存的文件信息
- [uni.removeSavedFile](./file.md#uni-removesavedfile) - 删除已保存的文件

### 9. 支付（Payment）

- [uni.requestPayment](./payment.md#uni-requestpayment) - 发起支付

### 10. 分享（Share）

- [uni.share](./share.md#uni-share) - 分享内容

### 11. 其他 API（Other）

- [uni.canIUse](./other.md#uni-caniuse) - 判断应用的版本是否支持某个 API
- [uni.getProvider](./other.md#uni-getprovider) - 获取服务供应商
- [uni.login](./other.md#uni-login) - 登录
- [uni.getUserInfo](./other.md#uni-getuserinfo) - 获取用户信息
- [uni.checkSession](./other.md#uni-checksession) - 检查登录状态是否过期
- [uni.authorize](./other.md#uni-authorize) - 提前向用户发起授权请求
- [uni.openSetting](./other.md#uni-opensetting) - 调起客户端小程序设置页面
- [uni.getSetting](./other.md#uni-getsetting) - 获取用户的当前设置

## API 调用规范

### 回调函数

uni-app API 支持两种调用方式：

1. **回调函数方式**：
```javascript
uni.request({
  url: 'https://api.example.com/data',
  success: (res) => {
    console.log(res.data)
  },
  fail: (err) => {
    console.error(err)
  }
})
```

2. **Promise 方式**（部分 API 支持）：
```javascript
uni.request({
  url: 'https://api.example.com/data'
}).then(res => {
  console.log(res.data)
}).catch(err => {
  console.error(err)
})
```

### 同步 API

部分 API 提供同步版本（以 Sync 结尾），如：
- `uni.getStorageSync()` - 同步获取存储
- `uni.setStorageSync()` - 同步设置存储
- `uni.getSystemInfoSync()` - 同步获取系统信息

### 平台兼容性

每个 API 的详细平台支持情况见对应 API 的文档。使用前请检查平台兼容性，必要时使用条件编译：

```javascript
// #ifdef MP-WEIXIN
uni.requestPayment({
  // 微信小程序支付
})
// #endif

// #ifdef APP-PLUS
uni.requestPayment({
  // App 支付
})
// #endif
```

## 参考资源

- [uni-app API 文档](https://doc.dcloud.net.cn/uni-app-x/api/)
- [uni-app 条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html)
