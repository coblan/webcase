<template>
    <div>
        <div>
            <span>名字</span> <input type="text" v-model='label'>
        </div>
        <button @click="edit_polygon">编辑</button>
        <button @click="close_edit">关闭编辑</button>
        <button @click="finish">编辑完成</button>
    </div>
</template>

<script>
function layerToPolygen(layer){
    var pp = []
    var ls = layer.editing.latlngs[0][0]
    for(var i=0;i<ls.length;i++){
        var value = ls[i]
        pp.push([value.lat,value.lng])
    }
    //  var geojson = layer.toGeoJSON()
    //  var polygen1 =  geojson.geometry.coordinates[0]
    //     polygen1 .forEach(element => {
    //         var x = element[0]
    //         var y = element[1]
    //         element[0] = y
    //         element[1] = x
            
    //     });
    return pp
}
export default {
    props:{
        bound:{},
    },
    data(){
        var pp = this.bound.polygen?this.bound.polygen:[]
        return {
            id:this.bound.id?this.bound.id:null,
            label: this.bound.label ? this.bound.label:'',
            polygen:ex.copy(pp),
            polyobj:{}
        }
    },
    mounted(){
        window.draw_hand = (e) =>{
            // var geojson = e.layer.toGeoJSON()
            // this.polygen =  geojson.geometry.coordinates[0]
            // this.polygen .forEach(element => {
            //     var x = element[0]
            //     var y = element[1]
            //     element[0] = y
            //     element[1] = x
                
            // });
            this.polygen = layerToPolygen(e.layer)

            this.drawPolygen()
        }
        if(this.polygen.length>0){
            this.drawPolygen()
        }
        
    },
    methods:{
        drawPolygen(){
            
             this.polyobj = new L.Polygon(this.polygen).addTo(map);
             
        },
        edit_polygon(){
            this.polyobj.editing.enable() 
        },
        close_edit(){
            this.polyobj.editing.disable()
        },
        finish(){
            this.polyobj.redraw()
            var polygen = layerToPolygen(this.polyobj)
            map.removeLayer(this.polyobj)
            delete window.draw_hand
            this.$emit('finish',{label:this.label,polygen:polygen,id:this.id})
        }
    }
}
</script>