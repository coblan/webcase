<template>
    <div class="right-extend" @mouseleave="clearItem">
      <div class="right-extend-menu" >
        <div class="item" :class="{active:current==item}" :key="item.name" v-for="item in menu" @mouseenter="showItem(item)" >
          <span>{{item.label}}</span>
          <span style="font-size: 110%"><i class="el-icon-arrow-right"></i></span>
        </div>
      </div>
      <div class="content" v-if="current">
        <slot name="content" :contentCtx="current.content_ctx">

        </slot>
      </div>
    </div>
</template>
<script>
export  default  {
  props:{
    menu:{}
  },
  data(){
    return {
       current:null
    }
  },
  computed:{
    hasCurrent(){
      return ex.isEmpy
    }
  },
  methods:{
    showItem(item){
      this.current=item
    },
    clearItem(){
      console.log('移除')
      this.current =null
    }
  }
}
</script>
<style scoped lang="scss">
.right-extend{
  position: absolute;
  top:0;
  left: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
  display: flex;
}
.right-extend-menu{
  padding-top: 10px;
  background-color: rgba(0,0,0,.6);
  color: white;
  width: 210px;
}
.item{
  padding: 10px;
  display: flex;
  justify-content: space-between;
  &.active{
    background-color: #fa524c;
  }
}
.content{
  background-color: white;
  flex-grow: 10;
  -moz-box-shadow:7px 6px 10px #CFCFCF; -webkit-box-shadow:7px 6px 10px #CFCFCF; box-shadow:7px 6px 10px #CFCFCF;
}
</style>