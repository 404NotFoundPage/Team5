/**
 * Created by X on 2018/4/3.
 */
const bf_tj_controller =require("./../controller/bf_tj_controller");
const express = require("express");
const router = express.Router();
/*-------------------摆放推荐---------------------------------*/
router.get("/baifangtuijian.html",bf_tj_controller.init);
router.get("/chaju.do",bf_tj_controller.chaju);
router.get("/baijian.do",bf_tj_controller.baijian);
router.get("/diplayCase.do",bf_tj_controller.displayCase);
router.get("/displayCase2.do",bf_tj_controller.displayCase2);
router.get("/displayCase3.do",bf_tj_controller.displayCase3);
router.get("/soucang.do",bf_tj_controller.soucang);
router.get("/cancelsoucang.do",bf_tj_controller.cancelsoucang);
/*--------------------导航地址拦截-----------------------------*/
router.get("/sign.do",bf_tj_controller.sign);
router.get("/logo.do",bf_tj_controller.logo);
router.get("/person.do",bf_tj_controller.person);
router.get("/shoppingCart.do",bf_tj_controller.shoppingCart);
router.get("/baokuan.html",bf_tj_controller.baokuan);
/*---------------------首页拦截------------------------------------------*/
//router.get("/index.html",bf_tj_controller.index);
/*------------------------茶具*/
router.get("/chaju.html",bf_tj_controller.chajuzx)
/*------------------------花瓶*/
router.get("/huaping.html",bf_tj_controller.huapingzx)
/*------------------------摆件*/
router.get("/baijian.html",bf_tj_controller.baijianzx)
/*------------------------/*登录*/
router.get("/login.html",bf_tj_controller.logo);
router.get("/register.html",bf_tj_controller.sign);
/*个人中心*/
router.get("/PersonalCenter.html",bf_tj_controller.person)
/*------------------------品牌故事*/
router.get("/brandstory.html",bf_tj_controller.brandstory);
router.get("/ciqiwenhua_zx.html",bf_tj_controller.ciqiwenhua);
/*------------------------艺术馆*/
router.get("/musem.html",bf_tj_controller.musem);
/*生成订单*/
router.get("/OrderSubmission.html",bf_tj_controller.OrderSubmission)
/*------支付成功页面拦截-------------*/
router.get("/OrderGeneration.html",bf_tj_controller.OrderGeneration);
router.get("/OrderPayment.html",bf_tj_controller.OrderPayment);
router.get("/PaymentSuccess.html",bf_tj_controller.PaymentSuccess);
router.get("/weixinPayment.html",bf_tj_controller.weixinPayment);
router.get("/zfbPayment.html",bf_tj_controller.zfbPayment);








module.exports = router;