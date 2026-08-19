<!--
分组 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-group.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-group
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">分组组件，用于内容分组，提供统一的样式和间距。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <uni-group title="基础分组" top="0">
        <view class="group-item">分组内容1</view>
        <view class="group-item">分组内容2</view>
        <view class="group-item">分组内容3</view>
      </uni-group>
    </uni-section>

    <uni-section title="带标题" type="line" padding>
      <uni-group title="带标题的分组" top="0">
        <view class="group-item">分组内容1</view>
        <view class="group-item">分组内容2</view>
      </uni-group>
    </uni-section>

    <uni-section title="自定义间距" type="line" padding>
      <uni-group title="自定义间距" top="0" :card="false">
        <view class="group-item">分组内容1</view>
        <view class="group-item">分组内容2</view>
        <view class="group-item">分组内容3</view>
      </uni-group>
    </uni-section>

    <uni-section title="卡片模式" type="line" padding>
      <uni-group title="卡片模式" top="0" :card="true">
        <view class="group-item">分组内容1</view>
        <view class="group-item">分组内容2</view>
        <view class="group-item">分组内容3</view>
      </uni-group>
    </uni-section>

    <uni-section title="嵌套使用" type="line" padding>
      <uni-group title="外层分组" top="0">
        <uni-group title="内层分组" top="0" :card="false">
          <view class="group-item">内层内容1</view>
          <view class="group-item">内层内容2</view>
        </uni-group>
      </uni-group>
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

.group-item {
  padding: 15px;
  background-color: #f8f8f8;
  margin-bottom: 10px;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
}
</style>
