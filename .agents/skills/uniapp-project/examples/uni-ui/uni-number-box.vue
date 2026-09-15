<!--
数字输入框 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-number-box.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-number-box
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">数字输入框组件，用于数字输入，支持增减按钮。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-number-box v-model="value1" />
      </view>
    </uni-section>

    <uni-section title="设置最小值最大值" type="line" padding>
      <view class="example-body">
        <uni-number-box v-model="value2" :min="0" :max="100" />
      </view>
    </uni-section>

    <uni-section title="设置步长" type="line" padding>
      <view class="example-body">
        <uni-number-box v-model="value3" :step="5" />
      </view>
    </uni-section>

    <uni-section title="禁用状态" type="line" padding>
      <view class="example-body">
        <uni-number-box v-model="value4" :disabled="true" />
      </view>
    </uni-section>

    <uni-section title="只读状态" type="line" padding>
      <view class="example-body">
        <uni-number-box v-model="value5" :readonly="true" />
      </view>
    </uni-section>

    <uni-section title="事件监听" type="line" padding>
      <view class="example-body">
        <uni-number-box v-model="value6" @change="onChange" />
        <text class="result-text">当前值：{{ value6 }}</text>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value1: 1,
      value2: 10,
      value3: 5,
      value4: 20,
      value5: 15,
      value6: 1
    }
  },
  methods: {
    onChange(e) {
      console.log('值改变：', e)
      uni.showToast({
        title: `当前值：${e}`,
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
  align-items: flex-start;
}

.result-text {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}
</style>
