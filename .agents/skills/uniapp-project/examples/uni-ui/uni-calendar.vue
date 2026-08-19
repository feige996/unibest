<!--
日历 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-calendar.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-calendar
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">日历组件，用于日期选择，支持单选、多选、范围选择。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <button type="primary" @click="openCalendar('single')">单选日期</button>
        <uni-calendar ref="singleCalendar" :insert="false" :lunar="false" :start-date="startDate" :end-date="endDate" @confirm="onConfirm" />
      </view>
    </uni-section>

    <uni-section title="多选日期" type="line" padding>
      <view class="example-body">
        <button type="primary" @click="openCalendar('multiple')">多选日期</button>
        <text class="result-text">已选日期：{{ multipleDates.join(', ') || '无' }}</text>
        <uni-calendar ref="multipleCalendar" :insert="false" :multiple="true" @confirm="onMultipleConfirm" />
      </view>
    </uni-section>

    <uni-section title="范围选择" type="line" padding>
      <view class="example-body">
        <button type="primary" @click="openCalendar('range')">范围选择</button>
        <text class="result-text">选择范围：{{ rangeDates.start || '' }} 至 {{ rangeDates.end || '' }}</text>
        <uni-calendar ref="rangeCalendar" :insert="false" :range="true" @confirm="onRangeConfirm" />
      </view>
    </uni-section>

    <uni-section title="显示农历" type="line" padding>
      <view class="example-body">
        <button type="primary" @click="openCalendar('lunar')">显示农历</button>
        <uni-calendar ref="lunarCalendar" :insert="false" :lunar="true" @confirm="onConfirm" />
      </view>
    </uni-section>

    <uni-section title="自定义日期范围" type="line" padding>
      <view class="example-body">
        <button type="primary" @click="openCalendar('custom')">自定义范围</button>
        <uni-calendar ref="customCalendar" :insert="false" :start-date="'2024-01-01'" :end-date="'2024-12-31'" @confirm="onConfirm" />
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      multipleDates: [],
      rangeDates: {
        start: '',
        end: ''
      }
    }
  },
  methods: {
    openCalendar(type) {
      if (type === 'single') {
        this.$refs.singleCalendar.open()
      } else if (type === 'multiple') {
        this.$refs.multipleCalendar.open()
      } else if (type === 'range') {
        this.$refs.rangeCalendar.open()
      } else if (type === 'lunar') {
        this.$refs.lunarCalendar.open()
      } else if (type === 'custom') {
        this.$refs.customCalendar.open()
      }
    },
    onConfirm(e) {
      console.log('选择日期：', e)
      uni.showToast({
        title: `选择了：${e.fulldate}`,
        icon: 'none'
      })
    },
    onMultipleConfirm(e) {
      console.log('多选日期：', e)
      this.multipleDates = e.fulldate || []
      uni.showToast({
        title: `选择了${this.multipleDates.length}个日期`,
        icon: 'none'
      })
    },
    onRangeConfirm(e) {
      console.log('范围选择：', e)
      this.rangeDates = {
        start: e.fulldate[0] || '',
        end: e.fulldate[1] || ''
      }
      uni.showToast({
        title: `选择了范围`,
        icon: 'none'
      })
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 10px;
}

.example-body {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.result-text {
  font-size: 14px;
  color: #333;
  margin-top: 10px;
}
</style>
