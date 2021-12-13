<template>
    <div class="pop-pannel">
        <pathSearch :lines='model.lines' :points='model.points'></pathSearch>  
    </div>
</template>
<script>
import pathSearch from './user/pathSearch.vue'
import axios  from 'axios'
export default {
    components:{
        pathSearch,
    },
    props:{
        map:{}
    },
    data(){
        return {
            model:{}
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
         async getData(){
            var resp = await axios.get('http://demo.softjing.com/dapi/myjson/value')
            if(resp.data && resp.data.data){
                this.model = JSON.parse(resp.data.data)
            }
        }
    }
}
</script>

<style scoped lang='scss'>
.pop-pannel{
    position: fixed;
    top:30px;
    right: 30px;
    z-index: 9999;
    width: 200px;
    height: 400px;
    background-color: white;
}
</style>