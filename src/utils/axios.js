import axios from 'axios'
// import Router from '@/router'
// import { Message } from 'element-ui'
// import { SET_ROLES } from '@/api/config.js'

// axios 配置
axios.defaults.timeout = 10000;
// axios.defaults.baseURL = '/api/'; //这是调用数据接口

// http request 拦截器，通过这个，我们就可以把Cookie传到后台
axios.interceptors.request.use(
    config => {
        config.data = JSON.stringify(config.data);
        config.headers = {
            'content-type': 'application/json' //设置跨域头部
        };
        // if (token) {
        //     config.params = { 'token': token } //后台接收的参数，后面我们将说明后台如何接收
        // }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


// http response 拦截器
axios.interceptors.response.use(
    response => {
        // window.console.log(response.data.code);
        // response.data.errCode是我接口返回的值，如果值为2，说明Cookie丢失，然后跳转到登录页，这里根据大家自己的情况来设定
        if(response.data === '') {
            // Message.error('长时间无操作，登陆已经失效，请重新登录');
            // localStorage.removeItem(SET_ROLES)
            // setTimeout( () => {
            //     Router.push('/login')
            // },800)
        }else{
            return response;
        }
    },
    error => {
        return Promise.reject(error)
    });

export default axios;

/**
 * get 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
        .then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err)
        })
        
    })
}
