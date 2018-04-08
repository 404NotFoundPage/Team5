/**
 * Created by X on 2018/4/3.
 */
const bf_tj_controller =require("./../controller/bf_tj_controller");
const express = require("express");
const router = express.Router();

router.get("/baifangtuijian.html",bf_tj_controller.init);
router.get("/chaju.do",bf_tj_controller.chaju);
router.get("/baijian.do",bf_tj_controller.baijian);
router.get("/diplayCase.do",bf_tj_controller.displayCase);
router.get("/displayCase2.do",bf_tj_controller.displayCase2);
router.get("/displayCase3.do",bf_tj_controller.displayCase3);
router.get("/soucang.do",bf_tj_controller.soucang);
router.get("/cancelsoucang.do",bf_tj_controller.cancelsoucang);

router.get("/sign.do",bf_tj_controller.sign);
router.get("/logo.do",bf_tj_controller.logo);
router.get("/shoppingCart.do",bf_tj_controller.shoppingCart);


module.exports = router;