<template>
  <div class="grid-info" :style="mystyle" :class="type">

      <div v-for="i in col">
<!--        <div v-for="(head,index) in heads">-->
<!--          <div class="item-col" v-if="index%col == (i-1)">-->
<!--            <span>{{head.label}}:</span> <span>{{row[head.name]}}</span>-->
<!--&lt;!&ndash;            <div>{{index}}:{{i-1}}</div>&ndash;&gt;-->

<!--          </div>-->

<!--        </div>-->

        <table>
          <tr v-for="(head,index) in heads" v-if="index%col == (i-1)">
            <td> <span class="my-label">{{head.label}}:</span> </td>
            <td>{{row[head.name]}}</td>
          </tr>
        </table>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    heads:{},
    row:{},
    col:{},
    type:{},
  },
  computed:{
    mystyle(){
      return {
        'grid-template-columns':`repeat(${this.col},1fr)`
      }
    }
  }
}
</script>
<style scoped lang="scss">
.grid-info{
  display: grid;
  //grid-template-columns: repeat(3,1fr);
  gap: 10px;
}
//.item-col{
//  display: grid;
//  grid-template-columns: repeat(2,auto);
//  justify-items: start;
//}
.my-label{
  display: inline-block;
  padding:3px 5px 3px 0;
}
.boldLabel{
  .my-label{
    font-weight: bold;
  }
}
</style>