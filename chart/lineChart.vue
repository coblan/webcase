<template>
    <echartsDiv ref="chart"></echartsDiv>  
</template>
<script>
 import  echartsDiv from 'weblib/uis/echartsDiv.vue'

/**
 * data:[
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
     ]
 */
    export default {
        components:{
            echartsDiv,
         
        },
        props:{
            xData:{},
            yData:{},
            title:{},

        },
        mounted(){
            // this.$refs.chart.draw(this.chart_option)
        },
        computed:{
            chart_option(){
                var self = this
                var series = []
                this.yData.forEach(item => {
                    series.push({
                        type: 'line',
                        data:item.data,
                        name:item.name,
                    })
                    
                });
              var myoptions = {
                    title: {
                        text: this.title,
                        left: 'center',
                        top:'10%'
                    },
                      legend: {
                        show:true,
                        top:  'bottom',
                        left: 'center',
                    },
                     xAxis: {
                        type: 'category',
                        data: self.xData
                    },
                    yAxis: {
                        type: 'value'
                    },
          
                      series: series
                }
        
                return myoptions
            }
        },
        methods:{
            draw(){
                this.$refs.chart.draw(this.chart_option)
            }
        }
       
    }
</script>

<style scoped lang="scss">
    .com-table-chart-general{
        display: inline-block;
    }
</style>
