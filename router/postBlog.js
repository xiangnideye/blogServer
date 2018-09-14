let app = require('../app');
var index = require('../index');



let addSql = 'INSERT INTO blogList(id,blogTitle,blogContent,blogTime) VALUES(?,?,?,?)';
let addSqlParams = [];
let timer = new Date();

new Promise((resolve,reject)=>{
    if(1){
        resolve();
    }else{
        reject();
    }
}).then(()=>{
    app.app.post('/postBlogData',(req,res)=>{
        addSqlParams = [3,req.body.blogTitle,req.body.content,timer];
        index.connection.query(addSql,addSqlParams,(err,result)=>{
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }else{
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.setHeader("Access-Control-Allow-Methods", "GET, POST,DELETE, OPTIONS");
                res.send('success');
            }     
        })
    })
})


