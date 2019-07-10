import api from '@/api'
import { Message } from 'element-ui'

const state = {
    listData: [],
    pageCount: 0
}
const getters = {

}
const mutations = {
	SET_DATA(state, data) {
        state.listData = data
        state.pageCount = data.pages
    }
}

const actions = {
    getListData({commit},params){
        return api.getLogin(params).then( (res) => {
            if(res.ret === "0"){
                return commit('SET_DATA', res.data);
            }else{
                Message.error(res.errorData);
            }
        })
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}