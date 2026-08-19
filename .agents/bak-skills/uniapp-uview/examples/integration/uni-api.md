# UniApp API Integration

## UniApp API 与 uView 整合

在 UniApp 项目中使用 UniApp API 与 uView UI 组件配合使用。

### 网络请求

#### 使用 uni.request

```javascript
// 基础请求
uni.request({
  url: 'https://api.example.com/user/info',
  method: 'GET',
  data: {
    id: 1
  },
  success: (res) => {
    console.log(res.data)
    this.$u.toast('请求成功')
  },
  fail: (err) => {
    console.error(err)
    this.$u.toast({
      type: 'error',
      message: '请求失败'
    })
  }
})
```

#### 配合 uView Loading

```vue
<template>
  <view>
    <u-button @click="fetchData">加载数据</u-button>
    <u-loading :show="loading"></u-loading>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    fetchData() {
      this.loading = true
      uni.request({
        url: 'https://api.example.com/data',
        success: (res) => {
          this.$u.toast('加载成功')
        },
        fail: (err) => {
          this.$u.toast({
            type: 'error',
            message: '加载失败'
          })
        },
        complete: () => {
          this.loading = false
        }
      })
    }
  }
}
</script>
```

### 存储 API

#### 使用 uni.setStorage

```javascript
// 保存数据
uni.setStorage({
  key: 'token',
  data: 'xxx',
  success: () => {
    this.$u.toast('保存成功')
  }
})

// 获取数据
uni.getStorage({
  key: 'token',
  success: (res) => {
    console.log(res.data)
  }
})

// 移除数据
uni.removeStorage({
  key: 'token',
  success: () => {
    this.$u.toast('删除成功')
  }
})
```

#### 配合 uView 表单

```vue
<template>
  <view>
    <u-form :model="form">
      <u-form-item label="用户名">
        <u-input v-model="form.username"></u-input>
      </u-form-item>
      <u-button @click="saveForm">保存</u-button>
    </u-form>
  </view>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: ''
      }
    }
  },
  onLoad() {
    // 加载保存的数据
    uni.getStorage({
      key: 'formData',
      success: (res) => {
        this.form = res.data
      }
    })
  },
  methods: {
    saveForm() {
      uni.setStorage({
        key: 'formData',
        data: this.form,
        success: () => {
          this.$u.toast('保存成功')
        }
      })
    }
  }
}
</script>
```

### 图片选择

#### 使用 uni.chooseImage

```vue
<template>
  <view>
    <u-upload 
      :file-list="fileList"
      @after-read="afterRead"
      @delete="deletePic"
      name="file"
      multiple
      :max-count="9"
    ></u-upload>
  </view>
</template>

<script>
export default {
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    afterRead(event) {
      // 上传图片
      const file = event.file
      uni.uploadFile({
        url: 'https://api.example.com/upload',
        filePath: file.url,
        name: 'file',
        success: (res) => {
          this.$u.toast('上传成功')
        }
      })
    },
    deletePic(event) {
      this.fileList.splice(event.index, 1)
    }
  }
}
</script>
```

### 位置信息

#### 使用 uni.getLocation

```vue
<template>
  <view>
    <u-button @click="getLocation">获取位置</u-button>
    <view v-if="location">
      <text>经度: {{ location.longitude }}</text>
      <text>纬度: {{ location.latitude }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      location: null
    }
  },
  methods: {
    getLocation() {
      uni.getLocation({
        type: 'gcj02',
        success: (res) => {
          this.location = res
          this.$u.toast('获取位置成功')
        },
        fail: (err) => {
          this.$u.toast({
            type: 'error',
            message: '获取位置失败'
          })
        }
      })
    }
  }
}
</script>
```

### 分享功能

#### 使用 uni.share

```vue
<template>
  <view>
    <u-button @click="share">分享</u-button>
  </view>
</template>

<script>
export default {
  methods: {
    share() {
      // #ifdef MP-WEIXIN
      uni.share({
        provider: 'weixin',
        scene: 'WXSceneSession',
        type: 0,
        href: 'https://example.com',
        title: '分享标题',
        summary: '分享描述',
        imageUrl: 'https://example.com/image.png',
        success: () => {
          this.$u.toast('分享成功')
        }
      })
      // #endif
    }
  }
}
</script>
```

### 页面生命周期

#### 配合 uView 组件

```vue
<template>
  <view>
    <u-list 
      :list="list"
      @refresh="onRefresh"
      @loadmore="onLoadMore"
    ></u-list>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  onLoad() {
    // 页面加载时获取数据
    this.loadData()
  },
  onShow() {
    // 页面显示时刷新数据
    this.loadData()
  },
  onPullDownRefresh() {
    // 下拉刷新
    this.onRefresh()
  },
  onReachBottom() {
    // 上拉加载
    this.onLoadMore()
  },
  methods: {
    loadData() {
      uni.request({
        url: 'https://api.example.com/list',
        success: (res) => {
          this.list = res.data
        }
      })
    },
    onRefresh() {
      this.loadData()
      setTimeout(() => {
        uni.stopPullDownRefresh()
      }, 1000)
    },
    onLoadMore() {
      // 加载更多逻辑
    }
  }
}
</script>
```

### 条件编译

#### 平台特定 API

```vue
<template>
  <view>
    <u-button @click="handlePlatform">平台操作</u-button>
  </view>
</template>

<script>
export default {
  methods: {
    handlePlatform() {
      // #ifdef H5
      // H5 平台特定代码
      this.$u.toast('H5 平台')
      // #endif
      
      // #ifdef MP-WEIXIN
      // 微信小程序特定代码
      uni.login({
        success: (res) => {
          this.$u.toast('微信登录')
        }
      })
      // #endif
      
      // #ifdef APP-PLUS
      // App 平台特定代码
      plus.share.sendWithSystem({
        content: '分享内容'
      })
      // #endif
    }
  }
}
</script>
```

## 注意事项

1. **API 兼容性**：注意不同平台 API 的兼容性
2. **权限配置**：某些 API 需要在 manifest.json 中配置权限
3. **错误处理**：始终处理 API 调用的错误情况
4. **条件编译**：使用条件编译处理平台差异
5. **用户体验**：配合 uView 组件提供良好的用户反馈
