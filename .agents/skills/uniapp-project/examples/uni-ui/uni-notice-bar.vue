<!--
通告栏 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-notice-bar.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-notice-bar
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">通告栏组件，用于消息通知，支持滚动播放。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-notice-bar text="这是一条通告栏消息，用于展示重要信息" />
      </view>
    </uni-section>

    <uni-section title="滚动播放" type="line" padding>
      <view class="example-body">
        <uni-notice-bar text="这是一条滚动播放的通告栏消息，内容较长时会自动滚动" :scrollable="true" />
      </view>
    </uni-section>

    <uni-section title="单行滚动" type="line" padding>
      <view class="example-body">
        <uni-notice-bar text="这是一条单行滚动的通告栏消息，内容较长时会自动滚动显示完整内容" :single="true" />
      </view>
    </uni-section>

    <uni-section title="自定义颜色" type="line" padding>
      <view class="example-body">
        <uni-notice-bar text="自定义颜色的通告栏" color="#ff6b6b" background-color="#fff5f5" />
      </view>
    </uni-section>

    <uni-section title="显示图标" type="line" padding>
      <view class="example-body">
        <uni-notice-bar text="带图标的通告栏" :show-icon="true" />
      </view>
    </uni-section>

    <uni-section title="显示关闭按钮" type="line" padding>
      <view class="example-body">
        <uni-notice-bar text="可关闭的通告栏" :show-close="true" @close="onClose" />
      </view>
    </uni-section>

    <uni-section title="点击事件" type="line" padding>
      <view class="example-body">
        <uni-notice-bar text="点击查看详情" @click="onClick" />
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onClose() {
      uni.showToast({
        title: '关闭通告栏',
        icon: 'none'
      })
    },
    onClick() {
      uni.showToast({
        title: '点击了通告栏',
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
  margin-bottom: 20px;
}
</style>
