import Vue from 'vue'
import Vuex from 'vuex'
import User from './Modules/User'
import Products from './Modules/Products'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        user: {
            namespaced: true,
            state: User.state,
            getters: User.getters,
            actions: User.actions,
            mutations: User.mutations
        },
        products: {
            namespaced: true,
            state: Products.state,
            getters: Products.getters,
            actions: Products.actions,
            mutations: Products.mutations
        },
    }
})