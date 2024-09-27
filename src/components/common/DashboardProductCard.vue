<template>
    <div class="card  flex-grow-1">
        <img class="card-img" :src="products.images" alt="Card image">
        <div class="card-body">
            <h2 class="card-title"> {{ products.title }}</h2>
            <p class="card-text mt-3">{{ products.description }}</p>
            <a
                    href="#"
                    class="btn mt-2"
                    @click="vidiProfil()">Vidi Profil</a>
        </div>
    </div>
</template>

<script>

export default {
    name: "DashboardProductCard",
    props: {
        products: {
            type: Object,
            required: true,
        }
    },

    methods: {
        vidiProfil () {
            this.$router.push({name: 'ProductProfile'})
        },
    }
}
</script>

<style scoped>

</style>