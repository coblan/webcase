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
export default{
    props:{
        spec:{}
        /*
        {
            kindList:[
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
        debugger
    },
    methods:{
        switch_com(){

        }
    }
}
</script>