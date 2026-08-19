# uni.showActionSheet - 操作菜单示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/api/ui/prompt.html#showactionsheet

## 概述

`uni.showActionSheet` 用于显示操作菜单，从底部弹出选择项。

## 基础用法

```javascript
uni.showActionSheet({
  itemList: ['选项1', '选项2', '选项3'],
  success: (res) => {
    console.log('选择了第', res.tapIndex, '个选项')
  }
})
```

## 完整示例

### 示例 1: 基本操作菜单

```javascript
uni.showActionSheet({
  itemList: ['拍照', '从相册选择', '取消'],
  success: (res) => {
    if (res.tapIndex === 0) {
      // 拍照
      console.log('选择拍照')
    } else if (res.tapIndex === 1) {
      // 从相册选择
      console.log('从相册选择')
    }
  }
})
```

### 示例 2: 图片选择

```javascript
uni.showActionSheet({
  itemList: ['拍照', '从相册选择'],
  success: (res) => {
    if (res.tapIndex === 0) {
      // 拍照
      uni.chooseImage({
        count: 1,
        sourceType: ['camera'],
        success: (imageRes) => {
          console.log('拍照成功', imageRes.tempFilePaths)
        }
      })
    } else if (res.tapIndex === 1) {
      // 从相册选择
      uni.chooseImage({
        count: 1,
        sourceType: ['album'],
        success: (imageRes) => {
          console.log('选择成功', imageRes.tempFilePaths)
        }
      })
    }
  }
})
```

### 示例 3: 分享功能

```javascript
uni.showActionSheet({
  itemList: ['分享到微信', '分享到朋友圈', '复制链接'],
  success: (res) => {
    switch (res.tapIndex) {
      case 0:
        // 分享到微信
        uni.share({
          provider: 'weixin',
          scene: 'WXSceneSession'
        })
        break
      case 1:
        // 分享到朋友圈
        uni.share({
          provider: 'weixin',
          scene: 'WXSceneTimeline'
        })
        break
      case 2:
        // 复制链接
        uni.setClipboardData({
          data: 'https://example.com',
          success: () => {
            uni.showToast({
              title: '链接已复制',
              icon: 'success'
            })
          }
        })
        break
    }
  }
})
```

### 示例 4: 在页面中使用

```vue
<template>
  <view class="container">
    <button @click="showMoreOptions">更多操作</button>
  </view>
</template>

<script>
export default {
  methods: {
    showMoreOptions() {
      uni.showActionSheet({
        itemList: ['编辑', '删除', '分享', '举报'],
        success: (res) => {
          switch (res.tapIndex) {
            case 0:
              this.handleEdit()
              break
            case 1:
              this.handleDelete()
              break
            case 2:
              this.handleShare()
              break
            case 3:
              this.handleReport()
              break
          }
        }
      })
    },
    handleEdit() {
      console.log('编辑')
    },
    handleDelete() {
      uni.showModal({
        title: '提示',
        content: '确定要删除吗？',
        success: (res) => {
          if (res.confirm) {
            console.log('删除')
          }
        }
      })
    },
    handleShare() {
      console.log('分享')
    },
    handleReport() {
      console.log('举报')
    }
  }
}
</script>
```

### 示例 5: 带取消按钮

```javascript
uni.showActionSheet({
  itemList: ['选项1', '选项2', '选项3'],
  success: (res) => {
    console.log('选择了', res.tapIndex)
  },
  fail: (res) => {
    console.log('取消选择')
  }
})
```

## 参数说明

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| itemList | Array | 是 | 按钮的文字数组 |
| itemColor | String | 否 | 按钮的文字颜色 |

## 返回值

| 参数名 | 类型 | 说明 |
|--------|------|------|
| tapIndex | Number | 用户点击的按钮序号，从上到下的顺序，从0开始 |

## 平台兼容性

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

## 注意事项

1. `itemList` 数组最多支持 6 个选项
2. 用户点击取消或遮罩层会触发 fail 回调
3. `tapIndex` 从 0 开始，对应 `itemList` 的索引
4. 建议将"取消"选项放在最后

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/api/ui/prompt.html#showactionsheet
- **模态弹窗**: https://uniapp.dcloud.net.cn/api/ui/prompt.html#showmodal
