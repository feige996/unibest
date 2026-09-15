<!--
倒计时 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-countdown.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-countdown
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">倒计时组件，用于倒计时显示。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-countdown :second="60" />
      </view>
    </uni-section>

    <uni-section title="自定义格式" type="line" padding>
      <view class="example-body">
        <uni-countdown :second="3600" format="HH:mm:ss" />
      </view>
    </uni-section>

    <uni-section title="显示天" type="line" padding>
      <view class="example-body">
        <uni-countdown :second="86400" format="DD天HH:mm:ss" />
      </view>
    </uni-section>

    <uni-section title="自定义样式" type="line" padding>
      <view class="example-body">
        <uni-countdown :second="120" color="#ff6b6b" splitor-color="#ff6b6b" />
      </view>
    </uni-section>

    <uni-section title="事件监听" type="line" padding>
      <view class="example-body">
        <uni-countdown :second="10" @timeup="onTimeup" />
        <text class="result-text">{{ timeupText }}</text>
      </view>
    </uni-section>

    <uni-section title="暂停/继续" type="line" padding>
      <view class="example-body">
        <uni-countdown ref="countdown" :second="60" />
        <view class="button-group">
          <button size="mini" @click="pause">暂停</button>
          <button size="mini" @click="resume">继续</button>
          <button size="mini" @click="reset">重置</button>
        </view>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      timeupText: '倒计时进行中...'
    }
  },
  methods: {
    onTimeup() {
      this.timeupText = '倒计时结束！'
      uni.showToast({
        title: '倒计时结束',
        icon: 'success'
      })
    },
    pause() {
      this.$refs.countdown.pause()
    },
    resume() {
      this.$refs.countdown.resume()
    },
    reset() {
      this.$refs.countdown.reset()
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

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
</style>
