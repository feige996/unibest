---
name: compiler
description: >-
  小程序/小游戏编译与模拟器刷新：打开指定页面、编译 WXML/WXSS、构建 npm、刷新模拟器。
  小游戏以刷新模拟器与构建 npm 为主；单文件 WXML/WXSS 编译仅小程序页面适用。
  用户说编译一下、跳到某页看效果、构建 npm、模拟器没刷新时使用。
---

# compiler

## 用途

区分「让模拟器跑起来看效果」与「校验局部文件编译产物」。

**小游戏**：以 `simulator_refresh` 为主。

**`compile_wxml` / `compile_wxss`**：仅适用于小程序页面模板与样式，不要用于小游戏工程。

## 意图 → 工具

| 意图 | 工具 |
|------|------|
| 编到某页看效果 | `simulator_open_page` |
| 刷新/等同工具栏编译 | `simulator_refresh`（成功只表示已触发，≠编译通过） |
| 校验 WXML（仅小程序） | `compile_wxml` |
| 校验 WXSS（仅小程序） | `compile_wxss` |
| 构建 npm | `build_npm`（**主归属本 scene**） |

```bash
wechatide -c <clientName> simulator_open_page --project <project> --page pages/index/index [--query id=1]
wechatide -c <clientName> simulator_refresh --project <project>
wechatide -c <clientName> build_npm --project <project> [--compile-type miniprogram]
```

参数细节：`--help` / tools.yaml。需要开窗时先走 initializer。小游戏构建 npm 时按项目类型传合适的 `--compile-type`。

## 边界

- `simulator_open_page` / `simulator_refresh` 成功 ≠ 整包或单文件编译通过
- 单文件工具只覆盖局部，不代表整包构建成功；且仅小程序页面适用
- `build_npm` 会改本地产物，排查时不要默认执行

## 失败快表

| 情况 | 处理 |
|------|------|
| 窗口未开 / 开窗类错误 | 经 initializer `open_project_window`；`PROJECT_*` 见 [project-tool-error-guide.md](../../wechatide-tools/references/project-tool-error-guide.md) |
| `simulator_refresh` 成功但仍异常 | 用 debugger 取 console/截图；勿连续无差别刷新 |
| 对小游戏调用 `compile_wxml`/`compile_wxss` | 停止并改用 `simulator_refresh` / `build_npm` |
| `build_npm` 失败 | 原样报告依赖/产物错误；勿在未要求时反复构建 |

## 移交

| 目标 | 还需 |
|------|------|
| automator | 已打开的页面路径、待验证点 |
| debugger | 编译后现象、目标页、是否已 refresh |
| previewer | `project`；可不经模拟器直接预览 |
