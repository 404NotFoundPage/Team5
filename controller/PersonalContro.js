
const PersonalModel=require("../dao/PersonalDao.js");
const muilter = require('./../config/multerUtil.js');

const baokuanController={
    PersonalInit(request,response){
        let userId=request.session.user.user_id;
        let sql='select * from t_user where user_id=?';
        PersonalModel.PersonalInit(sql,[userId]).then((data)=>{
            response.send(data[0]);
            console.log(data[0]);
            console.log(request.session.user.user_id);// 取用户id
            //成功？
        }).catch((err)=>{//失败
            console.log(err)
        })
    },
    mtpass(request,response){
        let pass=request.body.pass;
        let userId=request.session.user.user_id;
        let sql='SELECT * FROM t_user WHERE user_id=? AND user_psw=?';
        PersonalModel.PersonalInit(sql,[userId,pass]).then((data)=>{
            if(data.length>0){
                response.send("ok");
            }else{
                response.send("no");
            }
            //成功？
        }).catch((err)=>{//失败
            console.log(err);
        })
    },
    xiugaipwd(request,response){
        let pwd=request.body.pwd;
        let userId=request.session.user.user_id;
        let sql='UPDATE t_user SET user_psw = ? WHERE user_id=?';
        PersonalModel.PersonalInit(sql,[pwd,userId]).then((data)=>{
            // console.log(data);
            if(data){
                response.send("ok");
            }else{
                response.send("no");
            }
            //成功？
        }).catch((err)=>{//失败
            console.log(err);
        })
    },
    Readaddress(request,response){
        let  tiaoshu=parseInt(request.query.tiaoshu); //显示好多条
        console.log("条数"+tiaoshu);
        let  yema=request.query.yema;       //页码
        console.log("页码"+yema);
        let  xiabiao=(yema-1)*tiaoshu;
        let userId=request.session.user.user_id;
    //     console.log(tiaoshu,
    //     yema,
    //     xiabiao,"2222222222222222222222222222222222222222222222222222222222"
    // )
        let sql='SELECT * FROM t_address where user_id=? and add_codition=0 limit ?,?';
        PersonalModel.Readaddress(sql,[userId,xiabiao,tiaoshu]).then((data)=>{
            // console.log(data);
            response.send(data);
            //成功？
        }).catch((err)=>{//失败
            console.log(err);
        })
    },
    delete(request,response){
        let uid=request.query.uid;
        // console.log(uid);
        let sql=' DELETE FROM t_address WHERE addr_id =?';
        PersonalModel.delete(sql,[uid]).then((data)=>{
            response.send("ok");
            //成功？
        }).catch((err)=>{//失败
            console.log(err);
        })
    }
    ,Setdefault(request,response){
        let uid=request.query.uid;
        let add_default=request.query.add_default;
        let sql;
        if(add_default==0){
            sql='UPDATE t_address SET add_default = 0 WHERE 1 = 1;UPDATE t_address  SET add_default = 1 WHERE addr_id = ?';
        }else if(add_default==1){
            sql='UPDATE t_address SET add_default = 0 WHERE addr_id = ?'
        }
        PersonalModel.Readaddress(sql,[uid]).then((data)=>{
            // console.log(data);
           console.log("成功");
            response.send(data);
            //成功？
        }).catch((err)=>{//失败
            console.log(err);
        })
    },
    Newaddress(request,response){
        let addr_pro = request.body.addr_pro;
        let addr_city = request.body.addr_city;
        let addr_area = request.body.addr_area;
        let addr_detail = request.body.addr_detail;
        let addr_person = request.body.addr_person;
        let PhoneNumber = request.body.PhoneNumber;
        let add_default = request.body.add_default;
        let userId=request.session.user.user_id;
        // console.log(addr_pro,
        // addr_city,
        // addr_area,
        // addr_detail,
        // PhoneNumber,
        // add_default);
        let sql;
        if(add_default==1){
            sql='UPDATE t_address SET add_default = 0 WHERE 1 = 1;INSERT INTO t_address VALUES(?,?,?,?,?,?,?,?,?,?,?)'
        }else{
            sql='INSERT INTO t_address VALUES(?,?,?,?,?,?,?,?,?,?,?)';
        }
        PersonalModel.Readaddress(sql,[null,userId,addr_pro,addr_city,addr_area,addr_detail,null,PhoneNumber,addr_person,add_default,0]).then((data)=>{
            // console.log(data);
            // console.log("好");
            response.send("ok");
            //成功？
        }).catch((err)=>{//失败
            // console.log(err);
            // console.log("不好");
            response.send("no")
        })
    },
    QueryOrder(request,response){

        let sql='SELECT t_ord.order_id,t_detail.pro_id,t_pro.pro_price,t_img.pro_img_url,t_pro.pro_name,t_detail.order_detail_amount,t_detail.order_detail_totalPrice,t_ord.order_pay,t_ord.order_status FROM' +
            '  t_order AS t_ord JOIN t_orderdetail AS t_detail ON t_ord.order_id = t_detail.order_id JOIN t_productimg AS t_img ON t_img.pro_id = t_detail.pro_id' +
            ' JOIN t_productinfo AS t_pro ON t_pro.pro_id = t_img.pro_id WHERE t_ord.user_id = ? AND  t_img.pro_img_coditon=0 AND t_img.pro_img_status=0 AND ' +
            't_ord.order_condition=0 AND t_detail.order_detail_condition=0 AND t_pro.pro_condition=0 ';

        let order_pay = request.query.order_pay;
        let  order_status = request.query.order_status;
        let userId=request.session.user.user_id;
        let order_id=request.query.order_id;
        console.log("1111111111111111111111111111111111111111111111111111111111111111");
        console.log(order_id);
        console.log("1111111111111111111111111111111111111111111111111111111111111111");
        if(request.query.order_pay){
            if(order_pay==1){
                if(order_status==1){
                    console.log("已发货");
                    sql = sql+' and t_ord.order_pay=1 and t_ord.order_status=1'
                }else{
                    console.log("未发货");
                    sql = sql+' and t_ord.order_pay=1 and t_ord.order_status=0'
                }
            }else{
                console.log("待支付");
                sql = sql+ ' and t_ord.order_pay=0 and t_ord.order_status=0'
            }
        }else{
            console.log("全部订单")
        }

        if(order_id){
            sql+=" and t_ord.order_id="+order_id+"";
        }


        // sql = sql+" GROUP BY t_ord.user_id";

        console.log(sql);

        PersonalModel.QueryOrder(sql,[userId]).then((data)=>{
            response.send(data);
            //成功？
        }).catch((err)=>{//失败
            console.log(err);
        })
    },
    Collect(request,response){
        let userId=request.session.user.user_id;
        let sql='SELECT t_collection.pro_id,t_productimg.pro_img_url FROM t_collection,t_productimg WHERE t_collection.user_id=? AND t_collection.col_condition=0 AND t_collection.pro_id=t_productimg.pro_id AND t_productimg.pro_img_coditon=0 AND pro_img_status=0 group by t_collection.pro_id';
        PersonalModel.QueryOrder(sql,[userId]).then((data)=>{
            response.send(data);
        }).catch((err)=>{//失败
            console.log(err);
        })
    },
    quxiao(request,response){
        let uid=request.body.uid;
        let sql='UPDATE t_collection SET col_condition = 1 WHERE pro_id= ?';
        PersonalModel.QueryOrder(sql,[uid]).then((data)=>{
            response.send(data);
        }).catch((err)=>{//失败
            console.log(err);
        })
    },
    getaSC(request,response){
        let xianshi=parseInt(request.query.xian);   //显示多少条
        let CurrentPage=request.query.Curre; //页码
        let xiabiao=(CurrentPage-1)*xianshi;
        let userId=request.session.user.user_id;
        let sql='SELECT t_shoppingcart.pro_id,t_productimg.pro_img_url,t_productinfo.pro_name,t_producttype.pro_type_name,t_productinfo.pro_price,t_shoppingcart.sc_amount,t_shoppingcart.sc_id FROM t_shoppingcart,t_productinfo,t_productimg,t_producttype WHERE t_shoppingcart.pro_id=t_productinfo.pro_id AND t_productimg.pro_id=t_shoppingcart.pro_id AND t_productimg.pro_img_coditon=0 AND t_productinfo.pro_condition=0 AND t_shoppingcart.sc_condition=0 AND t_productimg.pro_img_status=0 AND t_shoppingcart.user_id=? AND t_producttype.pro_type_id=t_productinfo.pro_type_id GROUP BY t_shoppingcart.sc_id limit ?,?';
        PersonalModel.QueryOrder(sql,[userId,xiabiao,xianshi]).then((data)=>{
            response.send(data);
        }).catch((err)=>{//失败
            console.log(err);
        })
    },
    Number(request,response){
        let num=request.body.num;
        let sc_id=request.body.sc_id;
        let userId=request.session.user.user_id;
        let sql='UPDATE t_shoppingcart SET sc_amount =? WHERE user_id= ? and sc_id=?';
        PersonalModel.QueryOrder(sql,[num,userId,sc_id]).then((data)=>{
            response.send(data);
        }).catch((err)=>{//失败
            console.log(err);
        })
    },
    goudel(request,response){
        let kkk=request.body.kkk;
        if(kkk){
            let sql="UPDATE t_shoppingcart SET sc_condition =1 WHERE sc_id  IN("+kkk+")";
            PersonalModel.QueryOrder(sql,[]).then((data)=>{
                response.send(data);

            }).catch((err)=>{//失败
                console.log(err);
            })
        }else{
            response.send("ff");
        }
    },
    jointhe(request,response){
        let pro_id=request.body.pro_id;
        let userId=request.session.user.user_id;
        let sql="INSERT INTO t_collection VALUES (?,?,?,?)";
        PersonalModel.QueryOrder(sql,[null,userId,pro_id,0]).then((data)=>{
            response.send("ok");
        }).catch((err)=>{//失败
            response.send("no");
            console.log(err);
        })
    },
    collection(request,response){
        let uid=request.query.uid;
        let userId=request.session.user.user_id;
        let sql="INSERT INTO t_collection VALUES (?,?,?,?)";
        PersonalModel.QueryOrder(sql,[null,userId,uid,0]).then((data)=>{
            response.send("ok");
        }).catch((err)=>{//失败
            console.log(err);
        })
    },
    Deleteorder(request,response){
        let uid=request.body.uid;
        let sql="UPDATE t_orderdetail SET order_detail_condition =1 WHERE order_id=?";

        PersonalModel.QueryOrder(sql,[uid]).then((data)=>{
            // console.log(data);
            response.send("ok");
        }).catch((err)=>{//失败
            console.log(err);
        })
    },
    Afewpages(request,response){
        let userId=request.session.user.user_id;
        let sql="SELECT COUNT(1) as zy FROM t_address WHERE user_id=? ";
        PersonalModel.QueryOrder(sql,[userId]).then((data)=>{
            response.send(data);
        }).catch((err)=>{//失败
            console.log(err);
        })
    },
    Afewpages2(request,response){
        let userId=request.session.user.user_id;
        let sql="SELECT COUNT(1) AS zy FROM t_shoppingcart WHERE user_id=?  AND sc_condition=0";
        PersonalModel.QueryOrder(sql,[userId]).then((data)=>{
            response.send(data);
        }).catch((err)=>{//失败
            console.log(err);
        })
    },
    editPersonInfo(request,response){
        let user_id=request.session.user.user_id;
        let user_name=request.query.user_name;
        let user_login=request.query.user_login;
        let user_tel=request.query.user_tel;
        let user_sex=request.query.user_sex;
        PersonalModel.editPersonInfo(user_id,user_name,user_login,user_tel,user_sex).then((data)=>{
            response.send({flag:"1",data:data});
        }).catch((err)=>{//失败
            console.log(err);
        })
    },
    uploadPersonImg(req,res){
        let user_id=req.session.user.user_id;
        let user_pic;
        var upload=muilter.array('txtFile');
        upload(req, res, function (err) {
            //添加错误处理
            if (err) {
                return  console.log(err);
            }
            //文件信息在req.file或者req.files中显示。
            let uploadsrc =req.files[0].destination+"/";
            let uploadfilename = req.files[0].filename;
            let uploadsrcstring= uploadsrc+uploadfilename;
            uploadsrcstring = uploadsrcstring.substring(2);
            uploadsrcstring = "http://localhost:1111/"+uploadsrcstring;

            user_pic="images/buyerImg/"+uploadfilename;
            PersonalModel.uploadPersonImg(user_id,user_pic,function(err,data){
                console.log(data)
            })
            console.log(uploadsrcstring)
            res.send(user_pic)
        });
    }
};
module.exports=baokuanController;