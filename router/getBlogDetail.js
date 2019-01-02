var pool = require('../index');
var app = require('../app');

let checkList;

new Promise((resolve,reject)=>{
    if(1){
        resolve();
    }else{
        reject();
    }
}).then((resolve)=>{
    app.app.get('/getBlogDetail',(req,res,fun)=>{
        if(req.query.tableId == 1){
            checkList = 'SELECT * FROM htmlList where id ='+ req.query.id;
        }else if(req.query.tableId == 2){
            checkList = 'SELECT * FROM cssList';
        }else if(req.query.tableId == 3){
            checkList = 'SELECT * FROM jsList';
        }else{
            checkList = 'SELECT * FROM nodeList';
        }
        pool.query(checkList, [], (result, fields) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST,DELETE, OPTIONS");
            res.send({
            	error_code:200,
            	successObj:result[0]
            });
        })
    })
}).then((reject)=>{

});









