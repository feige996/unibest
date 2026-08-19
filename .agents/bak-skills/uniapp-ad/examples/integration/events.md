# 广告事件处理

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/uni-ad/

## 示例

```javascript
rewarded.onLoad(() => {
  console.log('广告加载成功')
})
rewarded.onError(err => {
  console.error('广告加载失败', err)
})
rewarded.onClose(res => {
  console.log('广告关闭', res)
})
```

## 参考资源

- https://uniapp.dcloud.net.cn/uni-ad/
