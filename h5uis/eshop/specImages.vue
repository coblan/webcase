<template>
    <div>
        <imageDiv :src="current_image" alt="" style="width: 400px;height: 400px;"></imageDiv>

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
        images:{}
    },
    data(){
        if(this.images){
            var current_image = this.images[0]
        }else{
            var current_image = ''
        }
        return {
            current_image: current_image
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
    padding: 10px;
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
</style>