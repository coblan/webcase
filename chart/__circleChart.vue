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
            data:{},
            title:{},
            subtitle:{},
            option:{},
        },
        data(){
            return {
          
            }
        },
        mounted(){
            this.$refs.chart.draw(this.chart_option)
        },
        computed:{
            chart_option(){
              var myoptions = {
                    title: {
                        text: this.title,
                        subtext: this.subtext,
                        left: 'center'
                    },
                //   tooltip: {
                //     trigger: 'item'
                //   },
                //   legend: {
                //     orient: 'vertical',
                //     left: 'left',
                //   },
                  legend: {
                    // orient: 'ho',
                    bottom: '10px',
                  },
                labelLine: {
                    show: false
                },
                    series: [
                        {
                            name: '',
                            type: 'pie',
                            radius: ['40%','60%'],
                            data: this.data,

                            // emphasis: {
                            //     itemStyle: {
                            //     shadowBlur: 10,
                            //     shadowOffsetX: 0,
                            //     shadowColor: 'rgba(0, 0, 0, 0.5)'
                            //     }
                            // }
                        }
                    ]
                }
                if(this.option){
                   for(var k in this.option){
                     if(myoptions[k]){
                       Object.assign(myoptions[k],this.option[k])
                     }else{
                       myoptions[k] = this.option[k]
                     }
                   }
                }

                // return myoptions
             var   option = {
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        top: '5%',
                        left: 'center'
                    },
                    series: [
                        {
                        name: '',
                        type: 'pie',
                        radius: ['40%','60%'],
                        avoidLabelOverlap: false,
                        //   itemStyle: {
                        //     borderRadius: 10,
                        //     borderColor: '#fff',
                        //     borderWidth: 2
                        //   },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            // label: {
                            //   show: true,
                            //   fontSize: '40',
                            //   fontWeight: 'bold'
                            // }
                        },
                        labelLine: {
                            show: true
                        },
                        data: this.data
                        }
                    ]
                    };
    return option
               
            }
        },
   
       
    }
</script>

<style scoped lang="scss">
    .com-table-chart-general{
        display: inline-block;
    }
</style>
