# live-pusher

## Instructions

推荐 uni直播 ，官方内置，使用简单，且价格便宜，更具高性价比！ 详情 。

实时音视频录制，也称直播推流。

平台差异说明

### Syntax

- 使用 `<live-pusher />`（或 `<live-pusher></live-pusher>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性 | 类型 | 默认值 | 必填 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- | --- |
| url | string |  | 是 | 推流地址，支持RTMP协议。 |  |
| mode | string | SD | 否 | 推流视频模式，可取值：SD（标清）, HD（高清）, FHD（超清）。 |  |
| aspect | string | 3:2 | 否 | 视频宽高比例 |  |
| muted | Boolean | false | 否 | 是否静音。 |  |
| enable-camera | Boolean | true | 否 | 开启摄像头。 |  |
| auto-focus | Boolean | true | 否 | 自动聚集。 |  |
| beauty | Number | 0 | 否 | 美颜，取值范围 0-9（iOS取值范围为1） ，0 表示关闭。 |  |
| whiteness | Number | 0 | 否 | 美白，取值范围 0-9（iOS取值范围为1） ，0 表示关闭。 |  |
| orientation | String | "vertical" | 否 | 画面方向 |  |
| min-bitrate | Number | 200 | 否 | 最小码率。 |  |
| max-bitrate | Number | 1000 | 否 | 最大码率。 |  |
| audio-quality | string | high | 否 | 高音质(48KHz)或低音质(16KHz)，值为high, low | 微信小程序1.7.0 |
| waiting-image | string |  | 否 | 进入后台时推流的等待画面 | 微信小程序1.7.0 |
| waiting-image-hash | string |  | 否 | 等待画面资源的MD5值 | 微信小程序1.7.0 |
| zoom | boolean | false | 否 | 调整焦距 | 微信小程序2.1.0 |
| device-position | string | front | 否 | 前置或后置，值为front, back | 微信小程序2.3.0 |
| background-mute | boolean | false | 否 | 进入后台时是否静音 | 微信小程序1.7.0 |
| remote-mirror | boolean | false | 否 | 设置推流画面是否镜像，产生的效果在 live-player 反应到 | 微信小程序2.10.0 |
| local-mirror | string | auto | 否 | 控制本地预览画面是否镜像 | 微信小程序2.10.0 |
| audio-reverb-type | number | 0 | 否 | 音频混响类型 | 微信小程序2.10.0 |
| enable-mic | boolean | true | 否 | 开启或关闭麦克风 | 微信小程序2.10.0 |
| enable-agc | boolean | false | 否 | 是否开启音频自动增益 | 微信小程序2.10.0 |
| enable-ans | boolean | false | 否 | 是否开启音频噪声抑制 | 微信小程序2.10.0 |
| audio-volume-type | string | voicecall | 否 | 音量类型 | 微信小程序2.10.0 |

#### Events

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| code | Number |  |
| message | string |  |

#### Platform Compatibility

See official docs for platform support table: `https://doc.dcloud.net.cn/uni-app-x/component/live-pusher.html`

### Examples

### Example (Example 1)

```vue
<template>
    <view>
        <live-pusher id='livePusher' ref="livePusher" class="livePusher" url=""
        mode="SD" :muted="true" :enable-camera="true" :auto-focus="true" :beauty="1" whiteness="2"
        aspect="9:16" @statechange="statechange" @netstatus="netstatus" @error = "error"
        ></live-pusher>
        <button class="btn" @click="start">开始推流</button>
        <button class="btn" @click="pause">暂停推流</button>
        <button class="btn" @click="resume">resume</button>
        <button class="btn" @click="stop">停止推流</button>
        <button class="btn" @click="snapshot">快照</button>
        <button class="btn" @click="startPreview">开启摄像头预览</button>
        <button class="btn" @click="stopPreview">关闭摄像头预览</button>
        <button class="btn" @click="switchCamera">切换摄像头</button>
    </view>
</template>
```

### Example (Example 2)

```html
<template>
    <view>
        <live-pusher id='livePusher' ref="livePusher" class="livePusher" url=""
        mode="SD" :muted="true" :enable-camera="true" :auto-focus="true" :beauty="1" whiteness="2"
        aspect="9:16" @statechange="statechange" @netstatus="netstatus" @error = "error"
        ></live-pusher>
        <button class="btn" @click="start">开始推流</button>
        <button class="btn" @click="pause">暂停推流</button>
        <button class="btn" @click="resume">resume</button>
        <button class="btn" @click="stop">停止推流</button>
        <button class="btn" @click="snapshot">快照</button>
        <button class="btn" @click="startPreview">开启摄像头预览</button>
        <button class="btn" @click="stopPreview">关闭摄像头预览</button>
        <button class="btn" @click="switchCamera">切换摄像头</button>
    </view>
</template>
```

