import { post } from '@/utils/axios.js'

export default {
    // 登录接口
    getLogin(params) {
        return post('/youyouAdmin/login', Object.assign({}, {"data": params}))
    },
}