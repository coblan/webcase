<template>
  <div class="flex" style="height: 100px;justify-content: space-around;align-items: center;border-bottom: 1px solid #dadada">
    <div v-for="head in heads" class="flex-v-c info-block" :class="{active:crt_tab==head.name}" @click="addSearch(head)">
      <div class="info" :class="head.type">{{row[head.name]}}</div>
      <div>{{head.label}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    heads:{},
    row:{},
  },
  data(){
    return {
      crt_tab:''
    }
  },
  methods:{
    addSearch(head){
      if(this.crt_tab==head.name){
        this.crt_tab =''
        this.$emit('trigger',{name:'',label:''})
      }else{
        this.crt_tab = head.name
        this.$emit('trigger',head)
      }

    }
  }
}
</script>
<style scoped lang="scss">
.info{
  font-weight: bold;
  font-size: 130%;
}
.info-block{
  cursor: pointer;
  position: relative;
&.active:after{
   content: '';
   display: block;
   height: 1px;
   position: absolute;
   background-color: #dc549b;
   left: 0;
   right: 0;
   bottom: -10px;
 }
}
.warning{
  color: red;
}
.danger{
  color: orange;
}
</style>