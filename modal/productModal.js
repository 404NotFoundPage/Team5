/* Created by lixin on 2018/3/12.*/
let db = require('./../config/sqlConfig.js');
module.exports={
    productDetail:function(pro_id,callback){
        let sql="select * from t_productinfo,t_producttext,t_productimg where t_productinfo.pro_id=t_producttext.pro_id and " +
            " t_productinfo.pro_id=t_productimg.pro_id and t_producttext.pro_id=?"
        db.connect(sql,pro_id,callback);
    },
    comment:function(pro_id,pagesize,currentpage,callback){
        let start=(currentpage-1)*pagesize;
        let end=parseInt(pagesize);
        let arr=[pro_id,start,end];
        let sql="select * from t_comment,t_user where t_user.user_id=t_comment.user_id and t_comment.pro_id=? limit ?,?"
        db.connect(sql,arr,callback);
    },
    gettotalcount:function(pro_id,callback){
        let sql="select * from t_comment,t_user where t_user.user_id=t_comment.user_id and t_comment.pro_id=?";
        db.connect(sql,pro_id,callback);
    },
    reply:function(pro_id,callback){
        let sql="select * from t_comment where com_reply_state=1 and pro_id=?";
        db.connect(sql,pro_id,callback);
    }
};