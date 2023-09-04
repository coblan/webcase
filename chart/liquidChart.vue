<template>

    <echartsDiv ref="chart"></echartsDiv>

</template>
<script>
import  echartsDiv from 'weblib/uis/echartsDiv.vue'
import ex from 'weblib/ex'
export  default  {
  components:{
    echartsDiv
  },
  props:{
    value:{}
  },
  async mounted() {
    await ex.load_js(cfg.js_lib.echarts)
    await ex.load_js('https://cdn.jsdelivr.net/npm/echarts-liquidfill@3.1.0/dist/echarts-liquidfill.min.js')
    this.draw({
      value:this.value
    })

  },
  methods:{
    draw(out_option){
      var option = {
        textStyle: {
          color: 'white',
        },
        grid:{
          top:10,
          left:10,
          bottom:10,
          right: 10,
        },
        // color:'yellow',
        // backgroundStyle: {
        //   color:'red',
        //   // borderColor: 'red',
        //   borderWidth: 1,
        //   shadowColor: 'rgba(0, 0, 0, 0.4)',
        //   shadowBlur: 20
        // },

        itemStyle: {
          color:'red',

          // opacity: 0.95,
          // shadowBlur: 50,
          shadowColor: 'yellow', //  'rgba(0, 0, 0, 0.4)',

        },
        series: [{
          type: 'liquidFill',
          // data: [0.6],
          data: [ {
            value: out_option.value, // 0.5,
            itemStyle: {
              color: '#3ff',
            }
          }],
          label:{
            fontSize: 25,
            color: '#8d7c06',
            insideColor: 'yellow',
          },
          color: ['#3ff', 'blue', 'yellow','green'],
          outline: {
            borderDistance: 3,
            itemStyle: {
              shadowBlur: 0,
              borderColor: '#3ff',
              borderWidth: 4
            }
          }

          // color:['#3ff'],
          // itemStyle: {
          //   color(params){
          //     // var colorlist=['#f00','#ff0','#fff','#0f0']
          //     // return colorlist[params.dataIndex]
          //     debugger
          //     return '#F00'
          //   },
          // },
        }]
      }
      this.$refs.chart.draw(option)
    }
  }

}
</script>