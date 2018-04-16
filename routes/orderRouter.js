/**
 * Created by Administrator on 2018/4/8 0008.
 */
const orderController=require('./../controller/orderController.js');
const myexpress=require('express');
const router=myexpress.Router();
router.get('/weixinPayment.html',orderController.weixinpayment);
router.get('/zfbPayment.html',orderController.zfbPayment);
router.get('/OrderGeneration.html',orderController.OrderGeneration);
router.get('/PaymentSuccess.html',orderController.PaymentSuccess);
module.exports=router;
