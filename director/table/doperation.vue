<template>
    <div class="oprations" style="padding: 5px;overflow: hidden;padding-right: 0;flex-shrink: 0;">
        <component v-for="(op,index) in bus_operations"
                   :is="op.editor"
                   :ref="'op_'+op.name"
                   :head="op"
                   :ctx="op"
                   :key="index"
                   :disabled="is_disable(op)"
                   v-show="is_show(op)"></component>
      <el-button-group class="utility-pannel">
        <component class="com-item" v-for="(op,index) in utility_operation"
                   :is="op.editor"
                   :ref="'op_'+op.name"
                   :head="op"
                   :ctx="op"
                   :key="index"
                   :disabled="is_disable(op)"
                   v-show="is_show(op)"></component>
      </el-button-group>
    </div>
</template>
<script>
//    新的table-operations控件,对接 dtable
    export default {
        props:{
            heads:{
                default:()=>[]
            }
        },
        data(){
            var self = this
            this.parStore = ex.vueParStore(this)
            return {
                // ops: this.parStore.ops,
            }
        },
      computed:{
        bus_operations(){
          return ex.filter(this.heads,item=>{
            return ! item.utility
          })
        },
        utility_operation(){
          return ex.filter(this.heads,item=>{
            return item.utility
          })
        }
      },
        methods: {
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
.utility-pannel{
  float: right;
}
</style>
