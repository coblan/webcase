<template>
     <echartsDiv ref="chart" ></echartsDiv>
</template>

<script>
import  echartsDiv from 'weblib/uis/echartsDiv.vue'
export default{
    components:{
        echartsDiv,
    },
    props:{
        title:{},
        ydata:{}, //['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        xdata:{} 
        /* [
                        {
                        name: '2011',
                
                        data: [18203, 23489, 29034, 104970, 131744, 630230]
                        },]
                        */
    

    },
    computed:{
        myoption(){
            var series_data = []
            this.xdata.forEach(item=>{
                series_data.push({
                    name:item.name,
                    data:item.data,
                    type:'bar',
                    barWidth:20,
                })
            })
           var option = {
                    title: {
                        text: this.title,
                        left: 'center',
                        top:'5%'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                        type: 'shadow'
                        }
                    },
                    legend: {
                         top:  'bottom',
                         left: 'center',
                    },
                    grid: {
                        left: '10%',
                        right: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: this.ydata
                    },
                    series: series_data
                    };
            return option
        }
    },
    mounted(){
        // this.$nextTick(()=>{
        //     this.$refs.chart.draw(this.myoption)  
        // })
         
    },
    methods:{ 
        draw(){
            this.$nextTick(()=>{
                this.$refs.chart.draw(this.myoption)  
            })
           
        }
     }
}
 

 
</script>
