var mysql = require('mysql');
//连接数据库
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database : 'zy98k'
  });
connection.connect();

module.exports.connection = connection;