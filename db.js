var mysql = require('mysql');

 db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'cards_bot_db'
  });

module.exports = db