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
            y:{
                //  [{name:'2011',data:[12,23,43]},{name:'2012',data:[12,23,43]}]
            },
            title:{},
            barMaxWidth:{
                default:30
            }
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
              var series = ex.map(this.y,item=>{
                return  {
                         name: item.name,
                        data: item.data, // [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        // showBackground: true,
                        // backgroundStyle: {
                        //     color: 'rgba(180, 180, 180, 0.2)'
                        // }
                        }
              })
              var  option = {
                    title:{
                      text: this.title,
                      left: 'center',
                      top:'10%'
                    },
                    legend: {
                        show:true,
                        top:  'bottom',
                        left: 'center',
                    },
                    tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                        type: 'shadow'
                      }
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
                    barMaxWidth:this.barMaxWidth,
                    series: series
                    // [
                    //     {
                    //      name: '2011',
                    //     data: this.y, // [120, 200, 150, 80, 70, 110, 130],
                    //     type: 'bar',
                    //     // showBackground: true,
                    //     // backgroundStyle: {
                    //     //     color: 'rgba(180, 180, 180, 0.2)'
                    //     // }
                    //     },
                    // ]
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
