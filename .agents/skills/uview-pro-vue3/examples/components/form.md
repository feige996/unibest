# Form Component

**官方文档**: https://uviewpro.cn


## Instructions

This example demonstrates the Form component in uView Pro.

### Key Concepts

- Form structure
- Form validation
- Form rules
- Form submission
- Form fields

### Example: Basic Form

```vue
<template>
  <u-form :model="form" label-width="120">
    <u-form-item label="Name" prop="name">
      <u-input v-model="form.name" />
    </u-form-item>
    <u-form-item label="Email" prop="email">
      <u-input v-model="form.email" />
    </u-form-item>
    <u-form-item>
      <u-button type="primary" @click="handleSubmit">Submit</u-button>
    </u-form-item>
  </u-form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: ''
})

const handleSubmit = () => {
  console.log('Form:', form.value)
}
</script>
```

### Example: Form Validation

```vue
<template>
  <u-form
    ref="formRef"
    :model="form"
    :rules="rules"
    label-width="120"
  >
    <u-form-item label="Name" prop="name">
      <u-input v-model="form.name" />
    </u-form-item>
    <u-form-item label="Email" prop="email">
      <u-input v-model="form.email" />
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
  name: '',
  email: ''
})

const rules = {
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' }
  ],
  email: [
    { required: true, message: 'Please input email', trigger: 'blur' },
    { type: 'email', message: 'Please input valid email', trigger: 'blur' }
  ]
}

const handleSubmit = async () => {
  await formRef.value.validate((valid) => {
    if (valid) {
      console.log('Form valid:', form.value)
    }
  })
}
</script>
```

### Key Points

- Use :model for form data
- Configure :rules for validation
- Use prop for form-item validation
- Handle form submission
- Support form validation methods
