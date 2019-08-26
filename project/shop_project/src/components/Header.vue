// eslint-disable-next-line
<template>
  <header class="header">
    <div class="container header_wrapper">
      <div class="header_left">
        <a href="/" class="logo_link">
          <img src="/img/logo.png" alt="logo" class="logo_img" />BRAN
          <span class="last_letter">D</span>
        </a>
        <form action="#" class="header_form">
          <div class="browse_btn">
            Browse
            <img src="/img/browse_arrow.png" alt class="browse_arrow" />
            <div class="drop_down">
              <div class="drop_down_column">
                <p class="drop_down_title">Women</p>
                <ul class="drop_list">
                  <li>
                    <a href="catalog.html" class="drop_down_link">Dresses</a>
                  </li>
                  <li>
                    <a href="catalog.html" class="drop_down_link">Tops</a>
                  </li>
                  <li>
                    <a href="catalog.html" class="drop_down_link">Sweaters/Knits</a>
                  </li>
                  <li>
                    <a href="catalog.html" class="drop_down_link">Jackets/Coats</a>
                  </li>
                  <li>
                    <a href="catalog.html" class="drop_down_link">Blazers</a>
                  </li>
                  <li>
                    <a href="catalog.html" class="drop_down_link">Denim</a>
                  </li>
                  <li>
                    <a href="catalog.html" class="drop_down_link">Leggings/Pants</a>
                  </li>
                  <li>
                    <a href="catalog.html" class="drop_down_link">Skirts/Shorts</a>
                  </li>
                  <li>
                    <a href="catalog.html" class="drop_down_link">Accessories</a>
                  </li>
                </ul>
                <p class="drop_down_title">Men</p>
                <ul class="drop_list">
                  <li>
                    <a href="catalog.html" class="drop_down_link">Tees/Tank tops</a>
                  </li>
                  <li>
                    <a href="catalog.html" class="drop_down_link">Shirts/Polos</a>
                  </li>
                  <li>
                    <a href="catalog.html" class="drop_down_link">Sweaters</a>
                  </li>
                  <li>
                    <a href="catalog.html" class="drop_down_link">Sweatshirts/Hoodies</a>
                  </li>
                  <li>
                    <a href="catalog.html" class="drop_down_link">Blazers</a>
                  </li>
                  <li>
                    <a href="catalog.html" class="drop_down_link">Jackets/vests</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <input
            type="text"
            name="search_text"
            id="search_text"
            class="search_text"
            placeholder="Search for Item..."
          />
          <button class="search_btn">
            <img src="/img/search_btn.png" alt="search_btn" />
          </button>
        </form>
      </div>
      <div class="header_right">
        <cartList :type="'menu'" />
        <div class="account_btn">
          My Account
          <img src="/img/account_arrow.png" alt class="account_arrow" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import cartList from '@/components/CartList.vue';

export default {
  name: 'HeaderComp',
  components: {
    cartList,
  },
};
</script>
