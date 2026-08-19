<!--
章节标题 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-title.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-title
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">章节标题组件，用于章节标题展示。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-title type="h1" title="一级标题" />
        <uni-title type="h2" title="二级标题" />
        <uni-title type="h3" title="三级标题" />
      </view>
    </uni-section>

    <uni-section title="不同尺寸" type="line" padding>
      <view class="example-body">
        <uni-title type="h1" title="大标题" />
        <uni-title type="h2" title="中标题" />
        <uni-title type="h3" title="小标题" />
      </view>
    </uni-section>

    <uni-section title="自定义颜色" type="line" padding>
      <view class="example-body">
        <uni-title type="h1" title="红色标题" color="#ff6b6b" />
        <uni-title type="h2" title="蓝色标题" color="#4ecdc4" />
        <uni-title type="h3" title="绿色标题" color="#95e1d3" />
      </view>
    </uni-section>

    <uni-section title="对齐方式" type="line" padding>
      <view class="example-body">
        <uni-title type="h2" title="左对齐" align="left" />
        <uni-title type="h2" title="居中" align="center" />
        <uni-title type="h2" title="右对齐" align="right" />
      </view>
    </uni-section>

    <uni-section title="带副标题" type="line" padding>
      <view class="example-body">
        <uni-title type="h1" title="主标题" subtitle="这是副标题" />
        <uni-title type="h2" title="主标题" subtitle="这是副标题" />
      </view>
    </uni-section>

    <uni-section title="自定义样式" type="line" padding>
      <view class="example-body">
        <uni-title type="h1" title="自定义样式标题" :bold="true" />
        <uni-title type="h2" title="普通样式标题" :bold="false" />
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
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
