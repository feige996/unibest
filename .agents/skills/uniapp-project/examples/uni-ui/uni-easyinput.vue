<!--
增强输入框 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-easyinput.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-easyinput
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">增强输入框组件，提供更丰富的输入功能，支持清除按钮、密码显示等。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-easyinput v-model="value1" placeholder="请输入内容" />
      </view>
    </uni-section>

    <uni-section title="不同输入类型" type="line" padding>
      <view class="example-body">
        <uni-easyinput v-model="value2" type="text" placeholder="文本输入" />
        <uni-easyinput v-model="value3" type="number" placeholder="数字输入" />
        <uni-easyinput v-model="value4" type="password" placeholder="密码输入" />
        <uni-easyinput v-model="value5" type="textarea" placeholder="多行文本" />
      </view>
    </uni-section>

    <uni-section title="清除按钮" type="line" padding>
      <view class="example-body">
        <uni-easyinput v-model="value6" placeholder="带清除按钮" :clearable="true" />
      </view>
    </uni-section>

    <uni-section title="前缀图标" type="line" padding>
      <view class="example-body">
        <uni-easyinput v-model="value7" placeholder="请输入用户名" :prefixIcon="prefixIcon" />
      </view>
    </uni-section>

    <uni-section title="后缀图标" type="line" padding>
      <view class="example-body">
        <uni-easyinput v-model="value8" placeholder="请输入密码" type="password" :suffixIcon="suffixIcon" />
      </view>
    </uni-section>

    <uni-section title="禁用状态" type="line" padding>
      <view class="example-body">
        <uni-easyinput v-model="value9" placeholder="禁用状态" :disabled="true" />
      </view>
    </uni-section>

    <uni-section title="只读状态" type="line" padding>
      <view class="example-body">
        <uni-easyinput v-model="value10" placeholder="只读状态" :readonly="true" />
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
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '禁用内容',
      value10: '只读内容',
      prefixIcon: 'person',
      suffixIcon: 'eye'
    }
  },
  methods: {}
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
</style>
