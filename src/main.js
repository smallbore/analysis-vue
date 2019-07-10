import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from '@/router'
import store from './store'
import 'amfe-flexible'
import '@/assets/styles/style.less'
import '@/router/permission.js'
import '@/system/toback.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
