<template>
    <div class="info-pannel">
        <div class="item" :class="itemClass" :key='item.name' v-for="item in items" >
            <!-- :style="itemStyle" -->
                <img :src="item.cover" alt="">
                <div class="item-title" v-text="item.title"></div>
                <div class='html' v-html="item.content"></div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        items:{
            default:()=>[]
        },
        itemClass:{}
        // itemWidth:{
        //     default:'300px'
        // }
    },
    computed:{
        // itemStyle(){
        //     return {
        //         width:this.itemWidth
        //     }
        // }
    }
}
</script>
<style scoped lang='scss'>
.info-pannel{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
    .item-title{
        font-size: 120%;
        color: green;
        padding: 20px;
    }

    .item{
        margin-top: 50px;
        text-align: center;
        padding: 10px;
        width: 280px;
        transition: all .5s ease;
        .html{
            text-align: left;
        }
        &:hover{
            background-color: rgb(226, 243, 250);
            color: rgb(97, 97, 97);
            // border: 1px solid grey;

        }
    }

</style>