const mysql = require('mysql');
const secure = require('./secure.json');

const connection = mysql.createPool({
  host: secure.host,
  port: secure.port,
  user: secure.user,
  password: secure.password,
  database: secure.database
});

module.exports=connection;