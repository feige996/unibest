# Component API

## API Reference

uView Pro component props, events, and methods.

### Common Props

Most components support:
- `custom-class` - Custom class name
- `custom-style` - Custom style object
- `disabled` - Disabled state

### Common Events

Most components emit:
- `@click` - Click event
- `@change` - Change event
- `@focus` - Focus event
- `@blur` - Blur event

### Button Component

**Props:**
- `type` - Button type (primary, success, info, warning, error)
- `size` - Button size (large, normal, small, mini)
- `disabled` - Disabled state
- `loading` - Loading state
- `plain` - Plain button
- `shape` - Button shape (circle, round)
- `icon` - Icon name

**Events:**
- `@click` - Click event

### Input Component

**Props:**
- `v-model` - Input value
- `type` - Input type (text, number, password, textarea)
- `size` - Input size (large, normal, small)
- `disabled` - Disabled state
- `readonly` - Readonly state
- `clearable` - Show clear button
- `border` - Show border
- `prefix-icon` - Prefix icon
- `suffix-icon` - Suffix icon

**Events:**
- `@input` - Input event
- `@change` - Change event
- `@focus` - Focus event
- `@blur` - Blur event

### Form Component

**Props:**
- `model` - Form data object
- `rules` - Validation rules
- `label-width` - Label width

**Methods:**
- `validate` - Validate form
- `validateField` - Validate specific field
- `resetFields` - Reset form fields
- `clearValidate` - Clear validation

**Events:**
- `@validate` - Validation event

**See also:** `examples/components/` for detailed component examples
