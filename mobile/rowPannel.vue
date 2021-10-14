<template>
    <div class="com-title-block">
        <slot name="title">
            <div class="title" v-text="title"></div>
            <div class="sub-title" v-text="subtitle"></div>
        </slot>
        <slot>
            <!-- <div class="normal" v-html="ctx.html"></div> -->
        </slot>
    </div>
</template>

<script>
    export default {
        props:['title','subtitle'],
        data(){
            return {}
        },
        mounted(){
      
        }
    }
</script>

<style scoped lang="scss">
    .title{
        text-align: center;
        font-size: .4rem;
        font-weight: bold;
        margin: .3rem;
    }
    .sub-title{
        text-align: center;
        color: grey;
        font-size: .26rem;
    }
.normal{
    padding: .3rem;
    line-height: .4rem;
}
</style>