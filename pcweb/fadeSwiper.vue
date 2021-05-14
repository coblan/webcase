<template>
    <div class="com-top-swiper-fade" >
        <!-- :style='totalStyle' -->
    <div class="bg-image" :style="mystyle"></div>

    <div class = 'inn-wrap' :class="innClass" >
        <!-- :style='innStyle' -->
        <!--<el-carousel :interval="5000" arrow="always" effect="fade">-->
            <!--<el-carousel-item v-for="item in ctx.items" :key="item.name">-->
            <!--<component :is="item.editor" :ctx="item"></component>-->
            <!--</el-carousel-item>-->
      <!--</el-carousel>-->
      <div class="swiper-container">
            <div class="swiper-wrapper">
                <slot name='content'>
                    <imageCtn class="swiper-slide" 
                        v-for="item in items" 
                        :key='item.name' 
                        :imageUrl='item.image_url'
                        :label='item.label'
                        :click-express='item.click_express'
                        @click=on_click(item)></imageCtn>
                </slot>
                   <!-- :clickable='item.click_express' -->
             <!-- <component class="swiper-slide" v-for="item in items" 
                :key='item.name' 
                :is="item.editor" 
                :ctx="item"></component> -->
           </div>

           <!-- Add Pagination -->
            <div class="swiper-pagination swiper-pagination-white"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next swiper-button-white"></div>
            <div class="swiper-button-prev swiper-button-white"></div>
      </div>

    </div>
    </div>
</template>
<script>
import imageCtn from './swiper/imageCtn.vue'
import cdn from '../cdn.js'
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
    },
    components:{
        imageCtn
    },
     data(){
        return {
            activeIndex:0,
        }
    },
    mounted(){
        // if(this.ctx.css){
        //     ex.append_css(this.ctx.css)
        // }
        
        Vue.nextTick(()=>{
            this.init()
        })
    },
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
        async init(){
            ex.load_css(cdn.swiper_css)
            await ex.load_js(cdn.swiper_js)
            var self =this
            var swiper = new Swiper(this.$el.querySelector('.swiper-container'), {
                spaceBetween: 30,
                effect: 'fade',
                loop: true,
                autoplay: {
                    delay: this.delay ,
                    disableOnInteraction: false,
                },

                pagination: {
                    el: this.$el.querySelector('.swiper-pagination'),
                    clickable: true,
                },
                navigation: {
                    nextEl: this.$el.querySelector('.swiper-button-next'),
                    prevEl: this.$el.querySelector('.swiper-button-prev'),
                },
                on:{
                    transitionStart: function(){
                        self.activeIndex = ( this.activeIndex -1 ) % self.items.length
                    },
                    transitionEnd: function(){

                    },
                },
            });
        },
        on_click(item){

        }
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