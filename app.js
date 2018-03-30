/**
 * Created by Administrator on 2018/3/30 0030.
 */
const express = require("express");
const bodyParser = require("body-parser");  //处理POST数据
const path = require("path"); //处理路径



const app = express();
//将post数据储存为json数据
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"public/html")));

//监听端口
app.listen(1111,()=>{console.log("服务器1111启动")});