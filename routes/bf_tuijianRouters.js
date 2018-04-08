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

/*---------------------首页拦截------------------------------------------*/
router.get("/index.html",bf_tj_controller.index);
/*------------------------茶具*/

/*------------------------花瓶*/

/*------------------------摆件*/

/*------------------------/*登录*/
router.get("/login.html",bf_tj_controller.logo);
router.get("/register.html",bf_tj_controller.sign);
/*------------------------品牌故事*/
router.get("/brandstory.html",bf_tj_controller.brandstory);
router.get("/ciqiwenhua_zx.html",bf_tj_controller.ciqiwenhua);
/*------------------------艺术馆*/

module.exports = router;