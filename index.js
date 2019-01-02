var mysql = require('mysql');
//连接数据库
var pool = mysql.createPool({
    host:'39.106.54.232',
    user:'root',
    password:'123456',
    database : 'zyBlog',
    port:'3306'
  });

exports.query = function(sql, arr, callback){
	//建立链接
	pool.getConnection(function(err,connection){
		if(err){throw err;return;}
		connection.query(sql, arr, (error, results, fields) => {
			//将链接返回到连接池中，准备由其他人重复使用
			connection.release();
			if(error) throw error;
			//执行回调函数，将数据返回
			callback && callback(results, fields);
		});
	});
};