<template>
    <div class="container-fluid">
        <button @click="goBack" class="back-button mt-4">
                Back
        </button>
        <div class="wrapper mt-3">
            <h5>Profil Product</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductProfile",
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>

</style>