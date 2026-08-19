<!--
标签 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-tag.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-tag
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">标签组件，用于标记和选择，支持多种样式和尺寸。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-tag text="标签" />
        <uni-tag text="标签" type="primary" />
        <uni-tag text="标签" type="success" />
        <uni-tag text="标签" type="warning" />
        <uni-tag text="标签" type="error" />
      </view>
    </uni-section>

    <uni-section title="不同尺寸" type="line" padding>
      <view class="example-body">
        <uni-tag text="小标签" size="small" />
        <uni-tag text="默认标签" />
        <uni-tag text="大标签" size="large" />
      </view>
    </uni-section>

    <uni-section title="可关闭标签" type="line" padding>
      <view class="example-body">
        <uni-tag text="可关闭" :closable="true" @close="onClose" />
        <uni-tag text="可关闭" type="primary" :closable="true" @close="onClose" />
      </view>
    </uni-section>

    <uni-section title="圆角标签" type="line" padding>
      <view class="example-body">
        <uni-tag text="圆角标签" :circle="true" />
        <uni-tag text="圆角标签" type="primary" :circle="true" />
      </view>
    </uni-section>

    <uni-section title="禁用状态" type="line" padding>
      <view class="example-body">
        <uni-tag text="禁用标签" :disabled="true" />
        <uni-tag text="禁用标签" type="primary" :disabled="true" />
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
    onClose() {
      uni.showToast({
        title: '标签已关闭',
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
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}
</style>
