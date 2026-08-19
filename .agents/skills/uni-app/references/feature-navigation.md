---
name: Navigation
description: Navigation, routing, and page navigation components
---

# Navigation

## navigator

Page navigation component.

```vue
<template>
  <!-- Basic navigation -->
  <navigator url="/pages/detail/detail" hover-class="navigator-hover">
    Go to Detail
  </navigator>

  <!-- Open in new page -->
  <navigator url="/pages/detail/detail" open-type="navigate">
    Navigate (default)
  </navigator>

  <!-- Redirect (no back button) -->
  <navigator url="/pages/login/login" open-type="redirect">
    Login (redirect)
  </navigator>

  <!-- Switch to tab page -->
  <navigator url="/pages/index/index" open-type="switchTab">
    Go to Home
  </navigator>

  <!-- Re-launch app -->
  <navigator url="/pages/start/start" open-type="reLaunch">
    Restart
  </navigator>

  <!-- Navigate back -->
  <navigator open-type="navigateBack" :delta="1">
    Go Back
  </navigator>

  <!-- Exit app (mini-program) -->
  <navigator open-type="exit" target="miniProgram">
    Exit
  </navigator>
</template>
```

**Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| url | String | | Target page path |
| open-type | String | navigate | navigate/redirect/switchTab/reLaunch/navigateBack/exit |
| delta | Number | 1 | Back level when open-type is navigateBack |
| hover-class | String | navigator-hover | Hover state class |
| hover-stop-propagation | Boolean | false | Stop hover propagation |
| target | String | self | self/miniProgram (mini-program only) |

## Programmatic Navigation

### uni.navigateTo

Navigate to new page.

```javascript
// Basic navigation
uni.navigateTo({
  url: '/pages/detail/detail'
})

// With query parameters
uni.navigateTo({
  url: '/pages/detail/detail?id=123&name=test'
})

// With events (Vue 2 only)
uni.navigateTo({
  url: '/pages/detail/detail',
  events: {
    acceptDataFromOpenedPage(data) {
      console.log(data)
    }
  },
  success(res) {
    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
  }
})
```

### uni.redirectTo

Redirect to new page (closes current page).

```javascript
uni.redirectTo({
  url: '/pages/login/login'
})
```

### uni.reLaunch

Re-launch application to specified page.

```javascript
uni.reLaunch({
  url: '/pages/index/index'
})
```

### uni.switchTab

Switch to tab bar page.

```javascript
uni.switchTab({
  url: '/pages/home/home'
})
```

### uni.navigateBack

Navigate back to previous page.

```javascript
// Go back one page
uni.navigateBack()

// Go back multiple pages
uni.navigateBack({
  delta: 2
})

// With animation (App only)
uni.navigateBack({
  delta: 1,
  animationType: 'pop-out',
  animationDuration: 300
})
```

### uni.preloadPage

Preload page for faster navigation (App only).

```javascript
uni.preloadPage({
  url: '/pages/detail/detail'
})
```

## Getting Page Information

### getCurrentPages

Get current page stack.

```javascript
const pages = getCurrentPages()
const currentPage = pages[pages.length - 1]
console.log(currentPage.route) // Current page path
```

### getApp

Get app instance.

```javascript
const app = getApp()
console.log(app.globalData)
```

## Page Event Channel (Vue 2)

Communicate between pages using event channel.

```javascript
// Page A: Open page B
uni.navigateTo({
  url: '/pages/pageB/pageB',
  success(res) {
    // Listen for events from page B
    res.eventChannel.on('acceptDataFromPageB', (data) => {
      console.log(data)
    })
    // Send data to page B
    res.eventChannel.emit('acceptDataFromPageA', { data: 'hello' })
  }
})

// Page B: Receive and send data
export default {
  onLoad() {
    const eventChannel = this.getOpenerEventChannel()
    // Listen for events from page A
    eventChannel.on('acceptDataFromPageA', (data) => {
      console.log(data)
    })
    // Send data back to page A
    eventChannel.emit('acceptDataFromPageB', { data: 'world' })
  }
}
```

## Navigation Bar

### Custom Navigation Bar

Configure in `pages.json`:

```json
{
  "pages": [{
    "path": "pages/index/index",
    "style": {
      "navigationStyle": "custom"
    }
  }]
}
```

### uni.setNavigationBarTitle

```javascript
uni.setNavigationBarTitle({
  title: 'New Title'
})
```

### uni.setNavigationBarColor

```javascript
uni.setNavigationBarColor({
  frontColor: '#ffffff',
  backgroundColor: '#000000',
  animation: {
    duration: 400,
    timingFunc: 'easeIn'
  }
})
```

### uni.showNavigationBarLoading

```javascript
uni.showNavigationBarLoading()
// ...loading operation
uni.hideNavigationBarLoading()
```

<!--
Source references:
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/navigator.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/router.md
-->
