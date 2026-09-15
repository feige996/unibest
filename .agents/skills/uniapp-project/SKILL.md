---
name: uniapp-project
description: Provides comprehensive uni-app component and API integration guidance. Use when the user needs official uni-app components or APIs, wants per-component or per-API examples, or needs cross-platform compatibility details.
license: Complete terms in LICENSE.txt
---

## When to use this skill

Use this skill whenever the user wants to:
- Use any uni-app built-in component or uni-ui component
- Use any uni-app API (network, storage, device, UI, navigation, media, etc.)
- Access per-component or per-API examples with official doc links
- Check platform compatibility for components and APIs
- Build cross-platform uni-app applications with official patterns

## How to use this skill

This skill is organized to match the official uni-app components and API documentation:

1. **Choose component or API category**:
   - Components → `examples/components/built-in/` and `examples/uni-ui/`
   - APIs → `examples/api/` (categorized by domain)

2. **Open the matching example file**:
   - Each component or API has its own example file
   - Each example includes the official documentation URL
   - Examples mirror the official documentation examples

3. **Use references when you need full specs**:
   - `references/components/built-in/` for built-in components
   - `references/components/uni-ui/` for uni-ui components
   - `references/api/` for API parameter/return/compatibility details

## Examples and References

### Components (Built-in)
- Examples: `examples/components/built-in/*.md`
- References: `references/components/built-in/*.md`
- Official docs: https://uniapp.dcloud.net.cn/component/

### Components (uni-ui)
- Examples: `examples/uni-ui/*.vue` and `examples/uni-ui/README.md`
- References: `references/components/uni-ui/*.md`
- Official docs: https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html
- Plugin: https://ext.dcloud.net.cn/plugin?id=55

### APIs
- Examples: `examples/api/{category}/*.md`
- References: `references/api/*.md`
- Official docs: https://uniapp.dcloud.net.cn/api/

## Best Practices

1. **One file per component/API**: Each component and API has an independent example file with official doc link.
2. **Follow platform compatibility**: Check the compatibility section in each example/reference.
3. **Use conditional compilation**: Use `#ifdef`/`#endif` for platform-specific logic.
4. **Keep examples aligned**: Use the official documentation examples as the source of truth.
5. **Prefer references for specs**: Use `references/` for full parameter tables and compatibility.

## Resources

- **Components**: https://uniapp.dcloud.net.cn/component/
- **APIs**: https://uniapp.dcloud.net.cn/api/
- **uni-ui**: https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html
- **Plugin Market**: https://ext.dcloud.net.cn/

## Keywords

uniapp, uni-app, components, api, built-in components, uni-ui, examples, references, pages.json, manifest.json, H5, App, mini program, 跨平台, 组件, API, 官方文档
  - `examples/api/network/` - 网络请求 API 示例
  - `examples/api/storage/` - 数据存储 API 示例
  - `examples/api/device/` - 设备信息 API 示例
  - `examples/api/ui/` - 界面交互 API 示例
  - `examples/api/location/` - 位置服务 API 示例
  - `examples/api/media/` - 媒体处理 API 示例
  - `examples/api/navigation/` - 页面路由 API 示例
  - `examples/api/file/` - 文件操作 API 示例
  - `examples/api/payment/` - 支付 API 示例
  - `examples/api/share/` - 分享 API 示例
  - `examples/api/other/` - 其他 API 示例
- `examples/uni-ui/` - uni-ui 组件的完整示例代码（每个组件一个独立的 .vue 文件）

**使用场景**：当需要查看组件或 API 的完整使用示例时，参考此目录下的示例文件。每个示例文件包含官网展示的所有示例场景，可直接复制使用。

**注意**：
- references/ 和 examples/ 职责不同，不应合并。references/ 提供文档说明，examples/ 提供可运行代码。
- 每个组件和 API 都有独立的示例文件，包含原文档地址和官网全部示例
- 内置组件的示例代码在 `examples/components/built-in/` 目录
- API 的示例代码在 `examples/api/` 目录，按分类组织
- uni-ui 组件的完整示例代码在 `examples/uni-ui/` 目录

## 平台支持

uni-app 支持以下平台：

