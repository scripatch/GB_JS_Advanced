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

    <cartList :type="'page'"/>

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
import cartList from '@/components/CartList.vue';

export default {
  name: 'CartComp',
  components: {
    cartList,
  },
};
</script>
