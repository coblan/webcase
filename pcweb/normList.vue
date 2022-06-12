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

      <loadingMask v-show="is_loading"></loadingMask>
    </div>
</template>

<script>
// import Vue from 'vue';
// import { Pagination } from 'element-ui';
// Vue.use(Pagination)
// import 'element-ui/lib/theme-chalk/index.css'
// import modalLoading from 'webcase/lit/modalLoading.vue'
import loadingMask from 'weblib/uis/loadingMask.vue'
/*
*
* */

export default {
    components:{
      loadingMask,
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
        fetchRows:{
          // 获取rows的函数，由外部传入
        },
        // rowLogic:{
        //   default(){
        //     return new DirectorListLogic()
        //   }
        // }
    },
    data(){
        return {
          rows:this.initRows ,
          row_pages: this.rowPages ,
          search_args:{},
          is_loading:false,
        }
    },
    mounted(){

      // this.rowLogic.setup(this)
    },
    methods:{
        get_item_ctx(head,row){
            var dc={}
            ex.vueAssign(dc,head)
            dc.row=row
            return dc

        },
         async search(){
            this.row_pages.crt_page =1
            await this.get_rows()
            // return this.get_rows()
        },
        handleSizeChange(val){
            this.row_pages.perpage=val
            // cfg.show_load()
            this.is_loading=true
            this.search().then(()=>{
              this.is_loading =false
                // cfg.hide_load()
            })
        },
        handleCurrentChange(){

        },
      getPostData(){
        var page = {_page:this.row_pages.crt_page, _perpage:this.row_pages.perpage,}
        Object.assign(page,this.search_args)
        return page
      },
      // fetch_rows(){
      //   console.log('请overwrite fetch_rows 函数')
      // },
      async get_rows(){
        var postdata=this.getPostData()
        // cfg.show_load()
        this.is_loading=true
        var {rows,row_pages} = await  this.fetchRows() // this.fetch_rows()
        // cfg.hide_load()
        this.is_loading=false
        this.rows= rows
        ex.vueAssign(this.row_pages,row_pages)
      },

    }
}
</script>
<style scoped lang="scss">
.norm-list{
  position: relative;
}
</style>