- **H5**：Web 浏览器
- **微信小程序**：WeChat Mini Program
- **支付宝小程序**：Alipay Mini Program
- **百度小程序**：Baidu Smart Program
- **字节跳动小程序**：ByteDance Mini Program
- **QQ 小程序**：QQ Mini Program
- **快手小程序**：Kuaishou Mini Program
- **App**：iOS、Android（nvue、vue）
- **快应用**：Quick App

每个组件和 API 的详细平台支持情况见对应文档。

## 参考资源

- **官方文档**：https://uniapp.dcloud.net.cn/
- **组件文档**：https://uniapp.dcloud.net.cn/component/
- **API 文档**：https://uniapp.dcloud.net.cn/api/
- **插件市场**：https://ext.dcloud.net.cn/
- **社区问答**：https://ask.dcloud.net.cn/

## 使用示例

### 组件使用示例

基础组件使用示例：

```vue
<template>
  <view class="container">
    <text>{{ message }}</text>
    <button @click="handleClick">点击按钮</button>
    <image :src="imageUrl" mode="aspectFit"></image>
  </view>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello UniApp',
      imageUrl: '/static/logo.png'
    }
  },
  methods: {
    handleClick() {
      uni.showToast({
        title: '按钮被点击',
        icon: 'success' 
      })
    }
  }
}
</script>
```

**更多组件示例**：
- **内置组件示例**：请参考[官方文档](https://uniapp.dcloud.net.cn/component/)或 `references/components/built-in/` 目录下的组件文档
- **uni-ui 组件完整示例**：见 `examples/uni-ui/` 目录（每个组件都有独立的 .vue 示例文件）
- **组件详细文档**：见 `references/components/built-in/` 和 `references/components/uni-ui/` 目录（每个组件都有独立的文档文件，包含属性、事件、平台兼容性、使用示例）

### API 使用示例

```javascript
// 网络请求
uni.request({
  url: 'https://api.example.com/data',
  method: 'GET',
  success: (res) => {
    console.log(res.data)
  },
  fail: (err) => {
    console.error(err)
  }
})

// 数据存储
uni.setStorage({
  key: 'userInfo',
  data: { name: 'John', age: 30 },
  success: () => {
    console.log('存储成功')
  }
})

// 页面跳转
uni.navigateTo({
  url: '/pages/detail/detail?id=123'
})
```

**更多 API 示例**：见 `references/api/` 目录中的详细文档

## 注意事项

1. **组件层级**：原生组件（如 video、map）层级高于普通组件，需要使用 cover-view 覆盖
2. **条件编译**：使用 `#ifdef`、`#endif` 处理平台差异
3. **生命周期**：注意 uni-app 的页面生命周期和组件生命周期
4. **样式单位**：推荐使用 rpx 作为响应式单位
5. **性能优化**：合理使用组件，避免过度嵌套，注意长列表优化

## 能力边界

### ✅ 适用场景
- 当你需要使用此技能对应的技术栈时
- 当项目需要遵循最佳实践时
- 当需要快速上手或深入理解核心概念时

### ⚠️ 需要注意
- 复杂业务逻辑需要结合具体场景调整
- 性能优化需要根据实际数据量评估

### ❌ 不适用场景
- 不相关的技术栈或框架
- 需要完全自定义的特殊场景

## 常见陷阱 (Gotchas)

1. **版本兼容性**：注意框架版本与依赖库的兼容性，不同版本 API 可能有差异
2. **配置文件格式**：配置文件格式错误是最常见的问题，建议使用编辑器的语法检查
3. **环境变量**：确保所有必要的环境变量已正确设置，敏感信息不要硬编码
4. **依赖冲突**：多版本共存时注意依赖冲突，使用 lock 文件锁定版本
5. **性能陷阱**：大数据量场景下注意性能优化，避免 N+1 查询等常见问题

## 使用流程

### Step 1: 环境准备
确保开发环境已安装必要的依赖和工具。

### Step 2: 配置初始化
根据项目需求进行基础配置。

### Step 3: 核心功能使用
按照示例代码实现核心功能。

### Step 4: 测试验证
运行测试确保功能正常。

### Step 5: 部署上线
完成开发后进行部署和监控。
