# uni-app 技能更新计划

## 更新目标

确保所有 uni-app 相关技能与官方文档一一对应，每个组件和 API 都有独立的示例文件，包含原文档地址和官网全部示例。

## 当前进度

### ✅ 已完成

1. **核对清单创建**: 已创建 `CHECKLIST.md`，列出所有需要核对的内容
2. **目录结构创建**: 已创建 `examples/api/` 和 `examples/components/built-in/` 目录结构
3. **示例文件创建**:
   - ✅ `examples/api/network/request.md` - uni.request 完整示例
   - ✅ `examples/api/storage/set-storage.md` - uni.setStorage 完整示例
   - ✅ `examples/api/ui/show-toast.md` - uni.showToast 完整示例
   - ✅ `examples/components/built-in/view.md` - view 组件完整示例
4. **SKILL.md 更新**: 已更新 `SKILL.md`，添加对示例文件的引用说明

### 🔄 进行中

1. **API 示例文件创建**: 已创建3个，剩余约50+个待创建
2. **组件示例文件创建**: 已创建1个，剩余39个待创建

### ⏳ 待完成

1. **完成所有 API 示例文件** (约50+个文件)
2. **完成所有内置组件示例文件** (39个文件)
3. **创建 uni-app-x 完整文档** (组件 + API)
4. **验证所有文档链接**
5. **补充缺失的 API**

## 下一步行动

### 立即执行

1. **批量创建 API 示例文件**
   - 优先创建常用 API: navigation, media, location, device
   - 每个文件包含：官方文档链接、概述、基础用法、完整示例（官网全部示例）、平台差异、注意事项

2. **批量创建组件示例文件**
   - 优先创建常用组件: button, input, image, scroll-view, swiper
   - 每个文件包含：官方文档链接、概述、基础用法、完整示例（官网全部示例）、属性说明、平台兼容性

3. **创建示例文件模板**
   - 为 API 和组件分别创建模板文件，便于批量生成

### 后续计划

1. **uni-app-x 文档创建**
   - 创建 `uniappx-project` 的完整组件和 API 文档
   - 参考 uni-app 的结构，但针对 uni-app-x 的特性

2. **文档链接验证**
   - 检查所有文档中的官方链接是否正确
   - 确保所有链接可访问

3. **完整性检查**
   - 对照官方文档，确保没有遗漏任何组件或 API
   - 检查每个示例文件是否包含官网全部示例

## 文件创建优先级

### 高优先级（立即创建）

**API 示例**:
- navigation: navigateTo, redirectTo, switchTab, navigateBack
- media: chooseImage, previewImage, chooseVideo
- location: getLocation, openLocation, chooseLocation
- device: getSystemInfo, getNetworkType

**组件示例**:
- button, input, image, scroll-view, swiper, text, icon

### 中优先级（后续创建）

**API 示例**:
- 其他网络 API: uploadFile, downloadFile, WebSocket
- 其他存储 API: getStorage, removeStorage, clearStorage
- 其他 UI API: showModal, showActionSheet, showLoading
- 文件 API: saveFile, getFileInfo
- 支付和分享 API

**组件示例**:
- 表单组件: checkbox, radio, picker, switch, textarea
- 媒体组件: video, audio, camera
- 其他组件: map, canvas, web-view

### 低优先级（最后创建）

- 不常用的 API 和组件
- 平台特定的 API 和组件

## 示例文件格式标准

每个示例文件应包含：

1. **标题和官方文档链接**
   ```markdown
   # [组件/API名称] - [描述]
   
   ## 官方文档
   参考官方文档：[链接]
   ```

2. **概述**
   ```markdown
   ## 概述
   [简要说明组件/API的用途]
   ```

3. **基础用法**
   ```markdown
   ## 基础用法
   [最简单的使用示例]
   ```

4. **完整示例**
   ```markdown
   ## 完整示例
   ### 示例 1: [场景描述]
   [代码示例]
   
   ### 示例 2: [场景描述]
   [代码示例]
   ...
   ```

5. **属性/参数说明**（如适用）
   ```markdown
   ## 属性说明
   | 属性名 | 类型 | 默认值 | 说明 |
   ...
   ```

6. **平台兼容性**
   ```markdown
   ## 平台兼容性
   | 平台 | 支持情况 |
   ...
   ```

7. **注意事项**
   ```markdown
   ## 注意事项
   1. ...
   2. ...
   ```

8. **参考资源**
   ```markdown
   ## 参考资源
   - **官方文档**: [链接]
   - **相关文档**: [链接]
   ```

## 质量检查清单

每个示例文件创建后，需要检查：

- [ ] 是否包含官方文档链接
- [ ] 是否包含基础用法示例
- [ ] 是否包含官网全部示例场景
- [ ] 代码示例是否可以直接运行
- [ ] 是否包含平台兼容性说明
- [ ] 是否包含注意事项
- [ ] 格式是否统一规范

## 预计工作量

- **API 示例文件**: 约50+个文件，每个文件约200-500行
- **组件示例文件**: 39个文件，每个文件约200-500行
- **uni-app-x 文档**: 组件 + API，约100+个文件

总计约200+个文件需要创建或更新。
