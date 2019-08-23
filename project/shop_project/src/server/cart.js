const add = (cart, req) => {
  cart.contents.push(req.body);
  return { name: req.body.product_name, newCart: JSON.stringify(cart, null, 4) };
};
const change = (cart, req) => {
  const find = cart.contents.find(el => el.id === req.params.id);
  console.log(cart.contents, req.params, find, req.body);
  find.quantity += req.body.quantity;
  return { name: req.body.product_name, newCart: JSON.stringify(cart, null, 4) };
};
/**
 * Добавили новый метод удаления
 * @param cart
 * @param req
 * @returns {{newCart: *, name: *}}
 */
const remove = (cart, req) => {
  const find = cart.contents.find(el => el.id === req.params.id);
  cart.contents.splice(cart.contents.indexOf(find), 1);
  return { name: req.body.product_name, newCart: JSON.stringify(cart, null, 4) };
};

module.exports = {
  add,
  change,
  remove,
};
