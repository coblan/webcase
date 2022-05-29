<template>
    <div v-if='heads.length>0' class="com-filter flex flex-ac" >
            <com-auto-more org-height="2.8em">
                
           
                <div class="com-wrap">

                    <component class="com-item" v-for="(op,index) in opHeads"
                        :is="op.editor"
                        :ref="'op_'+op.name"
                        :head="op"
                        :ctx="op"
                        :key="index"
                        :disabled="is_disable(op)"
                        v-show="is_show(op)"></component>

                        <div class="com-item spliter" v-if="opHeads.length>0 && heads.length>0"> </div>

                        <div v-for="filter in heads" :key="filter.name" :id="'filter-'+filter.name" class="filter-item com-item" >
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
import doperation from './doperation.vue'
export default {
    components:{
        doperation,
    },
    props:{
        heads:{
            default:()=>{return []}
        },
        searchArgs:{
            default:()=>{ return {}}
        },
        searchLabel:{
            default:'搜索'
        },
        opHeads:{
             default:()=>[]
         }
    },
    data(){
        return {
            parStore:ex.vueParStore(this)
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
        },
        is_disable: function (op) {
            if (op.show_express == undefined) {
                return false
            } else {
                return ex.eval(op.disabled_express, {ps: this.parStore})
            }

         },
        is_show: function (op) {
            if (op.show_express == undefined) {
                return true
            } else {
                return ex.eval(op.show_express, {ps: this.parStore})
            }
        },
    }
}
</script>
<style scoped lang="scss">
.com-filter{
    background-color: white;
    padding-right: 3px;
}
.com-wrap{
    display: flex;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(auto-fill, auto);
    // grid-row-gap: 5px;
    // grid-column-gap: 5px;

    padding: 2px;
    align-items:center;

    .com-item {
        margin: 2px 2px 2px 0;
    }
    .spliter{
        height: 16px;
        margin-left: 5px;
        margin-right: 5px;
        // border-right: 2px solid #a2a2a2;
    }
}
</style>