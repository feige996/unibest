<!--
宫格 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-grid.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-grid
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">宫格组件，用于展示网格布局，常用于功能入口。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <uni-grid :column="3" :show-border="false" :square="false">
        <uni-grid-item v-for="(item, index) in gridList1" :key="index" @click="onClick">
          <view class="grid-item-box">
            <image class="grid-item-image" :src="item.url" mode="aspectFill" />
            <text class="grid-item-text">{{ item.text }}</text>
          </view>
        </uni-grid-item>
      </uni-grid>
    </uni-section>

    <uni-section title="不同列数" type="line" padding>
      <uni-grid :column="4" :show-border="false" :square="false">
        <uni-grid-item v-for="(item, index) in gridList2" :key="index" @click="onClick">
          <view class="grid-item-box">
            <text class="grid-item-text">{{ item.text }}</text>
          </view>
        </uni-grid-item>
      </uni-grid>
    </uni-section>

    <uni-section title="带边框" type="line" padding>
      <uni-grid :column="3" :show-border="true" :square="false">
        <uni-grid-item v-for="(item, index) in gridList3" :key="index" @click="onClick">
          <view class="grid-item-box">
            <text class="grid-item-text">{{ item.text }}</text>
          </view>
        </uni-grid-item>
      </uni-grid>
    </uni-section>

    <uni-section title="正方形" type="line" padding>
      <uni-grid :column="3" :show-border="false" :square="true">
        <uni-grid-item v-for="(item, index) in gridList4" :key="index" @click="onClick">
          <view class="grid-item-box">
            <text class="grid-item-text">{{ item.text }}</text>
          </view>
        </uni-grid-item>
      </uni-grid>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      gridList1: [
        { text: '功能1', url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png' },
        { text: '功能2', url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png' },
        { text: '功能3', url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png' },
        { text: '功能4', url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png' },
        { text: '功能5', url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png' },
        { text: '功能6', url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png' }
      ],
      gridList2: [
        { text: '选项1' },
        { text: '选项2' },
        { text: '选项3' },
        { text: '选项4' }
      ],
      gridList3: [
        { text: '选项1' },
        { text: '选项2' },
        { text: '选项3' }
      ],
      gridList4: [
        { text: '选项1' },
        { text: '选项2' },
        { text: '选项3' }
      ]
    }
  },
  methods: {
    onClick(e) {
      console.log('点击宫格项', e)
      uni.showToast({
        title: '点击了宫格项',
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

.grid-item-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.grid-item-image {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.grid-item-text {
  font-size: 14px;
  color: #333;
  text-align: center;
}
</style>
