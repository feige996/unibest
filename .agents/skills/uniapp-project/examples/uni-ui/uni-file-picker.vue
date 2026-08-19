<!--
文件选择上传 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-file-picker.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-file-picker
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">文件选择上传组件，用于文件选择和上传，支持与 uniCloud 集成。</text>
    </uni-card>

    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-file-picker v-model="fileList1" file-mediatype="image" mode="grid" @select="onSelect" @progress="onProgress" @success="onSuccess" @fail="onFail" />
      </view>
    </uni-section>

    <uni-section title="多文件选择" type="line" padding>
      <view class="example-body">
        <uni-file-picker v-model="fileList2" file-mediatype="image" mode="grid" :limit="9" @select="onSelect" />
        <text class="result-text">已选择：{{ fileList2.length }} 个文件</text>
      </view>
    </uni-section>

    <uni-section title="单文件选择" type="line" padding>
      <view class="example-body">
        <uni-file-picker v-model="fileList3" file-mediatype="image" mode="grid" :limit="1" @select="onSelect" />
      </view>
    </uni-section>

    <uni-section title="文件类型限制" type="line" padding>
      <view class="example-body">
        <uni-file-picker v-model="fileList4" file-mediatype="all" mode="list" @select="onSelect" />
      </view>
    </uni-section>

    <uni-section title="上传进度" type="line" padding>
      <view class="example-body">
        <uni-file-picker v-model="fileList5" file-mediatype="image" mode="grid" @progress="onProgress" />
        <text class="result-text">上传进度：{{ uploadProgress }}%</text>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      fileList1: [],
      fileList2: [],
      fileList3: [],
      fileList4: [],
      fileList5: [],
      uploadProgress: 0
    }
  },
  methods: {
    onSelect(e) {
      console.log('选择文件：', e)
      uni.showToast({
        title: `选择了${e.tempFilePaths.length}个文件`,
        icon: 'none'
      })
    },
    onProgress(e) {
      console.log('上传进度：', e)
      this.uploadProgress = e.progress
    },
    onSuccess(e) {
      console.log('上传成功：', e)
      uni.showToast({
        title: '上传成功',
        icon: 'success'
      })
    },
    onFail(e) {
      console.log('上传失败：', e)
      uni.showToast({
        title: '上传失败',
        icon: 'error'
      })
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
  flex-direction: column;
  gap: 15px;
}

.result-text {
  font-size: 14px;
  color: #333;
  margin-top: 10px;
}
</style>
