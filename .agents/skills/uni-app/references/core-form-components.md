---
name: Form Components
description: Input, selection, and form control components
---

# Form Components

## input

Single-line text input.

```vue
<template>
  <input
    v-model="inputValue"
    type="text"
    placeholder="Enter text"
    :maxlength="100"
    :focus="true"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
    @confirm="onConfirm"
  />
</template>
```

**Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| value | String | | Input value |
| type | String | text | Input type: text/number/idcard/digit/tel |
| password | Boolean | false | Password input |
| placeholder | String | | Placeholder text |
| placeholder-style | String | | Placeholder inline styles |
| placeholder-class | String | | Placeholder CSS class |
| maxlength | Number | 140 | Max character length |
| cursor-spacing | Number | 0 | Cursor distance from keyboard bottom (px) |
| focus | Boolean | false | Auto focus |
| confirm-type | String | done | Return key type: send/search/next/go/done |
| confirm-hold | Boolean | false | Keep keyboard open after confirm |

**Events:**
- `@input` - Input value change
- `@focus` - Input focused
- `@blur` - Input blurred
- `@confirm` - Confirm button clicked
- `@keyboardheightchange` - Keyboard height changed

## textarea

Multi-line text input.

```vue
<template>
  <textarea
    v-model="content"
    placeholder="Enter content"
    :maxlength="500"
    :auto-height="true"
    :show-confirm-bar="false"
    @linechange="onLineChange"
  />
</template>
```

**Additional Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| auto-height | Boolean | false | Auto adjust height |
| fixed | Boolean | false | Fixed position when scrolling |
| cursor | Number | | Cursor position |
| show-confirm-bar | Boolean | true | Show recommendation bar (WeChat) |
| selection-start | Number | -1 | Selection start position |
| selection-end | Number | -1 | Selection end position |

## picker

Selection from predefined options.

```vue
<template>
  <!-- Selector mode -->
  <picker mode="selector" :range="options" :value="selected" @change="onChange">
    <view>Selected: {{ options[selected] }}</view>
  </picker>

  <!-- Multi-selector -->
  <picker mode="multiSelector" :range="multiOptions" @change="onMultiChange">
    <view>Multi-select</view>
  </picker>

  <!-- Date picker -->
  <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="onDateChange">
    <view>Date: {{ date }}</view>
  </picker>

  <!-- Region picker -->
  <picker mode="region" :value="region" @change="onRegionChange">
    <view>Region: {{ region.join('-') }}</view>
  </picker>
</template>

<script>
export default {
  data() {
    return {
      options: ['Option 1', 'Option 2', 'Option 3'],
      selected: 0,
      multiOptions: [['A', 'B'], ['1', '2', '3']],
      date: '2024-01-01',
      startDate: '2020-01-01',
      endDate: '2025-12-31',
      region: ['Beijing', 'Beijing', 'Dongcheng']
    }
  },
  methods: {
    onChange(e) {
      this.selected = e.detail.value
    },
    onDateChange(e) {
      this.date = e.detail.value
    },
    onRegionChange(e) {
      this.region = e.detail.value
    }
  }
}
</script>
```

**Mode-specific Properties:**

| Mode | Properties |
|------|------------|
| selector | range, range-key |
| multiSelector | range, range-key |
| time | start, end |
| date | start, end, fields (year/month/day) |
| region | custom-item, disable-sub-districts |

## picker-view

Embedded picker view (inline, not popup).

```vue
<template>
  <picker-view :value="value" @change="onChange">
    <picker-view-column>
      <view v-for="item in years" :key="item">{{ item }}年</view>
    </picker-view-column>
    <picker-view-column>
      <view v-for="item in months" :key="item">{{ item }}月</view>
    </picker-view-column>
  </picker-view>
</template>
```

## radio / checkbox

Selection controls.

```vue
<template>
  <!-- Radio group -->
  <radio-group @change="onRadioChange">
    <label v-for="item in items" :key="item.value">
      <radio :value="item.value" :checked="item.checked" color="#007AFF" />
      {{ item.name }}
    </label>
  </radio-group>

  <!-- Checkbox group -->
  <checkbox-group @change="onCheckboxChange">
    <label v-for="item in items" :key="item.value">
      <checkbox :value="item.value" :checked="item.checked" color="#007AFF" />
      {{ item.name }}
    </label>
  </checkbox-group>
</template>
```

**radio/checkbox Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| value | String | | Identifier value |
| checked | Boolean | false | Selected state |
| disabled | Boolean | false | Disabled state |
| color | Color | | Selected color |

## switch

Toggle switch.

```vue
<template>
  <switch
    :checked="isOn"
    :disabled="false"
    type="switch"
    color="#007AFF"
    @change="onSwitchChange"
  />
</template>
```

**Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| checked | Boolean | false | Checked state |
| disabled | Boolean | false | Disabled state |
| type | String | switch | Style: switch/checkbox |
| color | Color | | Switch color when on |

## slider

Range slider input.

```vue
<template>
  <slider
    :value="50"
    :min="0"
    :max="100"
    :step="1"
    :show-value="true"
    :disabled="false"
    activeColor="#007AFF"
    backgroundColor="#e9e9e9"
    block-size="28"
    @change="onChange"
    @changing="onChanging"
  />
</template>
```

<!--
Source references:
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/input.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/textarea.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/picker.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/radio.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/checkbox.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/switch.md
- https://gitcode.com/dcloud/unidocs-zh/blob/main/docs/component/slider.md
-->
