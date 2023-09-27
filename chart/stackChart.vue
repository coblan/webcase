<template>
    <div style="position: absolute;top:0;left: 0;right: 0;bottom: 0;">
      <echartsDiv style="width: 100%;height: 100%;" ref="chart"></echartsDiv>
    </div>
  </template>
  
  <script>
  import  echartsDiv from 'weblib/uis/echartsDiv.vue'
  export default {
    components:{
      echartsDiv
    },
    props:{
        /*
        rows:[]
         * xlabel="month" :ylabel="['已解决','未解决']" :color="{'未解决':'red','已解决':'green'}"
         */
      xlabel:{},
      ylabel:{},
      rows:{},
      color:{},
    },
    data(){
      return {
  
      }
    },
    mounted(){
  
    },
    methods:{
      draw(){
        this. getOption()
        this.$refs.chart.draw(this.option)
      },
      getOption(){
        var self =this
        var xlabel = ex.map(this.rows,row=>{
          return row[this.xlabel]
        })
        var series  = []
          ex.each(this.ylabel,yl=>{
            var dd = ex.map(this.rows,row=>{
                return row[yl] || 0
            })
            series.push(
                {
                  name: yl, //'Direct',
                  type: 'bar',
                  barMaxWidth: 30,
                  stack: 'total',
                  color:self.color[yl],
                  label: {
                    show: true
                  },
                  emphasis: {
                    focus: 'series'
                  },
                  data: dd , // [320, 302, 301, 334, 390, 330, 320]
                }
            )
          })
  
       var option = {
         tooltip: {
           trigger: 'axis',
           axisPointer: {
             // Use axis to trigger tooltip
             type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
           }
         },
         legend: {},
         grid: {
           left: '3%',
           right: '4%',
           bottom: '3%',
           containLabel: true
         },
         yAxis: {
           type: 'value'
         },
         xAxis: {
           type: 'category',
           data: xlabel , //  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
         },
         series: series
         //     [
         //   {
         //     name: 'Direct',
         //     type: 'bar',
         //     stack: 'total',
         //     label: {
         //       show: true
         //     },
         //     emphasis: {
         //       focus: 'series'
         //     },
         //     data: [320, 302, 301, 334, 390, 330, 320]
         //   },
         //   {
         //     name: 'Mail Ad',
         //     type: 'bar',
         //     stack: 'total',
         //     label: {
         //       show: true
         //     },
         //     emphasis: {
         //       focus: 'series'
         //     },
         //     data: [120, 132, 101, 134, 90, 230, 210]
         //   },
         // ]
       };
        this.option = option
      }
    }
  }
  
  
  
  </script>