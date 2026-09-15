<!--
搜索栏 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-search-bar.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-search-bar
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">搜索栏组件，用于搜索功能。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-search-bar v-model="searchValue1" placeholder="请输入搜索关键词" @confirm="onSearch" />
      </view>
    </uni-section>

    <uni-section title="取消按钮" type="line" padding>
      <view class="example-body">
        <uni-search-bar v-model="searchValue2" placeholder="请输入搜索关键词" :show-action="true" @confirm="onSearch" @cancel="onCancel" />
      </view>
    </uni-section>

    <uni-section title="自定义样式" type="line" padding>
      <view class="example-body">
        <uni-search-bar v-model="searchValue3" placeholder="请输入搜索关键词" :radius="20" bg-color="#f0f0f0" />
      </view>
    </uni-section>

    <uni-section title="禁用状态" type="line" padding>
      <view class="example-body">
        <uni-search-bar v-model="searchValue4" placeholder="禁用状态" :disabled="true" />
      </view>
    </uni-section>

    <uni-section title="只读状态" type="line" padding>
      <view class="example-body">
        <uni-search-bar v-model="searchValue5" placeholder="只读状态" :readonly="true" />
      </view>
    </uni-section>

    <uni-section title="事件监听" type="line" padding>
      <view class="example-body">
        <uni-search-bar v-model="searchValue6" placeholder="请输入搜索关键词" @input="onInput" @focus="onFocus" @blur="onBlur" @clear="onClear" />
        <text class="result-text">搜索值：{{ searchValue6 }}</text>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      searchValue1: '',
      searchValue2: '',
      searchValue3: '',
      searchValue4: '',
      searchValue5: '只读内容',
      searchValue6: ''
    }
  },
  methods: {
    onSearch(e) {
      console.log('搜索：', e)
      uni.showToast({
        title: `搜索：${e.value}`,
        icon: 'none'
      })
    },
    onCancel() {
      console.log('取消搜索')
      uni.showToast({
        title: '取消搜索',
        icon: 'none'
      })
    },
    onInput(e) {
      console.log('输入：', e)
    },
    onFocus(e) {
      console.log('获得焦点：', e)
    },
    onBlur(e) {
      console.log('失去焦点：', e)
    },
    onClear() {
      console.log('清除内容')
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
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}
</style>
