<!--
索引列表 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-indexed-list.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-indexed-list
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">索引列表组件，用于按字母索引的列表，常用于通讯录。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-indexed-list :options="indexedList1" @click="onClick" />
      </view>
    </uni-section>

    <uni-section title="自定义数据" type="line" padding>
      <view class="example-body">
        <uni-indexed-list :options="indexedList2" @click="onClick" />
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      indexedList1: [
        {
          letter: 'A',
          data: [
            { name: 'Apple' },
            { name: 'Ant' },
            { name: 'Air' }
          ]
        },
        {
          letter: 'B',
          data: [
            { name: 'Banana' },
            { name: 'Book' },
            { name: 'Ball' }
          ]
        },
        {
          letter: 'C',
          data: [
            { name: 'Cat' },
            { name: 'Car' },
            { name: 'Cup' }
          ]
        }
      ],
      indexedList2: [
        {
          letter: '热门',
          data: [
            { name: '北京' },
            { name: '上海' },
            { name: '广州' }
          ]
        },
        {
          letter: 'A',
          data: [
            { name: '安徽' },
            { name: '澳门' }
          ]
        },
        {
          letter: 'B',
          data: [
            { name: '北京' }
          ]
        },
        {
          letter: 'G',
          data: [
            { name: '广东' },
            { name: '广西' }
          ]
        }
      ]
    }
  },
  methods: {
    onClick(e) {
      console.log('点击项：', e)
      uni.showToast({
        title: `点击了${e.item.name}`,
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
  height: 500px;
}
</style>
