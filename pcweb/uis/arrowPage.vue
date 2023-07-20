<template>
    <div class="arrow-page" >
        <slot name="content" v-bind:current_rows="current_rows">

        </slot>
    </div>
</template>
<script>
export default {
    props:{
        rows:[]
    },
    computed:{
        current_rows(){
            if(this.rows){
                return this.rows.slice(0,6)
            }else{
                return []
            }
        }
    }
}
</script>
<style scoped>

</style>
