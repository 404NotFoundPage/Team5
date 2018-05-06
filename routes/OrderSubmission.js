const express = require("express");
const router = express.Router();
const ordersubmit=require("../controller/ordersubmit.js")

router.get("/hqshdz.do",ordersubmit.hqshdz);
router.get("/hcrshdz.do",ordersubmit.hcrshdz);
router.get("/updatahcrshdz.do",ordersubmit.updatahcrshdz);
router.get("/dingdanbiao.do",ordersubmit. dingdanbiao); //表格里面的商品图片
router.get("/tijiaodingdan.do",ordersubmit. tijiaodingdan); //提交订单的的所有数据
module.exports = router;