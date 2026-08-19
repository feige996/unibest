# 其他 API

## 概述

其他 API 包括工具类 API、登录 API 等。

## API 列表

### uni.canIUse

判断应用的版本是否支持某个 API。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/system/info.html#caniuse

**示例**：
```javascript
if (uni.canIUse('getSystemInfo')) {
  uni.getSystemInfo({
    success: (res) => {
      console.log(res)
    }
  })
}
```

### uni.login

登录。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/login/login.html#login

### uni.getUserInfo

获取用户信息。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/login/login.html#getuserinfo

### uni.authorize

提前向用户发起授权请求。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/authorize.html#authorize

### uni.openSetting

调起客户端小程序设置页面。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/setting/open-setting.html#opensetting

### uni.getSetting

获取用户的当前设置。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/setting/get-setting.html#getsetting

## 参考资源

- [uni-app API 文档](https://doc.dcloud.net.cn/uni-app-x/api/)
