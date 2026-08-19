# 界面交互 API

## 概述

界面交互 API 用于显示提示、对话框、操作菜单等。

## API 列表

### uni.showToast

显示消息提示框。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#showtoast

**参数**：
- `title` (String) - 提示的内容
- `icon` (String) - 图标类型（success、error、loading、none）
- `image` (String) - 自定义图标的本地路径
- `duration` (Number) - 提示的延迟时间，默认 2000
- `mask` (Boolean) - 是否显示透明蒙层，防止触摸穿透

**示例**：
```javascript
uni.showToast({
  title: '操作成功',
  icon: 'success',
  duration: 2000
})
```

### uni.showModal

显示模态弹窗。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#showmodal

**参数**：
- `title` (String) - 提示的标题
- `content` (String) - 提示的内容
- `showCancel` (Boolean) - 是否显示取消按钮
- `cancelText` (String) - 取消按钮的文字
- `confirmText` (String) - 确认按钮的文字

**返回值**：
- `confirm` (Boolean) - 为 true 时，表示用户点击了确定按钮
- `cancel` (Boolean) - 为 true 时，表示用户点击了取消按钮

### uni.showActionSheet

显示操作菜单。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#showactionsheet

### uni.showLoading

显示加载提示框。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#showloading

### uni.hideLoading

隐藏加载提示框。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html#hideloading

### uni.setNavigationBarTitle

设置当前页面标题。

**详细文档**：https://doc.dcloud.net.cn/uni-app-x/api/ui/navigation-bar.html#setnavigationbartitle

## 参考资源

- [uni-app 界面交互文档](https://doc.dcloud.net.cn/uni-app-x/api/ui/prompt.html)
- [uni-app 导航栏文档](https://doc.dcloud.net.cn/uni-app-x/api/ui/navigation-bar.html)
