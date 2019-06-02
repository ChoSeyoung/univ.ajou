const mysql = require('mysql');
const secure = require('./secure.json');

const connection = mysql.createPool({
  host: 'DB Adress',
  port: 3360,
  user: 'user',
  password: 'password',
  database: 'database'
});

module.exports=connection;