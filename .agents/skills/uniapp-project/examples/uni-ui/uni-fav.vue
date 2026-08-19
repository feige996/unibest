<!--
收藏按钮 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-fav.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-fav
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">收藏按钮组件，用于收藏功能。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-fav :checked="checked1" @click="onFavClick" />
        <text class="result-text">收藏状态：{{ checked1 ? '已收藏' : '未收藏' }}</text>
      </view>
    </uni-section>

    <uni-section title="自定义颜色" type="line" padding>
      <view class="example-body">
        <uni-fav :checked="checked2" :star="false" circle="fill" bg-color="#ff6b6b" bg-color-checked="#ff6b6b" @click="onFavClick2" />
        <text class="result-text">收藏状态：{{ checked2 ? '已收藏' : '未收藏' }}</text>
      </view>
    </uni-section>

    <uni-section title="不同样式" type="line" padding>
      <view class="example-body">
        <uni-fav :checked="checked3" :star="true" @click="onFavClick3" />
        <uni-fav :checked="checked4" :star="false" circle="fill" @click="onFavClick4" />
        <uni-fav :checked="checked5" :star="false" circle="outline" @click="onFavClick5" />
      </view>
    </uni-section>

    <uni-section title="事件监听" type="line" padding>
      <view class="example-body">
        <uni-fav :checked="checked6" @click="onFavClick6" />
        <text class="result-text">收藏状态：{{ checked6 ? '已收藏' : '未收藏' }}</text>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false
    }
  },
  methods: {
    onFavClick() {
      this.checked1 = !this.checked1
      uni.showToast({
        title: this.checked1 ? '已收藏' : '取消收藏',
        icon: 'none'
      })
    },
    onFavClick2() {
      this.checked2 = !this.checked2
    },
    onFavClick3() {
      this.checked3 = !this.checked3
    },
    onFavClick4() {
      this.checked4 = !this.checked4
    },
    onFavClick5() {
      this.checked5 = !this.checked5
    },
    onFavClick6() {
      this.checked6 = !this.checked6
      uni.showToast({
        title: this.checked6 ? '已收藏' : '取消收藏',
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
  align-items: flex-start;
}

.result-text {
  font-size: 14px;
  color: #333;
  margin-top: 10px;
}
</style>
