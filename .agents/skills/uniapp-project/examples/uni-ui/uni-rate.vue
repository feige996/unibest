<!--
评分 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-rate.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-rate
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">评分组件，用于星级评分。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-rate v-model="rate1" />
        <text class="result-text">当前评分：{{ rate1 }}</text>
      </view>
    </uni-section>

    <uni-section title="只读模式" type="line" padding>
      <view class="example-body">
        <uni-rate :value="4" :readonly="true" />
      </view>
    </uni-section>

    <uni-section title="禁用状态" type="line" padding>
      <view class="example-body">
        <uni-rate :value="3" :disabled="true" />
      </view>
    </uni-section>

    <uni-section title="自定义大小" type="line" padding>
      <view class="example-body">
        <uni-rate v-model="rate2" :size="20" />
        <uni-rate v-model="rate3" :size="30" />
      </view>
    </uni-section>

    <uni-section title="自定义颜色" type="line" padding>
      <view class="example-body">
        <uni-rate v-model="rate4" color="#ff6b6b" />
        <uni-rate v-model="rate5" color="#4ecdc4" />
      </view>
    </uni-section>

    <uni-section title="允许半星" type="line" padding>
      <view class="example-body">
        <uni-rate v-model="rate6" :allow-half="true" />
        <text class="result-text">当前评分：{{ rate6 }}</text>
      </view>
    </uni-section>

    <uni-section title="事件监听" type="line" padding>
      <view class="example-body">
        <uni-rate v-model="rate7" @change="onRateChange" />
        <text class="result-text">当前评分：{{ rate7 }}</text>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      rate1: 3,
      rate2: 4,
      rate3: 5,
      rate4: 4,
      rate5: 3,
      rate6: 3.5,
      rate7: 0
    }
  },
  methods: {
    onRateChange(e) {
      console.log('评分改变：', e)
      uni.showToast({
        title: `评分：${e.value}`,
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
