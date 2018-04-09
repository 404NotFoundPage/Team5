/*Created by lixin on 2018/4/8.*/
const indexModal=require('./../dao/indexModal.js');
module.exports={
    index:function(request,response){
        console.log(request.query)
        indexModal.index(function(err,data){
            let newimg=[],newid=[],newprice=[],newname=[];//ÐÂÆ·
            let baoimg=[],baoid=[],baoprice=[],baoname=[]; //±¬¿î
            for(var i=0;i<data.length;i++){
                if(data[i].pro_bao==1&&data[i].pro_new==0){
                    baoname.push(data[i].pro_name);
                    baoprice.push(data[i].pro_price);
                    baoimg.push(data[i].pro_img_url.split(','));
                    baoid.push(data[i].pro_id);
                }else if(data[i].pro_bao==0&&data[i].pro_new==1){
                    newname.push(data[i].pro_name);
                    newprice.push(data[i].pro_price);
                    newimg.push(data[i].pro_img_url.split(','));
                    newid.push(data[i].pro_id);
                }
            }
            if(request.session.user){
                response.render('index.html',{"baoname":baoname,"baoprice":baoprice,"baoimg":baoimg,"baoid":baoid,
                    "newname":newname, "newprice":newprice,"newimg":newimg,"newid":newid,"username":request.session.user})
            }else{
                response.render('index.html',{"baoname":baoname,"baoprice":baoprice,"baoimg":baoimg,"baoid":baoid,
                    "newname":newname, "newprice":newprice,"newimg":newimg,"newid":newid,"username":request.session.user})
            }
        })
    },
    collectpro:function(request,response){
        let user_id=request.session.userid;
        let pro_id=request.query.pro_id;
        user_id=1;
        if(user_id){
            indexModal.collectpro(user_id,pro_id,function(err,data){
                if(err==null){
                    response.send('ok');
                }else{
                    response.send('fail');
                }
            });
        }else{
            response.send('notLogin');
        }

    },
    nocollect:function(request,response){
        let user_id=request.session.userid;
        let pro_id=request.query.pro_id;
        user_id=1;
        if(user_id){
            indexModal.nocollect(user_id,pro_id,function(err,data){
                if(err==null){
                    response.send('ok');
                }else{
                    response.send('fail');
                }
            });
        }else{
            response.send('notLogin');
        }
    }
};