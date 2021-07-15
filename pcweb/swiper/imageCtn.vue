<template>
    <div class="image-ctn" :style="mystyle" >
        <div class="mylabel" v-if="label" v-text="label"></div>
        <div class="for-click" @click="on_click" v-if="clickExpress"></div>
        <!-- <a class="for-click"  v-if="ctx.link_express" :href="get_link()"></a> -->
    </div>
</template>
<script>
/* 图片div。

1. 默认css样式:background:cover，控制图片显示
2. 可以传入label，显示在图片左下角

现在主要用在fadeSwiper和mySwiper中

默认样式可以用在fadeSwiper中。

.fix-height 类，控制高度与外部容器高度一致，两边自由伸缩。可以用在mySwiper控件中

*/
    export default{
        props:{
            label:{},
            imageUrl:{
                default:''
            },
            clickExpress:{
                default:null,
            }
        },
        mounted(){

        },
        methods:{
            on_click(){
                ex.eval(this.clickExpress,{vc:this})
            }
        },
        computed:{
            mystyle(){
                var dc = {
                    'background-image':'url('+this.imageUrl+')',
                }
//                if(this.ctx.click_express){
//                    dc['cursor'] = 'pointer'
//                }
                return dc
            }
        }
    }
</script>

<style scoped lang="scss">
.image-ctn{
    position: relative;
    background-size: cover;
    background-position:center;
}
.for-click{
    /*background-color: red;*/
    display: inline-block;
    position: absolute;
    width: 60%;
    height: 60%;
    top:20%;
    left: 20%;
    cursor: pointer;
}
.mylabel{
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    min-width: 300px;
    padding: 10px 30px;
    position: absolute;
    bottom: 30px;
    left: 0;
}

/*
固定高度，图片两边延伸
 */
.image-ctn.fix-height{
    background-size: auto 100%;
    background-repeat: no-repeat;
    
}
</style>
