<template>
    <div class="row">
        <div class="search">
            <i class="fa fa-search search-icon"></i>
            <input
                    :value="searchTerm"
                    @input="$emit('update:searchTerm', $event.target.value)"
                    type="text"
                    class="searchTerm"
                    placeholder="Pretraži listu artikala...">
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchBar",
    props: {
        searchTerm: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

</style>