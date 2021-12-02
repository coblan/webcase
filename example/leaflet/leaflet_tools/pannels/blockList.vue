<template>
    <div class="block-list">
        <div v-for='item in normed_bounding' :key="item.id" @click="edit(item)">
            <span>{{item.label}}</span>
            <button @click.stop="deleteMe(item)">删除</button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        bounding:{}
    },
    computed:{
        normed_bounding(){
            
            return this.bounding.sort((a,b)=>{return a.label.localeCompare(b.label) })
        }
    },
    methods:{
        edit(item){
            this.$emit('edit',item)
        },
        deleteMe(item){
            ex.remove(this.bounding,{id:item.id})
        }
    }
}
</script>

<style scoped lang='scss'>
.block-list{
    height: 500px;
    overflow: auto;
    background-color: white;
}
</style>