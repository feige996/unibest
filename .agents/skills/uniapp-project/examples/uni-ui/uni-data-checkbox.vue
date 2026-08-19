<!--
数据选择器 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-data-checkbox.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-data-checkbox
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">数据选择器组件，用于多选，支持与 uniCloud 数据源绑定。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-data-checkbox v-model="value1" :localdata="localdata1" />
        <text class="result-text">当前值：{{ value1 }}</text>
      </view>
    </uni-section>

    <uni-section title="多选" type="line" padding>
      <view class="example-body">
        <uni-data-checkbox v-model="value2" :localdata="localdata2" :multiple="true" />
        <text class="result-text">当前值：{{ value2.join(', ') || '无' }}</text>
      </view>
    </uni-section>

    <uni-section title="禁用状态" type="line" padding>
      <view class="example-body">
        <uni-data-checkbox v-model="value3" :localdata="localdata1" :disabled="true" />
      </view>
    </uni-section>

    <uni-section title="自定义样式" type="line" padding>
      <view class="example-body">
        <uni-data-checkbox v-model="value4" :localdata="localdata2" :multiple="true" />
        <text class="result-text">当前值：{{ value4.join(', ') || '无' }}</text>
      </view>
    </uni-section>

    <uni-section title="事件监听" type="line" padding>
      <view class="example-body">
        <uni-data-checkbox v-model="value5" :localdata="localdata2" :multiple="true" @change="onChange" />
        <text class="result-text">当前值：{{ value5.join(', ') || '无' }}</text>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: [],
      value3: 1,
      value4: [],
      value5: [],
      localdata1: [
        { text: '选项1', value: 0 },
        { text: '选项2', value: 1 },
        { text: '选项3', value: 2 }
      ],
      localdata2: [
        { text: '游泳', value: 0 },
        { text: '跑步', value: 1 },
        { text: '健身', value: 2 },
        { text: '阅读', value: 3 }
      ]
    }
  },
  methods: {
    onChange(e) {
      console.log('选择改变：', e)
      uni.showToast({
        title: `选择了${e.length}项`,
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
