import App from './App.vue'
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import Vuex from 'vuex'
import router from './router'
import './styles/style.scss'
import axios from 'axios'
import './libs/dropdown-buttons'
import store from './store'


Vue.use(Vuex);
Vue.use(BootstrapVue)


Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
