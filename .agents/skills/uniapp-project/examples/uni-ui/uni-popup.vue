<!--
弹出层 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-popup
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">弹出层组件用于弹出一个覆盖到页面上的内容，使用场景如：底部弹出分享弹窗、页面插屏广告等。</text>
    </uni-card>

    <uni-section title="基本示例" type="line">
      <view class="example-body box">
        <button class="button" type="primary" @click="toggle('top')">
          <text class="button-text">顶部</text>
        </button>
        <button class="button" type="primary" @click="toggle('bottom')">
          <text class="button-text">底部</text>
        </button>
        <button class="button" type="primary" @click="toggle('center')">
          <text class="button-text">居中</text>
        </button>
        <button class="button" type="primary" @click="toggle('left')">
          <text class="button-text">左侧</text>
        </button>
        <button class="button" type="primary" @click="toggle('right')">
          <text class="button-text">右侧</text>
        </button>
      </view>
    </uni-section>

    <uni-section title="提示消息" type="line">
      <view class="example-body box">
        <button class="button popup-success" @click="messageToggle('success')">
          <text class="button-text success-text">成功</text>
        </button>
        <button class="button popup-error" @click="messageToggle('error')">
          <text class="button-text error-text">失败</text>
        </button>
        <button class="button popup-warn" @click="messageToggle('warn')">
          <text class="button-text warn-text">警告</text>
        </button>
        <button class="button popup-info" @click="messageToggle('info')">
          <text class="button-text info-text">信息</text>
        </button>
      </view>
    </uni-section>

    <uni-section title="对话框示例" type="line" class="hideOnPc">
      <view class="example-body box">
        <button class="button popup-success" @click="dialogToggle('success')">
          <text class="button-text success-text">成功</text>
        </button>
        <button class="button popup-error" @click="dialogToggle('error')">
          <text class="button-text error-text">失败</text>
        </button>
        <button class="button popup-warn" @click="dialogToggle('warn')">
          <text class="button-text warn-text">警告</text>
        </button>
        <button class="button popup-info" @click="dialogToggle('info')">
          <text class="button-text info-text">信息</text>
        </button>
      </view>
    </uni-section>

    <uni-section title="输入框示例" type="line" padding>
      <view class="dialog-box">
        <text class="dialog-text">输入内容：{{ value }}</text>
      </view>
      <button class="button" type="primary" @click="inputDialogToggle">
        <text class="button-text">输入对话框</text>
      </button>
    </uni-section>

    <uni-section title="底部分享示例" type="line" padding>
      <button class="button" type="primary" @click="shareToggle">
        <text class="button-text">分享模版示例</text>
      </button>
    </uni-section>

    <view>
      <!-- 普通弹窗 -->
      <uni-popup ref="popup" background-color="#fff" @change="change">
        <view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
          <text class="text">popup 内容</text>
        </view>
      </uni-popup>
    </view>

    <view>
      <!-- 提示信息弹窗 -->
      <uni-popup ref="message" type="message">
        <uni-popup-message :type="msgType" :message="messageText" :duration="2000" />
      </uni-popup>
    </view>

    <view>
      <!-- 提示窗示例 -->
      <uni-popup ref="alertDialog" type="dialog">
        <uni-popup-dialog :type="msgType" cancelText="关闭" confirmText="同意" title="通知" content="欢迎使用 uni-popup!" @confirm="dialogConfirm" @close="dialogClose" />
      </uni-popup>
    </view>

    <view>
      <!-- 输入框示例 -->
      <uni-popup ref="inputDialog" type="dialog">
        <uni-popup-dialog ref="inputClose" mode="input" title="输入内容" value="对话框预置提示内容!" placeholder="请输入内容" @confirm="dialogInputConfirm" />
      </uni-popup>
    </view>

    <view>
      <!-- 分享示例 -->
      <uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
        <uni-popup-share />
      </uni-popup>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      type: 'center',
      msgType: 'success',
      messageText: '这是一条成功消息',
      value: ''
    }
  },
  methods: {
    change(e) {
      console.log('popup change', e)
    },
    toggle(type) {
      this.type = type
      this.$refs.popup.open(type)
    },
    messageToggle(type) {
      this.msgType = type
      const messageMap = {
        success: '这是一条成功消息',
        error: '这是一条错误消息',
        warn: '这是一条警告消息',
        info: '这是一条提示消息'
      }
      this.messageText = messageMap[type]
      this.$refs.message.open()
    },
    dialogToggle(type) {
      this.msgType = type
      this.$refs.alertDialog.open()
    },
    dialogConfirm() {
      console.log('点击确认')
      this.$refs.alertDialog.close()
    },
    dialogClose() {
      console.log('点击关闭')
      this.$refs.alertDialog.close()
    },
    inputDialogToggle() {
      this.$refs.inputDialog.open()
    },
    dialogInputConfirm(value) {
      console.log('输入内容：', value)
      this.value = value
      this.$refs.inputDialog.close()
    },
    shareToggle() {
      this.$refs.share.open()
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 10px;
}

.example-body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
}

.box {
  padding: 20px;
}

.button {
  margin: 5px;
  padding: 10px 20px;
}

.button-text {
  font-size: 14px;
  color: #fff;
}

.popup-content {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}

.popup-height {
  height: 300px;
}

.text {
  font-size: 14px;
  color: #333;
}

.dialog-box {
  padding: 20px;
  margin-bottom: 10px;
}

.dialog-text {
  font-size: 14px;
  color: #333;
}

.success-text {
  color: #67c23a;
}

.error-text {
  color: #f56c6c;
}

.warn-text {
  color: #e6a23c;
}

.info-text {
  color: #909399;
}
</style>
