# 支付 API

## 概述

支付 API 用于发起支付。

## API 列表

### uni.requestPayment

发起支付。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/payment/payment.html#requestpayment

**参数**（微信小程序）：
- `provider` (String) - 支付服务提供商（wxpay）
- `timeStamp` (String) - 时间戳
- `nonceStr` (String) - 随机字符串
- `package` (String) - 统一下单接口返回的 prepay_id 参数值
- `signType` (String) - 签名算法
- `paySign` (String) - 签名

**示例**：
```javascript
uni.requestPayment({
  provider: 'wxpay',
  timeStamp: String(Date.now()),
  nonceStr: 'nonceStr',
  package: 'prepay_id=xxx',
  signType: 'MD5',
  paySign: 'paySign',
  success: (res) => {
    console.log('支付成功', res)
  },
  fail: (err) => {
    console.error('支付失败', err)
  }
})
```

## 参考资源

- [uni-app 支付文档](https://doc.dcloud.net.cn/uni-app-x/api/payment/payment.html)
