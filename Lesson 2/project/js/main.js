


class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this.render();
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 1000},
      {id: 2, title: 'Mouse', price: 100},
      {id: 3, title: 'Keyboard', price: 250},
      {id: 4, title: 'Gamepad', price: 150},
    ];
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  getTotal() {
    return this.goods.reduce((acc, item) => acc + item.price, 0);
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
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
  constructor() {
    this.allProducts = [];
  }

  addProduct(item, amount) {
    // TODO проверить не добавлен ли уже товар, тогда просто увеличить количество,
    // иначе создать новый CartItem
    // Далее отрендерить, единственное тут вопрос рендерить все заново или отслеживать что именно изменилось
  }

  removeProduct(id, amount = 0) {
    // TODO удалить из корзины товар по id
    // Если количество удалаемых экземпляров не указано, тогда удалить весь элемент CartItem,
    // либо если количество экземпляров окажется равным нулю, тогда тоже удалить весь элемент CartItem
    // Иначе просто уменьшить количество экземпляров указанного товара
  }

  removeAll() {
    this.allProducts = [];
    this.render();
  }


  render() {
    // TODO свой рендер HTML
  }
}

class CartItem extends ProductItem{
  constructor(product, amount, img='https://placehold.it/200x150') {
    super(product, img);
    this.amount = amount;
  }

  getAmount() {
    return this.amount;
  }

  setAmount(amount) {
    this.amount = amount;

  }

  render() {
    // TODO будет свой рендер
  }
}

// Не делал проверку на корректность ввода. В идеале бы где-то хранить все возможные опции в виде консант,
// но не знаю где и как это лучше сделать
class Burger {
  constructor(size, stuff) {
    this.size = size; // 'big' - большой, 'small' - маленький
    this.stuff =  stuff; // 'cheese', 'salad', 'potato'
    this.toppings = [];
  }

  addTopping(topping) {
    if (!this.toppings.includes(topping)) this.toppings.push(topping);
  }

  removeTopping(topping) {
    this.toppings = this.toppings.filter(item => item !== topping);
  }

  getToppings() {
    return `Your Burger has this toppings: ${this.toppings.join(',')}`;
  }

  getSize() {
    return `Your Burger is ${this.size}`;
  }

  getStuff() {
    `Your Burger has this stuff: ${this.stuff}`;
  }

  calcPrice() {
    return (this.size === 'small') * 50
      + (this.size === 'big') * 100
      + (this.stuff === 'cheese') * 10
      + (this.stuff === 'salad') * 20
      + (this.stuff === 'potato') * 15
      + this.toppings.reduce((acc, item) => acc + (item ==='spices') * 15 + (item ==='mayo') * 20, 0);
  }

  calcCalories() {
    return (this.size === 'small') * 20
        + (this.size === 'big') * 40
        + (this.stuff === 'cheese') * 20
        + (this.stuff === 'salad') * 5
        + (this.stuff === 'potato') * 10
        + this.toppings.reduce((acc, item) => acc + (item ==='mayo') * 5, 0);
  }


}


const list = new ProductList();

console.log(`Для заказа бургера необходимо создать экземпляр класса Burder с указанием размера и начинки (обязательно)
    Варианты размеров: 'small' и 'big'
    Варианты начинок: 'cheese', 'salad' и 'potato'
    Для добавления приправ или майонеза надо вызвать метод addTopping с указанием топпинга.
    Варианты топпингов: 'spices' и 'mayo'
    После выбора топпинга можно его убрать методом removeTopping с указанием топпинга
    Также можно посмотреть текущий размер, начинку и топпинги Бургера соответствующими методами:
    getSize, getStuff и getToppings.
    Стоимость и калорийность можно узнать соответствующими методами:
    calcPrice и calcCalories`);




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
