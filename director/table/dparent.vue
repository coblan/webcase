<template>
    <div class="table-parents">
          <ol v-if="parents.length>0" class="breadcrumb jb-table-parent">
            <li v-for="par in parents" :key='par.value'><a href="#" @click="on_click(par)"  v-text="par.label"></a></li>
        </ol>
    </div>
</template>

<script>
export default {
    props:{
        parents:{
            default:()=>[]
        }
    },
    methods:{
        on_click:function(par){
            this.$emit('click-parent',par.value)
            // if(this.parStore.option.parent_click){
            //     ex.eval(this.parStore.option.parent_click,{ps:this.parStore,parent:par})
            // }else{
            //     this.parStore.$emit('parent_changed',par)
            //     this.parStore.get_childs(par.value)
            // }
           
        }
    }
}
</script>

