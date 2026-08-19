# Component Usage Templates

## Button Usage

```vue
<template>
  <u-button type="primary" @click="handleClick">
    Click Me
  </u-button>
</template>

<script setup>
const handleClick = () => {
  console.log('Clicked')
}
</script>
```

## Form Usage

```vue
<template>
  <u-form :model="form" :rules="rules" ref="formRef">
    <u-form-item label="Name" prop="name">
      <u-input v-model="form.name" />
    </u-form-item>
    <u-form-item>
      <u-button type="primary" @click="handleSubmit">Submit</u-button>
    </u-form-item>
  </u-form>
</template>

<script setup>
import { ref } from 'vue'

const formRef = ref()
const form = ref({
  name: ''
})

const rules = {
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' }
  ]
}

const handleSubmit = async () => {
  await formRef.value.validate((valid) => {
    if (valid) {
      console.log('Form:', form.value)
    }
  })
}
</script>
```

## List Usage

```vue
<template>
  <u-list>
    <u-list-item
      v-for="(item, index) in items"
      :key="index"
      @click="handleItemClick(item)"
    >
      {{ item.title }}
    </u-list-item>
  </u-list>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  { title: 'Item 1' },
  { title: 'Item 2' }
])

const handleItemClick = (item) => {
  console.log('Item:', item)
}
</script>
```

## Toast Usage

```vue
<template>
  <u-button @click="showToast">Show Toast</u-button>
</template>

<script setup>
import { showToast } from 'uview-pro'

const showToast = () => {
  showToast({
    title: 'Success',
    type: 'success'
  })
}
</script>
```
