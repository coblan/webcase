<template>
    <div>
        <div v-for="src in images">
            <imageDiv :src="src" alt=""></imageDiv>
        </div>

    </div>
</template>
<script>
import imageDiv from 'weblib/uis/imageDiv.vue'
export default {
    components:{
        imageDiv,
    },
    props:{
        images:{}
    },
    data(){
        return {
            current_image:''
        }
    },
    methods:{

    }
}
</script>