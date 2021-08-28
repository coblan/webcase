<template>
    <div class="com-xiu-menu">
        <div class="stand"></div>
        <div class="fixed-xiu-menu" >
            <div class="web-wrap">
                <div class="brand" >
                    <!-- v-html="parStore.vc.head_bar_data.brand" -->
                    <slot name='brand'></slot>
                </div>
                <div class="menu">
                    <div class="action"  v-for="action in menu" :key='action.name'>
                        <a v-if="action.url"  :class="{'active':is_active(action)}" :href="action.url" v-text="action.label"></a>
                        <a v-else :class="{'active':is_active(action)}"  href="#" @click="on_click(action)" v-text="action.label"></a>
                    </div>
                </div>
                <div class="right-ops">

                </div>

            </div>

        </div>
    </div>

</template>
<script>
/*
增加dark样式
class="dark"

* */
import ex from 'webcase/director/exfun/main.js'

    export default {
        props:{
            menu:{
                default:()=>[]
            },
            activeName:{}
        },
        data(){
            return {
                parStore:ex.vueParStore(this)
            }
        },
        mounted(){
            $(window).scroll(()=>{
                $(this.$el).css({
                'left': -$(window).scrollLeft()
                //Why this 15, because in the CSS, we have set left 15, so as we scroll, we would want this to remain at 15px left
                });
            });

        },
        methods:{
            on_click(action){
                ex.eval(action.action,{head:action})
            },
            is_active:function(action){
                  if(this.activeName){
                    return action.name==this.activeName
                  }else{
                    return false
                  }

            },
        }
    }
</script>
<style scoped lang="stylus">
.stand
  height 66px
.fixed-xiu-menu
  background-color white
  height 66px
  line-height 66px
  vertical-align middle
  position: fixed;
  z-index 100
  top: 0;
  left: 0;
  border-bottom 1px solid #ececec;
  width:100%;
  //width var(--app-width)

  .web-wrap
    display flex
  .brand
    display inline-block

  .menu
    display inline-block
    text-align right
    flex-grow 100
    .action
      display inline-block
      padding 0 20px
      font-size 18px
      a
        text-decoration: none
        color #7b7b7b
        display inline-block
        position relative
        &:hover,&.active
          color #c65624
          //&::after
          //  content ''
          //  display block
          //  position absolute
          //  height 2px
          //  width 100%
          //  background-color #c65624
          //  bottom 5px
  .right-ops
    margin 0 10px
    min-width 100px

  @media (min-width: 1500px)
    .brand
      position absolute
      left 20px
    .menu
      text-align left
</style>

<style scoped lang="scss">
.dark{

    .stand{
        height: 50px;

    }
    .fixed-xiu-menu{
        background-color: #303030;
        border-bottom:none;
        line-height:50px;
        height: 50px;
      //line-height:66px;  // 黑色的情况下，高度太大，感觉不太和谐
      //height: 66px;
        .menu{
            .action{
                font-size:14px;
                //font-size:20px;
                a{
                    color:#b4b4b4;
                    &:hover,&.active{
                             color: #e35b0f;
                         }

                }
            }

        }
    }
 }



</style>
