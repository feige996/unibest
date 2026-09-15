---
name: uniapp-ad
description: A comprehensive skill for uni-ad monetization in uni-app. Use this skill to integrate ads, configure ad types, handle ad events, and follow official uni-ad documentation.
license: Complete terms in LICENSE.txt
---

## When to use this skill

Use this skill whenever the user wants to:
- Integrate ads into uni-app
- Implement ad monetization
- Configure different ad types (banner, interstitial, rewarded video, etc.)
- Handle ad events (load, show, close, error)
- Optimize ad revenue
- Set up ad placement and timing
- Handle ad policies and compliance

## How to use this skill

To integrate ads:

1. **Identify the ad type** from the user's request:
   - Banner ads → Use banner examples
   - Interstitial ads → Use interstitial examples
   - Rewarded video → Use rewarded video examples
   - Native ads → Use native ad examples

2. **Load the appropriate example file** from the `examples/` directory:
   - `examples/guide/` - Ad integration guide
   - `examples/ad-types/` - Different ad type examples
   - `examples/integration/` - Integration examples

3. **Load the appropriate API reference** from the `api/` directory:
   - `api/ad-api.md` - uni-ad API reference

4. **Follow the specific instructions** in those files for integration

## Examples and Templates

### Examples

Located in `examples/`:

- **guide/** - Ad integration guide and setup
- **ad-types/** - Different ad type examples (banner, interstitial, rewarded video, etc.)
- **integration/** - Integration examples and best practices

### API Reference

Located in `api/`:

- **ad-api.md** - Complete uni-ad API reference

## Best Practices

1. **User experience**: Don't interrupt user experience with excessive ads
2. **Ad placement**: Place ads strategically for maximum revenue
3. **Loading**: Handle ad loading states properly
4. **Error handling**: Implement proper error handling for ad failures
5. **Compliance**: Follow ad policies and regulations

## Resources

- **Official Documentation**: https://uniapp.dcloud.net.cn/uni-ad/

## Keywords

uni-ad, 广告变现, banner广告, 激励视频, 插屏广告, ad monetization, ad integration

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
