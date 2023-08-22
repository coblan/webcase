<template>
    <div class="file-disp">
        <div>{{ adapt_label }}</div>
        <div class="buttons">
            <div>预览</div>
            <div class="my-btn" @click="gotoDownload">下载</div>
        </div>
        
    </div>
</template>
<script>
import file_tool from 'webcase/tools/file_tool.js'
export default {
    props:{
        src:{}
    },
    data(){
        return {
            name:''
        }
    },
    mounted(){
        this.name = file_tool.fileName(this.src)
    },
    computed:{
        adapt_label(){
            if (!this.name){
                return 'File'
            }else if(this.name.length>=10){
                return this.name.slice(this.name.length-10)
            }else{
                return this.name
            }
            
        }
    },
    methods:{
        gotoDownload(){
            // var name = file_tool.fileName(this.src)
            ex.downloadFile(this.src,this.name)
        }
    }
}
</script>
<style scoped lang="scss">
.file-disp{
    border: 1px solid #c3c3c3;
    height: 100px;
    width: 96px;
    padding: 5px;
    border-radius: 6px;
}
.buttons{
    margin-top: 6px;
    display: flex;
    gap:6px;

    .my-btn{
        cursor: pointer;
    }
}
</style>