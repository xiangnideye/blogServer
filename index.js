var mysql = require('mysql');
//连接数据库
var connection = mysql.createConnection({
    host:'39.106.54.232',
    user:'root',
    password:'123456',
    database : 'zyBlog',
    port:'3306'
    // max_questions: 0,
    // max_updates: 0,
    // max_connections: 0,
    // max_user_connections: 0,
  });
connection.connect();

module.exports.connection = connection;