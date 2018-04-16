/**
 * Created by fengb on 2018/4/4.
 */

// 登录
const express = require("express");
const routerLR = express.Router();

const baokuanController=require("../controller/loginRegisterController.js");//登录注册的哦

routerLR.post("/login.do",baokuanController.login);
routerLR.post("/Sendmessage.do",baokuanController.Sendmessage);
routerLR.post("/reg.do",baokuanController.reg);

module.exports = routerLR;