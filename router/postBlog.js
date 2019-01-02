// 接收数据

let app = require('../app');
var pool = require('../index');


let addSql;
let addSqlParams = [];

let year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
let day = new Date().getDate();
let updateTime = `${year}-${month}-${day}`;

new Promise((resolve, reject) => {
	if (1) {
		resolve();
	} else {
		reject();
	}
}).then(() => {
	app.app.post('/postBlogData', (req, res) => {
		if (req.body.blogValue == 1) {
			addSql = `INSERT INTO htmlList(title,content,time) VALUES(?,?,?);`
		} else if (req.body.blogValue == 2) {
			addSql = `INSERT INTO cssList(title,content,time) VALUES(?,?,?);`
		} else if (req.body.blogValue == 3) {
			addSql = `INSERT INTO jsList(title,content,time) VALUES(?,?,?);`
		} else if (req.body.blogValue == 4) {
			addSql = `INSERT INTO nodeList(title,content,time) VALUES(?,?,?);`
		};

		addSqlParams = [req.body.blogTitle, req.body.content, updateTime];

		pool.query(addSql, addSqlParams, (result, fields) => {
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			res.setHeader("Access-Control-Allow-Methods", "GET, POST,DELETE, OPTIONS");
			res.send('success');
		})
	})
})
