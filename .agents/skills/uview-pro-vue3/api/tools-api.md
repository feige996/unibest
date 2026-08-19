# Tools API

## API Reference

uView Pro tools and utility methods.

### HTTP Request

**request(options)**
- `url` - Request URL
- `method` - Request method (GET, POST, PUT, DELETE)
- `data` - Request data
- `header` - Request headers
- `timeout` - Request timeout

**Interceptors:**
- `request.interceptors.request.use()` - Request interceptor
- `request.interceptors.response.use()` - Response interceptor

### Storage

**setStorage(key, value)**
- Set storage value

**getStorage(key)**
- Get storage value

**removeStorage(key)**
- Remove storage value

**clearStorage()**
- Clear all storage

### Router

**navigateTo(options)**
- Navigate to page

**redirectTo(options)**
- Redirect to page

**navigateBack(options)**
- Navigate back

**switchTab(options)**
- Switch tab

### Validator

**validate(value, rules)**
- Validate value with rules

### Format

**formatDate(date, format)**
- Format date

**formatNumber(number, format)**
- Format number

### Color

**colorToRgb(color)**
- Convert color to RGB

**colorToHex(color)**
- Convert color to HEX

**See also:** `examples/tools/` for detailed tool examples
