<template>
    <div>
        <div class="myrow" v-for="head in heads" :key="head.name">
            <div class="my-label">{{head.label}}</div>
            <div>{{row[head.name]}}</div>
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
.myrow{
    display: flex;
    .my-label{
        width: 100px;
    }
}
</style>