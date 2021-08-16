<template>
    <div class="info-pannel2">
        <div v-for='item in items' :key="item.name" class="info-item" :class='itemClass'>
            <div class="image-content"   @mouseover="on_enter(item.name)" @mouseout="on_leave(item.name)">
                <!-- <div class="image-panel" :style="mystyle"></div> -->
                <imageDiv :name='item.name' class="image-panel" :src='item.image_url'></imageDiv>   
            </div>

            <div class="text-content">
                <div class="title" v-text="item.title"></div>
                <div class="sub-title" v-text="item.sub_title"></div>
            </div>
        </div>
    </div>
</template>
<script>
import cdn from 'weblib/cdn'
import imageDiv from 'weblib/uis/imageDiv.vue'
export default {
    /**
     * 动画用了Velocity.js ,Velocity.js又使用了jquery，现在暂时这样，如果未来移除了jquery，这个组件需要作出修改。
     * 
     */
    props:{
        items:{
            default:()=>[]
        },
        itemClass:{}
    },
    components:{
        imageDiv
    },
    mounted(){
        // ex.load_js('')
    },
    methods:{
        on_enter(name){
            $( this.$el.querySelector('[name='+name+']')).velocity('stop')
                .velocity({
                scaleX:1.1,
                scaleY:1.1,
            },{
                duration:2000,
                delay:200,
            });
        },
        on_leave(name){
            $(this.$el).find('[name='+name+']').velocity('stop')
                .velocity({
                scaleX:1,
                scaleY:1,
            },{
                duration:1000,
            }  );
        }
    }
}
</script>
<style scoped lang='scss'>

.info-pannel2{
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
}
.info-item{

    height: 400px;
    width :320px;
    margin: 16px 16px;
    display: inline-block;
    border: 1px solid #d5d5d5;
    position: relative;
    vertical-align: top;
    
   .image-content{
        width: 100%;
        height: 250px;
        overflow: hidden;
        .image-panel{
            height: 100%;
            width: 100%;
        }
    }
    
  .text-content{
    padding: 10px 10px;
    text-align: center;
  }
    
  .title{
    font-size: 18px;
    color: #4a4a4a;
    font-weight: 600;
    margin: 10px 0 20px 0;
  }
  .sub-title{
      font-size: 14px;
      color: #636262;
  }
   
}
</style>