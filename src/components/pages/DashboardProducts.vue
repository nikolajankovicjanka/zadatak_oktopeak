<template>
    <div class="dashboard-products">
        <div class="col-lg-12 d-flex justify-content-center w-100 mt-5">
            <SearchBar
                    :search-term="searchTerm"
                    @update:searchTerm="searchTerm = $event" />
        </div>
        <div class="row">
            <div class="col-lg-12 d-flex justify-content-around flex-wrap">
                <div
                        v-for="product in filteredProducts"
                        :key="product.id"
                        class="col-3">
                    <DashboardProductCard
                            :products="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/common/SearchBar.vue'
import DashboardProductCard from '@/components/common/DashboardProductCard.vue';
import { mapGetters } from 'vuex'
export default {
    name: "DashboardProducts",
    components: {DashboardProductCard, SearchBar },
    data () {
        return {
            slika: require('/src/assets/plava_pcela.png'),
            searchTerm: '',
        }
    },
    computed: {
        ...mapGetters({
            products: 'products/products'
        }),
        filteredProducts() {
            return this.products.filter(product =>
                product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
            )
        }

    },

    methods: {

    },
}
</script>

<style scoped>

</style>