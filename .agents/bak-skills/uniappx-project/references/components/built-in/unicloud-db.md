# unicloud-db

## Instructions

<unicloud-db> ç»ä»¶æ¯ä¸ä¸ªæ°æ®åºæ¥è¯¢ç»ä»¶ï¼å®æ¯å¯¹ clientDB çjsåºçåå°è£ ã

åç«¯éè¿ç»ä»¶æ¹å¼ç´æ¥è·åuniCloudçäºç«¯æ°æ®åºä¸­çæ°æ®ï¼å¹¶ç»å®å¨çé¢ä¸è¿è¡æ¸²æã

å¨ä¼ ç»å¼åä¸­ï¼å¼åè éè¦å¨åç«¯å®ä¹dataãéè¿requestèç½è·åæ¥å£æ°æ®ãç¶åèµå¼ç»dataãåæ¶åç«¯è¿éè¦åæ¥å£æ¥æ¥åºååé¦æ°æ®ã

### Syntax

- 使用 `<unicloud-db />`（或 `<unicloud-db></unicloud-db>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

See official docs for full properties list: `https://doc.dcloud.net.cn/uniCloud/unicloud-db`

#### Events

See official docs for full events list: `https://doc.dcloud.net.cn/uniCloud/unicloud-db`

#### Slots

| å±æ§ | ç±»å | æè¿° |
| --- | --- | --- |
| data | Array|Object | æ¥è¯¢ç»æï¼é»è®¤å¼ä¸º Array , å½ getone æå®ä¸º true æ¶ï¼å¼ä¸ºæ°ç»ä¸­ç¬¬ä¸æ¡æ°æ®ï¼ç±»åä¸º Object ï¼åå°äºä¸å± |
| pagination | Object | åé¡µå±æ§ |
| loading | Boolean | æ¥è¯¢ä¸­çç¶æãå¯æ ¹æ®æ­¤ç¶æï¼å¨templateä¸­éè¿v-ifæ¾ç¤ºç­å¾ å å®¹ï¼å¦ <view v-if="loading">å è½½ä¸­...</view> |
| hasMore | Boolean | æ¯å¦ææ´å¤æ°æ®ãå¯æ ¹æ®æ­¤ç¶æï¼å¨templateä¸­éè¿v-ifæ¾ç¤ºæ²¡ææ´å¤æ°æ®äºï¼å¦ <uni-load-more v-if="!hasMore" status="noMore"></uni-load-more> , <uni-load-more> è¯¦æ https://ext.dcloud.net.cn/plugin?id=29 |
| error | Object | æ¥è¯¢éè¯¯ãå¯æ ¹æ®æ­¤ç¶æï¼å¨templateä¸­éè¿v-ifæ¾ç¤ºç­å¾ å å®¹ï¼å¦ <view v-if="error">å è½½éè¯¯</view> |
| options | Object | å¨å°ç¨åºä¸­ï¼ææ§½ä¸è½è®¿é®å¤é¢çæ°æ®ï¼ééè¿æ­¤åæ°ä¼ é, ä¸æ¯æä¼ éå½æ° |

#### Platform Compatibility

See official docs for platform support table: `https://doc.dcloud.net.cn/uniCloud/unicloud-db`

### Examples

### Example (Example 1)

```vue
<unicloud-db v-slot:default="{data, loading, error, options}" collection="table1" field="field1" :getone="true" where="id=='1'">
  <view>
    {{ data}}
  </view>
</unicloud-db>
```

### Example (Example 2)

```html
<unicloud-db v-slot:default="{data, loading, error, options}" collection="table1" field="field1" :getone="true" where="id=='1'">
  <view>
    {{ data}}
  </view>
</unicloud-db>
```

### Example (Example 3)

```vue
<template>
  <view>
    <unicloud-db v-slot:default="{data, loading, error, options}" collection="user" field="name" :getone="true" where="id=='1'">
      <view>
          {{ data.name}}
      </view>
    </unicloud-db>
  </view>
</template>
```

### Example (Example 4)

```html
<template>
  <view>
    <unicloud-db v-slot:default="{data, loading, error, options}" collection="user" field="name" :getone="true" where="id=='1'">
      <view>
          {{ data.name}}
      </view>
    </unicloud-db>
  </view>
</template>
```

### Example (Example 5)

```vue
<unicloud-db v-slot:default="{data, pagination, loading, hasMore, error, options}"></unicloud-db>
```

### Example (Example 6)

```html
<unicloud-db v-slot:default="{data, pagination, loading, hasMore, error, options}"></unicloud-db>
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uniCloud/unicloud-db)
