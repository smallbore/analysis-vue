<template>
    <div class="login_page">
      <div class="login_logo">经营分析系统</div>
      <div class="login_box">
        <div class="login_from">
          <div class="login-input">
            <div  class="login_label">账号：<span v-if="nameShow">账号不能为空</span></div>
            <cube-input class="login-input_sm" placeholder="请输入账号" v-model="name"></cube-input>
          </div>
          <div class="login-input">
            <div  class="login_label">密码：<span v-if="passShow">密码不能为空</span></div>
            <cube-input class="login-input_sm" placeholder="请输入密码" v-model="password"  type="password" :eye="eye">
            </cube-input>
          </div>
          <cube-button :primary="true" class="login_btn" @click="toLogin">登录</cube-button>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      password:'',
      eye: {
        open: true,
        reverse: true
      },
      nameShow: false,
      passShow: false,
    }
  },
  methods:{
    toLogin(){
      let name = this.name;
      let password = this.password;
      if(!name) return this.nameShow = true;
      this.nameShow = false;
      if(!password) return this.passShow = true;
      this.passShow = false;
      let data = {
        name: name,
        password: password
      }
      // login
      const toast = this.$createToast({
        time: 0,
        txt: '正在登录',
        mask: true
      })
      toast.show()
      setTimeout(() => {
        localStorage.setItem('SET_PERSON',name)
        this.$router.push('/personal');
        toast.hide()
      },2000)
    }
  }
}
</script>

<style lang="less" scoped>
.login_page{
  height:100%;
  width:100%;
  background-image:url(../../assets/images/init.png);
  background-size: 100% 100%;
  position:relative;
  &::after{
    content: ""; 
    width:100%; 
    height:100%; 
    position: absolute; 
    left:0; 
    top:0; 
    background: inherit; 
    filter: blur(10px); 
    z-index: 2;
  }
}
.login_box{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:80%;
  height:250px;
  margin: auto;
  background:#fff;
  z-index: 10;
  border-radius:2px;
}
.login_from{
  margin-top:10px;
  padding:10px 20px;
  .login_btn{
    margin-top:10px;
    padding:10px 0;
    transition: all 0.1s ease-out;
    &:active{
      transform: scale(1.03);
    }
  }
}
.login-input{
  overflow: hidden;
  margin-top:10px;
  .login_label{
    font-size:16px;
    position:relative;
    span{
      color:red;
      font-size:12px;
      position: absolute;
      right:0;
      top:0;
    }
  }
  .login-input_sm{
    line-height: normal;
    margin:8px 0;
  }
}
.login_logo{
  position: absolute;
  top:100px;
  left:0;
  width:100%;
  text-align: center;
  z-index: 10;
  font-size:34px;
  color: #fff;
  text-shadow: 0 8px 9px #394e5a, 0px -2px 1px #064c8a;
  font-weight: bold;
  text-align: center;
}
</style>

