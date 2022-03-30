<template>
      <div class="username-login-form">
        <formOne :heads="heads" :row="row" :error="error" ref="ruleForm"></formOne>
        <el-button type="danger" style="width: 100%" @click="submit">登录</el-button>
      </div>
</template>
<script>
import phoneInput from 'weblib/pc/field_editor/phoneInput.vue'
import passwordInput from 'weblib/pc/fields/passwordInput.vue'
import {isPhone} from 'weblib/pc/field_validate.js'
import formOne from 'weblib/pc/container/formOne.vue'
import lineText from 'weblib/pc/field_editor/lineText.vue'
import imageValidate from 'weblib/pc/field_editor/imageValidate.vue'
import ex from 'weblib/ex'
export  default {
  components:{
    phoneInput,
    passwordInput,
    formOne,
    lineText,
    imageValidate
  },
  props:{
      usernameHead:{},

  },
  data(){
    var self =this
    return {
      row:{},
      error:{},
      validate_img:'',
    }
  },
  computed:{
    heads(){
      var self = this
      if(this.usernameHead =='phone'){
        var username_head={name:'username',placeholder:'请输入手机号码',editor:lineText,prefix_icon:'el-icon-phone-outline',rules:[
            { required: true, message: '输入手机号码', trigger: 'blur' },
            {validator:isPhone,trigger: 'blur'},
          ]}
      }else{
          var username_head = {name:'username',placeholder:'用户名',editor:lineText,prefix_icon:'el-icon-user',rules:[
              { required: true, message: '请输入用户名', trigger: 'blur' },
          ]}
      }
     
      return [
        username_head,
        {name:'password',placeholder: '请输入密码',editor:lineText,prefix_icon: 'el-icon-unlock',show_password:true,
          rules:[  { required: true, message: '输入密码', trigger: 'blur' },]},
        {name:'validate_code',show_fun:()=>{return self.validate_img},editor: imageValidate,validate_image:self.validate_img,}
      ]
    }

  },
  methods:{
    async submit(){
      this.error={}
      var resp = await  this.$refs.ruleForm.elForm.validate()
      cfg.show_load()
      var resp = await  ex.director_call('username/login',this.row)
      cfg.hide_load()
      if(resp.errors){
        this.error = resp.errors
        if(resp.validate_img){
          this.validate_img=resp.validate_img
        }
      }else{
          this.$emit('login')
      }
    },
  }
}
</script>
