<!--
步骤条 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-steps.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-steps
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">步骤条组件，用于步骤流程展示。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-steps :options="steps1" :active="active1" />
      </view>
    </uni-section>

    <uni-section title="不同状态" type="line" padding>
      <view class="example-body">
        <uni-steps :options="steps2" :active="active2" />
      </view>
    </uni-section>

    <uni-section title="自定义样式" type="line" padding>
      <view class="example-body">
        <uni-steps :options="steps3" :active="active3" activeColor="#ff6b6b" />
      </view>
    </uni-section>

    <uni-section title="垂直方向" type="line" padding>
      <view class="example-body">
        <uni-steps :options="steps4" :active="active4" direction="column" />
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      active1: 1,
      active2: 2,
      active3: 1,
      active4: 2,
      steps1: [
        { title: '步骤1' },
        { title: '步骤2' },
        { title: '步骤3' }
      ],
      steps2: [
        { title: '待处理', desc: '等待处理' },
        { title: '处理中', desc: '正在处理' },
        { title: '已完成', desc: '处理完成' }
      ],
      steps3: [
        { title: '步骤A' },
        { title: '步骤B' },
        { title: '步骤C' }
      ],
      steps4: [
        { title: '步骤1', desc: '描述1' },
        { title: '步骤2', desc: '描述2' },
        { title: '步骤3', desc: '描述3' }
      ]
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
  margin-bottom: 20px;
}
</style>
