const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ
// let getRequest = (url, cb) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log('Error');
//       } else {
//         cb(xhr.responseText);
//       }
//     }
//   };
//   xhr.send();
// };
let getRequest = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          reject('Error');
        } else {
          resolve(xhr.responseText);
        }
      }
    };
    xhr.send();

  })
}

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    // this._getProducts()
    //   .then(data => {
    //     this.goods = [...data];
    //     this.render();
    //   });
  }

  _fetchProducts() {
    getRequest(`${API}/catalogData.json`).then(data => {
      this.goods = JSON.parse(data);
      this.render();
      console.log(this.goods);
    }).catch(error => {
      console.log('Error!', error);
    });
  }

  _getProducts() {
    return fetch(`${API}/catalogData.json`)
          .then(result => result.json())
          .catch(error => {
            console.log('Error!', error);
          });
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
      block.querySelector(`.product-item[data-id="${productObject.id}"] .buy-btn`).addEventListener('click', (event) => {
        cart.addProduct(productObject,1);
      })

    }
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

class Cart {
  constructor(container = '.cart-block') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this.amount = 0;
    this.countGoods = 0;
    this._fetchBasket().then(data => {
      this.goods = [...(data.contents)];
      this.amount = data.amount;
      this.countGoods = data.countGoods;
      this.render();
    });
  }

  _fetchBasket() {
    return fetch(`${API}/getBasket.json`)
        .then(result => result.json())
        .catch(error => {
          console.log('Error', error);
        });
  }

  addProduct(product, amount) {
    fetch(`${API}/addToBasket.json`, {id: product.id, amount: amount})
        .then(result => result.json())
        .catch(error => {
          console.log('Error!', error);
        }).then(data => {if (data.result === 1) this.render()});
  }

  removeProduct(product, amount = 0) {
    fetch(`${API}/deleteFromBasket.json`, {id: product.id, amount: amount})
        .then(result => result.json())
        .catch(error => {
          console.log('Error!', error);
        }).then(data => {if (data.result === 1) this.render()});
  }

  render() {
    const block = document.querySelector(this.container);
    block.innerHTML = "";
    for (let product of this.goods) {
      const productObject = new CartItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
      block.querySelector(`.cart-item[data-id="${productObject.id}"] .remove-btn`).addEventListener('click', (event) => {
        cart.removeProduct(productObject,1);
      })

    }
  }
}

class CartItem extends ProductItem{
  constructor(product, amount, img='https://placehold.it/100x75') {
    super(product, img);
    this.amount = amount;
  }

  render() {
    return `<div class="cart-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="remove-btn">Удалить</button>
                </div>
            </div>`;
  }
}


const list = new ProductList();
const cart = new Cart();

// const products = [
//   {id: 1, title: 'Notebook', price: 1000},
//   {id: 2, title: 'Mouse', price: 100},
//   {id: 3, title: 'Keyboard', price: 250},
//   {id: 4, title: 'Gamepad', price: 150},
// ];
//
// const renderProduct = (item) => `<div class="product-item">
//             <h3>${item.title}</h3>
//             <p>${item.price}</p>
//             <button class="by-btn">Добавить</button>
//           </div>`;
//
// const renderProducts = list => {
//   document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)));
// };
//
// renderProducts(products);
