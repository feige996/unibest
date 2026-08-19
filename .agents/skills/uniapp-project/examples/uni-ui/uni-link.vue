<!--
超链接 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-link.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-link
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">超链接组件，用于页面跳转，支持多种跳转方式。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-link href="https://uniapp.dcloud.net.cn" text="跳转到官网" />
      </view>
    </uni-section>

    <uni-section title="不同颜色" type="line" padding>
      <view class="example-body">
        <uni-link href="https://uniapp.dcloud.net.cn" text="默认链接" />
        <uni-link href="https://uniapp.dcloud.net.cn" text="主要链接" color="#007aff" />
        <uni-link href="https://uniapp.dcloud.net.cn" text="成功链接" color="#4cd964" />
        <uni-link href="https://uniapp.dcloud.net.cn" text="警告链接" color="#f0ad4e" />
        <uni-link href="https://uniapp.dcloud.net.cn" text="错误链接" color="#dd524d" />
      </view>
    </uni-section>

    <uni-section title="下划线" type="line" padding>
      <view class="example-body">
        <uni-link href="https://uniapp.dcloud.net.cn" text="显示下划线" :showUnderLine="true" />
        <uni-link href="https://uniapp.dcloud.net.cn" text="不显示下划线" :showUnderLine="false" />
      </view>
    </uni-section>

    <uni-section title="不同尺寸" type="line" padding>
      <view class="example-body">
        <uni-link href="https://uniapp.dcloud.net.cn" text="小号链接" size="small" />
        <uni-link href="https://uniapp.dcloud.net.cn" text="默认链接" />
        <uni-link href="https://uniapp.dcloud.net.cn" text="大号链接" size="large" />
      </view>
    </uni-section>

    <uni-section title="点击事件" type="line" padding>
      <view class="example-body">
        <uni-link href="https://uniapp.dcloud.net.cn" text="点击我" @click="onClick" />
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onClick(e) {
      console.log('链接被点击', e)
      uni.showToast({
        title: '链接被点击',
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
  gap: 10px;
}
</style>
