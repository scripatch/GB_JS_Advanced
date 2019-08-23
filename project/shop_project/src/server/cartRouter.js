const express = require('express');
const fs = require('fs');
const handler = require('./handler');

const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile('./dist/server/db/userCart.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

router.post('/', (req, res) => {
  handler(req, res, 'add', './dist/server/db/userCart.json');
});
// localhost:3000/api/cart/123 // req.params.id
// localhost:3000/api/cart/?var1='sfsf'&var2='ada' // req.query
router.put('/:id', (req, res) => {
  handler(req, res, 'change', './dist/server/db/userCart.json');
});
/**
 * Добавили роут для удаления товара
 */
router.delete('/:id', (req, res) => {
  handler(req, res, 'remove', './dist/server/db/userCart.json');
});

module.exports = router;
