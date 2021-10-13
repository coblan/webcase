<template>
    <div  class="com-chart-static-base" >
        <div  class="mychart" ></div>
    </div>

</template>
<script>
import cdn from  '../cdn.js'

    export default {
        props:{
           option:{},
        },
        data(){
            return {
               
            }
        },
        async mounted(){
            await ex.load_js(cdn.echart_js)
            this.draw()
        },
        methods:{
            draw(){
                var myChart = echarts.init($(this.$el).find('.mychart')[0]);

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(this.option);
            }
        }
    }
</script>

<style scoped lang="scss">
    .com-chart-static-base{
        display: inline-block;
    }
</style>
