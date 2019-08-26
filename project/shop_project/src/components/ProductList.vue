<template>
  <!-- <div class="products">
    <product
      ref="refref"
      v-for="item of filtered"
      :key="item.id_product"
      :img="imgCatalog"
      :product="item"
    ></product>
  </div>-->
  <div v-if="type==='page'" class="products_block container">
    <aside class="sidebar">
      <ul class="sidebar_filter_group_list">
        <li class="sidebar_filter_group_item">
          <div class="sidebar_filter_group_title">
            <a href="#" class="sidebar_filter_group_link">
              <p>Category</p>
              <div class="sidebar_filter_group_triangleup"></div>
            </a>
          </div>
          <ul class="sidebar_filter_list">
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Accessories</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Bags</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Denim</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Hoodies & Sweatshirts</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Jackets & Coats</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Pants</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Polos</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Shirts</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Shoes</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Shorts</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Sweaters & Knits</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">T-Shirts</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Tanks</a>
            </li>
          </ul>
        </li>
        <li class="sidebar_filter_group_item">
          <div class="sidebar_filter_group_title">
            <a href="#" class="sidebar_filter_group_link">
              <p>Brand</p>
              <div class="sidebar_filter_group_triangleup"></div>
            </a>
          </div>
          <ul class="sidebar_filter_list">
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Accessories</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Bags</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Denim</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Hoodies & Sweatshirts</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Jackets & Coats</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Pants</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Polos</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Shirts</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Shoes</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Shorts</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Sweaters & Knits</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">T-Shirts</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Tanks</a>
            </li>
          </ul>
        </li>
        <li class="sidebar_filter_group_item">
          <div class="sidebar_filter_group_title">
            <a href="#" class="sidebar_filter_group_link">
              <p>Designer</p>
              <div class="sidebar_filter_group_triangleup"></div>
            </a>
          </div>
          <ul class="sidebar_filter_list">
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Accessories</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Bags</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Denim</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Hoodies & Sweatshirts</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Jackets & Coats</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Pants</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Polos</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Shirts</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Shoes</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Shorts</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Sweaters & Knits</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">T-Shirts</a>
            </li>
            <li class="sidebar_filter_item">
              <a href="catalog.html" class="sidebar_filter_item_link">Tanks</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
    <div class="products_result">
      <div class="products_filter">
        <div class="products_filter_category">
          <p class="products_filter_category_name">Trending Now</p>
          <p class="products_filter_category_settings">
            <a href="#" class="products_filter_category_link">Bohemian</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="#"
              class="products_filter_category_link"
            >Floral</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="#"
              class="products_filter_category_link"
            >Lace</a>
            <br />
            <br />
            <a href="#" class="products_filter_category_link">Floral</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="#"
              class="products_filter_category_link"
            >Lace</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="#"
              class="products_filter_category_link"
            >Bohemian</a>
          </p>
        </div>
        <div class="products_filter_category">
          <p class="products_filter_category_name">Size</p>
          <p class="products_filter_category_settings">
            <input type="checkbox" name="XXS" id="size_xxs" />
            <label for="size_xxs">XXS</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="checkbox" name="XS" id="size_xs" />
            <label for="size_xs">XS</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="checkbox" name="S" id="size_s" />
            <label for="size_s">S</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="checkbox" name="M" id="size_m" />
            <label for="size_m">M</label>
            <br />
            <br />
            <input type="checkbox" name="L" id="size_l" />
            <label for="size_l">L</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="checkbox" name="XL" id="size_xl" />
            <label for="size_xl">XL</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="checkbox" name="XXL" id="size_xxl" />
            <label for="size_xxl">XXL</label>
          </p>
        </div>
        <div class="products_filter_category">
          <p class="products_filter_category_name">Price</p>
          <div>
            <p class="products_filter_category_settings">
              <input type="range" class="category-settings__input" />
              <br />
              <br />
            </p>
            <div class="flex_jcsb_aic">
              <p class="products_filter_category_settings">$25</p>
              <p class="products_filter_category_settings">$400</p>
            </div>
          </div>
        </div>
      </div>
      <div class="products__sorting-bar">
        <div class="products__sorting-block">
          <p class="products__sorting-text">Sort By</p>
          <div class="products__sorting-button">
            <p class="products__sorting-text">Name</p>
            <div class="products__triangleup"></div>
          </div>
        </div>
        <div class="products__sorting-block">
          <p class="products__sorting-text">Show</p>
          <div class="products__sorting-button">
            <p class="products__sorting-text">09</p>
            <div class="products__triangleup"></div>
          </div>
        </div>
      </div>
      <ul class="products">
        <productItem v-for="item of filtered" :key="item.id" :product="item"></productItem>
      </ul>
      <div class="pagination products__pagination">
        <div class="pagination__pages-block">
          <a href="#" class="pagination__pages-link pagination__pages-link_disabled">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </a>
          <a href="#" class="pagination__pages-link pagination__pages-link_active">1</a>
          <a href="#" class="pagination__pages-link">2</a>
          <a href="#" class="pagination__pages-link">3</a>
          <a href="#" class="pagination__pages-link">4</a>
          <a href="#" class="pagination__pages-link">5</a>
          <a href="#" class="pagination__pages-link">6.....20</a>
          <a href="#" class="pagination__pages-link">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
        <div class="pagination__viewAll-button">
          <a href="catalog.html" class="pagination__viewAll-link">View All</a>
        </div>
      </div>
    </div>
  </div>

  <section v-else class="featured">
    <div class="container">
      <h3 class="featured_title">Featured Items</h3>
      <h4 class="featured_subtitle">Shop for items based on what we featured in this week</h4>
      <ul class="products">
        <productItem v-for="item in featured" :key="item.id" :product="item"></productItem>
      </ul>
      <div class="browse_products">
        Browse All Product
        <img src="/img/browse_product_arrow.png" alt="arrow" />
      </div>
    </div>
  </section>
</template>

<script>
import productItem from '@/components/ProductItem.vue';

export default {
  name: 'ProductList',
  props: ['type'],
  components: {
    productItem,
  },
  data() {
    return {
      products: [],
      filtered: [],
      featured: [],
    };
  },
  methods: {
    filter(value) {
      let regexp = new RegExp(value, 'i');
      this.filtered = this.products.filter(el => regexp.test(el.product_name));
    },
    feature() { this.featured = this.products.slice(0,8) },
  },
  computed: {
  },
  mounted() {
    this.$root.getJson('/api/products').then(data => {
      for (let el of data) {
        this.products.push(el);
        this.filtered.push(el);
      }
      this.feature();
    });
  },
};
</script>
