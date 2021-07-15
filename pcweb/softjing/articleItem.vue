<template>
<!-- com-li-article -->
    <div class="article-item">
    <div class="img-ctn" :style="{'background-image':'url('+cover+')'}">
    </div>
    <div class="content">
        <!-- <span v-if="ctx.click_express" class="title" :class="{clickable:has_action}" v-text="row.title" @click="on_click()"></span> -->
         <a  class="title" :class="{clickable:has_action}" :href="link" >{{title}}</a>
        <div class="sub-title" v-text="subTitle"></div>
    </div>
    </div>
</template>
<script>
export default {
    props:{
        cover:{},
        title:{},
        subTitle:{},
        link:{},
    },
    computed:{
        has_action(){
            // if(this.ctx.click_express){
            //     return true
            // }else{
            //     return false
            // }
        }
    },
    methods:{
   
    }
}
</script>

<style scoped lang='scss'>
.article-item{
  padding :20px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  transition: all .2s ease-in;
  &:hover{
    background: #f7f7f7;
    -webkit-box-shadow: 0 0 30px rgba(0,0,0,0.1);
    box-shadow: 0 0 30px rgba(0,0,0,0.15);
    -webkit-transform: translate3d(0, 0px, -2px);
    transform: translate3d(0, 1px, -2px);

    .content .title{
        color: #ee5b2e;
    }
        
  }
  
  .img-ctn{
    width: 200px;
    height: 130px;
    background-size:  cover;
    flex-shrink: 0;
    background-position: center;
    margin: 10px 20px 10px 20px;
  }


  .content{
       margin-left: 15px;
        //display inline-block
        vertical-align: top;
        .title{
            font-size: 120%;
            font-weight: bold;
            text-decoration: none;
            color: #31424e;
        }


        .sub-title{
            color: grey;
            margin-top: 10px;
            white-space: pre-wrap;
            word-wrap: break-word;

        }
        

  }
   
}
 

</style>
require('./styl/article.styl')

Vue.component('com-li-article',{
    props:['ctx'],
    template:``,
    data(){

        return {
            parStore:ex.vueParStore(this),
            row:this.ctx.row
        }
    },
    computed:{
        has_action(){
            if(this.ctx.click_express){
                return true
            }else{
                return false
            }
        }
    },
    methods:{
        get_link(){
            return ex.eval(this.ctx.link_express,{vc:this})
        },
        on_click(){

            if(this.ctx.click_express){
                ex.eval(this.ctx.click_express,{row:this.row})
            }
        }
    }
})