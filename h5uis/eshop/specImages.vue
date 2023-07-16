<template>
    <div>
        <imageDiv class="image-show" :src="current_image" alt="" style=""></imageDiv>

      <div class="container">
        <div class="image-container"  v-for="src in images" :class="{active:current_image==src}">
            <imageDiv @mouseenter.native="onSelect(src)"  @click.native="onSelect(src)" :src="src"  style="width:100%;height: 100%;"></imageDiv>
        </div>
      </div>

    </div>
</template>
<script>
import imageDiv from 'weblib/uis/imageDiv.vue'
export default {
    components:{
        imageDiv,
      
    },
    props:{
        images:{},
    
    },
    data(){
     
        return {
            current_image: ''
        }
    },
    watch:{
        images(){
            if(this.images){
                 var current_image = this.images[0]
            }else{
                 var current_image = ''
            }
            this.current_image = current_image
        }
    },
    mounted(){
    },
    methods:{
        onSelect(src){
            this.current_image = src
        },
   
    }
}
</script>

<style scoped lang="scss">
.container{
    display: flex;
    gap: 10px;
    padding: 20px 0;
}
.image-container{
    width: 60px;
    height: 60px;
    border: 1.5px solid transparent;
    border-radius: 5px;
    overflow: hidden;
    &.active{
        border: 1.5px solid red;
    }
}
.image-show{
     width: 400px;
     height: 400px;
}
</style>