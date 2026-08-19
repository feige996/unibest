<!--
轮播图指示点 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-swiper-dot.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-swiper-dot
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">轮播图指示点组件，用于轮播图指示。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <swiper class="swiper" :current="current1" @change="onChange1">
          <swiper-item v-for="(item, index) in swiperList1" :key="index">
            <view class="swiper-item">{{ item }}</view>
          </swiper-item>
        </swiper>
        <uni-swiper-dot :info="swiperList1" :current="current1" :dots-styles="dotsStyles1" />
      </view>
    </uni-section>

    <uni-section title="自定义样式" type="line" padding>
      <view class="example-body">
        <swiper class="swiper" :current="current2" @change="onChange2">
          <swiper-item v-for="(item, index) in swiperList2" :key="index">
            <view class="swiper-item">{{ item }}</view>
          </swiper-item>
        </swiper>
        <uni-swiper-dot :info="swiperList2" :current="current2" :dots-styles="dotsStyles2" />
      </view>
    </uni-section>

    <uni-section title="不同模式" type="line" padding>
      <view class="example-body">
        <swiper class="swiper" :current="current3" @change="onChange3">
          <swiper-item v-for="(item, index) in swiperList3" :key="index">
            <view class="swiper-item">{{ item }}</view>
          </swiper-item>
        </swiper>
        <uni-swiper-dot :info="swiperList3" :current="current3" mode="round" />
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
      swiperList1: ['内容1', '内容2', '内容3'],
      swiperList2: ['内容A', '内容B', '内容C'],
      swiperList3: ['内容X', '内容Y', '内容Z'],
      dotsStyles1: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        border: 'none',
        color: '#fff',
        selectedBackgroundColor: '#007aff',
        selectedBorder: 'none'
      },
      dotsStyles2: {
        backgroundColor: '#ff6b6b',
        border: 'none',
        color: '#fff',
        selectedBackgroundColor: '#4ecdc4',
        selectedBorder: 'none'
      }
    }
  },
  methods: {
    onChange1(e) {
      this.current1 = e.detail.current
    },
    onChange2(e) {
      this.current2 = e.detail.current
    },
    onChange3(e) {
      this.current3 = e.detail.current
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 10px;
}

.example-body {
  margin-bottom: 30px;
}

.swiper {
  height: 200px;
  margin-bottom: 10px;
}

.swiper-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f0f0f0;
  font-size: 16px;
  color: #333;
}
</style>
