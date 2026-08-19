<!--
抽屉 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-drawer.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-drawer
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">抽屉组件，用于侧边栏抽屉。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <button type="primary" @click="openDrawer('left')">左侧抽屉</button>
        <button type="primary" @click="openDrawer('right')">右侧抽屉</button>
      </view>
    </uni-section>

    <uni-section title="不同模式" type="line" padding>
      <view class="example-body">
        <button type="primary" @click="openDrawer('left')">左侧模式</button>
        <button type="primary" @click="openDrawer('right')">右侧模式</button>
      </view>
    </uni-section>

    <uni-section title="自定义宽度" type="line" padding>
      <view class="example-body">
        <button type="primary" @click="openCustomDrawer">自定义宽度抽屉</button>
      </view>
    </uni-section>

    <uni-section title="遮罩层" type="line" padding>
      <view class="example-body">
        <button type="primary" @click="openMaskDrawer">带遮罩层抽屉</button>
      </view>
    </uni-section>

    <!-- 左侧抽屉 -->
    <uni-drawer ref="leftDrawer" mode="left" :width="300" @change="onChange">
      <view class="drawer-content">
        <text class="drawer-title">左侧抽屉</text>
        <view class="drawer-item" v-for="(item, index) in menuList" :key="index" @click="onMenuClick(item)">
          <text>{{ item.name }}</text>
        </view>
      </view>
    </uni-drawer>

    <!-- 右侧抽屉 -->
    <uni-drawer ref="rightDrawer" mode="right" :width="300" @change="onChange">
      <view class="drawer-content">
        <text class="drawer-title">右侧抽屉</text>
        <view class="drawer-item" v-for="(item, index) in menuList" :key="index" @click="onMenuClick(item)">
          <text>{{ item.name }}</text>
        </view>
      </view>
    </uni-drawer>

    <!-- 自定义宽度抽屉 -->
    <uni-drawer ref="customDrawer" mode="left" :width="400" @change="onChange">
      <view class="drawer-content">
        <text class="drawer-title">自定义宽度抽屉</text>
        <text class="drawer-text">宽度设置为400px</text>
      </view>
    </uni-drawer>

    <!-- 带遮罩层抽屉 -->
    <uni-drawer ref="maskDrawer" mode="left" :width="300" :mask="true" @change="onChange">
      <view class="drawer-content">
        <text class="drawer-title">带遮罩层抽屉</text>
        <text class="drawer-text">点击遮罩层可关闭</text>
      </view>
    </uni-drawer>
  </view>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        { name: '首页', path: '/' },
        { name: '关于', path: '/about' },
        { name: '设置', path: '/settings' }
      ]
    }
  },
  methods: {
    openDrawer(mode) {
      if (mode === 'left') {
        this.$refs.leftDrawer.open()
      } else {
        this.$refs.rightDrawer.open()
      }
    },
    openCustomDrawer() {
      this.$refs.customDrawer.open()
    },
    openMaskDrawer() {
      this.$refs.maskDrawer.open()
    },
    onChange(e) {
      console.log('抽屉状态改变：', e)
    },
    onMenuClick(item) {
      console.log('点击菜单：', item)
      uni.showToast({
        title: `点击了${item.name}`,
        icon: 'none'
      })
      // 关闭抽屉
      this.$refs.leftDrawer.close()
      this.$refs.rightDrawer.close()
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
  gap: 10px;
}

.drawer-content {
  padding: 20px;
}

.drawer-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  display: block;
}

.drawer-item {
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
}

.drawer-text {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}
</style>
