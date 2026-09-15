# scroll-view 组件示例

## 官方文档

参考官方文档：https://uniapp.dcloud.net.cn/component/scroll-view.html

## 概述

`scroll-view` 是可滚动视图容器组件，用于实现可滚动的区域。

## 基础用法

```vue
<template>
  <scroll-view scroll-y class="scroll-view">
    <view v-for="item in list" :key="item.id">{{ item.name }}</view>
  </scroll-view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: '项目1' },
        { id: 2, name: '项目2' }
      ]
    }
  }
}
</script>

<style>
.scroll-view {
  height: 400px;
}
</style>
```

## 完整示例

### 示例 1: 垂直滚动

```vue
<template>
  <scroll-view 
    scroll-y 
    class="scroll-view"
    @scroll="handleScroll"
  >
    <view 
      v-for="item in list" 
      :key="item.id"
      class="list-item"
    >
      {{ item.name }}
    </view>
  </scroll-view>
</template>

<script>
export default {
  data() {
    return {
      list: Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `项目 ${i + 1}`
      }))
    }
  },
  methods: {
    handleScroll(e) {
      console.log('滚动位置', e.detail.scrollTop)
    }
  }
}
</script>

<style>
.scroll-view {
  height: 500px;
}
.list-item {
  padding: 20px;
  border-bottom: 1px solid #eee;
}
</style>
```

### 示例 2: 水平滚动

```vue
<template>
  <scroll-view 
    scroll-x 
    class="scroll-view-horizontal"
    show-scrollbar
  >
    <view 
      v-for="item in list" 
      :key="item.id"
      class="horizontal-item"
    >
      {{ item.name }}
    </view>
  </scroll-view>
</template>

<script>
export default {
  data() {
    return {
      list: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: `项目 ${i + 1}`
      }))
    }
  }
}
</script>

<style>
.scroll-view-horizontal {
  white-space: nowrap;
  width: 100%;
}
.horizontal-item {
  display: inline-block;
  width: 200px;
  padding: 20px;
  margin-right: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
}
</style>
```

### 示例 3: 下拉刷新

```vue
<template>
  <scroll-view 
    scroll-y 
    class="scroll-view"
    refresher-enabled
    :refresher-triggered="refreshing"
    @refresherrefresh="onRefresh"
    @refresherrestore="onRestore"
  >
    <view 
      v-for="item in list" 
      :key="item.id"
      class="list-item"
    >
      {{ item.name }}
    </view>
  </scroll-view>
</template>

<script>
export default {
  data() {
    return {
      refreshing: false,
      list: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: `项目 ${i + 1}`
      }))
    }
  },
  methods: {
    onRefresh() {
      this.refreshing = true
      // 模拟刷新
      setTimeout(() => {
        this.list = Array.from({ length: 20 }, (_, i) => ({
          id: i + 1,
          name: `新项目 ${i + 1}`
        }))
        this.refreshing = false
        uni.showToast({
          title: '刷新成功',
          icon: 'success'
        })
      }, 2000)
    },
    onRestore() {
      console.log('刷新恢复')
    }
  }
}
</script>
```

### 示例 4: 上拉加载

```vue
<template>
  <scroll-view 
    scroll-y 
    class="scroll-view"
    @scrolltolower="loadMore"
    lower-threshold="50"
  >
    <view 
      v-for="item in list" 
      :key="item.id"
      class="list-item"
    >
      {{ item.name }}
    </view>
    <view v-if="loading" class="loading">加载中...</view>
  </scroll-view>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      page: 1,
      list: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: `项目 ${i + 1}`
      }))
    }
  },
  methods: {
    loadMore() {
      if (this.loading) return
      this.loading = true
      // 模拟加载
      setTimeout(() => {
        const newList = Array.from({ length: 20 }, (_, i) => ({
          id: this.list.length + i + 1,
          name: `项目 ${this.list.length + i + 1}`
        }))
        this.list = [...this.list, ...newList]
        this.page++
        this.loading = false
      }, 1000)
    }
  }
}
</script>
```

### 示例 5: 滚动到指定位置

```vue
<template>
  <view class="container">
    <button @click="scrollToTop">滚动到顶部</button>
    <button @click="scrollToBottom">滚动到底部</button>
    <button @click="scrollToIndex(10)">滚动到第10项</button>
    
    <scroll-view 
      scroll-y 
      class="scroll-view"
      :scroll-top="scrollTop"
      scroll-with-animation
    >
      <view 
        v-for="(item, index) in list" 
        :key="item.id"
        :id="`item-${index}`"
        class="list-item"
      >
        {{ item.name }}
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
      list: Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `项目 ${i + 1}`
      }))
    }
  },
  methods: {
    scrollToTop() {
      this.scrollTop = 0
    },
    scrollToBottom() {
      this.scrollTop = 9999
    },
    scrollToIndex(index) {
      // 假设每项高度为 60px
      this.scrollTop = index * 60
    }
  }
}
</script>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| scroll-x | Boolean | false | 允许横向滚动 |
| scroll-y | Boolean | false | 允许纵向滚动 |
| scroll-top | Number | - | 设置竖向滚动条位置 |
| scroll-left | Number | - | 设置横向滚动条位置 |
| refresher-enabled | Boolean | false | 开启自定义下拉刷新 |
| refresher-triggered | Boolean | false | 设置当前下拉刷新状态 |
| lower-threshold | Number | 50 | 距底部/右边多远时触发 scrolltolower 事件 |

## 平台兼容性

| 平台 | 支持情况 |
|------|---------|
| H5 | ✅ |
| 微信小程序 | ✅ |
| 支付宝小程序 | ✅ |
| 百度小程序 | ✅ |
| 字节跳动小程序 | ✅ |
| QQ 小程序 | ✅ |
| 快手小程序 | ✅ |
| App | ✅ |
| 快应用 | ✅ |

## 注意事项

1. 使用 `scroll-y` 时必须设置固定高度
2. 使用 `scroll-x` 时内容需要设置 `white-space: nowrap`
3. 下拉刷新需要设置 `refresher-enabled` 和 `refresher-triggered`
4. 上拉加载通过 `@scrolltolower` 事件实现

## 参考资源

- **官方文档**: https://uniapp.dcloud.net.cn/component/scroll-view.html
