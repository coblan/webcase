<template>
    <div class="image-ctn" :style="mystyle" >
        <div class="mylabel" v-if="label" v-text="label"></div>
        <div class="for-click" @click="on_click" v-if="clickExpress"></div>
        <!-- <a class="for-click"  v-if="ctx.link_express" :href="get_link()"></a> -->
    </div>
</template>
<script>
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
            // on_click(){
            //     if(this.ctx.click_express){
            //         ex.eval(this.ctx.click_express,{vc:this})
            //     }
            // },
            // get_link(){
            //     return ex.eval(this.ctx.link_express,{vc:this})
            // }
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
</style>
