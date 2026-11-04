---
name: automator
description: >-
  小程序/小游戏页面自动化：点击、输入、滚动、导航、断言、生成 automator 脚本。
  小程序走 selector / 页面栈；小游戏走画布坐标触摸（automation_game_action）。
  用户要点按钮、填表、页面验证、自动化测试时使用。不负责 console/network 深度排查。
---

# automator

## 用途

在当前项目内做确定性 UI 操作与验证。先按 `compileType` 分流：`miniprogram` → 小程序；`game` / `gamePlugin` → 小游戏。二者工具集不同，不要混用。

参数与动作枚举：`wechatide -c <clientName> <tool> --help`。调用前须已由根入口完成登录检查；项目窗口未开时先经 initializer。截图统一用 `simulator_screenshot`（参数见 `--help`）。

---

## 小程序

### 工作流

1. 解析目标流程 → 导航/交互 → 采集证据 → pass/fail 摘要
2. 「等 → 再点/再跳」用工具自带 `waitForSelector` / `wait`，不要拆成单独等待 tool
3. 不确定选择器时，先 `automation_page_action`（`querySelectorAll`）

### 意图 → 工具

| 意图 | 工具 |
|------|------|
| 页面导航 | `automation_navigate` |
| 点击/输入/长按/读文本/样式/触摸 | `automation_element_action`（元素用 `selector`；`tap`/`touch*`/`longpress` 也可只传 `x`/`y` 坐标） |
| 读/写 page data、querySelector、callMethod | `automation_page_action` |
| 页面滚动；真机调试 / 关工具 | `automation_viewport_action`（`pageScrollTo` / `remote` / `close`） |
| 截图 | `simulator_screenshot` |
| 运行时页栈/当前页 | `automation_runtime_info`（主归属 initializer，此处只读） |
| 执行受控表达式 | `automation_evaluate` |
| 调用/mock wx API | `automation_wx_api`（主归属 debugger；此处限流程内 mock/调用） |
| 测试号 / ticket | `automation_testaccount` |
| 生成脚本草稿 | `automation_generate_script`（生成后需人工检查） |

### 示例

```bash
wechatide -c <clientName> automation_element_action --project <project> --selector button --action tap --wait-for-selector button
wechatide -c <clientName> automation_element_action --project <project> --action tap --x 195 --y 471
wechatide -c <clientName> automation_page_action --project <project> --action querySelectorAll --selector button
wechatide -c <clientName> simulator_screenshot --project <project> --path <localOutputPath>
```

### 边界

- 元素交互只用 `automation_element_action`，不是 `automation_viewport_action`
- `automation_viewport_action` **不支持** tap/input
- `tap` / `touch*` / `longpress`：传 `selector` 或传 `x`+`y`（视口 CSS 像素），**不要同时传**；其余 action 仍必须 `selector`
- 坐标点击可先 `simulator_screenshot` / `offset` 估点，再 `--action tap --x … --y …`
- 不要对小程序项目调用 `automation_game_action`
- 生成脚本先在项目目录 `npm i miniprogram-automator`，再用 `node <script> [projectPath]` 运行；不传路径时用录制时的项目路径；坐标触控不会生成可运行的 element.tap 语句

### 失败快表

| 情况 | 处理 |
|------|------|
| 窗口未开 / `PROJECT_*` | initializer 开窗；配置错误见 [project-tool-error-guide.md](../../wechatide-tools/references/project-tool-error-guide.md) |
| timeout / 找不到元素 | 记录步骤与当前页；`querySelectorAll` 核对选择器；**不要**盲目加长 wait 死循环 |
| 需要 console/network 归因 | 移交 debugger，带上复现步骤与选择器 |
| User denied（测试号等） | 停等；勿自动重试破坏性动作 |

---

## 小游戏

### 工作流

1. `simulator_screenshot` 看清目标 → 用图上像素坐标触摸 → 再截图取证 → pass/fail 摘要
2. 交互只用画布坐标或截图坐标，不用 WXML `selector` / 页面导航 / page data
3. 等待只用可选 `wait`（秒）；无 `waitForSelector`
4. 从图上取点：先 `simulator_screenshot`，再 tap/swipe 带 `--coordinate-space image` 与返回的宽高（见下方边界）

### 意图 → 工具

| 意图 | 工具 |
|------|------|
| 画布 tap / swipe / touch\* | `automation_game_action`（默认画布坐标；或 `coordinateSpace=image`） |
| 运行时执行表达式 | `automation_evaluate`（`wx.*` 等；勿依赖页面栈 / WXML） |
| 截图 | `simulator_screenshot` |
| 调用/mock wx API | `automation_wx_api`（主归属 debugger；此处限流程内 mock/调用） |
| 测试号 / ticket | `automation_testaccount` |

**不要用**（小游戏无页面栈 / WXML）：`automation_navigate`、`automation_element_action`、`automation_page_action`、`automation_runtime_info`、`automation_generate_script`。

### 示例

```bash
wechatide -c <clientName> simulator_screenshot --project <project>
wechatide -c <clientName> automation_game_action --project <project> --action tap --x 120 --y 340
wechatide -c <clientName> automation_game_action --project <project> --action tap --x 240 --y 680 --coordinate-space image --image-width 750 --image-height 1334
wechatide -c <clientName> automation_game_action --project <project> --action swipe --start-x 20 --start-y 400 --end-x 300 --end-y 400 --duration 300
wechatide -c <clientName> automation_evaluate --project <project> --fn-source 'function(){ return wx.getSystemInfoSync() }'
```

### 边界

- 触摸只用 `automation_game_action`；误用 selector / navigate → 停止并改回本工具
- `automation_evaluate` 可执行 `wx.*` 等表达式；小游戏勿写依赖 `getCurrentPages` / Page 的代码
- `coordinateSpace=image` 时：`x`/`y`/`startX`/`startY`/`endX`/`endY` 均为截图像素，且必须带与参照图一致的 `imageWidth`/`imageHeight`；工具按当前画布尺寸换算，agent 不要自己算 scale
- 默认 `coordinateSpace=canvas`（或不传）时上述坐标为画布逻辑坐标
- 需重新编译时走 compiler 的 `simulator_refresh`，不是 `simulator_open_page` / `compile_wxml`

### 失败快表

| 情况 | 处理 |
|------|------|
| 窗口未开 / `PROJECT_*` | initializer 开窗；配置错误见 [project-tool-error-guide.md](../../wechatide-tools/references/project-tool-error-guide.md) |
| 误用 selector / navigate / page_action | 停止；改用 `automation_game_action` |
| 触摸无反馈 | 核对坐标空间（canvas vs image）与 image 尺寸；补截图；移交 debugger 看 console |
| 需要 console/network 归因 | 移交 debugger，带上复现步骤与坐标 |
| User denied（测试号等） | 停等；勿自动重试破坏性动作 |

---

## 移交

| 目标 | 还需 |
|------|------|
| debugger | 失败步骤；小程序带 currentPage/selector，小游戏带坐标；已采集截图路径 |
| compiler | 小程序：需重新编译的页面；小游戏：`simulator_refresh` |
| 结束 | pass/fail 摘要与关键证据 |
