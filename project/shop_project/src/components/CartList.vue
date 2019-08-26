<template>
  <div v-if="type ==='page'" class="cart-main container">
    <form action="#" method="post">
      <div class="cart-main__content">
        <div class="cart-main__header">
          <div class="cart-main__product-col">product details</div>
          <div class="cart-main__price-col">Unit price</div>
          <div class="cart-main__quantity-col">Quantity</div>
          <div class="cart-main__shipping-col">Shipping</div>
          <div class="cart-main__subtotal-col">Subtotal</div>
          <div class="cart-main__action-col">Action</div>
        </div>
        <cartItem v-for="cartItem of cartItems" :cartItem="cartItem" :key="cartItem.id" :type="type" @remove="remove"/>
      </div>
      <div class="cart-main__button-block">
        <button type="reset" class="cart-main__button">Clear shopping cart</button>
        <button type="submit" class="cart-main__button">Continue shopping</button>
      </div>
    </form>

    <div class="cart-main__order-block">
      <div class="cart-main__address-block">
        <h4 class="cart-main__h4">Shipping address</h4>
        <form action="#" method="post">
          <div class="cart-main__input_wrapper">
            <input
              type="text"
              class="cart-main__input cart-main__input_arrowdown"
              placeholder="Bangladesh"
            />
            <span class="cart-main__span_arrowdown"></span>
          </div>
          <input type="text" class="cart-main__input" placeholder="State" />
          <input type="text" class="cart-main__input" placeholder="Postcode/Zip" />
          <button type="button" class="cart-main__button cart-main__button_sm">Get a quote</button>
        </form>
      </div>
      <div class="cart-main__discount-block">
        <h4 class="cart-main__h4">Coupon discount</h4>
        <p class="cart-main__discount-text">Enter your coupon code if you have one</p>
        <input type="text" class="cart-main__input" placeholder="Coupone code" />
        <button type="button" class="cart-main__button cart-main__button_sm">Apply code</button>
      </div>
      <div class="cart-main__checkout-block">
        <div class="cart-main__totals">
          <h5 class="cart-main__h5">
            Sub total
            <span class="cart-main__total-span">${{cartItems.reduce((acc,item) => acc + item.quantity * item.price, 0)}}</span>
          </h5>
          <h4 class="cart-main__h4">
            Grand Total
            <span class="cart-main__total-span">${{cartItems.reduce((acc,item) => acc + item.quantity * item.price, 0)}}</span>
          </h4>
        </div>
        <a href="checkout.html" class="cart-main__button cart-main__checkoutBtn">proceed to checkout</a>
      </div>
    </div>
  </div>

  <div v-else class="cart_block">
    <a href="/cart" class="cart_link">
      <img src="/img/cart.svg" alt class="cart_img" />
    </a>

    <div class="cart_menu_holder">
      <div class="cart_menu">
        <ul class="cart_menu_list">
          <cartItem v-for="cartItem of cartItems" :key="cartItem.id" :cartItem="cartItem" :type="type" @remove="remove"/>
        </ul>
        <div class="cart_price">
          <h3 class="cart_price_text">TOTAL</h3>
          <h3 class="cart_price_text">${{this.cartItems.reduce((acc, item) => acc + item.quantity * item.price,0)}}</h3>
        </div>
        <form action="/cart">
          <input
            type="button"
            class="cart_button"
            value="Checkout"
            onclick="location.href='/checkout';"
          />
          <input
            type="submit"
            class="cart_button cart_to_cart"
            value="Go to Cart"
            onclick="location.href='/cart';"
          />
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import cartItem from '@/components/CartItem.vue';

export default {
  props: ['type'],
  name: 'cartList',
  data() {
    return {
      cartItems: [],
      showCart: false,
    };
  },
  components: {
    cartItem,
  },
  methods: {
    addProduct(product) {
      const find = this.cartItems.find(
        el => el.id === product.id
      );

      if (find) {
        this.$root
          .putJson(`/api/cart/${find.id}`, { quantity: 1 })
          .then(data => {
            if (data.result === 1) {
              find.quantity++;
            }
          });
      } else {
        const prod = Object.assign({ quantity: 1 }, product);
        this.$root.postJson('/api/cart', prod).then(data => {
          if (data.result === 1) {
            this.cartItems.push(prod);
          }
        });
      }
    },
    remove(item) {
      if (item.quantity > 1) {
        this.$root
          .putJson(`/api/cart/${item.id}`, { quantity: -1 })
          .then(data => {
            if (data.result === 1) {
              item.quantity--;
            }
          });
      } else {
        this.$root.deleteJson(`/api/cart/${item.id}`).then(data => {
          if (data.result === 1) {
            this.cartItems.splice(this.cartItems.indexOf(item), 1);
          }
        });
      }
    },
  },
  mounted() {
    this.$root.getJson('/api/cart').then(data => {
      for (let el of data.contents) {
        this.cartItems.push(el);
      }
    });
  },
};
</script>
