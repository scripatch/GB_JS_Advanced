const moment = require('moment');
const fs = require('fs');

const logger = (name, action) => {
  fs.readFile('./src/server/db/stats.json', 'utf-8', (err, data) => {
    if (err) {
      console.log(`[logger.js]: ${err}`);
    } else {
      const stat = JSON.parse(data);
      stat.push({
        time: moment().format('DD MMM YYYY, h:mm:ss a'),
        prod_name: name,
        action,
      });
      fs.writeFile('./src/server/db/stats.json', JSON.stringify(stat, null, 4), (err) => {
        if (err) {
          console.log(`[logger.js]: ${err}`);
        }
      });
    }
  })
};

module.exports = logger;
