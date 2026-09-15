<!--
日期格式化 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-dateformat.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-dateformat
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">日期格式化组件，用于日期格式化显示。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-dateformat :date="currentDate" />
      </view>
    </uni-section>

    <uni-section title="自定义格式" type="line" padding>
      <view class="example-body">
        <uni-dateformat :date="currentDate" format="YYYY-MM-DD" />
        <uni-dateformat :date="currentDate" format="YYYY/MM/DD HH:mm:ss" />
        <uni-dateformat :date="currentDate" format="MM月DD日" />
      </view>
    </uni-section>

    <uni-section title="相对时间" type="line" padding>
      <view class="example-body">
        <uni-dateformat :date="pastDate" :threshold="[0, 0]" />
        <uni-dateformat :date="recentDate" :threshold="[0, 0]" />
      </view>
    </uni-section>

    <uni-section title="时间戳" type="line" padding>
      <view class="example-body">
        <uni-dateformat :date="timestamp" />
        <uni-dateformat :date="timestamp" format="YYYY-MM-DD HH:mm:ss" />
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      pastDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      recentDate: new Date(Date.now() - 2 * 60 * 60 * 1000),
      timestamp: Date.now()
    }
  },
  methods: {}
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
</style>
