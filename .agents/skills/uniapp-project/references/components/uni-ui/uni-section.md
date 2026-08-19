# uni-section

## Instructions

组件名：uni-section

代码块： uSection

点击下载&安装

### Syntax

- 使用 `<uni-section />`（或 `<uni-section></uni-section>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | String | - | 装饰类型，可选值：line（竖线）、circle（圆形）、square（方形） |
| title | String | - | 主标题 |
| titleFontSize | String | 14px | 主标题字体大小 |
| titleColor | String | #333 | 主标题字体颜色 |
| subTitle | String | - | 副标题 |
| subTitleFontSize | String | 12px | 副标题字体大小 |
| subTitleColor | String | #999 | 副标题字体颜色 |
| padding | Boolean/String | false | 默认插槽容器的 padding 值，传入类型为 Boolean 时，设置为 10px 或 0 |

#### Events

| 事件名 | 事件说明 | 返回参数 |
| --- | --- | --- |
| @click | 点击 Section 触发事件 | - |

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/uniui/uni-section.html`

### Examples

### Example (Example 1)

```vue
<uni-section class="mb-10" title="基础用法" sub-title="副标题"></uni-section>

<uni-section class="mb-10" title="竖线装饰" sub-title="副标题" type="line"></uni-section>

<uni-section class="mb-10" title="装饰器插槽" sub-title="副标题">
  <template v-slot:decoration>
    <view class="decoration"></view>
  </template>
</uni-section>

<uni-section class="mb-10" title="默认插槽" sub-title="副标题">默认插槽内容</uni-section>

<uni-section class="mb-10" title="主标题">
  <template v-slot:right>
    right slot
  </template>
</uni-section>
```

### Example (Example 2)

```html
<uni-section class="mb-10" title="基础用法" sub-title="副标题"></uni-section>

<uni-section class="mb-10" title="竖线装饰" sub-title="副标题" type="line"></uni-section>

<uni-section class="mb-10" title="装饰器插槽" sub-title="副标题">
  <template v-slot:decoration>
    <view class="decoration"></view>
  </template>
</uni-section>

<uni-section class="mb-10" title="默认插槽" sub-title="副标题">默认插槽内容</uni-section>

<uni-section class="mb-10" title="主标题">
  <template v-slot:right>
    right slot
  </template>
</uni-section>
```

### Example (Example 3)

```vue
<template>
    <view class="uni-wrap">
        <view class="example-info">
            <text class="example-info-text"> uni-section 组件主要用于文章、列表详情等标题展示 </text>
        </view>
        <uni-section class="mb-10" title="基础用法" sub-title="副标题"></uni-section>
        <uni-section class="mb-10" title="竖线装饰" sub-title="副标题" type="line"></uni-section>
        <uni-section class="mb-10" title="装饰器插槽" sub-title="副标题">
            <template v-slot:decoration>
                <view class="decoration"></view>
            </template>
        </uni-section>
        <uni-section class="mb-10" title="默认插槽" sub-title="副标题" padding="0 0 5px 10px">默认插槽内容</uni-section>
        <uni-section class="mb-10" title="主标题">
            <template v-slot:right>
                right slot
            </template>
        </uni-section>
    </view>
</template>

<script>
    export default {
        data() {
            return {}
        },
        onReady() {

        },
        methods: {

        }
    }
</script>

<style lang="scss">
    $uni-success: #18bc37 !default;

    .uni-wrap {
        flex-direction: column;
        /* #ifdef H5 */
        height: calc(100vh - 44px);
        /* #endif */
        /* #ifndef H5 */
        height: 100vh;
        /* #endif */
        flex: 1;
    }

    .mb-10 {
        margin-bottom: 10px;
    }

    .decoration {
        width: 6px;
        height: 6px;
        margin-right: 4px;
        border-radius: 50%;
        background-color: $uni-success;
    }
</style>
```

### Example (Example 4)

```html
<template>
    <view class="uni-wrap">
        <view class="example-info">
            <text class="example-info-text"> uni-section 组件主要用于文章、列表详情等标题展示 </text>
        </view>
        <uni-section class="mb-10" title="基础用法" sub-title="副标题"></uni-section>
        <uni-section class="mb-10" title="竖线装饰" sub-title="副标题" type="line"></uni-section>
        <uni-section class="mb-10" title="装饰器插槽" sub-title="副标题">
            <template v-slot:decoration>
                <view class="decoration"></view>
            </template>
        </uni-section>
        <uni-section class="mb-10" title="默认插槽" sub-title="副标题" padding="0 0 5px 10px">默认插槽内容</uni-section>
        <uni-section class="mb-10" title="主标题">
            <template v-slot:right>
                right slot
            </template>
        </uni-section>
    </view>
</template>

<script>
    export default {
        data() {
            return {}
        },
        onReady() {

        },
        methods: {

        }
    }
</script>

<style lang="scss">
    $uni-success: #18bc37 !default;

    .uni-wrap {
        flex-direction: column;
        /* #ifdef H5 */
        height: calc(100vh - 44px);
        /* #endif */
        /* #ifndef H5 */
        height: 100vh;
        /* #endif */
        flex: 1;
    }

    .mb-10 {
        margin-bottom: 10px;
    }

    .decoration {
        width: 6px;
        height: 6px;
        margin-right: 4px;
        border-radius: 50%;
        background-color: $uni-success;
    }
</style>
```

Reference:
- [Official Documentation](https://uniapp.dcloud.net.cn/component/uniui/uni-section.html)
- [Plugin Marketplace](https://ext.dcloud.net.cn/plugin?name=section)
- [Local Example](examples/uni-ui/uni-section.vue)
