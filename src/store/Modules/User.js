import axios from 'axios';

const state = {
    user: null,
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    loginError: null,
};

const getters = {
    isLoggedIn: (state) => state.isLoggedIn,
    getUser: (state) => state.user,
    getAccessToken: (state) => state.accessToken || localStorage.accessToken,
    getRefreshToken: (state) => state.refreshToken,
    getLoginError: (state) => state.loginError,
};

const actions = {

    loadToken: function ({ getters, commit }) {
        if (getters['getAccessToken']) return getters['getAccessToken'] // da ga ne bi svaki put komitovalo
        commit('setAccessToken', localStorage.token)
    },

    loginUser: async function({ commit }, { username, password, expiresInMins }) {
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username,
                password,
                expiresInMins,
            }, {
                withCredentials: false,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                },
            }, );

            commit('setUser', response.data);
            localStorage.setItem('accessToken', response.data.accessToken);
        } catch (error) {
            commit('setLoginError', error.response?.data?.message || 'Login failed')
        }
    },

    fetchCurrentUser: async function({ commit, getters }) {
        try {
            const response = await axios.get('https://dummyjson.com/auth/me', {
                headers: {
                    'Authorization': `Bearer ${getters.getAccessToken}`,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                },
                withCredentials: false,
            });

            commit('setUser', response.data)
        } catch (error) {
            console.error('Error fetching current user:', error)
        }
    },

    refreshAuthToken: async function({ commit, state }) {
        try {
            const response = await axios.post('https://dummyjson.com/auth/refresh', {
                refreshToken: state.refreshToken,
                expiresInMins: 30,
            }, {
                withCredentials: true
            });

            commit('setAccessToken', response.data.accessToken)
            localStorage.setItem('accessToken', response.data.accessToken)
        } catch (error) {
            console.error('Error refreshing token:', error)
        }
    },

    logoutUser({ commit }) {
        commit('logoutUser')
        localStorage.removeItem('accessToken')
    }
};

const mutations = {
    setUser: (state, data) => {
        state.user = data.username
        state.accessToken = data.accessToken
        state.refreshToken = data.refreshToken
        state.loginError = null
    },

    setAccessToken: (state, accessToken) => {
        state.accessToken = accessToken
    },

    setLoginError: (state, error) => {
        state.loginError = error
    },

    logoutUser: (state) => {
        state.user = null
        state.accessToken = null
        state.refreshToken = null
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};