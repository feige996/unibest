<!--
uni-card 卡片组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-card.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-card
-->

<template>
  <view class="container">
    <uni-card :is-shadow="false" is-full>
      <text class="uni-h6">卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。</text>
    </uni-card>
    
    <!-- 基础卡片 -->
    <uni-section title="基础卡片" type="line">
      <uni-card :is-shadow="false">
        <text class="uni-body">这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
      </uni-card>
    </uni-section>
    
    <!-- 卡片标题+额外信息 -->
    <uni-section title="卡片标题+额外信息" type="line">
      <uni-card title="基础卡片" extra="额外信息">
        <text class="uni-body">这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
      </uni-card>
    </uni-section>
    
    <!-- 双标题卡片 -->
    <uni-section title="双标题卡片" type="line">
      <uni-card 
        title="基础卡片" 
        sub-title="副标题" 
        extra="额外信息" 
        :thumbnail="avatar"
        @click="onClick"
      >
        <text class="uni-body">这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
      </uni-card>
    </uni-section>
    
    <!-- 通栏卡片 -->
    <uni-section title="通栏卡片" type="line">
      <uni-card 
        title="基础卡片" 
        :isFull="true" 
        sub-title="副标题" 
        extra="额外信息" 
        :thumbnail="avatar"
      >
        <text class="uni-body">这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>
      </uni-card>
    </uni-section>
    
    <!-- 卡片封面图+操作栏 -->
    <uni-section title="卡片封面图+操作栏" type="line">
      <uni-card :cover="cover" @click="onClick">
        <text class="uni-body">这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。</text>
        <template v-slot:actions>
          <view class="card-actions">
            <view class="card-actions-item" @click.stop="actionsClick('分享')">
              <uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
              <text class="card-actions-item-text">分享</text>
            </view>
            <view class="card-actions-item" @click.stop="actionsClick('点赞')">
              <uni-icons type="heart" size="18" color="#999"></uni-icons>
              <text class="card-actions-item-text">点赞</text>
            </view>
            <view class="card-actions-item" @click.stop="actionsClick('评论')">
              <uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
              <text class="card-actions-item-text">评论</text>
            </view>
          </view>
        </template>
      </uni-card>
    </uni-section>
    
    <!-- 自定义卡片内容 -->
    <uni-section title="自定义卡片内容" type="line">
      <uni-card 
        title="基础卡片" 
        sub-title="副标题" 
        extra="额外信息" 
        padding="10px 0"
        :thumbnail="avatar"
      >
        <template v-slot:title>
          <uni-list>
            <uni-list-item :show-switch="true" title="自定义标题" />
          </uni-list>
        </template>
        <image style="width: 100%;" :src="cover"></image>
        <text class="uni-body uni-mt-5">卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。</text>
        <view slot="actions" class="card-actions">
          <view class="card-actions-item" @click.stop="actionsClick('分享')">
            <uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">分享</text>
          </view>
          <view class="card-actions-item" @click.stop="actionsClick('点赞')">
            <uni-icons type="heart" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">点赞</text>
          </view>
          <view class="card-actions-item" @click.stop="actionsClick('评论')">
            <uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">评论</text>
          </view>
        </view>
      </uni-card>
    </uni-section>
    
    <!-- 卡片+列表 -->
    <uni-section title="卡片+列表" type="line">
      <uni-card padding="0" spacing="0">
        <template v-slot:cover>
          <view class="custom-cover">
            <image class="cover-image" mode="aspectFill" :src="cover"></image>
            <view class="cover-content">
              <text class="uni-subtitle uni-white">今日新闻热点</text>
            </view>
          </view>
        </template>
        <uni-list>
          <uni-list-item title="今日新闻" showArrow></uni-list-item>
          <uni-list-item title="今日新闻" showArrow></uni-list-item>
        </uni-list>
        <view slot="actions" class="card-actions no-border">
          <view class="card-actions-item" @click.stop="actionsClick('分享')">
            <uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">分享</text>
          </view>
          <view class="card-actions-item" @click.stop="actionsClick('点赞')">
            <uni-icons type="heart" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">点赞</text>
          </view>
          <view class="card-actions-item" @click.stop="actionsClick('评论')">
            <uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">评论</text>
          </view>
        </view>
      </uni-card>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
      cover: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
    }
  },
  methods: {
    onClick() {
      uni.showToast({
        title: '点击了卡片',
        icon: 'none'
      })
    },
    actionsClick(type) {
      uni.showToast({
        title: `点击了${type}`,
        icon: 'none'
      })
    }
  }
}
</script>

<style lang="scss">
.card-actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 45px;
  padding: 0 10px;
  border-top: 1px solid #f0f0f0;
}

.card-actions.no-border {
  border-top: none;
}

.card-actions-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
}

.card-actions-item-text {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}

.custom-cover {
  position: relative;
  width: 100%;
  height: 200px;
}

.cover-image {
  width: 100%;
  height: 100%;
}

.cover-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20rpx;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
}
</style>
