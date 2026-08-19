<!--
分段器 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-segmented-control.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-segmented-control
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">分段器组件，用于分段选择。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-segmented-control :current="current1" :values="values1" @clickItem="onClickItem1" />
        <text class="result-text">当前选中：{{ values1[current1] }}</text>
      </view>
    </uni-section>

    <uni-section title="不同样式" type="line" padding>
      <view class="example-body">
        <uni-segmented-control :current="current2" :values="values2" styleType="button" @clickItem="onClickItem2" />
        <text class="result-text">当前选中：{{ values2[current2] }}</text>
      </view>
    </uni-section>

    <uni-section title="自定义颜色" type="line" padding>
      <view class="example-body">
        <uni-segmented-control :current="current3" :values="values3" :activeColor="'#ff6b6b'" @clickItem="onClickItem3" />
        <text class="result-text">当前选中：{{ values3[current3] }}</text>
      </view>
    </uni-section>

    <uni-section title="事件监听" type="line" padding>
      <view class="example-body">
        <uni-segmented-control :current="current4" :values="values4" @clickItem="onClickItem4" />
        <text class="result-text">当前选中：{{ values4[current4] }}</text>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 0,
      values1: ['选项1', '选项2', '选项3'],
      values2: ['按钮1', '按钮2'],
      values3: ['选项A', '选项B', '选项C'],
      values4: ['全部', '进行中', '已完成']
    }
  },
  methods: {
    onClickItem1(e) {
      this.current1 = e.currentIndex
      console.log('点击项：', e)
    },
    onClickItem2(e) {
      this.current2 = e.currentIndex
    },
    onClickItem3(e) {
      this.current3 = e.currentIndex
    },
    onClickItem4(e) {
      this.current4 = e.currentIndex
      uni.showToast({
        title: `选择了${this.values4[e.currentIndex]}`,
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
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.result-text {
  font-size: 14px;
  color: #333;
  margin-top: 10px;
}
</style>
