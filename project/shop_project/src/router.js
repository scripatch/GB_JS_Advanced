import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CatalogComp from './views/Catalog.vue';
import ProductComp from './views/Product.vue';
import CartComp from './views/Cart.vue';
import CheckoutComp from './views/Checkout.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/catalog/:category',
      name: 'catalog',
      component: CatalogComp,
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ProductComp,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartComp,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutComp,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
