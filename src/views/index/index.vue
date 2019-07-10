<template>
    <cube-scroll
        ref="scroll"
        :data="items"
        :options="options">
        <img src="@/assets/images/demo.png" style="width:100%;" @load="loadImg" :alt="items" />
    </cube-scroll>
</template>
<script>
export default {
    data(){
        return {
            items: ['http://192.168.1.240:8081/img/demo.899e70c0.png'],
            scrollbar: true,
            scrollbarFade: true,
            startY: 0,
        }
    },
    computed:{
        options() {
            return {
                scrollbar: this.scrollbarObj,
                startY: this.startY
            }
        },
        scrollbarObj: function() {
            return this.scrollbar ? { fade: this.scrollbarFade } : false
        }
    },
    methods:{
        loadImg(){ 
            this.$refs.scroll.refresh() 
        }
    }
}
</script>

