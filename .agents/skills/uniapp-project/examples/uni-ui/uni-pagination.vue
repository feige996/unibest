<!--
分页器 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-pagination.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-pagination
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">分页器组件，用于数据分页。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-pagination :total="50" :current="current1" :pageSize="10" @change="onPageChange1" />
        <text class="result-text">当前页：{{ current1 }}</text>
      </view>
    </uni-section>

    <uni-section title="显示总数" type="line" padding>
      <view class="example-body">
        <uni-pagination :total="100" :current="current2" :pageSize="10" :show-icon="true" @change="onPageChange2" />
        <text class="result-text">当前页：{{ current2 }}</text>
      </view>
    </uni-section>

    <uni-section title="自定义样式" type="line" padding>
      <view class="example-body">
        <uni-pagination :total="80" :current="current3" :pageSize="10" :show-icon="true" @change="onPageChange3" />
        <text class="result-text">当前页：{{ current3 }}</text>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      current1: 1,
      current2: 1,
      current3: 1
    }
  },
  methods: {
    onPageChange1(e) {
      console.log('页码改变：', e)
      this.current1 = e.current
      uni.showToast({
        title: `第${e.current}页`,
        icon: 'none'
      })
    },
    onPageChange2(e) {
      this.current2 = e.current
    },
    onPageChange3(e) {
      this.current3 = e.current
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
