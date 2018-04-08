/* Created by lixin on 2018/4/3.*/
const myexpress=require('express');
const router = myexpress.Router();
const productController=require('./../controller/productController.js');
router.get('/productDetails.html',productController.productDetails);
module.exports=router;//��·�ɽ��б�¶