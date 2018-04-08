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
const router=require("./routes/baokuan.js");
const bf_router=require("./routes/bf_tuijianRouters");

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
app.use(router);
app.use(bf_router);
app.use(cookie());

//将post数据储存为json数据
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"/")));
app.use(express.static(path.join(__dirname,"public/html")));

app.set("views",__dirname+"/view");
app.engine("html",myejs.__express);
app.set("view engine","html");

//监听端口
app.listen(1111,()=>{console.log("服务器1111启动")});