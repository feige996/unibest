<!--
滑动操作 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-swipe-action.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-swipe-action
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">滑动操作组件，用于列表项滑动操作。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-swipe-action>
          <uni-swipe-action-item :right-options="options1" @click="onClick">
            <view class="swipe-item">
              <text>滑动显示操作按钮</text>
            </view>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
    </uni-section>

    <uni-section title="左右滑动" type="line" padding>
      <view class="example-body">
        <uni-swipe-action>
          <uni-swipe-action-item :left-options="options2" :right-options="options3" @click="onClick">
            <view class="swipe-item">
              <text>左右都可以滑动</text>
            </view>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
    </uni-section>

    <uni-section title="多个操作按钮" type="line" padding>
      <view class="example-body">
        <uni-swipe-action>
          <uni-swipe-action-item :right-options="options4" @click="onClick">
            <view class="swipe-item">
              <text>多个操作按钮</text>
            </view>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      options1: [
        {
          text: '删除',
          style: {
            backgroundColor: '#dd524d'
          }
        }
      ],
      options2: [
        {
          text: '收藏',
          style: {
            backgroundColor: '#007aff'
          }
        }
      ],
      options3: [
        {
          text: '删除',
          style: {
            backgroundColor: '#dd524d'
          }
        }
      ],
      options4: [
        {
          text: '收藏',
          style: {
            backgroundColor: '#007aff'
          }
        },
        {
          text: '删除',
          style: {
            backgroundColor: '#dd524d'
          }
        }
      ]
    }
  },
  methods: {
    onClick(e) {
      console.log('点击操作：', e)
      uni.showToast({
        title: `点击了${e.content.text}`,
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
  margin-bottom: 20px;
}

.swipe-item {
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
}
</style>
