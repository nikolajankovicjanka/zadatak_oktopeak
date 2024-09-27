<template>
    <nav class="navbar navbar-style">
        <div class="navbar-brand">
            <img src="https://cdn.prod.website-files.com/663cca2b5b2170f0d1280e24/666cac409cd5d2969b5d5ac5_nav-logo.svg" alt="Logo" class="logo" />
        </div>
        <div class="navbar-user">
            <b-button variant="light" class="mr-3">
                <img :src="sunIcon" alt="Theme Icon" style='width: 30px; height: 30px' class="icon mr-2" />
                Light
            </b-button>
            <b-button variant="dark text-white">
                <img :src="moonIcon" alt="Theme Icon" style='width: 30px; height: 30px; color: white' class="icon" />
                Dark
            </b-button>
            <b-dropdown
                    v-if="!userLogged"
                    split
                    split-variant="outline-primary"
                    variant="primary"
                    text="Emily"
                    class="m-2">
                <b-dropdown-item class="text-secondary" @click="goToUserProfile">User Profile</b-dropdown-item>
                <b-dropdown-item class="text-secondary" @click="logout">Logout</b-dropdown-item>
            </b-dropdown>
        </div>
    </nav>
</template>

<script>
import  {mapActions, mapGetters } from 'vuex';

export default {
    name: 'PageHeader',
    props: {
        userEmail: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            dropdownOpen: false,
            slika: require('/src/assets/user.png'),
            sunIcon: require('/src/assets/icons8-sun.svg'),
            moonIcon: require('/src/assets/moon.svg'),
        };
    },

    computed: {
        ...mapGetters({
            getUser: 'user/getUser'
        }),

        userLogged () {
            return !this.getUser;


        },
    },

    methods: {
        ...mapActions({
            logoutUser: 'user/logoutUser'
        }),

        async logout() {
            await this.logoutUser()
            this.$router.push({name: 'LoginPage'})
        },

        goToUserProfile () {
            console.log(this.getUser.id)
            this.$router.push({name: 'UserProfile'})
        },
    }
};
</script>

<style scoped>
</style>
