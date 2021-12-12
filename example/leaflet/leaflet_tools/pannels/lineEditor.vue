<template>
    <div>
        <button @click="createLine">创建线条</button>
        <!-- <button @click="showAllEle">显示所有</button> -->
        <button @click="confirmOk">确定</button>
        <button @click="deleteLine">删除</button>
        <button @click="finish">退出</button>
        <div v-if='view=="createLine"'>
            <div>选择两个点</div>
            
            <div>{{crt_line.first_point}}</div>
            <div>{{crt_line.second_point}}</div>
        </div>
        <div v-if='edit_status=="delete"'>
            选择线进行删除
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
            crt_line:null,
            first_point:'',
            second_point:'',
            pointmarks:[],
            line_marks:[],
            edit_status:'',
        }
    },
    mounted(){
        this.showAllPoint()
        this.showAllLine()
    },
    watch:{
        points(){
            this.showAllPoint()
            this.showAllLine()
        },
        lines(){
            this.showAllLine()
        }
    },
    methods:{
        // showAllEle(){
        //     this.showAllPoint()
        //     this.showAllLine()
        // },
        createLine(){
            this.view= 'createLine'
            this.crt_line = {
                first_point:'',
                second_point:'',
                first_id:'',
                second_id:'',

            }

        },
        confirmOk(){
            this.lines.push(this.crt_line)
            
            this.showAllLine()
        },
        deleteLine(){
            this.edit_status = 'delete'
        },
        showAllPoint(){
            var self = this
            ex.each(this.points,item=>{
                var ls = item.latlng.split(',')
                var marker = L.marker(ls,{title:item.label}).on('click', function(){
                    if(self.crt_line.first_id){
                        self.crt_line.second_point = `${this._latlng.lat},${this._latlng.lng}`
                        self.crt_line.second_id = item.id
                    }else{
                        self.crt_line.first_point = `${this._latlng.lat},${this._latlng.lng}`
                        self.crt_line.first_id = item.id
                    }
                   
    
                }).addTo(map);
                this.pointmarks.push(marker)
            })

          
        },
        showAllLine(){
            var self = this
            this.clearAllLine()
            ex.each(this.lines,item=>{
                var first_point = ex.findone(this.points,{id:item.first_id})
                var second_point = ex.findone(this.points,{id:item.second_id})
                
                // [item.first_point.split(','),item.second_point.split(',')]
                var line = L.polyline([first_point.latlng.split(','),second_point.latlng.split(',')], {color: 'red'}).on('click', function(){
                    if(self.edit_status =='delete'){
                        map.removeLayer(line)
                        ex.remove(self.lines,{first_id:item.first_id,second_id:item.second_id})
                    }
                }).addTo(map);
                this.line_marks.push(line)

            })
        },
        ckearPoints(){
             ex.each(this.pointmarks,item=>{
                map.removeLayer(item)
            })
        },
        clearAllLine(){
            ex.each(this.line_marks,line=>{
                map.removeLayer(line)
            })
        },
        finish(){
            this.clearAllLine()
            this.ckearPoints()
            this.$emit('finish')
        }
    }
}
</script>