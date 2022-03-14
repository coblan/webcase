<template>
  <div>

    <formOne ref="ruleForm" :heads="heads" :row="row" :error="error"></formOne>
     <el-button type="danger" style="width: 100%" @click="submit">注册</el-button>
  </div>
</template>

<script>
import formOne from 'weblib/pc/container/formOne.vue'
import phoneInput from 'weblib/pc/field_editor/phoneInput.vue'
import intInput from 'weblib/pc/field_editor/intInput.vue'
import phoneValidateCode from 'weblib/pc/field_editor/phoneValidateCode.vue'
import passwordInput from 'weblib/pc/fields/passwordInput.vue'
import {isPhone} from 'weblib/pc/field_validate.js'
import lineText from 'weblib/pc/field_editor/lineText.vue'
import ex from 'weblib/ex'
export default {
  components:{
    phoneInput,
    intInput,
    phoneValidateCode,
    passwordInput,
    formOne,
    lineText,
  },
  data(){
    var checkPhone=(rule, value, callback)=>{
      this.$refs.ruleForm.validateField('username');
    }
    var samePass=(rule, value, callback)=>{
      if(value!=this.row.password){
        callback('两次密码不相同')
      }else{
        callback()
      }
    }
    var self = this
    return {
      heads: [
        {
          name: 'username', placeholder: '输入手机号码', editor: phoneInput, prefix_icon: "el-icon-phone-outline", rules: [
            {required: true, message: '输入手机号码', trigger: 'blur'},
            {trigger: 'blur', validator: isPhone},
          ]
        },
        {
          name: 'vcode',
          placeholder: '请输入验证码',
          editor: phoneValidateCode,
          phone_field: 'username',
          sendCode: self.sendPhoneCode,
          rules: [
            {required: true, message: '输入手机验证码', trigger: 'blur'},
          ]
        },
        {
          name: 'password', placeholder: '请输入密码', editor: lineText, prefix_icon: 'el-icon-unlock', show_password: true,
          rules: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ]
        },
        {
          name: 'password2',
          placeholder: '请再次确认密码',
          editor: lineText,
          prefix_icon: 'el-icon-unlock',
          show_password: true,
          rules: [
            {required: true, message: '请再次确认密码', trigger: 'blur'},
            {validator: samePass, trigger: 'blur'},
          ]
        },

      ],
      row: {},
      error: {},
    }
  },
  methods:{
     async sendPhoneCode(phone){
      alert('发送了验证码'+phone)
    },
     async submit(){
        
        this.error ={}
        var resp = await  this.$refs.ruleForm.elForm.validate()
        cfg.show_load()
        var resp = await  ex.director_call('edit/phone-regist',this.row)
        cfg.hide_load()
        if(resp.errors){
            this.error = resp.errors
        }
     },
  }
}
</script>