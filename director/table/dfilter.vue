<template>
    <div v-if='heads.length>0' class="com-filter flex flex-ac" >
            <com-auto-more org-height="2.8em">
                <div class="flex" style="flex-wrap: wrap;padding: 2px">
                        <div v-for="filter in heads" :key="filter.name" :id="'filter-'+filter.name" class="filter-item" style="margin-bottom: 0.3em">
                            <component @submit="m_submit()" :is="filter.editor" :head="filter" :search_args='searchArgs' > </component>
                        </div>
                </div>
            </com-auto-more>

        <button name="go" type="button" class="btn btn-success btn-sm" @click='m_submit()' >
            <i class="fa fa-search"></i>
            <span v-text="searchLabel"></span>
        </button>
    </div>
</template>
<script>
export default {
    props:{
        heads:{
            default:()=>{return []}
        },
        searchArgs:{
            default:()=>{ return {}}
        },
        searchLabel:{
            default:'搜索'
        }
    },
    data(){
        this.heads.sort((a,b)=>{
                if(this.searchArgs[a.name] || this.searchArgs['_start_'+a.name] || this.searchArgs['_end_'+a.name]){ 
                    return -1
                }else{
                    return 0
                }
            })
        return {
            // search_args:this.search_args
        }
    },
    watch:{
        // search_args(v){
        //     this.$emit('update:searchArgs',v)
        // }
    },
    methods:{
        m_submit(){
            this.$emit('search')
        }
    }
}
</script>
<style scoped lang="scss">
.com-filter{
    background-color: white;
    padding-right: 3px;
}
</style>