<template>
<!-- com-table-rows com-table-grid -->
    <div class="d-table" >
        <el-table class="table flat-head flex-v" ref="e_table"
                              :data="rows"
                               border
                              show-summary
                              :row-class-name="tableRowClassName"
                              :span-method="arraySpanMethod"
                              :fit="false"
                              :stripe="true"
                              :default-sort='default_sort'
                              size="mini"
                              height="100%"
                              style="width: 100%"
                              lazy
                               row-key="pk"
                              :load="loadChildren"
                              :tree-props="{children: 'children', hasChildren:'hasChildren'}"
                              @header-dragend="on_header_dragend"
                              @sort-change="on_sort_change($event)"
                              @selection-change="handleSelectionChange"
                              :summary-method="getSum">

                        <el-table-column v-if="selectable"
                                type="selection"
                                width="50">
                        </el-table-column>
                        <template v-for="head in normed_heads" >
                             <el-table-column v-if="head.children"
                                :label="head.label"
                                :key="head.name"
                                 :class-name="head.class">
                                   <el-table-column v-for="head2 in name_in_list(head.children)"
                                            :class-name="head2.class"
                                            :key="head2.name"
                                             :show-overflow-tooltip="is_show_tooltip(head2) "
                                              :fixed="head2.fixed"
                                             :label="head2.label"
                                             :prop="head2.name.toString()"
                                             :sortable="is_sort(head2)"
                                             :sort-orders="['ascending', 'descending']"
                                             :width="head2.width">
                                        <template  slot-scope="scope">
                                            <component :is="head2.editor"
                                                        :key="head2.name"
                                                       @on-custom-comp="on_td_event($event)"
                                                       :row-data="scope.row" :field="head2.name" :index="scope.$index">
                                            </component>

                                        </template>

                                    </el-table-column>
                             </el-table-column>
                            <el-table-column v-else-if="! head.sublevel && head.editor"
                                                :key="head.name"
                                              :class-name="head.class"
                                             :show-overflow-tooltip="is_show_tooltip(head) "
                                              :fixed="head.fixed"
                                             :label="head.label"
                                             :prop="head.name.toString()"
                                             :sortable="is_sort(head)"
                                             :sort-orders="['ascending', 'descending']"
                                             :width="head.width">
                                <template  slot-scope="scope">
                                    <component :is="head.editor"
                                               @on-custom-comp="on_td_event($event)"
                                               :row-data="scope.row" :field="head.name" :index="scope.$index">
                                    </component>

                                </template>

                            </el-table-column>
                              <el-table-column v-else-if="! head.sublevel"
                                            :key="head.name"
                                             :show-overflow-tooltip="is_show_tooltip(head) "
                                             :fixed="head.fixed"
                                             :class-name="head.class"
                                             :prop="head.name.toString()"
                                             :label="head.label"
                                             :sortable="is_sort(head)"
                                             :sort-orders="['ascending', 'descending']"
                                             :width="head.width">
                            </el-table-column>

                        </template>
                    </el-table>
    
                    </div>
</template>
<script>
import {TableSetting} from './tableSetting.js'

