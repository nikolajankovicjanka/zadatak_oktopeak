<template>
    <div class="wrapper">
        <div class="logo">
            <img src="https://cdn.prod.website-files.com/663cca2b5b2170f0d1280e24/666cac409cd5d2969b5d5ac5_nav-logo.svg" alt="">
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input
                        id="username"
                        v-model="username"
                        name=""
                        class="form-control"
                        placeholder="Email"
                        type="text">
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input
                        id="password"
                        v-model="password"
                        class="form-control"
                        placeholder="password"
                        type="password">
            </div>
            <button
                    type="submit"
                    class="btn mt-3"
                    @click.prevent="login">
                    Login
            </button>
        </form>
        <div class="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: "LoginPage",
    data() {
        return {
            username: '',
            password: '',
            slika: require('/src/assets/plava_pcela.png')
        }
    },

    created () {
          if(this.getUser) return this.$router.replace({name: 'DashboardProducts'})
    },
    computed: {
       ...mapGetters({
           getUser: 'user/getUser'
       })
    },

    methods: {
        ...mapActions({
            loginUser: 'user/loginUser'
        }),

        async login () {

            await this.loginUser({
                username: this.username,
                password: this.password,
                expiresInMins: 60,
            })
            if(this.getUser) {
                return this.$router.replace({name: 'DashboardProducts'})
            }

        },

    }
}
</script>

<style scoped>

</style>