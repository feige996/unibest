# UniApp 组件参考文档

本文档提供 uni-app 组件的详细说明和快速导航。每个组件都有独立的文档文件，包含组件概述、属性、事件、平台兼容性、使用示例和官方文档链接。

**注意**：
- 组件文档已按类型分类：**内置组件**位于 `built-in/` 目录，**扩展组件（uni-ui）**位于 `uni-ui/` 目录
- 每个组件都有独立的文档文件（`.md`），格式参考 `block.md`
- **详细文档和示例**：每个组件文档都包含官方文档链接
- **uni-ui 组件示例代码**：见 `examples/uni-ui/` 目录（每个组件都有独立的 .vue 示例文件）

## 组件分类索引

### 1. 内置组件（Built-in Components）

uni-app 提供的基础组件，无需安装即可使用。文档位于 `built-in/` 目录。

#### 视图容器

- [view](./built-in/view.md) - 视图容器，类似于 HTML 中的 div
- [scroll-view](./built-in/scroll-view.md) - 可滚动视图容器
- [swiper](./built-in/swiper.md) - 滑块视图容器，用于轮播图
- [match-media](./built-in/match-media.md) - 屏幕动态适配组件
- [movable-area](./built-in/movable-area.md) - 可拖动区域
- [movable-view](./built-in/movable-view.md) - 可移动的视图容器
- [cover-view](./built-in/cover-view.md) - 可覆盖在原生组件上的文本组件
- [cover-image](./built-in/cover-image.md) - 可覆盖在原生组件上的图片组件

#### 基础内容

- [icon](./built-in/icon.md) - 图标组件
- [text](./built-in/text.md) - 文本组件，用于显示文本内容
- [rich-text](./built-in/rich-text.md) - 富文本显示组件
- [progress](./built-in/progress.md) - 进度条组件

#### 表单组件

- [button](./built-in/button.md) - 按钮组件
- [checkbox](./built-in/checkbox.md) - 多项选择器
- [editor](./built-in/editor.md) - 富文本输入框
- [form](./built-in/form.md) - 表单组件
- [input](./built-in/input.md) - 输入框组件
- [label](./built-in/label.md) - 标签组件
- [picker](./built-in/picker.md) - 弹出式列表选择器
- [picker-view](./built-in/picker-view.md) - 窗体内嵌式列表选择器
- [radio](./built-in/radio.md) - 单项选择器
- [slider](./built-in/slider.md) - 滑动选择器
- [switch](./built-in/switch.md) - 开关选择器
- [textarea](./built-in/textarea.md) - 多行文本输入框

#### 导航组件

- [navigator](./built-in/navigator.md) - 页面链接，类似于 HTML 中的 a 标签

#### 媒体组件

- [audio](./built-in/audio.md) - 音频组件
- [camera](./built-in/camera.md) - 相机组件
- [image](./built-in/image.md) - 图片组件
- [video](./built-in/video.md) - 视频组件
- [live-player](./built-in/live-player.md) - 直播播放组件
- [live-pusher](./built-in/live-pusher.md) - 实时音视频录制（直播推流）组件

#### 其他组件

- [map](./built-in/map.md) - 地图组件
- [canvas](./built-in/canvas.md) - 画布组件
- [web-view](./built-in/web-view.md) - web 浏览器组件
- [ad](./built-in/ad.md) - 广告组件
- [ad-draw](./built-in/ad-draw.md) - 沉浸视频流广告组件
- [custom-tab-bar](./built-in/custom-tab-bar.md) - 底部 tabbar 自定义组件
- [navigation-bar](./built-in/navigation-bar.md) - 页面顶部导航
- [page-meta](./built-in/page-meta.md) - 页面属性配置节点
- [unicloud-db](./built-in/unicloud-db.md) - uniCloud 数据库访问和操作组件

### 2. 扩展组件（uni-ui）

uni-ui 是 DCloud 官方提供的跨端 UI 库，包含 40+ 个常用组件，需要从插件市场安装。文档位于 `uni-ui/` 目录。

#### 基础组件

- [uni-badge](./uni-ui/uni-badge.md) - 数字角标组件
- [uni-icons](./uni-ui/uni-icons.md) - 图标组件
- [uni-tag](./uni-ui/uni-tag.md) - 标签组件
- [uni-link](./uni-ui/uni-link.md) - 超链接组件
- [uni-section](./uni-ui/uni-section.md) - 标题栏组件

#### 布局组件

