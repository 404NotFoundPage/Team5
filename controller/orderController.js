/**
 * Created by Administrator on 2018/4/8 0008.
 */
const orderModal=require('./../dao/orderModal.js');
module.exports={
    weixinpayment:function(request,response){
        //console.log(111)
        //console.log(request.query)
        let order_id=request.query.order_id;
        response.render('weixinpayment',{"order_id":order_id})
    },
    zfbPayment:function(request,response){
        let zorder_id=request.query.zorder_id;
        response.render('zfbPayment',{"zorder_id":zorder_id})
    },
    OrderGeneration:function(request,response){
        let Genera_id=request.query.Genera_id;
        response.render('OrderGeneration',{"Genera_id":Genera_id})
    },
    PaymentSuccess:function(request,response){
        let Payment_id=request.query.Payment_id;
        let Payment_je=request.query.Payment_je;
        response.render('PaymentSuccess',{"Payment_id":Payment_id,"Payment_je":Payment_je});
        //let Payment_je=request.query.Payment_je;
        //response.render('PaymentSuccess',{"Payment_je":Payment_je});
    }
};