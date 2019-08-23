<template>
  <div>
    <div class="breadcrumbs flex_jcsb_aic">
      <div class="container flex_jcsb_aic">
        <div class="breadcrumbs_heading">
          <h2 class="breadcrumbs_heading_text">New Arrivals</h2>
        </div>
        <div class="breadcrumbs_path">
          <h3 class="breadcrumbs_path_text">
            <a href="index.html" class="breadcrumbs_link">Home</a> /
            <a href="catalog.html" class="breadcrumbs_link">Men</a> /
            <span class="breadcrumbs_path_highlight">New Arrivals</span>
          </h3>
        </div>
      </div>
    </div>

    <div class="cart-main container">
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
          <div class="cart-main__item">
            <div class="cart-main__product-col">
              <div class="cart-main__img-wrapper">
                <a href="product.html" class="cart-main__link">
                  <img src="/img/product1-sm.jpg" alt />
                </a>
              </div>
              <div class="cart-main__text-wrapper">
                <a href="product.html" class="cart-main__product-link">
                  <h5 class="cart-main__product-name">Mango People T-shirt</h5>
                </a>
                <p class="cart-main__product-specs">
                  <b>Color:</b>Red
                  <br />
                  <b>Size:</b> XL
                </p>
              </div>
            </div>
            <div class="cart-main__price-col flex-jcc-aic">$150</div>
            <div class="cart-main__quantity-col flex-jcc-aic">
              <input type="text" class="cart-main__input cart-main__input_sm" />
            </div>
            <div class="cart-main__shipping-col flex-jcc-aic">FREE</div>
            <div class="cart-main__subtotal-col flex-jcc-aic">$300</div>
            <div class="cart-main__action-col flex-jcc-aic">
              <img src="/img/del_cart.png" alt="delete" />
            </div>
          </div>
          <div class="cart-main__item">
            <div class="cart-main__product-col">
              <div class="cart-main__img-wrapper">
                <a href="product.html" class="cart-main__link">
                  <img src="/img/product2-sm.jpg" alt />
                </a>
              </div>
              <div class="cart-main__text-wrapper">
                <a href="product.html" class="cart-main__product-link">
                  <h5 class="cart-main__product-name">Mango People T-shirt</h5>
                </a>
                <p class="cart-main__product-specs">
                  <b>Color:</b>Red
                  <br />
                  <b>Size:</b> XL
                </p>
              </div>
            </div>
            <div class="cart-main__price-col flex-jcc-aic">$150</div>
            <div class="cart-main__quantity-col flex-jcc-aic">
              <input type="text" class="cart-main__input cart-main__input_sm" />
            </div>
            <div class="cart-main__shipping-col flex-jcc-aic">FREE</div>
            <div class="cart-main__subtotal-col flex-jcc-aic">$300</div>
            <div class="cart-main__action-col flex-jcc-aic">
              <img src="/img/del_cart.png" alt="delete" />
            </div>
          </div>
          <div class="cart-main__item">
            <div class="cart-main__product-col">
              <div class="cart-main__img-wrapper">
                <a href="product.html" class="cart-main__link">
                  <img src="/img/product3-sm.jpg" alt />
                </a>
              </div>
              <div class="cart-main__text-wrapper">
                <a href="product.html" class="cart-main__product-link">
                  <h5 class="cart-main__product-name">Mango People T-shirt</h5>
                </a>
                <p class="cart-main__product-specs">
                  <b>Color:</b>Red
                  <br />
                  <b>Size:</b> XL
                </p>
              </div>
            </div>
            <div class="cart-main__price-col flex-jcc-aic">$150</div>
            <div class="cart-main__quantity-col flex-jcc-aic">
              <input type="text" class="cart-main__input cart-main__input_sm" />
            </div>
            <div class="cart-main__shipping-col flex-jcc-aic">FREE</div>
            <div class="cart-main__subtotal-col flex-jcc-aic">$300</div>
            <div class="cart-main__action-col flex-jcc-aic">
              <img src="/img/del_cart.png" alt="delete" />
            </div>
          </div>
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
              <span class="cart-main__total-span">$900</span>
            </h5>
            <h4 class="cart-main__h4">
              Grand Total
              <span class="cart-main__total-span">$900</span>
            </h4>
          </div>
          <a
            href="checkout.html"
            class="cart-main__button cart-main__checkoutBtn"
          >proceed to checkout</a>
        </div>
      </div>
    </div>

    <div class="sub-feed">
      <div class="container sub-feed_wrapper">
        <div class="feedback">
          <img src="/img/portrait.png" alt="portrait" />
          <div class="feedback_textblock">
            <p class="feedback_text">
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
              a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
            </p>
            <p class="feedback_personName">Bin Burhan</p>
            <p class="feedback_personSign">Dhaka, Bd</p>
            <div class="feedback_sliders">
              <div class="feedback_slider"></div>
              <div class="feedback_slider feedback_slider_active"></div>
              <div class="feedback_slider"></div>
            </div>
          </div>
        </div>
        <section class="subscribe">
          <h3 class="subscribe_title">Subscribe</h3>
          <h4 class="subscribe_subtitle">FOR OUR NEWLETTER AND PROMOTION</h4>
          <form action="#" class="subscribe_form">
            <input type="text" class="subscribe_input" placeholder="Enter Your Email" />
            <input type="button" value="Subscribe" class="subscribe_btn" />
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartComp',
};
</script>
