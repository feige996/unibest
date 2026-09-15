<!--
uni-icons 图标组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-icons.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-icons
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">用于展示 icon 图标。</text>
    </uni-card>
    
    <!-- 基础用法 -->
    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-icons type="contact" size="30"></uni-icons>
      </view>
    </uni-section>
    
    <!-- 不同大小 -->
    <uni-section title="不同大小" type="line" padding>
      <view class="example-body">
        <uni-icons type="contact" size="20"></uni-icons>
        <uni-icons type="contact" size="30"></uni-icons>
        <uni-icons type="contact" size="40"></uni-icons>
      </view>
    </uni-section>
    
    <!-- 不同颜色 -->
    <uni-section title="不同颜色" type="line" padding>
      <view class="example-body">
        <uni-icons type="contact" size="30" color="#007aff"></uni-icons>
        <uni-icons type="contact" size="30" color="#ff3b30"></uni-icons>
        <uni-icons type="contact" size="30" color="#ffcc00"></uni-icons>
        <uni-icons type="contact" size="30" color="#4cd964"></uni-icons>
      </view>
    </uni-section>
    
    <!-- 常用图标 -->
    <uni-section title="常用图标" type="line" padding>
      <view class="icon-grid">
        <view class="icon-item" v-for="(icon, index) in commonIcons" :key="index">
          <uni-icons :type="icon" size="30" color="#333"></uni-icons>
          <text class="icon-name">{{ icon }}</text>
        </view>
      </view>
    </uni-section>
    
    <!-- 点击事件 -->
    <uni-section title="点击事件" type="line" padding>
      <view class="example-body">
        <uni-icons 
          type="heart" 
          size="30" 
          :color="isLiked ? '#ff3b30' : '#999'"
          @click="toggleLike"
        ></uni-icons>
        <text class="icon-text">{{ isLiked ? '已点赞' : '未点赞' }}</text>
      </view>
    </uni-section>
    
    <!-- 自定义图标（fontFamily） -->
    <uni-section title="自定义图标（fontFamily）" type="line" padding>
      <view class="example-body">
        <uni-icons 
          fontFamily="CustomFont" 
          :size="26"
        >{{ '\uebc6' }}</uni-icons>
        <text class="icon-text">自定义图标</text>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isLiked: false,
      commonIcons: [
        'contact', 'heart', 'star', 'home', 'shop', 'cart',
        'person', 'settings', 'search', 'close', 'checkmarkempty',
        'arrow-down', 'arrow-up', 'arrow-left', 'arrow-right',
        'plus', 'minus', 'refresh', 'download', 'upload'
      ]
    }
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked
    }
  }
}
</script>

<style lang="scss">
.example-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20rpx;
}

.icon-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20rpx;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120rpx;
  padding: 20rpx;
}

.icon-name {
  font-size: 24rpx;
  color: #666;
  margin-top: 10rpx;
  text-align: center;
}

.icon-text {
  margin-left: 20rpx;
  font-size: 28rpx;
  color: #333;
}
</style>
