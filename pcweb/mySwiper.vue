<template>
        <fade-swiper :items="items" 
            :delay="delay"
            :show-arrow="showArrow"
             :extend-logic='extendLogic'>
            <template v-slot:bg>
                <span></span>
                <!-- <slot name='bg' /> -->
            </template>
            <template v-slot:content>
                <imageCtn class="fix-height swiper-slide" 
                        v-for="item in items" 
                        :key='item.name' 
                        :imageUrl='item.image_url'
                        :label='item.label'
                        :click-express='item.click_express'
                        ></imageCtn>
            </template>

        </fade-swiper>
</template>

<script>
import fadeSwiper, {FadeSwiperLogic} from './fadeSwiper.vue'
import imageCtn from './swiper/imageCtn.vue'

class MySwiper extends FadeSwiperLogic{
    constructor(){
        super()
        this.effect = 'swiper'
    }
}

export default {
    props:{
        items:{
            default:()=>[]
        },
        delay:{
            default:5000
        },
        showArrow:{
            default:false
        }
        // innClass:{},
    },

    components:{
        imageCtn,
        fadeSwiper,
    },
    setup(props){
        return {
            extendLogic: MySwiper
        } 
    }
}
</script>


