# icon

## Instructions

图标。

平台差异说明

属性说明

### Syntax

- 使用 `<icon />`（或 `<icon></icon>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | String |  | icon的类型 |
| size | Number | 23 | icon的大小，单位px |
| color | Color |  | icon的颜色，同css的color |
| view-box | number | 1024 | 小红书小程序 |

#### Events

See official docs for full events list: `https://uniapp.dcloud.net.cn/component/icon.html`

#### Platform Compatibility

See official docs for platform support table: `https://uniapp.dcloud.net.cn/component/icon.html`

### Examples

### Example (Example 1)

```vue
<view class="item" v-for="(value,index) in iconType" :key="index">
    <icon :type="value" size="26"/>
    <text>{{value}}</text>
</view>
```

### Example (Example 2)

```html
<view class="item" v-for="(value,index) in iconType" :key="index">
    <icon :type="value" size="26"/>
    <text>{{value}}</text>
</view>
```

### Example (Example 3)

```vue
export default {
    data() {
        return {
            iconType: ['success']
        }
    },
    onLoad() {
        // #ifdef APP-PLUS|| MP-WEIXIN
        this.iconType = ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search','clear']
        // #endif
        // #ifdef MP-ALIPAY
        this.iconType = ['info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear', 'success', 'success_no_circle', 'loading']
        // #endif
        // #ifdef MP-BAIDU
        this.iconType = ['success', 'info', 'warn', 'waiting', 'success_no_circle', 'clear', 'search', 'personal', 'setting', 'top', 'close', 'cancel', 'download', 'checkboxSelected', 'radioSelected', 'radioUnselect']
        // #endif
    }
}
```

### Example (Example 4)

```javascript
export default {
    data() {
        return {
            iconType: ['success']
        }
    },
    onLoad() {
        // #ifdef APP-PLUS|| MP-WEIXIN
        this.iconType = ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search','clear']
        // #endif
        // #ifdef MP-ALIPAY
        this.iconType = ['info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear', 'success', 'success_no_circle', 'loading']
        // #endif
        // #ifdef MP-BAIDU
        this.iconType = ['success', 'info', 'warn', 'waiting', 'success_no_circle', 'clear', 'search', 'personal', 'setting', 'top', 'close', 'cancel', 'download', 'checkboxSelected', 'radioSelected', 'radioUnselect']
        // #endif
    }
}
```

Reference: [Official Documentation](https://uniapp.dcloud.net.cn/component/icon.html)
