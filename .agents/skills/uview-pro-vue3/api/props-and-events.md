# Props and Events

## API Reference

Common props and events in uView Pro components.

### Common Props

#### custom-class

**Type:** `string`

Custom CSS class name.

#### custom-style

**Type:** `string | object`

Custom inline style.

#### disabled

**Type:** `boolean`

**Default:** `false`

Whether component is disabled.

### Common Events

#### @click

**Type:** `Function`

Click event handler.

**Example:**
```vue
<u-button @click="handleClick">Button</u-button>
```

#### @change

**Type:** `Function`

Change event handler.

**Example:**
```vue
<u-input v-model="value" @change="handleChange" />
```

#### @focus

**Type:** `Function`

Focus event handler.

**Example:**
```vue
<u-input @focus="handleFocus" />
```

#### @blur

**Type:** `Function`

Blur event handler.

**Example:**
```vue
<u-input @blur="handleBlur" />
```

### Event Object

Event handlers receive an event object:

```javascript
handleEvent(event) {
  // event.target - Target element
  // event.currentTarget - Current target element
  // event.detail - Event detail (component-specific)
}
```

### Component-Specific Events

Different components emit different events:
- **Input**: @input, @change, @focus, @blur
- **Select**: @change, @open, @close
- **Form**: @validate
- **Button**: @click

**See also:** `examples/components/` for component-specific examples
