<template>
    <div>
        <button @click="finish">完成</button>
        <div>
            <label for="">编号</label>
            {{myid}}
        </div>
        <div>
            <label for="">名称</label>
            <input type="text" v-model='label'>
        </div>
        <div>
            <label for="坐标"></label>
            {{crt_point}}
        </div>
    </div>
  
</template>
<script>
export default {
    props:{
        point:{}
    },
    data(){
        return {
            label: this.point?this.point.label:'',
            myid:this.point?this.point.id:Date.now(),
            crt_point:null,
            crt_layer:null,
        }
    },
    computed:{
        cord(){
            if(this.crt_point){
                return `${this.crt_point.lat},${this.crt_point.lng}`
            }else{
                return ''
            }
        },
    },
    mounted(){
        // var popup = L.popup();
        this.initPoint()
        var self = this
        function onMapClick(e) {
            // popup
            // .setLatLng(e.latlng)
            // .setContent("You clicked the map at " + e.latlng.toString())
            // .openOn(map);
            if(self.crt_layer){
                map.removeLayer(self.crt_layer)
            }
            self.crt_point =  `${e.latlng.lat},${e.latlng.lng}` 
            self.crt_layer = L.marker(e.latlng).addTo(map);
            }
    
        map.on('click', onMapClick);
    },
    methods:{
        initPoint(){
            if (this.point){
                this.crt_point = this.point.latlng
                var ls = this.crt_point.split(',')
                 this.crt_layer = L.marker(ls).addTo(map);
            }
        },
        finish(){
            map.off('click');
            this.$emit('finish',{id:this.myid,label:this.label,latlng:this.crt_point})

        }
    }
}
</script>