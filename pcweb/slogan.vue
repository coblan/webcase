<template>
    <div class="slogan">
        <div class="mywrap">
            <div class="title" v-text='title'></div>
            <div class="subtitle" v-text="subtitle"></div>
        </div>
       
    </div>
</template>
<script>
/*
口号控件，特点是文字隔得比较远。
* */
export default {
    props:{
        title:{
            default:''
        },
        subtitle:{
            default:''
        },
    }
}
</script>
<style scoped lang='scss'>
.slogan{
    height: 100%;
    text-align: center;
    display: flex;
    align-items:center;
    .mywrap{
        width: 100%;
    }

}
 .title{
    letter-spacing: 5px;
    text-align: center;
    font-size: 200%;
    line-height: 80px;
 }
    
.subtitle{
    letter-spacing: 3px;
    text-align: center;
    font-size: 120%;
    line-height: 40px;
}

.light{
    .title{
        color: white;
    }
    .subtitle{
        color: #eeeeee;
    }
}
  
</style>
