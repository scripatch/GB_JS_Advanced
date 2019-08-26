<template>
  <li class="product">
    <a :href="'/products/' + product.id" class="product_link">
      <img :src="product.bigImg" alt class="product_image" />
      <div class="product_desc">
        <p class="product_title">{{product.name}}</p>
        <p class="product_price">${{product.price}}</p>
      </div>
      <div class="addToCart">
        <div class="addToCart_opacity"></div>
      </div>
    </a>
    <div class="addToCart_link" @click="cartAPI.addProduct(productItem)">
      <img src="/img/cart_white.svg" alt /> Add to Cart
    </div>
  </li>
</template>

<script>
export default {
  name: 'productItem',
  props: ['product'],
  data() {
    return {
      /**
       * Создали ссылку на API нашей корзины. Т.к. все компоненты у нас регистрируются в корневом экземпляре Vue,
       * то мы легко можем получить доступ к ним используя свойство $root.
       * $parent можно использовать для доступа к родительскому экземпляру из дочернего.
       */
      cartAPI: this.$root.$refs.cart,
    };
  },
};
</script>
