# 请求库

目前 unibest 支持 3 种请求方式：

- 简单版 `http`：路径 `src/http/http.ts`，适合大多数简单项目。
- `alova`：路径 `src/http/alova.ts`。
- `vue-query`：路径 `src/http/vue-query.ts`，主要用于自动生成接口，详情见 https://unibest.tech/base/17-generate 。

## 如何选择

如果您以前用过 `alova` 或 `vue-query`，可以优先使用熟悉的方案。

如果项目接口不复杂，简单版 `http` 就够了，也不会增加额外包体积。

## 关于 http 使用

```ts
import { http } from '@/http/http'

interface IUserInfoRes {
  id: number
  nickname: string
}

export function getUserInfo() {
  return http.get<IUserInfoRes>('/user/info')
}

export function updateUserInfo(data: Partial<IUserInfoRes>) {
  return http.post('/user/update', data)
}
```

响应成功时会返回业务 `data`；业务错误、登录失效、HTTP 状态码异常和网络异常会统一 reject `HttpError`：

```ts
import type { HttpError } from '@/http/types'

try {
  const userInfo = await getUserInfo()
  console.log(userInfo.nickname)
}
catch (error) {
  const httpError = error as HttpError
  console.log(httpError.type, httpError.message, httpError.statusCode)
}
```

如果调用方需要自行处理错误提示，可以传入 `hideErrorToast: true`：

```ts
http.get<IUserInfoRes>('/user/info', undefined, undefined, {
  hideErrorToast: true,
})
```

## roadmap

菲鸽最近在优化脚手架，后续可以选择是否使用第三方请求库，以及选择具体请求库。
