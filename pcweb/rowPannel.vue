<template>
    <div class="my-pannel">
        <div :class="innClass">
            <div class="title">
                <div style="font-weight: bold;font-size: 130%;padding: 8px;" v-text='title'></div>
                <span style="color: #979797;font-size: 80%;" v-text='subTitle'>。</span>
                <div>
                    <div style="width: 50px;border-bottom: 2px solid #0aa938;display: inline-block;padding-top: 8px"></div>
                </div>

            </div>
            <slot>

            </slot>    
            <!-- <div class="content web-wrap">
                <div class="item" v-for="item in items">
                    <img :src="item.cover" alt="">
                    <div class="item-title" v-text="item.title"></div>
                    <div class='html' v-html="item.content"></div>
                </div>

            </div> -->

        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{},
        subTitle:{},
        innClass:{},
    }
}
</script>
<style scoped>


.my-pannel{
    padding: 50px 0;
}
.title{
    text-align: center;
}
</style>
