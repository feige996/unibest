<!--
标题栏 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-section.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-section
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">标题栏组件，用于内容区块的标题展示。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <text>这是内容区域</text>
      </view>
    </uni-section>

    <uni-section title="带副标题" sub-title="这是副标题" type="line" padding>
      <view class="example-body">
        <text>这是内容区域</text>
      </view>
    </uni-section>

    <uni-section title="不同样式" type="line" padding>
      <view class="example-body">
        <text>line 样式（默认）</text>
      </view>
    </uni-section>

    <uni-section title="不同样式" type="circle" padding>
      <view class="example-body">
        <text>circle 样式</text>
      </view>
    </uni-section>

    <uni-section title="无样式" type="none" padding>
      <view class="example-body">
        <text>none 样式</text>
      </view>
    </uni-section>

    <uni-section title="自定义右侧内容" type="line" padding>
      <template v-slot:right>
        <text class="custom-right">更多</text>
      </template>
      <view class="example-body">
        <text>这是内容区域</text>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
.container {
  padding: 10px;
}

.example-body {
  padding: 10px;
}

.custom-right {
  color: #007aff;
  font-size: 14px;
}
</style>
