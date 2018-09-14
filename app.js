var express = require('express');
var bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({ extended: false })); 

var postBlog = require('./router/postBlog');
var getList = require('./router/getlist');



let server = app.listen(9000,()=>{
    let host = server.address().address;
    let port = server.address().port;
})
module.exports.app = app;

