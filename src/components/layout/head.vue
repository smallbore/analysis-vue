<template>
    <header class="header"><h1>{{headtext}}</h1> <i class="cubeic-back" v-if="backShow" @click="goback"></i></header>
</template>
<script>
export default {
    props:['headtext'],
    data(){
        return {
            backShow: true,
            whiteList: ['首页', '预约', '个人中心']
        }
    },
    methods:{
        goback(){
            history.go(-1)
        }
    },
    watch: {
        headtext: {
            handler: function (val) {
                if(this.whiteList.indexOf(val) !== -1){
                    this.backShow = false
                }
            },
            immediate: true
        }
    }
    
}
</script>

<style>
.header {
    position: relative;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #edf0f4;
    box-shadow: 0 1px 6px #ccc;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 5;
}
.header h1 {
    font-size: 16px;
    font-weight: 700;
}
.header .cubeic-back {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 15px;
    color: #fc9153;
}
[class*=" cubeic-"], [class^=cubeic-]{
    font-family: cube-icon!important;
    font-size: 100%;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: .2px;
    -moz-osx-font-smoothing: grayscale;
}
</style>