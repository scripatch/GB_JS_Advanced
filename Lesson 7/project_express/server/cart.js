const updateHeader = (cart) => {
  cart.countGoods = cart.contents.length;
  cart.amount = cart.contents.reduce((acc, item) => acc + item.quantity * item.price, 0);
};
const add = (cart, req) => {
  cart.contents.push(req.body);
  updateHeader(cart);
  return JSON.stringify(cart, null, 4);
};
const change = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  find.quantity += req.body.quantity;
  updateHeader(cart);
  return JSON.stringify(cart, null, 4);
};
const del = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  if (find.quantity > 1) {
    find.quantity--;
  } else {
    cart.contents.splice(cart.contents.indexOf(find), 1);
  }
  updateHeader(cart);
  return JSON.stringify(cart, null, 4);
};

module.exports = {
  add,
  change,
  del,
};
