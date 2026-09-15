# live-player

## Instructions

推荐 uni直播 ，官方内置，使用简单，且价格便宜，更具高性价比！ 详情 。

实时音视频播放，也称直播拉流。

使用live-player 组件需注意：如果发布到小程序，需要先通过各家小程序的审核。指定类目的小程序才能使用（ 微信小程序类目 、 百度小程序类目 ），审核通过后在各家小程序管理后台自助开通该组件权限。

### Syntax

- 使用 `<live-player />`（或 `<live-player></live-player>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| id | String |  | live-player 属性的唯一标志符 |  |
| src | String |  | 音视频地址。百度小程序支持 m3u8 格式；微信小程序支持 flv, rtmp 格式 |  |
| mode | String | live | live（直播），RTC（实时通话，该模式时延更低） | 微信小程序 |
| autoplay | Boolean | false | 自动播放 |  |
| muted | Boolean | false | 是否静音 |  |
| orientation | String | vertical | 画面方向，可选值有 vertical，horizontal |  |
| object-fit | String | contain | 填充模式，可选值:contain、fillCrop |  |
| background-mute | Boolean | false | 进入后台时是否静音 |  |
| sound-mode | string | speaker | 声音输出方式;可选值speaker、ear | 微信小程序、QQ小程序1.5.0（仅支持speaker） |
| min-cache | Number | 1 | 最小缓冲区，单位s |  |
| max-cache | Number | 3 | 最大缓冲区，单位s |  |
| picture-in-picture-mode | string/Array | 3 | 设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]） | 微信小程序（2.10.3） |

#### Events

| 事件名 | 类型 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| @statechange | EventHandle |  | 播放状态变化事件，detail = {code} |  |
| @netstatus | EventHandle |  | 网络状态通知，detail = {info} |  |
| @fullscreenchange | EventHandle |  | 全屏变化事件，detail = {direction, fullScreen}。 |  |
| @audiovolumenotify | EventHandle |  | 播放音量大小通知，detail = {} | 微信小程序（2.10.0） |
| @enterpictureinpicture | EventHandle |  | 播放器进入小窗 | 微信小程序（2.11.0） |
| @leavepictureinpicture | EventHandle |  | 播放器退出小窗 | 2.11.0 |

#### Platform Compatibility

See official docs for platform support table: `https://doc.dcloud.net.cn/uni-app-x/component/live-player.html`

### Examples

### Example (Example 1)

```vue
<live-player
  src="https://domain/pull_stream"
  autoplay
  @statechange="statechange"
  @error="error"
  style="width: 300px; height: 225px;"
/>
```

### Example (Example 2)

```html
<live-player
  src="https://domain/pull_stream"
  autoplay
  @statechange="statechange"
  @error="error"
  style="width: 300px; height: 225px;"
/>
```

### Example (Example 3)

```vue
export default {
    methods:{
        statechange(e){
            console.log('live-player code:', e.detail.code)
        },
        error(e){
            console.error('live-player error:', e.detail.errMsg)
        }
    }
}
```

### Example (Example 4)

```javascript
export default {
    methods:{
        statechange(e){
            console.log('live-player code:', e.detail.code)
        },
        error(e){
            console.error('live-player error:', e.detail.errMsg)
        }
    }
}
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/live-player.html)
