# Easycom Configuration

## Easycom 配置

easycom 是 UniApp 的自动引入机制，配置后可以自动引入 uView 组件，无需手动 import。

### 基本配置

在 `pages.json` 中配置 easycom：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
    }
  }
}
```

### 配置说明

- `autoscan: true`：开启自动扫描
- `custom`：自定义规则
- `^u-(.*)`：匹配以 `u-` 开头的组件名
- `uview-ui/components/u-$1/u-$1.vue`：组件路径，`$1` 是匹配的内容

### 使用示例

配置后，可以直接使用组件，无需引入：

```vue
<template>
  <view>
    <!-- 直接使用，无需 import -->
    <u-button type="primary">按钮</u-button>
    <u-input v-model="value" placeholder="请输入"></u-input>
    <u-form :model="form">
      <u-form-item label="用户名">
        <u-input v-model="form.username"></u-input>
      </u-form-item>
    </u-form>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      form: {
        username: ''
      }
    }
  }
}
</script>
```

### 完整 pages.json 示例

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
    }
  },
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页"
      }
    }
  ],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "UniApp",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#f5f5f5"
  }
}
```

### 自定义组件路径

如果 uView 安装在不同位置，需要调整路径：

#### npm 安装

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "node_modules/uview-ui/components/u-$1/u-$1.vue"
    }
  }
}
```

#### uni_modules 安装

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uni_modules/uview-ui/components/u-$1/u-$1.vue"
    }
  }
}
```

### 禁用 easycom

如果不想使用 easycom，可以手动引入：

```vue
<template>
  <view>
    <u-button>按钮</u-button>
  </view>
</template>

<script>
import uButton from 'uview-ui/components/u-button/u-button.vue'

export default {
  components: {
    uButton
  }
}
</script>
```

### 验证配置

创建测试页面验证 easycom 是否生效：

```vue
<template>
  <view class="container">
    <u-button type="primary" @click="test">测试 Easycom</u-button>
  </view>
</template>

<script>
export default {
  methods: {
    test() {
      console.log('Easycom 配置成功！')
    }
  }
}
</script>
```

如果按钮正常显示且无报错，说明 easycom 配置成功。

## 注意事项

1. **路径必须正确**：确保组件路径与实际安装位置一致
2. **组件名称**：uView 组件都以 `u-` 开头
3. **重启项目**：修改 easycom 配置后需要重启项目
4. **优先级**：easycom 优先级高于手动引入
5. **性能**：easycom 不会影响性能，按需加载组件
