<template>
    
    <div class="transparent-background" :style="mystyle">
        <slot>

        </slot>
    </div>
  
</template>
<script>
/*
* 让imageUrl作为背景，前景是镂空样式。
* */
export default {
    props:{
        imageUrl:{
        }
    },
    computed:{
        mystyle(){

            return {'background-image':'url('+ this.imageUrl +')'}
        }
    }
}
</script>

<style scoped>
.transparent-background{
    position: relative;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
/* .com-top-transparent-ctn
  height 300px
  position relative
  background-attachment fixed
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .web-wrap
    position absolute
    top:50%
    left 50%
    transform translate(-50%,-50%)

  .title
    color white
    letter-spacing 1rem
    text-align center
    font-size 2.6rem
    line-height 6rem

  .subtitle
    color #eeeeee
    letter-spacing .3rem
    text-align center
    font-size 1.3rem */
</style>
