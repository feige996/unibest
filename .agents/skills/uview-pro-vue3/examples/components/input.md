# Input Component

**官方文档**: https://uviewpro.cn


## Instructions

This example demonstrates the Input component in uView Pro.

### Key Concepts

- Input types
- Input sizes
- Input states
- Input events
- Input validation

### Example: Basic Input

```vue
<template>
  <u-input v-model="input" placeholder="Please input" />
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

### Example: Input Types

```vue
<template>
  <u-input v-model="text" type="text" />
  <u-input v-model="number" type="number" />
  <u-input v-model="password" type="password" :password-icon="true" />
  <u-input v-model="textarea" type="textarea" :height="100" />
</template>
```

### Example: Input Sizes

```vue
<template>
  <u-input v-model="input1" size="large" />
  <u-input v-model="input2" size="normal" />
  <u-input v-model="input3" size="small" />
</template>
```

### Example: Input States

```vue
<template>
  <u-input v-model="input" disabled />
  <u-input v-model="input" readonly />
  <u-input v-model="input" :clearable="true" />
  <u-input v-model="input" :border="true" />
</template>
```

### Example: Input with Prefix/Suffix

```vue
<template>
  <u-input v-model="input1" prefix-icon="search" />
  <u-input v-model="input2" suffix-icon="arrow-down" />
</template>
```

### Example: Input Events

```vue
<template>
  <u-input
    v-model="input"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
  />
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')

const handleInput = (value) => {
  console.log('Input:', value)
}
const handleChange = (value) => {
  console.log('Change:', value)
}
const handleFocus = () => {
  console.log('Focus')
}
const handleBlur = () => {
  console.log('Blur')
}
</script>
```

### Key Points

- Use v-model for two-way binding
- Support multiple input types
- Support disabled, readonly, clearable
- Prefix and suffix icon support
- Multiple event handlers
