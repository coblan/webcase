<template>
     <div  class="lit-pannel-item">
            <img :src="cover" alt="">
            <a :href="link">{{title}}</a>
     </div>
</template>
<script>
export default {
   props:{
       cover:{},
       title:{},
       link:{},
   }
}
</script>

<style scoped lang='scss'>
.lit-pannel-item{
    padding: 10px 20px;
    display: flex;
    img{
        width: 50px;
        height: auto;
    }
    a{
        display: inline-block;
        margin-left: 10px;
        text-decoration:none;
        color: black;
        &:hover{
            color: green;
            }
    }
}
</style>