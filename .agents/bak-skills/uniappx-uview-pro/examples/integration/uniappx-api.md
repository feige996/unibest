# UniAppX API Integration | UniAppX API 集成

## Instructions

This example demonstrates how to use UniAppX APIs with uView Pro components.

### Key Concepts

- Using UniAppX APIs with uView Pro components
- Network requests for component data
- Storage API for component state
- System information for responsive components
- Lifecycle hooks with uView Pro components
- TypeScript type definitions

### Example: Network Request with uView Pro Components

```vue
<!-- pages/index/index.vue -->
<template>
  <view>
    <u-button type="primary" :loading="loading" @click="loadData">
      加载数据
    </u-button>
    <u-list v-if="dataList.length > 0">
      <u-list-item v-for="item in dataList" :key="item.id">
        {{ item.name }}
      </u-list-item>
    </u-list>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const dataList = ref([])

const loadData = () => {
  loading.value = true
  uni.request({
    url: 'https://api.example.com/data',
    method: 'GET',
    success: (res) => {
      dataList.value = res.data
    },
    fail: (err) => {
      uni.showToast({
        title: '加载失败',
        icon: 'none'
      })
    },
    complete: () => {
      loading.value = false
    }
  })
}
</script>
```

### Example: Storage API with uView Pro Components

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const userInfo = ref({})

onMounted(() => {
  // Load from cache first
  uni.getStorage({
    key: 'userInfo',
    success: (res) => {
      userInfo.value = res.data
    },
    fail: () => {
      // Load from network
      loadUserInfo()
    }
  })
})

const loadUserInfo = () => {
  uni.request({
    url: 'https://api.example.com/user',
    success: (res) => {
      userInfo.value = res.data
      // Cache the data
      uni.setStorage({
        key: 'userInfo',
        data: res.data
      })
    }
  })
}
</script>
```

### Example: System Information for Responsive Components

```vue
<template>
  <view>
    <u-grid :col="gridCol">
      <u-grid-item v-for="item in gridData" :key="item.id">
        {{ item.name }}
      </u-grid-item>
    </u-grid>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const gridCol = ref(3)
const gridData = ref([])

onMounted(() => {
  uni.getSystemInfo({
    success: (res) => {
      // Adjust grid columns based on screen width
      if (res.windowWidth > 750) {
        gridCol.value = 4
      } else if (res.windowWidth > 500) {
        gridCol.value = 3
      } else {
        gridCol.value = 2
      }
    }
  })
})
</script>
```

### Example: Show Loading with uView Pro

```vue
<template>
  <view>
    <u-loading-page :loading="loading" />
    <u-button @click="loadData">加载数据</u-button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)

const loadData = () => {
  loading.value = true
  uni.request({
    url: 'https://api.example.com/data',
    success: (res) => {
      // Handle data
    },
    complete: () => {
      loading.value = false
    }
  })
}
</script>
```

### Example: Pull to Refresh with uView Pro

```json
// pages.json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页",
        "enablePullDownRefresh": true
      }
    }
  ]
}
```

```vue
<!-- pages/index/index.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const dataList = ref([])

const onPullDownRefresh = () => {
  loadData()
}

const loadData = () => {
  uni.request({
    url: 'https://api.example.com/data',
    success: (res) => {
      dataList.value = res.data
    },
    complete: () => {
      uni.stopPullDownRefresh()
    }
  })
}
</script>
```

### Example: Navigation with uView Pro Components

```vue
<template>
  <view>
    <u-button type="primary" @click="goToDetail">查看详情</u-button>
  </view>
</template>

<script setup lang="ts">
const goToDetail = () => {
  uni.navigateTo({
    url: '/pages/detail/detail?id=123'
  })
}
</script>
```

### Key Points

- Use `uni.request()` for loading data with uView Pro components
- Use `uni.getStorage()` and `uni.setStorage()` for caching component state
- Use `uni.getSystemInfo()` for responsive component sizing
- Use `u-loading-page` component for loading states
- Handle pull-to-refresh for component data updates
- Use TypeScript types for better type safety
- Use Composition API and setup syntax (recommended for UniAppX)
