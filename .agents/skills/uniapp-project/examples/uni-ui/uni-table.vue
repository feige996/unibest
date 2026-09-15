<!--
表格 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-table.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-table
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">表格组件，用于展示表格数据。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-table border stripe>
          <uni-tr>
            <uni-th>姓名</uni-th>
            <uni-th>年龄</uni-th>
            <uni-th>地址</uni-th>
          </uni-tr>
          <uni-tr v-for="(item, index) in tableData1" :key="index">
            <uni-td>{{ item.name }}</uni-td>
            <uni-td>{{ item.age }}</uni-td>
            <uni-td>{{ item.address }}</uni-td>
          </uni-tr>
        </uni-table>
      </view>
    </uni-section>

    <uni-section title="无边框" type="line" padding>
      <view class="example-body">
        <uni-table>
          <uni-tr>
            <uni-th>姓名</uni-th>
            <uni-th>年龄</uni-th>
            <uni-th>地址</uni-th>
          </uni-tr>
          <uni-tr v-for="(item, index) in tableData2" :key="index">
            <uni-td>{{ item.name }}</uni-td>
            <uni-td>{{ item.age }}</uni-td>
            <uni-td>{{ item.address }}</uni-td>
          </uni-tr>
        </uni-table>
      </view>
    </uni-section>

    <uni-section title="对齐方式" type="line" padding>
      <view class="example-body">
        <uni-table border>
          <uni-tr>
            <uni-th align="left">左对齐</uni-th>
            <uni-th align="center">居中</uni-th>
            <uni-th align="right">右对齐</uni-th>
          </uni-tr>
          <uni-tr v-for="(item, index) in tableData3" :key="index">
            <uni-td align="left">{{ item.name }}</uni-td>
            <uni-td align="center">{{ item.age }}</uni-td>
            <uni-td align="right">{{ item.address }}</uni-td>
          </uni-tr>
        </uni-table>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tableData1: [
        { name: '张三', age: 20, address: '北京市' },
        { name: '李四', age: 25, address: '上海市' },
        { name: '王五', age: 30, address: '广州市' }
      ],
      tableData2: [
        { name: '张三', age: 20, address: '北京市' },
        { name: '李四', age: 25, address: '上海市' }
      ],
      tableData3: [
        { name: '张三', age: 20, address: '北京市' },
        { name: '李四', age: 25, address: '上海市' }
      ]
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
  margin-bottom: 20px;
}
</style>
