<template>
    <echartStaticBase  :option="chart_option"></echartStaticBase>

</template>
<script>
import echartStaticBase from './echartStaticBase.vue'

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
            echartStaticBase,
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
        computed:{
            chart_option(){
              var myoptions = {
                    title: {
                        text: this.title,
                        subtext: this.subtext,
                        left: 'center'
                    },
                  tooltip: {
                    trigger: 'item'
                  },
                  // legend: {
                  //   orient: 'vertical',
                  //   left: 'left',
                  // },

                      series: [
                            {
                            name: '',
                            type: 'pie',
                            radius: '50%',
                            data: this.data,

                            emphasis: {
                                itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
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
                return myoptions
            }
        },
   
       
    }
</script>

<style scoped lang="scss">
    .com-table-chart-general{
        display: inline-block;
    }
</style>
