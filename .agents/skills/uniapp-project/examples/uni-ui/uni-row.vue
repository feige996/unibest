<!--
布局-行 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-row.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-row
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">布局-行组件，用于栅格布局，支持响应式布局。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <uni-row>
        <uni-col :span="12">
          <view class="demo-box">12</view>
        </uni-col>
        <uni-col :span="12">
          <view class="demo-box">12</view>
        </uni-col>
      </uni-row>
    </uni-section>

    <uni-section title="不同列宽" type="line" padding>
      <uni-row>
        <uni-col :span="8">
          <view class="demo-box">8</view>
        </uni-col>
        <uni-col :span="8">
          <view class="demo-box">8</view>
        </uni-col>
        <uni-col :span="8">
          <view class="demo-box">8</view>
        </uni-col>
      </uni-row>
    </uni-section>

    <uni-section title="偏移" type="line" padding>
      <uni-row>
        <uni-col :span="8" :offset="4">
          <view class="demo-box">8 offset 4</view>
        </uni-col>
      </uni-row>
    </uni-section>

    <uni-section title="间距" type="line" padding>
      <uni-row :gutter="20">
        <uni-col :span="8">
          <view class="demo-box">8</view>
        </uni-col>
        <uni-col :span="8">
          <view class="demo-box">8</view>
        </uni-col>
        <uni-col :span="8">
          <view class="demo-box">8</view>
        </uni-col>
      </uni-row>
    </uni-section>

    <uni-section title="对齐方式" type="line" padding>
      <uni-row justify="center">
        <uni-col :span="8">
          <view class="demo-box">居中</view>
        </uni-col>
      </uni-row>
      <uni-row justify="end">
        <uni-col :span="8">
          <view class="demo-box">右对齐</view>
        </uni-col>
      </uni-row>
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

.demo-box {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
  margin: 5px;
}
</style>
