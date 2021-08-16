<template>
    <div class="norm-list">
        <div v-if="rows.length!=0" class="list-rows">
            <slot name='rows' :rows='rows'>

            </slot>

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
import Vue from 'vue';
import { Pagination } from 'element-ui';
Vue.use(Pagination)
import 'element-ui/lib/theme-chalk/index.css';

export class  DirectorListLogic{
    constructor() {
    }
    setup(vc){
      this.vc=vc
    }
    getPostData(){
      var page = {_page:this.vc.row_pages.crt_page, _perpage:this.vc.row_pages.perpage,}
          Object.assign(page,this.vc.search_args)
        return page
    }
    fetch_rows(){
      console.log('请overwrite fetch_rows 函数')
    }
    async get_rows(){

        var postdata=this.getPostData()
        cfg.show_load()
        var {rows,row_pages} = await this.fetch_rows()
        cfg.hide_load()
        this.vc.rows= rows
        ex.vueAssign(this.vc.row_pages,row_pages)
        // return ex.director_call(this.director_name,postdata).then((resp)=>{
        //     cfg.hide_load()
        //     this.rows.value = resp.rows
        //     ex.vueAssign(this.row_pages,resp.row_pages)
        // })
    }
}

export default {
    components:{
      // Pagination
    },
    props:{
        // extendLogic:{},
        initRows:{
          default:()=>{return []},
        },
        rowPages:{
          default:()=>{
            return{
                  crt_page:1,
                  total:0,
                  perpage:20,
                }
          }
        },
        rowLogic:{
          default(){
            return new DirectorListLogic()
          }
        }
    },
    data(){
        return {
          rows:this.initRows ,
          row_pages: this.rowPages ,
          search_args:{}
        }
    },
    mounted(){

      this.rowLogic.setup(this)
    },
    // setup(props){
    //     if(props.extendLogic){
    //         return props.extendLogic.getSetup(props)
    //     }
    // },
        methods:{
            get_item_ctx(head,row){
                var dc={}
                ex.vueAssign(dc,head)
                dc.row=row
                return dc
                
            },
             async search(){
                this.row_pages.crt_page =1
                await this.rowLogic.get_rows()
                // return this.get_rows()
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
