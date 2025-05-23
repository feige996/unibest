import statisticJson from './statistic.json'
const trackEvent = (event, args) => {
  console.log(event, args, '统计事件')
}
let trackElements = []
/**
 * 获取页面元素信息
 * @param {String} element 元素class或者id
 * @returns {Promise}
 */
const getBoundingClientRect = (element) => {
  return new Promise((reslove) => {
    const query = uni.createSelectorQuery()
    query.selectAll(element).boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec((res) => reslove({ boundingClientRect: res[0], scrollOffset: res[1] }))
  })
}
/**
 * 判断点击是否落在目标元素
 * @param {Object} clickInfo 用户点击坐标
 * @param {Object} boundingClientRect 目标元素信息
 * @param {Object} scrollOffset 页面位置信息
 * @returns {Boolean} 是否被点击
 */
const isClickTrackArea = (clickInfo, boundingClientRect, scrollOffset) => {
  if (!boundingClientRect) return false
  const { x, y } = clickInfo.detail // 点击的x y坐标
  const { left, right, top, height } = boundingClientRect
  const { scrollTop } = scrollOffset
  if (left < x && x < right && scrollTop + top < y && y < scrollTop + top + height) {
    return true
  }
  return false
}

const elementTracker = (clickInfo) => {
  console.log(clickInfo)
  let stop = false
  ;(trackElements || []).forEach((ele) => {
    getBoundingClientRect(ele.element).then((res) => {
      res.boundingClientRect.forEach((item) => {
        const isHit = isClickTrackArea(clickInfo, item, res.scrollOffset)
        if (isHit && !stop) {
          stop = ele.stop || false
          if (!ele.key) {
            trackEvent(ele.event, { ...ele.field })
          } else {
            const params = {}
            ;(ele.key || []).forEach((key) => {
              params[key] = item.dataset[key]
            })
            trackEvent(ele.event, {
              ...ele.field,
              ...params,
            })
          }
        }
      })
    })
  })
}

export const Statistic = {
  install(app) {
    app.config.globalProperties.elementTracker = elementTracker
    app.mixin({
      onShow() {
        const pages = getCurrentPages().reverse() // 获取页面栈
        if (pages[0]) {
          // 当页面栈不为空时执行
          trackEvent('page', {
            path: pages[0].route,
            options: JSON.stringify(pages[0].options),
          })
          trackElements = statisticJson.filter((t) => t.page === pages[0].route)[0]?.trackElement
        }
      },
    })
  },
}
