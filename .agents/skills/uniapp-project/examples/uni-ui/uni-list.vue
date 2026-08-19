<!--
列表 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-list.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-list
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等</text>
    </uni-card>

    <uni-section title="基础用法" type="line">
      <uni-list>
        <uni-list-item title="列表文字" />
        <uni-list-item title="列表文字" rightText="右侧文字" />
        <uni-list-item title="列表文字" note="列表描述信息" rightText="右侧文字" />
      </uni-list>
    </uni-section>

    <uni-section title="禁用列表" type="line">
      <uni-list>
        <uni-list-item :disabled="true" title="列表禁用状态" rightText="右侧文字" />
        <uni-list-item :disabled="true" title="列表禁用状态" rightText="右侧文字" />
      </uni-list>
    </uni-section>

    <uni-section title="显示右侧箭头" type="line">
      <uni-list>
        <uni-list-item showArrow title="列表文字" />
        <uni-list-item showArrow title="列表文字" rightText="右侧文字" />
      </uni-list>
    </uni-section>

    <uni-section title="开启点击反馈" type="line">
      <uni-list>
        <uni-list-item title="弹窗提示" clickable @click="onClick" />
        <uni-list-item title="页面跳转" :to="`./chat`" @click="onClick" />
        <uni-list-item title="关闭当前页面打开新页面" showArrow link="redirectTo" to="./chat" @click="onClick" />
        <uni-list-item title="打开错误页面(查看控制台)" showArrow link="redirectTo" to="./chats" @click="onClick" />
      </uni-list>
    </uni-section>

    <uni-section title="不显示分隔线" type="line">
      <uni-list :border="false">
        <uni-list-item title="列表文字" />
        <uni-list-item :border="false" title="列表文字" note="列表描述信息" rightText="右侧文字" />
        <uni-list-item :border="false" title="列表文字" note="列表描述信息" rightText="右侧文字" />
      </uni-list>
    </uni-section>

    <uni-section title="分隔线通栏" type="line">
      <uni-list border-full>
        <uni-list-item title="列表文字" />
        <uni-list-item title="列表文字" note="列表描述信息" rightText="右侧文字" />
        <uni-list-item title="列表文字" note="列表描述信息" rightText="右侧文字" />
      </uni-list>
    </uni-section>

    <uni-section title="文字溢出隐藏" type="line">
      <uni-list>
        <uni-list-item ellipsis="1" title="超长文字显示一行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字" />
        <uni-list-item ellipsis="2" title="超长文字显示二行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字" rightText="二行显示" />
        <uni-list-item ellipsis="1" title="全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字" note="列表描述信息,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字" showArrow rightText="一行显示" />
        <uni-list-item title="全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字" showArrow rightText="全部" />
      </uni-list>
    </uni-section>

    <uni-section title="显示图标或图片" type="line">
      <uni-list>
        <uni-list-item :show-extra-icon="true" showArrow :extra-icon="extraIcon" title="列表左侧带扩展图标" />
        <uni-list-item title="列表左侧带略缩图" note="列表描述信息" showArrow thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" thumb-size="sm" rightText="小图" />
        <uni-list-item title="列表左侧带略缩图" note="列表描述信息" showArrow thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" thumb-size="base" rightText="默认" />
        <uni-list-item title="列表左侧带略缩图" note="列表描述信息" showArrow thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" thumb-size="lg" rightText="大图" />
      </uni-list>
    </uni-section>

    <uni-section title="使用插槽" type="line">
      <uni-list>
        <uni-list-item>
          <template v-slot:body>
            <view class="slot-box">
              <text class="slot-text">使用 body 插槽</text>
            </view>
          </template>
        </uni-list-item>
        <uni-list-item title="自定义右侧插槽" note="列表描述信息" link>
          <template v-slot:footer>
            <image class="slot-image" src="/static/logo.png" mode="widthFix" />
          </template>
        </uni-list-item>
        <uni-list-item>
          <template v-slot:header>
            <view class="slot-box">
              <image class="slot-image" src="/static/logo.png" mode="widthFix" />
            </view>
          </template>
          <template v-slot:body>
            <text class="slot-box slot-text">自定义两侧插槽</text>
          </template>
          <template v-slot:footer>
            <image class="slot-image" src="/static/logo.png" mode="widthFix" />
          </template>
        </uni-list-item>
      </uni-list>
    </uni-section>

    <uni-section title="聊天列表示例" type="line">
      <uni-list :border="true">
        <!-- 显示圆形头像 -->
        <uni-list-chat :avatar-circle="true" title="uni-app" avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" note="您收到一条新的消息" time="2020-02-02 20:20" />
        <!-- 右侧带角标 -->
        <uni-list-chat title="uni-app" avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" note="您收到一条新的消息" time="2020-02-02 20:20" badge-text="12" />
        <!-- 头像显示圆点 -->
        <uni-list-chat title="uni-app" avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot" />
        <!-- 头像显示角标 -->
        <uni-list-chat title="uni-app" avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="99" />
        <!-- 显示多头像 -->
        <uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot" />
        <!-- 自定义右侧内容 -->
        <uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
          <view class="chat-custom-right">
            <text class="chat-custom-text">刚刚</text>
            <!-- 需要使用 uni-icons 请自行引入 -->
            <uni-icons type="star-filled" color="#999" size="18" />
          </view>
        </uni-list-chat>
      </uni-list>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      extraIcon: {
        color: '#4cd964',
        size: '22',
        type: 'spinner'
      },
      avatarList: [
        { url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png' },
        { url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png' }
      ]
    }
  },
  methods: {
    onClick(e) {
      console.log('点击列表', e)
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 10px;
}

.slot-box {
  display: flex;
  align-items: center;
}

.slot-text {
  color: #333;
  font-size: 14px;
}

.slot-image {
  width: 50px;
  height: 50px;
}

.chat-custom-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.chat-custom-text {
  font-size: 12px;
  color: #999;
  margin-bottom: 5px;
}
</style>
