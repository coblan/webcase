<template>
    <div class="oprations" style="padding: 5px;overflow: hidden">
        <component v-for="(op,index) in heads"
                   :is="op.editor"
                   :ref="'op_'+op.name"
                   :head="op"
                   :ctx="op"
                   :key="index"
                   :disabled="is_disable(op)"
                   v-show="is_show(op)"></component>
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
