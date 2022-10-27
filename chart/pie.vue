<template>
    <echartsDiv ref="chart"></echartsDiv>  
    <!-- <echartStaticBase  :option="chart_option"></echartStaticBase> -->

</template>
<script>
// import echartStaticBase from './echartStaticBase.vue'
 import  echartsDiv from 'weblib/uis/echartsDiv.vue'
import ex from '../director/exfun/main'

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
            // echartStaticBase,
        },
        props:{
            kvList:{},
            title:{},
            subtitle:{},
            option:{},
            seriesOption:{},
            
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
              var myoptions = {
                    title: {
                        text: this.title,
                        subtext: this.subtext,
                        left: 'center',
                        top:'10%'
                    },
                  tooltip: {
                    trigger: 'item'
                  },
                  legend: {
                    // orient: 'vertical',
                    // left:'right',
                    // right: '5%',
                    top:'bottom',
                    align:'left',
                  },

                      series: [
                            {
                            name: '',
                            type: 'pie',
                            radius: '50%',
                            data: this.kvList,

                            emphasis: {
                                itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },
                            label:{
                                show:false
                            },
                            labelLine:{
                                show:false
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
                // if(this.option){
                //     ex.vueAssign(myoptions,this.option)
                // }
                if(this.seriesOption){
                    ex.each(myoptions.series,item=>{
                        ex.vueAssign(item,this.seriesOption)
                    })
                }
                return myoptions
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
