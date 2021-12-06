<template>
    <div>
        <button @click="createLine">创建线条</button>
        <div v-if='view=="createLine"'>
            <div>选择两个点</div>
            
            <div>{{first_point}}</div>
            <div>{{second_point}}</div>
        </div>
    </div>
</template>
<script>
import ex from 'weblib/ex'
export default {
    props:{
        lines:{},
        points:{},
    },
    data(){
        return {
            view:'',
            first_point:'',
            second_point:'',
            pointmarks:[],
        }
    },
    mounted(){
        debugger
        this.showAllPoint()
    },
    watch:{
        points(){
            this.showAllPoint()
        }
    },
    methods:{
        createLine(){
            this.view= 'createLine'

        },
        showAllPoint(){
            var self = this
            ex.each(this.points,item=>{
                var ls = item.latlng.split(',')
                var marker = L.marker(ls,{title:item.label}).on('click', function(){
                    if(self.first_point){
                        self.second_point = `${this._latlng.lat},${this._latlng.lng}`
                    }else{
                        self.first_point = `${this._latlng.lat},${this._latlng.lng}`
                    }
                   
    
                }).addTo(map);
                this.pointmarks.push(marker)
            })

            ex.each(this.lines,item=>{

            })
        },
    }
}
</script>