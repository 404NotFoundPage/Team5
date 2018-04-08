/**
 * Created by Administrator on 2018/4/2 0002.
 */
const express = require("express");
const router = express.Router();
const baokuanController=require("../controller/baokuanController.js");

router.get("/test.do",baokuanController.buypro);
router.get("/getload.do",baokuanController.getAlldata);
router.get("/collect.do",baokuanController.collectdata);
router.get("/collectcancle.do",baokuanController.collectcancledata);
module.exports = router;