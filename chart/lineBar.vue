<template>
    <echartStaticBase  :option="my_option"></echartStaticBase>

</template>
<script>
import echartStaticBase from './echartStaticBase.vue'

    export default {
        components:{
            echartStaticBase,
        },
        props:{
            x:{},
            y:{},
            type:{
                default:()=>'line'
            },
            title:{},
          option:{},
        },
        data(){
            return {
          
            }
        },
        computed:{
            my_option(){
                let myoptions =  {
                      title: {
                          text: this.title,
                      },
                      tooltip: {
                        trigger: 'item'
                      },
                      xAxis: {
                          type: 'category',
                          data: this.x,
                      },
                      yAxis: {
                          type: 'value'
                      },
                      series: [
                          {
                          data: this.y,
                          type: this.type
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
   
        methods:{
            draw(){
                var myChart = echarts.init($(this.$el).find('.mychart')[0]);
                if (this.ctx.x) {
                    var myxlabel = this.rows.map(item => {return item[this.ctx.x]} ). reverse()
                } else {
                    var myxlabel = []
                }
                var legend = []
                var series = []
                ex.each(this.ctx.y, y => {
//                    var y_label = ex.findone(this.parStore.heads, {name: y.name}).label
                    var y_label = y.label
                    legend.push(y_label)

                series.push(
                        {
                            name: y_label,
                            type: y.type || 'bar',
                            yAxisIndex: y.axisIndex|| 0,
                            data: this.rows.map(item => {return item[y.name]}).reverse(),
                        barMaxWidth:30,
                        itemStyle: {
                    normal: {
                        color:y.color
                    }
                },
                //itemStyle: {
                //    normal: {
                //        color:'#27B6AC'
                //    },
                //},

            }
            )
            })

                // 指定图表的配置项和数据

                var yaxis = {
                    axisLabel: {
                        margin: 2,
                        formatter: function (value, index) {
                            var ab_value = Math.abs(value)
                            if ( ab_value >= 10000 && ab_value < 10000000) {
                                value = value / 10000 + "万";
                            } else if (ab_value >= 10000000) {
                                value = value / 10000000 + "千万";
                            }
                            return value;
                        }
                    },
                }
                if(this.ctx.yAxis ){
                    ex.each(this.ctx.yAxis,axe=>{
                        ex.assign(axe,yaxis)
                })

                }

                var option = {
                    title: {
                        text: ''
                    },
                    tooltip: {},
                    legend: {
                        data: legend //['用户数']
                    },
                    xAxis: {
                        data: myxlabel // this.childStore.rows.map(item=>{return item[item.x]}).reverse()
                        //data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: this.ctx.yAxis || yaxis,
                    series: series,
                    //    [{
                    //    name: '用户数',
                    //    type: 'bar',
                    //    data: this.parStore.rows.map(item=>{return item.betusernum}).reverse(),
                    //    barMaxWidth: 30,
                    //    itemStyle: {
                    //        normal: {
                    //            color:'#27B6AC'
                    //        },
                    //    },
                    //
                    //}]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        }
    }
</script>

<style scoped lang="scss">
    .com-table-chart-general{
        display: inline-block;
    }
</style>
