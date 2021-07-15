<template>
    <div class="msg-panel">
        <div class="title" v-text="title"></div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        title:{},
    }
}
</script>
<style scoped lang='scss'>
.msg-panel{
  background-color: white;
  border: 1px solid #ececec;
  padding: 10px;
  margin: 10px;

  .title{
   text-align: center;
    font-size: 110%;
    font-weight: 500;
    color: #6b6b6b;
    border-bottom: 1px solid #e5e5e5;
  }
 
}

.bg-gray{
    // background: rgb(230, 225, 225);
    // padding: 10px;
}

</style>
