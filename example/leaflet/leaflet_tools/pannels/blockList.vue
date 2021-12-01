<template>
    <div>
        <div v-for='(item,index) in bounding' :key="index" @click="edit(item)">
            {{item.label}}
        </div>
    </div>
</template>
<script>
export default {
    props:{
        bounding:{}
    },
    methods:{
        edit(item){
            this.$emit('edit',item)
        }
    }
}
</script>