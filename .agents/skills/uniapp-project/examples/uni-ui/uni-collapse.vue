<!--
折叠面板 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-collapse.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-collapse
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">折叠面板组件，用于可折叠的内容展示。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-collapse>
          <uni-collapse-item title="标题1" name="item1">
            <text>这是折叠面板的内容1</text>
          </uni-collapse-item>
          <uni-collapse-item title="标题2" name="item2">
            <text>这是折叠面板的内容2</text>
          </uni-collapse-item>
          <uni-collapse-item title="标题3" name="item3">
            <text>这是折叠面板的内容3</text>
          </uni-collapse-item>
        </uni-collapse>
      </view>
    </uni-section>

    <uni-section title="手风琴模式" type="line" padding>
      <view class="example-body">
        <uni-collapse :accordion="true">
          <uni-collapse-item title="标题1" name="item1">
            <text>手风琴模式，同时只能展开一个</text>
          </uni-collapse-item>
          <uni-collapse-item title="标题2" name="item2">
            <text>手风琴模式，同时只能展开一个</text>
          </uni-collapse-item>
          <uni-collapse-item title="标题3" name="item3">
            <text>手风琴模式，同时只能展开一个</text>
          </uni-collapse-item>
        </uni-collapse>
      </view>
    </uni-section>

    <uni-section title="默认展开" type="line" padding>
      <view class="example-body">
        <uni-collapse>
          <uni-collapse-item title="默认展开" name="item1" :open="true">
            <text>这个面板默认展开</text>
          </uni-collapse-item>
          <uni-collapse-item title="默认收起" name="item2">
            <text>这个面板默认收起</text>
          </uni-collapse-item>
        </uni-collapse>
      </view>
    </uni-section>

    <uni-section title="禁用状态" type="line" padding>
      <view class="example-body">
        <uni-collapse>
          <uni-collapse-item title="正常状态" name="item1">
            <text>可以展开</text>
          </uni-collapse-item>
          <uni-collapse-item title="禁用状态" name="item2" :disabled="true">
            <text>无法展开</text>
          </uni-collapse-item>
        </uni-collapse>
      </view>
    </uni-section>

    <uni-section title="事件监听" type="line" padding>
      <view class="example-body">
        <uni-collapse @change="onChange">
          <uni-collapse-item title="标题1" name="item1">
            <text>点击展开/收起会触发事件</text>
          </uni-collapse-item>
          <uni-collapse-item title="标题2" name="item2">
            <text>点击展开/收起会触发事件</text>
          </uni-collapse-item>
        </uni-collapse>
        <text class="result-text">当前展开项：{{ activeNames.join(', ') || '无' }}</text>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activeNames: []
    }
  },
  methods: {
    onChange(e) {
      console.log('折叠面板状态改变：', e)
      this.activeNames = e
      uni.showToast({
        title: `展开项：${e.join(', ')}`,
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

.result-text {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}
</style>
