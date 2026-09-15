<!--
组合框 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-combox.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-combox
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">组合框组件，用于输入和选择的组合。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-combox :candidates="candidates1" v-model="value1" placeholder="请输入或选择" />
        <text class="result-text">当前值：{{ value1 }}</text>
      </view>
    </uni-section>

    <uni-section title="自定义候选列表" type="line" padding>
      <view class="example-body">
        <uni-combox :candidates="candidates2" v-model="value2" placeholder="请输入或选择" />
        <text class="result-text">当前值：{{ value2 }}</text>
      </view>
    </uni-section>

    <uni-section title="禁用状态" type="line" padding>
      <view class="example-body">
        <uni-combox :candidates="candidates1" v-model="value3" placeholder="禁用状态" :disabled="true" />
      </view>
    </uni-section>

    <uni-section title="只读状态" type="line" padding>
      <view class="example-body">
        <uni-combox :candidates="candidates1" v-model="value4" placeholder="只读状态" :readonly="true" />
      </view>
    </uni-section>

    <uni-section title="事件监听" type="line" padding>
      <view class="example-body">
        <uni-combox :candidates="candidates1" v-model="value5" placeholder="请输入或选择" @input="onInput" @select="onSelect" />
        <text class="result-text">当前值：{{ value5 }}</text>
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
      value3: '禁用内容',
      value4: '只读内容',
      value5: '',
      candidates1: ['选项1', '选项2', '选项3', '选项4', '选项5'],
      candidates2: ['北京', '上海', '广州', '深圳', '杭州', '成都']
    }
  },
  methods: {
    onInput(e) {
      console.log('输入：', e)
    },
    onSelect(e) {
      console.log('选择：', e)
      uni.showToast({
        title: `选择了：${e}`,
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
