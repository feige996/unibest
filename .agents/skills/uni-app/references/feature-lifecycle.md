---
name: Page Lifecycle
description: Page and application lifecycle hooks
---

# Page Lifecycle

## Application Lifecycle

In `App.vue`:

```javascript
export default {
  globalData: {
    userInfo: null,
    theme: 'light'
  },

  onLaunch(options) {
    // App launched (only once)
    console.log('App launched', options)
    this.checkUpdate()
  },

  onShow(options) {
    // App shown/foreground
    console.log('App shown', options)
  },

  onHide() {
    // App hidden/background
    console.log('App hidden')
  },

  onError(msg) {
    // Global error handler
    console.error('App error:', msg)
  },

  onUnhandledRejection(err) {
    // Unhandled promise rejection
    console.error('Unhandled rejection:', err)
  },

  onPageNotFound(res) {
    // 404 page not found
    console.error('Page not found:', res.path)
    uni.redirectTo({
      url: '/pages/404/404'
    })
  },

  methods: {
    checkUpdate() {
      // Check for app updates
      const updateManager = uni.getUpdateManager()
      updateManager.onCheckForUpdate((res) => {
        if (res.hasUpdate) {
          console.log('New version available')
        }
      })
    }
  }
}
```

## Page Lifecycle

```vue
<script>
export default {
  // === Page Load ===
  onLoad(options) {
    // Page loaded with query parameters
    console.log('Page loaded', options)
    // options contains URL query params
    // e.g., /pages/detail?id=123 -> options = { id: '123' }
    this.id = options.id
    this.loadData()
  },

  // === Page Show ===
  onShow() {
    // Page shown (every time)
    console.log('Page shown')
    // Good for refreshing data when returning
  },

  // === Page Ready ===
  onReady() {
    // Page ready, DOM rendered
    console.log('Page ready')
    // Safe to access DOM elements
    this.initChart()
  },

  // === Page Hide ===
  onHide() {
    // Page hidden (navigated away)
    console.log('Page hidden')
    // Pause videos, timers, etc.
  },

  // === Page Unload ===
  onUnload() {
    // Page destroyed
    console.log('Page unloaded')
    // Clean up resources, remove listeners
    clearInterval(this.timer)
  },

  // === Pull Down Refresh ===
  onPullDownRefresh() {
    // User pulled down
    console.log('Pull down refresh')
    this.refreshData().finally(() => {
      uni.stopPullDownRefresh()
    })
  },

  // === Reach Bottom ===
  onReachBottom() {
    // Scrolled to bottom
    console.log('Reach bottom')
    this.loadMore()
  },

  // === Page Scroll ===
  onPageScroll(e) {
    // Page scrolled
    // e.scrollTop: scroll position
    this.scrollTop = e.scrollTop
  },

  // === Resize ===
  onResize(e) {
    // Page resized (e.g., rotation)
    console.log('Page resized', e.size)
  },

  // === Share ===
  onShareAppMessage(res) {
    // Native share (MP)
    if (res.from === 'button') {
      // From share button
      console.log(res.target)
    }
    return {
      title: 'Share Title',
      path: '/pages/index/index',
      imageUrl: '/static/share.png'
    }
  },

  // === Timeline Share ===
  onShareTimeline() {
    // Share to timeline (WeChat)
    return {
      title: 'Timeline Title',
      query: 'id=123',
      imageUrl: '/static/share.png'
    }
  },

  // === Add to Favorites ===
  onAddToFavorites() {
    // Add to MP favorites
    return {
      title: 'Favorite Title',
      imageUrl: '/static/fav.png',
      query: 'id=123'
    }
  },

  data() {
    return {
      id: null,
      scrollTop: 0,
      timer: null
    }
  },

  methods: {
    loadData() {
      // Load page data
    },
    refreshData() {
      // Refresh data
    },
    loadMore() {
      // Load more data
    },
    initChart() {
      // Initialize chart after DOM ready
    }
  }
}
</script>
```

## Component Lifecycle (Vue 2)

```vue
<script>
export default {
  // === Creation ===
  beforeCreate() {
    // Instance initialized
  },

  created() {
    // Instance created, data observed
    // Good for initial data loading
  },

  // === Mounting ===
  beforeMount() {
    // Before DOM mount
  },

  mounted() {
    // DOM mounted
    // Good for DOM operations
  },

  // === Updating ===
  beforeUpdate() {
    // Before data update
  },

  updated() {
    // After data update
  },

  // === Destruction ===
  beforeDestroy() {
    // Before instance destroyed
    // Clean up here
  },

  destroyed() {
    // Instance destroyed
  },

  // === Keep-alive ===
  activated() {
    // Component activated (kept-alive)
  },

  deactivated() {
    // Component deactivated (kept-alive)
  }
}
</script>
```

## Component Lifecycle (Vue 3)

```vue
<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated
} from 'vue'

// Setup runs before beforeCreate
console.log('setup')

onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted')
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})

onUpdated(() => {
  console.log('onUpdated')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

onActivated(() => {
  console.log('onActivated')
})

onDeactivated(() => {
  console.log('onDeactivated')
})
</script>
```

## Lifecycle Comparison

| Scenario | UniApp Page | Vue Component |
|----------|-------------|---------------|
| Initial load | onLoad | created |
| DOM ready | onReady | mounted |
| Page show | onShow | - |
| Page hide | onHide | - |
| Page destroy | onUnload | destroyed/unmounted |
| Data refresh | onPullDownRefresh | - |
| Infinite scroll | onReachBottom | - |
| Scroll position | onPageScroll | - |

## App Update Manager

```javascript
// In App.vue onLaunch
onLaunch() {
  const updateManager = uni.getUpdateManager()

  updateManager.onCheckForUpdate((res) => {
    console.log('Has update:', res.hasUpdate)
  })

  updateManager.onUpdateReady(() => {
    uni.showModal({
      title: 'Update Ready',
      content: 'New version downloaded. Restart to apply?',
      success: (res) => {
        if (res.confirm) {
          updateManager.applyUpdate()
        }
      }
    })
  })

  updateManager.onUpdateFailed(() => {
    console.error('Update failed')
  })
}
```

## Best Practices

### Data Loading Pattern

```javascript
export default {
  data() {
    return {
      loading: false,
      error: null,
      data: null
    }
  },

  onLoad(options) {
    this.fetchData(options.id)
  },

  onPullDownRefresh() {
    this.fetchData(this.id).finally(() => {
      uni.stopPullDownRefresh()
    })
  },

  methods: {
    async fetchData(id) {
      this.loading = true
      this.error = null
      try {
        this.data = await api.getDetail(id)
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    }
  }
}
```

### Scroll Performance

```javascript
export default {
  data() {
    return {
      scrollTop: 0,
      showBackTop: false
    }
  },

  // Throttle scroll events
  onPageScroll: throttle(function(e) {
    this.scrollTop = e.scrollTop
    this.showBackTop = e.scrollTop > 500
  }, 200),

  methods: {
    scrollToTop() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    }
  }
}
```

<!--
Source references:
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/collocation/App.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/lifecycle.md
-->
