import type { IDoubleTokenRes } from '@/api/types/login'
import type { CustomRequestOptions, HttpError, IResponse } from '@/http/types'
import { nextTick } from 'vue'
import { useTokenStore } from '@/store/token'
import { isDoubleTokenMode } from '@/utils'
import { toLoginPage } from '@/utils/toLoginPage'
import { createHttpError, getResponseMessage, HttpErrorType, isSuccessResultCode, ResultEnum, ShowMessage } from './tools/enum'

// 刷新 token 状态管理
let refreshing = false // 防止重复刷新 token 标识
let taskQueue: (() => void)[] = [] // 刷新 token 请求队列

export function http<T>(options: CustomRequestOptions) {
  // 1. 返回 Promise 对象
  return new Promise<T>((resolve, reject) => {
    uni.request({
      ...options,
      dataType: 'json',
      // #ifndef MP-WEIXIN
      responseType: 'json',
      // #endif
      // 响应成功
      success: async (res) => {
        const responseData = res.data as Partial<IResponse<T>>
        const code = responseData?.code

        // 检查是否是401错误（包括HTTP状态码401或业务码401）
        const isTokenExpired = res.statusCode === 401 || code === ResultEnum.Unauthorized

        if (isTokenExpired) {
          const tokenStore = useTokenStore()
          if (!isDoubleTokenMode) {
            // 未启用双token策略，清理用户信息，跳转到登录页
            tokenStore.logout()
            toLoginPage()
            return reject(createHttpError({
              type: HttpErrorType.Auth,
              code,
              statusCode: res.statusCode,
              message: getResponseMessage(responseData, '登录已过期，请重新登录'),
              data: responseData?.data,
              raw: res,
            }))
          }

          /* -------- 无感刷新 token ----------- */
          const { refreshToken } = tokenStore.tokenInfo as IDoubleTokenRes || {}
          // token 失效的，且有刷新 token 的，才放到请求队列里
          if (refreshToken) {
            taskQueue.push(() => {
              resolve(http<T>(options))
            })
          }

          // 如果有 refreshToken 且未在刷新中，发起刷新 token 请求
          if (refreshToken && !refreshing) {
            refreshing = true
            try {
              // 发起刷新 token 请求（使用 store 的 refreshToken 方法）
              await tokenStore.refreshToken()
              // 刷新 token 成功
              refreshing = false
              nextTick(() => {
                // 关闭其他弹窗
                uni.hideToast()
                uni.showToast({
                  title: 'token 刷新成功',
                  icon: 'none',
                })
              })
              // 将任务队列的所有任务重新请求
              taskQueue.forEach(task => task())
            }
            catch (refreshErr) {
              console.error('刷新 token 失败:', refreshErr)
              refreshing = false
              // 刷新 token 失败，跳转到登录页
              nextTick(() => {
                // 关闭其他弹窗
                uni.hideToast()
                uni.showToast({
                  title: '登录已过期，请重新登录',
                  icon: 'none',
                })
              })
              // 清除用户信息
              await tokenStore.logout()
              // 跳转到登录页
              setTimeout(() => {
                toLoginPage()
              }, 2000)
            }
            finally {
              // 不管刷新 token 成功与否，都清空任务队列
              taskQueue = []
            }
          }

          return reject(createHttpError({
            type: HttpErrorType.Auth,
            code,
            statusCode: res.statusCode,
            message: getResponseMessage(responseData, '登录已过期，请重新登录'),
            data: responseData?.data,
            raw: res,
          }))
        }

        // 处理其他成功状态（HTTP状态码200-299）
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 处理业务逻辑错误
          if (!isSuccessResultCode(code as number)) {
            const httpError = createHttpError({
              type: HttpErrorType.Business,
              code,
              statusCode: res.statusCode,
              message: getResponseMessage(responseData),
              data: responseData?.data,
              raw: responseData,
            })

            if (!options.hideErrorToast) {
              uni.showToast({
                icon: 'none',
                title: httpError.message,
              })
            }
            return reject(httpError)
          }
          return resolve(responseData.data as T)
        }

        // 处理其他错误
        const httpError = createHttpError({
          type: HttpErrorType.Http,
          code,
          statusCode: res.statusCode,
          message: getResponseMessage(responseData, ShowMessage(res.statusCode)),
          data: responseData?.data,
          raw: res,
        })

        if (!options.hideErrorToast) {
          uni.showToast({
            icon: 'none',
            title: httpError.message,
          })
        }
        reject(httpError)
      },
      // 响应失败
      fail(err) {
        const httpError = createHttpError({
          type: HttpErrorType.Network,
          message: '网络错误，换个网络试试',
          raw: err,
        } satisfies HttpError)

        if (!options.hideErrorToast) {
          uni.showToast({
            icon: 'none',
            title: httpError.message,
          })
        }
        reject(httpError)
      },
    })
  })
}

/**
 * GET 请求
 * @param url 后台地址
 * @param query 请求query参数
 * @param header 请求头，默认为json格式
 * @returns
 */
export function httpGet<T>(url: string, query?: Record<string, any>, header?: Record<string, any>, options?: Partial<CustomRequestOptions>) {
  return http<T>({
    url,
    query,
    method: 'GET',
    header,
    ...options,
  })
}

/**
 * POST 请求
 * @param url 后台地址
 * @param data 请求body参数
 * @param query 请求query参数，post请求也支持query，很多微信接口都需要
 * @param header 请求头，默认为json格式
 * @returns
 */
export function httpPost<T>(url: string, data?: Record<string, any>, query?: Record<string, any>, header?: Record<string, any>, options?: Partial<CustomRequestOptions>) {
  return http<T>({
    url,
    query,
    data,
    method: 'POST',
    header,
    ...options,
  })
}
/**
 * PUT 请求
 */
export function httpPut<T>(url: string, data?: Record<string, any>, query?: Record<string, any>, header?: Record<string, any>, options?: Partial<CustomRequestOptions>) {
  return http<T>({
    url,
    data,
    query,
    method: 'PUT',
    header,
    ...options,
  })
}

/**
 * DELETE 请求（无请求体，仅 query）
 */
export function httpDelete<T>(url: string, query?: Record<string, any>, header?: Record<string, any>, options?: Partial<CustomRequestOptions>) {
  return http<T>({
    url,
    query,
    method: 'DELETE',
    header,
    ...options,
  })
}

// 支持与 axios 类似的API调用
http.get = httpGet
http.post = httpPost
http.put = httpPut
http.delete = httpDelete

// 支持与 alovaJS 类似的API调用
http.Get = httpGet
http.Post = httpPost
http.Put = httpPut
http.Delete = httpDelete
