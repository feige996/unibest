<!--
商品导航 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-goods-nav.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-goods-nav
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">商品导航组件，用于商品详情页的底部导航，包含购物车和购买按钮。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-goods-nav :options="options1" :buttonGroup="buttonGroup1" @click="onClick" @buttonClick="onButtonClick" />
      </view>
    </uni-section>

    <uni-section title="自定义按钮" type="line" padding>
      <view class="example-body">
        <uni-goods-nav :options="options2" :buttonGroup="buttonGroup2" @click="onClick" @buttonClick="onButtonClick" />
      </view>
    </uni-section>

    <uni-section title="购物车数量" type="line" padding>
      <view class="example-body">
        <uni-goods-nav :options="options3" :buttonGroup="buttonGroup3" @click="onClick" @buttonClick="onButtonClick" />
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      options1: [
        {
          icon: 'shop',
          text: '店铺'
        },
        {
          icon: 'cart',
          text: '购物车',
          info: 0
        }
      ],
      buttonGroup1: [
        {
          text: '加入购物车',
          backgroundColor: '#ff0000',
          color: '#fff'
        },
        {
          text: '立即购买',
          backgroundColor: '#ffa200',
          color: '#fff'
        }
      ],
      options2: [
        {
          icon: 'shop',
          text: '店铺'
        },
        {
          icon: 'cart',
          text: '购物车',
          info: 2
        }
      ],
      buttonGroup2: [
        {
          text: '加入购物车',
          backgroundColor: '#4ecdc4',
          color: '#fff'
        },
        {
          text: '立即购买',
          backgroundColor: '#ff6b6b',
          color: '#fff'
        }
      ],
      options3: [
        {
          icon: 'shop',
          text: '店铺'
        },
        {
          icon: 'cart',
          text: '购物车',
          info: 5
        }
      ],
      buttonGroup3: [
        {
          text: '加入购物车',
          backgroundColor: '#ff0000',
          color: '#fff'
        },
        {
          text: '立即购买',
          backgroundColor: '#ffa200',
          color: '#fff'
        }
      ]
    }
  },
  methods: {
    onClick(e) {
      console.log('点击选项：', e)
      uni.showToast({
        title: `点击了${e.content.text}`,
        icon: 'none'
      })
    },
    onButtonClick(e) {
      console.log('点击按钮：', e)
      uni.showToast({
        title: `点击了${e.content.text}`,
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
