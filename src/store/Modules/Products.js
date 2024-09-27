import axios from 'axios';

const state = {
    products: [],
    product: null,
    loading: false,
    error: null,
};

const getters = {
    products: (state) => state.products,
    product: (state) => state.product,
    isLoading: (state) => state.loading,
    getError: (state) => state.error,
};

const actions = {

    loadProducts: async function ({ getters, dispatch }) {
        if(!getters.products.length) await dispatch('fetchProducts')
    },

    fetchProducts: async function({ commit }) {
        commit('setLoading', true);
        try {
            const response = await axios.get('https://dummyjson.com/products');
            commit('setProducts', response.data.products);
        } catch (error) {
            commit('setError', error);
        } finally {
            commit('setLoading', false);
        }
    },
    fetchProduct: async function({ commit }, id) {
        commit('setLoading', true);
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            commit('setProduct', response.data);
        } catch (error) {
            commit('setError', error);
        } finally {
            commit('setLoading', false);
        }
    },
};

const mutations = {
    setProducts: (state, products) => (state.products = products),
    setProduct: (state, product) => (state.product = product),
    setLoading: (state, loading) => (state.loading = loading),
    setError: (state, error) => (state.error = error),
};

export default {
    state,
    getters,
    actions,
    mutations,
};