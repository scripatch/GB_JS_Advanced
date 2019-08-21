import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/normalize.css';
import './css/style.sass';
import './css/icofont/icofont.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
