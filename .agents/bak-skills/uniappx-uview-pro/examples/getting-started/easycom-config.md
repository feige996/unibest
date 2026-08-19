# Easycom Configuration | Easycom 配置

## Instructions

This example demonstrates how to configure easycom in UniAppX for automatic uView Pro component import.

### Key Concepts

- Easycom automatic component import
- Component path configuration
- Autoscan configuration
- Custom component rules
- TypeScript type inference

### 基本配置

在 `pages.json` 中配置 easycom：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-pro/components/u-$1/u-$1.vue"
    }
  }
}
```

### 配置说明

- `autoscan: true`：开启自动扫描
- `custom`：自定义规则
- `^u-(.*)`：匹配以 `u-` 开头的组件名
- `uview-pro/components/u-$1/u-$1.vue`：组件路径，`$1` 是匹配的内容

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

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const form = ref({
  username: ''
})
</script>
```

### 完整 pages.json 示例

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "uview-pro/components/u-$1/u-$1.vue"
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
    "navigationBarTitleText": "UniAppX",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#f5f5f5"
  }
}
```

### 自定义组件路径

如果 uView Pro 安装在不同位置，需要调整路径：

#### npm 安装

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^u-(.*)": "node_modules/uview-pro/components/u-$1/u-$1.vue"
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
      "^u-(.*)": "uni_modules/uview-pro/components/u-$1/u-$1.vue"
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

<script setup lang="ts">
import uButton from 'uview-pro/components/u-button/u-button.vue'
</script>
```

### TypeScript 类型支持

使用 easycom 时，TypeScript 类型会自动推断：

```vue
<template>
  <view>
    <u-button type="primary" @click="handleClick">按钮</u-button>
  </view>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('按钮被点击')
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

<script setup lang="ts">
const test = () => {
  console.log('Easycom 配置成功！')
}
</script>
```

如果按钮正常显示且无报错，说明 easycom 配置成功。

## 注意事项

1. **路径必须正确**：确保组件路径与实际安装位置一致
2. **组件名称**：uView Pro 组件都以 `u-` 开头
3. **重启项目**：修改 easycom 配置后需要重启项目
4. **优先级**：easycom 优先级高于手动引入
5. **性能**：easycom 不会影响性能，按需加载组件
6. **TypeScript**：TypeScript 类型会自动推断，无需额外配置
