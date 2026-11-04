---
name: debugger
description: >-
  排查小程序/小游戏运行问题：console/network 日志、模拟器截图、运行时状态、wx API 诊断、清缓存。
  用户提到报错日志、接口失败、截图取证、模拟器卡住时使用。
---

# debugger

## 用途

采集最小证据集，归因并给出下一步。默认优先只读诊断。

## 工作流

1. 读运行时（`automation_runtime_info`；主归属 initializer，此处只读）
2. 按需取 console / network / 截图
3. 归类问题 → `likelyCause` + `recoveryPath` + `nextActions`
4. 怀疑模拟器僵死时再 `simulator_refresh`（主归属 compiler，成功≠编译通过）

## 意图 → 工具

| 意图 | 工具 |
|------|------|
| console | `get_simulator_console`（`command` 必须是 grep，如 `grep -i error`；全量用 `grep -n .`） |
| network | `get_simulator_network`（同上） |
| 截图 | `simulator_screenshot`（优先 `waitForSelector`；参数见 `--help`） |
| 当前页/页栈 | `automation_runtime_info` |
| wx API 诊断/mock | `automation_wx_api`（**主归属本 scene**） |
| 清缓存 | `debug_clear_cache` |
| 刷新模拟器 | `simulator_refresh`（主归属 compiler） |

```bash
wechatide -c <clientName> get_simulator_console --project <project> --command "grep -i error"
wechatide -c <clientName> simulator_screenshot --project <project> --wait-for-selector .submit-btn
```

注意：`command` 不要传 `"all"`；返回空字符串=无匹配行，≠ console 为空。

## 问题类型（issueClass）

`runtime-exception` | `network-failure` | `preview-blocked` | `automation-mismatch` | `environment-not-ready` | `simulator-state-error`

## 建议输出

`summary` / `issueClass` / `symptom` / `evidence` / `likelyCause` / `recoveryPath` / `nextActions`

## 边界

- 不要无差别反复 `simulator_refresh`
- 不要隐式改测试号、开远程调试或 `quit`
- 截图统一用 `simulator_screenshot`

## 失败快表

| 情况 | 处理 |
|------|------|
| 窗口未开 / `PROJECT_*` | initializer；[project-tool-error-guide.md](../../wechatide-tools/references/project-tool-error-guide.md) |
| grep 结果为空 | 说明无匹配行；可放宽 pattern 或改用 `grep -n .`，≠「没有日志系统」 |
| 截图失败 | 确认窗口已开与 selector；用 `simulator_screenshot` 重试 |
| 清缓存后仍异常 | 记入 evidence；移交 compiler 或说明需用户手动确认 |

## 移交

| 目标 | 还需 |
|------|------|
| automator | 复现步骤、稳定 selector、issueClass |
| compiler | 需 refresh/simulator_open_page 的路径 |
| previewer | 若属预览阻断：`project` + 现象 |
| 结束 | 完整诊断输出字段 |
