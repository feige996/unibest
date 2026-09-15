# web-view

## Instructions

web-view 是一个 web 浏览器组件，可以用来承载网页的容器，会自动铺满整个页面（nvue 使用需要手动指定宽高）。

各小程序平台，web-view 加载的 url 需要在后台配置域名白名单，包括内部再次 iframe 内嵌的其他 url 。

属性说明

### Syntax

- 使用 `<web-view />`（或 `<web-view></web-view>`，当需要包裹子节点时）。
- 遇到平台差异时，建议使用条件编译（`#ifdef / #endif`）显式处理。

#### Properties

| 属性名 | 类型 | 说明 | 平台差异说明 |
| --- | --- | --- | --- |
| src | String | webview 指向网页的链接 |  |
| allow | String | 用于为 iframe 指定其 特征策略 | H5 |
| sandbox | String | 该属性对呈现在 iframe 框架中的内容启用一些额外的限制条件。 | H5 |
| fullscreen | Boolean | 是否铺满整个页面，默认值： true 。 | H5 (HBuilder X 3.5.4+)、App-HarmonyOS |
| webview-styles | Object | webview 的样式 | App-vue |
| update-title | Boolean | 是否自动更新当前页面标题。默认值： true | App-vue (HBuilder X 3.3.8+) |

#### Events

| 事件名 | 类型 | 说明 | 平台差异说明 |
| --- | --- | --- | --- |
| @message | EventHandler | 网页向应用 postMessage 时，会在特定时机（后退、组件销毁、分享）触发并收到消息。 | H5 暂不支持（可以直接使用 window.postMessage ） |
| @onPostMessage | EventHandler | 网页向应用实时 postMessage | App-nvue |
| @load | EventHandler | 网页加载成功时候触发此事件。 | 微信小程序、支付宝小程序、抖音小程序、QQ小程序、H5、小红书小程序 |
| @error | EventHandler | 网页加载失败的时候触发此事件。 | 微信小程序、支付宝小程序、抖音小程序、QQ小程序、小红书小程序 |

#### Platform Compatibility

| 方法名 | 说明 | 平台差异说明 |
| --- | --- | --- |
| uni.navigateTo | navigateTo |  |
| uni.redirectTo | redirectTo |  |
| uni.reLaunch | reLaunch |  |
| uni.switchTab | switchTab |  |
| uni.navigateBack | navigateBack |  |
| uni.postMessage | 向应用发送消息 | 抖音小程序不支持、H5 暂不支持（可以直接使用 window.postMessage ） |
| uni.getEnv | 获取当前环境 | 抖音小程序与飞书小程序不支持 |

### Examples

### Example (Example 1)

```vue
<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="https://uniapp.dcloud.io/static/web-view.html"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		}
	}
</script>

<style>

</style>
```

### Example (Example 2)

```html
<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="https://uniapp.dcloud.io/static/web-view.html"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		}
	}
</script>

<style>

</style>
```

### Example (Example 3)

```vue
┌─components
├─hybrid
│  └─html
│     ├─css
│     │  └─test.css
│     ├─img
│     │  └─icon.png
│     ├─js
│     │  └─test.js
│     └─local.html
├─pages
│  └─index
│     └─index.vue
├─static
├─main.js
├─App.vue
├─manifest.json
└─pages.json
```

### Example (Example 4)

```vue
<template>
	<view>
		<web-view src="/hybrid/html/local.html"></web-view>
	</view>
</template>
```

### Example (Example 5)

```html
<template>
	<view>
		<web-view src="/hybrid/html/local.html"></web-view>
	</view>
</template>
```

### Example (Example 6)

