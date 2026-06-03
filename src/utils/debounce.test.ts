import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { debounce } from './debounce'

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('trailing edge（默认）：多次调用后只触发一次，使用最后一次的参数', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 100)

    debouncedFn('first')
    debouncedFn('second')
    debouncedFn('last')

    expect(fn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)

    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith('last')
  })

  it('cancel：取消后计时器到期不执行', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 100)

    debouncedFn()
    debouncedFn.cancel()

    vi.advanceTimersByTime(100)

    expect(fn).not.toHaveBeenCalled()
  })

  it('flush：立即执行待执行的调用并传递参数', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 100)

    debouncedFn('arg1')
    debouncedFn.flush()

    expect(fn).toHaveBeenCalledWith('arg1')
  })

  it('leading edge：第一次调用立即执行', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 100, { edges: ['leading'] })

    debouncedFn()

    expect(fn).toHaveBeenCalledTimes(1)
  })
})
