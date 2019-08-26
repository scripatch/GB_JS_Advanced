<template>
  <div v-if="type ==='page'" class="cart-main__item">
    <div class="cart-main__product-col">
      <div class="cart-main__img-wrapper">
        <a :href="`/products/${cartItem.id}`" class="cart-main__link">
          <img :src="cartItem.mediumImg" alt />
        </a>
      </div>
      <div class="cart-main__text-wrapper">
        <a :href="`/products/${cartItem.id}`" class="cart-main__product-link">
          <h5 class="cart-main__product-name">{{cartItem.name}}</h5>
        </a>
        <p class="cart-main__product-specs">
          <b>Color:</b>
          {{cartItem.color}}
          <br />
          <b>Size:</b>
          {{cartItem.size}}
        </p>
      </div>
    </div>
    <div class="cart-main__price-col flex-jcc-aic">${{cartItem.price}}</div>
    <div class="cart-main__quantity-col flex-jcc-aic">
      <input type="text" class="cart-main__input cart-main__input_sm" v-model="cartItem.quantity" />
    </div>
    <div class="cart-main__shipping-col flex-jcc-aic">FREE</div>
    <div class="cart-main__subtotal-col flex-jcc-aic">${{cartItem.quantity*cartItem.price}}</div>
    <div class="cart-main__action-col flex-jcc-aic" @click="$emit('remove', cartItem)">
      <img src="/img/del_cart.png" alt="delete"/>
    </div>
  </div>

  <li v-else class="cart_menu_item">
    <a href="/catalog/Men/12345678" class="cart_menu_link">
      <div class="cart_product_img_holder">
        <img src="/img/cart_product1.jpg" alt="product" class="cart_product_img" />
      </div>
      <div class="cart_product_details">
        <h4 class="cart_product_name">Rebox Zane</h4>
        <img src="/img/cart-stars.png" alt="stars" />
        <h4 class="cart_product_price">{{cartItem.quantity}} x ${{cartItem.price}}</h4>
      </div>
      <div class="cart_remove_holder">
        <img src="/img/del_cart.png" alt="remove" />
      </div>
    </a>
  </li>
</template>


<script>
export default {
  name: 'cartItem',
  props: ['cartItem', 'type'],
};
</script>
