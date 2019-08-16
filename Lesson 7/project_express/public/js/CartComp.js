Vue.component('cart', {
    data(){
      return {
          imgCart: 'https://placehold.it/50x100',
          cartUrl: '/cart',
          cartItems: [],
          showCart: false,
      }
    },
    methods: {
        _post(url, product) {
            let prod = Object.assign({quantity: 1}, product);
            this.$parent.getJson(url, {
                headers: {"Content-Type": "application/json"},
                method: 'POST',
                body: JSON.stringify(prod)})
                .then(data => {
                    if(data.result === 1){
                            this.cartItems.push(prod)
                    } else {
                        alert('Error');
                    }
                })
        },
        _put(url, product) {
            let prod = Object.assign({quantity: 1}, product);
            this.$parent.getJson(url + '/' + product.id_product, {
                headers: {"Content-Type": "application/json"},
                method: 'PUT',
                body: JSON.stringify(prod)})
                .then(data => {
                    if(data.result === 1){
                        product.quantity++;
                    } else {
                        alert('Error');
                    }
                })
        },
        addProduct(product){
            const find = this.cartItems.find(el => el.id_product === product.id_product);
            const url = API + this.cartUrl;
            if (find) {
                this._put(url, find);
            } else {
                this._post(url, product);
            }
        },
        remove(item) {
            this.$parent.getJson(`${API + this.cartUrl}/${item.id_product}`, {method: 'DELETE'})
                .then(data => {
                    if(data.result === 1) {
                        if(item.quantity>1){
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1)
                        }
                    }
                })
        },
    },
    mounted(){
        this.$parent.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });
    },
    template: `
        <div>
            <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
            <div class="cart-block" v-show="showCart">
                <p v-if="!cartItems.length">Cart is empty</p>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item" 
                :img="imgCart"
                @remove="remove">
                </cart-item>
            </div>
        </div>`
});

Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `
                <div class="cart-item">
                    <div class="product-bio">
                        <img :src="img" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">{{cartItem.product_name}}</p>
                            <p class="product-quantity">Quantity: {{cartItem.quantity}}</p>
                            <p class="product-single-price">$ {{cartItem.price}} each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">{{cartItem.quantity*cartItem.price}}</p>
                        <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>
    `
});
