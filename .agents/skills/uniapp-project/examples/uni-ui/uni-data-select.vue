<!--
下拉框 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-data-select.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-data-select
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">下拉框组件，用于下拉选择，支持与 uniCloud 数据源绑定。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-data-select v-model="value1" :localdata="localdata1" @change="onChange" />
        <text class="result-text">当前值：{{ value1 }}</text>
      </view>
    </uni-section>

    <uni-section title="自定义占位符" type="line" padding>
      <view class="example-body">
        <uni-data-select v-model="value2" :localdata="localdata1" placeholder="请选择" @change="onChange" />
        <text class="result-text">当前值：{{ value2 }}</text>
      </view>
    </uni-section>

    <uni-section title="禁用状态" type="line" padding>
      <view class="example-body">
        <uni-data-select v-model="value3" :localdata="localdata1" :disabled="true" />
      </view>
    </uni-section>

    <uni-section title="事件监听" type="line" padding>
      <view class="example-body">
        <uni-data-select v-model="value4" :localdata="localdata2" @change="onChange" />
        <text class="result-text">当前值：{{ value4 }}</text>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: 0,
      value4: '',
      localdata1: [
        { text: '选项1', value: 0 },
        { text: '选项2', value: 1 },
        { text: '选项3', value: 2 }
      ],
      localdata2: [
        { text: '北京', value: 'beijing' },
        { text: '上海', value: 'shanghai' },
        { text: '广州', value: 'guangzhou' },
        { text: '深圳', value: 'shenzhen' }
      ]
    }
  },
  methods: {
    onChange(e) {
      console.log('选择改变：', e)
      uni.showToast({
        title: '选择已改变',
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
  gap: 15px;
}

.result-text {
  font-size: 14px;
  color: #333;
  margin-top: 10px;
}
</style>
