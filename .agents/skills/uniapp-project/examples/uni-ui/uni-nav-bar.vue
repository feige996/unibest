<!--
自定义导航栏 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-nav-bar.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-nav-bar
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">自定义导航栏组件，自动处理不同端的状态栏，支持自定义左右按钮。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-nav-bar title="导航栏" />
      </view>
    </uni-section>

    <uni-section title="左侧按钮" type="line" padding>
      <view class="example-body">
        <uni-nav-bar title="导航栏" left-icon="left" @clickLeft="onClickLeft" />
      </view>
    </uni-section>

    <uni-section title="右侧按钮" type="line" padding>
      <view class="example-body">
        <uni-nav-bar title="导航栏" right-text="更多" @clickRight="onClickRight" />
      </view>
    </uni-section>

    <uni-section title="左右都有按钮" type="line" padding>
      <view class="example-body">
        <uni-nav-bar title="导航栏" left-icon="left" right-text="更多" @clickLeft="onClickLeft" @clickRight="onClickRight" />
      </view>
    </uni-section>

    <uni-section title="自定义颜色" type="line" padding>
      <view class="example-body">
        <uni-nav-bar title="导航栏" :color="navColor" :background-color="navBgColor" />
      </view>
    </uni-section>

    <uni-section title="自定义高度" type="line" padding>
      <view class="example-body">
        <uni-nav-bar title="导航栏" :height="60" />
      </view>
    </uni-section>

    <uni-section title="自定义插槽" type="line" padding>
      <view class="example-body">
        <uni-nav-bar>
          <template v-slot:left>
            <view class="custom-left">自定义左侧</view>
          </template>
          <template v-slot:default>
            <text class="custom-title">自定义标题</text>
          </template>
          <template v-slot:right>
            <view class="custom-right">自定义右侧</view>
          </template>
        </uni-nav-bar>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      navColor: '#333',
      navBgColor: '#fff'
    }
  },
  methods: {
    onClickLeft() {
      uni.showToast({
        title: '点击左侧按钮',
        icon: 'none'
      })
    },
    onClickRight() {
      uni.showToast({
        title: '点击右侧按钮',
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

.custom-left,
.custom-right {
  padding: 0 10px;
  font-size: 14px;
  color: #333;
}

.custom-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
</style>
