<template>
    <simSwiper class="swiper" 
        :config="{autoplay:false,loop:false,initialSlide:init_index}"
        ref="swiper">
          <imageDiv class="cover swiper-slide"
                    :key="image"
                     v-for="image in images"
                    :src="image"></imageDiv>

      </simSwiper>
</template>

<script>
import  simSwiper from 'weblib/uis/simSwiper.vue'
import imageDiv from 'weblib/uis/imageDiv.vue'

/**
 * 可以用于pop_vue_com弹窗显示多张图片。
 * 有左右箭头，可以滑动浏览图片。
 * 不会自动播放，需要手动切换下一张。
 * 
 * 示例：
 *  cfg.pop_vue_com(multiImage,{images:this.image_list,init_index:index},{
                    title:false,
                    area: ['90%', '90%'],
                    shade: 0.8,
                    skin: 'img-shower',
                    shadeClose: true,
                })
 * 
 */
export default{
    components:{
        simSwiper,
        imageDiv
    },
    props:{
        images:[],
        init_index:{
            default:0,
        }
    },
    mounted(){
        this.$refs.swiper.update()
    },

}
</script>
<style lang='scss'>
.layui-layer-setwin{
    z-index: 100;
}
</style>




 