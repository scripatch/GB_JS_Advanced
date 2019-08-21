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

    <div class="container">
      <ul class="checkout-steps">
        <li class="checkout-steps__item checkout-step">
          <div class="checkout-step__title">01. Shipping Address</div>
          <div class="checkout-step__details checkout-details">
            <div class="checkout-details__item">
              <form action="#">
                <h4 class="checkout-details__h4">Check as a guest or register</h4>
                <p class="checkout-details__text">Register with us for future convenience</p>
                <div class="checkout-details__radios">
                  <label class="checkout-details__radio">
                    <input type="radio" name="register" />
                    <span class="radio__button"></span>
                    <span class="checkout-details__h4">Checkout as a guest</span>
                  </label>
                  <label class="checkout-details__radio">
                    <input type="radio" name="register" checked />
                    <span class="radio__button"></span>
                    <span class="checkout-details__h4">Register</span>
                  </label>
                </div>
                <h4 class="checkout-details__h4">Register and save time!</h4>
                <p class="checkout-details__text">Register with us for future convenience</p>
                <p class="checkout-details__text">
                  <br />
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i> Fast and easy checkout
                </p>
                <p class="checkout-details__text">
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  Easy access to your order history and status
                </p>
                <button class="button checkout-details__button">Continue</button>
              </form>
            </div>
            <div class="checkout-details__item">
              <form action="#">
                <h4 class="checkout-details__h4">Already registed?</h4>
                <p class="checkout-details__text">Please log in below</p>
                <button class="button checkout-details__button">Log in</button>
              </form>
            </div>
          </div>
        </li>
        <li class="checkout-steps__item checkout-step">
          <div class="checkout-step__title">02. Billing Information</div>
          <div class="checkout-step__details checkout-step__details_inactive"></div>
        </li>
        <li class="checkout-steps__item checkout-step">
          <div class="checkout-step__title">03. Shipping Information</div>
          <div class="checkout-step__details checkout-step__details_inactive"></div>
        </li>
        <li class="checkout-steps__item checkout-step">
          <div class="checkout-step__title">04. Shipping Method</div>
          <div class="checkout-step__details checkout-step__details_inactive"></div>
        </li>
        <li class="checkout-steps__item checkout-step">
          <div class="checkout-step__title">05. Payment Method</div>
          <div class="checkout-step__details checkout-step__details_inactive"></div>
        </li>
        <li class="checkout-steps__item checkout-step">
          <div class="checkout-step__title">06. Order Review</div>
          <div class="checkout-step__details checkout-step__details_inactive"></div>
        </li>
      </ul>
    </div>

    <div class="sub-feed">
      <div class="container sub-feed_wrapper">
        <div class="feedback">
          <img src="~@/assets/portrait.png" alt="portrait" />
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
  name: 'CheckoutComp',
};
</script>
