<!--
级联选择器 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-data-picker.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-data-picker
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">级联选择器组件，用于级联数据选择，支持与 uniCloud 数据源绑定。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-data-picker v-model="value1" :localdata="localdata1" @change="onChange" />
        <text class="result-text">当前值：{{ JSON.stringify(value1) }}</text>
      </view>
    </uni-section>

    <uni-section title="多级联动" type="line" padding>
      <view class="example-body">
        <uni-data-picker v-model="value2" :localdata="localdata2" @change="onChange" />
        <text class="result-text">当前值：{{ JSON.stringify(value2) }}</text>
      </view>
    </uni-section>

    <uni-section title="禁用状态" type="line" padding>
      <view class="example-body">
        <uni-data-picker v-model="value3" :localdata="localdata1" :disabled="true" />
      </view>
    </uni-section>

    <uni-section title="自定义占位符" type="line" padding>
      <view class="example-body">
        <uni-data-picker v-model="value4" :localdata="localdata1" placeholder="请选择" @change="onChange" />
        <text class="result-text">当前值：{{ JSON.stringify(value4) }}</text>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value1: [],
      value2: [],
      value3: [0],
      value4: [],
      localdata1: [
        { text: '选项1', value: 0 },
        { text: '选项2', value: 1 },
        { text: '选项3', value: 2 }
      ],
      localdata2: [
        {
          text: '一级1',
          value: 0,
          children: [
            { text: '二级1-1', value: 0 },
            { text: '二级1-2', value: 1 }
          ]
        },
        {
          text: '一级2',
          value: 1,
          children: [
            { text: '二级2-1', value: 0 },
            { text: '二级2-2', value: 1 }
          ]
        }
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
  word-break: break-all;
}
</style>
