<template>
    <div>
        <slot name='d-filter'>
            <dfilter></dfilter>
            
        </slot>

    </div>
</template>
<script>
import dfilter from './dfilter.vue'
export default {
    components:{
        dfilter,
    }
}
</script>
