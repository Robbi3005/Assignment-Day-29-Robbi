const mysql      = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'store_order',
  port     : '3306'
});

module.exports = connection;