### Example (Example 3)

```vue
<script>
    export default {
        data() {
			return {}
        },
        onReady() {
            // 注意：需要在onReady中 或 onLoad 延时
            this.context = uni.createLivePusherContext("livePusher", this);
        },
        methods: {
            statechange(e) {
                console.log("statechange:" + JSON.stringify(e));
            },
            netstatus(e) {
                console.log("netstatus:" + JSON.stringify(e));
            },
            error(e) {
                console.log("error:" + JSON.stringify(e));
            },
            start: function() {
                this.context.start({
                    success: (a) => {
                        console.log("livePusher.start:" + JSON.stringify(a));
                    }
                });
            },
            close: function() {
                this.context.close({
                    success: (a) => {
                        console.log("livePusher.close:" + JSON.stringify(a));
                    }
                });
            },
            snapshot: function() {
                this.context.snapshot({
                    success: (e) => {
                        console.log(JSON.stringify(e));
                    }
                });
            },
            resume: function() {
                this.context.resume({
                    success: (a) => {
                        console.log("livePusher.resume:" + JSON.stringify(a));
                    }
                });
            },
            pause: function() {
                this.context.pause({
                    success: (a) => {
                        console.log("livePusher.pause:" + JSON.stringify(a));
                    }
                });
            },
            stop: function() {
                this.context.stop({
                    success: (a) => {
                        console.log(JSON.stringify(a));
                    }
                });
            },
            switchCamera: function() {
                this.context.switchCamera({
                    success: (a) => {
                        console.log("livePusher.switchCamera:" + JSON.stringify(a));
                    }
                });
            },
            startPreview: function() {
                this.context.startPreview({
                    success: (a) => {
                        console.log("livePusher.startPreview:" + JSON.stringify(a));
                    }
                });
            },
            stopPreview: function() {
                this.context.stopPreview({
                    success: (a) => {
                        console.log("livePusher.stopPreview:" + JSON.stringify(a));
                    }
                });
            }
        }
    }
</script>
```

### Example (Example 4)

```javascript
<script>
    export default {
        data() {
			return {}
        },
        onReady() {
            // 注意：需要在onReady中 或 onLoad 延时
            this.context = uni.createLivePusherContext("livePusher", this);
        },
        methods: {
            statechange(e) {
                console.log("statechange:" + JSON.stringify(e));
            },
            netstatus(e) {
                console.log("netstatus:" + JSON.stringify(e));
            },
            error(e) {
                console.log("error:" + JSON.stringify(e));
            },
            start: function() {
                this.context.start({
                    success: (a) => {
                        console.log("livePusher.start:" + JSON.stringify(a));
                    }
                });
            },
            close: function() {
                this.context.close({
                    success: (a) => {
                        console.log("livePusher.close:" + JSON.stringify(a));
                    }
                });
            },
            snapshot: function() {
                this.context.snapshot({
                    success: (e) => {
                        console.log(JSON.stringify(e));
                    }
                });
            },
            resume: function() {
                this.context.resume({
                    success: (a) => {
                        console.log("livePusher.resume:" + JSON.stringify(a));
                    }
                });
            },
            pause: function() {
                this.context.pause({
                    success: (a) => {
                        console.log("livePusher.pause:" + JSON.stringify(a));
                    }
                });
            },
            stop: function() {
                this.context.stop({
                    success: (a) => {
                        console.log(JSON.stringify(a));
                    }
                });
            },
            switchCamera: function() {
                this.context.switchCamera({
                    success: (a) => {
                        console.log("livePusher.switchCamera:" + JSON.stringify(a));
                    }
                });
            },
            startPreview: function() {
                this.context.startPreview({
                    success: (a) => {
                        console.log("livePusher.startPreview:" + JSON.stringify(a));
                    }
                });
            },
            stopPreview: function() {
                this.context.stopPreview({
                    success: (a) => {
                        console.log("livePusher.stopPreview:" + JSON.stringify(a));
                    }
                });
            }
        }
    }
</script>
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/live-pusher.html)
