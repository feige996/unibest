# Easycom Configuration

## Easycom 配置

easycom 是 UniApp 的自动引入机制，配置后可以自动引入 uCharts 组件，无需手动 import。

### 基本配置

在 `pages.json` 中配置 easycom：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "qiun-data-charts": "@/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue"
    }
  }
}
```

### 配置说明

- `autoscan: true`：开启自动扫描
- `custom`：自定义规则
- `qiun-data-charts`：组件名称
- `@/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue`：组件路径

### 使用示例

配置后，可以直接使用组件，无需引入：

```vue
<template>
  <view class="container">
    <qiun-data-charts 
      type="line"
      :opts="opts"
      :chartData="chartData"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        series: [{
          name: '数据',
          data: [120, 200, 150, 80, 70]
        }]
      },
      opts: {
        color: ['#409EFF']
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
      "qiun-data-charts": "@/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue"
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

如果 uCharts 安装在不同位置，需要调整路径：

#### npm 安装

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "qiun-data-charts": "@/node_modules/@qiun/ucharts/components/qiun-data-charts/qiun-data-charts.vue"
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
      "qiun-data-charts": "@/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue"
    }
  }
}
```

### 禁用 easycom

如果不想使用 easycom，可以手动引入：

```vue
<template>
  <view>
    <qiun-data-charts 
      type="line"
      :opts="opts"
      :chartData="chartData"
    />
  </view>
</template>

<script>
import qiunDataCharts from '@/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue'

export default {
  components: {
    qiunDataCharts
  },
  data() {
    return {
      chartData: {},
      opts: {}
    }
  }
}
</script>
```

### 验证配置

创建测试页面验证 easycom 是否生效：

```vue
<template>
  <view class="container">
    <qiun-data-charts 
      type="line"
      :opts="opts"
      :chartData="chartData"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        categories: ['Mon', 'Tue', 'Wed'],
        series: [{
          name: '数据',
          data: [120, 200, 150]
        }]
      },
      opts: {
        color: ['#409EFF']
      }
    }
  }
}
</script>
```

如果图表正常显示且无报错，说明 easycom 配置成功。

## 注意事项

1. **路径必须正确**：确保组件路径与实际安装位置一致
2. **组件名称**：uCharts 组件名称为 `qiun-data-charts`
3. **重启项目**：修改 easycom 配置后需要重启项目
4. **优先级**：easycom 优先级高于手动引入
5. **性能**：easycom 不会影响性能，按需加载组件
