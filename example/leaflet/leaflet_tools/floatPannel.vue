<template>
    <div class="float-pannel">
        
        <button @click="saveToServer">保存</button>
        <template v-if='view !="pointEditor"'>
            <button @click="switchToPointCtrl" >点控制</button>
            <button @click="createBlock" >创建区域</button>
            <button @click="showAllBlock">显示所有区域</button>
            <button @click="closeBlock">关闭区域</button>
        </template>
       
        <template v-if='view=="pointEditor"'>
            <button @click="view='blocklist'">区域控制</button>
        </template>

        <div>
            <blockEditor v-if='view=="blockEditor"' @finish='onPolygenChange' :bound='crt_bound'></blockEditor> 
            <blockList v-if='view=="blocklist"' :bounding="model.blocks" @edit='editBlock'></blockList> 
            <pointEditor v-if='view=="pointEditor"'></pointEditor>
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
import cfg from 'weblib/pc_cfg'
import pointEditor from './pannels/pointEditor.vue'

export default {
    components:{
        blockList,
        blockEditor,
        pointEditor
    },
    props:{
        map:{}
    },
    data(){
        return {
            view: 'pointEditor', // 'blocklist',
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
        switchToPointCtrl(){
            this.view = 'pointEditor'
        },
        showAllBlock(){
            var outlist = []
            ex.each(this.model.blocks,item=>{
                outlist.push(
                    new L.Polygon(item.polygen, {
                        'label': item.label,
                        'popup': `等待对接${item.label}的数据`,
                        weight: 1
                    
                    }), 
                )
            })
            this. group = new L.LayerGroup(outlist).addTo(this.map);
        },
        closeBlock(){
            map.removeLayer(this.group)
        },
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
            cfg.show_load()
            var resp = await axios.post('http://demo.softjing.com/dapi/myjson/save',post_data)
            cfg.hide_load(2000)
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