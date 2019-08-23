import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fetchApi from './utils/fetch';
import './css/normalize.css';
import './css/style.sass';
import './css/icofont/icofont.min.css';

Vue.config.productionTip = false;

const root = new Vue({
  router,
  store,
  render: h => h(App),
});

root.getJson = fetchApi.getJson;
root.putJson = fetchApi.putJson;
root.postJson = fetchApi.postJson;
root.deleteJson = fetchApi.deleteJson;
root.$mount('#app');