```vue
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <title>网络网页</title>
    <style type="text/css">
      .btn {
        display: block;
        margin: 20px auto;
        padding: 5px;
        background-color: #007aff;
        border: 0;
        color: #ffffff;
        height: 40px;
        width: 200px;
      }

      .btn-red {
        background-color: #dd524d;
      }

      .btn-yellow {
        background-color: #f0ad4e;
      }

      .desc {
        padding: 10px;
        color: #999999;
      }

      .post-message-section {
        visibility: hidden;
      }
    </style>
  </head>
  <body>
    <p class="desc">web-view 组件加载网络 html 示例。点击下列按钮，跳转至其它页面。</p>
    <div class="btn-list">
      <button class="btn" type="button" data-action="navigateTo">navigateTo</button>
      <button class="btn" type="button" data-action="redirectTo">redirectTo</button>
      <button class="btn" type="button" data-action="navigateBack">navigateBack</button>
      <button class="btn" type="button" data-action="reLaunch">reLaunch</button>
      <button class="btn" type="button" data-action="switchTab">switchTab</button>
    </div>
    <div class="post-message-section">
      <p class="desc">网页向应用发送消息，注意：小程序端应用会在此页面后退时接收到消息。</p>
      <div class="btn-list">
        <button class="btn btn-red" type="button" id="postMessage">postMessage</button>
      </div>
    </div>
    <script type="text/javascript">
      var userAgent = navigator.userAgent;
      if (userAgent.indexOf('AlipayClient') > -1) {
        // 支付宝小程序的 JS-SDK 防止 404 需要动态加载，如果不需要兼容支付宝小程序，则无需引用此 JS 文件。
        document.writeln('<script src="https://appx/web-view.min.js"' + '>' + '<' + '/' + 'script>');
      } else if (/QQ/i.test(userAgent) && /miniProgram/i.test(userAgent)) {
        // QQ 小程序
        document.write(
          '<script type="text/javascript" src="https://qqq.gtimg.cn/miniprogram/webview_jssdk/qqjssdk-1.0.0.js"><\/script>'
        );
      } else if (/miniProgram/i.test(userAgent) && /micromessenger/i.test(userAgent)) {
        // 微信小程序 JS-SDK 如果不需要兼容微信小程序，则无需引用此 JS 文件。
        document.write('<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.4.0.js"><\/script>');
      } else if (/toutiaomicroapp/i.test(userAgent)) {
        // 头条小程序 JS-SDK 如果不需要兼容头条小程序，则无需引用此 JS 文件。
        document.write(
          '<script type="text/javascript" src="https://lf1-cdn-tos.bytegoofy.com/goofy/developer/jssdk/jssdk-1.2.0.js"><\/script>');
      } else if (/swan/i.test(userAgent)) {
        // 百度小程序 JS-SDK 如果不需要兼容百度小程序，则无需引用此 JS 文件。
        document.write(
          '<script type="text/javascript" src="https://b.bdstatic.com/searchbox/icms/searchbox/js/swan-2.0.18.js"><\/script>'
        );
      } else if (/quickapp/i.test(userAgent)) {
        // quickapp
        document.write('<script type="text/javascript" src="https://quickapp/jssdk.webview.min.js"><\/script>');
      }
      if (!/toutiaomicroapp/i.test(userAgent)) {
        document.querySelector('.post-message-section').style.visibility = 'visible';
      }
    </script>
    <!-- uni 的 SDK -->
    <!-- 需要把 uni.webview.1.5.6.js 下载到自己的服务器 -->
    <script type="text/javascript" src="https://gitcode.com/dcloud/uni-app/tree/dev/dist/uni.webview.1.5.6.js"></script>
    <script type="text/javascript">
      // 待触发 `UniAppJSBridgeReady` 事件后，即可调用 uni 的 API。
      document.addEventListener('UniAppJSBridgeReady', function() {
        uni.postMessage({
            data: {
                action: 'message'
            }
        });
        uni.getEnv(function(res) {
            console.log('当前环境：' + JSON.stringify(res));
        });

        document.querySelector('.btn-list').addEventListener('click', function(evt) {
          var target = evt.target;
          if (target.tagName === 'BUTTON') {
            var action = target.getAttribute('data-action');
            switch (action) {
              case 'switchTab':
                uni.switchTab({
                  url: '/pages/tabBar/API/API'
                });
                break;
              case 'reLaunch':
                uni.reLaunch({
                  url: '/pages/tabBar/component/component'
                });
                break;
              case 'navigateBack':
                uni.navigateBack({
                  delta: 1
                });
                break;
              default:
                uni[action]({
                  url: '/pages/component/button/button'
                });
                break;
            }
          }
        });
        document.getElementById('postMessage').addEventListener('click', function() {
          uni.postMessage({
            data: {
              action: 'message'
            }
          });
        });
      });
    </script>
  </body>
</html>
```

Reference: [Official Documentation](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html)
