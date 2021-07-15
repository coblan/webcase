<template>
    <div class="leftImgInfo">
        <div class="left" :class='type'>
            <i class="fa fa-2x" :class="'fa-'+fa"></i>
        </div>
        <div class="right">
            <div class="title">
                {{title}}
            </div>
            <div class="number">
                {{info}}
            </div>
        </div>
    </div>
</template>
<script>

export default {
   props:{
       fa:{},
       type:{},
       title:{},
       info:{},
       
   }
}
</script>
<style scoped lang='scss'>
.leftImgInfo{
    display: flex;
    background: white;
    border: 1px solid rgb(206, 201, 201);
    width: 250px;
    height: 90px;
    .left{
        width: 90px;
        line-height: 90px;
        text-align: center;
        color: white;
        
        &.warning{
            background-color: #DD4B39;
        }
        &.success{
            background-color: #00A65A;
        }
        &.primary{
            background-color: #00C0EF;
        }
        &.info{
             background-color: #F39C12;
        }

    }
    .right{
        padding: 5px;
        .title{
            font-size: 120%;
            margin-bottom: 5px;
        }
        .number{
            font-size: 120%;
            font-weight:bolder;
        }
    }
}
</style>