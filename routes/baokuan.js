/**
 * Created by Administrator on 2018/4/2 0002.
 */
const express = require("express");
const router = express.Router();
const baokuanController=require("../controller/baokuanController.js")

router.get("/test.do",baokuanController.getAlldata);
module.exports = router;