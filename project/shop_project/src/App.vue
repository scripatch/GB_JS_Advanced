// eslint-disable-next-line
<template>
  <div id="app">
    <HeaderComp ref="header"/>
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
};
</script>
