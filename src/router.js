import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from './components/pages/LoginPage.vue'
import DashboardProducts from './components/pages/DashboardProducts.vue'
import ProductProfile from './components/pages/ProductProfile.vue'
import store from './store'
import UserProfile from './components/pages/UserProfile.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/dashboard-products',
            name: 'DashboardProducts',
            component: DashboardProducts,
            async beforeEnter (to, from, next) {
                await store.dispatch('products/loadProducts')
                next ()
            }
        },
        {
            path: '/profil-products',
            name: 'ProductProfile',
            component: ProductProfile
        },

        {
            path: '/user-profile',
            name: 'UserProfile',
            component: UserProfile
        },


    ],

})
router.beforeEach(async (to, from, next) => {
    await store.dispatch('user/loadToken')
    if(!store.getters['user/getUser'] && store.getters['user/getAccessToken']) {
        await store.dispatch('user/fetchCurrentUser')
    }
    if(store.getters['user/getUser'] && to.name !== 'LoginPage') {
        return next ()
    } else if (to.name !== 'LoginPage') {
        return next ({name: 'LoginPage'})
    }
    else  {
        next()  // kad nema korisnika i kad pokusava da otvori login stranicu, tu ga pustamo
    }


})

export default router