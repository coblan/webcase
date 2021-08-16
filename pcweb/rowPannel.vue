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

        </div>
    </div>
</template>
<script>
/*
页面的行容器，有title和subtitle
innClass 一般用来控制内容的宽度，用在顶层页面width=1100px，两边自动延伸

        <rowPannel innClass='web-wrap'
            class='about-us-row'
            title='关于我们'
            sub-title='ABOUT US'>
            <div class="about-us" v-html='ctx.about_us'></div>
        </rowPannel>

 */
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
