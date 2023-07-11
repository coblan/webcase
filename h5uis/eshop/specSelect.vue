<template>
    <div style="margin: 20px 0;border-bottom: 1px solid #b0b0b0;border-top: 1px solid #b0b0b0">
        <div v-for="kind in spec.kind_list" class="my-kind">
            <div style="white-space: nowrap;color: #bdbcbc">{{kind.name}}</div>
            <div style="display: flex;flex-wrap: wrap;margin-left: 10px;">
                <div v-for="v in kind.values" class="my-btn" :class="{active:isactive(kind,v)}" @click="switch_com(kind,v)">
                {{v}}
                </div>
            </div>

        </div>
    </div>

</template>
<script>
import ex from 'weblib/ex'
export default{
    props:{
        spec:{},
        value:{},
        /*
        {
            kind_list:[
                {
                    "name": "颜色",
                    "values": [
                        "红色",
                        "绿色"
                    ],
                    "ready_value": ""
                },
            ],
            inn_rows:[
                 {
                    "sale_price": "12",
                    "stock": "5",
                    "image": "/media/general_upload/images/2023_07/70f3db97ab06bd8e26fbcd8d8238cd46.jpeg",
                    "颜色": "红色",
                    "锤子": "积极"
                },
            ],
        }
         */
    },
    data(){
        return {
            current_kind:{
                /**
                 * 颜色:'红色'
                 * 尺寸:'中号'
                 */
            },
        }
    },
    mounted(){
        this.adaptCurrentKind()
    },
    // watch:{
        // current_kind(){
        //     debugger
        //     var one = ex.findone(this.spec.inn_rows,this.current_kind)
        //     this.$emit('input',one)
        // }
    // },
    methods:{
        updateValue(){
            var one = ex.findone(this.spec.inn_rows,this.current_kind)
            this.$emit('input',one)
        },
        adaptCurrentKind(){
            this.spec.kind_list.forEach(item=>{
                this.$set(this.current_kind,item.name,item.values[0])
            })
            this.updateValue()

        },
         switch_com(kind,v){
            // debugger
            // var key = this.mapper.get(kind.name)
            this.current_kind[kind.name] = v
            // this.$set('com_kind',kind.name,v)

            this.updateValue()

        },
        isactive(kind,v){
            return  this.current_kind[kind.name] == v
        },
    }
}
</script>
<style scoped lang='scss'>
.my-kind{
  display: flex;
  align-items: center;
  .my-btn{
    padding: 5px 10px;
    border: 1px solid grey;
    cursor: pointer;
    margin: 10px;
    white-space: nowrap;
    &.active{
      border-color: red;
      color: red;
    }
  }
}
</style>