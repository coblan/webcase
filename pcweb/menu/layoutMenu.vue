<template>
    <div class="layout-menu">
        <div class="page-width-wrap">
            <div>
              <div  style="display: contents" v-for="item in leftmenu" :key="item.name">
                <component class="action" :class="{active:activeName==item.name}" v-if="item.editor" :is="item.editor" :ctx="item"></component>
                <a v-else class="action" :class="{active:activeName==item.name}" :href="item.url" >{{item.label}}</a>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
export default  {
  props:{
    leftmenu:{},
    rightmenu:{},
    activeName:{},
  }
}
</script>
<style scoped lang="scss">
.layout-menu{
  background-color: white;
  height: 4rem;
}
.page-width-wrap{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color:black;
  a{
    color: inherit;
    text-decoration: none;
    font-size: 1.1rem;
  }
  .action{
    display: inline-block;
    padding: 0 10px;
    &.active,&:hover{
      color: #fa524c;
    }
  }

}
</style>

