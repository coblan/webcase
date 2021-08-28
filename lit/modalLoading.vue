<template>
    <div class="modal-loading">
      <i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>
    </div>
</template>
<style scoped lang="scss">
.modal-loading{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(200,200,200,.2);
    text-align: center;
  .fa{
      position: relative;
      top:50%;
      transform: translateY(-50%);
  }
}

</style>