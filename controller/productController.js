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
        request.session.pro_id=request.query.pro_id;
        let pro_id=parseInt(request.session.pro_id);
        productModal.productDetail(pro_id,function(err,data){
            let imgUrlList=data[0].pro_img_url.split(',');//��Ʒ��ͼƬ·��
            let titleList=data[0].pro_text_title.split('@');//��Ʒ��ģ��ı���
            let descriptList=data[0].pro_text_discribe.split('@');//��Ʒ��ģ�������
            let productInfo=data[0].pro_info;               //��Ʒ������
            let price=data[0].pro_price;                    //��Ʒ�ļ۸�
            let name=data[0].pro_name;                      //��Ʒ������
            let size=data[0].pro_size;                      //��Ʒ�ĳߴ�
            let salesNum=data[0].pro_deal_amount;           //��Ʒ����
            let detail=data[0].pro_detail;                  //����
            let material=data[0].pro_material;              //����
            if(request.session.user){
                response.render("productDetails.html",{"imgurllist":imgUrlList,"titlelist":titleList,"descriptlist":descriptList,
                    "info":productInfo,"price":price,"name":name,"size":size,"salesNum":salesNum,"detail":detail,
                    "material":material,"username":request.session.user})
            }else{
                response.render("productDetails.html",{"imgurllist":imgUrlList,"titlelist":titleList,"descriptlist":descriptList,
                    "info":productInfo,"price":price,"name":name,"size":size,"salesNum":salesNum,"detail":detail,
                    "material":material,"username":request.session.user})
            }
        })
    },
    comment:function(request,response){
        let pro_id=request.body.pro_id;
        let pagesize=request.body.pagesize;
        let currentpage=request.body.currentpage;
        productModal.comment(pro_id,pagesize,currentpage,function(err,data){
            let commentId=[];            //���۱��
            let usernameList=[];        //�����û�������
            let commenttextList=[];     //��������
            let commenttimeList=[];     //����ʱ������
            let userpicList=[];         //�û�ͷ������
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
            let totalcount=data.length;        //��������
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