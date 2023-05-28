<template>
    <echartsDiv ref="chart"></echartsDiv>
</template>
<script>
 import  echartsDiv from 'weblib/uis/echartsDiv.vue'

    export default {
        components:{
            echartsDiv,
        },
        props:{
            x:{},
            y:{},
            title:{},
        },
        data(){
            return {
          
            }
        },
        mounted(){
            // this.$refs.chart.draw(this.chart_option)
        },
        computed:{
            chart_option(){
              var  option = {
                    title:{
                      text: this.title,
                      left: 'center',
                      top:'10%'
                    },
                    xAxis: {
                        type: 'category',
                        data: this.x ,//  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    grid:{
                      left:'20%',
                      bottom:'16%',
                      // top:'30%'
                    },
                    barMaxWidth:30,
                    series: [
                        {
                        data: this.y, // [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        // showBackground: true,
                        // backgroundStyle: {
                        //     color: 'rgba(180, 180, 180, 0.2)'
                        // }
                        }
                    ]
                };
                return option
            }
        },
        methods:{
            draw(){
                this.$refs.chart.draw(this.chart_option)
            },
           clear(){
            return  this.$refs.chart.clear();
          }
        }
       
    }
</script>

<style scoped lang="scss">
    .com-table-chart-general{
        display: inline-block;
    }
</style>
