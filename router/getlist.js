var index = require('../index');
var app = require('../app');

let checkList;

new Promise((resolve,reject)=>{
    if(1){
        resolve();
    }else{
        reject();
    }
}).then((resolve)=>{
    app.app.get('/getList',(req,res,fun)=>{
        console.log(req.query.id);
        if(req.query.id == 1){
            checkList = 'SELECT * FROM htmlList';
        }else if(req.query.id == 2){
            checkList = 'SELECT * FROM cssList';
        }else if(req.query.id == 3){
            checkList = 'SELECT * FROM jsList';
        }else{
            checkList = 'SELECT * FROM nodeList';
        }
        index.connection.query(checkList,(err,result)=>{
            if(!err){
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.setHeader("Access-Control-Allow-Methods", "GET, POST,DELETE, OPTIONS");
                console.log(result)
                res.send(result);
            }
        })
    })
}).then((reject)=>{

})
// new Promise((resolve,reject)=>{
//     index.connection.query(checkList,(err,result)=>{
//         if(!err){
//             resolve(result);
//         }else{
//             reject(err.message)
//         }
//     })
// }).then((resolve)=>{
//     app.app.get('/getBlogList',(req,res)=>{
//         res.setHeader("Access-Control-Allow-Origin", "*");
//         res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         res.setHeader("Access-Control-Allow-Methods", "GET, POST,DELETE, OPTIONS");
//         console.log(resolve)
//         res.send(resolve);
//     });
    
// }).then((resolve)=>{

// });








