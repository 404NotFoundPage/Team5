/* Created by lixin on 2018/4/3.*/
const productModal=require('./../modal/productModal.js');
module.exports={
    Product:function(request,response){
        if(request.session.user){
            response.render('product',{"username":request.session.user.username});
        }else{
            response.redirect('login.html')
        }
    },
    productDetails:function(request,response){
        request.session.pro_id=8;
        let pro_id=request.session.pro_id;
        //let pro_id=8;
        productModal.productDetail(pro_id,function(err,data){
            response.render('productDetails1',{"data":data});
        })
    }
};