export default {
    // components:{
    //     testTable,
    // },
    props:{
        heads:{
            default:()=>{return []},
        },
        rows:{
            default:()=>{return []},
        },
        rowSort:{
            default:()=>{return {
                sortable:[],
                sort_str:'',
            }}
        },
        adviseHeads:{
            default:()=>{return []},  
        },
        directorName:{},
        selectable:{
            default:true
        },
        // searchArgs:{
        //     default:()=>{ return {}}
        // },
        selected:{
            default:()=>[]
        },
        footer:{
            default:()=>[]
        },
    },
    // mixins: [mix_table_data, mix_ele_table_adapter],
    data(){
        return {
            // selected:[],
            advise_heads:this.adviseHeads,
            advise_width:{},
            advise_order:[],
            is_refresh_layout:false,
            node_map:{},
            parStore: ex.vueParStore(this),
        }
    },
    mounted(){
        // var loader = new TableSetting({key:this.adviseLocalName,advise_heads:this.advise_heads})
        // var settings = loader.loadSetting()
        // this.advise_order = settings.advise_order
        // this.advise_width = settings.advise_width
        // ex.each(this.heads,(head)=>{
        //     if( this.advise_width[head.name]){
        //         head.width = this.advise_width[head.name]
        //     }
        // })
        if(this.advise_heads.length >0){
            this.loadAdviseInfo()
            // this.refresh_layout()
        }
        ex.each(this.heads,head=>{
            if(head.css){
                ex.append_css(head.css)
            }
        })
        // this.loadAdviseInfo()
    },
    computed: {
        default_sort(){
            var sort_str = this.rowSort.sort_str
            if(!sort_str){
                return {}
            }
            var sort_list = sort_str.split(',')
            sort_str = sort_list[0]
            if(sort_str.startsWith('-') ){
                var prop=sort_str.slice(1)
                var order = 'descending'
            }else{
                var prop = sort_str
                var order = 'ascending'
            }
            return {prop: prop, order: order}
        },
        normed_heads(){
            if (this.is_refresh_layout){
                return []
            }
            var out_ls =[]
            if( this.advise_heads.length > 0){
                var left_heads = ex.filter(this.heads,(head)=>{
                    return ex.isin(head.name,this.advise_heads)
                })
            }else{
                var left_heads = this.heads
            }

            ex.each(left_heads,(head)=>{
                if(head.show) {
                    if(! ex.eval(head.show,{vc:this,head:head})  ){
                        return
                    }
                }
                out_ls.push(head)
            })

            if(this.advise_order.length > 0 ){
                out_ls = ex.sort_by_names(out_ls , this.advise_order,true)
            }
            return out_ls
        },
    },
    watch:{
        selected(newvalue,old){
            if(newvalue.length==0 && old.length !=0){
                this.$refs.e_table.clearSelection()
            }else{
                ex.each(old,(row)=>{
                    if(newvalue.indexOf(row)==-1){
                        this.$refs.e_table.toggleRowSelection(row,false)
                    }
                })
                ex.each(newvalue,(row)=>{
                    if(old.indexOf(row)==-1){
                        this.$refs.e_table.toggleRowSelection(row,true)
                    }
                })
            }
        },

    },
    methods:{
        loadChildren(tree, treeNode, resolve){
            var director_name = tree._director_name.split('.')[0]
            var search_args = {par:tree.pk}
            ex.vueAssign(search_args,this.parStore.search_args)
            ex.director_call('d.get_rows',{director_name:director_name,search_args:search_args }).then(resp=>{
                resolve(resp.rows)
            })
            this.node_map[tree.id] = {tree, treeNode, resolve}

        },
        updateNode(row) {
            //	有父节点才能说明劫持了加载方法
            if(!row.pk){
                this.parStore.vc.search()
                return
            }
            const parentNode = this.node_map[row.pk];
            if (parentNode) {
                const { tree, treeNode, resolve } = parentNode;
                //	必须清空表格组件里当前层级的数据才能赋值
                this.$set(this.$refs.e_table.store.states.lazyTreeNodeMap, tree.id, []);
                //	更新当前层级数据
                this.loadChildren(tree, treeNode, resolve);
            }
      },
        refresh_layout(){
            this.is_refresh_layout=true
            this.$nextTick(()=>{
                this.is_refresh_layout=false
            })
        },
        is_show_tooltip:function(head){
            if(head.show_tooltip ==undefined){
                return false
            }else {
                return head.show_tooltip
            }
        },
        is_sort:function(head){
            if(ex.isin(head.name,this.rowSort.sortable)) {
                return 'custom'
            }else{
                return false
            }
        },
        tableRowClassName:function({row, rowIndex}){
            var class_list =[]
            if(row._css_class){
                clss_list.push( row._css_class)
            }
            if(ex.isin(row,this.selected)){
                class_list.push('row-select')
            }
            return class_list.join(' ')

        },
        arraySpanMethod:function({ row, column, rowIndex, columnIndex }){
            // 计算布局
            if(this.table_layout){
                if(typeof  this.table_layout =='object'){
                    return this.table_layout[`${rowIndex},${columnIndex}`] || [1,1]
                }else{
                    return ex.eval(this.table_layout,{row:row,column:column,rowIndex:rowIndex,columnIndex:columnIndex})
                }
            }else{
                return [1,1]
            }
        },
         handleSelectionChange(val) {
            this.selected.splice(0,this.selected.length,...val) 
        },
        getSum:function(param){
            var footer =[]
            if(this.selectable){
                footer.push(this.footer._label || '')
            }
            ex.each(this.normed_heads,(head)=>{
                if(head.children){
                    var subheads = this.name_in_list(head.children)
                    ex.each(subheads,(subhead)=>{
                        if(this.footer[subhead.name] !=undefined){
                            footer.push(this.footer[subhead.name] )
                        }else{
                            footer.push( '')
                        }
                    })
                }else if(! head.sublevel){
                    if(this.footer[head.name] != undefined){
                        footer.push(this.footer[head.name])
                    }else{
                        footer.push( '')
                    }

                }
            })
            return  footer
        },
        on_header_dragend(newWidth, oldWidth, column, event){
              if(this.advise_heads.length >0){
                var key = '_table_settings_'+ this.directorName
                var setting_str = localStorage.getItem(key) || '{}'
                var setting_obj = JSON.parse(setting_str)
                setting_obj.advise_width = setting_obj.advise_width || {}
                setting_obj.advise_width[column.property] = newWidth
                localStorage.setItem(key,JSON.stringify(setting_obj))
            }

            // this.parStore.$emit('header-dragend',{newWidth:newWidth, oldWidth:oldWidth, column:column, event:event})

            // if(this.parStore.advise_heads && this.parStore.advise_heads.length >0){
            //     var key = '_table_settings_'+ this.parStore.director_name
            //     var setting_str = localStorage.getItem(key)
            //     var setting_obj = JSON.parse(setting_str)
            //     setting_obj.advise_width = setting_obj.advise_width || {}
            //     setting_obj.advise_width[column.property] = newWidth
            //     localStorage.setItem(key,JSON.stringify(setting_obj))
            // }
        },
        on_data_updated(){
            Vue.nextTick(()=>{
                //this.$refs.e_table.doLayout()
                this.parStore.e_table.doLayout()
            })
        },
        on_sort_change(event){

            this.$emit('sort-changed',event)
            // if(this._sort_has_changed ){
            //     this.parStore.sortChange(event)
            // }else if( event.order != this.default_sort.order || event.prop != this.default_sort.prop ) {
            //     this._sort_has_changed = true
            //     this.parStore.sortChange(event)
            // }

            // if(this._sort_has_changed ){
            //     this.parStore.sortChange(event)
            // }else if( event.order != this.default_sort.order || event.prop != this.default_sort.prop ) {
            //     this._sort_has_changed = true
            //     this.parStore.sortChange(event)
            // }
        },
        name_in_list:function(name_list){

            return ex.filter(this.normed_heads,(head)=>{
                return ex.isin(head.name,name_list)
            })
            //var heads_list = ex.filter(name_list,(name)=>{
            //   return ex.findone(this.normed_heads,{name:name})
            //})
            //var bb =  ex.map(heads_list,(name)=>{
            //    return this.keyed_heads[name]
            //})
            //return ex.filter(bb,(item)=>{
            //    return Boolean(item)
            //})
        },
        bus_search: function (search_args) {
            ex.assign(this.search_args, search_args)
            this.search()
        },
        on_td_event:function(e){
            // var fun_name = e.fun || e.name // 以后都用fun
            // if(e.head && e.head.arg_filter){
            //     var filter_fun=arg_filter[e.head.arg_filter]
            //     var normed_args = filter_fun(e.row,e.head)
            //     this.parStore[fun_name](normed_args)
            // }else{
            //     this.parStore[fun_name](e)
            // }
        },
        reloadAdviseInfo(){
            var loader = new TableSetting({table:this}) //{key:this.directorName})
            var settings = loader.loadSetting()
            var newfields = ex.array.sub(settings.advise_heads,this.advise_heads)
            this.advise_heads = settings.advise_heads
            for(var i=0;i<newfields.length;i++){
                if(!ex.isin(newfields[i],this.adviseHeads) ) {
                   return this.$emit('search')
                }
            }
            this.advise_order = settings.advise_order
            this.advise_width = settings.advise_width
            ex.each(this.heads,(head)=>{
                if( this.advise_width[head.name]){
                    head.width = this.advise_width[head.name]
                }
            })
            this.refresh_layout()
        },
        loadAdviseInfo(){
            var loader = new TableSetting({table:this}) //{key:this.directorName})
            var settings = loader.loadSetting()
            this.advise_heads = settings.advise_heads
            this.advise_order = settings.advise_order
            this.advise_width = settings.advise_width
            ex.each(this.heads,(head)=>{
                if( this.advise_width[head.name]){
                    head.width = this.advise_width[head.name]
                }
            })
            this.refresh_layout()

            // if(this.adviseHeads.length > 0 && this.adviseLocalName){
            //     var key = '_table_settings_'+this.adviseLocalName
            //     var setting_str = localStorage.getItem(key)
            //     if(setting_str){
            //         var setting_obj = JSON.parse(setting_str)
            //         setting_obj.advise_width  = setting_obj.advise_width || {}
            //         setting_obj.advise_order = setting_obj.advise_order || []
            //         ex.each(this.heads,(head)=>{
            //             if( setting_obj.advise_width[head.name]){
            //                 head.width = setting_obj.advise_width[head.name]
            //             }
            //         })
            //     }
            //     else{
            //         var setting_obj ={
            //             advise_heads:this.adviseHeads,
            //             advise_width:{},
            //             advise_order:[],
            //         }
            //         localStorage.setItem(key,JSON.stringify(setting_obj))
            //     }
            //     this.advise_heads = setting_obj.advise_heads
            //     this.advise_width = setting_obj.advise_width || {}
            //     this.advise_order= setting_obj.advise_order ||[]
            // }else{
            //     this.advise_heads = []
            //     this.advise_width = {}
            //     this.advise_order = []
            // }
        }
    }
}
</script>
<style scoped lang='scss'>
.d-table{
    position: absolute;
    top:0;
    left:0;
    bottom: 0;
    right:0;
}

.d-table::v-deep{
    .el-table__body-wrapper{
        flex-grow: 100;
    }
}
</style>