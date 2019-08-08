const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    cartUrl: '/getBasket.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
    imgCart: 'https://placehold.it/50x100',
    searchLine: '',
    filtered: [],
    cartItems: [],
    isVisibleCart: false,
  },
  methods: {
    getJson(url){
      console.log('dwdwd');
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product){
      console.log(product.id_product);
    },
    removeProduct(cartItem) {
      console.log(cartItem.id_product);
    },
    filterGoods() {
      const regexp = new RegExp(this.searchLine, 'i');
      this.filtered = this.products.filter(product => regexp.test(product.product_name));
    }
  },
  mounted(){
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for(let el of data){
          this.products.push(el);
        };
        this.filterGoods();
      });
    this.getJson(`${API + this.cartUrl}`)
        .then(data => {
          for(let el of data.contents){
            this.cartItems.push(el);
          }
        });
  },
});
