const api = require('./src/server/api');

module.exports = {
  devServer: {
    before: (app) => { app.use('/api', api); },
  },
};
