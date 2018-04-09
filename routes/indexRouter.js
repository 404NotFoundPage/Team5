/* Created by lixin on 2018/4/8.*/
const myexpress=require('express');
const router = myexpress.Router();
const indexController=require('./../controller/indexController.js');
router.get('/index.html',indexController.index);
router.get('/collectpro.do',indexController.collectpro)
router.get('/nocollect.do',indexController.nocollect)
module.exports=router;