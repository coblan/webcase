<template>
    <div>
        <div v-for="option in options" :key="option.name">{{option.label}}</div>
    </div>
</template>

<script>
export default {
    props:{
        options:{},
        value:{},
    }
}
</script>
