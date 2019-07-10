// 动态路由
// 404页面
const errorPage = [{
    path: '/errorPage', name: 'errorPage', meta: { title: '404' }, component: () => import('@/components/404.vue')
}]
const gesturelock = [{
    path: '/gesturelock', name: 'gesturelock', meta: { title: '设置手势' }, component: () => import('@/components/gesturelock')
}]
// 首页导航
const index = [{
    path: '/index',
    component: () => import('@/components/layout'),
    children: [{
        path: '/index',
        name: 'index',
        component: () => import('@/views/index'),
        meta: {
            title: '首页',
            tabs: '首页'
        }
    }]
}]
// 个人中心
const personal = [{
    path: '/personal',
    component: () => import('@/components/layout'),
    children: [{
        path: '/personal',
        name: 'personal',
        component: () => import('@/views/personal'),
        meta: {
            title: '个人中心',
            tabs: '我的'
        }
    }]
}]
// 预约
const appointment = [{
    path: '/appointment',
    component: () => import('@/components/layout'),
    children: [{
        path: '/appointment',
        name: 'appointment',
        component: () => import('@/views/appointment'),
        meta: {
            title: '预约',
            tabs: '预约'
        }
    }]
}]

export default {
    errorPage,
    index,
    personal,
    appointment,
    gesturelock
}