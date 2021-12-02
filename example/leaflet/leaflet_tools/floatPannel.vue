<template>
    <div class="float-pannel">
        <button @click="createBlock" >创建区域</button>
        <button @click="saveToServer">保存</button>
        <div>
            <blockEditor v-if='view=="blockEditor"' @finish='onPolygenChange' :bound='crt_bound'></blockEditor> 
            <blockList v-if='view=="blocklist"' :bounding="model.blocks" @edit='editBlock'></blockList> 
        </div>

        <!-- <button @click="drawPolygen">画多边形</button>
        <button @click="savePolygon()">保存多边形</button> -->
    </div>
</template>
<script>
import {DrawTool} from './polygenTool.js'
import blockList from './pannels/blockList.vue'
import blockEditor from './pannels/blockEditor.vue'
import ex from 'weblib/ex'
import axios from 'axios'
window.ex = ex
export default {
    components:{
        blockList,
        blockEditor
    },
    props:{
        map:{}
    },
    data(){
        return {
            view:'blocklist',
            crt_bound:{},
            model:{
                blocks:[]
            },
        }
    },
    mounted(){
        this.drawer = new Drawer(this.map)
        this.getData()
    },
    methods:{
        createBlock(){
            this.crt_bound = {}
            this.view = 'blockEditor'
        },
        editBlock(item){
            this.crt_bound = item
            this.view = 'blockEditor'
        },
        async getData(){
           var resp = await axios.get('http://demo.softjing.com/dapi/myjson/value')
           if(resp.data && resp.data.data){
                this.model = JSON.parse(resp.data.data)
           }
           console.log('bbc')
        },
        async saveToServer(){
            var post_data = {
                text:JSON.stringify(this.model)
            }
            var resp = await axios.post('http://demo.softjing.com/dapi/myjson/save',post_data)
            debugger
            console.log
        },
        onPolygenChange(event){
            this.view='blocklist'
            if(event.polygen.length ==0){
                return
            }
            if(!event.id){
                event.id = Date.now()
                this.model.blocks.push(event)
            }else{
                var one = ex.findone(this.model.blocks,{id:event.id})
                one.polygen = event.polygen
                one.label = event.label
            }
        },
        drawPolygen(){
            // this.drawer.polygon()
            // DrawTool.init(this.map)
           this. po = new L.Polygon([
             [-50, 10], [50, 10], [50, 50], [-50, 50]
            ], {
                'label': 'Polygon 2',
                'popup': 'Polygon 2'
            }).addTo(this.map);

            
            this.po.editing.enable()
        },
     
    }
}
</script>

<style scoped lang='scss'>
.float-pannel{
    position: fixed;
    top:30px;
    right: 30px;
    z-index: 9999;
    width: 200px;
    height: 400px;
    background-color: white;
}
</style>