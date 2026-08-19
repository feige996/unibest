---
name: UI Feedback
description: Toast, modal, loading, and action sheet APIs
---

# UI Feedback

## Toast Messages

### uni.showToast

Display success/error messages.

```javascript
// Success toast
uni.showToast({
  title: 'Success!',
  icon: 'success',
  duration: 2000,
  mask: false
})

// Loading toast
uni.showToast({
  title: 'Loading...',
  icon: 'loading',
  duration: 10000
})

// Text only (no icon)
uni.showToast({
  title: 'Please wait',
  icon: 'none',
  duration: 2000
})

// Error toast
uni.showToast({
  title: 'Failed!',
  icon: 'error'
})
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| title | String | Required | Message text |
| icon | String | success | success/loading/none/error |
| duration | Number | 1500 | Duration in ms |
| mask | Boolean | false | Prevent touch during display |
| position | String | | top/center/bottom (App) |

### uni.hideToast

```javascript
uni.hideToast()
```

## Loading

### uni.showLoading

```javascript
uni.showLoading({
  title: 'Loading...',
  mask: true // Prevent interaction
})

// Hide after operation
setTimeout(() => {
  uni.hideLoading()
}, 2000)
```

### uni.hideLoading

```javascript
uni.hideLoading()
```

## Modal Dialogs

### uni.showModal

Alert and confirm dialogs.

```javascript
// Alert (single button)
uni.showModal({
  title: 'Notice',
  content: 'Operation completed',
  showCancel: false
})

// Confirm (two buttons)
uni.showModal({
  title: 'Confirm',
  content: 'Are you sure?',
  cancelText: 'Cancel',
  cancelColor: '#999',
  confirmText: 'Confirm',
  confirmColor: '#007AFF',
  success: (res) => {
    if (res.confirm) {
      console.log('User confirmed')
    } else if (res.cancel) {
      console.log('User cancelled')
    }
  }
})

// Editable modal
uni.showModal({
  title: 'Input',
  content: 'Enter your name',
  editable: true,
  placeholderText: 'Name',
  success: (res) => {
    if (res.confirm) {
      console.log('Input:', res.content)
    }
  }
})
```

## Action Sheet

### uni.showActionSheet

Bottom action menu.

```javascript
uni.showActionSheet({
  itemList: ['Take Photo', 'Choose from Album', 'Cancel'],
  itemColor: '#000000',
  success: (res) => {
    // res.tapIndex: 0, 1, 2...
    console.log('Selected:', res.tapIndex)
    switch (res.tapIndex) {
      case 0:
        this.takePhoto()
        break
      case 1:
        this.chooseFromAlbum()
        break
    }
  },
  fail: (err) => {
    console.log('Cancelled')
  }
})
```

## Pull to Refresh

### Enable in pages.json

```json
{
  "pages": [{
    "path": "pages/index/index",
    "style": {
      "enablePullDownRefresh": true,
      "backgroundTextStyle": "dark"
    }
  }]
}
```

### Handle in Page

```javascript
export default {
  onPullDownRefresh() {
    console.log('Pull down triggered')
    this.refreshData().finally(() => {
      uni.stopPullDownRefresh()
    })
  }
}
```

### Programmatic Control

```javascript
// Start pull refresh
uni.startPullDownRefresh()

// Stop pull refresh
uni.stopPullDownRefresh()
```

## Navigation Bar Loading

```javascript
// Show loading in nav bar
uni.showNavigationBarLoading()

// Hide loading
uni.hideNavigationBarLoading()
```

## Tab Bar Operations

### Show/Hide Tab Bar

```javascript
// Hide tab bar
uni.hideTabBar({
  animation: true
})

// Show tab bar
uni.showTabBar({
  animation: true
})
```

### Set Tab Bar Style

```javascript
uni.setTabBarStyle({
  color: '#999',
  selectedColor: '#007AFF',
  backgroundColor: '#fff',
  borderStyle: 'black'
})
```

### Set Tab Bar Item

```javascript
uni.setTabBarItem({
  index: 0,
  text: 'Home',
  iconPath: '/static/home.png',
  selectedIconPath: '/static/home-active.png'
})
```

### Add/Remove Tab Bar Badge

```javascript
// Show badge
uni.showTabBarRedDot({
  index: 2 // Tab index
})

// Hide badge
uni.hideTabBarRedDot({
  index: 2
})

// Set badge text
uni.setTabBarBadge({
  index: 2,
  text: '5'
})

// Remove badge text
uni.removeTabBarBadge({
  index: 2
})
```

## Preview Image

```javascript
uni.previewImage({
  current: 'https://example.com/1.jpg', // Current image
  urls: [
    'https://example.com/1.jpg',
    'https://example.com/2.jpg',
    'https://example.com/3.jpg'
  ],
  indicator: 'default', // default/number/none
  loop: false,
  longPressActions: {
    itemList: ['Save Image', 'Share'],
    success: (data) => {
      console.log('Long press:', data.tapIndex)
    }
  }
})
```

## Save Image to Photos

```javascript
uni.saveImageToPhotosAlbum({
  filePath: 'temp://path/to/image.jpg',
  success: () => {
    uni.showToast({ title: 'Saved' })
  }
})
```

## Best Practices

### Toast Helper

```javascript
const toast = {
  success(message, duration = 2000) {
    uni.showToast({ title: message, icon: 'success', duration })
  },
  error(message, duration = 2000) {
    uni.showToast({ title: message, icon: 'error', duration })
  },
  loading(message = 'Loading...') {
    uni.showLoading({ title: message, mask: true })
  },
  hide() {
    uni.hideLoading()
    uni.hideToast()
  },
  text(message, duration = 2000) {
    uni.showToast({ title: message, icon: 'none', duration })
  }
}

// Usage
toast.loading()
fetchData()
  .then(() => toast.success('Loaded'))
  .catch(() => toast.error('Failed'))
  .finally(() => toast.hide())
```

### Modal Helper

```javascript
const modal = {
  confirm(title, content) {
    return new Promise((resolve) => {
      uni.showModal({
        title,
        content,
        success: (res) => resolve(res.confirm)
      })
    })
  },

  alert(title, content) {
    return new Promise((resolve) => {
      uni.showModal({
        title,
        content,
        showCancel: false,
        success: () => resolve()
      })
    })
  },

  action(items) {
    return new Promise((resolve, reject) => {
      uni.showActionSheet({
        itemList: items,
        success: (res) => resolve(res.tapIndex),
        fail: reject
      })
    })
  }
}

// Usage
async function deleteItem(id) {
  const confirmed = await modal.confirm('Delete', 'Are you sure?')
  if (confirmed) {
    await api.delete(id)
    toast.success('Deleted')
  }
}
```

<!--
Source references:
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/ui/prompt.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/ui/navigationbar.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/api/ui/tabbar.md
-->
