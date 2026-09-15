# uni-data-picker

## Instructions

组件名：uni-data-picker

代码块： uDataPicker 关联组件： uni-data-pickerview 、 uni-load-more 。

点击下载&安装

### Syntax

- 使用 `<uni-data-picker />`（或 `<uni-data-picker></uni-data-picker>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 可选值 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| v-model | String/ Number | - | - | 绑定数据 |
| spaceInfo | Object | - | - | 服务空间配置， 详情 |
| localdata | Array | - | - | 数据， 详情 |
| preload | Boolean | true/false | false | 预加载数据 |
| readonly | Boolean | true/false | false | 是否禁用 |
| clear-icon | Boolean | true/false | true | 是否显示清除按钮 |
| ellipsis | Boolean | true/false | true | 是否隐藏 tab 标签过长的文本 |
| step-searh | Boolean | true/false | true | 分步查询时，点击节点请求数据 |
| self-field | String | - | - | 分步查询时当前字段名称 |
| parent-field | String | - | - | 分步查询时父字段名称 |
| collection | String | - | - | 表名。支持输入多个表名，用 , 分割 |
| field | String | - | - | 查询字段，多个字段用 , 分割 |
| where | String | - | - | 查询条件，内容较多，另见jql文档： 详情 |
| orderby | String | - | - | 排序字段及正序倒叙设置 |
| popup-title | String |  |  | 弹出层标题 |
| map | Object | - | {text:'text',value:'value'} | 字段映射，将text/value映射到数据中的其他字段 |

#### Events

| 事件称名 | 类型 | 说明 |
| --- | --- | --- |
| @change | EventHandle | 选择完成时触发 {detail: {value}} |
| @nodeclick | EventHandle | 节点被点击时触发 |
| @popupopened | EventHandle | 弹出层弹出时触发 |
| @popupclosed | EventHandle | 弹出层关闭时触发 |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-data-picker.html`

### Examples

### Example (Example 1)

```vue
<template>
  <view>
    <uni-data-picker placeholder="请选择地址" popup-title="请选择城市" collection="opendb-city-china" field="code as value, name as text" orderby="value asc" :step-searh="true" self-field="code" parent-field="parent_code"
 @change="onchange" @nodeclick="onnodeclick">
    </uni-data-picker>
  </view>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      onchange(e) {
        const value = e.detail.value
      },
      onnodeclick(node) {}
    }
  }
</script>
```

### Example (Example 2)

```vue
<template>
  <view>
    <uni-data-picker placeholder="请选择地址" popup-title="请选择城市" collection="opendb-city-china" field="code as value, name as text" orderby="value asc" :step-searh="true" self-field="code" parent-field="parent_code"
 @change="onchange" @nodeclick="onnodeclick">
    </uni-data-picker>
  </view>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      onchange(e) {
        const value = e.detail.value
      },
      onnodeclick(node) {}
    }
  }
</script>
```

### Example (Example 3)

```vue
<template>
  <view>
    <uni-data-picker :localdata="items" popup-title="请选择班级" @change="onchange" @nodeclick="onnodeclick"></uni-data-picker>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
          text: "一年级",
          value: "1-0",
          children: [
            {
              text: "1.1班",
              value: "1-1"
            },
            {
              text: "1.2班",
              value: "1-2"
            }
          ]
        },
        {
          text: "二年级",
          value: "2-0"
        },
        {
          text: "三年级",
          value: "3-0"
        }]
      }
    },
    methods: {
      onchange(e) {
        const value = e.detail.value
      },
      onnodeclick(node) {
      }
    }
  }
</script>
```

### Example (Example 4)

```vue
<template>
  <view>
    <uni-data-picker :localdata="items" popup-title="请选择班级" @change="onchange" @nodeclick="onnodeclick"></uni-data-picker>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
          text: "一年级",
          value: "1-0",
          children: [
            {
              text: "1.1班",
              value: "1-1"
            },
            {
              text: "1.2班",
              value: "1-2"
            }
          ]
        },
        {
          text: "二年级",
          value: "2-0"
        },
        {
          text: "三年级",
          value: "3-0"
        }]
      }
    },
    methods: {
      onchange(e) {
        const value = e.detail.value
      },
      onnodeclick(node) {
      }
    }
  }
</script>
```

### Example (Example 5)

```vue
<uni-data-picker v-slot:default="{data, error, options}" popup-title="请选择所在地区">
  <view v-if="error" class="error">
    <text>{{error}}</text>
  </view>
  <view v-else-if="data.length" class="selected">
    <view v-for="(item,index) in data" :key="index" class="selected-item">
      <text>{{item.text}}</text>
    </view>
  </view>
  <view v-else>
    <text>请选择</text>
  </view>
</uni-data-picker>
```

### Example (Example 6)

```html
<uni-data-picker v-slot:default="{data, error, options}" popup-title="请选择所在地区">
  <view v-if="error" class="error">
    <text>{{error}}</text>
  </view>
  <view v-else-if="data.length" class="selected">
    <view v-for="(item,index) in data" :key="index" class="selected-item">
      <text>{{item.text}}</text>
    </view>
  </view>
  <view v-else>
    <text>请选择</text>
  </view>
</uni-data-picker>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-data-picker.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=data-picker)
- [Local Example](examples/uni-ui/uni-data-picker.vue)
