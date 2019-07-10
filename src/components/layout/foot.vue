<template>
    <footer class="footer" :data-title="routesTitle">
         <cube-tab-bar
    v-model="selectedLabelDefault"
    :data="tabs"
    @change="changeHandler">
  </cube-tab-bar>
    </footer>
</template>
<script>
export default {
    data () {
        return {
            selectedLabelDefault: '首页',
            tabs: [{
                label: '首页',
                icon: 'cubeic-home'
            }, {
                label: '预约',
                icon: 'cubeic-calendar'
            }, {
                label: '我的',
                icon: 'cubeic-person'
            }]
        }
    },
    computed:{
        routesTitle() {
            return this.selectedLabelDefault = this.$route.matched[1].meta.tabs;
        } 
    },
    methods: {
        changeHandler (label) {
            switch(label) {
                case '首页':
                    this.$router.push('/index');
                    break;
                case '预约':
                    this.$router.push('/appointment');
                    break;
                case '我的':
                    this.$router.push('/personal');
                    break;
            }
        }
  }
}
</script>

<style lang="less">
    .footer{
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        background-color: #edf0f4;
        box-shadow: -1px 0px 6px #ccc;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        font-size:16px;
        .cube-tab{
            font-size:12px;
            padding:5px 0;
            i{
                font-size:22px;
            }
        }
    }
</style>
