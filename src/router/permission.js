import { SET_PERSON } from '@/api/config.js'
import Router from '@/router'
import asyncRouter from '@/router/asyncRouter.js'

const whiteList = ['/login'] // 不重定向白名单
let asyncList = [] // 动态列表

Router.beforeEach((to, from, next) => {
	let islogin = localStorage.getItem(SET_PERSON)
	// let islogin = false
	//判断是否有token
	if(islogin) {
		//已登录且在登录页则跳转首页
		if(to.path === '/login') {
			return next('/index')
		} 
		var path = to.path.slice(1)
		// 没有该路由页面跳转404
		if(!asyncRouter[path]){
			return next('/errorPage')
		}
		// 是否在已经添加的动态中
		if(asyncList.indexOf(path) == -1){
			asyncList.push(path)
			Router.addRoutes(asyncRouter[path])
			next({ ...to })
		} else {
			next()
		}
	} else {
		//判断当前路由是否在白名单内
		if(whiteList.indexOf(to.path) != -1) {
			next()
		} else {
			next('/login')
		}
	}
})