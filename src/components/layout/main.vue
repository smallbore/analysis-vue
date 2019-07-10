<template>
    <div class="main_body">
        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>

export default {
    
}
</script>

<style lang="less" scoped>
    .main_body{
        position:absolute;
        top: 44px;
        left:0;
        right:0;
        bottom:48px;
        transform: rotate(0deg); // fix 子元素超出边框圆角部分不隐藏的问题
        overflow: hidden;
    }
    
</style>