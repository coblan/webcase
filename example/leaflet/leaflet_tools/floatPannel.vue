<template>
    <div class="float-pannel">
        <button @click="createPolygen">创建区域</button>
        <div>
            <blockList v-if='view=="blocklist"'></blockList> 
        </div>
        <button @click="drawPolygen">画多边形</button>
        <button @click="savePolygon()">保存多边形</button>
    </div>
</template>
<script>
import {DrawTool} from './polygenTool.js'
import blockList from './pannels/blockList.vue'
export default {
    components:{
        blockList
    },
    props:{
        map:{}
    },
    data(){
        return {
            view:'blocklist'
        }
    },
    mounted(){
        this.drawer = new Drawer(this.map)
    },
    methods:{
        createPolygen(){

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
        savePolygon(){
            debugger
            var po = this.po
            
            console.log('mm')
        }
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