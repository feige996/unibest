<!--
表单 组件示例

官方文档：https://uniapp.dcloud.net.cn/component/uniui/uni-forms.html
插件市场：https://ext.dcloud.net.cn/plugin?name=uni-forms
-->

<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">uni-forms 组件一般由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。</text>
    </uni-card>

    <uni-section title="基本用法" type="line">
      <view class="example">
        <!-- 基础用法，不包含校验规则 -->
        <uni-forms ref="baseForm" :modelValue="baseFormData">
          <uni-forms-item label="姓名" required>
            <uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
          </uni-forms-item>
          <uni-forms-item label="年龄" required>
            <uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
          </uni-forms-item>
          <uni-forms-item label="性别" required>
            <uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
          </uni-forms-item>
          <uni-forms-item label="兴趣爱好" required>
            <uni-data-checkbox v-model="baseFormData.hobby" multiple :localdata="hobbys" />
          </uni-forms-item>
          <uni-forms-item label="自我介绍">
            <uni-easyinput type="textarea" v-model="baseFormData.introduction" placeholder="请输入自我介绍" />
          </uni-forms-item>
          <uni-forms-item label="日期时间">
            <uni-datetime-picker type="datetime" return-type="timestamp" v-model="baseFormData.datetimesingle" />
          </uni-forms-item>
        </uni-forms>
      </view>
    </uni-section>

    <uni-section title="对齐方式" type="line">
      <view class="example">
        <view class="segmented-control">
          <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button" />
        </view>
        <!-- 展示不同的排列方式 -->
        <uni-forms ref="baseForm" :modelValue="alignmentFormData" :label-position="alignment">
          <uni-forms-item label="姓名" required>
            <uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
          </uni-forms-item>
          <uni-forms-item label="年龄" required>
            <uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
          </uni-forms-item>
        </uni-forms>
      </view>
    </uni-section>

    <uni-section title="表单校验" type="line">
      <view class="example">
        <!-- 基础表单校验 -->
        <uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
          <uni-forms-item label="姓名" required name="name">
            <uni-easyinput v-model="valiFormData.name" placeholder="请输入姓名" />
          </uni-forms-item>
          <uni-forms-item label="年龄" required name="age">
            <uni-easyinput v-model="valiFormData.age" placeholder="请输入年龄" />
          </uni-forms-item>
          <uni-forms-item label="自我介绍" name="introduction">
            <uni-easyinput type="textarea" v-model="valiFormData.introduction" placeholder="请输入自我介绍" />
          </uni-forms-item>
        </uni-forms>
        <button type="primary" @click="submit('valiForm')">提交</button>
      </view>
    </uni-section>

    <uni-section title="自定义校验规则" type="line">
      <view class="example">
        <!-- 自定义表单校验 -->
        <uni-forms ref="customForm" :rules="customRules" :modelValue="customFormData">
          <uni-forms-item label="姓名" required name="name">
            <uni-easyinput v-model="customFormData.name" placeholder="请输入姓名" />
          </uni-forms-item>
          <uni-forms-item label="年龄" required name="age">
            <uni-easyinput v-model="customFormData.age" placeholder="请输入年龄" />
          </uni-forms-item>
          <uni-forms-item label="兴趣爱好" required name="hobby">
            <uni-data-checkbox v-model="customFormData.hobby" multiple :localdata="hobbys" />
          </uni-forms-item>
        </uni-forms>
        <button type="primary" @click="submit('customForm')">提交</button>
      </view>
    </uni-section>

    <uni-section title="动态表单" type="line">
      <view class="example">
        <!-- 动态表单校验 -->
        <uni-forms ref="dynamicForm" :rules="dynamicRules" :modelValue="dynamicFormData">
          <uni-forms-item label="邮箱" required name="email">
            <uni-easyinput v-model="dynamicFormData.email" placeholder="请输入姓名" />
          </uni-forms-item>
          <uni-forms-item v-for="(item,index) in dynamicLists" :key="item.id" :label="item.label+' '+index" required :rules="item.rules" :name="'domains[' + item.id + ']'">
            <view class="form-item">
              <uni-easyinput v-model="dynamicFormData.domains[item.id]" placeholder="请输入域名" />
              <button class="button" size="mini" type="default" @click="del(item.id)">删除</button>
            </view>
          </uni-forms-item>
        </uni-forms>
        <view class="button-group">
          <button type="primary" size="mini" @click="add">新增域名</button>
          <button type="primary" size="mini" @click="submit('dynamicForm')">提交</button>
        </view>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 基础表单数据
      baseFormData: {
        name: '',
        age: '',
        sex: '',
        hobby: [],
        introduction: '',
        datetimesingle: null
      },
      // 对齐方式表单数据
      alignmentFormData: {
        name: '',
        age: ''
      },
      // 对齐方式控制
      current: 0,
      items: ['左对齐', '顶部对齐'],
      alignment: 'left',
      // 校验表单数据
      valiFormData: {
        name: '',
        age: '',
        introduction: ''
      },
      // 校验规则
      rules: {
        name: {
          rules: [
            {
              required: true,
              errorMessage: '请填写姓名'
            },
            {
              minLength: 3,
              maxLength: 5,
              errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符'
            }
          ],
          label: '姓名',
          validateTrigger: 'submit'
        },
        age: {
          rules: [
            {
              required: true,
              errorMessage: '请填写年龄'
            },
            {
              format: 'number',
              errorMessage: '年龄格式不正确'
            }
          ],
          label: '年龄',
          validateTrigger: 'submit'
        },
        introduction: {
          rules: [
            {
              minLength: 5,
              errorMessage: '自我介绍至少5个字符'
            }
          ],
          label: '自我介绍',
          validateTrigger: 'submit'
        }
      },
      // 自定义校验表单数据
      customFormData: {
        name: '',
        age: '',
        hobby: []
      },
      // 自定义校验规则
      customRules: {
        name: {
          rules: [
            {
              required: true,
              errorMessage: '请填写姓名'
            }
          ],
          label: '姓名'
        },
        age: {
          rules: [
            {
              required: true,
              errorMessage: '请填写年龄'
            }
          ],
          label: '年龄'
        },
        hobby: {
          rules: [
            {
              required: true,
              errorMessage: '请选择兴趣'
            },
            {
              validateFunction: (rule, value, data, callback) => {
                if (value.length < 2) {
                  callback('请至少勾选两个兴趣爱好')
                }
                return true
              }
            }
          ],
          label: '兴趣爱好'
        }
      },
      // 动态表单数据
      dynamicFormData: {
        email: '',
        domains: {}
      },
      // 动态表单列表
      dynamicLists: [],
      // 动态表单规则
      dynamicRules: {
        email: {
          rules: [
            {
              required: true,
              errorMessage: '请填写邮箱'
            },
            {
              format: 'email',
              errorMessage: '邮箱格式不正确'
            }
          ],
          label: '邮箱'
        }
      },
      // 性别选项
      sexs: [
        { value: '0', text: '男' },
        { value: '1', text: '女' }
      ],
      // 兴趣爱好选项
      hobbys: [
        { value: '0', text: '篮球' },
        { value: '1', text: '足球' },
        { value: '2', text: '游泳' }
      ]
    }
  },
  onReady() {
    // 需要在onReady中设置自定义校验规则
    this.$refs.customForm.setRules(this.customRules)
  },
  methods: {
    onClickItem(e) {
      this.current = e.currentIndex
      this.alignment = e.currentIndex === 0 ? 'left' : 'top'
    },
    submit(formName) {
      this.$refs[formName].validate().then(res => {
        console.log('表单数据信息：', res)
        uni.showToast({
          title: '校验通过',
          icon: 'success'
        })
      }).catch(err => {
        console.log('表单错误信息：', err)
        uni.showToast({
          title: '校验失败',
          icon: 'none'
        })
      })
    },
    add() {
      const id = Date.now()
      this.dynamicLists.push({
        id: id,
        label: '域名',
        rules: [
          {
            required: true,
            errorMessage: '域名项必填'
          }
        ]
      })
      this.$set(this.dynamicFormData.domains, id, '')
    },
    del(id) {
      const index = this.dynamicLists.findIndex(item => item.id === id)
      if (index > -1) {
        this.dynamicLists.splice(index, 1)
        this.$delete(this.dynamicFormData.domains, id)
      }
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 10px;
}

.example {
  padding: 10px;
}

.segmented-control {
  margin-bottom: 20px;
}

.form-item {
  display: flex;
  align-items: center;
}

.button {
  margin-left: 10px;
}

.button-group {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
</style>
