
# analysis
### 经营分析系统
前端开发文档
一. 前端框架插件支持
1. node 环境
2. yarn 包管理工具
1. vue + vue-router + vuex vue全家桶
2. cude-ui 移动端UI框架 [框架链接](https://didi.github.io/cube-ui/#/zh-CN/docs/introduction)
3. less + stylus Css预处理程序
4. postcss-px2rem, amfe-flexible PX转rem适配移动端设备
6. echarts 图形插件
7. crypto-js 加解密插件
8. axios 异步请求插件
8. manifest.json 小程序配置文件

介绍 
vue全家桶，上手速度快，面向人群广泛。
cude-ui 是基于 Vue.js 实现的精致移动端组件库。特点支持 better-scroll，支持postcss-px2rem，支持theme主题颜色。
同时支持 less和stylus Css样式预处理
postcss-px2rem 是px转换rem插件配合amfe-flexible使用，如果项目中不想转化rem，可以在后面添加‘/*no*/’过滤。
postcss-px2rem 的配置项整合到package.json; 本项目配置remUnit=37.5，对于375设计稿1:1输出，而750则是2:1。
manifest.json 打包小程序需要配置的启动页面，已经整合到 public 目录下。
用于Hbuilder编辑器下的云打包工程，相关打包流程请看官方文档。

运行环境

"node > 10"
"vue@cli > 3"
"not ie <= 11",
"Android >= 4.0",
"iOS >= 8"

项目目录
```
>public                     // 项目出口文件
    >init                   // app启动图
    >favicon.ico            // ico项目logo
    >index.html             // 项目出口index.html
    >manifest.json          // app打包配置文件
>src                        // 项目原代码
    >api                    // 后台api入口
        >config.js          // 定义全局变量
        >index.js           // 配置api方法
    >assets                 // 静态资源路径
        >images             // 图片储存路径
        >styles             // 样式资源路径
    >components             // 自定义组件
        >cell               // cell 组件
        >gesturelock        // 手势密码
        >layout             // 页面架构
        .......
    >router                 // 路由配置
        >asyncRouter.js     // 动态路由
        >index.js           // 静态路由
        >permission.js      // 路由权限
        // 注：实现的是单点路由，跳转前加载路由，所以路由参数只能通过jquery获取参数
    >store                  // vuex模块仓库
        .......
    >system                 // app, sdk配置
        >toback.js          // 监听用户放回键
        .......
    >uitls                  // 工具函数
        >uitl.js
        >axios.js           // 请求回到封装，响应器，拦截器
        .......
    >views                  // app页面
        >appointment
        >index
        >login
        .......
    >App.vue
    >cube-ui.js
    >main.js
    >store.js
    >theme.styl             // cube-ui 主题颜色配置文件
>babel.config.js
>package.json
>README.md
>vue.config.js
>yarn.lock

```
