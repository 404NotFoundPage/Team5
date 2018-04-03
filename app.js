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