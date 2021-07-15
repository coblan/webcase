<template>
    <div>
        <div class="action-panel">
            <div class="action" :class="{active:value == act.name}"
                @click="on_click(act)" v-for="act in items" :key='act.name'>
                <span>{{act.label}}</span>
            </div>
        </div>

    </div>
</template>
<script>
/*
@items:[{name:'xxx',label:'xxx'}]
 */
    export default {
        props:{
            items:{
                default:()=>[]
            },
            value:{},
        },
        // props:['ctx'],
        data(){
            return {
                // crt_name:this.items[0]
                // crt_label: this.ctx.actions[0].label
            }
        },
        mounted(){
            // if(this.ctx.mounted_express){
            //     ex.eval(this.ctx.mounted_express,{vc:this,head:this.ctx})
            // }
        },
        methods:{
            on_click(act){
                // this.$emit('update:activeName',act.name)
                this.$emit('input',act.name)
                // this.crt_label = act.label
                if(act.click_express){
                    ex.eval(act.click_express,{vc:this})
                }else{
                    this.$emit('trigger',act)
                }
                
            }
        }
    }
</script>

<style scoped lang="scss">
/*.action-panel{*/
    /*display: flex;*/
    /*.action{*/
        /*margin: 0 10px;*/
        /*padding: 5px 10px;*/
        /*cursor: pointer;*/
        /*line-height: 40px;*/

        /*&.active{*/
            /*border-bottom:  1px solid grey;*/
         /*}*/
    /*}*/
/*}*/
.action-panel{
    box-sizing: border-box;
    height: 60px;
    /*width: 100%;*/
    padding: 15px;
}
.action{
    font-size: 15px;
    height: 30px;
    line-height: 30px;
    padding-left: 15px;
    padding-right: 15px;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 2px;
}
.action.active{
    color: #ffffff;
    background-color: #80bcff;
    cursor: default;
    padding-right: 5px;
    &:after{
         content: '';
         width: 0;
         height: 0;
         border-left: 5px solid transparent;
         border-right: 5px solid transparent;
         border-top: 5px solid #80bcff;
         position: relative;
         top: 30px;
         right: 50%;
     }
}

</style>