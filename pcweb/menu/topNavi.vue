<template>
    <div class="top-navi">
      <div class="left">

      </div>
        hello
      <div class="right">
        <slot name="right"></slot>
      </div>

    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.top-navi{
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
}
.right{

}
</style>