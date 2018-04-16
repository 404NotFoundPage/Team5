<<<<<<< HEAD
=======
﻿
>>>>>>> 539a1aaf3fd9634e95f4cf87de7d772fd410b2c5
/**
 * Created by Administrator on 2018/3/30 0030.
 */
const express = require("express");
const myejs = require("ejs");
const bodyParser = require("body-parser");  //处理POST数据
const path = require("path"); //处理路径
const session = require("express-session");//session引入
const cookie = require("cookie-parser");

const logger = require("morgan");
const bf_router=require("./routes/bf_tuijianRouters");
const productRouter=require('./routes/productRouter.js');
const router=require("./routes/baokuanrouter.js");
<<<<<<< HEAD
=======
const indexRouter=require('./routes/indexRouter.js');
const orderRouter=require('./routes/orderRouter.js');

const routerRL=require("./routes/loginRegister.js");// 登录注册页面的路由
const Personal=require("./routes/Personal.js"); //个人中心路由
var AV = require('leanengine'); //引用短信模块
AV.initialize("B5XdiuFWib69Dyr9wgAJYPPQ-gzGzoHsz","Q5FlPGAmOoWMKociWGgNyjKU");
>>>>>>> 539a1aaf3fd9634e95f4cf87de7d772fd410b2c5


const app = express();
app.use(logger('dev'));
app.use(session({
    name:"cms",
    secret:"123",
    cookie:{maxAge:300000},
    resave:true,
    rolling:true,
    saveUninitialized:true
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(router);
app.use(bf_router);
app.use(productRouter);
app.use(orderRouter);
app.use(indexRouter);
app.use(cookie());

app.use(routerRL);// 登录注册！！！！！
app.use(Personal); //个人中心

//将post数据储存为json数据

app.use(bodyParser.json());
//配置ejs
app.set("views",__dirname+"/public");//配置模板所在路径
app.engine("html",myejs.__express);//添加一个html引擎
app.set("view engine","html");//使用的引擎
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"public/html")));


//监听端口
app.listen(1111,()=>{console.log("服务器1111启动")});

