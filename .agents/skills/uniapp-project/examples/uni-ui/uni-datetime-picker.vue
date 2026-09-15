<!--
日期选择器 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-datetime-picker.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-datetime-picker
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">日期选择器组件，用于日期时间选择。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-datetime-picker v-model="value1" type="date" @change="onChange" />
        <text class="result-text">当前值：{{ value1 || '未选择' }}</text>
      </view>
    </uni-section>

    <uni-section title="日期时间选择" type="line" padding>
      <view class="example-body">
        <uni-datetime-picker v-model="value2" type="datetime" @change="onChange" />
        <text class="result-text">当前值：{{ value2 || '未选择' }}</text>
      </view>
    </uni-section>

    <uni-section title="时间选择" type="line" padding>
      <view class="example-body">
        <uni-datetime-picker v-model="value3" type="time" @change="onChange" />
        <text class="result-text">当前值：{{ value3 || '未选择' }}</text>
      </view>
    </uni-section>

    <uni-section title="日期范围" type="line" padding>
      <view class="example-body">
        <uni-datetime-picker v-model="value4" type="date" :start="startDate" :end="endDate" @change="onChange" />
        <text class="result-text">当前值：{{ value4 || '未选择' }}</text>
      </view>
    </uni-section>

    <uni-section title="禁用状态" type="line" padding>
      <view class="example-body">
        <uni-datetime-picker v-model="value5" type="date" :disabled="true" />
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '2024-01-01',
      startDate: '2024-01-01',
      endDate: '2024-12-31'
    }
  },
  methods: {
    onChange(e) {
      console.log('选择改变：', e)
      uni.showToast({
        title: '选择已改变',
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
