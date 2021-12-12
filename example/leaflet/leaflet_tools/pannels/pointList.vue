<template>
    <div>
        <template v-if='view=="pointList"'>
                <button @click="creatPoint">创建点</button>
                <button @click="showAllPoint">显示所有点</button>
                <button @click="editLink">编辑连线</button>
        </template>

        <div>
           <div v-if='view=="pointList"'>
                <div v-for='item in points' :key = 'item.id' >  
                    <!-- @click="editPoint(item)" -->
                   {{item.label}}-{{item.id}}
                </div>
           </div>
           <pointEditor v-if='view=="pointEditor"' @finish='onFinish' :point='edit_point'></pointEditor>
           <lineEditor v-if='view=="lineEditor"' :lines="lines" :points="points" @finish='linkFinish'></lineEditor>
        </div>
    </div>
  
</template>
<script>
import ex from 'weblib/ex'
import pointEditor from './pointEditor.vue'
import lineEditor from './lineEditor.vue'
export default {
    props:{
        points:{},
        lines:{},
    },
    data(){
        return {
            crt_point:null,
            view:'pointList',
            edit_point:null,
            pointmarks:[]
        }
    },
    components:{
        pointEditor,
        lineEditor,
    },
    watch:{
        points(){
            this.clearMarker()
            this.showAllPoint()
        }
    },
    methods:{
        clearMarker(){
            ex.each(this.pointmarks,marker=>{
                map.removeLayer(marker)
            })
        },
        showAllPoint(){
            var self = this
            ex.each(this.points,item=>{
                var ls = item.latlng.split(',')
                var marker = L.marker(ls,{title:item.label}).on('click', function(){
                    map.removeLayer(this)
                    self.editPoint(item)
                }).addTo(map);
                this.pointmarks.push(marker)
            })
        },
        creatPoint(){
            this.edit_point = null
            this.view = 'pointEditor'

        },
        editLink(){
            this.view = 'lineEditor'
            this.clearMarker()
        },
        linkFinish(){
            this.view = 'pointList'
            this.showAllPoint()
        },
        onFinish(event){
            this.view="pointList"
            var one =  ex.findone(this.points,{id:event.id})
            if(one){
                ex.vueAssign(one,event)
                // 修改 可能不能触发 watch
                this.showAllPoint()
            }else{
                this.points.push(event)
            }
            this.edit_point = null
        },
        editPoint(item){
            this.edit_point = item
            this.view = 'pointEditor'
            
        }
    }
}
</script>