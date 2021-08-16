<template>
    <div class="echart-base">
        <div  class="mychart" ></div>
    </div>

</template>
<script>
import cdn from  '../cdn.js'
 
 export default {
     props:{
         extendLogic:{},
     },
     setup(props){
         return new props.extendLogic().getSetup(props)
     },
     mounted(){
         this.draw()
     },
     methods:{
         async draw(){
             await ex.load_js(cdn.echart_js)
             var myChart = echarts.init($(this.$el).find('.mychart')[0]);
             var option = this.getOption()
             // 使用刚指定的配置项和数据显示图表。
             myChart.setOption(option);
         }
     }
 }
</script>

<style scoped lang="scss">
    .echart-base{
        display: inline-block;
        position: relative;
    }
    .mychart{
        width: 100%;
        height: 100%;
    }
</style>
