/**
 * Created by fengb on 2018/4/4.
 */
const baokuanModel=require("../dao/loginRegisterDao.js");
const AV = require('leanengine'); //引用短信模块

const loginRegisterController={
    login:function(req,res){
        let username = req.body.username;
        let password = req.body.password;
        baokuanModel.login(username,password,function(err,data){
            console.log("进来了"+username+password);
            if(err){
                console.log("错误")
            }else{
                if(data.length>0){
                    console.log(data[0]);
                    req.session.user=data[0];
                    res.send("ok");
                }else{
                    res.send("no")
                }
            }
        })
    },
    Sendmessage:function(req,res){
        let sen=req.body.sen;
        console.log(sen);
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber: sen,
            name: '亲嘴道',
            op: '注册验证码',
            ttl: 10
        }).then(function(){
                //发送成功
                res.send('验证码已经发送')
            },function(err){
                //发送失败
                console.log(err);
                res.send('验证码失败')
        });
    },
    reg:function(req,res){
        let telphone=req.body.telphone;
        let VerCode=req.body.VerCode;
        let password=req.body.password;
        console.log(telphone,
        VerCode);
        AV.Cloud.verifySmsCode(VerCode,telphone).then(function(){
            //验证成功
            //写入数据库
            // console.log("成功");
            res.send("ok");
            baokuanModel.reg(telphone,password,function (err,data) {
                if(err){
                    console.log(err)
                }else{
                    console.log(data)
                }
            })
        }, function(err){
            console.log("失败");
            res.send('验证码错误')
        });
    }
    
};
module.exports=loginRegisterController;