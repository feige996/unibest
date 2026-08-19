<!--
面包屑 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-breadcrumb.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-breadcrumb
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">面包屑组件，用于显示当前页面的路径，帮助用户了解当前位置。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-breadcrumb :separator="separator">
          <uni-breadcrumb-item v-for="(item, index) in breadcrumbList1" :key="index">
            {{ item }}
          </uni-breadcrumb-item>
        </uni-breadcrumb>
      </view>
    </uni-section>

    <uni-section title="自定义分隔符" type="line" padding>
      <view class="example-body">
        <uni-breadcrumb separator="/">
          <uni-breadcrumb-item>首页</uni-breadcrumb-item>
          <uni-breadcrumb-item>分类</uni-breadcrumb-item>
          <uni-breadcrumb-item>详情</uni-breadcrumb-item>
        </uni-breadcrumb>
        <uni-breadcrumb separator=">">
          <uni-breadcrumb-item>首页</uni-breadcrumb-item>
          <uni-breadcrumb-item>分类</uni-breadcrumb-item>
          <uni-breadcrumb-item>详情</uni-breadcrumb-item>
        </uni-breadcrumb>
      </view>
    </uni-section>

    <uni-section title="可点击" type="line" padding>
      <view class="example-body">
        <uni-breadcrumb>
          <uni-breadcrumb-item v-for="(item, index) in breadcrumbList2" :key="index" @click="onBreadcrumbClick(item, index)">
            {{ item.text }}
          </uni-breadcrumb-item>
        </uni-breadcrumb>
      </view>
    </uni-section>

    <uni-section title="自定义样式" type="line" padding>
      <view class="example-body">
        <uni-breadcrumb separator="/" color="#ff6b6b">
          <uni-breadcrumb-item>首页</uni-breadcrumb-item>
          <uni-breadcrumb-item>分类</uni-breadcrumb-item>
          <uni-breadcrumb-item>详情</uni-breadcrumb-item>
        </uni-breadcrumb>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      separator: '/',
      breadcrumbList1: ['首页', '分类', '详情'],
      breadcrumbList2: [
        { text: '首页', path: '/' },
        { text: '分类', path: '/category' },
        { text: '详情', path: '/detail' }
      ]
    }
  },
  methods: {
    onBreadcrumbClick(item, index) {
      console.log('点击面包屑：', item, index)
      uni.showToast({
        title: `点击了${item.text}`,
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
</style>
