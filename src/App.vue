<template>
  <div id="app">
      <PageHeader  user-email=""/>
      <router-view />
  </div>
</template>

<script>

import PageHeader from '@/components/common/PageHeader.vue';


export default {
  name: 'App',
  components: { PageHeader  },


  computed: {
      isLoginPage () {
          return this.$route.name === 'LoginPage'
      },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
