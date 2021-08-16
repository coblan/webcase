<template>
    <div class="com-top-swiper-fade" >
        <!-- :style='totalStyle' -->
    <slot name="bg">
           <div class="bg-image" :style="mystyle"></div>
    </slot>  
 

    <div class = 'inn-wrap' :class="innClass" >
      <div class="swiper-container">
            <div class="swiper-wrapper">
                <slot name='content'>
                    <imageCtn class="swiper-slide" 
                        v-for="item in items" 
                        :key='item.name' 
                        :imageUrl='item.image_url'
                        :label='item.label'
                        :click-express='item.click_express'
                        ></imageCtn>
                </slot>
           </div>

           <!-- Add Pagination -->
            <div class="swiper-pagination swiper-pagination-white"></div>
            <!-- Add Arrows -->
            <template v-if='showArrow'>
                <div class="swiper-button-next swiper-button-white"></div>
                <div class="swiper-button-prev swiper-button-white"></div>
            </template>
        
      </div>

    </div>
    </div>
</template>
<script>
import imageCtn from './swiper/imageCtn.vue'
import cdn from '../cdn.js'
// if(process.client){
//    var { ref, reactive,computed ,onMounted,getCurrentInstance } = VueCompositionAPI
// }

import { ref, reactive,computed ,onMounted,getCurrentInstance } from '@vue/composition-api'
import Vue from "vue";

export class FadeSwiperLogic{
  constructor(){
    if(process.client){

      this.activeIndex = ref(0)
      this.vc = getCurrentInstance()
    }
    this.effect = 'fade'
    this.is_manual = false
  }
  async init(props){
    ex.load_css(cdn.swiper_css)
    await ex.load_js(cdn.swiper_js)
    var element = this.vc.vnode.elm
    var self =this
    var swiper = new Swiper(element.querySelector('.swiper-container'), {
      spaceBetween: 30,
      effect: this.effect, //'fade',
      loop: true,
      autoplay: {
        delay: props.delay ,
        disableOnInteraction: false,
      },

      pagination: {
        el: element.querySelector('.swiper-pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: element.querySelector('.swiper-button-next'),
        prevEl: element.querySelector('.swiper-button-prev'),
      },
      on:{
        transitionStart: function(){
          var crt = this.activeIndex -1
          if(crt<0){
            self.activeIndex.value = props.items.length
          }else{
            self.activeIndex.value = ( crt ) % props.items.length
          }

        },
        transitionEnd: function(){

        },
        click: function(){
          // alert('你点了Swiper');
          self.is_manual=true
          setTimeout(()=>{
            self.is_manual = false
          },100)

        },
        touchStart: function(swiper,event){
          self.is_manual = true

        },
        touchEnd: function(swiper,event){
          setTimeout(()=>{
            self.is_manual = false
          },100)
          //你的事件
        },
        slideChange: function(){
          if(self.is_manual){
            swiper.autoplay.stop();
            console.log('暂定')
          }
          // alert('改变了，activeIndex为'+this.activeIndex);
        },
        //    slideChange: function(swiper){
        //        debugger
        // alert('改变了，activeIndex为'+this.activeIndex);
        // },

      },
    });
  }
  getSetup(props){
    if(process.client){
      onMounted(()=>{
        Vue.nextTick(()=>{
          this.init(props)
        })
      })
    }

    return {
      activeIndex:this.activeIndex,
    }
  }
}


export default {
    /**
     * 因为需要fade效果，所以使用swiper库，官方地址:https://www.swiper.com.cn/
     * 
     * 现在已经自动引入下面链接了
     * ---使用该组件时，需要注入cdn连接:
     * ---https://cdn.jsdelivr.net/npm/swiper@4.5.0/dist/js/swiper.min.js
     * ---https://cdn.jsdelivr.net/npm/swiper@4.5.0/dist/css/swiper.min.css
     * 
     * -----@height:控制整个控件高度
     * class 外部class控制外部尺寸
     * @innClass: 通过class类名控制内部宽度
     * @delay：切换速度控制
     * ------@innWidth: 控制内部宽度，innClass和innWidth只能传递一个
     */
    props:{
        items:{
            default:()=>[]
        },
        delay:{
            default:5000
        },
        // height:{
        //     default:'500px'
        // },
        // innWidth:{
        //     default:'90%'
        // },
        innClass:{},
        showArrow:{
            default:true
        },
        extendLogic:{},
    },
    components:{
        imageCtn
    },
     data(){
        return {
            // activeIndex:0,
        }
    },
    setup(props){
        if (props.extendLogic){
            return new props.extendLogic().getSetup(props)
        }else{
            return new FadeSwiperLogic().getSetup(props)
        }
        
    },
    // mounted(){
    //     Vue.nextTick(()=>{
    //         this.init()
    //     })
    // },
    computed:{
        mystyle(){
            return {
                'background-image':'url('+this.items[this.activeIndex].image_url+')',
            }
        },
        // totalStyle(){
        //     return {
        //         height:this.height
        //     }
        // },
        // innStyle(){
        //     if(this.innClass){
        //         return {}
        //     }else{
        //         return {
        //             width:this.innWidth
        //         }
        //     }
            
        // }
    },
    methods:{
        // async init(){
        //     ex.load_css(cdn.swiper_css)
        //     await ex.load_js(cdn.swiper_js)
        //     var self =this
        //     var swiper = new Swiper(this.$el.querySelector('.swiper-container'), {
        //         spaceBetween: 30,
        //         effect: 'fade',
        //         loop: true,
        //         autoplay: {
        //             delay: this.delay ,
        //             disableOnInteraction: false,
        //         },

        //         pagination: {
        //             el: this.$el.querySelector('.swiper-pagination'),
        //             clickable: true,
        //         },
        //         navigation: {
        //             nextEl: this.$el.querySelector('.swiper-button-next'),
        //             prevEl: this.$el.querySelector('.swiper-button-prev'),
        //         },
        //         on:{
        //             transitionStart: function(){
        //                 self.activeIndex = ( this.activeIndex -1 ) % self.items.length
        //             },
        //             transitionEnd: function(){

        //             },
        //         },
        //     });
        // },
        // on_click(item){

        // }
    }
}
</script>
<style scoped lang='scss'>
.com-top-swiper-fade{
    height: 500px;
    position: relative;
    overflow: hidden;
    .bg-image{
        height: 100%;
        width: 100%;
        position: absolute;
        background-size: cover;
        background-position: center;
        filter: blur(10px);
        overflow: hidden;
        top: -25px;
        left: -25px;
        padding: 4rem;
    }
    .inn-wrap{
        height: 100%;
    }
    
    .swiper-container{
        width: 100%;
        height: 100%;
    }
  .swiper-button-white{
    &:focus{
        outline: none;
    }
     
  }
   

}
  

</style>