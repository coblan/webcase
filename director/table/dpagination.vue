<template>
    <el-pagination class="my-page"
            @size-change="on_perpage_change"
            @current-change="on_page_change"
            :current-page="rowPages.crt_page"
            :page-sizes="rowPages.options ||  [10,20, 50, 100]"
            :page-size="rowPages.perpage"
            layout="total, sizes, prev, pager, next, jumper"
            :total="rowPages.total">
    </el-pagination>
</template>
<script>
    export default {
        props:{
            rowPages:{
                default:()=>{return {} }
            },
            searchArgs:{
                default:()=>{ return {}}
            }
        },
        data:function(){
            return {}
            // var parStore = ex.vueParStore(this)
            // this.parStore= parStore.table?parStore.table:parStore
            // return {
            //     row_pages:this.parStore.row_pages,
            //     search_args:this.parStore.search_args
            // }
        },
        methods:{
            on_page_change:function(v){
                // this.search_args._page=v
                this.$emit('goto-page',v)
                // this.parStore.getRows()
                //this.bus.eventBus.$emit('pageindex-change',v)
            },
            on_perpage_change:function(v){
                this.searchArgs._perpage=v
                this.$emit('goto-page',1)
                // this.parStore.search()
                //this.bus.eventBus.$emit('perpage-change',v)
            }
        }
    }
</script>
<style scoped lang='scss'>
.my-page{
    background-color: white;
}
</style>