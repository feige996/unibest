# 发布流程

## 1. 微信小程序上传(`pnpm upload:mp`)

脚本 `scripts/upload-weixin.js` 全自动:构建(`build:mp:prod`,跳过打开开发者工具)→ miniprogram-ci 上传。

```bash
pnpm upload:mp                                  # 版本取 package.json,描述取最新 Git commit
pnpm upload:mp --version=1.0.1                  # 指定版本号
pnpm upload:mp --desc="修复登录bug"              # 指定描述
pnpm upload:mp --robot=2                        # 指定机器人(1-30,多人协作避免互相覆盖)
```

版本号优先级:命令行 > package.json;描述优先级:命令行 > Git commit > 时间戳。

**前置条件(缺一上传失败)**:
1. 公众平台已开通「小程序代码上传」权限并配置 IP 白名单
2. 根目录有私钥文件 `private.<appid>.key`(appid 与 `env/.env` 的 `VITE_WX_APPID` 一致)
3. 上传后到公众平台「版本管理 → 开发版本」设为体验版

## 2. 版本管理(changesets)

```bash
pnpm upload:changeset   # 生成变更记录 + 消费变更(升版本)
```

- 对外可见的变更(新页面、接口变动、依赖升级)提交 changeset
- `pnpm bump-version` 单独升 package.json 版本(上传脚本读它)

## 3. uni-app 依赖升级

```bash
pnpm uvm        # 交互式升级 @dcloudio/* 全家桶
pnpm uvm-rm     # 清理升级残留
```

升级后必跑:`pnpm type-check && pnpm test:run`,并三端冒烟(`dev` / `dev:mp` / `dev:app`)。

## 4. 环境切换

env 文件在 `env/` 目录,按 mode 叠加:`.env`(公共)→ `.env.development` / `.env.test` / `.env.production`。发布前核对生产 env:接口地址、微信三环境地址(`VITE_SERVER_BASEURL__WEIXIN_*`)、`VITE_DELETE_CONSOLE=true`。

## 5. 合入前门禁

```bash
pnpm type-check && pnpm lint && pnpm test:run
```

提交信息 conventional commits(commitlint 强制):`feat: / fix: / docs: / style: / refactor: / perf: / test: / chore:`。
