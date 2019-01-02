var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
let app = express();

app.use(bodyParser.urlencoded({ extended: false })); 

var postBlog = require('./router/postBlog');
var getList = require('./router/getlist');
var getBlogDetail = require('./router/getBlogDetail');


let server = app.listen(8000, ()=>{
 console.log('启动')
 let host = server.address().address;
 let port = server.address().port;
})
module.exports.app = app;

