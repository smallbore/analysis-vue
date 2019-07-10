<template>
    <cube-scroll
        ref="scroll"
        :data="items"
        :options="options">
        <div class="photo_img">
            <img src="@/assets/images/mgear.png" alt="" />
        </div>
        <div class="name_text" style="margin-bottom:20px;">{{items[0].user.name}}</div>
        <!-- <cell :list="items[0].list"></cell> -->
        
        <div class="cells">
            <div class="cell cell_access">
                <div class="cell_bd">个人资料</div>
                <div class="cell_ft"></div>
            </div>
            <div class="cell" style="padding-top:8px;padding-bottom:8px;">
                <div class="cell_bd">手势密码</div>
                <div class="cell_ft"><cube-switch v-model="showPwd" @input="openLock"></cube-switch></div>
            </div>
            <div class="cell" @click="loginOut">
                <div class="cell_bd">退出登录</div>
                <div class="cell_ft"></div>
            </div>
        </div>
    </cube-scroll>
</template>
<script>
const _data = [
    {
        "user": {
            "name": "smallbore",
            "img": '@/assets/images/mgear.png'
        },
        "list": [
            {
                'title': '账号密码',
                'link': '/index',
                "image": 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=941445502,771347059&fm=58'
            },
            {
                'title': '用户中心',
                'link': '/index',
                "image": 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=941445502,771347059&fm=58'
            },
            {
                'title': '手势密码',
                'link': '/index',
                "image": 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=941445502,771347059&fm=58'
            },
            {
                'title': '我的团队',
                'link': '/index',
                "image": 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=941445502,771347059&fm=58'
            },
            {
                'title': '我的团队',
                'link': '/index',
                "image": 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=941445502,771347059&fm=58'
            },
            {
                'title': '我的团队',
                'link': '/index',
                "image": 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=941445502,771347059&fm=58'
            },
            {
                'title': '我的团队',
                'link': '/index',
                "image": 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=941445502,771347059&fm=58'
            },
            {
                'title': '我的团队',
                'link': '/index',
                "image": 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=941445502,771347059&fm=58'
            },
            {
                'title': '我的团队',
                'link': '/index',
                "image": 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=941445502,771347059&fm=58'
            },
            {
                'title': '没有连接',
                'link': '',
                "image": 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=941445502,771347059&fm=58'
            },
            {
                'title': '没有图片',
                'link': '/index',
                "image": ''
            }
        ]
    }
]
import gestureLock from '@/components/gesturelock'
import cell from '@/components/cell'

import { SET_PERSON, SET_TURELOCK } from '@/api/config.js'

export default {
    components:{
        gestureLock,
        cell
    },
    data(){
        return {
            showPwd: false,
            items: _data,
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
        openLock(value){
            let id = 'openlock'
            if(value){
                this.$router.push({
                    path: '/gesturelock',
                    query: {
                        id: id
                    }
                })
            }else{
                // 清除手势记录
               localStorage.removeItem(SET_TURELOCK); 
            }
        },
        loginOut(){
            this.$createDialog({
                type: 'confirm',
                title: '确认退出登陆',
                confirmBtn: {
                text: '确定',
                active: true,
                disabled: false,
                href: 'javascript:;'
                },
                cancelBtn: {
                text: '取消',
                active: false,
                disabled: false,
                href: 'javascript:;'
                },
                onConfirm: () => {
                    // 清除手势记录
                    window.localStorage.removeItem(SET_TURELOCK);
                    // 点击确认按钮
                    localStorage.removeItem(SET_PERSON);
                    this.$router.push('/login');
                },
                onCancel: () => {
                    this.$createToast({
                        type: 'warn',
                        time: 1000,
                        txt: '点击取消按钮'
                    }).show()
                }
            }).show()
            
        },
        getTureLock(){
            let tureLock = localStorage.getItem(SET_TURELOCK);
            if(tureLock){
                this.showPwd = true;
            }
        }
    },
    created(){
        this.getTureLock()
    }
}
</script>

<style lang="less" scoped>
.photo_img{
    background-color:#87888a;
    width:60px;
    height:60px;
    line-height:60px;
    margin:20px auto 0;
    border-radius:50%;
    overflow:hidden;
    img{
        width:100%;
    }
}
.name_text{
    text-align: center;
    padding:10px;
    font-size:14px;
}
</style>


