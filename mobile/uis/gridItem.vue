<template>
    <div class="grid-item">
        <div class="myrow" v-for="head in heads" :key="head.name">
            <div class="my-label">{{head.label}}</div>
            <div v-if="head.editor=='com-table-picture'">
              <img class="image-show" :src="row[head.name]" alt="">
            </div>
            <div v-else>{{row[head.name]}}</div>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        heads:{},
        row:{},
    }
}
</script>
<style scoped lang="scss">
.grid-item{
  margin: 10px 5px;
  padding: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
}
.myrow{
    display: flex;
    align-items: center;
    padding: 5px 0;
    .my-label{
        width: 100px;
    }
}
.image-show{
  width: 100px;
}
</style>