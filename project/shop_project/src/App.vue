<template>
  <div id="app">
    <HeaderComp />
    <NavigationComp />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
    <FooterComp />
  </div>
</template>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/Header.vue';
import FooterComp from '@/components/Footer.vue';
import NavigationComp from '@/components/Navigation.vue';

export default {
  name: 'app',
  components: {
    HeaderComp,
    FooterComp,
    NavigationComp,
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          // console.log(error);
          this.$refs.error.setError(error);
        });
    },
    postJson(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(result => result.json())
        .catch(error => {
          this.$refs.error.setError(error);
        });
    },
    putJson(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(result => result.json())
        .catch(error => {
          this.$refs.error.setError(error);
        });
    },
    deleteJson(url) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(result => result.json())
        .catch(error => {
          this.$refs.error.setError(error);
        });
    },
  },
};
</script>
