# uni-breadcrumb

## Instructions

组件名：uni-breadcrumb

代码块： uBreadcrumb

点击下载&安装

### Syntax

- 使用 `<uni-breadcrumb />`（或 `<uni-breadcrumb></uni-breadcrumb>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| separator | String | 斜杠'/' | 分隔符 |
| separatorClass | String |  | 图标分隔符 class |

#### Events

See official docs for full events list: `https://uniapp.dcloud.net.cn/component/uniui/uni-breadcrumb.html`

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-breadcrumb.html`

### Examples

### Example (Example 1)

```vue
<uni-breadcrumb separator="/">
  <uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">
    {{route.name}}
  </uni-breadcrumb-item>
</uni-breadcrumb>
```

### Example (Example 2)

```html
<uni-breadcrumb separator="/">
  <uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">
    {{route.name}}
  </uni-breadcrumb-item>
</uni-breadcrumb>
```

### Example (Example 3)

```vue
export default {
  name: "uni-stat-breadcrumb",
  data() {
    return {
      routes: [
        {
          to: "/A",
          name: "A页面",
        },
        {
          to: "/B",
          name: "B页面",
        },
        {
          to: "/C",
          name: "C页面",
        },
      ],
    };
  },
};
```

### Example (Example 4)

```javascript
export default {
  name: "uni-stat-breadcrumb",
  data() {
    return {
      routes: [
        {
          to: "/A",
          name: "A页面",
        },
        {
          to: "/B",
          name: "B页面",
        },
        {
          to: "/C",
          name: "C页面",
        },
      ],
    };
  },
};
```

### Example (Example 5)

```vue
<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6"
        >面包屑导航显示当前页面的路径，快速返回之前的任意可跳转页面</text
      >
    </uni-card>
    <uni-section title="基础用法" type="line" padding>
      <uni-breadcrumb separator="/">
        <uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">
          {{route.name}}
        </uni-breadcrumb-item>
      </uni-breadcrumb>
    </uni-section>
    <uni-section title="自定义分隔符" type="line" padding>
      <uni-breadcrumb separator=">">
        <uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">
          {{route.name}}
        </uni-breadcrumb-item>
      </uni-breadcrumb>
    </uni-section>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        routes: [
          {
            to: "/pages/index/index",
            name: "首页",
          },
          {
            to: "",
            name: "菜单 A",
          },
          {
            to: "",
            name: "菜单 B",
          },
        ],
      };
    },
  };
</script>

<style lang="scss"></style>
```

### Example (Example 6)

```html
<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6"
        >面包屑导航显示当前页面的路径，快速返回之前的任意可跳转页面</text
      >
    </uni-card>
    <uni-section title="基础用法" type="line" padding>
      <uni-breadcrumb separator="/">
        <uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">
          {{route.name}}
        </uni-breadcrumb-item>
      </uni-breadcrumb>
    </uni-section>
    <uni-section title="自定义分隔符" type="line" padding>
      <uni-breadcrumb separator=">">
        <uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">
          {{route.name}}
        </uni-breadcrumb-item>
      </uni-breadcrumb>
    </uni-section>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        routes: [
          {
            to: "/pages/index/index",
            name: "首页",
          },
          {
            to: "",
            name: "菜单 A",
          },
          {
            to: "",
            name: "菜单 B",
          },
        ],
      };
    },
  };
</script>

<style lang="scss"></style>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-breadcrumb.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=breadcrumb)
- [Local Example](examples/uni-ui/uni-breadcrumb.vue)
