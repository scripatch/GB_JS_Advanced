const express = require('express');
const history = require('connect-history-api-fallback');

const api = require('./api');

const app = express();
app.use(express.json());

app.use('/api', api);

app.use('/', express.static('./dist/public'));
// app.use('/api', apiRouter);
app.use(history());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});

// app.get(); // READ
// app.post(); // CREATE
// app.put(); // UPDATE
// app.delete(); // DELETE
