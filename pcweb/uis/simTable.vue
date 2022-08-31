<template>
    <table class="my-table table table-bordered">
      <thead v-if="showHead">
        <tr>
          <th v-if="showSelect">
  <!--            <el-checkbox @change="onChangeAll($event)" v-model="checked"></el-checkbox>-->
          </th>
          <th v-for="head in heads" :key="head.name">{{head.label}}</th>
        </tr>
      </thead>
      <tbody>

      <tr v-for="(item, index) in rows" :key="index">
        <td v-if="showSelect">
            <el-checkbox :checked="has_checked(item)" @change="onChange($event, item)"></el-checkbox>
        </td>
       
        <td v-for="head in heads" :key="head.name" :style="{width:head.width}">
          <pre class="mypre" :style="{width:head.width}" v-if="head.pre">{{item[head.name]}}</pre>
          <span style="display: inline-block" :style="{width:head.width}" v-else>{{item[head.name]}}</span>
        </td>
      </tr>
      </tbody>
    </table>
</template>
<script>
export default{
    props:{
        heads:{},
        rows:{},
        showSelect:{
          default:false
        },
        selected:{},
        showHead:{
          default: true
        }
    },
    data(){
        return {
            checked:'',
            inn_selected:this.selected || []
        }
    },
    methods:{
      has_checked(item){
        if(ex.findone(this.inn_selected,{id:item.id})){
          return true
        }else{
          return  false
        }
      },
      onChangeAll(e){
        if(e){
          this.inn_selected =this.rows
        }else{
           this.inn_selected =[]
        }
      },
      onChange(e,item){
        if(e){
          this.inn_selected.push(item)
        }else{
          ex.remove(this.inn_selected,{id:item.id})
        }
        this.$emit('changed',this.inn_selected)
      }
    }
}
</script>
<style scoped lang="scss">
.my-table{
  width: auto;
  td{
    padding: 5px 20px;
  }
}
th{
  background-color: #E4E4E4;
  font-weight: normal;
  padding: 5px 20px !important;
}

table, th, td {
  border: 1px solid  #D7D7D7 !important;//;
}

.mypre{
  border: none;
  background: none;
  padding: 0;
}
</style>
