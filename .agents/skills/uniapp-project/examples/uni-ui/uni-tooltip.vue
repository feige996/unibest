<!--
文字提示 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-tooltip.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-tooltip
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">文字提示组件，用于显示提示信息。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-tooltip content="这是提示信息">
          <button>悬停显示提示</button>
        </uni-tooltip>
      </view>
    </uni-section>

    <uni-section title="不同位置" type="line" padding>
      <view class="example-body">
        <view class="tooltip-group">
          <uni-tooltip content="顶部提示" placement="top">
            <button>顶部</button>
          </uni-tooltip>
          <uni-tooltip content="底部提示" placement="bottom">
            <button>底部</button>
          </uni-tooltip>
          <uni-tooltip content="左侧提示" placement="left">
            <button>左侧</button>
          </uni-tooltip>
          <uni-tooltip content="右侧提示" placement="right">
            <button>右侧</button>
          </uni-tooltip>
        </view>
      </view>
    </uni-section>

    <uni-section title="自定义样式" type="line" padding>
      <view class="example-body">
        <uni-tooltip content="自定义样式提示" backgroundColor="#ff6b6b" color="#fff">
          <button>自定义样式</button>
        </uni-tooltip>
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
  align-items: flex-start;
}

.tooltip-group {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
