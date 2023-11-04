<template>
    <div class="slide-swiper" >
        <div class="swiper swiper-container">
            <div class="swiper-wrapper">
                    <slot>

                    <!-- <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 4</div>
                    <div class="swiper-slide">Slide 5</div>
                    <div class="swiper-slide">Slide 6</div>
                    <div class="swiper-slide">Slide 7</div>
                    <div class="swiper-slide">Slide 8</div>
                    <div class="swiper-slide">Slide 9</div> -->

                    </slot>
            </div>

            <!-- Add Pagination -->
            <div v-if="showPagination" class="swiper-pagination swiper-pagination-white"></div>
            <!-- Add Arrows -->

            <template v-if='showArrow'>
                <div class="swiper-button-next swiper-button-white"></div>
                 <div class="swiper-button-prev swiper-button-white"></div>
            </template>


        </div>

   

    </div>
</template>
<script>


import ex from 'weblib/ex'
export default {
    props:{
        showPagination:{
          default: false,
        },
        showArrow:{
            default:false
        },
        slidesPerView:{
            default:1,
        },
        delay:{
            default:3000,
        },
        loop:{
            default:true,
        },
        spaceBetween:{
            default:10
        },
        mouseStop:{
            default:true
        },
        freeSpeed:{
            default:3000 , // free模式下，滚动速度
        }
    //   direction: {
    //       default:"horizontal",//"vertical"
    //   },

    },
    components:{

    },
     data(){
        return {
            // activeIndex:0,
        }
    },
    mounted(){
        
        

    },
    computed:{
    },
    methods:{
        async update(){
            ex.load_css(cfg.js_lib.swiper_css)
            await ex.load_js(cfg.js_lib.swiper)
            var self =this
            
            var config = {
                direction: "vertical",
             
                slidesPerView: this.slidesPerView ,
             
	            // speed: 3000,
                // freeMode: true,
                spaceBetween:  this.spaceBetween, // 10,
                // effect: 'fade',
                loop: self.loop,
                autoplay: {
                    delay: this.delay ,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: this.$el.querySelector('.swiper-pagination'),
                    clickable: true,
                },
                navigation: {
                    nextEl: self.$el.querySelector('.swiper-button-next'),
                    prevEl: self.$el.querySelector('.swiper-button-prev'),
                },
                // on:{
                //     transitionStart: function(){
                //         self.activeIndex = ( this.activeIndex -1 ) % self.items.length
                //     },
                //     transitionEnd: function(){
                //
                //     },
                // },
            }

            if(this.freeSpeed){
                Object.assign(config,{
                    speed:  this.freeSpeed, //  3000,
                    freeMode: true,
                     autoplay: {
                        delay: 0 ,
                        disableOnInteraction: false,
                    }
                })
            }

            var mySwiper = new Swiper(this.$el.querySelector('.swiper-container'), config);

            if(this.mouseStop){
                mySwiper.el.onmouseover = function(){ //鼠标放上暂停轮播
                    mySwiper.autoplay.stop();
                }
                mySwiper.el.onmouseleave = function(){
                    mySwiper.autoplay.start();
                }
            }
          

        },
        on_click(item){

        }
    }
}
</script>
<style scoped lang='scss'>
//替换箭头颜色用的
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev,
.swiper-button-prev, 
.swiper-container-rtl .swiper-button-next{
    background-image: none;
}


.slide-swiper{
  position: relative;
}

.swiper {
  width: 100%;
  height: 100%;
}


.swiper-slide {
 text-align: center;
 font-size: 18px;
 //background: #fff;

 /* Center slide text vertically */
 display: -webkit-box;
 display: -ms-flexbox;
 display: -webkit-flex;
 display: flex;
 -webkit-box-pack: center;
 -ms-flex-pack: center;
 -webkit-justify-content: center;
 justify-content: center;
 -webkit-box-align: center;
 -ms-flex-align: center;
 -webkit-align-items: center;
 align-items: center;
}

// .swiper-slide img {
//  display: block;
//  width: 100%;
//  height: 100%;
//  object-fit: cover;
// }

.swiper-button-my-color{
  color: grey;
  background-color: grey;
}


.swiper-button-next,
.swiper-button-prev,
.swiper-container-rtl .swiper-button-prev,
.swiper-container-rtl .swiper-button-next{
  fill: grey;
  transform: scale(0.6);
  //position: relative;
}
.swiper-button-next{
  //right: -50px;
}
.swiper-button-prev{
  //left: -50px;
}


::v-deep{
    .swiper-container-free-mode>.swiper-wrapper { 
        -webkit-transition-timing-function: linear; /*之前是ease-out*/ 
        -moz-transition-timing-function: linear; 
        -ms-transition-timing-function: linear; 
        -o-transition-timing-function: linear; 
        transition-timing-function: linear; 
        margin: 0 auto; 
    }
}

</style>