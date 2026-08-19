<!--
加载更多 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-load-more.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-load-more
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">加载更多组件，用于列表加载状态提示。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-load-more :status="status1" />
      </view>
    </uni-section>

    <uni-section title="不同状态" type="line" padding>
      <view class="example-body">
        <uni-load-more :status="'more'" :content-text="contentText1" />
        <uni-load-more :status="'loading'" />
        <uni-load-more :status="'noMore'" />
      </view>
    </uni-section>

    <uni-section title="自定义文字" type="line" padding>
      <view class="example-body">
        <uni-load-more :status="status2" :content-text="contentText2" />
      </view>
    </uni-section>

    <uni-section title="自定义颜色" type="line" padding>
      <view class="example-body">
        <uni-load-more :status="status3" :color="'#ff6b6b'" />
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      status1: 'more',
      status2: 'loading',
      status3: 'noMore',
      contentText1: {
        contentdown: '上拉加载更多',
        contentrefresh: '正在加载...',
        contentnomore: '没有更多数据了'
      },
      contentText2: {
        contentdown: '下拉刷新',
        contentrefresh: '加载中...',
        contentnomore: '已全部加载'
      }
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
  gap: 20px;
}
</style>
