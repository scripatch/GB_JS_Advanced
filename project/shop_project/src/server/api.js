const express = require('express');
const fs = require('fs');
const cartRouter = require('./cartRouter');

const apiRouter = express.Router();

apiRouter.use('/cart', cartRouter);

apiRouter.get('/products', (req, res) => {
  fs.readFile('./src/server/db/products.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

apiRouter.get('/', (req, res) => {
  res.send('API is working...');
});

module.exports = apiRouter;
