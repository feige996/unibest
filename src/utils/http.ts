import { CustomRequestOptions } from '@/interceptors/request'
import { encryptBase64, encryptWithAes, generateAesKey, decryptWithAes, decryptBase64 } from '@/utils/crypto';
import { encrypt, decrypt } from '@/utils/jsencrypt';

const encryptHeader = 'encrypt-key';
export const http = <T>(options: CustomRequestOptions) => {

  // 是否需要加密
  const isEncrypt = options.header?.isEncrypt == 'true';
  if (isEncrypt && (options.method === 'POST' || options.method === 'PUT')) {
    // 生成一个 AES 密钥
    const aesKey = generateAesKey();
    options.header[encryptHeader] = encrypt(encryptBase64(aesKey));
    options.data = typeof options.data === 'object' ? encryptWithAes(JSON.stringify(options.data), aesKey) : encryptWithAes(options.data, aesKey);
  }

  // 1. 返回 Promise 对象
  return new Promise<IResData<T>>((resolve, reject) => {
    uni.request({
      ...options,
      dataType: 'json',
      // #ifndef MP-WEIXIN
      responseType: 'json',
      // #endif
      // 响应成功
      success(res) {

        // 加密后的 AES 秘钥
        const keyStr = res.header[encryptHeader];
        // 加密
        if (keyStr != null && keyStr != '') {
          const data: any = res.data;
          // 请求体 AES 解密
          const base64Str = decrypt(keyStr);
          // base64 解码 得到请求头的 AES 秘钥
          const aesKey = decryptBase64(base64Str.toString());
          // aesKey 解码 data
          const decryptData = decryptWithAes(data, aesKey);
          // 将结果 (得到的是 JSON 字符串) 转为 JSON
          res.data = JSON.parse(decryptData);
        }

        // 状态码 2xx，参考 axios 的设计
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 2.1 提取核心数据 res.data
          resolve(res.data as IResData<T>)
        } else if (res.statusCode === 401) {
          // 401错误  -> 清理用户信息，跳转到登录页
          // userStore.clearUserInfo()
          // uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          // 其他错误 -> 根据后端错误信息轻提示
          !options.hideErrorToast &&
            uni.showToast({
              icon: 'none',
              title: (res.data as IResData<T>).msg || '请求错误',
            })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}

/**
 * GET 请求
 * @param url 后台地址
 * @param query 请求query参数
 * @returns
 */
export const httpGet = <T>(url: string, query?: Record<string, any>) => {
  return http<T>({
    url,
    query,
    method: 'GET',
  })
}

/**
 * POST 请求
 * @param url 后台地址
 * @param data 请求body参数
 * @param query 请求query参数，post请求也支持query，很多微信接口都需要
 * @returns
 */
export const httpPost = <T>(
  url: string,
  data?: Record<string, any>,
  query?: Record<string, any>,
) => {
  return http<T>({
    url,
    query,
    data,
    method: 'POST',
  })
}

http.get = httpGet
http.post = httpPost