- [uni-row](./uni-ui/uni-row.md) - 布局-行组件
- [uni-grid](./uni-ui/uni-grid.md) - 宫格组件
- [uni-group](./uni-ui/uni-group.md) - 分组组件
- [uni-title](./uni-ui/uni-title.md) - 章节标题组件

#### 导航组件

- [uni-nav-bar](./uni-ui/uni-nav-bar.md) - 自定义导航栏组件
- [uni-breadcrumb](./uni-ui/uni-breadcrumb.md) - 面包屑组件

#### 数据展示组件

- [uni-card](./uni-ui/uni-card.md) - 卡片组件
- [uni-list](./uni-ui/uni-list.md) - 列表组件
- [uni-indexed-list](./uni-ui/uni-indexed-list.md) - 索引列表组件
- [uni-table](./uni-ui/uni-table.md) - 表格组件
- [uni-load-more](./uni-ui/uni-load-more.md) - 加载更多组件
- [uni-pagination](./uni-ui/uni-pagination.md) - 分页器组件

#### 数据录入组件

- [uni-easyinput](./uni-ui/uni-easyinput.md) - 增强输入框组件
- [uni-number-box](./uni-ui/uni-number-box.md) - 数字输入框组件
- [uni-forms](./uni-ui/uni-forms.md) - 表单组件
- [uni-data-checkbox](./uni-ui/uni-data-checkbox.md) - 数据选择器组件
- [uni-data-picker](./uni-ui/uni-data-picker.md) - 级联选择器组件
- [uni-data-select](./uni-ui/uni-data-select.md) - 下拉框组件
- [uni-combox](./uni-ui/uni-combox.md) - 组合框组件

#### 日期时间组件

- [uni-calendar](./uni-ui/uni-calendar.md) - 日历组件
- [uni-datetime-picker](./uni-ui/uni-datetime-picker.md) - 日期选择器组件
- [uni-dateformat](./uni-ui/uni-dateformat.md) - 日期格式化组件

#### 反馈组件

- [uni-popup](./uni-ui/uni-popup.md) - 弹出层组件
- [uni-drawer](./uni-ui/uni-drawer.md) - 抽屉组件
- [uni-notice-bar](./uni-ui/uni-notice-bar.md) - 通告栏组件
- [uni-tooltip](./uni-ui/uni-tooltip.md) - 文字提示组件

#### 操作反馈组件

- [uni-rate](./uni-ui/uni-rate.md) - 评分组件
- [uni-fav](./uni-ui/uni-fav.md) - 收藏按钮组件
- [uni-fab](./uni-ui/uni-fab.md) - 悬浮按钮组件
- [uni-swipe-action](./uni-ui/uni-swipe-action.md) - 滑动操作组件

#### 其他组件

- [uni-collapse](./uni-ui/uni-collapse.md) - 折叠面板组件
- [uni-countdown](./uni-ui/uni-countdown.md) - 倒计时组件
- [uni-search-bar](./uni-ui/uni-search-bar.md) - 搜索栏组件
- [uni-segmented-control](./uni-ui/uni-segmented-control.md) - 分段器组件
- [uni-steps](./uni-ui/uni-steps.md) - 步骤条组件
- [uni-swiper-dot](./uni-ui/uni-swiper-dot.md) - 轮播图指示点组件
- [uni-transition](./uni-ui/uni-transition.md) - 过渡动画组件
- [uni-file-picker](./uni-ui/uni-file-picker.md) - 文件选择上传组件
- [uni-goods-nav](./uni-ui/uni-goods-nav.md) - 商品导航组件

## 文档结构说明

每个组件文档文件（`.md`）包含以下内容：

1. **概述**：组件简介和用途说明
2. **属性**：组件的所有属性说明（含类型、默认值、说明）
3. **事件**：组件支持的所有事件
4. **插槽**：组件支持的插槽（如果有）
5. **平台兼容性**：各平台支持情况
6. **使用示例**：基础用法和更多示例
7. **参考资源**：官方文档链接、插件市场链接（uni-ui）、本地示例链接（uni-ui）

## 使用说明

1. **查找组件**：根据组件分类查找对应的文档文件
2. **查看详细文档**：点击组件名称链接查看完整的组件文档
3. **查看示例**：uni-ui 组件有完整的示例代码在 `examples/uni-ui/` 目录
4. **访问官方文档**：每个组件文档都包含官方文档链接，可获取最新信息

## 参考资源

- [uni-app 组件文档](https://uniapp.dcloud.net.cn/component/)
- [uni-ui 组件库](https://ext.dcloud.net.cn/plugin?id=55)
- [uni-ui 官方文档](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html)
- [插件市场](https://ext.dcloud.net.cn/)
