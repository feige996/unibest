---
name: previewer
description: >-
  小程序/小游戏预览与发布：自动推送手机预览、生成预览二维码、上传体验版。
  用户说预览、发到手机、扫码预览、上传代码、发布体验版时使用。
---

# previewer

## 用途

预览与上传。默认预览工具是 `auto_preview`。**无需先 `open_project_window`。**

## 意图 → 工具

| 意图 | 工具 |
|------|------|
| 预览 / 发到手机 / 真机预览 / 自动预览 | `auto_preview`（必填 `project`；用户指定页面时可加 `--page-path` / `--query` / `--scene`） |
| 要二维码 / 扫码预览 | `create_preview_qrcode`（优先 `--qr-format window`） |
| 上传代码 / 发布体验版（须用户明确要求） | `upload` |

```bash
wechatide -c <clientName> auto_preview --project <project>
wechatide -c <clientName> auto_preview --project <project> --page-path pages/index/index --query id=1
wechatide -c <clientName> create_preview_qrcode --project <project> --qr-format window
wechatide -c <clientName> upload --project <project> --upload-version 1.0.0 [--desc "备注"]
```

`auto_preview` **不要**传本地输出路径类参数；需要落地二维码/信息文件时用 `create_preview_qrcode`。

## 边界

- 只处理预览、二维码、上传
- `upload` 仅在用户明确要求时调用

## 失败快表

| 情况 | 处理 |
|------|------|
| `PROJECT_*` / `APPID_ERROR` | [project-tool-error-guide.md](../../wechatide-tools/references/project-tool-error-guide.md) |
| 用户拒绝上传 / 确认取消 | **不要**自动再 `upload` |
| 预览/上传权限或账号问题 | 说明需开发者权限或重新 `login`；勿死循环重试 |
| 超时 | 原样报告；可问用户是否重试一次，勿静默连打 |

## 移交

遵循根 SKILL「跨 scene 移交」。

| 目标 | 还需 |
|------|------|
| debugger | 预览失败现象、`project`、相关 page-path |
| compiler | 需先在模拟器验证时：说明要开窗 + 目标页 |
| 结束 | 预览/上传结果摘要 |
