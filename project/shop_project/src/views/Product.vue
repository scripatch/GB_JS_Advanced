<template>
<div>
  <div class="breadcrumbs flex_jcsb_aic">
      <div class="container flex_jcsb_aic">
          <div class="breadcrumbs_heading">
              <h2 class="breadcrumbs_heading_text">New Arrivals</h2>
          </div>
          <div class="breadcrumbs_path">
              <h3 class="breadcrumbs_path_text"><a href="index.html" class="breadcrumbs_link">Home</a> / <a
                      href="catalog.html" class="breadcrumbs_link">Men</a> / <span
                      class="breadcrumbs_path_highlight">New Arrivals</span>
              </h3>
          </div>
      </div>
  </div>

  <div class="photo-slider">
      <div class="photo-slider__button"><a href="#" class="photo-slider__link"><i class="fa fa-chevron-left"
                                                                                  aria-hidden="true"></i></a></div>
      <div class="photo-slider__button"><a href="#" class="photo-slider__link"><i class="fa fa-chevron-right"
                                                                                  aria-hidden="true"></i></a></div>
  </div>

  <div class="product-details container">
      <p class="product-details__collection">Women collection</p>
      <p class="product-details__name">Moschino Cheap And Chic</p>
      <p class="product-details__desc">Compellingly actualize fully researched processes before proactive outsourcing.
          Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel
          core competencies rather than exceptional portals. </p>
      <div class="product-details__spec-block">
          <span class="product-details__spec">material: <span class="product-details__spec-highlight">cotton</span></span>
          <span class="product-details__spec">designer: <span class="product-details__spec-highlight">binburhan</span></span>
      </div>
      <p class="product-details__price">$561</p>
      <div class="product-details__hline"></div>
      <div class="product-details__selection-bar">
          <div class="product-details__selection selection">
              <div class="selection__name">Choose color</div>
              <button class="selection__input button button_colorbox" type="button">
                  <span class="button__text">Red</span>
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button>
          </div>
          <div class="product-details__selection selection">
              <div class="selection__name">Choose size</div>
              <button class="selection__input button" type="button">
                  <span class="button__text">XXL</span>
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button>
          </div>
          <div class="product-details__selection selection">
              <div class="selection__name">quantity</div>
              <input type="text" class="selection__input button__text">
          </div>
      </div>
      <a href="#" class="product-details__addToCart-button">
          <img src="~@/assets/cart.svg" alt="cart" class="product-details__cartimg">Add to Cart
      </a>
  </div>

  <section class="like-also container">
      <h3 class="like-also__title">You may like also</h3>
      <ul class="products">
          <li class="product">
              <a href="/catalog/Men/12345678" class="product_link">
                  <img src="~@/assets/product1.jpg" alt="" class="product_image">
                  <div class="product_desc">
                      <p class="product_title">Mango People T-shirt</p>
                      <p class="product_price">$52.00</p>
                  </div>
                  <div class="addToCart">
                      <div class="addToCart_opacity">
                      </div>
                  </div>
              </a>
              <div class="addToCart_link">
                  <img src="~@/assets/cart_white.svg" alt=""> Add to Cart
              </div>

          </li>
          <li class="product">
              <a href="/catalog/Men/12345678" class="product_link">
                  <img src="~@/assets/product3.jpg" alt="" class="product_image">
                  <div class="product_desc">
                      <p class="product_title">Mango People T-shirt</p>
                      <p class="product_price">$52.00</p>
                  </div>
                  <div class="addToCart">
                      <div class="addToCart_opacity">
                      </div>
                  </div>
              </a>
              <div class="addToCart_link">
                  <img src="~@/assets/cart_white.svg" alt=""> Add to Cart
              </div>
          </li>
          <li class="product">
              <a href="/catalog/Men/12345678" class="product_link">
                  <img src="~@/assets/product4.jpg" alt="" class="product_image">
                  <div class="product_desc">
                      <p class="product_title">Mango People T-shirt</p>
                      <p class="product_price">$52.00</p>
                  </div>
                  <div class="addToCart">
                      <div class="addToCart_opacity">
                      </div>
                  </div>
              </a>
              <div class="addToCart_link">
                  <img src="~@/assets/cart_white.svg" alt=""> Add to Cart
              </div>
          </li>
          <li class="product">
              <a href="/catalog/Men/12345678" class="product_link">
                  <img src="~@/assets/product5.jpg" alt="" class="product_image">
                  <div class="product_desc">
                      <p class="product_title">Mango People T-shirt</p>
                      <p class="product_price">$52.00</p>
                  </div>
                  <div class="addToCart">
                      <div class="addToCart_opacity">
                      </div>
                  </div>
              </a>
              <div class="addToCart_link">
                  <img src="~@/assets/cart_white.svg" alt=""> Add to Cart
              </div>
          </li>
      </ul>
  </section>

  <div class="sub-feed">
      <div class="container sub-feed_wrapper">
          <div class="feedback">
              <img src="~@/assets/portrait.png" alt="portrait">
              <div class="feedback_textblock">
                  <p class="feedback_text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                      a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
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
                  <input type="text" class="subscribe_input" placeholder="Enter Your Email"><input type="button"
                                                                                                  value="Subscribe"
                                                                                                  class="subscribe_btn">
              </form>
          </section>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductComp',
};
</script>
