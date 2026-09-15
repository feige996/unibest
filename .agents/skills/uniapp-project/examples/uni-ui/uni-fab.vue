<!--
悬浮按钮 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-fab.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-fab
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">悬浮按钮组件，用于悬浮操作按钮。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-fab :pattern="pattern1" :content="content1" horizontal="right" vertical="bottom" direction="vertical" @trigger="onTrigger" />
      </view>
    </uni-section>

    <uni-section title="水平方向" type="line" padding>
      <view class="example-body">
        <uni-fab :pattern="pattern2" :content="content2" horizontal="right" vertical="bottom" direction="horizontal" @trigger="onTrigger" />
      </view>
    </uni-section>

    <uni-section title="自定义位置" type="line" padding>
      <view class="example-body">
        <uni-fab :pattern="pattern3" :content="content3" horizontal="left" vertical="top" direction="vertical" @trigger="onTrigger" />
      </view>
    </uni-section>

    <uni-section title="自定义样式" type="line" padding>
      <view class="example-body">
        <uni-fab :pattern="pattern4" :content="content4" horizontal="right" vertical="bottom" direction="vertical" @trigger="onTrigger" />
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      pattern1: {
        color: '#7A7E83',
        selectedColor: '#007AFF',
        buttonColor: '#007AFF'
      },
      content1: [
        { icon: 'plus', text: '添加' },
        { icon: 'star', text: '收藏' },
        { icon: 'settings', text: '设置' }
      ],
      pattern2: {
        color: '#7A7E83',
        selectedColor: '#007AFF',
        buttonColor: '#007AFF'
      },
      content2: [
        { icon: 'plus', text: '添加' },
        { icon: 'star', text: '收藏' }
      ],
      pattern3: {
        color: '#7A7E83',
        selectedColor: '#007AFF',
        buttonColor: '#4ecdc4'
      },
      content3: [
        { icon: 'plus', text: '添加' },
        { icon: 'star', text: '收藏' }
      ],
      pattern4: {
        color: '#7A7E83',
        selectedColor: '#ff6b6b',
        buttonColor: '#ff6b6b'
      },
      content4: [
        { icon: 'plus', text: '添加' },
        { icon: 'star', text: '收藏' }
      ]
    }
  },
  methods: {
    onTrigger(e) {
      console.log('触发操作：', e)
      uni.showToast({
        title: `点击了${e.item.text}`,
        icon: 'none'
      })
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 10px;
  min-height: 600px;
}

.example-body {
  position: relative;
  min-height: 400px;
}
</style>
