<template>
    <div class="top-navi">
      <div class="left">

      </div>
        hello
      <div class="right">
        <slot name="right">
          <div v-for="ii in rightHeads">
            <component v-if="ii.editor" :is="ii.editor" v-bind="ii.bind"></component>
            <a v-else :href="ii.url">{{ii.label}}</a>
          </div>
        </slot>
      </div>

    </div>
</template>
<script>
export default {
  props:{
    rightHeads:{}
  }

}
</script>
<style scoped lang="scss">
.top-navi{
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
}
.right{
  display: flex;
  a{
    color: white;
    text-decoration: none;
  }
}
</style>