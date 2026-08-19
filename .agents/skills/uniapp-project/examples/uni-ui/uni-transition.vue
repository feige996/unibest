<!--
过渡动画 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-transition.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-transition
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">过渡动画组件，用于动画效果。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <button @click="toggle1">切换显示</button>
        <uni-transition mode-class="fade" :show="show1">
          <view class="transition-box">淡入淡出</view>
        </uni-transition>
      </view>
    </uni-section>

    <uni-section title="不同动画" type="line" padding>
      <view class="example-body">
        <button @click="toggle2">切换显示</button>
        <uni-transition mode-class="slide-top" :show="show2">
          <view class="transition-box">从上滑入</view>
        </uni-transition>
      </view>
    </uni-section>

    <uni-section title="缩放动画" type="line" padding>
      <view class="example-body">
        <button @click="toggle3">切换显示</button>
        <uni-transition mode-class="zoom-in" :show="show3">
          <view class="transition-box">缩放进入</view>
        </uni-transition>
      </view>
    </uni-section>

    <uni-section title="自定义动画" type="line" padding>
      <view class="example-body">
        <button @click="toggle4">切换显示</button>
        <uni-transition :custom-class="customClass" :show="show4">
          <view class="transition-box">自定义动画</view>
        </uni-transition>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      customClass: 'custom-transition'
    }
  },
  methods: {
    toggle1() {
      this.show1 = !this.show1
    },
    toggle2() {
      this.show2 = !this.show2
    },
    toggle3() {
      this.show3 = !this.show3
    },
    toggle4() {
      this.show4 = !this.show4
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
  align-items: flex-start;
}

.transition-box {
  width: 200px;
  height: 100px;
  background-color: #007aff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 10px;
}
</style>
