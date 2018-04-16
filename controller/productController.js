/* Created by lixin on 2018/4/3.*/
const productModal=require('./../modal/productModal.js');
module.exports={
    Product:function(request,response){
        if(request.session.user){
            response.render('productDetails',{"username":request.session.user.username});
        }else{
            response.redirect('login.html')
        }
    },
    productDetails:function(request,response){
        request.session.pro_id=8;
        request.session.user ="tom";
        let pro_id=request.session.pro_id;
        productModal.productDetail(pro_id,function(err,data){
            console.log(data[0].pro_img_url);

            let imgUrlList=data[0].pro_img_url.split(',');//产品的图片路劲
            let titleList=data[0].pro_text_title.split('@');//产品各模块的标题
            let descriptList=data[0].pro_text_discribe.split('@');//产品各模块的描述
            let productInfo=data[0].pro_info;               //产品的描述
            let price=data[0].pro_price;                    //产品的价格
            let name=data[0].pro_name;                      //产品的名称
            let size=data[0].pro_size;                      //产品的尺寸
            let salesNum=data[0].pro_deal_amount;           //产品销量
            let detail=data[0].pro_detail;                  //养护
            let material=data[0].pro_material;              //材质
            response.render('productDetails',{"imgurllist":imgUrlList,"titlelist":titleList,"descriptlist":descriptList,
                "info":productInfo,"price":price,"name":name,"size":size,"salesNum":salesNum,"detail":detail,
                "material":material,"username":request.session.user});
        })
    },
    comment:function(request,response){
        let pro_id=request.body.pro_id;
        let pagesize=request.body.pagesize;
        let currentpage=request.body.currentpage;
        productModal.comment(pro_id,pagesize,currentpage,function(err,data){
            let commentId=[];            //评论编号
            let usernameList=[];        //评论用户名数组
            let commenttextList=[];     //评论数组
            let commenttimeList=[];     //评论时间数组
            let userpicList=[];         //用户头像数组
            for(var j=0;j<data.length;j++){
                usernameList.push(data[j].user_name);
                commenttextList.push([data[j].com_message_count]);
                commenttimeList.push(data[j].com_message_date);
                userpicList.push(data[j].user_pic);
                commentId.push(data[j].com_id);
            }
            response.send({usernameList,commenttextList,commenttimeList,userpicList,commentId});
        });
    },
    gettotalcount:function(request,response){
        let pro_id=request.body.pro_id;
        productModal.gettotalcount(pro_id,function(err,data){
            let totalcount=data.length;        //评论总数
            response.send({totalcount});
        });
    },
    reply:function(request,response){
        let pro_id=request.body.pro_id;
        productModal.reply(pro_id,function(err,data){
            let comId=[];
            let reply=[];
            for(var j=0;j<data.length;j++){
                comId.push(data[j].com_id);
                reply.push(data[j].com_reply);
            }
            response.send({comId,reply})
        })
    }
};
