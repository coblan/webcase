<template>
    <div class="norm-list">
        <div v-if="rows.length!=0" class="list-rows">
            <slot name='rows' :rows='rows'>

            </slot>
            <!-- <component v-for="row in rows" :key="row.pk || row.id || row.name" :is="ctx.item_ctx.editor" :ctx="get_item_ctx(ctx.item_ctx,row)"></component> -->
        </div>
        <div v-else style="line-height: 400px;text-align: center">
            <span>暂无数据</span>
        </div>
        <slot name="footer">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="row_pages.crt_page"
                :page-sizes="[20, 50, 100]"
                :page-size="row_pages.perpage"
                layout="total, sizes, prev, pager, next, jumper"
                :total="row_pages.total">
            </el-pagination>
        </slot>
        
         
        
    </div>
</template>

<script>
const { ref, reactive,computed ,onMounted,getCurrentInstance } = VueCompositionAPI

export class DirectorListLogic{
    /* 对接director的 table逻辑

     */
    constructor(director_name){
        this.row_pages = reactive({ 
            crt_page:1,
                total:0,
                perpage:20,})
        this.director_name= director_name
        this.rows=ref([])

    }
    getSetup(props){
        var instance = getCurrentInstance()
        onMounted(()=>{
            instance.proxy.search()
        })
        var dc ={
            row_pages:this.row_pages,
            rows:this.rows,
            get_rows:this.get_rows.bind(this),
        }
        
        ex.vueExpose(dc,instance)
        return  dc
    }
    getPostData(){
        return {_page:this.row_pages.crt_page,_perpage:this.row_pages.perpage}
    }
    get_rows(){
        var postdata=this.getPostData()
        cfg.show_load()
        return ex.director_call(this.director_name,postdata).then((resp)=>{
            cfg.hide_load()
            this.rows.value = resp.rows
            ex.vueAssign(this.row_pages,resp.row_pages)
        })
    }
   
}

export default {
    props:{
        extendLogic:{}
    },
    data(){
        return {
            _ref:{}
        }
    },
    setup(props){
        if(props.extendLogic){
            return props.extendLogic.getSetup(props)
        }
    },
        methods:{
            get_item_ctx(head,row){
                var dc={}
                ex.vueAssign(dc,head)
                dc.row=row
                return dc
                
            },
             search(){
                this.row_pages.crt_page =1
                return this.get_rows()
            },
                handleSizeChange(val){
                    this.row_pages.perpage=val
                    cfg.show_load()
                    this.search().then(()=>{
                        cfg.hide_load()
                    })
                },
                handleCurrentChange(){

                },
           
            
    }
}
</script>
