<template>
    <div class="cube-page">
        <head-body :headtext="headtext" :data-chang="routesTitle"></head-body>
        <main-body></main-body>
        <foot-body></foot-body>
    </div>
</template>
<script>
import headBody from './head.vue'
import mainBody from './main.vue';
import footBody from './foot.vue';
export default {
    components:{
        headBody,
        mainBody,
        footBody
    },
    data(){
        return {
            headtext: ''
        }
    },
    computed:{
        routesTitle() {
            let title = this.$route.matched[1].meta.title;
            this.headtext = title
            return title;
        } 
    }
}
</script>