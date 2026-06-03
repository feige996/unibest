import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { defineComponent, h } from 'vue'
import useRequest from './useRequest'

/**
 * 在 Vue 应用上下文中运行 composable。
 * composable 的 ref/computed/onMounted 只能在 setup() 内使用，
 * withSetup 通过挂载一个临时组件来提供这个上下文。
 */
function withSetup<T>(composableFn: () => T): T {
  let result!: T
  const Comp = defineComponent({
    setup() {
      result = composableFn()
      return () => h('div')
    },
  })
  const wrapper = mount(Comp)
  wrapper.unmount()
  return result
}

describe('useRequest', () => {
  it('初始状态：loading=false, error=false, data=undefined', () => {
    const asyncFn = vi.fn().mockResolvedValue('data')
    const { loading, error, data } = withSetup(() => useRequest(asyncFn))

    expect(loading.value).toBe(false)
    expect(error.value).toBe(false)
    expect(data.value).toBeUndefined()
  })

  it('initialData：初始 data 使用传入的默认值', () => {
    const asyncFn = vi.fn().mockResolvedValue('new')
    const { data } = withSetup(() => useRequest(asyncFn, { initialData: 'init' }))

    expect(data.value).toBe('init')
  })

  it('run 成功：loading 先变 true 后变 false，data 更新为返回值', async () => {
    const asyncFn = vi.fn().mockResolvedValue('result')
    const { loading, data, run } = withSetup(() => useRequest(asyncFn))

    const runPromise = run()
    expect(loading.value).toBe(true)

    await runPromise

    expect(loading.value).toBe(false)
    expect(data.value).toBe('result')
  })

  it('run 失败：抛出错误，error 被设置，loading 重置为 false', async () => {
    const err = new Error('network error')
    const asyncFn = vi.fn().mockRejectedValue(err)
    const { loading, error, run } = withSetup(() => useRequest(asyncFn))

    await expect(run()).rejects.toThrow('network error')

    expect(loading.value).toBe(false)
    expect(error.value).toBe(err)
  })

  it('immediate=true：组件挂载时立即调用异步函数并更新 data', async () => {
    const asyncFn = vi.fn().mockResolvedValue('eager')
    const { data } = withSetup(() => useRequest(asyncFn, { immediate: true }))

    expect(asyncFn).toHaveBeenCalledTimes(1)
    // 等待 Promise 完成
    await asyncFn.mock.results[0].value
    expect(data.value).toBe('eager')
  })
})
