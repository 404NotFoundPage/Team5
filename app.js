<<<<<<< HEAD
/*Created by lixin on 2018/4/3.*/
const myexpress  = require('express');
const myapp = myexpress(); //返回服务对象
const cookieparser = require('cookie-parser');
const bodyparser = require('body-parser'); // 把提交的数据封装到requery.body
const productRouter = require('./router/productRouter.js');
const multer=require('multer');
const ws = require('ws').Server;
const mysession = require('express-session');

myapp.use(bodyparser.urlencoded({ extended: false })); //application/x-www-form-urlencoded 编码解析
myapp.use(cookieparser()); //cookie设置
// 配置session
myapp.use(mysession({
    name:"testapp", //这里的name指的是cookie的name,默认cookie的name,connect.sid
    secret:"1234",
    cookie:{maxAge:800000}, //8000ms,单位毫秒 设置session与相对cookie的失效时间
    rolling:true,//更新session-cookie失败时间 ，默认值为false
    resave:true //重新保存，每次请求，重新重置时间，假设时间 10分钟，已经走7分钟，这时你又发起了请求，时间 重置成10分种
}));
myapp.use(productRouter);
myapp.use(myexpress.static(__dirname+"/public"));//指定静态资源的路径

myapp.listen(8888,function(req,res){
    console.log('服务器启动')
});
=======
/**
 * Created by Administrator on 2018/3/30 0030.
 */
const express = require("express");
const bodyParser = require("body-parser");  //处理POST数据
const path = require("path"); //处理路径
const session = require("express-session");//session引入
const cookie = require("cookie-parser");
const router=require("./routes/baokuan.js");

const app = express();
app.use(router);
app.use(cookie());
app.use(session({
    name:"cms",
    secret:"123",
    cookie:{maxAge:300000},
    resave:true,
    rolling:true,
    saveUninitialized:true
}));
//将post数据储存为json数据
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"public/html")));

//监听端口
app.listen(1111,()=>{console.log("服务器1111启动")});
>>>>>>> 4d9cbf3c06cb011e34dba72342a1765dadf8eadb
