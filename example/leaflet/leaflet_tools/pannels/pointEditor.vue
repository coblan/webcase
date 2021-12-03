<template>
    <div>
        <button @click="creatPoint">创建点</button>
        <button @click="creatLink">创建连线</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            crt_point:null
        }
    },
    mounted(){
        // var popup = L.popup();
        var self = this
        function onMapClick(e) {
            // popup
            // .setLatLng(e.latlng)
            // .setContent("You clicked the map at " + e.latlng.toString())
            // .openOn(map);
            if(self.crt_point){
                map.removeLayer(self.crt_point)
            }
            self.crt_point = L.marker(e.latlng).addTo(map);


            }
    
        map.on('click', onMapClick);
    },
    methods:{
        creatPoint(){
            

        },
        creatLink(){

        }
    }
}
</script>