/**
 * Created by Administrator on 2018/4/8.
 */
const myexpress=require('express');
const router = myexpress.Router();
const indexController=require('./../controller/indexController.js');
router.get('/index.html',indexController.index);
module.exports=router;