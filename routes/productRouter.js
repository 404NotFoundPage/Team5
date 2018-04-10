/*Created by lixin on 2018/4/3.*/
const myexpress=require('express');
const router = myexpress.Router();
const productController=require('./../controller/productController.js');
router.get('/productDetails.html',productController.productDetails);
router.post('/comment.do',productController.comment);
router.post('/gettotalcount.do',productController.gettotalcount);
router.post('/reply.do',productController.reply);
module.exports=router;//对路由进行暴露