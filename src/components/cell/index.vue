<template>
    <div class="cells">
        <div class="cell" :class="item.link_status? 'cell_access':''" v-for="(item, index) of dataList" :key="index" @click="tolink(item.link)">
            <div class="cell_hd" v-if="item.image_status">
                <img class="cell_icon" :src="item.image" alt="" />
            </div>
            <div class="cell_bd" v-text="item.title"></div>
            <div class="cell_ft"></div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        list:{
            type:Array,
        }
    },
    data(){
        return {
            dataList: []
        }
    },
    methods: {
        cellData(data){
            let listData = data.map( item => {
                return {
                    "link": item.link || '',
                    "link_status": item.link ? true : false,
                    "image": item.image,
                    "image_status": item.image ? true : false,
                    "title": item.title || '',
                }
            })
            this.dataList = listData;
        },
        tolink(link){
            if(link !== ''){
                this.$router.push(link);
            }
        }
    },
    watch: {
        list: {
            handler: function (val) {
                this.cellData(val)
            },
            immediate: true
        },
    }
}
</script>
<style lang="less">
@import url(../../assets/styles/mixin.less);
    .cells{
        position:relative;
        &::before{
            .setTopLine();
            z-index: 2;
        }
        &::after{
            .setBottomLine();
            z-index: 2;
        }
    }
    .cell{
        display: flex;
        align-items: center;
        padding:15px 20px;
        position:relative;
        font-size:16px;
        &::before{
            .setTopLine();
            left: 16px;
            z-index: 2;
        }
        &:first-child{
            &::before{
                display:none;
            }
        }
    }
    .cell_bd{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }
    .cell_ft{
        text-align: right;
        font-size:14px;
        color: rgba(0, 0, 0, 0.5);
    }
    .cell_icon{
        display:block;
        margin-right:10px;
        width:20px;
    }
    .cell_access{
        .cell_ft{
            padding-right: 16px;
            position:relative;
            &::after{
                content: " ";
                display: inline-block;
                height: 8px; 
                width: 8px; 
                border-width: 2px 2px 0 0; 
                border-color: #B2B2B2;
                border-style: solid;
                -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
                transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
                position: absolute;
                top: 50%;
                margin-top: -5px; /*no*/
                right: 0;
            }
        }
    }

</style>
